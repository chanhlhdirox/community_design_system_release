import { Directive, HostListener, Inject, Input, LOCALE_ID } from '@angular/core';
import { get, isFinite, min, toString } from 'lodash';
import { NumberUtils } from '../helpers/number-utils';
import Big from 'big.js';
import { NumberPipe } from '../pipes/number.pipe';
import { Separator } from '../enum/separator.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../pipes/number.pipe";
import * as i3 from "../services/decimal-separator.service";
export class NumberMaskDirective {
    constructor(locale, element, control, numberPipe, decimalSeparatorService) {
        this.locale = locale;
        this.element = element;
        this.control = control;
        this.numberPipe = numberPipe;
        this.decimalSeparatorService = decimalSeparatorService;
        this.numberOfDecimals = 2;
        this.fixedDecimals = true;
        this.allowNegativeValues = false;
        this.storeControlValueAsString = true;
        this.decimalSeparator = Separator.DOT;
        this.thousandSeparator = Separator.COMMA;
        this.inputDecimalSeparator = Separator.DOT;
        this.inputThousandSeparator = Separator.COMMA;
    }
    get MAX_DECIMALS() {
        return 20;
    }
    ngOnInit() {
        this.decimalSeparator = this.decimalSeparatorService.separator;
        this.thousandSeparator = this.decimalSeparatorService.thousandSeparator;
        this.numberOfDecimals = this.numberOfDecimals > this.MAX_DECIMALS ? this.MAX_DECIMALS : this.numberOfDecimals;
        this.digitsPattern = '.0';
        if (this.control && this.control.value) {
            this.updateValue(this.parseModel(this.control.value));
        }
        else if (this.defaultValue) {
            this.updateValue(this.parseModel(`${this.defaultValue}`));
        }
    }
    ngAfterViewInit() {
        const formControl = this.control.control;
        formControl.registerOnChange((value) => {
            this.updateValue(this.parseModel(value));
        });
    }
    parseModel(value) {
        return toString(value).replace(Separator.DOT, this.decimalSeparator);
    }
    onInput(value) {
        this.checkValue(value);
    }
    onFocus(value) {
        this.element.nativeElement.value = value.replace(this.getSeparatorRegex(this.thousandSeparator), '');
    }
    onBlur(value) {
        this.applyNumberMask(value);
    }
    setInputSeparators(value) {
        this.inputDecimalSeparator = Separator.DOT;
        this.inputThousandSeparator = Separator.COMMA;
        const dotSeparator = get(value.split(Separator.DOT), '[0].length', 0);
        const commaSeparator = get(value.split(Separator.COMMA), '[0].length', 0);
        if (dotSeparator === value.length || (dotSeparator < commaSeparator && commaSeparator !== value.length)) {
            this.inputDecimalSeparator = Separator.COMMA;
        }
        this.inputThousandSeparator = this.inputDecimalSeparator === Separator.DOT ? Separator.COMMA : Separator.DOT;
    }
    checkValue(value) {
        this.element.nativeElement.value = NumberUtils.removeDisallowedCharactersWithoutSeparator(value, this.allowNegativeValues);
    }
    applyNumberMask(value) {
        let storedValue = '';
        if (!isFinite(parseFloat(value))) {
            this.element.nativeElement.value = storedValue;
        }
        else {
            this.setInputSeparators(value);
            storedValue = NumberUtils.removeDisallowedCharacters(value, this.inputDecimalSeparator, this.allowNegativeValues);
            storedValue = storedValue.replace(this.inputDecimalSeparator, Separator.DOT);
            const formatted = this.numberPipe.transform(storedValue, this.pipeDecimals(storedValue));
            storedValue = Big(storedValue).toFixed(this.pipeDecimals(storedValue));
            this.element.nativeElement.value = formatted;
        }
        this.control.control.setValue(this.storeControlValueAsString ? storedValue.toString() : parseFloat(storedValue), {
            onlySelf: false,
            emitEvent: false,
            emitModelToViewChange: false,
            emitViewToModelChange: false
        });
    }
    updateValue(value) {
        let storedValue = NumberUtils.removeDisallowedCharacters(value, this.decimalSeparatorService.separator, this.allowNegativeValues);
        if (!isFinite(parseFloat(storedValue))) {
            storedValue = '';
            this.element.nativeElement.value = storedValue;
        }
        else {
            storedValue = storedValue.replace(this.decimalSeparator, Separator.DOT);
            const formatted = this.numberPipe.transform(storedValue, this.pipeDecimals(storedValue));
            storedValue = Big(storedValue).toFixed(this.pipeDecimals(storedValue));
            this.element.nativeElement.value = formatted;
        }
        this.control.control.setValue(this.storeControlValueAsString ? storedValue.toString() : parseFloat(storedValue), {
            onlySelf: false,
            emitEvent: false,
            emitModelToViewChange: false,
            emitViewToModelChange: false
        });
    }
    pipeDecimals(value) {
        return !this.fixedDecimals ? this.freeRangeDecimals(value) : this.numberOfDecimals;
    }
    freeRangeDecimals(value) {
        const noOfDecimals = get(value.split(Separator.DOT), '[1].length', 0);
        return min([noOfDecimals, this.MAX_DECIMALS]);
    }
    getSeparatorRegex(separator) {
        if (separator === Separator.DOT) {
            return new RegExp('\\.', 'g');
        }
        return new RegExp(`${separator}`, 'g');
    }
}
NumberMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NumberMaskDirective, deps: [{ token: LOCALE_ID }, { token: i0.ElementRef }, { token: i1.NgControl }, { token: i2.NumberPipe }, { token: i3.DecimalSeparatorService }], target: i0.ɵɵFactoryTarget.Directive });
NumberMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: NumberMaskDirective, selector: "[upNumberMask]", inputs: { defaultValue: "defaultValue", numberOfDecimals: "numberOfDecimals", fixedDecimals: "fixedDecimals", allowNegativeValues: "allowNegativeValues", storeControlValueAsString: "storeControlValueAsString" }, host: { listeners: { "input": "onInput($event.target.value)", "focus": "onFocus($event.target.value)", "blur": "onBlur($event.target.value)" } }, providers: [NumberPipe], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NumberMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upNumberMask]',
                    providers: [NumberPipe]
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.ElementRef }, { type: i1.NgControl }, { type: i2.NumberPipe }, { type: i3.DecimalSeparatorService }]; }, propDecorators: { defaultValue: [{
                type: Input
            }], numberOfDecimals: [{
                type: Input
            }], fixedDecimals: [{
                type: Input
            }], allowNegativeValues: [{
                type: Input
            }], storeControlValueAsString: [{
                type: Input
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event.target.value']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW1hc2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9udW1lcmljYWwtbWFzay9kaXJlY3RpdmVzL251bWJlci1tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFckgsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBT25ELE1BQU0sT0FBTyxtQkFBbUI7SUFnQjlCLFlBQzZCLE1BQWMsRUFDakMsT0FBbUIsRUFDbkIsT0FBa0IsRUFDbEIsVUFBc0IsRUFDdEIsdUJBQWdEO1FBSjdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQW5CakQscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1Qiw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDbEMscUJBQWdCLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUNqQyxzQkFBaUIsR0FB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bUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUN4Qjs7MEJBa0JJLE1BQU07MkJBQUMsU0FBUzs0SkFoQlYsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0cseUJBQXlCO3NCQUFqQyxLQUFLO2dCQTRDTixPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBTTlDLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFNOUMsTUFBTTtzQkFETCxZQUFZO3VCQUFDLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIExPQ0FMRV9JRCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldCwgaXNGaW5pdGUsIG1pbiwgdG9TdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTnVtYmVyVXRpbHMgfSBmcm9tICcuLi9oZWxwZXJzL251bWJlci11dGlscyc7XG5pbXBvcnQgQmlnIGZyb20gJ2JpZy5qcyc7XG5pbXBvcnQgeyBOdW1iZXJQaXBlIH0gZnJvbSAnLi4vcGlwZXMvbnVtYmVyLnBpcGUnO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSAnLi4vZW51bS9zZXBhcmF0b3IuZW51bSc7XG5pbXBvcnQgeyBEZWNpbWFsU2VwYXJhdG9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RlY2ltYWwtc2VwYXJhdG9yLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXBOdW1iZXJNYXNrXScsXG4gIHByb3ZpZGVyczogW051bWJlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlck1hc2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkZWZhdWx0VmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbnVtYmVyT2ZEZWNpbWFscyA9IDI7XG4gIEBJbnB1dCgpIGZpeGVkRGVjaW1hbHMgPSB0cnVlO1xuICBASW5wdXQoKSBhbGxvd05lZ2F0aXZlVmFsdWVzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0b3JlQ29udHJvbFZhbHVlQXNTdHJpbmcgPSB0cnVlO1xuICBwcml2YXRlIGRlY2ltYWxTZXBhcmF0b3IgPSBTZXBhcmF0b3IuRE9UO1xuICBwcml2YXRlIHRob3VzYW5kU2VwYXJhdG9yID0gU2VwYXJhdG9yLkNPTU1BO1xuICBwcml2YXRlIGRpZ2l0c1BhdHRlcm46IHN0cmluZztcbiAgcHJpdmF0ZSBpbnB1dERlY2ltYWxTZXBhcmF0b3IgPSBTZXBhcmF0b3IuRE9UO1xuICBwcml2YXRlIGlucHV0VGhvdXNhbmRTZXBhcmF0b3IgPSBTZXBhcmF0b3IuQ09NTUE7XG5cbiAgZ2V0IE1BWF9ERUNJTUFMUygpIHtcbiAgICByZXR1cm4gMjA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyxcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBudW1iZXJQaXBlOiBOdW1iZXJQaXBlLFxuICAgIHByaXZhdGUgZGVjaW1hbFNlcGFyYXRvclNlcnZpY2U6IERlY2ltYWxTZXBhcmF0b3JTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPSB0aGlzLmRlY2ltYWxTZXBhcmF0b3JTZXJ2aWNlLnNlcGFyYXRvcjtcbiAgICB0aGlzLnRob3VzYW5kU2VwYXJhdG9yID0gdGhpcy5kZWNpbWFsU2VwYXJhdG9yU2VydmljZS50aG91c2FuZFNlcGFyYXRvcjtcblxuICAgIHRoaXMubnVtYmVyT2ZEZWNpbWFscyA9IHRoaXMubnVtYmVyT2ZEZWNpbWFscyA+IHRoaXMuTUFYX0RFQ0lNQUxTID8gdGhpcy5NQVhfREVDSU1BTFMgOiB0aGlzLm51bWJlck9mRGVjaW1hbHM7XG4gICAgdGhpcy5kaWdpdHNQYXR0ZXJuID0gJy4wJztcbiAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuY29udHJvbC52YWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnBhcnNlTW9kZWwodGhpcy5jb250cm9sLnZhbHVlKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnBhcnNlTW9kZWwoYCR7dGhpcy5kZWZhdWx0VmFsdWV9YCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IDxVbnR5cGVkRm9ybUNvbnRyb2w+dGhpcy5jb250cm9sLmNvbnRyb2w7XG4gICAgZm9ybUNvbnRyb2wucmVnaXN0ZXJPbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5wYXJzZU1vZGVsKHZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwYXJzZU1vZGVsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcodmFsdWUpLnJlcGxhY2UoU2VwYXJhdG9yLkRPVCwgdGhpcy5kZWNpbWFsU2VwYXJhdG9yKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXG4gIG9uSW5wdXQodmFsdWUpIHtcbiAgICB0aGlzLmNoZWNrVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcbiAgb25Gb2N1cyh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUucmVwbGFjZSh0aGlzLmdldFNlcGFyYXRvclJlZ2V4KHRoaXMudGhvdXNhbmRTZXBhcmF0b3IpLCAnJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXG4gIG9uQmx1cih2YWx1ZSkge1xuICAgIHRoaXMuYXBwbHlOdW1iZXJNYXNrKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SW5wdXRTZXBhcmF0b3JzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlucHV0RGVjaW1hbFNlcGFyYXRvciA9IFNlcGFyYXRvci5ET1Q7XG4gICAgdGhpcy5pbnB1dFRob3VzYW5kU2VwYXJhdG9yID0gU2VwYXJhdG9yLkNPTU1BO1xuICAgIGNvbnN0IGRvdFNlcGFyYXRvciA9IGdldCh2YWx1ZS5zcGxpdChTZXBhcmF0b3IuRE9UKSwgJ1swXS5sZW5ndGgnLCAwKTtcbiAgICBjb25zdCBjb21tYVNlcGFyYXRvciA9IGdldCh2YWx1ZS5zcGxpdChTZXBhcmF0b3IuQ09NTUEpLCAnWzBdLmxlbmd0aCcsIDApO1xuICAgIGlmIChkb3RTZXBhcmF0b3IgPT09IHZhbHVlLmxlbmd0aCB8fCAoZG90U2VwYXJhdG9yIDwgY29tbWFTZXBhcmF0b3IgJiYgY29tbWFTZXBhcmF0b3IgIT09IHZhbHVlLmxlbmd0aCkpIHtcbiAgICAgIHRoaXMuaW5wdXREZWNpbWFsU2VwYXJhdG9yID0gU2VwYXJhdG9yLkNPTU1BO1xuICAgIH1cbiAgICB0aGlzLmlucHV0VGhvdXNhbmRTZXBhcmF0b3IgPSB0aGlzLmlucHV0RGVjaW1hbFNlcGFyYXRvciA9PT0gU2VwYXJhdG9yLkRPVCA/IFNlcGFyYXRvci5DT01NQSA6IFNlcGFyYXRvci5ET1Q7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gTnVtYmVyVXRpbHMucmVtb3ZlRGlzYWxsb3dlZENoYXJhY3RlcnNXaXRob3V0U2VwYXJhdG9yKHZhbHVlLCB0aGlzLmFsbG93TmVnYXRpdmVWYWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseU51bWJlck1hc2sodmFsdWU6IHN0cmluZykge1xuICAgIGxldCBzdG9yZWRWYWx1ZSA9ICcnO1xuICAgIGlmICghaXNGaW5pdGUocGFyc2VGbG9hdCh2YWx1ZSkpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHN0b3JlZFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldElucHV0U2VwYXJhdG9ycyh2YWx1ZSk7XG4gICAgICBzdG9yZWRWYWx1ZSA9IE51bWJlclV0aWxzLnJlbW92ZURpc2FsbG93ZWRDaGFyYWN0ZXJzKHZhbHVlLCB0aGlzLmlucHV0RGVjaW1hbFNlcGFyYXRvciwgdGhpcy5hbGxvd05lZ2F0aXZlVmFsdWVzKTtcbiAgICAgIHN0b3JlZFZhbHVlID0gc3RvcmVkVmFsdWUucmVwbGFjZSh0aGlzLmlucHV0RGVjaW1hbFNlcGFyYXRvciwgU2VwYXJhdG9yLkRPVCk7XG4gICAgICBjb25zdCBmb3JtYXR0ZWQgPSB0aGlzLm51bWJlclBpcGUudHJhbnNmb3JtKHN0b3JlZFZhbHVlLCB0aGlzLnBpcGVEZWNpbWFscyhzdG9yZWRWYWx1ZSkpO1xuICAgICAgc3RvcmVkVmFsdWUgPSBCaWcoc3RvcmVkVmFsdWUpLnRvRml4ZWQodGhpcy5waXBlRGVjaW1hbHMoc3RvcmVkVmFsdWUpKTtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZm9ybWF0dGVkO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbC5jb250cm9sLnNldFZhbHVlKHRoaXMuc3RvcmVDb250cm9sVmFsdWVBc1N0cmluZyA/IHN0b3JlZFZhbHVlLnRvU3RyaW5nKCkgOiBwYXJzZUZsb2F0KHN0b3JlZFZhbHVlKSwge1xuICAgICAgb25seVNlbGY6IGZhbHNlLFxuICAgICAgZW1pdEV2ZW50OiBmYWxzZSxcbiAgICAgIGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2UsXG4gICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgc3RvcmVkVmFsdWUgPSBOdW1iZXJVdGlscy5yZW1vdmVEaXNhbGxvd2VkQ2hhcmFjdGVycyh2YWx1ZSwgdGhpcy5kZWNpbWFsU2VwYXJhdG9yU2VydmljZS5zZXBhcmF0b3IsIHRoaXMuYWxsb3dOZWdhdGl2ZVZhbHVlcyk7XG4gICAgaWYgKCFpc0Zpbml0ZShwYXJzZUZsb2F0KHN0b3JlZFZhbHVlKSkpIHtcbiAgICAgIHN0b3JlZFZhbHVlID0gJyc7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHN0b3JlZFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZWRWYWx1ZSA9IHN0b3JlZFZhbHVlLnJlcGxhY2UodGhpcy5kZWNpbWFsU2VwYXJhdG9yLCBTZXBhcmF0b3IuRE9UKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IHRoaXMubnVtYmVyUGlwZS50cmFuc2Zvcm0oc3RvcmVkVmFsdWUsIHRoaXMucGlwZURlY2ltYWxzKHN0b3JlZFZhbHVlKSk7XG4gICAgICBzdG9yZWRWYWx1ZSA9IEJpZyhzdG9yZWRWYWx1ZSkudG9GaXhlZCh0aGlzLnBpcGVEZWNpbWFscyhzdG9yZWRWYWx1ZSkpO1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBmb3JtYXR0ZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUodGhpcy5zdG9yZUNvbnRyb2xWYWx1ZUFzU3RyaW5nID8gc3RvcmVkVmFsdWUudG9TdHJpbmcoKSA6IHBhcnNlRmxvYXQoc3RvcmVkVmFsdWUpLCB7XG4gICAgICBvbmx5U2VsZjogZmFsc2UsXG4gICAgICBlbWl0RXZlbnQ6IGZhbHNlLFxuICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZSxcbiAgICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcGlwZURlY2ltYWxzKHZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzLmZpeGVkRGVjaW1hbHMgPyB0aGlzLmZyZWVSYW5nZURlY2ltYWxzKHZhbHVlKSA6IHRoaXMubnVtYmVyT2ZEZWNpbWFscztcbiAgfVxuXG4gIHByaXZhdGUgZnJlZVJhbmdlRGVjaW1hbHModmFsdWUpOiBudW1iZXIge1xuICAgIGNvbnN0IG5vT2ZEZWNpbWFscyA9IGdldCh2YWx1ZS5zcGxpdChTZXBhcmF0b3IuRE9UKSwgJ1sxXS5sZW5ndGgnLCAwKTtcbiAgICByZXR1cm4gbWluKFtub09mRGVjaW1hbHMsIHRoaXMuTUFYX0RFQ0lNQUxTXSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlcGFyYXRvclJlZ2V4KHNlcGFyYXRvcjogU2VwYXJhdG9yKSB7XG4gICAgaWYgKHNlcGFyYXRvciA9PT0gU2VwYXJhdG9yLkRPVCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJ1xcXFwuJywgJ2cnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYCR7c2VwYXJhdG9yfWAsICdnJyk7XG4gIH1cbn1cbiJdfQ==