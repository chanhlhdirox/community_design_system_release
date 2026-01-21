import { ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DateFormatService } from '../services/date-format.service';
import * as i0 from "@angular/core";
export declare class DateMaskDirective implements OnInit {
    private element;
    private control;
    private dateFormatService;
    previousValue: string;
    localFormat: string;
    delimiter: string;
    constructor(element: ElementRef, control: NgControl, dateFormatService: DateFormatService);
    ngOnInit(): void;
    inputChange(value: any): void;
    private updateValue;
    private setFormValue;
    private maskedValue;
    private autoComplete;
    private stripNonNumeric;
    private adjustPosition;
    private setCaretPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateMaskDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DateMaskDirective, "[upDateMask]", never, {}, {}, never, never, false>;
}
//# sourceMappingURL=date-mask.directive.d.ts.map