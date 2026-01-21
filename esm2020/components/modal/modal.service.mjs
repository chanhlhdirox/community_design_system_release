import { GlobalPositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector, TemplateRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { ModalRef } from './modal-ref';
import { UpModalComponent } from './modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
var ModalCssClasses;
(function (ModalCssClasses) {
    ModalCssClasses["PanelClass"] = "up-modal-panel";
    ModalCssClasses["BackdropClass"] = "up-modal-backdrop";
})(ModalCssClasses || (ModalCssClasses = {}));
export class UpModalService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
        this.modals = [];
        this.overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            panelClass: ModalCssClasses.PanelClass,
            backdropClass: ModalCssClasses.BackdropClass,
            positionStrategy: new GlobalPositionStrategy()
        });
    }
    open(content, data, config = {}) {
        const overlay = this.overlay.create(this.overlayConfig);
        const modalRef = new ModalRef(overlay, content, data, config);
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = Injector.create({
            parent: userInjector || this.injector,
            providers: [{ provide: ModalRef, useValue: modalRef }]
        });
        const viewContainerRef = config.viewContainerRef || null;
        const overlayRef = overlay.attach(new ComponentPortal(UpModalComponent, viewContainerRef, injector, config.componentFactoryResolver));
        if (content instanceof TemplateRef) {
            overlayRef.instance.attachTemplatePortal(
            // @ts-ignore
            new TemplatePortal(content, viewContainerRef, modalRef));
        }
        else {
            const componentRef = overlayRef.instance.attachComponentPortal(new ComponentPortal(content, config.viewContainerRef, Injector.create({
                parent: userInjector || this.injector,
                providers: [{ provide: ModalRef, useValue: modalRef }]
            }), config.componentFactoryResolver));
            modalRef.componentInstance = componentRef.instance;
        }
        this.modals.push(modalRef);
        return modalRef;
    }
    closeAll() {
        this.modals.filter((modal) => modal.active).forEach((modal) => modal.close());
    }
}
UpModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalService, deps: [{ token: i1.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
UpModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsc0JBQXNCLEVBRXRCLGFBQWEsRUFDZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFHTCxVQUFVLEVBQ1YsUUFBUSxFQUNSLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUVoRSxJQUFLLGVBR0o7QUFIRCxXQUFLLGVBQWU7SUFDbEIsZ0RBQTZCLENBQUE7SUFDN0Isc0RBQW1DLENBQUE7QUFDckMsQ0FBQyxFQUhJLGVBQWUsS0FBZixlQUFlLFFBR25CO0FBYUQsTUFBTSxPQUFPLGNBQWM7SUFJekIsWUFBb0IsT0FBZ0IsRUFBVSxRQUFrQjtRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUZoRSxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDckMsV0FBVyxFQUFFLElBQUk7WUFDakIsVUFBVSxFQUFFLGVBQWUsQ0FBQyxVQUFVO1lBQ3RDLGFBQWEsRUFBRSxlQUFlLENBQUMsYUFBYTtZQUM1QyxnQkFBZ0IsRUFBRSxJQUFJLHNCQUFzQixFQUFFO1NBQy9DLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLENBQ0YsT0FBMEMsRUFDMUMsSUFBUSxFQUNSLFNBQXdCLEVBQUU7UUFFMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFVLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsZ0JBQWdCLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMzRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxZQUFZLElBQUksSUFBSSxDQUFDLFFBQVE7WUFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUN2RCxDQUFDLENBQUM7UUFDSCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUM7UUFFekQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FDL0IsSUFBSSxlQUFlLENBQ2pCLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLE1BQU0sQ0FBQyx3QkFBd0IsQ0FDaEMsQ0FDRixDQUFDO1FBRUYsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CO1lBQ3RDLGFBQWE7WUFDYixJQUFJLGNBQWMsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQ3hELENBQUM7U0FDSDthQUFNO1lBQ0wsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FDNUQsSUFBSSxlQUFlLENBQ2pCLE9BQU8sRUFDUCxNQUFNLENBQUMsZ0JBQWdCLEVBQ3ZCLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUN2RCxDQUFDLEVBQ0YsTUFBTSxDQUFDLHdCQUF3QixDQUNoQyxDQUNGLENBQUM7WUFDRixRQUFRLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLFFBQXFDLENBQUM7U0FDakY7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDOzsyR0EvRFUsY0FBYzsrR0FBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRUeXBlLFxuICBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBNb2RhbFJlZiB9IGZyb20gJy4vbW9kYWwtcmVmJztcbmltcG9ydCB7IE1vZGFsU2l6ZSwgVXBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcblxuZW51bSBNb2RhbENzc0NsYXNzZXMge1xuICBQYW5lbENsYXNzID0gJ3VwLW1vZGFsLXBhbmVsJyxcbiAgQmFja2Ryb3BDbGFzcyA9ICd1cC1tb2RhbC1iYWNrZHJvcCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcE1vZGFsQ29uZmlnIHtcbiAgaWQ/OiBudW1iZXI7XG4gIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICBvcmlnaW5FbGVtZW50UmVmPzogRWxlbWVudFJlZjtcbiAgbW9kYWxDU1NDbGFzcz86IHN0cmluZztcbiAgc3RhdGljQmFja2Ryb3A/OiBib29sZWFuO1xuICBzaXplPzogTW9kYWxTaXplO1xuICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI/OiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcE1vZGFsU2VydmljZSB7XG4gIG92ZXJsYXlDb25maWc6IE92ZXJsYXlDb25maWc7XG4gIG1vZGFsczogTW9kYWxSZWZbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLm92ZXJsYXlDb25maWcgPSBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIHBhbmVsQ2xhc3M6IE1vZGFsQ3NzQ2xhc3Nlcy5QYW5lbENsYXNzLFxuICAgICAgYmFja2Ryb3BDbGFzczogTW9kYWxDc3NDbGFzc2VzLkJhY2tkcm9wQ2xhc3MsXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiBuZXcgR2xvYmFsUG9zaXRpb25TdHJhdGVneSgpXG4gICAgfSk7XG4gIH1cblxuICBvcGVuPFQsIEQsIFI+KFxuICAgIGNvbnRlbnQ6IENvbXBvbmVudFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxUPixcbiAgICBkYXRhPzogRCxcbiAgICBjb25maWc6IFVwTW9kYWxDb25maWcgPSB7fVxuICApOiBNb2RhbFJlZjxULCBELCBSPiB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5vdmVybGF5Q29uZmlnKTtcbiAgICBjb25zdCBtb2RhbFJlZiA9IG5ldyBNb2RhbFJlZjxULCBELCBSPihvdmVybGF5LCBjb250ZW50LCBkYXRhLCBjb25maWcpO1xuICAgIGNvbnN0IHVzZXJJbmplY3RvciA9IGNvbmZpZyAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZiAmJiBjb25maWcudmlld0NvbnRhaW5lclJlZi5pbmplY3RvcjtcbiAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwYXJlbnQ6IHVzZXJJbmplY3RvciB8fCB0aGlzLmluamVjdG9yLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNb2RhbFJlZiwgdXNlVmFsdWU6IG1vZGFsUmVmIH1dXG4gICAgfSk7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGNvbmZpZy52aWV3Q29udGFpbmVyUmVmIHx8IG51bGw7XG5cbiAgICBjb25zdCBvdmVybGF5UmVmID0gb3ZlcmxheS5hdHRhY2goXG4gICAgICBuZXcgQ29tcG9uZW50UG9ydGFsKFxuICAgICAgICBVcE1vZGFsQ29tcG9uZW50LFxuICAgICAgICB2aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBpbmplY3RvcixcbiAgICAgICAgY29uZmlnLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgKVxuICAgICk7XG5cbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBvdmVybGF5UmVmLmluc3RhbmNlLmF0dGFjaFRlbXBsYXRlUG9ydGFsKFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5ldyBUZW1wbGF0ZVBvcnRhbChjb250ZW50LCB2aWV3Q29udGFpbmVyUmVmLCBtb2RhbFJlZilcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuaW5zdGFuY2UuYXR0YWNoQ29tcG9uZW50UG9ydGFsKFxuICAgICAgICBuZXcgQ29tcG9uZW50UG9ydGFsKFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgY29uZmlnLnZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHBhcmVudDogdXNlckluamVjdG9yIHx8IHRoaXMuaW5qZWN0b3IsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1vZGFsUmVmLCB1c2VWYWx1ZTogbW9kYWxSZWYgfV1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25maWcuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBVcE1vZGFsQ29tcG9uZW50PFQsIEQsIFI+O1xuICAgIH1cblxuICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWxSZWYpO1xuXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xuICB9XG5cbiAgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbHMuZmlsdGVyKChtb2RhbCkgPT4gbW9kYWwuYWN0aXZlKS5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xvc2UoKSk7XG4gIH1cbn1cbiJdfQ==