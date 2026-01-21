import { Directive, HostListener } from '@angular/core';
import { NumericalValueInputMaskDirective } from './numerical-value-input-mask.directive';
import * as i0 from "@angular/core";
export class PercentageInputMaskDirective extends NumericalValueInputMaskDirective {
    ngOnInit() {
        if (this.control && this.control.value) {
            this.applyMask(this.control.value);
        }
    }
    inputChange(value) {
        super.inputChange(value);
    }
    inputBlur(value) {
        if (!value) {
            return;
        }
        this.applyMask(value);
    }
    applyMask(value) {
        const numericValue = this.getCorrectNumericalValue(value);
        const mask = `${numericValue}%`;
        this.updateValue(mask, numericValue);
    }
}
PercentageInputMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PercentageInputMaskDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
PercentageInputMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: PercentageInputMaskDirective, selector: "[upPercentageInputMask]", host: { listeners: { "input": "inputChange($event.target.value)", "blur": "inputBlur($event.target.value)" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PercentageInputMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upPercentageInputMask]'
                }]
        }], propDecorators: { inputChange: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], inputBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VudGFnZS1pbnB1dC1tYXNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvZm9ybXMvcGVyY2VudGFnZS1pbnB1dC1tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFLMUYsTUFBTSxPQUFPLDRCQUNYLFNBQVEsZ0NBQWdDO0lBRXhDLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUdELFdBQVcsQ0FBQyxLQUFLO1FBQ2YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBR0QsU0FBUyxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQUs7UUFDckIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE1BQU0sSUFBSSxHQUFHLEdBQUcsWUFBWSxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7eUhBM0JVLDRCQUE0Qjs2R0FBNUIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBSHhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7OEJBV0MsV0FBVztzQkFEVixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQU05QyxTQUFTO3NCQURSLFlBQVk7dUJBQUMsTUFBTSxFQUFFLENBQUMscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdW1lcmljYWxWYWx1ZUlucHV0TWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbnVtZXJpY2FsLXZhbHVlLWlucHV0LW1hc2suZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VwUGVyY2VudGFnZUlucHV0TWFza10nXG59KVxuZXhwb3J0IGNsYXNzIFBlcmNlbnRhZ2VJbnB1dE1hc2tEaXJlY3RpdmVcbiAgZXh0ZW5kcyBOdW1lcmljYWxWYWx1ZUlucHV0TWFza0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgJiYgdGhpcy5jb250cm9sLnZhbHVlKSB7XG4gICAgICB0aGlzLmFwcGx5TWFzayh0aGlzLmNvbnRyb2wudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXG4gIGlucHV0Q2hhbmdlKHZhbHVlKSB7XG4gICAgc3VwZXIuaW5wdXRDaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxuICBpbnB1dEJsdXIodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hcHBseU1hc2sodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseU1hc2sodmFsdWUpIHtcbiAgICBjb25zdCBudW1lcmljVmFsdWUgPSB0aGlzLmdldENvcnJlY3ROdW1lcmljYWxWYWx1ZSh2YWx1ZSk7XG4gICAgY29uc3QgbWFzayA9IGAke251bWVyaWNWYWx1ZX0lYDtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG1hc2ssIG51bWVyaWNWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==