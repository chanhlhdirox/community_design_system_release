import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { NotificationCategory, NotificationsProvider } from '../../notification.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var ProgressBarAnimationConfig;
(function (ProgressBarAnimationConfig) {
    ProgressBarAnimationConfig["AnimationName"] = "progress";
    ProgressBarAnimationConfig["FillMode"] = "forwards";
})(ProgressBarAnimationConfig || (ProgressBarAnimationConfig = {}));
export class UpNotificationProgressBarComponent {
    constructor(provider) {
        this.provider = provider;
        this.duration = 3000;
        this.type = NotificationCategory.INFO;
    }
    get progressBarClassName() {
        return (this.provider.progressBarClassName.get(this.type) ||
            this.provider.progressBarClassName.get(NotificationCategory.INFO));
    }
    get animationDuration() {
        return `${this.duration}ms`;
    }
    get animationCssProperty() {
        return `${ProgressBarAnimationConfig.AnimationName} ${this.animationDuration} ${ProgressBarAnimationConfig.FillMode}`;
    }
    get shouldAnimateProgressBar() {
        return this.duration > 0;
    }
}
UpNotificationProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationProgressBarComponent, deps: [{ token: NotificationsProvider }], target: i0.ɵɵFactoryTarget.Component });
UpNotificationProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpNotificationProgressBarComponent, selector: "up-notification-progress-bar", inputs: { duration: "duration", type: "type" }, ngImport: i0, template: "<div class=\"notification-progress-bar-container\">\n  <div *ngIf=\"shouldAnimateProgressBar\" [ngClass]=\"['up-progress-bar', progressBarClassName]\">\n    <span [style.animation]=\"animationCssProperty\"></span>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-notification-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"notification-progress-bar-container\">\n  <div *ngIf=\"shouldAnimateProgressBar\" [ngClass]=\"['up-progress-bar', progressBarClassName]\">\n    <span [style.animation]=\"animationCssProperty\"></span>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NotificationsProvider]
                }] }]; }, propDecorators: { duration: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFDTCxvQkFBb0IsRUFFcEIscUJBQXFCLEVBRXRCLE1BQU0sOEJBQThCLENBQUM7OztBQUV0QyxJQUFLLDBCQUdKO0FBSEQsV0FBSywwQkFBMEI7SUFDN0Isd0RBQTBCLENBQUE7SUFDMUIsbURBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUhJLDBCQUEwQixLQUExQiwwQkFBMEIsUUFHOUI7QUFPRCxNQUFNLE9BQU8sa0NBQWtDO0lBSTdDLFlBQW1ELFFBQXVCO1FBQXZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFIakUsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixTQUFJLEdBQXFCLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQUVpQixDQUFDO0lBRTlFLElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUNsRSxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sR0FBRywwQkFBMEIsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLDBCQUEwQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hILENBQUM7SUFFRCxJQUFJLHdCQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OytIQXZCVSxrQ0FBa0Msa0JBSXpCLHFCQUFxQjttSEFKOUIsa0NBQWtDLG9IQ2xCL0MsMk9BS0E7MkZEYWEsa0NBQWtDO2tCQUw5QyxTQUFTOytCQUNFLDhCQUE4QixtQkFFdkIsdUJBQXVCLENBQUMsTUFBTTs7MEJBTWxDLE1BQU07MkJBQUMscUJBQXFCOzRDQUhoQyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5vdGlmaWNhdGlvbkNhdGVnb3J5LFxuICBOb3RpZmljYXRpb25zLFxuICBOb3RpZmljYXRpb25zUHJvdmlkZXIsXG4gIE5vdGlmaWNhdGlvblR5cGVcbn0gZnJvbSAnLi4vLi4vbm90aWZpY2F0aW9uLmNvbnN0YW50cyc7XG5cbmVudW0gUHJvZ3Jlc3NCYXJBbmltYXRpb25Db25maWcge1xuICBBbmltYXRpb25OYW1lID0gJ3Byb2dyZXNzJyxcbiAgRmlsbE1vZGUgPSAnZm9yd2FyZHMnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLW5vdGlmaWNhdGlvbi1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVXBOb3RpZmljYXRpb25Qcm9ncmVzc0JhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGR1cmF0aW9uID0gMzAwMDtcbiAgQElucHV0KCkgdHlwZTogTm90aWZpY2F0aW9uVHlwZSA9IE5vdGlmaWNhdGlvbkNhdGVnb3J5LklORk87XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOb3RpZmljYXRpb25zUHJvdmlkZXIpIHByaXZhdGUgcHJvdmlkZXI6IE5vdGlmaWNhdGlvbnMpIHt9XG5cbiAgZ2V0IHByb2dyZXNzQmFyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvdmlkZXIucHJvZ3Jlc3NCYXJDbGFzc05hbWUuZ2V0KHRoaXMudHlwZSkgfHxcbiAgICAgIHRoaXMucHJvdmlkZXIucHJvZ3Jlc3NCYXJDbGFzc05hbWUuZ2V0KE5vdGlmaWNhdGlvbkNhdGVnb3J5LklORk8pXG4gICAgKTtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25EdXJhdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmR1cmF0aW9ufW1zYDtcbiAgfVxuXG4gIGdldCBhbmltYXRpb25Dc3NQcm9wZXJ0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtQcm9ncmVzc0JhckFuaW1hdGlvbkNvbmZpZy5BbmltYXRpb25OYW1lfSAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb259ICR7UHJvZ3Jlc3NCYXJBbmltYXRpb25Db25maWcuRmlsbE1vZGV9YDtcbiAgfVxuXG4gIGdldCBzaG91bGRBbmltYXRlUHJvZ3Jlc3NCYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHVyYXRpb24gPiAwO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uLXByb2dyZXNzLWJhci1jb250YWluZXJcIj5cbiAgPGRpdiAqbmdJZj1cInNob3VsZEFuaW1hdGVQcm9ncmVzc0JhclwiIFtuZ0NsYXNzXT1cIlsndXAtcHJvZ3Jlc3MtYmFyJywgcHJvZ3Jlc3NCYXJDbGFzc05hbWVdXCI+XG4gICAgPHNwYW4gW3N0eWxlLmFuaW1hdGlvbl09XCJhbmltYXRpb25Dc3NQcm9wZXJ0eVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==