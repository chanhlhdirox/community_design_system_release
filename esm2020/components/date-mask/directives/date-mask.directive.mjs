import { Directive, HostListener } from '@angular/core';
import { isValid, parse } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../services/date-format.service";
export class DateMaskDirective {
    constructor(element, control, dateFormatService) {
        this.element = element;
        this.control = control;
        this.dateFormatService = dateFormatService;
        this.previousValue = '';
        this.localFormat = '';
        this.delimiter = '';
    }
    ngOnInit() {
        this.localFormat = this.dateFormatService.dateFormat;
        if (this.localFormat.includes('/')) {
            this.delimiter = '/';
        }
        else {
            this.delimiter = '-';
        }
        if (this.control && this.control.value && typeof this.control.value === 'string') {
            this.updateValue(this.control.value);
        }
    }
    inputChange(value) {
        this.updateValue(value);
    }
    updateValue(value) {
        let newValue = this.stripNonNumeric(value);
        const position = this.adjustPosition(newValue);
        this.previousValue = newValue;
        if (newValue) {
            newValue = this.maskedValue(newValue);
            const date = parse(newValue, this.localFormat, new Date());
            this.setFormValue(date);
            this.element.nativeElement.value = newValue;
            this.setCaretPosition(this.element.nativeElement, position);
        }
        else {
            this.setCaretPosition(this.element.nativeElement, position);
            this.element.nativeElement.value = '';
            this.control.control.setValue(null, {
                onlySelf: false,
                emitEvent: true,
                emitModelToViewChange: false,
                emitViewToModelChange: true
            });
        }
        this.control.control.updateValueAndValidity();
    }
    setFormValue(date) {
        if (isValid(date)) {
            this.control.control.setValue(date, {
                onlySelf: true,
                emitEvent: true,
                emitModelToViewChange: false,
                emitViewToModelChange: true
            });
            this.control.control.setErrors({ incorrect: null });
        }
        else {
            this.control.control.setValue(null);
            this.control.control.setErrors({ incorrect: true });
            this.control.control.markAsTouched({ onlySelf: true });
        }
    }
    maskedValue(newValue) {
        const mapping = {
            'dd-MM-yyyy': [
                [0, 2],
                [2, 4],
                [4, 8]
            ],
            'MM-dd-yyyy': [
                [2, 4],
                [0, 2],
                [4, 8]
            ],
            'yyyy-MM-dd': [
                [6, 8],
                [4, 6],
                [0, 4]
            ],
            'dd/MM/yyyy': [
                [0, 2],
                [2, 4],
                [4, 8]
            ],
            'MM/dd/yyyy': [
                [2, 4],
                [0, 2],
                [4, 8]
            ]
        };
        const day = newValue.substring(mapping[this.localFormat][0][0], mapping[this.localFormat][0][1]);
        const month = newValue.substring(mapping[this.localFormat][1][0], mapping[this.localFormat][1][1]);
        const year = newValue.substring(mapping[this.localFormat][2][0], mapping[this.localFormat][2][1]);
        let formattedValue = '';
        switch (this.localFormat) {
            case `dd${this.delimiter}MM${this.delimiter}yyyy`:
                formattedValue =
                    this.autoComplete(day, 2) +
                        this.delimiter +
                        this.autoComplete(month, 2) +
                        this.delimiter +
                        this.autoComplete(year, 4);
                break;
            case `MM${this.delimiter}dd${this.delimiter}yyyy`:
                formattedValue =
                    this.autoComplete(month, 2) +
                        this.delimiter +
                        this.autoComplete(day, 2) +
                        this.delimiter +
                        this.autoComplete(year, 4);
                break;
            case `yyyy${this.delimiter}MM${this.delimiter}dd`:
                formattedValue =
                    this.autoComplete(year, 4) +
                        this.delimiter +
                        this.autoComplete(month, 2) +
                        this.delimiter +
                        this.autoComplete(day, 2);
                break;
        }
        return formattedValue;
    }
    autoComplete(value, length) {
        let newValue = this.stripNonNumeric(value);
        if (value.length === length) {
            return value;
        }
        else {
            const noOfCompletions = length - value.length;
            for (let i = 0; i < noOfCompletions; i++) {
                newValue = newValue + '_';
            }
            return newValue;
        }
    }
    stripNonNumeric(value) {
        return value.replace(/\D/g, '');
    }
    adjustPosition(value) {
        const delimiterPosition = {
            'dd-MM-yyyy': [3, 6],
            'MM-dd-yyyy': [3, 6],
            'yyyy-MM-dd': [5, 8],
            'dd/MM/yyyy': [3, 6],
            'MM/dd/yyyy': [3, 6]
        };
        const currentPosition = this.element.nativeElement.selectionStart;
        if (delimiterPosition[this.localFormat]?.includes(currentPosition)) {
            return value.length > this.previousValue.length ? currentPosition + 1 : currentPosition - 1;
        }
        return currentPosition;
    }
    setCaretPosition(ctrl, position) {
        // IE >= 9 and other browsers
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(position, position);
        }
    }
}
DateMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DateMaskDirective, deps: [{ token: i0.ElementRef }, { token: i1.NgControl }, { token: i2.DateFormatService }], target: i0.ɵɵFactoryTarget.Directive });
DateMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: DateMaskDirective, selector: "[upDateMask]", host: { listeners: { "input": "inputChange($event.target.value)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DateMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upDateMask]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.NgControl }, { type: i2.DateFormatService }]; }, propDecorators: { inputChange: [{
                type: HostListener,
                args: ['input', ['$event.target.value']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1tYXNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvZGF0ZS1tYXNrL2RpcmVjdGl2ZXMvZGF0ZS1tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQU0xQyxNQUFNLE9BQU8saUJBQWlCO0lBSzVCLFlBQ1UsT0FBbUIsRUFDbkIsT0FBa0IsRUFDbEIsaUJBQW9DO1FBRnBDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUDlDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFNWixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztTQUN0QjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNoRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBR0QsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBSztRQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDOUIsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xDLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFNBQVMsRUFBRSxJQUFJO2dCQUNmLHFCQUFxQixFQUFFLEtBQUs7Z0JBQzVCLHFCQUFxQixFQUFFLElBQUk7YUFDNUIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTyxZQUFZLENBQUMsSUFBSTtRQUN2QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNsQyxRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsSUFBSTtnQkFDZixxQkFBcUIsRUFBRSxLQUFLO2dCQUM1QixxQkFBcUIsRUFBRSxJQUFJO2FBQzVCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLFFBQVE7UUFDMUIsTUFBTSxPQUFPLEdBQUc7WUFDZCxZQUFZLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDUDtZQUNELFlBQVksRUFBRTtnQkFDWixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1A7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDUDtZQUNELFlBQVksRUFBRTtnQkFDWixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1NBQ0YsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2hDLENBQUM7UUFDRixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNoQyxDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDaEMsQ0FBQztRQUNGLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUV4QixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsTUFBTTtnQkFDL0MsY0FBYztvQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxTQUFTO3dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFNBQVM7d0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDUixLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxNQUFNO2dCQUMvQyxjQUFjO29CQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFNBQVM7d0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsU0FBUzt3QkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNSLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLElBQUk7Z0JBQy9DLGNBQWM7b0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsU0FBUzt3QkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxTQUFTO3dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNO1NBQ1Q7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxNQUFNLGVBQWUsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQzthQUMzQjtZQUNELE9BQU8sUUFBUSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVPLGVBQWUsQ0FBQyxLQUFLO1FBQzNCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLGNBQWMsQ0FBQyxLQUFLO1FBQzFCLE1BQU0saUJBQWlCLEdBQUc7WUFDeEIsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JCLENBQUM7UUFFRixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDbEUsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztTQUM3RjtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsUUFBUTtRQUNyQyw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7OzhHQW5MVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjt5SkF5QkMsV0FBVztzQkFEVixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNWYWxpZCwgcGFyc2UgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGUtZm9ybWF0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXBEYXRlTWFza10nXG59KVxuZXhwb3J0IGNsYXNzIERhdGVNYXNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJldmlvdXNWYWx1ZSA9ICcnO1xuICBsb2NhbEZvcm1hdCA9ICcnO1xuICBkZWxpbWl0ZXIgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBkYXRlRm9ybWF0U2VydmljZTogRGF0ZUZvcm1hdFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9jYWxGb3JtYXQgPSB0aGlzLmRhdGVGb3JtYXRTZXJ2aWNlLmRhdGVGb3JtYXQ7XG4gICAgaWYgKHRoaXMubG9jYWxGb3JtYXQuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgdGhpcy5kZWxpbWl0ZXIgPSAnLyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVsaW1pdGVyID0gJy0nO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250cm9sICYmIHRoaXMuY29udHJvbC52YWx1ZSAmJiB0eXBlb2YgdGhpcy5jb250cm9sLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLmNvbnRyb2wudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXG4gIGlucHV0Q2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5zdHJpcE5vbk51bWVyaWModmFsdWUpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5hZGp1c3RQb3NpdGlvbihuZXdWYWx1ZSk7XG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMubWFza2VkVmFsdWUobmV3VmFsdWUpO1xuICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlKG5ld1ZhbHVlLCB0aGlzLmxvY2FsRm9ybWF0LCBuZXcgRGF0ZSgpKTtcbiAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlKGRhdGUpO1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuc2V0Q2FyZXRQb3NpdGlvbih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgcG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldENhcmV0UG9zaXRpb24odGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRWYWx1ZShudWxsLCB7XG4gICAgICAgIG9ubHlTZWxmOiBmYWxzZSxcbiAgICAgICAgZW1pdEV2ZW50OiB0cnVlLFxuICAgICAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U6IGZhbHNlLFxuICAgICAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cblxuICBwcml2YXRlIHNldEZvcm1WYWx1ZShkYXRlKSB7XG4gICAgaWYgKGlzVmFsaWQoZGF0ZSkpIHtcbiAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLnNldFZhbHVlKGRhdGUsIHtcbiAgICAgICAgb25seVNlbGY6IHRydWUsXG4gICAgICAgIGVtaXRFdmVudDogdHJ1ZSxcbiAgICAgICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZSxcbiAgICAgICAgZW1pdFZpZXdUb01vZGVsQ2hhbmdlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29udHJvbC5jb250cm9sLnNldEVycm9ycyh7IGluY29ycmVjdDogbnVsbCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5zZXRFcnJvcnMoeyBpbmNvcnJlY3Q6IHRydWUgfSk7XG4gICAgICB0aGlzLmNvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXNrZWRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIGNvbnN0IG1hcHBpbmcgPSB7XG4gICAgICAnZGQtTU0teXl5eSc6IFtcbiAgICAgICAgWzAsIDJdLFxuICAgICAgICBbMiwgNF0sXG4gICAgICAgIFs0LCA4XVxuICAgICAgXSxcbiAgICAgICdNTS1kZC15eXl5JzogW1xuICAgICAgICBbMiwgNF0sXG4gICAgICAgIFswLCAyXSxcbiAgICAgICAgWzQsIDhdXG4gICAgICBdLFxuICAgICAgJ3l5eXktTU0tZGQnOiBbXG4gICAgICAgIFs2LCA4XSxcbiAgICAgICAgWzQsIDZdLFxuICAgICAgICBbMCwgNF1cbiAgICAgIF0sXG4gICAgICAnZGQvTU0veXl5eSc6IFtcbiAgICAgICAgWzAsIDJdLFxuICAgICAgICBbMiwgNF0sXG4gICAgICAgIFs0LCA4XVxuICAgICAgXSxcbiAgICAgICdNTS9kZC95eXl5JzogW1xuICAgICAgICBbMiwgNF0sXG4gICAgICAgIFswLCAyXSxcbiAgICAgICAgWzQsIDhdXG4gICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0IGRheSA9IG5ld1ZhbHVlLnN1YnN0cmluZyhcbiAgICAgIG1hcHBpbmdbdGhpcy5sb2NhbEZvcm1hdF1bMF1bMF0sXG4gICAgICBtYXBwaW5nW3RoaXMubG9jYWxGb3JtYXRdWzBdWzFdXG4gICAgKTtcbiAgICBjb25zdCBtb250aCA9IG5ld1ZhbHVlLnN1YnN0cmluZyhcbiAgICAgIG1hcHBpbmdbdGhpcy5sb2NhbEZvcm1hdF1bMV1bMF0sXG4gICAgICBtYXBwaW5nW3RoaXMubG9jYWxGb3JtYXRdWzFdWzFdXG4gICAgKTtcbiAgICBjb25zdCB5ZWFyID0gbmV3VmFsdWUuc3Vic3RyaW5nKFxuICAgICAgbWFwcGluZ1t0aGlzLmxvY2FsRm9ybWF0XVsyXVswXSxcbiAgICAgIG1hcHBpbmdbdGhpcy5sb2NhbEZvcm1hdF1bMl1bMV1cbiAgICApO1xuICAgIGxldCBmb3JtYXR0ZWRWYWx1ZSA9ICcnO1xuXG4gICAgc3dpdGNoICh0aGlzLmxvY2FsRm9ybWF0KSB7XG4gICAgICBjYXNlIGBkZCR7dGhpcy5kZWxpbWl0ZXJ9TU0ke3RoaXMuZGVsaW1pdGVyfXl5eXlgOlxuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9XG4gICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUoZGF5LCAyKSArXG4gICAgICAgICAgdGhpcy5kZWxpbWl0ZXIgK1xuICAgICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKG1vbnRoLCAyKSArXG4gICAgICAgICAgdGhpcy5kZWxpbWl0ZXIgK1xuICAgICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHllYXIsIDQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgYE1NJHt0aGlzLmRlbGltaXRlcn1kZCR7dGhpcy5kZWxpbWl0ZXJ9eXl5eWA6XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID1cbiAgICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZShtb250aCwgMikgK1xuICAgICAgICAgIHRoaXMuZGVsaW1pdGVyICtcbiAgICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZShkYXksIDIpICtcbiAgICAgICAgICB0aGlzLmRlbGltaXRlciArXG4gICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUoeWVhciwgNCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBgeXl5eSR7dGhpcy5kZWxpbWl0ZXJ9TU0ke3RoaXMuZGVsaW1pdGVyfWRkYDpcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPVxuICAgICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHllYXIsIDQpICtcbiAgICAgICAgICB0aGlzLmRlbGltaXRlciArXG4gICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUobW9udGgsIDIpICtcbiAgICAgICAgICB0aGlzLmRlbGltaXRlciArXG4gICAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUoZGF5LCAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhdXRvQ29tcGxldGUodmFsdWUsIGxlbmd0aCkge1xuICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMuc3RyaXBOb25OdW1lcmljKHZhbHVlKTtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9PZkNvbXBsZXRpb25zID0gbGVuZ3RoIC0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub09mQ29tcGxldGlvbnM7IGkrKykge1xuICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlICsgJ18nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RyaXBOb25OdW1lcmljKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGFkanVzdFBvc2l0aW9uKHZhbHVlKSB7XG4gICAgY29uc3QgZGVsaW1pdGVyUG9zaXRpb24gPSB7XG4gICAgICAnZGQtTU0teXl5eSc6IFszLCA2XSxcbiAgICAgICdNTS1kZC15eXl5JzogWzMsIDZdLFxuICAgICAgJ3l5eXktTU0tZGQnOiBbNSwgOF0sXG4gICAgICAnZGQvTU0veXl5eSc6IFszLCA2XSxcbiAgICAgICdNTS9kZC95eXl5JzogWzMsIDZdXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgIGlmIChkZWxpbWl0ZXJQb3NpdGlvblt0aGlzLmxvY2FsRm9ybWF0XT8uaW5jbHVkZXMoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IHRoaXMucHJldmlvdXNWYWx1ZS5sZW5ndGggPyBjdXJyZW50UG9zaXRpb24gKyAxIDogY3VycmVudFBvc2l0aW9uIC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRQb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FyZXRQb3NpdGlvbihjdHJsLCBwb3NpdGlvbikge1xuICAgIC8vIElFID49IDkgYW5kIG90aGVyIGJyb3dzZXJzXG4gICAgaWYgKGN0cmwuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgIGN0cmwuZm9jdXMoKTtcbiAgICAgIGN0cmwuc2V0U2VsZWN0aW9uUmFuZ2UocG9zaXRpb24sIHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==