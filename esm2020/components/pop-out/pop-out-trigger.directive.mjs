import { Directive, EventEmitter, HostListener, Injector, Input, Output, TemplateRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { AutoUnsubscribeComponent, KeyboardKeysEnum } from '../../src/lib/utils';
import { popOutPositions, dropdownPositionsMap } from './constants';
import { FLOATING_CARD_PADDING, FLOATING_CARD_TOKEN } from '../floating-card/constants';
import { UpFloatingCardComponent } from '../floating-card/floating-card.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./pop-out.service";
export class UpPopOutTriggerDirective extends AutoUnsubscribeComponent {
    constructor(overlay, viewContainerRef, hostElement, upPopOutService) {
        super();
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.hostElement = hostElement;
        this.upPopOutService = upPopOutService;
        this.popoutOpened = new EventEmitter();
        this.popoutClosed = new EventEmitter();
        this.position = popOutPositions.BottomLeft;
        this.closeOnOptionClick = true;
        this.popoutDisabled = false;
        this.stopClickEventPropagation = false;
        this.hasFloatingCardPadding = true;
    }
    openMenu(event) {
        if (this.stopClickEventPropagation) {
            event?.preventDefault();
            event?.stopPropagation();
        }
        this.open();
    }
    ngAfterViewInit() {
        if (!this.hasValidSetup) {
            console.warn('upPopOutTrigger needs a valid TemplateRef to work. Use a #templateVariable on an ng-template');
        }
    }
    open() {
        if (this.popoutDisabled) {
            return;
        }
        if (!this.hasValidSetup) {
            return;
        }
        this.overlayRef = this.overlay.create(this.overlayConfig);
        this.overlayRef.attach(this.createPortal());
        this.popoutOpened.emit();
        this.subscribeToCloseEvents();
    }
    close() {
        this.overlayRef.dispose();
        this.unsubscribeAll();
        this.popoutClosed.emit();
    }
    subscribeToCloseEvents() {
        this.addSubscriptions(this.upPopOutService.optionClick.subscribe(() => this.closeOnOptionClick && this.close()), this.overlayRef.backdropClick().subscribe(() => this.close()), this.overlayRef.keydownEvents().subscribe((keydownEvent) => {
            if (keydownEvent.key === KeyboardKeysEnum.Escape) {
                this.close();
            }
        }));
    }
    get overlayConfig() {
        return {
            positionStrategy: this.positionStrategy,
            hasBackdrop: true,
            backdropClass: 'up-pop-out-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block()
        };
    }
    get positionStrategy() {
        return this.overlay
            .position()
            .flexibleConnectedTo(this.hostElement)
            .withPositions([dropdownPositionsMap.get(this.position), ...dropdownPositionsMap.values()]);
    }
    createPortal() {
        return new ComponentPortal(UpFloatingCardComponent, null, Injector.create({
            providers: [
                {
                    provide: FLOATING_CARD_TOKEN,
                    useValue: this.contentTemplate
                },
                {
                    provide: FLOATING_CARD_PADDING,
                    useValue: this.hasFloatingCardPadding
                }
            ]
        }));
    }
    get hasValidSetup() {
        return this.contentTemplate instanceof TemplateRef;
    }
}
UpPopOutTriggerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutTriggerDirective, deps: [{ token: i1.Overlay }, { token: i0.ViewContainerRef }, { token: i0.ElementRef }, { token: i2.UpPopOutService }], target: i0.ɵɵFactoryTarget.Directive });
UpPopOutTriggerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpPopOutTriggerDirective, selector: "[upPopOutTrigger]", inputs: { contentTemplate: ["upPopOutTrigger", "contentTemplate"], position: "position", closeOnOptionClick: "closeOnOptionClick", popoutDisabled: "popoutDisabled", stopClickEventPropagation: "stopClickEventPropagation", hasFloatingCardPadding: "hasFloatingCardPadding" }, outputs: { popoutOpened: "popoutOpened", popoutClosed: "popoutClosed" }, host: { listeners: { "click": "openMenu($event)" } }, exportAs: ["upPopOutTrigger"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutTriggerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upPopOutTrigger]',
                    exportAs: 'upPopOutTrigger'
                }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i2.UpPopOutService }]; }, propDecorators: { contentTemplate: [{
                type: Input,
                args: ['upPopOutTrigger']
            }], popoutOpened: [{
                type: Output
            }], popoutClosed: [{
                type: Output
            }], position: [{
                type: Input
            }], closeOnOptionClick: [{
                type: Input
            }], popoutDisabled: [{
                type: Input
            }], stopClickEventPropagation: [{
                type: Input
            }], hasFloatingCardPadding: [{
                type: Input
            }], openMenu: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLW91dC10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvcG9wLW91dC9wb3Atb3V0LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFNbkYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHdCQUF3QjtJQXFCcEUsWUFDVSxPQUFnQixFQUNoQixnQkFBa0MsRUFDbEMsV0FBdUIsRUFDdkIsZUFBZ0M7UUFFeEMsS0FBSyxFQUFFLENBQUM7UUFMQSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBdkJoQyxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RELGlCQUFZLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsYUFBUSxHQUFvQixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQ3ZELHVCQUFrQixHQUFHLElBQUksQ0FB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LEVBQUUsSUFBSSxDQUFDLGVBQWU7aUJBQy9CO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCO2lCQUN0QzthQUNGO1NBQ0YsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsSUFBWSxhQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsWUFBWSxXQUFXLENBQUM7SUFDckQsQ0FBQzs7cUhBL0dVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7b0xBRTJCLGVBQWU7c0JBQXhDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQUNkLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDRSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLHlCQUF5QjtzQkFBakMsS0FBSztnQkFDRyxzQkFBc0I7c0JBQTlCLEtBQUs7Z0JBS04sUUFBUTtzQkFEUCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZlxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgQXV0b1Vuc3Vic2NyaWJlQ29tcG9uZW50LCBLZXlib2FyZEtleXNFbnVtIH0gZnJvbSAnLi4vLi4vc3JjL2xpYi91dGlscyc7XG5pbXBvcnQgeyBwb3BPdXRQb3NpdGlvbnMsIGRyb3Bkb3duUG9zaXRpb25zTWFwIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgVXBQb3BPdXRTZXJ2aWNlIH0gZnJvbSAnLi9wb3Atb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRkxPQVRJTkdfQ0FSRF9QQURESU5HLCBGTE9BVElOR19DQVJEX1RPS0VOIH0gZnJvbSAnLi4vZmxvYXRpbmctY2FyZC9jb25zdGFudHMnO1xuaW1wb3J0IHsgVXBGbG9hdGluZ0NhcmRDb21wb25lbnQgfSBmcm9tICcuLi9mbG9hdGluZy1jYXJkL2Zsb2F0aW5nLWNhcmQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VwUG9wT3V0VHJpZ2dlcl0nLFxuICBleHBvcnRBczogJ3VwUG9wT3V0VHJpZ2dlcidcbn0pXG5leHBvcnQgY2xhc3MgVXBQb3BPdXRUcmlnZ2VyRGlyZWN0aXZlIGV4dGVuZHMgQXV0b1Vuc3Vic2NyaWJlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgndXBQb3BPdXRUcmlnZ2VyJykgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAT3V0cHV0KCkgcG9wb3V0T3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwb3BvdXRDbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgcG9zaXRpb246IHBvcE91dFBvc2l0aW9ucyA9IHBvcE91dFBvc2l0aW9ucy5Cb3R0b21MZWZ0O1xuICBASW5wdXQoKSBjbG9zZU9uT3B0aW9uQ2xpY2sgPSB0cnVlO1xuICBASW5wdXQoKSBwb3BvdXREaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzdG9wQ2xpY2tFdmVudFByb3BhZ2F0aW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhhc0Zsb2F0aW5nQ2FyZFBhZGRpbmcgPSB0cnVlO1xuXG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb3Blbk1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9wQ2xpY2tFdmVudFByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudD8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB1cFBvcE91dFNlcnZpY2U6IFVwUG9wT3V0U2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNWYWxpZFNldHVwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICd1cFBvcE91dFRyaWdnZXIgbmVlZHMgYSB2YWxpZCBUZW1wbGF0ZVJlZiB0byB3b3JrLiBVc2UgYSAjdGVtcGxhdGVWYXJpYWJsZSBvbiBhbiBuZy10ZW1wbGF0ZSdcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3BvdXREaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXNWYWxpZFNldHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLm92ZXJsYXlDb25maWcpO1xuXG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLmNyZWF0ZVBvcnRhbCgpKTtcblxuICAgIHRoaXMucG9wb3V0T3BlbmVkLmVtaXQoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlVG9DbG9zZUV2ZW50cygpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgdGhpcy5wb3BvdXRDbG9zZWQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0Nsb3NlRXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkU3Vic2NyaXB0aW9ucyhcbiAgICAgIHRoaXMudXBQb3BPdXRTZXJ2aWNlLm9wdGlvbkNsaWNrLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlT25PcHRpb25DbGljayAmJiB0aGlzLmNsb3NlKCkpLFxuICAgICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKSxcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChrZXlkb3duRXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGtleWRvd25FdmVudC5rZXkgPT09IEtleWJvYXJkS2V5c0VudW0uRXNjYXBlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBvdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICd1cC1wb3Atb3V0LWJhY2tkcm9wJyxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHBvc2l0aW9uU3RyYXRlZ3koKTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5ob3N0RWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKFtkcm9wZG93blBvc2l0aW9uc01hcC5nZXQodGhpcy5wb3NpdGlvbiksIC4uLmRyb3Bkb3duUG9zaXRpb25zTWFwLnZhbHVlcygpXSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvcnRhbCgpOiBDb21wb25lbnRQb3J0YWw8VXBGbG9hdGluZ0NhcmRDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudFBvcnRhbChcbiAgICAgIFVwRmxvYXRpbmdDYXJkQ29tcG9uZW50LFxuICAgICAgbnVsbCxcbiAgICAgIEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEZMT0FUSU5HX0NBUkRfVE9LRU4sXG4gICAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5jb250ZW50VGVtcGxhdGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEZMT0FUSU5HX0NBUkRfUEFERElORyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLmhhc0Zsb2F0aW5nQ2FyZFBhZGRpbmdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGhhc1ZhbGlkU2V0dXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cbn1cbiJdfQ==