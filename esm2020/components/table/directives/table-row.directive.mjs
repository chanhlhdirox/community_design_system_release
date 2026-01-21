import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TableRowDirective {
    constructor() {
        this.selected = false;
        this.upTableRowClass = true;
    }
    get isRowSelected() {
        return this.selected === true;
    }
}
TableRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TableRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: TableRowDirective, selector: "[upTableRow]", inputs: { selected: "selected" }, host: { properties: { "class.up-table-row": "this.upTableRowClass", "class.selected": "this.isRowSelected" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTableRow]'
                }]
        }], propDecorators: { selected: [{
                type: Input
            }], upTableRowClass: [{
                type: HostBinding,
                args: ['class.up-table-row']
            }], isRowSelected: [{
                type: HostBinding,
                args: ['class.selected']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFibGUvZGlyZWN0aXZlcy90YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLOUQsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUlXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFUyxvQkFBZSxHQUFHLElBQUksQ0FBQztLQUkzRDtJQUhDLElBQW1DLGFBQWE7UUFDOUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztJQUNoQyxDQUFDOzs4R0FOVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs4QkFFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUU2QixlQUFlO3NCQUFqRCxXQUFXO3VCQUFDLG9CQUFvQjtnQkFDRSxhQUFhO3NCQUEvQyxXQUFXO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1cFRhYmxlUm93XSdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSb3dEaXJlY3RpdmUge1xuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudXAtdGFibGUtcm93JykgdXBUYWJsZVJvd0NsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZWxlY3RlZCcpIGdldCBpc1Jvd1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkID09PSB0cnVlO1xuICB9XG59XG4iXX0=