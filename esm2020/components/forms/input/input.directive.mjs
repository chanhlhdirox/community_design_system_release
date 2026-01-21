import { Directive, ElementRef, HostBinding, HostListener, Inject, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { InputTypes } from '../input-group/input.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputDirective {
    constructor(elementRef, ngControl) {
        this.elementRef = elementRef;
        this.ngControl = ngControl;
        this.isFocused = false;
        this.hostClass = 'up-form-field-input';
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onChange(event) {
        this.nativeElementValueChanges.next(event.target.value);
    }
    ngOnInit() {
        this.nativeElementValueChanges = new BehaviorSubject(this.ngControl?.control.value || this.elementRef.nativeElement.value);
    }
    get hasError() {
        if (!this.ngControl?.control) {
            return;
        }
        return this.ngControl.control.touched && this.ngControl.control.invalid;
    }
    get inputType() {
        return this.elementRef.nativeElement.type;
    }
    clearInput() {
        if (!!this.ngControl?.control) {
            this.ngControl?.control.setValue('');
        }
        else {
            this.elementRef.nativeElement.value = '';
        }
        this.nativeElementValueChanges.next('');
    }
    togglePasswordVisibility() {
        if (!this.inputType || this.inputType === InputTypes.Email) {
            return;
        }
        if (this.inputType === InputTypes.Text) {
            this.elementRef.nativeElement.type = InputTypes.Password;
            return;
        }
        this.elementRef.nativeElement.type = InputTypes.Text;
    }
}
InputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: InputDirective, deps: [{ token: ElementRef }, { token: NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Directive });
InputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: InputDirective, selector: "input[upInput], select[upInput], textarea[upInput]", host: { listeners: { "focus": "onFocus($event)", "blur": "onBlur($event)", "input": "onChange($event)", "change": "onChange($event)" }, properties: { "class": "this.hostClass" } }, exportAs: ["upInput"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: InputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[upInput], select[upInput], textarea[upInput]',
                    exportAs: 'upInput'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.NgControl, decorators: [{
                    type: Inject,
                    args: [NgControl]
                }, {
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class']
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event']]
            }], onChange: [{
                type: HostListener,
                args: ['input', ['$event']]
            }, {
                type: HostListener,
                args: ['change', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9mb3Jtcy9pbnB1dC9pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBRU4sUUFBUSxFQUNSLElBQUksRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQU16RCxNQUFNLE9BQU8sY0FBYztJQW9CekIsWUFDNkIsVUFBc0IsRUFDSCxTQUFvQjtRQUR2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ0gsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXJCcEUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdJLGNBQVMsR0FBRyxxQkFBcUIsQ0FBQztJQW1CckQsQ0FBQztJQWpCK0IsT0FBTztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRWlDLE1BQU07UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUlELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksZUFBZSxDQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUUsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLEtBQUssRUFBRTtZQUMxRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUN6RCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztJQUN2RCxDQUFDOzsyR0EvRFUsY0FBYyxrQkFxQmYsVUFBVSxhQUNWLFNBQVM7K0ZBdEJSLGNBQWM7MkZBQWQsY0FBYztrQkFKMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0RBQW9EO29CQUM5RCxRQUFRLEVBQUUsU0FBUztpQkFDcEI7OzBCQXNCSSxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLFNBQVM7OzBCQUFHLFFBQVE7OzBCQUFJLElBQUk7NENBbEJoQixTQUFTO3NCQUE5QixXQUFXO3VCQUFDLE9BQU87Z0JBRWUsT0FBTztzQkFBekMsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBSUMsTUFBTTtzQkFBdkMsWUFBWTt1QkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBTWhDLFFBQVE7c0JBRlAsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3NCQUNoQyxZQUFZO3VCQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbnB1dFR5cGVzIH0gZnJvbSAnLi4vaW5wdXQtZ3JvdXAvaW5wdXQubW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbdXBJbnB1dF0sIHNlbGVjdFt1cElucHV0XSwgdGV4dGFyZWFbdXBJbnB1dF0nLFxuICBleHBvcnRBczogJ3VwSW5wdXQnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNGb2N1c2VkID0gZmFsc2U7XG4gIG5hdGl2ZUVsZW1lbnRWYWx1ZUNoYW5nZXM6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBob3N0Q2xhc3MgPSAndXAtZm9ybS1maWVsZC1pbnB1dCc7XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKSBvbkZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJyRldmVudCddKSBvbkJsdXIoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLm5hdGl2ZUVsZW1lbnRWYWx1ZUNoYW5nZXMubmV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KE5nQ29udHJvbCkgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmF0aXZlRWxlbWVudFZhbHVlQ2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihcbiAgICAgIHRoaXMubmdDb250cm9sPy5jb250cm9sLnZhbHVlIHx8IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sPy5jb250cm9sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnRvdWNoZWQgJiYgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5pbnZhbGlkO1xuICB9XG5cbiAgZ2V0IGlucHV0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50eXBlO1xuICB9XG5cbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAoISF0aGlzLm5nQ29udHJvbD8uY29udHJvbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMubmF0aXZlRWxlbWVudFZhbHVlQ2hhbmdlcy5uZXh0KCcnKTtcbiAgfVxuXG4gIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRUeXBlIHx8IHRoaXMuaW5wdXRUeXBlID09PSBJbnB1dFR5cGVzLkVtYWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5wdXRUeXBlID09PSBJbnB1dFR5cGVzLlRleHQpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnR5cGUgPSBJbnB1dFR5cGVzLlBhc3N3b3JkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnR5cGUgPSBJbnB1dFR5cGVzLlRleHQ7XG4gIH1cbn1cbiJdfQ==