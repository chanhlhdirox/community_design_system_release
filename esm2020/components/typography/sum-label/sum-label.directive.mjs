import { Directive, Input } from '@angular/core';
import { UpTypographyBaseClass } from '../typography-base-class/typography.class';
import { sumLabelSizeClassesMap, SumLabelSizes } from '../../page-header/components/sums/sum-label.constants';
import * as i0 from "@angular/core";
export class UpSumLabelDirective extends UpTypographyBaseClass {
    constructor() {
        super(...arguments);
        this.sizeClassesMap = sumLabelSizeClassesMap;
        this.defaultSize = SumLabelSizes.Base;
    }
}
UpSumLabelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpSumLabelDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpSumLabelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpSumLabelDirective, selector: "[upSumLabel]", inputs: { size: ["upSumLabel", "size"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpSumLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upSumLabel]'
                }]
        }], propDecorators: { size: [{
                type: Input,
                args: ['upSumLabel']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9zdW0tbGFiZWwvc3VtLWxhYmVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLGFBQWEsRUFDZCxNQUFNLHVEQUF1RCxDQUFDOztBQUsvRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEscUJBQXFCO0lBSDlEOztRQUtXLG1CQUFjLEdBQUcsc0JBQXNCLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0tBQzNDOztnSEFKWSxtQkFBbUI7b0dBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs4QkFFc0IsSUFBSTtzQkFBeEIsS0FBSzt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBUeXBvZ3JhcGh5QmFzZUNsYXNzIH0gZnJvbSAnLi4vdHlwb2dyYXBoeS1iYXNlLWNsYXNzL3R5cG9ncmFwaHkuY2xhc3MnO1xuaW1wb3J0IHtcbiAgc3VtTGFiZWxTaXplQ2xhc3Nlc01hcCxcbiAgU3VtTGFiZWxTaXplc1xufSBmcm9tICcuLi8uLi9wYWdlLWhlYWRlci9jb21wb25lbnRzL3N1bXMvc3VtLWxhYmVsLmNvbnN0YW50cyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1cFN1bUxhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgVXBTdW1MYWJlbERpcmVjdGl2ZSBleHRlbmRzIFVwVHlwb2dyYXBoeUJhc2VDbGFzcyB7XG4gIEBJbnB1dCgndXBTdW1MYWJlbCcpIHNpemU6IFN1bUxhYmVsU2l6ZXM7XG4gIHJlYWRvbmx5IHNpemVDbGFzc2VzTWFwID0gc3VtTGFiZWxTaXplQ2xhc3Nlc01hcDtcbiAgcmVhZG9ubHkgZGVmYXVsdFNpemUgPSBTdW1MYWJlbFNpemVzLkJhc2U7XG59XG4iXX0=