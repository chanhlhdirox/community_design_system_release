import { TableDisplayDensityEnum } from '../enums/table-display-density.enum';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TableDisplayDensityService {
    displayDensityMode$: Subject<TableDisplayDensityEnum>;
    constructor();
    setDisplayDensity(mode: TableDisplayDensityEnum): void;
    getDisplayDensity(): Subject<TableDisplayDensityEnum>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDisplayDensityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TableDisplayDensityService>;
}
//# sourceMappingURL=table-display-density.service.d.ts.map