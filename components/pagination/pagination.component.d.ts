import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaginationComponent implements OnInit, OnChanges {
    pageNumber: number;
    pageSize: number;
    collectionSize: number;
    previousButtonText: string;
    nextButtonText: string;
    pageNumberChange: EventEmitter<number>;
    pages: number[];
    generatedPages: number[];
    firstGeneratedPages: number[];
    lastGeneratedPages: number[];
    totalPages: number;
    totalVisiblePages: number;
    firstGeneratedPage: number;
    lastGeneratedPage: number;
    get isPaginationHidden(): boolean;
    ngOnInit(): void;
    ngOnChanges(): void;
    selectPage(newPageNumber: number): void;
    buildPages(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "up-pagination", never, { "pageNumber": "pageNumber"; "pageSize": "pageSize"; "collectionSize": "collectionSize"; "previousButtonText": "previousButtonText"; "nextButtonText": "nextButtonText"; }, { "pageNumberChange": "pageNumberChange"; }, never, never, false>;
}
//# sourceMappingURL=pagination.component.d.ts.map