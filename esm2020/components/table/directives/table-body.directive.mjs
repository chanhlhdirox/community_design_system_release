import { Directive, ElementRef, HostBinding, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class TableBodyDirective {
    constructor(el) {
        this.el = el;
        this.upTableBodyClass = true;
    }
}
TableBodyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableBodyDirective, deps: [{ token: ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
TableBodyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: TableBodyDirective, selector: "[upTableBody]", host: { properties: { "class.up-table-body": "this.upTableBodyClass" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableBodyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTableBody]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }]; }, propDecorators: { upTableBodyClass: [{
                type: HostBinding,
                args: ['class.up-table-body']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvdGFibGUtYm9keS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0UsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUF1QyxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZqQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFFSixDQUFDOzsrR0FIOUMsa0JBQWtCLGtCQUdULFVBQVU7bUdBSG5CLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7MEJBSWMsTUFBTTsyQkFBQyxVQUFVOzRDQUZNLGdCQUFnQjtzQkFBbkQsV0FBVzt1QkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VwVGFibGVCb2R5XSdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVCb2R5RGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51cC10YWJsZS1ib2R5JykgdXBUYWJsZUJvZHlDbGFzcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChFbGVtZW50UmVmKSBwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG59XG4iXX0=