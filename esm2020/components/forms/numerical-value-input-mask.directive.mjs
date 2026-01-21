import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class NumericalValueInputMaskDirective {
    constructor(element, control) {
        this.element = element;
        this.control = control;
    }
    ngOnInit() {
        if (this.control && this.control.value) {
            this.inputChange(this.control.value);
        }
    }
    inputChange(value) {
        if (!value) {
            return;
        }
        const cleanValue = this.getCleanNumericValue(value);
        this.updateValue(cleanValue, cleanValue);
    }
    inputBlur(value) {
        if (!value) {
            return;
        }
        const cleanValue = this.getCorrectNumericalValue(value);
        this.updateValue(cleanValue, cleanValue);
    }
    updateValue(viewValue, modelValue) {
        this.element.nativeElement.value = viewValue;
        this.control.control.setValue(modelValue, {
            onlySelf: false,
            emitEvent: false,
            emitModelToViewChange: false,
            emitViewToModelChange: false
        });
    }
    getCorrectNumericalValue(value) {
        let cleanValue = this.getCleanNumericValue(value);
        if (parseFloat(cleanValue) > this.max) {
            cleanValue = this.max.toString();
        }
        else if (parseFloat(cleanValue) < this.min) {
            cleanValue = this.min.toString();
        }
        return cleanValue;
    }
    getCleanNumericValue(value) {
        return value.toString().replace(/\D/g, '');
    }
}
NumericalValueInputMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NumericalValueInputMaskDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive });
NumericalValueInputMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NumericalValueInputMaskDirective, selector: "[upNumericalValueInputMask]", inputs: { min: "min", max: "max" }, host: { listeners: { "input": "inputChange($event.target.value)", "blur": "inputBlur($event.target.value)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NumericalValueInputMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upNumericalValueInputMask]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl }]; }, propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], inputChange: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], inputBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpY2FsLXZhbHVlLWlucHV0LW1hc2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9mb3Jtcy9udW1lcmljYWwtdmFsdWUtaW5wdXQtbWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFNbkYsTUFBTSxPQUFPLGdDQUFnQztJQUkzQyxZQUFzQixPQUFtQixFQUFZLE9BQWtCO1FBQWpELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFXO0lBQUcsQ0FBQztJQUUzRSxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFHRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPO1NBQ1I7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU87U0FDUjtRQUVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRVMsV0FBVyxDQUFDLFNBQWlCLEVBQUUsVUFBa0I7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3hDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIscUJBQXFCLEVBQUUsS0FBSztZQUM1QixxQkFBcUIsRUFBRSxLQUFLO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyx3QkFBd0IsQ0FBQyxLQUFLO1FBQ3RDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFUyxvQkFBb0IsQ0FBQyxLQUFLO1FBQ2xDLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7NkhBdERVLGdDQUFnQztpSEFBaEMsZ0NBQWdDOzJGQUFoQyxnQ0FBZ0M7a0JBSDVDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtpQkFDeEM7eUhBRVUsR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFXTixXQUFXO3NCQURWLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBVzlDLFNBQVM7c0JBRFIsWUFBWTt1QkFBQyxNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1cE51bWVyaWNhbFZhbHVlSW5wdXRNYXNrXSdcbn0pXG5leHBvcnQgY2xhc3MgTnVtZXJpY2FsVmFsdWVJbnB1dE1hc2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtaW46IG51bWJlcjtcbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBjb250cm9sOiBOZ0NvbnRyb2wpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbCAmJiB0aGlzLmNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UodGhpcy5jb250cm9sLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxuICBpbnB1dENoYW5nZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhblZhbHVlID0gdGhpcy5nZXRDbGVhbk51bWVyaWNWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShjbGVhblZhbHVlLCBjbGVhblZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcbiAgaW5wdXRCbHVyKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuVmFsdWUgPSB0aGlzLmdldENvcnJlY3ROdW1lcmljYWxWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShjbGVhblZhbHVlLCBjbGVhblZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSh2aWV3VmFsdWU6IHN0cmluZywgbW9kZWxWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2aWV3VmFsdWU7XG4gICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUobW9kZWxWYWx1ZSwge1xuICAgICAgb25seVNlbGY6IGZhbHNlLFxuICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2UsXG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29ycmVjdE51bWVyaWNhbFZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IGNsZWFuVmFsdWUgPSB0aGlzLmdldENsZWFuTnVtZXJpY1ZhbHVlKHZhbHVlKTtcbiAgICBpZiAocGFyc2VGbG9hdChjbGVhblZhbHVlKSA+IHRoaXMubWF4KSB7XG4gICAgICBjbGVhblZhbHVlID0gdGhpcy5tYXgudG9TdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoY2xlYW5WYWx1ZSkgPCB0aGlzLm1pbikge1xuICAgICAgY2xlYW5WYWx1ZSA9IHRoaXMubWluLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBjbGVhblZhbHVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsZWFuTnVtZXJpY1ZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgfVxufVxuIl19