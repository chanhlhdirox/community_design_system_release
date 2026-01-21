import { Directive, Input } from '@angular/core';
import { UpTypographyBaseClass } from '../typography-base-class/typography.class';
import * as i0 from "@angular/core";
export const TitleSizes = {
    XXS: 'XXS',
    XS: 'XS',
    S: 'S',
    Base: 'base',
    L: 'L',
    XL: 'XL',
    XXL: 'XXL',
    XXXL: 'XXXL'
};
export const titleSizeClassesMap = new Map([
    [TitleSizes.XXS, `up-title-${TitleSizes.XXS}`],
    [TitleSizes.XS, `up-title-${TitleSizes.XS}`],
    [TitleSizes.S, `up-title-${TitleSizes.S}`],
    [TitleSizes.Base, `up-title-${TitleSizes.Base}`],
    [TitleSizes.L, `up-title-${TitleSizes.L}`],
    [TitleSizes.XL, `up-title-${TitleSizes.XL}`],
    [TitleSizes.XXL, `up-title-${TitleSizes.XXL}`],
    [TitleSizes.XXXL, `up-title-${TitleSizes.XXXL}`]
]);
export class UpTitleDirective extends UpTypographyBaseClass {
    constructor() {
        super(...arguments);
        this.sizeClassesMap = titleSizeClassesMap;
        this.defaultSize = TitleSizes.Base;
    }
}
UpTitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTitleDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpTitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpTitleDirective, selector: "[upTitle]", inputs: { size: ["upTitle", "size"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTitle]'
                }]
        }], propDecorators: { size: [{
                type: Input,
                args: ['upTitle']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90eXBvZ3JhcGh5L3RpdGxlL3RpdGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFbEYsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHO0lBQ3hCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsRUFBRSxFQUFFLElBQUk7SUFDUixDQUFDLEVBQUUsR0FBRztJQUNOLElBQUksRUFBRSxNQUFNO0lBQ1osQ0FBQyxFQUFFLEdBQUc7SUFDTixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLE1BQU07Q0FDSixDQUFDO0FBR1gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxHQUFHLENBQW9CO0lBQzVELENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxZQUFZLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDNUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFlBQVksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFDLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxZQUFZLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoRCxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLFlBQVksVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzVDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxZQUFZLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDakQsQ0FBQyxDQUFDO0FBS0gsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHFCQUFxQjtJQUgzRDs7UUFLVyxtQkFBYyxHQUFHLG1CQUFtQixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztLQUN4Qzs7NkdBSlksZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7OEJBRW1CLElBQUk7c0JBQXJCLEtBQUs7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVwVHlwb2dyYXBoeUJhc2VDbGFzcyB9IGZyb20gJy4uL3R5cG9ncmFwaHktYmFzZS1jbGFzcy90eXBvZ3JhcGh5LmNsYXNzJztcblxuZXhwb3J0IGNvbnN0IFRpdGxlU2l6ZXMgPSB7XG4gIFhYUzogJ1hYUycsXG4gIFhTOiAnWFMnLFxuICBTOiAnUycsXG4gIEJhc2U6ICdiYXNlJyxcbiAgTDogJ0wnLFxuICBYTDogJ1hMJyxcbiAgWFhMOiAnWFhMJyxcbiAgWFhYTDogJ1hYWEwnXG59IGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgVGl0bGVTaXplID0gdHlwZW9mIFRpdGxlU2l6ZXNba2V5b2YgdHlwZW9mIFRpdGxlU2l6ZXNdO1xuXG5leHBvcnQgY29uc3QgdGl0bGVTaXplQ2xhc3Nlc01hcCA9IG5ldyBNYXA8VGl0bGVTaXplLCBzdHJpbmc+KFtcbiAgW1RpdGxlU2l6ZXMuWFhTLCBgdXAtdGl0bGUtJHtUaXRsZVNpemVzLlhYU31gXSxcbiAgW1RpdGxlU2l6ZXMuWFMsIGB1cC10aXRsZS0ke1RpdGxlU2l6ZXMuWFN9YF0sXG4gIFtUaXRsZVNpemVzLlMsIGB1cC10aXRsZS0ke1RpdGxlU2l6ZXMuU31gXSxcbiAgW1RpdGxlU2l6ZXMuQmFzZSwgYHVwLXRpdGxlLSR7VGl0bGVTaXplcy5CYXNlfWBdLFxuICBbVGl0bGVTaXplcy5MLCBgdXAtdGl0bGUtJHtUaXRsZVNpemVzLkx9YF0sXG4gIFtUaXRsZVNpemVzLlhMLCBgdXAtdGl0bGUtJHtUaXRsZVNpemVzLlhMfWBdLFxuICBbVGl0bGVTaXplcy5YWEwsIGB1cC10aXRsZS0ke1RpdGxlU2l6ZXMuWFhMfWBdLFxuICBbVGl0bGVTaXplcy5YWFhMLCBgdXAtdGl0bGUtJHtUaXRsZVNpemVzLlhYWEx9YF1cbl0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXBUaXRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFVwVGl0bGVEaXJlY3RpdmUgZXh0ZW5kcyBVcFR5cG9ncmFwaHlCYXNlQ2xhc3Mge1xuICBASW5wdXQoJ3VwVGl0bGUnKSBzaXplOiBUaXRsZVNpemU7XG4gIHJlYWRvbmx5IHNpemVDbGFzc2VzTWFwID0gdGl0bGVTaXplQ2xhc3Nlc01hcDtcbiAgcmVhZG9ubHkgZGVmYXVsdFNpemUgPSBUaXRsZVNpemVzLkJhc2U7XG59XG4iXX0=