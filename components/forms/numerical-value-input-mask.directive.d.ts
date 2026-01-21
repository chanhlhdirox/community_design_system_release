import { ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NumericalValueInputMaskDirective implements OnInit {
    protected element: ElementRef;
    protected control: NgControl;
    min: number;
    max: number;
    constructor(element: ElementRef, control: NgControl);
    ngOnInit(): void;
    inputChange(value: any): void;
    inputBlur(value: any): void;
    protected updateValue(viewValue: string, modelValue: string): void;
    protected getCorrectNumericalValue(value: any): any;
    protected getCleanNumericValue(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumericalValueInputMaskDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NumericalValueInputMaskDirective, "[upNumericalValueInputMask]", never, { "min": "min"; "max": "max"; }, {}, never, never, false>;
}
//# sourceMappingURL=numerical-value-input-mask.directive.d.ts.map