import { ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { IbanPipe } from '../pipes/iban.pipe';
import * as i0 from "@angular/core";
export declare class IbanMaskDirective implements OnInit {
    private element;
    private ibanPipe;
    private control;
    autocompleteCountryCodeAndChecksum: boolean;
    countryCode: string;
    constructor(element: ElementRef, ibanPipe: IbanPipe, control: NgControl);
    ngOnInit(): void;
    inputChange(value: any): void;
    private updateValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<IbanMaskDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IbanMaskDirective, "[upIBAN]", never, { "autocompleteCountryCodeAndChecksum": "autocompleteCountryCodeAndChecksum"; "countryCode": "countryCode"; }, {}, never, never, false>;
}
//# sourceMappingURL=iban-mask.directive.d.ts.map