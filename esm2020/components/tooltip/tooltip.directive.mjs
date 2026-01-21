import { Directive, HostListener, Input, Inject, HostBinding } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { take, takeUntil } from 'rxjs/operators';
import { UpTooltipComponent } from './tooltip.component';
import { TooltipConstantsProvider, TooltipPositionType, TooltipTriggerType } from './tooltip.constants';
import { WindowProvider } from '../../src/lib/providers/window.provider';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { fromEvent, Subject } from 'rxjs';
import { NavigatorProvider } from '../../src/lib/providers/navigator.provider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/cdk/platform";
export class UpTooltipDirective {
    constructor(overlay, elementRef, overlayPositionBuilder, platform, window, navigator, tooltipConstants) {
        this.overlay = overlay;
        this.elementRef = elementRef;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.platform = platform;
        this.window = window;
        this.navigator = navigator;
        this.tooltipConstants = tooltipConstants;
        this.content = '';
        this.trigger = TooltipTriggerType.HOVER;
        this.disabledTooltip = false;
        this.persistOnHoverOff = false;
        this.longPress = 500;
        this.elementClass = 'up-tooltip';
        this.passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });
        this.destroyListeners = new Subject();
        this.hide = () => {
            this.overlayRef?.detach();
            this.setCloseTimer(undefined);
        };
        this.clearCloseTimer = () => {
            this.window.clearTimeout(this.closeTimer);
            this.setCloseTimer(undefined);
        };
        this.touchStart = () => {
            clearTimeout(this.touchPressTimeout);
            this.touchPressTimeout = setTimeout(() => this.show(), this.longPress);
        };
        this.touchEnd = () => {
            clearTimeout(this.touchPressTimeout);
            this.hide();
        };
        this.mouseEnter = () => {
            if (this.isMobilePlatform()) {
                return;
            }
            if (this.hasCloseTimer) {
                this.clearCloseTimer();
            }
            if (this.hasHoverTrigger) {
                this.show();
            }
        };
        this.mouseOut = () => {
            if (this.isMobilePlatform()) {
                return;
            }
            if (this.isCloseTimerEnabled) {
                this.setCloseTimer(this.window.setTimeout(this.hide, this.tooltipConstants.hoverOffPersistTime));
                return;
            }
            if (this.hasHoverTrigger) {
                this.hide();
            }
        };
        this.click = (event) => {
            if (this.hasClickTrigger) {
                event.stopPropagation();
                this.show();
            }
            else if (this.hasHoverTrigger && this.overlayRef.hasAttached()) {
                this.hide();
            }
        };
    }
    ngOnInit() {
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(this.elementRef)
            .withPositions([
            this.tooltipConstants.positions.get(TooltipPositionType.RIGHT),
            this.tooltipConstants.positions.get(TooltipPositionType.LEFT),
            this.tooltipConstants.positions.get(TooltipPositionType.BOTTOM),
            this.tooltipConstants.positions.get(TooltipPositionType.TOP)
        ]);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
        this.addEventListeners();
    }
    ngOnChanges(changes) {
        if (this.overlayRef?.hasAttached() && changes.tooltipContextData) {
            this.tooltipRef.instance.templateContextData = changes.tooltipContextData.currentValue;
        }
        if (changes.trigger && !changes.trigger.firstChange) {
            this.removeListeners();
            this.addEventListeners();
        }
    }
    ngOnDestroy() {
        if (this.touchPressTimeout) {
            clearTimeout(this.touchPressTimeout);
        }
        this.hide();
        this.removeListeners();
    }
    isIPad() {
        return this.navigator.platform === 'MacIntel' && this.navigator.maxTouchPoints > 1;
    }
    isMobilePlatform() {
        return this.platform.ANDROID || this.platform.IOS || this.isIPad();
    }
    get hasHoverTrigger() {
        return this.trigger === TooltipTriggerType.HOVER;
    }
    get hasClickTrigger() {
        return this.trigger === TooltipTriggerType.CLICK;
    }
    get isCloseTimerEnabled() {
        return this.persistOnHoverOff && this.hasHoverTrigger;
    }
    get hasCloseTimer() {
        return !!this.closeTimer;
    }
    setCloseTimer(id) {
        this.closeTimer = id;
    }
    show() {
        if (this.overlayRef.hasAttached() || this.disabledTooltip) {
            return;
        }
        const tooltipPortal = new ComponentPortal(UpTooltipComponent);
        this.tooltipRef = this.overlayRef.attach(tooltipPortal);
        this.tooltipRef.instance.content = this.content;
        this.tooltipRef.instance.templateContextData = this.tooltipContextData;
        if (this.isCloseTimerEnabled) {
            this.tooltipRef.instance.mouseEnter.pipe(take(1)).subscribe(this.clearCloseTimer);
            this.tooltipRef.instance.mouseLeave.pipe(take(1)).subscribe(this.hide);
        }
    }
    documentClick() {
        if (this.hasClickTrigger) {
            this.hide();
        }
    }
    addEventListeners() {
        if (this.isMobilePlatform() && this.hasHoverTrigger) {
            this.subscribeToTouchEvents();
        }
        else if (this.hasHoverTrigger) {
            this.subscribeToMouseEvents();
        }
        else {
            this.subscribeToClickEvents();
        }
    }
    subscribeToClickEvents() {
        this.addListener('click', this.click, {});
    }
    subscribeToMouseEvents() {
        this.addListener('mouseenter', this.mouseEnter, {});
        this.addListener('mouseover', this.mouseEnter, {});
        this.addListener('mouseout', this.mouseOut, {});
        this.addListener('click', this.click, {});
    }
    subscribeToTouchEvents() {
        this.addListener('touchstart', this.touchStart, this.passiveEventListenerOptions);
        this.addListener('touchend', this.touchEnd, this.passiveEventListenerOptions);
        this.addListener('touchcancel', this.touchEnd, this.passiveEventListenerOptions);
    }
    addListener(eventName, handler, options) {
        fromEvent(this.elementRef.nativeElement, eventName, options)
            .pipe(takeUntil(this.destroyListeners))
            .subscribe((event) => handler(event));
    }
    removeListeners() {
        this.destroyListeners.next();
    }
}
UpTooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipDirective, deps: [{ token: i1.Overlay }, { token: i0.ElementRef }, { token: i1.OverlayPositionBuilder }, { token: i2.Platform }, { token: WindowProvider }, { token: NavigatorProvider }, { token: TooltipConstantsProvider }], target: i0.ɵɵFactoryTarget.Directive });
UpTooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpTooltipDirective, selector: "[upTooltip]", inputs: { content: ["upTooltip", "content"], trigger: "trigger", disabledTooltip: "disabledTooltip", persistOnHoverOff: "persistOnHoverOff", tooltipContextData: "tooltipContextData", longPress: "longPress" }, host: { listeners: { "document:click": "documentClick()" }, properties: { "class": "this.elementClass" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTooltip]'
                }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i1.OverlayPositionBuilder }, { type: i2.Platform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WindowProvider]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NavigatorProvider]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [TooltipConstantsProvider]
                }] }]; }, propDecorators: { content: [{
                type: Input,
                args: ['upTooltip']
            }], trigger: [{
                type: Input
            }], disabledTooltip: [{
                type: Input
            }], persistOnHoverOff: [{
                type: Input
            }], tooltipContextData: [{
                type: Input
            }], longPress: [{
                type: Input
            }], elementClass: [{
                type: HostBinding,
                args: ['class']
            }], documentClick: [{
                type: HostListener,
                args: ['document:click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBS1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixtQkFBbUIsRUFFbkIsa0JBQWtCLEVBQ25CLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFvQixjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsK0JBQStCLEVBQVksTUFBTSx1QkFBdUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQXVCLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFLcEcsTUFBTSxPQUFPLGtCQUFrQjtJQWtCN0IsWUFDVSxPQUFnQixFQUNoQixVQUFzQixFQUN0QixzQkFBOEMsRUFDOUMsUUFBa0IsRUFDTSxNQUF3QixFQUNyQixTQUE4QixFQUN2QixnQkFBa0M7UUFOcEUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNNLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3JC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a0I7MkZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7OzBCQXdCSSxNQUFNOzJCQUFDLGNBQWM7OzBCQUNyQixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBQ3hCLE1BQU07MkJBQUMsd0JBQXdCOzRDQXhCZCxPQUFPO3NCQUExQixLQUFLO3VCQUFDLFdBQVc7Z0JBQ1QsT0FBTztzQkFBZixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVnQixZQUFZO3NCQUFqQyxXQUFXO3VCQUFDLE9BQU87Z0JBZ0twQixhQUFhO3NCQURaLFlBQVk7dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBIb3N0QmluZGluZyxcbiAgVGVtcGxhdGVSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVBvc2l0aW9uQnVpbGRlciwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgdGFrZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXBUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBUb29sdGlwQ29uc3RhbnRzLFxuICBUb29sdGlwQ29uc3RhbnRzUHJvdmlkZXIsXG4gIFRvb2x0aXBQb3NpdGlvblR5cGUsXG4gIFRvb2x0aXBUcmlnZ2VyLFxuICBUb29sdGlwVHJpZ2dlclR5cGVcbn0gZnJvbSAnLi90b29sdGlwLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBXaW5kb3dQcm9wZXJ0aWVzLCBXaW5kb3dQcm92aWRlciB9IGZyb20gJy4uLy4uL3NyYy9saWIvcHJvdmlkZXJzL3dpbmRvdy5wcm92aWRlcic7XG5pbXBvcnQgeyBub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zLCBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5hdmlnYXRvclByb3BlcnRpZXMsIE5hdmlnYXRvclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc3JjL2xpYi9wcm92aWRlcnMvbmF2aWdhdG9yLnByb3ZpZGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VwVG9vbHRpcF0nXG59KVxuZXhwb3J0IGNsYXNzIFVwVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoJ3VwVG9vbHRpcCcpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XG4gIEBJbnB1dCgpIHRyaWdnZXI6IFRvb2x0aXBUcmlnZ2VyID0gVG9vbHRpcFRyaWdnZXJUeXBlLkhPVkVSO1xuICBASW5wdXQoKSBkaXNhYmxlZFRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgcGVyc2lzdE9uSG92ZXJPZmYgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcENvbnRleHREYXRhPzogb2JqZWN0O1xuICBASW5wdXQoKSBsb25nUHJlc3MgPSA1MDA7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGVsZW1lbnRDbGFzcyA9ICd1cC10b29sdGlwJztcblxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgY2xvc2VUaW1lcj86IG51bWJlcjtcbiAgcHJpdmF0ZSB0b29sdGlwUmVmOiBDb21wb25lbnRSZWY8VXBUb29sdGlwQ29tcG9uZW50PjtcblxuICB0b3VjaFByZXNzVGltZW91dDtcbiAgcGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zID0gbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyh7IHBhc3NpdmU6IHRydWUgfSk7XG4gIGRlc3Ryb3lMaXN0ZW5lcnM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25CdWlsZGVyOiBPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoV2luZG93UHJvdmlkZXIpIHByaXZhdGUgd2luZG93OiBXaW5kb3dQcm9wZXJ0aWVzLFxuICAgIEBJbmplY3QoTmF2aWdhdG9yUHJvdmlkZXIpIHByaXZhdGUgbmF2aWdhdG9yOiBOYXZpZ2F0b3JQcm9wZXJ0aWVzLFxuICAgIEBJbmplY3QoVG9vbHRpcENvbnN0YW50c1Byb3ZpZGVyKSBwcml2YXRlIHRvb2x0aXBDb25zdGFudHM6IFRvb2x0aXBDb25zdGFudHNcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlQb3NpdGlvbkJ1aWxkZXJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudFJlZilcbiAgICAgIC53aXRoUG9zaXRpb25zKFtcbiAgICAgICAgdGhpcy50b29sdGlwQ29uc3RhbnRzLnBvc2l0aW9ucy5nZXQoVG9vbHRpcFBvc2l0aW9uVHlwZS5SSUdIVCksXG4gICAgICAgIHRoaXMudG9vbHRpcENvbnN0YW50cy5wb3NpdGlvbnMuZ2V0KFRvb2x0aXBQb3NpdGlvblR5cGUuTEVGVCksXG4gICAgICAgIHRoaXMudG9vbHRpcENvbnN0YW50cy5wb3NpdGlvbnMuZ2V0KFRvb2x0aXBQb3NpdGlvblR5cGUuQk9UVE9NKSxcbiAgICAgICAgdGhpcy50b29sdGlwQ29uc3RhbnRzLnBvc2l0aW9ucy5nZXQoVG9vbHRpcFBvc2l0aW9uVHlwZS5UT1ApXG4gICAgICBdKTtcblxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpXG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWY/Lmhhc0F0dGFjaGVkKCkgJiYgY2hhbmdlcy50b29sdGlwQ29udGV4dERhdGEpIHtcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS50ZW1wbGF0ZUNvbnRleHREYXRhID0gY2hhbmdlcy50b29sdGlwQ29udGV4dERhdGEuY3VycmVudFZhbHVlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnRyaWdnZXIgJiYgIWNoYW5nZXMudHJpZ2dlci5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50b3VjaFByZXNzVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hQcmVzc1RpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmhpZGUoKTtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgaXNJUGFkKCkge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiB0aGlzLm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDE7XG4gIH1cblxuICBpc01vYmlsZVBsYXRmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtLkFORFJPSUQgfHwgdGhpcy5wbGF0Zm9ybS5JT1MgfHwgdGhpcy5pc0lQYWQoKTtcbiAgfVxuXG4gIGdldCBoYXNIb3ZlclRyaWdnZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlciA9PT0gVG9vbHRpcFRyaWdnZXJUeXBlLkhPVkVSO1xuICB9XG5cbiAgZ2V0IGhhc0NsaWNrVHJpZ2dlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyID09PSBUb29sdGlwVHJpZ2dlclR5cGUuQ0xJQ0s7XG4gIH1cblxuICBnZXQgaXNDbG9zZVRpbWVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzaXN0T25Ib3Zlck9mZiAmJiB0aGlzLmhhc0hvdmVyVHJpZ2dlcjtcbiAgfVxuXG4gIGdldCBoYXNDbG9zZVRpbWVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuY2xvc2VUaW1lcjtcbiAgfVxuXG4gIHNldENsb3NlVGltZXIoaWQ6IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VUaW1lciA9IGlkO1xuICB9XG5cbiAgcmVhZG9ubHkgaGlkZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm92ZXJsYXlSZWY/LmRldGFjaCgpO1xuICAgIHRoaXMuc2V0Q2xvc2VUaW1lcih1bmRlZmluZWQpO1xuICB9O1xuXG4gIHJlYWRvbmx5IGNsZWFyQ2xvc2VUaW1lciA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLndpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5jbG9zZVRpbWVyKTtcbiAgICB0aGlzLnNldENsb3NlVGltZXIodW5kZWZpbmVkKTtcbiAgfTtcblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSB8fCB0aGlzLmRpc2FibGVkVG9vbHRpcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvb2x0aXBQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFVwVG9vbHRpcENvbXBvbmVudCk7XG4gICAgdGhpcy50b29sdGlwUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0b29sdGlwUG9ydGFsKTtcbiAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UudGVtcGxhdGVDb250ZXh0RGF0YSA9IHRoaXMudG9vbHRpcENvbnRleHREYXRhO1xuXG4gICAgaWYgKHRoaXMuaXNDbG9zZVRpbWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLm1vdXNlRW50ZXIucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodGhpcy5jbGVhckNsb3NlVGltZXIpO1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLm1vdXNlTGVhdmUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodGhpcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICB0b3VjaFN0YXJ0ID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoUHJlc3NUaW1lb3V0KTtcbiAgICB0aGlzLnRvdWNoUHJlc3NUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNob3coKSwgdGhpcy5sb25nUHJlc3MpO1xuICB9O1xuXG4gIHRvdWNoRW5kID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoUHJlc3NUaW1lb3V0KTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfTtcblxuICBtb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmlzTW9iaWxlUGxhdGZvcm0oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0Nsb3NlVGltZXIpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzSG92ZXJUcmlnZ2VyKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH07XG5cbiAgbW91c2VPdXQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNNb2JpbGVQbGF0Zm9ybSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDbG9zZVRpbWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRDbG9zZVRpbWVyKFxuICAgICAgICB0aGlzLndpbmRvdy5zZXRUaW1lb3V0KHRoaXMuaGlkZSwgdGhpcy50b29sdGlwQ29uc3RhbnRzLmhvdmVyT2ZmUGVyc2lzdFRpbWUpXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNIb3ZlclRyaWdnZXIpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfTtcblxuICBjbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICh0aGlzLmhhc0NsaWNrVHJpZ2dlcikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzSG92ZXJUcmlnZ2VyICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snKVxuICBkb2N1bWVudENsaWNrKCkge1xuICAgIGlmICh0aGlzLmhhc0NsaWNrVHJpZ2dlcikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5pc01vYmlsZVBsYXRmb3JtKCkgJiYgdGhpcy5oYXNIb3ZlclRyaWdnZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Ub3VjaEV2ZW50cygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNIb3ZlclRyaWdnZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Nb3VzZUV2ZW50cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvQ2xpY2tFdmVudHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvQ2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrLCB7fSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvTW91c2VFdmVudHMoKSB7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMubW91c2VFbnRlciwge30pO1xuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMubW91c2VFbnRlciwge30pO1xuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5tb3VzZU91dCwge30pO1xuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGljaywge30pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RvdWNoRXZlbnRzKCkge1xuICAgIHRoaXMuYWRkTGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMucGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICB0aGlzLmFkZExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmQsIHRoaXMucGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICB0aGlzLmFkZExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMudG91Y2hFbmQsIHRoaXMucGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBldmVudE5hbWUsIG9wdGlvbnMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95TGlzdGVuZXJzKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiBoYW5kbGVyKGV2ZW50KSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICB0aGlzLmRlc3Ryb3lMaXN0ZW5lcnMubmV4dCgpO1xuICB9XG59XG4iXX0=