import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TablePaginationDirective {
    constructor() { }
    get currentPage() {
        if (!this.rows?.length) {
            return 0;
        }
        return Math.ceil(this.rows?.length / this.perPage);
    }
    get nextPage() {
        return this.currentPage + 1;
    }
}
TablePaginationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TablePaginationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TablePaginationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: TablePaginationDirective, selector: "[upTablePagination]", inputs: { totalRows: "totalRows", perPage: "perPage", rows: "rows" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TablePaginationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTablePagination]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { totalRows: [{
                type: Input
            }], perPage: [{
                type: Input
            }], rows: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcGFnaW5hdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvdGFibGUtcGFnaW5hdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS2pELE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsZ0JBQWUsQ0FBQztJQUVoQixJQUFJLFdBQVc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDdEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7cUhBakJVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBSHBDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7MEVBRVUsU0FBUztzQkFBakIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXBUYWJsZVBhZ2luYXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVBhZ2luYXRpb25EaXJlY3RpdmUge1xuICBASW5wdXQoKSB0b3RhbFJvd3M6IG51bWJlcjtcbiAgQElucHV0KCkgcGVyUGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSByb3dzOiB1bmtub3duW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBjdXJyZW50UGFnZSgpIHtcbiAgICBpZiAoIXRoaXMucm93cz8ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucm93cz8ubGVuZ3RoIC8gdGhpcy5wZXJQYWdlKTtcbiAgfVxuXG4gIGdldCBuZXh0UGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZSArIDE7XG4gIH1cbn1cbiJdfQ==