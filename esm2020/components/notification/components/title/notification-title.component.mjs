import { Component, Input, Inject } from '@angular/core';
import { NotificationsProvider, NotificationCategory } from '../../notification.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../typography/title/title.directive";
export class UpNotificationTitleComponent {
    constructor(provider) {
        this.provider = provider;
        this.baseDataTest = 'up-notification';
        this.type = NotificationCategory.INFO;
        this.size = 'XS';
    }
    get notificationTitleCssClass() {
        return this.provider.notificationTypes.get(this.type).titleCssClass;
    }
}
UpNotificationTitleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationTitleComponent, deps: [{ token: NotificationsProvider }], target: i0.ɵɵFactoryTarget.Component });
UpNotificationTitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpNotificationTitleComponent, selector: "up-notification-title", inputs: { baseDataTest: "baseDataTest", type: "type", title: "title", size: "size" }, ngImport: i0, template: "<h3 [ngClass]=\"notificationTitleCssClass\" [upTitle]=\"size\"\n    [attr.data-test]=\"baseDataTest + '-title'\">\n  {{ title }}\n</h3>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.UpTitleDirective, selector: "[upTitle]", inputs: ["upTitle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-notification-title', template: "<h3 [ngClass]=\"notificationTitleCssClass\" [upTitle]=\"size\"\n    [attr.data-test]=\"baseDataTest + '-title'\">\n  {{ title }}\n</h3>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NotificationsProvider]
                }] }]; }, propDecorators: { baseDataTest: [{
                type: Input
            }], type: [{
                type: Input
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvdGl0bGUvbm90aWZpY2F0aW9uLXRpdGxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvdGl0bGUvbm90aWZpY2F0aW9uLXRpdGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQ0wscUJBQXFCLEVBRXJCLG9CQUFvQixFQUVyQixNQUFNLDhCQUE4QixDQUFDOzs7O0FBTXRDLE1BQU0sT0FBTyw0QkFBNEI7SUFZdkMsWUFBbUQsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQVhqRSxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBRzFDLFNBQUksR0FBcUIsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1FBTW5ELFNBQUksR0FBYyxJQUFJLENBQUM7SUFFc0QsQ0FBQztJQUU5RSxJQUFJLHlCQUF5QjtRQUMzQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDdEUsQ0FBQzs7eUhBaEJVLDRCQUE0QixrQkFZbkIscUJBQXFCOzZHQVo5Qiw0QkFBNEIsbUpDYnpDLDJJQUlBOzJGRFNhLDRCQUE0QjtrQkFKeEMsU0FBUzsrQkFDRSx1QkFBdUI7OzBCQWVwQixNQUFNOzJCQUFDLHFCQUFxQjs0Q0FYaEMsWUFBWTtzQkFBcEIsS0FBSztnQkFHTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGVTaXplIH0gZnJvbSAnLi4vLi4vLi4vdHlwb2dyYXBoeS90aXRsZS90aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgTm90aWZpY2F0aW9uc1Byb3ZpZGVyLFxuICBOb3RpZmljYXRpb25zLFxuICBOb3RpZmljYXRpb25DYXRlZ29yeSxcbiAgTm90aWZpY2F0aW9uVHlwZVxufSBmcm9tICcuLi8uLi9ub3RpZmljYXRpb24uY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXAtbm90aWZpY2F0aW9uLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdub3RpZmljYXRpb24tdGl0bGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVwTm90aWZpY2F0aW9uVGl0bGVDb21wb25lbnQge1xuICBASW5wdXQoKSBiYXNlRGF0YVRlc3QgPSAndXAtbm90aWZpY2F0aW9uJztcblxuICBASW5wdXQoKVxuICB0eXBlOiBOb3RpZmljYXRpb25UeXBlID0gTm90aWZpY2F0aW9uQ2F0ZWdvcnkuSU5GTztcblxuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNpemU6IFRpdGxlU2l6ZSA9ICdYUyc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOb3RpZmljYXRpb25zUHJvdmlkZXIpIHByaXZhdGUgcHJvdmlkZXI6IE5vdGlmaWNhdGlvbnMpIHt9XG5cbiAgZ2V0IG5vdGlmaWNhdGlvblRpdGxlQ3NzQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlci5ub3RpZmljYXRpb25UeXBlcy5nZXQodGhpcy50eXBlKS50aXRsZUNzc0NsYXNzO1xuICB9XG59XG4iLCI8aDMgW25nQ2xhc3NdPVwibm90aWZpY2F0aW9uVGl0bGVDc3NDbGFzc1wiIFt1cFRpdGxlXT1cInNpemVcIlxuICAgIFthdHRyLmRhdGEtdGVzdF09XCJiYXNlRGF0YVRlc3QgKyAnLXRpdGxlJ1wiPlxuICB7eyB0aXRsZSB9fVxuPC9oMz5cbiJdfQ==