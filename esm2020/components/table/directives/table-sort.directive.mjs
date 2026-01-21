import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { TableSortDirection } from '../enums/table-sort.enum';
import * as i0 from "@angular/core";
export class TableSortDirective {
    constructor() {
        this.defaultSortDirection = TableSortDirection.DESC;
        this.sortChanged = new EventEmitter();
    }
    set activeSort(sort) {
        this._activeSort = sort;
        this.sortChanged.emit(sort);
    }
    get activeSort() {
        return this._activeSort;
    }
    get sortName() {
        return this._activeSort?.name;
    }
    get sortDirection() {
        return this._activeSort?.direction;
    }
    setInitialSort(params) {
        this._activeSort = params;
    }
}
TableSortDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableSortDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TableSortDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: TableSortDirective, selector: "[upTableSort]", inputs: { defaultSortDirection: "defaultSortDirection" }, outputs: { sortChanged: "sortChanged" }, exportAs: ["upTableSort"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableSortDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTableSort]',
                    exportAs: 'upTableSort'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { defaultSortDirection: [{
                type: Input
            }], sortChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvdGFibGUtc29ydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQWEsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFNekUsTUFBTSxPQUFPLGtCQUFrQjtJQXdCN0I7UUF2QlMseUJBQW9CLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQzlDLGdCQUFXLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUM7SUFzQmhFLENBQUM7SUFwQmhCLElBQUksVUFBVSxDQUFDLElBQWU7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBS0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBSUQsY0FBYyxDQUFDLE1BQWlCO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQzVCLENBQUM7OytHQTVCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUo5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7MEVBRVUsb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVTb3J0LCBUYWJsZVNvcnREaXJlY3Rpb24gfSBmcm9tICcuLi9lbnVtcy90YWJsZS1zb3J0LmVudW0nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXBUYWJsZVNvcnRdJyxcbiAgZXhwb3J0QXM6ICd1cFRhYmxlU29ydCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTb3J0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZGVmYXVsdFNvcnREaXJlY3Rpb24gPSBUYWJsZVNvcnREaXJlY3Rpb24uREVTQztcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8VGFibGVTb3J0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFibGVTb3J0PigpO1xuXG4gIHNldCBhY3RpdmVTb3J0KHNvcnQ6IFRhYmxlU29ydCkge1xuICAgIHRoaXMuX2FjdGl2ZVNvcnQgPSBzb3J0O1xuICAgIHRoaXMuc29ydENoYW5nZWQuZW1pdChzb3J0KTtcbiAgfVxuXG4gIGdldCBhY3RpdmVTb3J0KCk6IFRhYmxlU29ydCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVNvcnQ7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9hY3RpdmVTb3J0OiBUYWJsZVNvcnQ7XG5cbiAgZ2V0IHNvcnROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVNvcnQ/Lm5hbWU7XG4gIH1cblxuICBnZXQgc29ydERpcmVjdGlvbigpOiBUYWJsZVNvcnREaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVTb3J0Py5kaXJlY3Rpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0SW5pdGlhbFNvcnQocGFyYW1zOiBUYWJsZVNvcnQpIHtcbiAgICB0aGlzLl9hY3RpdmVTb3J0ID0gcGFyYW1zO1xuICB9XG59XG4iXX0=