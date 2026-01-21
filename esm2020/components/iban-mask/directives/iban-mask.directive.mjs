import { Directive, HostListener, Input } from '@angular/core';
import { IbanPipe } from '../pipes/iban.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../pipes/iban.pipe";
import * as i2 from "@angular/forms";
export class IbanMaskDirective {
    constructor(element, ibanPipe, control) {
        this.element = element;
        this.ibanPipe = ibanPipe;
        this.control = control;
        this.autocompleteCountryCodeAndChecksum = false;
    }
    ngOnInit() {
        if (this.control && this.control.value) {
            this.updateValue(this.control.value);
        }
    }
    inputChange(value) {
        this.updateValue(value);
    }
    updateValue(value) {
        if (value) {
            this.element.nativeElement.value = this.ibanPipe.transform(value, this.autocompleteCountryCodeAndChecksum, this.countryCode);
            this.control.control.setValue(this.ibanPipe.parse(value, this.autocompleteCountryCodeAndChecksum, this.countryCode), {
                onlySelf: false,
                emitEvent: false,
                emitModelToViewChange: false,
                emitViewToModelChange: false
            });
        }
    }
}
IbanMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IbanMaskDirective, deps: [{ token: i0.ElementRef }, { token: i1.IbanPipe }, { token: i2.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
IbanMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: IbanMaskDirective, selector: "[upIBAN]", inputs: { autocompleteCountryCodeAndChecksum: "autocompleteCountryCodeAndChecksum", countryCode: "countryCode" }, host: { listeners: { "input": "inputChange($event.target.value)" } }, providers: [IbanPipe], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: IbanMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upIBAN]',
                    providers: [IbanPipe]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.IbanPipe }, { type: i2.NgControl }]; }, propDecorators: { autocompleteCountryCodeAndChecksum: [{
                type: Input
            }], countryCode: [{
                type: Input
            }], inputChange: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWJhbi1tYXNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvaWJhbi1tYXNrL2RpcmVjdGl2ZXMvaWJhbi1tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBc0IsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQU05QyxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQ1UsT0FBbUIsRUFDbkIsUUFBa0IsRUFDbEIsT0FBa0I7UUFGbEIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFObkIsdUNBQWtDLEdBQUcsS0FBSyxDQUFDO0lBT2pELENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFHRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFLO1FBQ3ZCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUN4RCxLQUFLLEVBQ0wsSUFBSSxDQUFDLGtDQUFrQyxFQUN2QyxJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDckY7Z0JBQ0UsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLHFCQUFxQixFQUFFLEtBQUs7Z0JBQzVCLHFCQUFxQixFQUFFLEtBQUs7YUFDN0IsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs4R0F0Q1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsMk5BRmpCLENBQUMsUUFBUSxDQUFDOzJGQUVWLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUN0QjtnSkFFVSxrQ0FBa0M7c0JBQTFDLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFlTixXQUFXO3NCQURWLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSWJhblBpcGUgfSBmcm9tICcuLi9waXBlcy9pYmFuLnBpcGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXBJQkFOXScsXG4gIHByb3ZpZGVyczogW0liYW5QaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJYmFuTWFza0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZUNvdW50cnlDb2RlQW5kQ2hlY2tzdW0gPSBmYWxzZTtcbiAgQElucHV0KCkgY291bnRyeUNvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpYmFuUGlwZTogSWJhblBpcGUsXG4gICAgcHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5jb250cm9sLnZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuY29udHJvbC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcbiAgaW5wdXRDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5pYmFuUGlwZS50cmFuc2Zvcm0oXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNvdW50cnlDb2RlQW5kQ2hlY2tzdW0sXG4gICAgICAgIHRoaXMuY291bnRyeUNvZGVcbiAgICAgICk7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShcbiAgICAgICAgdGhpcy5pYmFuUGlwZS5wYXJzZSh2YWx1ZSwgdGhpcy5hdXRvY29tcGxldGVDb3VudHJ5Q29kZUFuZENoZWNrc3VtLCB0aGlzLmNvdW50cnlDb2RlKSxcbiAgICAgICAge1xuICAgICAgICAgIG9ubHlTZWxmOiBmYWxzZSxcbiAgICAgICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2UsXG4gICAgICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19