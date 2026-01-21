import { PipeTransform } from '@angular/core';
import { DecimalSeparatorService } from '../services/decimal-separator.service';
import * as i0 from "@angular/core";
export declare class NumberPipe implements PipeTransform {
    private decimalSeparatorService;
    MAX_DECIMALS: number;
    constructor(decimalSeparatorService: DecimalSeparatorService);
    transform(value: any, numberOfDecimals?: number): string;
    private roundIntegerPart;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NumberPipe, "upNumber", false>;
}
//# sourceMappingURL=number.pipe.d.ts.map