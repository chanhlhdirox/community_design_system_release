import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../button/button.directive";
import * as i2 from "../../../icons/icon.directive";
export class TableFiltersComponent {
    constructor() {
        this.clearAllLabel = 'Clear all';
        this.activeFiltersLabel = 'Active Filters';
        this.filtersCleared = new EventEmitter();
    }
}
TableFiltersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableFiltersComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableFiltersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TableFiltersComponent, selector: "up-table-filters", inputs: { clearAllLabel: "clearAllLabel", activeFiltersLabel: "activeFiltersLabel" }, outputs: { filtersCleared: "filtersCleared" }, ngImport: i0, template: "<div class='up-table-filters'>\n  <div class='label'>\n    {{ activeFiltersLabel }}\n  </div>\n  <div class='filters'>\n    <ng-content></ng-content>\n  </div>\n  <div class='up-table-action clear-all-action'>\n    <button upButton='tertiary' (click)=\"filtersCleared.next()\"\n            data-test=\"clear-all-filters-button\">\n      <i upIcon='clear_small'></i>\n      {{ clearAllLabel }}\n    </button>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.UpButtonDirective, selector: "[upButton]", inputs: ["upButton", "width", "theme", "color"] }, { kind: "directive", type: i2.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableFiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-table-filters', template: "<div class='up-table-filters'>\n  <div class='label'>\n    {{ activeFiltersLabel }}\n  </div>\n  <div class='filters'>\n    <ng-content></ng-content>\n  </div>\n  <div class='up-table-action clear-all-action'>\n    <button upButton='tertiary' (click)=\"filtersCleared.next()\"\n            data-test=\"clear-all-filters-button\">\n      <i upIcon='clear_small'></i>\n      {{ clearAllLabel }}\n    </button>\n  </div>\n</div>\n" }]
        }], propDecorators: { clearAllLabel: [{
                type: Input
            }], activeFiltersLabel: [{
                type: Input
            }], filtersCleared: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtZmlsdGVycy90YWJsZS1maWx0ZXJzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFibGUvY29tcG9uZW50cy90YWJsZS1maWx0ZXJzL3RhYmxlLWZpbHRlcnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU12RSxNQUFNLE9BQU8scUJBQXFCO0lBSmxDO1FBS1csa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFDNUIsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7UUFFckMsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUNuRTs7a0hBTFkscUJBQXFCO3NHQUFyQixxQkFBcUIsNkxDTmxDLDZhQWVBOzJGRFRhLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSxrQkFBa0I7OEJBSW5CLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUVJLGNBQWM7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1cC10YWJsZS1maWx0ZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWZpbHRlcnMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRmlsdGVyc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNsZWFyQWxsTGFiZWwgPSAnQ2xlYXIgYWxsJztcbiAgQElucHV0KCkgYWN0aXZlRmlsdGVyc0xhYmVsID0gJ0FjdGl2ZSBGaWx0ZXJzJztcblxuICBAT3V0cHV0KCkgZmlsdGVyc0NsZWFyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsIjxkaXYgY2xhc3M9J3VwLXRhYmxlLWZpbHRlcnMnPlxuICA8ZGl2IGNsYXNzPSdsYWJlbCc+XG4gICAge3sgYWN0aXZlRmlsdGVyc0xhYmVsIH19XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPSdmaWx0ZXJzJz5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPSd1cC10YWJsZS1hY3Rpb24gY2xlYXItYWxsLWFjdGlvbic+XG4gICAgPGJ1dHRvbiB1cEJ1dHRvbj0ndGVydGlhcnknIChjbGljayk9XCJmaWx0ZXJzQ2xlYXJlZC5uZXh0KClcIlxuICAgICAgICAgICAgZGF0YS10ZXN0PVwiY2xlYXItYWxsLWZpbHRlcnMtYnV0dG9uXCI+XG4gICAgICA8aSB1cEljb249J2NsZWFyX3NtYWxsJz48L2k+XG4gICAgICB7eyBjbGVhckFsbExhYmVsIH19XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=