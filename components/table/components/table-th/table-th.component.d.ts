import { EventEmitter } from '@angular/core';
import { BaseTableRowColumnDirective } from '../../helpers/base-table-row-column';
import { TableSortDirection } from '../../enums/table-sort.enum';
import { TableSortDirective } from '../../directives';
import { TableCheckboxDirective } from '../../directives/table-checkbox.directive';
import * as i0 from "@angular/core";
export declare class TableThComponent extends BaseTableRowColumnDirective {
    sortDirective: TableSortDirective;
    tableCheckboxDirective: TableCheckboxDirective;
    readonly DIRECTIONS: typeof TableSortDirection;
    dataTest: string;
    width: number;
    hasSuffixIcon: boolean;
    hasPrefixIcon: boolean;
    sortName: string;
    hasFilter: boolean;
    filterOpened: EventEmitter<void>;
    filterClosed: EventEmitter<void>;
    upTableThClass: boolean;
    get upTableThSortable(): boolean;
    get canFilterClass(): boolean;
    get sortActiveClass(): boolean;
    get maxWidth(): string;
    handleClick(): void;
    constructor(sortDirective: TableSortDirective, tableCheckboxDirective: TableCheckboxDirective);
    openFilter(): void;
    closeFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableThComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableThComponent, "[upTableTh]", ["upTableTh"], { "dataTest": "dataTest"; "width": "width"; "hasSuffixIcon": "hasSuffixIcon"; "hasPrefixIcon": "hasPrefixIcon"; "sortName": "sortName"; "hasFilter": "hasFilter"; }, { "filterOpened": "filterOpened"; "filterClosed": "filterClosed"; }, never, ["*", "[upTableFilterTemplate]"], false>;
}
//# sourceMappingURL=table-th.component.d.ts.map