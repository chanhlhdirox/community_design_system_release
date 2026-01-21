import { AfterContentInit, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { TableDisplayDensityEnum } from '../../enums';
import { ResizeObserverRef, TableDisplayDensityService } from '../../services';
import * as i0 from "@angular/core";
export declare class TableComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {
    private renderer;
    private ngZone;
    private tableDisplayDensityService;
    private resizeObserverRef;
    displayDensityMode: TableDisplayDensityEnum;
    tbody: any;
    thead: any;
    resizeObserver: ResizeObserver;
    tbodyElement: HTMLElement;
    theadElement: HTMLElement;
    displayDensityMode$: Subject<TableDisplayDensityEnum>;
    tableDisplayDensityEnum: typeof TableDisplayDensityEnum;
    constructor(renderer: Renderer2, ngZone: NgZone, tableDisplayDensityService: TableDisplayDensityService, resizeObserverRef: ResizeObserverRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private compensateTbodyScrollDimension;
    private onTheadSizeChange;
    private getTableHeadWithDifference;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "up-table", never, { "displayDensityMode": "displayDensityMode"; }, {}, ["tbody", "thead"], ["*"], false>;
}
//# sourceMappingURL=table.component.d.ts.map