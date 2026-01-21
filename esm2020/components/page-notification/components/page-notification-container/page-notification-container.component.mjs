import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { PageNotificationConfigProvider } from '../../providers';
import { PageNotificationState } from '../../enums';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../page-notification/page-notification.component";
export class PageNotificationContainerComponent {
    constructor(changeDetectorRef, notificationConfig) {
        this.changeDetectorRef = changeDetectorRef;
        this.notificationConfig = notificationConfig;
        this.notificationId = 0;
        this.instances = [];
        this.changeDetectorRef.markForCheck();
    }
    static instanceRemoved(instance) {
        instance.onClose.next(null);
        instance.onClose.complete();
    }
    create(options) {
        const { duration } = this.notificationConfig;
        const notification = {
            type: options.type,
            title: options.title || '',
            content: options.content || '',
            state: PageNotificationState.Enter,
            duration: options.duration || duration,
            footerTemplate: options.footerTemplate,
            messageId: this.generateNotificationId(),
            createdAt: new Date(),
            onClose: new Subject(),
            onClick: new Subject()
        };
        if (this.instances.length >= this.notificationConfig.maxStack) {
            this.instances = this.instances.slice(1);
        }
        this.instances = [...this.instances, notification];
        this.instancesChanged();
        return notification;
    }
    remove(id) {
        const instance = this.instances.find((item) => item.messageId === id);
        if (!instance) {
            return;
        }
        this.instances = this.instances.filter((item) => item !== instance);
        PageNotificationContainerComponent.instanceRemoved(instance);
        this.instancesChanged();
    }
    removeAll() {
        this.instances.forEach((instance) => PageNotificationContainerComponent.instanceRemoved(instance));
        this.instances = [];
        this.instancesChanged();
    }
    instancesChanged() {
        this.changeDetectorRef.detectChanges();
    }
    generateNotificationId() {
        return `notification-${this.notificationId++}`;
    }
}
PageNotificationContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PageNotificationContainerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: PageNotificationConfigProvider }], target: i0.ɵɵFactoryTarget.Component });
PageNotificationContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: PageNotificationContainerComponent, selector: "up-page-notification-container", ngImport: i0, template: "<div class=\"up-page-notification-container\">\n  <up-page-notification\n    *ngFor=\"let instance of instances\"\n    [instance]=\"instance\"\n    (destroyed)=\"remove($event.id)\"\n  >\n  </up-page-notification>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.PageNotificationComponent, selector: "up-page-notification", inputs: ["instance"], outputs: ["destroyed"], exportAs: ["upPageNotification"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PageNotificationContainerComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, selector: 'up-page-notification-container', template: "<div class=\"up-page-notification-container\">\n  <up-page-notification\n    *ngFor=\"let instance of instances\"\n    [instance]=\"instance\"\n    (destroyed)=\"remove($event.id)\"\n  >\n  </up-page-notification>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PageNotificationConfigProvider]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvcGFnZS1ub3RpZmljYXRpb24vY29tcG9uZW50cy9wYWdlLW5vdGlmaWNhdGlvbi1jb250YWluZXIvcGFnZS1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvcGFnZS1ub3RpZmljYXRpb24vY29tcG9uZW50cy9wYWdlLW5vdGlmaWNhdGlvbi1jb250YWluZXIvcGFnZS1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTy9CLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQU9wRCxNQUFNLE9BQU8sa0NBQWtDO0lBSTdDLFlBQ1UsaUJBQW9DLEVBQ0ksa0JBQTBDO1FBRGxGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDSSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXdCO1FBTHBGLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBdUIsRUFBRSxDQUFDO1FBTWpDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUEwQjtRQUMvQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBa0M7UUFDdkMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUU3QyxNQUFNLFlBQVksR0FBcUI7WUFDckMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRTtZQUM5QixLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSztZQUNsQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxRQUFRO1lBQ3RDLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYztZQUN0QyxTQUFTLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ3hDLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtZQUNyQixPQUFPLEVBQUUsSUFBSSxPQUFPLEVBQVc7WUFDL0IsT0FBTyxFQUFFLElBQUksT0FBTyxFQUFjO1NBQ25DLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFVO1FBQ2YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQztRQUNwRSxrQ0FBa0MsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQ2xDLGtDQUFrQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FDN0QsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7K0hBbkVVLGtDQUFrQyxtREFNbkMsOEJBQThCO21IQU43QixrQ0FBa0Msc0VDaEIvQyxpT0FRQTsyRkRRYSxrQ0FBa0M7a0JBTDlDLFNBQVM7c0NBQ1MsdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxnQ0FBZ0M7OzBCQVN2QyxNQUFNOzJCQUFDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQ3JlYXRlTm90aWZpY2F0aW9uT3B0aW9ucyxcbiAgUGFnZU5vdGlmaWNhdGlvbixcbiAgUGFnZU5vdGlmaWNhdGlvbkNvbmZpZ1xufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBhZ2VOb3RpZmljYXRpb25Db25maWdQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBQYWdlTm90aWZpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICd1cC1wYWdlLW5vdGlmaWNhdGlvbi1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJ3BhZ2Utbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZU5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHByaXZhdGUgbm90aWZpY2F0aW9uSWQgPSAwO1xuICBpbnN0YW5jZXM6IFBhZ2VOb3RpZmljYXRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUGFnZU5vdGlmaWNhdGlvbkNvbmZpZ1Byb3ZpZGVyKSBwcml2YXRlIG5vdGlmaWNhdGlvbkNvbmZpZzogUGFnZU5vdGlmaWNhdGlvbkNvbmZpZ1xuICApIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlUmVtb3ZlZChpbnN0YW5jZTogUGFnZU5vdGlmaWNhdGlvbik6IHZvaWQge1xuICAgIGluc3RhbmNlLm9uQ2xvc2UubmV4dChudWxsKTtcbiAgICBpbnN0YW5jZS5vbkNsb3NlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjcmVhdGUob3B0aW9uczogQ3JlYXRlTm90aWZpY2F0aW9uT3B0aW9ucyk6IFBhZ2VOb3RpZmljYXRpb24ge1xuICAgIGNvbnN0IHsgZHVyYXRpb24gfSA9IHRoaXMubm90aWZpY2F0aW9uQ29uZmlnO1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uOiBQYWdlTm90aWZpY2F0aW9uID0ge1xuICAgICAgdHlwZTogb3B0aW9ucy50eXBlLFxuICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUgfHwgJycsXG4gICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQgfHwgJycsXG4gICAgICBzdGF0ZTogUGFnZU5vdGlmaWNhdGlvblN0YXRlLkVudGVyLFxuICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24gfHwgZHVyYXRpb24sXG4gICAgICBmb290ZXJUZW1wbGF0ZTogb3B0aW9ucy5mb290ZXJUZW1wbGF0ZSxcbiAgICAgIG1lc3NhZ2VJZDogdGhpcy5nZW5lcmF0ZU5vdGlmaWNhdGlvbklkKCksXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBvbkNsb3NlOiBuZXcgU3ViamVjdDxib29sZWFuPigpLFxuICAgICAgb25DbGljazogbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZXMubGVuZ3RoID49IHRoaXMubm90aWZpY2F0aW9uQ29uZmlnLm1heFN0YWNrKSB7XG4gICAgICB0aGlzLmluc3RhbmNlcyA9IHRoaXMuaW5zdGFuY2VzLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2VzID0gWy4uLnRoaXMuaW5zdGFuY2VzLCBub3RpZmljYXRpb25dO1xuXG4gICAgdGhpcy5pbnN0YW5jZXNDaGFuZ2VkKCk7XG5cbiAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubWVzc2FnZUlkID09PSBpZCk7XG4gICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlcyA9IHRoaXMuaW5zdGFuY2VzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gaW5zdGFuY2UpO1xuICAgIFBhZ2VOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQuaW5zdGFuY2VSZW1vdmVkKGluc3RhbmNlKTtcbiAgICB0aGlzLmluc3RhbmNlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT5cbiAgICAgIFBhZ2VOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQuaW5zdGFuY2VSZW1vdmVkKGluc3RhbmNlKVxuICAgICk7XG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcbiAgICB0aGlzLmluc3RhbmNlc0NoYW5nZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFuY2VzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVOb3RpZmljYXRpb25JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgbm90aWZpY2F0aW9uLSR7dGhpcy5ub3RpZmljYXRpb25JZCsrfWA7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ1cC1wYWdlLW5vdGlmaWNhdGlvbi1jb250YWluZXJcIj5cbiAgPHVwLXBhZ2Utbm90aWZpY2F0aW9uXG4gICAgKm5nRm9yPVwibGV0IGluc3RhbmNlIG9mIGluc3RhbmNlc1wiXG4gICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQpXCJcbiAgPlxuICA8L3VwLXBhZ2Utbm90aWZpY2F0aW9uPlxuPC9kaXY+XG4iXX0=