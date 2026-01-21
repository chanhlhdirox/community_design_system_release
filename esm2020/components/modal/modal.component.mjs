import { ChangeDetectionStrategy, Component, HostBinding, Inject, ViewChild } from '@angular/core';
import { ModalRef } from './modal-ref';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
import * as i2 from "./modal-ref";
export var ModalContentTypes;
(function (ModalContentTypes) {
    ModalContentTypes["Template"] = "template";
    ModalContentTypes["Component"] = "component";
})(ModalContentTypes || (ModalContentTypes = {}));
export var ModalSize;
(function (ModalSize) {
    ModalSize["fullScreen"] = "full-screen";
})(ModalSize || (ModalSize = {}));
const ModalSizeCSSClasses = {
    [ModalSize.fullScreen]: 'up-full-screen-modal'
};
export class UpModalComponent {
    constructor(modalRef) {
        this.modalRef = modalRef;
        this.contentTypes = ModalContentTypes;
        this.content = this.modalRef.content;
    }
    get hostCssClasses() {
        if (!this.customModalCSSClass) {
            return this.modalBaseCssClass;
        }
        return `${this.modalBaseCssClass} ${this.customModalCSSClass}`;
    }
    get modalBaseCssClass() {
        return ModalSizeCSSClasses[this.modalRef.config.size] || 'up-modal';
    }
    get customModalCSSClass() {
        return this.modalRef.config.modalCSSClass || '';
    }
    close() {
        this.modalRef.close();
    }
    attachComponentPortal(portal) {
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        return this.portalOutlet.attachTemplatePortal(portal);
    }
}
UpModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalComponent, deps: [{ token: ModalRef }], target: i0.ɵɵFactoryTarget.Component });
UpModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpModalComponent, selector: "up-modal", host: { properties: { "class": "this.hostCssClasses" } }, viewQueries: [{ propertyName: "portalOutlet", first: true, predicate: CdkPortalOutlet, descendants: true, static: true }], ngImport: i0, template: "<div class=\"up-modal-content\">\n  <ng-template cdkPortalOutlet></ng-template>\n</div>\n", dependencies: [{ kind: "directive", type: i1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.Default });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-modal', changeDetection: ChangeDetectionStrategy.Default, template: "<div class=\"up-modal-content\">\n  <ng-template cdkPortalOutlet></ng-template>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i2.ModalRef, decorators: [{
                    type: Inject,
                    args: [ModalRef]
                }] }]; }, propDecorators: { portalOutlet: [{
                type: ViewChild,
                args: [CdkPortalOutlet, { static: true }]
            }], hostCssClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUdULFdBQVcsRUFDWCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBb0IsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQW1DLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFFdkYsTUFBTSxDQUFOLElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUMzQiwwQ0FBcUIsQ0FBQTtJQUNyQiw0Q0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSFcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUc1QjtBQUVELE1BQU0sQ0FBTixJQUFZLFNBRVg7QUFGRCxXQUFZLFNBQVM7SUFDbkIsdUNBQTBCLENBQUE7QUFDNUIsQ0FBQyxFQUZXLFNBQVMsS0FBVCxTQUFTLFFBRXBCO0FBRUQsTUFBTSxtQkFBbUIsR0FBRztJQUMxQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxzQkFBc0I7Q0FDL0MsQ0FBQztBQU9GLE1BQU0sT0FBTyxnQkFBZ0I7SUFhM0IsWUFBc0MsUUFBMkI7UUFBM0IsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFYakUsaUJBQVksR0FBRyxpQkFBaUIsQ0FBQztRQVkvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7SUFURCxJQUEwQixjQUFjO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7UUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFNRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQscUJBQXFCLENBQUMsTUFBMEI7UUFDOUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxvQkFBb0IsQ0FBSSxNQUF5QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7NkdBbkNVLGdCQUFnQixrQkFhUCxRQUFRO2lHQWJqQixnQkFBZ0Isd0pBSWhCLGVBQWUsOERDbEM1QiwyRkFHQTsyRkQyQmEsZ0JBQWdCO2tCQUw1QixTQUFTOytCQUNFLFVBQVUsbUJBRUgsdUJBQXVCLENBQUMsT0FBTzs7MEJBZW5DLE1BQU07MkJBQUMsUUFBUTs0Q0FUa0IsWUFBWTtzQkFBekQsU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVsQixjQUFjO3NCQUF2QyxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250ZW50VHlwZSwgTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5pbXBvcnQgeyBDZGtQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuZXhwb3J0IGVudW0gTW9kYWxDb250ZW50VHlwZXMge1xuICBUZW1wbGF0ZSA9ICd0ZW1wbGF0ZScsXG4gIENvbXBvbmVudCA9ICdjb21wb25lbnQnXG59XG5cbmV4cG9ydCBlbnVtIE1vZGFsU2l6ZSB7XG4gIGZ1bGxTY3JlZW4gPSAnZnVsbC1zY3JlZW4nXG59XG5cbmNvbnN0IE1vZGFsU2l6ZUNTU0NsYXNzZXMgPSB7XG4gIFtNb2RhbFNpemUuZnVsbFNjcmVlbl06ICd1cC1mdWxsLXNjcmVlbi1tb2RhbCdcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XG59KVxuZXhwb3J0IGNsYXNzIFVwTW9kYWxDb21wb25lbnQ8VCwgRCwgVj4ge1xuICBjb250ZW50OiBNb2RhbENvbnRlbnRUeXBlPFQ+O1xuICBjb250ZW50VHlwZXMgPSBNb2RhbENvbnRlbnRUeXBlcztcblxuICBAVmlld0NoaWxkKENka1BvcnRhbE91dGxldCwgeyBzdGF0aWM6IHRydWUgfSkgcG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBob3N0Q3NzQ2xhc3NlcygpIHtcbiAgICBpZiAoIXRoaXMuY3VzdG9tTW9kYWxDU1NDbGFzcykge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxCYXNlQ3NzQ2xhc3M7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLm1vZGFsQmFzZUNzc0NsYXNzfSAke3RoaXMuY3VzdG9tTW9kYWxDU1NDbGFzc31gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChNb2RhbFJlZikgcHJpdmF0ZSBtb2RhbFJlZjogTW9kYWxSZWY8VCwgRCwgVj4pIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLm1vZGFsUmVmLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgbW9kYWxCYXNlQ3NzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIE1vZGFsU2l6ZUNTU0NsYXNzZXNbdGhpcy5tb2RhbFJlZi5jb25maWcuc2l6ZV0gfHwgJ3VwLW1vZGFsJztcbiAgfVxuXG4gIGdldCBjdXN0b21Nb2RhbENTU0NsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxSZWYuY29uZmlnLm1vZGFsQ1NTQ2xhc3MgfHwgJyc7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKCk7XG4gIH1cblxuICBhdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VD4pOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLnBvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcbiAgfVxuXG4gIGF0dGFjaFRlbXBsYXRlUG9ydGFsPEM+KHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8Qz4pOiBFbWJlZGRlZFZpZXdSZWY8Qz4ge1xuICAgIHJldHVybiB0aGlzLnBvcnRhbE91dGxldC5hdHRhY2hUZW1wbGF0ZVBvcnRhbChwb3J0YWwpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidXAtbW9kYWwtY29udGVudFwiPlxuICA8bmctdGVtcGxhdGUgY2RrUG9ydGFsT3V0bGV0PjwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbiJdfQ==