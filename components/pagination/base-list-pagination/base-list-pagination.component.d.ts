import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare abstract class UpBaseListPaginationComponent<T> implements OnChanges {
    items: T[];
    pageNumber: number;
    pageSize: number;
    get currentPageItems(): T[];
    ngOnChanges(changes: SimpleChanges): void;
    pageNumberChange(pageNumber: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpBaseListPaginationComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpBaseListPaginationComponent<any>, never, never, {}, {}, never, never, false>;
}
//# sourceMappingURL=base-list-pagination.component.d.ts.map