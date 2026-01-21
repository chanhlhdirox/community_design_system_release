import { Component, Inject, Input } from '@angular/core';
import { debounceTime, filter, fromEvent, map, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { TooltipConstantsProvider, TooltipPositionType } from '../../../tooltip/tooltip.constants';
import { ComponentPortal } from '@angular/cdk/portal';
import { WINDOW } from '../../../../providers/window.provider';
import { PdfPreviewCopyToClipboardTooltipComponent } from '../pdf-preview-copy-to-clipboard-tooltip/pdf-preview-copy-to-clipboard-tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class PdfPreviewCopyToClipboardComponent {
    constructor(ngZone, renderer, overlay, overlayPositionBuilder, changeDetectorRef, window, tooltipConstants) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.overlay = overlay;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.window = window;
        this.tooltipConstants = tooltipConstants;
        this.delay = 500;
        this.tooltipCloseDelay = 1000;
        this.copiedLabel = 'Copied';
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    activateSelectionCopy() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(document, 'selectionchange')
                .pipe(debounceTime(this.delay), map(() => this.window.getSelection()?.toString()), filter((selection) => !!selection && this.lastSelectedText !== selection), filter(() => this.parentElement?.nativeElement.contains(this.getHighlightedNode())), tap((selection) => (this.lastSelectedText = selection)), takeUntil(this.destroy$))
                .subscribe((selection) => {
                this.copySelectionToClipboard(selection);
            });
        });
    }
    createTooltip(position) {
        if (this.tooltipAutoCloseTimeout) {
            clearTimeout(this.tooltipAutoCloseTimeout);
        }
        this.overlayRef?.dispose();
        this.getOverlay(position);
        const tooltipPortal = new ComponentPortal(PdfPreviewCopyToClipboardTooltipComponent);
        const tooltipRef = this.overlayRef.attach(tooltipPortal);
        tooltipRef.instance.content = this.copiedLabel;
        this.changeDetectorRef.detectChanges();
        this.tooltipAutoCloseTimeout = setTimeout(() => {
            this.overlayRef?.dispose();
        }, this.tooltipCloseDelay);
    }
    getOverlay(position) {
        const positionStrategy = this.overlayPositionBuilder
            .flexibleConnectedTo(position)
            .withPositions([
            this.tooltipConstants.positions.get(TooltipPositionType.BOTTOM),
            this.tooltipConstants.positions.get(TooltipPositionType.TOP)
        ]);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    }
    copySelectionToClipboard(selection) {
        const element = this.getHighlightedNode();
        const rec = element?.getBoundingClientRect();
        this.ngZone.run(() => {
            this.window.navigator.clipboard.writeText(selection).then(() => {
                this.createTooltip({
                    x: rec.x + this.window.getSelection()?.focusOffset,
                    y: rec.y + rec.height
                });
            });
        });
    }
    getHighlightedNode() {
        // @ts-ignore
        if (this.window.getSelection()?.focusNode?.getBoundingClientRect) {
            return this.window.getSelection().focusNode;
        }
        return this.window.getSelection().focusNode.parentElement;
    }
}
PdfPreviewCopyToClipboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewCopyToClipboardComponent, deps: [{ token: i0.NgZone }, { token: i0.Renderer2 }, { token: i1.Overlay }, { token: i1.OverlayPositionBuilder }, { token: i0.ChangeDetectorRef }, { token: WINDOW }, { token: TooltipConstantsProvider }], target: i0.ɵɵFactoryTarget.Component });
PdfPreviewCopyToClipboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: PdfPreviewCopyToClipboardComponent, selector: "up-pdf-preview-copy-to-clipboard", inputs: { parentElement: "parentElement", delay: "delay", tooltipCloseDelay: "tooltipCloseDelay", copiedLabel: "copiedLabel" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewCopyToClipboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'up-pdf-preview-copy-to-clipboard',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.Renderer2 }, { type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ChangeDetectorRef }, { type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [TooltipConstantsProvider]
                }] }]; }, propDecorators: { parentElement: [{
                type: Input
            }], delay: [{
                type: Input
            }], tooltipCloseDelay: [{
                type: Input
            }], copiedLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXZpZXctY29weS10by1jbGlwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wZGYtcHJldmlldy9jb21wb25lbnRzL3BkZi1wcmV2aWV3LWNvcHktdG8tY2xpcGJvYXJkL3BkZi1wcmV2aWV3LWNvcHktdG8tY2xpcGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLG1CQUFtQixFQUNwQixNQUFNLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0QsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMEZBQTBGLENBQUM7OztBQU1ySixNQUFNLE9BQU8sa0NBQWtDO0lBWTdDLFlBQ1UsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLE9BQWdCLEVBQ2hCLHNCQUE4QyxFQUM5QyxpQkFBb0MsRUFDcEIsTUFBYyxFQUNJLGdCQUFrQztRQU5wRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNw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LGtDQUFrQztvQkFDNUMsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OzBCQW1CSSxNQUFNOzJCQUFDLE1BQU07OzBCQUNiLE1BQU07MkJBQUMsd0JBQXdCOzRDQWxCekIsYUFBYTtzQkFBckIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIGZyb21FdmVudCwgbWFwLCBtZXJnZU1hcCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UG9zaXRpb25CdWlsZGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgVG9vbHRpcENvbnN0YW50cyxcbiAgVG9vbHRpcENvbnN0YW50c1Byb3ZpZGVyLFxuICBUb29sdGlwUG9zaXRpb25UeXBlXG59IGZyb20gJy4uLy4uLy4uL3Rvb2x0aXAvdG9vbHRpcC5jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm92aWRlcnMvd2luZG93LnByb3ZpZGVyJztcbmltcG9ydCB7IFBkZlByZXZpZXdDb3B5VG9DbGlwYm9hcmRUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi4vcGRmLXByZXZpZXctY29weS10by1jbGlwYm9hcmQtdG9vbHRpcC9wZGYtcHJldmlldy1jb3B5LXRvLWNsaXBib2FyZC10b29sdGlwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXBkZi1wcmV2aWV3LWNvcHktdG8tY2xpcGJvYXJkJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFBkZlByZXZpZXdDb3B5VG9DbGlwYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwYXJlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBkZWxheSA9IDUwMDtcbiAgQElucHV0KCkgdG9vbHRpcENsb3NlRGVsYXkgPSAxMDAwO1xuICBASW5wdXQoKSBjb3BpZWRMYWJlbCA9ICdDb3BpZWQnO1xuXG4gIGxhc3RTZWxlY3RlZFRleHQ6IHN0cmluZztcbiAgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSB0b29sdGlwQXV0b0Nsb3NlVGltZW91dDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25CdWlsZGVyOiBPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbmRvdzogV2luZG93LFxuICAgIEBJbmplY3QoVG9vbHRpcENvbnN0YW50c1Byb3ZpZGVyKSBwcml2YXRlIHRvb2x0aXBDb25zdGFudHM6IFRvb2x0aXBDb25zdGFudHNcbiAgKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgYWN0aXZhdGVTZWxlY3Rpb25Db3B5KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ3NlbGVjdGlvbmNoYW5nZScpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KSxcbiAgICAgICAgICBtYXAoKCkgPT4gdGhpcy53aW5kb3cuZ2V0U2VsZWN0aW9uKCk/LnRvU3RyaW5nKCkpLFxuICAgICAgICAgIGZpbHRlcigoc2VsZWN0aW9uOiBzdHJpbmcpID0+ICEhc2VsZWN0aW9uICYmIHRoaXMubGFzdFNlbGVjdGVkVGV4dCAhPT0gc2VsZWN0aW9uKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5wYXJlbnRFbGVtZW50Py5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRoaXMuZ2V0SGlnaGxpZ2h0ZWROb2RlKCkpKSxcbiAgICAgICAgICB0YXAoKHNlbGVjdGlvbikgPT4gKHRoaXMubGFzdFNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbikpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuY29weVNlbGVjdGlvblRvQ2xpcGJvYXJkKHNlbGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUb29sdGlwKHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICBpZiAodGhpcy50b29sdGlwQXV0b0Nsb3NlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9vbHRpcEF1dG9DbG9zZVRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMub3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuICAgIHRoaXMuZ2V0T3ZlcmxheShwb3NpdGlvbik7XG5cbiAgICBjb25zdCB0b29sdGlwUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChQZGZQcmV2aWV3Q29weVRvQ2xpcGJvYXJkVG9vbHRpcENvbXBvbmVudCk7XG4gICAgY29uc3QgdG9vbHRpcFJlZiA9IHRoaXMub3ZlcmxheVJlZi5hdHRhY2godG9vbHRpcFBvcnRhbCk7XG4gICAgdG9vbHRpcFJlZi5pbnN0YW5jZS5jb250ZW50ID0gdGhpcy5jb3BpZWRMYWJlbDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIHRoaXMudG9vbHRpcEF1dG9DbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuICAgIH0sIHRoaXMudG9vbHRpcENsb3NlRGVsYXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5KHBvc2l0aW9uOiBFbGVtZW50IHwgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVBvc2l0aW9uQnVpbGRlclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8ocG9zaXRpb24pXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgIHRoaXMudG9vbHRpcENvbnN0YW50cy5wb3NpdGlvbnMuZ2V0KFRvb2x0aXBQb3NpdGlvblR5cGUuQk9UVE9NKSxcbiAgICAgICAgdGhpcy50b29sdGlwQ29uc3RhbnRzLnBvc2l0aW9ucy5nZXQoVG9vbHRpcFBvc2l0aW9uVHlwZS5UT1ApXG4gICAgICBdKTtcblxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvcHlTZWxlY3Rpb25Ub0NsaXBib2FyZChzZWxlY3Rpb246IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEhpZ2hsaWdodGVkTm9kZSgpO1xuICAgIGNvbnN0IHJlYyA9IGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLndpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzZWxlY3Rpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNyZWF0ZVRvb2x0aXAoe1xuICAgICAgICAgIHg6IHJlYy54ICsgdGhpcy53aW5kb3cuZ2V0U2VsZWN0aW9uKCk/LmZvY3VzT2Zmc2V0LFxuICAgICAgICAgIHk6IHJlYy55ICsgcmVjLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdobGlnaHRlZE5vZGUoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0aGlzLndpbmRvdy5nZXRTZWxlY3Rpb24oKT8uZm9jdXNOb2RlPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgIHJldHVybiB0aGlzLndpbmRvdy5nZXRTZWxlY3Rpb24oKS5mb2N1c05vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2luZG93LmdldFNlbGVjdGlvbigpLmZvY3VzTm9kZS5wYXJlbnRFbGVtZW50O1xuICB9XG59XG4iXX0=