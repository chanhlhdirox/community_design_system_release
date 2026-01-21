import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { PageNotificationContainerComponent } from './components';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
const OVERLAY_CONTAINER_Z_INDEX = '1010';
export class UpPageNotificationService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    get container() {
        return this.containerInstance;
    }
    createContainer() {
        const overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position().global()
        });
        const componentPortal = new ComponentPortal(PageNotificationContainerComponent, null, this.injector);
        const componentRef = overlayRef.attach(componentPortal);
        overlayRef.overlayElement.style.zIndex = OVERLAY_CONTAINER_Z_INDEX;
        return componentRef.instance;
    }
    add(options) {
        if (!this.container) {
            this.containerInstance = this.createContainer();
        }
        return this.container.create(options);
    }
    remove(id) {
        if (!this.container) {
            return;
        }
        if (id) {
            this.container.remove(id);
        }
        else {
            this.container.removeAll();
        }
    }
}
UpPageNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPageNotificationService, deps: [{ token: i1.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
UpPageNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPageNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPageNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3RpZmljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvcGFnZS1ub3RpZmljYXRpb24vcGFnZS1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUdsRSxNQUFNLHlCQUF5QixHQUFHLE1BQU0sQ0FBQztBQUd6QyxNQUFNLE9BQU8seUJBQXlCO0lBR3BDLFlBQW9CLE9BQWdCLEVBQVUsUUFBa0I7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBRXBFLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3JDLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtZQUNwRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRTtTQUNuRCxDQUFDLENBQUM7UUFDSCxNQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FDekMsa0NBQWtDLEVBQ2xDLElBQUksRUFDSixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7UUFDRixNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hELFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQztRQUVuRSxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxPQUFrQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVc7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxFQUFFLEVBQUU7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7O3NIQTFDVSx5QkFBeUI7MEhBQXpCLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnZU5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQYWdlTm90aWZpY2F0aW9uLCBDcmVhdGVOb3RpZmljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuY29uc3QgT1ZFUkxBWV9DT05UQUlORVJfWl9JTkRFWCA9ICcxMDEwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwUGFnZU5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGNvbnRhaW5lckluc3RhbmNlOiBQYWdlTm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgZ2V0IGNvbnRhaW5lcigpOiBQYWdlTm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJJbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29udGFpbmVyKCk6IFBhZ2VOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQge1xuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ub29wKCksXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKVxuICAgIH0pO1xuICAgIGNvbnN0IGNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoXG4gICAgICBQYWdlTm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbXBvbmVudFBvcnRhbCk7XG4gICAgb3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5zdHlsZS56SW5kZXggPSBPVkVSTEFZX0NPTlRBSU5FUl9aX0lOREVYO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIGFkZChvcHRpb25zOiBDcmVhdGVOb3RpZmljYXRpb25PcHRpb25zKTogUGFnZU5vdGlmaWNhdGlvbiB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXJJbnN0YW5jZSA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5jcmVhdGUob3B0aW9ucyk7XG4gIH1cblxuICByZW1vdmUoaWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpZCkge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlKGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQWxsKCk7XG4gICAgfVxuICB9XG59XG4iXX0=