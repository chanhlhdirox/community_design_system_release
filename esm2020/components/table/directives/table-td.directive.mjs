import { Directive, HostBinding, Input } from '@angular/core';
import { BaseTableRowColumnDirective } from '../helpers/base-table-row-column';
import * as i0 from "@angular/core";
export class TableTdDirective extends BaseTableRowColumnDirective {
    constructor() {
        super(...arguments);
        this.upTableTdClass = true;
    }
    get maxWidth() {
        return !!this.width ? `${this.width}px` : 'auto';
    }
}
TableTdDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableTdDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
TableTdDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: TableTdDirective, selector: "[upTableTd]", inputs: { width: "width" }, host: { properties: { "class.up-table-td": "this.upTableTdClass", "style.max-width": "this.maxWidth" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableTdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTableTd]'
                }]
        }], propDecorators: { width: [{
                type: Input
            }], upTableTdClass: [{
                type: HostBinding,
                args: ['class.up-table-td']
            }], maxWidth: [{
                type: HostBinding,
                args: ['style.max-width']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLXRkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBSy9FLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSwyQkFBMkI7SUFIakU7O1FBTW9DLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0tBSXpEO0lBSEMsSUFBb0MsUUFBUTtRQUMxQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ25ELENBQUM7OzZHQU5VLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzhCQUVVLEtBQUs7c0JBQWIsS0FBSztnQkFFNEIsY0FBYztzQkFBL0MsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBQ0ksUUFBUTtzQkFBM0MsV0FBVzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVRhYmxlUm93Q29sdW1uRGlyZWN0aXZlIH0gZnJvbSAnLi4vaGVscGVycy9iYXNlLXRhYmxlLXJvdy1jb2x1bW4nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdXBUYWJsZVRkXSdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVUZERpcmVjdGl2ZSBleHRlbmRzIEJhc2VUYWJsZVJvd0NvbHVtbkRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51cC10YWJsZS10ZCcpIHVwVGFibGVUZENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXgtd2lkdGgnKSBnZXQgbWF4V2lkdGgoKSB7XG4gICAgcmV0dXJuICEhdGhpcy53aWR0aCA/IGAke3RoaXMud2lkdGh9cHhgIDogJ2F1dG8nO1xuICB9XG59XG4iXX0=