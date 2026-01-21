import { EventEmitter } from '@angular/core';
import { TableSort, TableSortDirection } from '../enums/table-sort.enum';
import * as i0 from "@angular/core";
export declare class TableSortDirective {
    defaultSortDirection: TableSortDirection;
    sortChanged: EventEmitter<TableSort>;
    set activeSort(sort: TableSort);
    get activeSort(): TableSort;
    private _activeSort;
    get sortName(): string;
    get sortDirection(): TableSortDirection;
    constructor();
    setInitialSort(params: TableSort): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableSortDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TableSortDirective, "[upTableSort]", ["upTableSort"], { "defaultSortDirection": "defaultSortDirection"; }, { "sortChanged": "sortChanged"; }, never, never, false>;
}
//# sourceMappingURL=table-sort.directive.d.ts.map