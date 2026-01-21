import { Component, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { notificationAnimation } from '../../animations';
import { PageNotificationState } from '../../enums';
import { WindowProvider } from '../../providers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../notification/notification.component";
import * as i3 from "../../../notification/components/title/notification-title.component";
import * as i4 from "../../../notification/directives/notification-title.directive";
import * as i5 from "../../../notification/directives/notification-footer.directive";
export class PageNotificationComponent {
    constructor(changeDetectorRef, window) {
        this.changeDetectorRef = changeDetectorRef;
        this.window = window;
        this.destroyed = new EventEmitter();
        this.closeTimerHandler = () => {
            this.closeTimer = undefined;
            this.destroyed.next({ id: this.instance.messageId });
        };
        this.autoCloseTimerHandler = () => this.destroy();
    }
    ngOnInit() {
        if (this.autoCloseable) {
            this.startAutoCloseTimeout();
        }
    }
    ngOnDestroy() {
        if (this.autoCloseable) {
            this.clearAutoCloseTimer();
        }
    }
    close(event) {
        event.stopPropagation();
        this.destroy();
    }
    enter() {
        if (this.autoCloseable) {
            this.clearAutoCloseTimer();
        }
    }
    emitNotificationClick(event) {
        this.instance.onClick.next(event);
    }
    leave() {
        if (this.autoCloseable) {
            this.startAutoCloseTimeout();
        }
    }
    get autoCloseable() {
        return !!this.instance.duration;
    }
    get progressBarEnabled() {
        return this.autoCloseable && !!this.autoCloseTimer;
    }
    get progressBarDuration() {
        return this.progressBarEnabled ? this.instance.duration : 0;
    }
    destroy() {
        this.instance.state = PageNotificationState.Leave;
        this.changeDetectorRef.detectChanges();
        this.closeTimer = this.window.setTimeout(this.closeTimerHandler, 200);
    }
    startAutoCloseTimeout() {
        this.autoCloseTimer = this.window.setTimeout(this.autoCloseTimerHandler, this.instance.duration);
    }
    clearAutoCloseTimer() {
        if (this.autoCloseTimer !== null) {
            this.window.clearTimeout(this.autoCloseTimer);
            this.autoCloseTimer = null;
        }
    }
}
PageNotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PageNotificationComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: WindowProvider }], target: i0.ɵɵFactoryTarget.Component });
PageNotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: PageNotificationComponent, selector: "up-page-notification", inputs: { instance: "instance" }, outputs: { destroyed: "destroyed" }, host: { listeners: { "click": "emitNotificationClick($event)" } }, exportAs: ["upPageNotification"], ngImport: i0, template: "<div\n  class=\"up-page-notification\"\n  [@notificationAnimation]=\"instance.state\"\n  (mouseenter)=\"enter()\"\n  (mouseleave)=\"leave()\"\n>\n  <up-notification\n    mode=\"floating\"\n    [progressBarDuration]=\"progressBarDuration\"\n    [type]=\"instance.type\"\n    [text]=\"instance.content\"\n    [closeable]=\"true\"\n    (closeNotification)=\"close($event)\"\n    baseDataTest=\"up-toast-notification\"\n  >\n    <div upNotificationTitle *ngIf=\"instance.title\">\n      <up-notification-title\n        size=\"S\"\n        [title]=\"instance.title\"\n        [type]=\"instance.type\"\n        baseDataTest=\"up-toast-notification\"\n      ></up-notification-title>\n    </div>\n\n    <div upNotificationFooter class=\"up-page-notification-footer\" *ngIf=\"instance.footerTemplate\">\n      <ng-template [ngTemplateOutlet]=\"instance.footerTemplate\"></ng-template>\n    </div>\n  </up-notification>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.UpNotificationComponent, selector: "up-notification", inputs: ["baseDataTest", "type", "text", "closeable", "mode", "progressBarDuration", "isOpaque"], outputs: ["closeNotification"] }, { kind: "component", type: i3.UpNotificationTitleComponent, selector: "up-notification-title", inputs: ["baseDataTest", "type", "title", "size"] }, { kind: "directive", type: i4.UpNotificationTitleDirective, selector: "[upNotificationTitle]" }, { kind: "directive", type: i5.UpNotificationFooterDirective, selector: "[upNotificationFooter]" }], animations: [notificationAnimation] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PageNotificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-page-notification', exportAs: 'upPageNotification', animations: [notificationAnimation], template: "<div\n  class=\"up-page-notification\"\n  [@notificationAnimation]=\"instance.state\"\n  (mouseenter)=\"enter()\"\n  (mouseleave)=\"leave()\"\n>\n  <up-notification\n    mode=\"floating\"\n    [progressBarDuration]=\"progressBarDuration\"\n    [type]=\"instance.type\"\n    [text]=\"instance.content\"\n    [closeable]=\"true\"\n    (closeNotification)=\"close($event)\"\n    baseDataTest=\"up-toast-notification\"\n  >\n    <div upNotificationTitle *ngIf=\"instance.title\">\n      <up-notification-title\n        size=\"S\"\n        [title]=\"instance.title\"\n        [type]=\"instance.type\"\n        baseDataTest=\"up-toast-notification\"\n      ></up-notification-title>\n    </div>\n\n    <div upNotificationFooter class=\"up-page-notification-footer\" *ngIf=\"instance.footerTemplate\">\n      <ng-template [ngTemplateOutlet]=\"instance.footerTemplate\"></ng-template>\n    </div>\n  </up-notification>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [WindowProvider]
                }] }]; }, propDecorators: { instance: [{
                type: Input
            }], destroyed: [{
                type: Output
            }], emitNotificationClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3RpZmljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wYWdlLW5vdGlmaWNhdGlvbi9jb21wb25lbnRzL3BhZ2Utbm90aWZpY2F0aW9uL3BhZ2Utbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvcGFnZS1ub3RpZmljYXRpb24vY29tcG9uZW50cy9wYWdlLW5vdGlmaWNhdGlvbi9wYWdlLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBELE9BQU8sRUFBb0IsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFRbkUsTUFBTSxPQUFPLHlCQUF5QjtJQVVwQyxZQUNVLGlCQUFvQyxFQUNaLE1BQXdCO1FBRGhELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVBqRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUE4RC9DLHNCQUFpQixHQUFHLEdBQUcsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDO1FBU08sMEJBQXFCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBbEVuRCxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFpQjtRQUNyQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUdELHFCQUFxQixDQUFDLEtBQWlCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sT0FBTztRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQU9PLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUMxQyxJQUFJLENBQUMscUJBQXFCLEVBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUlPLG1CQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7O3NIQXRGVSx5QkFBeUIsbURBWTFCLGNBQWM7MEdBWmIseUJBQXlCLHdPQ3ZCdEMsMDVCQTZCQSx5MUJEUmMsQ0FBQyxxQkFBcUIsQ0FBQzsyRkFFeEIseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLHNCQUFzQixZQUN0QixvQkFBb0IsY0FFbEIsQ0FBQyxxQkFBcUIsQ0FBQzs7MEJBY2hDLE1BQU07MkJBQUMsY0FBYzs0Q0FWeEIsUUFBUTtzQkFEUCxLQUFLO2dCQUlHLFNBQVM7c0JBRGpCLE1BQU07Z0JBbUNQLHFCQUFxQjtzQkFEcEIsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbm90aWZpY2F0aW9uQW5pbWF0aW9uIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBQYWdlTm90aWZpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9lbnVtcyc7XG5pbXBvcnQgeyBQYWdlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBXaW5kb3dQcm9wZXJ0aWVzLCBXaW5kb3dQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXBhZ2Utbm90aWZpY2F0aW9uJyxcbiAgZXhwb3J0QXM6ICd1cFBhZ2VOb3RpZmljYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2Utbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW25vdGlmaWNhdGlvbkFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZU5vdGlmaWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgaW5zdGFuY2U6IFBhZ2VOb3RpZmljYXRpb247XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGRlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nIH0+KCk7XG5cbiAgcHJpdmF0ZSBjbG9zZVRpbWVyPzogbnVtYmVyO1xuICBwcml2YXRlIGF1dG9DbG9zZVRpbWVyPzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoV2luZG93UHJvdmlkZXIpIHByaXZhdGUgd2luZG93OiBXaW5kb3dQcm9wZXJ0aWVzXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VhYmxlKSB7XG4gICAgICB0aGlzLnN0YXJ0QXV0b0Nsb3NlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZWFibGUpIHtcbiAgICAgIHRoaXMuY2xlYXJBdXRvQ2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBlbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2VhYmxlKSB7XG4gICAgICB0aGlzLmNsZWFyQXV0b0Nsb3NlVGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGVtaXROb3RpZmljYXRpb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2Uub25DbGljay5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIGxlYXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZWFibGUpIHtcbiAgICAgIHRoaXMuc3RhcnRBdXRvQ2xvc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGF1dG9DbG9zZWFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnN0YW5jZS5kdXJhdGlvbjtcbiAgfVxuXG4gIGdldCBwcm9ncmVzc0JhckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0b0Nsb3NlYWJsZSAmJiAhIXRoaXMuYXV0b0Nsb3NlVGltZXI7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3NCYXJEdXJhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnByb2dyZXNzQmFyRW5hYmxlZCA/IHRoaXMuaW5zdGFuY2UuZHVyYXRpb24gOiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2Uuc3RhdGUgPSBQYWdlTm90aWZpY2F0aW9uU3RhdGUuTGVhdmU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5jbG9zZVRpbWVyID0gdGhpcy53aW5kb3cuc2V0VGltZW91dCh0aGlzLmNsb3NlVGltZXJIYW5kbGVyLCAyMDApO1xuICB9XG5cbiAgcmVhZG9ubHkgY2xvc2VUaW1lckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG9zZVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoeyBpZDogdGhpcy5pbnN0YW5jZS5tZXNzYWdlSWQgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGFydEF1dG9DbG9zZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRvQ2xvc2VUaW1lciA9IHRoaXMud2luZG93LnNldFRpbWVvdXQoXG4gICAgICB0aGlzLmF1dG9DbG9zZVRpbWVySGFuZGxlcixcbiAgICAgIHRoaXMuaW5zdGFuY2UuZHVyYXRpb25cbiAgICApO1xuICB9XG5cbiAgcmVhZG9ubHkgYXV0b0Nsb3NlVGltZXJIYW5kbGVyID0gKCkgPT4gdGhpcy5kZXN0cm95KCk7XG5cbiAgcHJpdmF0ZSBjbGVhckF1dG9DbG9zZVRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZVRpbWVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLndpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hdXRvQ2xvc2VUaW1lcik7XG4gICAgICB0aGlzLmF1dG9DbG9zZVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJ1cC1wYWdlLW5vdGlmaWNhdGlvblwiXG4gIFtAbm90aWZpY2F0aW9uQW5pbWF0aW9uXT1cImluc3RhbmNlLnN0YXRlXCJcbiAgKG1vdXNlZW50ZXIpPVwiZW50ZXIoKVwiXG4gIChtb3VzZWxlYXZlKT1cImxlYXZlKClcIlxuPlxuICA8dXAtbm90aWZpY2F0aW9uXG4gICAgbW9kZT1cImZsb2F0aW5nXCJcbiAgICBbcHJvZ3Jlc3NCYXJEdXJhdGlvbl09XCJwcm9ncmVzc0JhckR1cmF0aW9uXCJcbiAgICBbdHlwZV09XCJpbnN0YW5jZS50eXBlXCJcbiAgICBbdGV4dF09XCJpbnN0YW5jZS5jb250ZW50XCJcbiAgICBbY2xvc2VhYmxlXT1cInRydWVcIlxuICAgIChjbG9zZU5vdGlmaWNhdGlvbik9XCJjbG9zZSgkZXZlbnQpXCJcbiAgICBiYXNlRGF0YVRlc3Q9XCJ1cC10b2FzdC1ub3RpZmljYXRpb25cIlxuICA+XG4gICAgPGRpdiB1cE5vdGlmaWNhdGlvblRpdGxlICpuZ0lmPVwiaW5zdGFuY2UudGl0bGVcIj5cbiAgICAgIDx1cC1ub3RpZmljYXRpb24tdGl0bGVcbiAgICAgICAgc2l6ZT1cIlNcIlxuICAgICAgICBbdGl0bGVdPVwiaW5zdGFuY2UudGl0bGVcIlxuICAgICAgICBbdHlwZV09XCJpbnN0YW5jZS50eXBlXCJcbiAgICAgICAgYmFzZURhdGFUZXN0PVwidXAtdG9hc3Qtbm90aWZpY2F0aW9uXCJcbiAgICAgID48L3VwLW5vdGlmaWNhdGlvbi10aXRsZT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgdXBOb3RpZmljYXRpb25Gb290ZXIgY2xhc3M9XCJ1cC1wYWdlLW5vdGlmaWNhdGlvbi1mb290ZXJcIiAqbmdJZj1cImluc3RhbmNlLmZvb3RlclRlbXBsYXRlXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5zdGFuY2UuZm9vdGVyVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L3VwLW5vdGlmaWNhdGlvbj5cbjwvZGl2PlxuIl19