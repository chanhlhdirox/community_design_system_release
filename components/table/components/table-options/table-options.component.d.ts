import { EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableDisplayDensityService } from '../../services/table-display-density.service';
import { TableDisplayDensityEnum } from '../../enums';
import * as i0 from "@angular/core";
export declare class TableOptionsComponent implements OnInit {
    private tableDisplayDensityService;
    tableOptionsLabel: string;
    hasTableOptions: boolean;
    hasTableDisplayDensityOptions: boolean;
    openTableOptions: EventEmitter<void>;
    tableDisplayDensityEnum: typeof TableDisplayDensityEnum;
    displayDensityMode$: Subject<TableDisplayDensityEnum>;
    constructor(tableDisplayDensityService: TableDisplayDensityService);
    ngOnInit(): void;
    changeDisplayDensityMode(mode: TableDisplayDensityEnum): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableOptionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableOptionsComponent, "up-table-options", never, { "tableOptionsLabel": "tableOptionsLabel"; "hasTableOptions": "hasTableOptions"; "hasTableDisplayDensityOptions": "hasTableDisplayDensityOptions"; }, { "openTableOptions": "openTableOptions"; }, never, ["*"], false>;
}
//# sourceMappingURL=table-options.component.d.ts.map