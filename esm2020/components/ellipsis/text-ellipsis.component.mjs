import { Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../tooltip/tooltip.directive";
import * as i2 from "@angular/cdk/observers";
export class UpTextEllipsisComponent {
    constructor() {
        this.hasEllipsis = false;
    }
    ngOnInit() {
        this.checkIfHasEllipsis();
        this.checkWindowResize = fromEvent(window, 'resize')
            .pipe(throttleTime(60))
            .subscribe(() => {
            this.checkIfHasEllipsis();
        });
    }
    ngOnDestroy() {
        this.checkWindowResize.unsubscribe();
    }
    checkIfHasEllipsis() {
        requestAnimationFrame(() => {
            if (this.textOverflowContainer?.nativeElement?.offsetWidth <
                this.textOverflowContainer?.nativeElement?.scrollWidth) {
                this.content = this.textOverflowContainer?.nativeElement?.innerText;
                return (this.hasEllipsis = true);
            }
            this.hasEllipsis = false;
        });
    }
}
UpTextEllipsisComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTextEllipsisComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpTextEllipsisComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpTextEllipsisComponent, selector: "up-text-ellipsis", viewQueries: [{ propertyName: "textOverflowContainer", first: true, predicate: ["textOverflowContainer"], descendants: true, static: true }], ngImport: i0, template: "<div\n  [upTooltip]=\"content\"\n  [disabledTooltip]=\"!hasEllipsis\"\n  [class.defaultCursor]=\"!hasEllipsis\"\n  (cdkObserveContent)=\"checkIfHasEllipsis()\"\n>\n  <div #textOverflowContainer class=\"no-pointer-events\"><ng-content></ng-content></div>\n</div>\n", styles: [".defaultCursor{cursor:default}.no-pointer-events{pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"], dependencies: [{ kind: "directive", type: i1.UpTooltipDirective, selector: "[upTooltip]", inputs: ["upTooltip", "trigger", "disabledTooltip", "persistOnHoverOff", "tooltipContextData", "longPress"] }, { kind: "directive", type: i2.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTextEllipsisComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-text-ellipsis', template: "<div\n  [upTooltip]=\"content\"\n  [disabledTooltip]=\"!hasEllipsis\"\n  [class.defaultCursor]=\"!hasEllipsis\"\n  (cdkObserveContent)=\"checkIfHasEllipsis()\"\n>\n  <div #textOverflowContainer class=\"no-pointer-events\"><ng-content></ng-content></div>\n</div>\n", styles: [".defaultCursor{cursor:default}.no-pointer-events{pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"] }]
        }], propDecorators: { textOverflowContainer: [{
                type: ViewChild,
                args: ['textOverflowContainer', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lbGxpcHNpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2VsbGlwc2lzL3RleHQtZWxsaXBzaXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9lbGxpcHNpcy90ZXh0LWVsbGlwc2lzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQU8sWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPbkQsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQVFFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0tBNEJyQjtJQXpCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEIsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7WUFDekIsSUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsYUFBYSxFQUFFLFdBQVc7Z0JBQ3RELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUN0RDtnQkFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDO2dCQUNwRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNsQztZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7b0hBOUJVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLHNNQ1RwQyx5UUFRQTsyRkRDYSx1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0Usa0JBQWtCOzhCQUswQixxQkFBcUI7c0JBQTFFLFNBQVM7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXRleHQtZWxsaXBzaXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1lbGxpcHNpcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZWxsaXBzaXMuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVcFRleHRFbGxpcHNpc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgndGV4dE92ZXJmbG93Q29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgdGV4dE92ZXJmbG93Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGhhc0VsbGlwc2lzID0gZmFsc2U7XG4gIGNoZWNrV2luZG93UmVzaXplOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jaGVja0lmSGFzRWxsaXBzaXMoKTtcbiAgICB0aGlzLmNoZWNrV2luZG93UmVzaXplID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZSh0aHJvdHRsZVRpbWUoNjApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tJZkhhc0VsbGlwc2lzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tXaW5kb3dSZXNpemUudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGNoZWNrSWZIYXNFbGxpcHNpcygpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnRleHRPdmVyZmxvd0NvbnRhaW5lcj8ubmF0aXZlRWxlbWVudD8ub2Zmc2V0V2lkdGggPFxuICAgICAgICB0aGlzLnRleHRPdmVyZmxvd0NvbnRhaW5lcj8ubmF0aXZlRWxlbWVudD8uc2Nyb2xsV2lkdGhcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnRleHRPdmVyZmxvd0NvbnRhaW5lcj8ubmF0aXZlRWxlbWVudD8uaW5uZXJUZXh0O1xuICAgICAgICByZXR1cm4gKHRoaXMuaGFzRWxsaXBzaXMgPSB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFzRWxsaXBzaXMgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdlxuICBbdXBUb29sdGlwXT1cImNvbnRlbnRcIlxuICBbZGlzYWJsZWRUb29sdGlwXT1cIiFoYXNFbGxpcHNpc1wiXG4gIFtjbGFzcy5kZWZhdWx0Q3Vyc29yXT1cIiFoYXNFbGxpcHNpc1wiXG4gIChjZGtPYnNlcnZlQ29udGVudCk9XCJjaGVja0lmSGFzRWxsaXBzaXMoKVwiXG4+XG4gIDxkaXYgI3RleHRPdmVyZmxvd0NvbnRhaW5lciBjbGFzcz1cIm5vLXBvaW50ZXItZXZlbnRzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuPC9kaXY+XG4iXX0=