import { PipeTransform } from '@angular/core';
import { DateFormatService } from '../services/date-format.service';
import * as i0 from "@angular/core";
export declare class TimePipe implements PipeTransform {
    private dateFormatService;
    constructor(dateFormatService: DateFormatService);
    transform(value: any, args?: {
        format?: string;
    }): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TimePipe, "upTime", false>;
}
//# sourceMappingURL=time.pipe.d.ts.map