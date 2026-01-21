import { Directive, Input } from '@angular/core';
import { UpTypographyBaseClass } from '../typography-base-class/typography.class';
import * as i0 from "@angular/core";
export const ParagraphSizes = {
    XXS: 'XXS',
    XS: 'XS',
    S: 'S',
    Base: 'base'
};
export const ParagraphFontWeights = {
    Regular: 'regular',
    Bold: 'bold'
};
export const paragraphSizeClassesMap = new Map([
    [ParagraphSizes.XXS, `up-paragraph-${ParagraphSizes.XXS}`],
    [ParagraphSizes.XS, `up-paragraph-${ParagraphSizes.XS}`],
    [ParagraphSizes.S, `up-paragraph-${ParagraphSizes.S}`],
    [ParagraphSizes.Base, `up-paragraph-${ParagraphSizes.Base}`]
]);
export const paragraphFontWeightClassesMap = new Map([
    [ParagraphFontWeights.Regular, `up-paragraph-${ParagraphFontWeights.Regular}`],
    [ParagraphFontWeights.Bold, `up-paragraph-${ParagraphFontWeights.Bold}`]
]);
export class UpParagraphDirective extends UpTypographyBaseClass {
    constructor() {
        super(...arguments);
        this.fontWeight = ParagraphFontWeights.Regular;
        this.sizeClassesMap = paragraphSizeClassesMap;
        this.fontWeightClassesMap = paragraphFontWeightClassesMap;
        this.defaultSize = ParagraphSizes.Base;
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (!this.fontWeight) {
            this.renderer.addClass(this.hostElement.nativeElement, this.fontWeightClassesMap.get(this.fontWeight));
            return;
        }
        if (!this.isFontWeightValid(this.fontWeight)) {
            console.error(`${this.fontWeight} is not a valid font weight.`);
            return;
        }
        this.renderer.addClass(this.hostElement.nativeElement, this.fontWeightClassesMap.get(this.fontWeight));
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.fontWeight) {
            this.renderer.removeClass(this.hostElement.nativeElement, this.fontWeightClassesMap.get(changes.fontWeight.previousValue));
            this.renderer.addClass(this.hostElement.nativeElement, this.fontWeightClassesMap.get(changes.fontWeight.currentValue));
        }
    }
    isFontWeightValid(fontWeight) {
        return this.fontWeightClassesMap.has(fontWeight);
    }
}
UpParagraphDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpParagraphDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpParagraphDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpParagraphDirective, selector: "[upParagraph]", inputs: { size: ["upParagraph", "size"], fontWeight: "fontWeight" }, usesInheritance: true, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpParagraphDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upParagraph]'
                }]
        }], propDecorators: { size: [{
                type: Input,
                args: ['upParagraph']
            }], fontWeight: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9wYXJhZ3JhcGgvcGFyYWdyYXBoLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQUVsRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDNUIsR0FBRyxFQUFFLEtBQUs7SUFDVixFQUFFLEVBQUUsSUFBSTtJQUNSLENBQUMsRUFBRSxHQUFHO0lBQ04sSUFBSSxFQUFFLE1BQU07Q0FDSixDQUFDO0FBR1gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUc7SUFDbEMsT0FBTyxFQUFFLFNBQVM7SUFDbEIsSUFBSSxFQUFFLE1BQU07Q0FDSixDQUFDO0FBR1gsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxHQUFHLENBQXdCO0lBQ3BFLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFELENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3hELENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQzdELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLElBQUksR0FBRyxDQUE4QjtJQUNoRixDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxnQkFBZ0Isb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO0NBQ3pFLENBQUMsQ0FBQztBQUtILE1BQU0sT0FBTyxvQkFDWCxTQUFRLHFCQUFxQjtJQUovQjs7UUFRVyxlQUFVLEdBQXdCLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUUvRCxtQkFBYyxHQUFHLHVCQUF1QixDQUFDO1FBQ3pDLHlCQUFvQixHQUFHLDZCQUE2QixDQUFDO1FBQ3JELGdCQUFXLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQztLQXlDNUM7SUF2Q0MsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMvQyxDQUFDO1lBQ0YsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLDhCQUE4QixDQUFDLENBQUM7WUFDaEUsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQ2hFLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FDL0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFVBQStCO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDOztpSEFqRFUsb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7OEJBS3VCLElBQUk7c0JBQXpCLEtBQUs7dUJBQUMsYUFBYTtnQkFDWCxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcFR5cG9ncmFwaHlCYXNlQ2xhc3MgfSBmcm9tICcuLi90eXBvZ3JhcGh5LWJhc2UtY2xhc3MvdHlwb2dyYXBoeS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGhTaXplcyA9IHtcbiAgWFhTOiAnWFhTJyxcbiAgWFM6ICdYUycsXG4gIFM6ICdTJyxcbiAgQmFzZTogJ2Jhc2UnXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgUGFyYWdyYXBoU2l6ZSA9IHR5cGVvZiBQYXJhZ3JhcGhTaXplc1trZXlvZiB0eXBlb2YgUGFyYWdyYXBoU2l6ZXNdO1xuXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoRm9udFdlaWdodHMgPSB7XG4gIFJlZ3VsYXI6ICdyZWd1bGFyJyxcbiAgQm9sZDogJ2JvbGQnXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgUGFyYWdyYXBoRm9udFdlaWdodCA9IHR5cGVvZiBQYXJhZ3JhcGhGb250V2VpZ2h0c1trZXlvZiB0eXBlb2YgUGFyYWdyYXBoRm9udFdlaWdodHNdO1xuXG5leHBvcnQgY29uc3QgcGFyYWdyYXBoU2l6ZUNsYXNzZXNNYXAgPSBuZXcgTWFwPFBhcmFncmFwaFNpemUsIHN0cmluZz4oW1xuICBbUGFyYWdyYXBoU2l6ZXMuWFhTLCBgdXAtcGFyYWdyYXBoLSR7UGFyYWdyYXBoU2l6ZXMuWFhTfWBdLFxuICBbUGFyYWdyYXBoU2l6ZXMuWFMsIGB1cC1wYXJhZ3JhcGgtJHtQYXJhZ3JhcGhTaXplcy5YU31gXSxcbiAgW1BhcmFncmFwaFNpemVzLlMsIGB1cC1wYXJhZ3JhcGgtJHtQYXJhZ3JhcGhTaXplcy5TfWBdLFxuICBbUGFyYWdyYXBoU2l6ZXMuQmFzZSwgYHVwLXBhcmFncmFwaC0ke1BhcmFncmFwaFNpemVzLkJhc2V9YF1cbl0pO1xuXG5leHBvcnQgY29uc3QgcGFyYWdyYXBoRm9udFdlaWdodENsYXNzZXNNYXAgPSBuZXcgTWFwPFBhcmFncmFwaEZvbnRXZWlnaHQsIHN0cmluZz4oW1xuICBbUGFyYWdyYXBoRm9udFdlaWdodHMuUmVndWxhciwgYHVwLXBhcmFncmFwaC0ke1BhcmFncmFwaEZvbnRXZWlnaHRzLlJlZ3VsYXJ9YF0sXG4gIFtQYXJhZ3JhcGhGb250V2VpZ2h0cy5Cb2xkLCBgdXAtcGFyYWdyYXBoLSR7UGFyYWdyYXBoRm9udFdlaWdodHMuQm9sZH1gXVxuXSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1cFBhcmFncmFwaF0nXG59KVxuZXhwb3J0IGNsYXNzIFVwUGFyYWdyYXBoRGlyZWN0aXZlXG4gIGV4dGVuZHMgVXBUeXBvZ3JhcGh5QmFzZUNsYXNzXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzXG57XG4gIEBJbnB1dCgndXBQYXJhZ3JhcGgnKSBzaXplOiBQYXJhZ3JhcGhTaXplO1xuICBASW5wdXQoKSBmb250V2VpZ2h0OiBQYXJhZ3JhcGhGb250V2VpZ2h0ID0gUGFyYWdyYXBoRm9udFdlaWdodHMuUmVndWxhcjtcblxuICByZWFkb25seSBzaXplQ2xhc3Nlc01hcCA9IHBhcmFncmFwaFNpemVDbGFzc2VzTWFwO1xuICByZWFkb25seSBmb250V2VpZ2h0Q2xhc3Nlc01hcCA9IHBhcmFncmFwaEZvbnRXZWlnaHRDbGFzc2VzTWFwO1xuICByZWFkb25seSBkZWZhdWx0U2l6ZSA9IFBhcmFncmFwaFNpemVzLkJhc2U7XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG4gICAgaWYgKCF0aGlzLmZvbnRXZWlnaHQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5mb250V2VpZ2h0Q2xhc3Nlc01hcC5nZXQodGhpcy5mb250V2VpZ2h0KVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNGb250V2VpZ2h0VmFsaWQodGhpcy5mb250V2VpZ2h0KSkge1xuICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmZvbnRXZWlnaHR9IGlzIG5vdCBhIHZhbGlkIGZvbnQgd2VpZ2h0LmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5mb250V2VpZ2h0Q2xhc3Nlc01hcC5nZXQodGhpcy5mb250V2VpZ2h0KVxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBpZiAoY2hhbmdlcy5mb250V2VpZ2h0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuZm9udFdlaWdodENsYXNzZXNNYXAuZ2V0KGNoYW5nZXMuZm9udFdlaWdodC5wcmV2aW91c1ZhbHVlKVxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5mb250V2VpZ2h0Q2xhc3Nlc01hcC5nZXQoY2hhbmdlcy5mb250V2VpZ2h0LmN1cnJlbnRWYWx1ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0ZvbnRXZWlnaHRWYWxpZChmb250V2VpZ2h0OiBQYXJhZ3JhcGhGb250V2VpZ2h0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9udFdlaWdodENsYXNzZXNNYXAuaGFzKGZvbnRXZWlnaHQpO1xuICB9XG59XG4iXX0=