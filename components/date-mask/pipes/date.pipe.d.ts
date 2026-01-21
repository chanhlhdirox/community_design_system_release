import { PipeTransform } from '@angular/core';
import { DateFormatService } from '../services/date-format.service';
import * as i0 from "@angular/core";
export declare class DatePipe implements PipeTransform {
    private dateFormatService;
    constructor(dateFormatService: DateFormatService);
    transform(value: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DatePipe, "upDate", false>;
}
//# sourceMappingURL=date.pipe.d.ts.map