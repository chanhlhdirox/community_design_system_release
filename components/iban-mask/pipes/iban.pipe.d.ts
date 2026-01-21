import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum COUNTRY_CODE_CHECKSUM_SUFFIX {
    RS = "RS35"
}
export declare class IbanPipe implements PipeTransform {
    transform(value: any, autocompleteCountryCodeAndChecksum?: boolean, countryCode?: string): string;
    parse(value: any, autocompleteCountryCodeAndChecksum?: boolean, countryCode?: string): string;
    private cleanIban;
    private onlyLetters;
    private removeLast;
    static ɵfac: i0.ɵɵFactoryDeclaration<IbanPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IbanPipe, "IBAN", false>;
}
//# sourceMappingURL=iban.pipe.d.ts.map