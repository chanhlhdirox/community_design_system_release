import { Directive, ElementRef, HostBinding, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class TableSubHeadDirective {
    constructor(el) {
        this.el = el;
        this.upTableSubHeadClass = true;
    }
}
TableSubHeadDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableSubHeadDirective, deps: [{ token: ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
TableSubHeadDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: TableSubHeadDirective, selector: "[upTableSubHead]", host: { properties: { "class.up-table-sub-head": "this.upTableSubHeadClass" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableSubHeadDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTableSubHead]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }]; }, propDecorators: { upTableSubHeadClass: [{
                type: HostBinding,
                args: ['class.up-table-sub-head']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3ViLWhlYWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLXN1Yi1oZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszRSxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLFlBQXVDLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRmIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO0lBRVgsQ0FBQzs7a0hBSjlDLHFCQUFxQixrQkFJWixVQUFVO3NHQUpuQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7MEJBS2MsTUFBTTsyQkFBQyxVQUFVOzRDQUZVLG1CQUFtQjtzQkFBMUQsV0FBVzt1QkFBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VwVGFibGVTdWJIZWFkXSdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTdWJIZWFkRGlyZWN0aXZlIHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnVwLXRhYmxlLXN1Yi1oZWFkJykgdXBUYWJsZVN1YkhlYWRDbGFzcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChFbGVtZW50UmVmKSBwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbn1cbiJdfQ==