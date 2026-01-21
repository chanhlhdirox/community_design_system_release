import { Directive, HostBinding, Input } from '@angular/core';
import { TableAlign } from '../enums';
import * as i0 from "@angular/core";
export class BaseTableRowColumnDirective {
    constructor() {
        this.alignDirection = TableAlign.LEFT;
    }
    get tableAlignRightClass() {
        return this.alignDirection === TableAlign.RIGHT;
    }
}
BaseTableRowColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BaseTableRowColumnDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BaseTableRowColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: BaseTableRowColumnDirective, inputs: { alignDirection: "alignDirection" }, host: { properties: { "class.table-align-right": "this.tableAlignRightClass" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BaseTableRowColumnDirective, decorators: [{
            type: Directive
        }], propDecorators: { alignDirection: [{
                type: Input
            }], tableAlignRightClass: [{
                type: HostBinding,
                args: ['class.table-align-right']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10YWJsZS1yb3ctY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90YWJsZS9oZWxwZXJzL2Jhc2UtdGFibGUtcm93LWNvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBa0IsTUFBTSxVQUFVLENBQUM7O0FBR3RELE1BQU0sT0FBTywyQkFBMkI7SUFEeEM7UUFFVyxtQkFBYyxHQUFtQixVQUFVLENBQUMsSUFBSSxDQUFDO0tBSzNEO0lBSEMsSUFBNEMsb0JBQW9CO1FBQzlELE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ2xELENBQUM7O3dIQUxVLDJCQUEyQjs0R0FBM0IsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBRHZDLFNBQVM7OEJBRUMsY0FBYztzQkFBdEIsS0FBSztnQkFFc0Msb0JBQW9CO3NCQUEvRCxXQUFXO3VCQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUFsaWduLCBUYWJsZUFsaWduVHlwZSB9IGZyb20gJy4uL2VudW1zJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgQmFzZVRhYmxlUm93Q29sdW1uRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgYWxpZ25EaXJlY3Rpb246IFRhYmxlQWxpZ25UeXBlID0gVGFibGVBbGlnbi5MRUZUO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtYWxpZ24tcmlnaHQnKSBnZXQgdGFibGVBbGlnblJpZ2h0Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxpZ25EaXJlY3Rpb24gPT09IFRhYmxlQWxpZ24uUklHSFQ7XG4gIH1cbn1cbiJdfQ==