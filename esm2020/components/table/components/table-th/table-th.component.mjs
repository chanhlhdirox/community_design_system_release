import { Component, EventEmitter, HostBinding, HostListener, Input, Optional, Output } from '@angular/core';
import { BaseTableRowColumnDirective } from '../../helpers/base-table-row-column';
import { TableSortDirection } from '../../enums/table-sort.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../directives";
import * as i2 from "../../directives/table-checkbox.directive";
import * as i3 from "@angular/common";
import * as i4 from "../../../icons/icon.directive";
import * as i5 from "../../../pop-out/pop-out-trigger.directive";
import * as i6 from "../../directives/table-th-label.directive";
export class TableThComponent extends BaseTableRowColumnDirective {
    constructor(sortDirective, tableCheckboxDirective) {
        super();
        this.sortDirective = sortDirective;
        this.tableCheckboxDirective = tableCheckboxDirective;
        this.DIRECTIONS = TableSortDirection;
        this.dataTest = 'filter-column-icon';
        this.hasSuffixIcon = false;
        this.hasPrefixIcon = false;
        this.hasFilter = false;
        this.filterOpened = new EventEmitter();
        this.filterClosed = new EventEmitter();
        this.upTableThClass = true;
    }
    get upTableThSortable() {
        return !!this.sortName;
    }
    get canFilterClass() {
        return this.hasSuffixIcon || this.hasFilter;
    }
    get sortActiveClass() {
        return this.hasPrefixIcon || !!this.sortName;
    }
    get maxWidth() {
        return !!this.width ? `${this.width}px` : 'auto';
    }
    handleClick() {
        if (!this.sortName || !this.sortDirective) {
            return;
        }
        const activeSort = this.sortDirective.activeSort;
        if (!activeSort) {
            this.sortDirective.activeSort = {
                name: this.sortName,
                direction: this.sortDirective.defaultSortDirection
            };
            return;
        }
        if (activeSort.name !== this.sortName) {
            this.sortDirective.activeSort = {
                name: this.sortName,
                direction: this.sortDirective.defaultSortDirection
            };
            return;
        }
        if (activeSort.direction === this.sortDirective.defaultSortDirection) {
            const direction = this.sortDirective.defaultSortDirection === TableSortDirection.ASC
                ? TableSortDirection.DESC
                : TableSortDirection.ASC;
            this.sortDirective.activeSort = { name: this.sortName, direction };
        }
        else {
            this.sortDirective.activeSort = null;
        }
    }
    openFilter() {
        this.filterOpened.emit();
    }
    closeFilter() {
        this.filterClosed.emit();
    }
}
TableThComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableThComponent, deps: [{ token: i1.TableSortDirective, optional: true }, { token: i2.TableCheckboxDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component });
TableThComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TableThComponent, selector: "[upTableTh]", inputs: { dataTest: "dataTest", width: "width", hasSuffixIcon: "hasSuffixIcon", hasPrefixIcon: "hasPrefixIcon", sortName: "sortName", hasFilter: "hasFilter" }, outputs: { filterOpened: "filterOpened", filterClosed: "filterClosed" }, host: { listeners: { "click": "handleClick()" }, properties: { "class.up-table-th": "this.upTableThClass", "class.up-table-th--with-sort": "this.upTableThSortable", "class.has-suffix-icon": "this.canFilterClass", "class.has-prefix-icon": "this.sortActiveClass", "style.max-width": "this.maxWidth" } }, exportAs: ["upTableTh"], usesInheritance: true, ngImport: i0, template: "<ng-template #thContent>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!!sortName\">\n  <i\n    *ngIf=\"sortDirective?.sortName !== sortName; else sortActiveTemplate\"\n    upIcon=\"sort_small\"\n    class=\"sort-icon\"\n  ></i>\n  <ng-template #sortActiveTemplate>\n    <i\n      *ngIf=\"sortDirective?.sortDirection === DIRECTIONS.DESC\"\n      upIcon=\"sort_down_small\"\n      class=\"sort-icon\"\n    ></i>\n    <i\n      *ngIf=\"sortDirective?.sortDirection === DIRECTIONS.ASC\"\n      upIcon=\"sort_up_small\"\n      class=\"sort-icon\"\n    ></i>\n  </ng-template>\n</ng-container>\n\n<div upTableThLabel *ngIf=\"!tableCheckboxDirective\">\n  <ng-container [ngTemplateOutlet]=\"thContent\"></ng-container>\n</div>\n<ng-container *ngIf=\"tableCheckboxDirective\" [ngTemplateOutlet]=\"thContent\"></ng-container>\n<i\n  *ngIf=\"hasFilter\"\n  [upPopOutTrigger]=\"filterTemplate\"\n  [stopClickEventPropagation]=\"true\"\n  (popoutOpened)=\"openFilter()\"\n  (popoutClosed)=\"closeFilter()\"\n  [attr.data-test]=\"dataTest\"\n  position=\"bottomLeft\"\n  upIcon=\"filter_small\"\n  class=\"filter-icon\"\n></i>\n<ng-template #filterTemplate>\n  <ng-content select=\"[upTableFilterTemplate]\"></ng-content>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }, { kind: "directive", type: i5.UpPopOutTriggerDirective, selector: "[upPopOutTrigger]", inputs: ["upPopOutTrigger", "position", "closeOnOptionClick", "popoutDisabled", "stopClickEventPropagation", "hasFloatingCardPadding"], outputs: ["popoutOpened", "popoutClosed"], exportAs: ["upPopOutTrigger"] }, { kind: "directive", type: i6.TableThLabelDirective, selector: "[upTableThLabel]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableThComponent, decorators: [{
            type: Component,
            args: [{ selector: '[upTableTh]', exportAs: 'upTableTh', template: "<ng-template #thContent>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!!sortName\">\n  <i\n    *ngIf=\"sortDirective?.sortName !== sortName; else sortActiveTemplate\"\n    upIcon=\"sort_small\"\n    class=\"sort-icon\"\n  ></i>\n  <ng-template #sortActiveTemplate>\n    <i\n      *ngIf=\"sortDirective?.sortDirection === DIRECTIONS.DESC\"\n      upIcon=\"sort_down_small\"\n      class=\"sort-icon\"\n    ></i>\n    <i\n      *ngIf=\"sortDirective?.sortDirection === DIRECTIONS.ASC\"\n      upIcon=\"sort_up_small\"\n      class=\"sort-icon\"\n    ></i>\n  </ng-template>\n</ng-container>\n\n<div upTableThLabel *ngIf=\"!tableCheckboxDirective\">\n  <ng-container [ngTemplateOutlet]=\"thContent\"></ng-container>\n</div>\n<ng-container *ngIf=\"tableCheckboxDirective\" [ngTemplateOutlet]=\"thContent\"></ng-container>\n<i\n  *ngIf=\"hasFilter\"\n  [upPopOutTrigger]=\"filterTemplate\"\n  [stopClickEventPropagation]=\"true\"\n  (popoutOpened)=\"openFilter()\"\n  (popoutClosed)=\"closeFilter()\"\n  [attr.data-test]=\"dataTest\"\n  position=\"bottomLeft\"\n  upIcon=\"filter_small\"\n  class=\"filter-icon\"\n></i>\n<ng-template #filterTemplate>\n  <ng-content select=\"[upTableFilterTemplate]\"></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i1.TableSortDirective, decorators: [{
                    type: Optional
                }] }, { type: i2.TableCheckboxDirective, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { dataTest: [{
                type: Input
            }], width: [{
                type: Input
            }], hasSuffixIcon: [{
                type: Input
            }], hasPrefixIcon: [{
                type: Input
            }], sortName: [{
                type: Input
            }], hasFilter: [{
                type: Input
            }], filterOpened: [{
                type: Output
            }], filterClosed: [{
                type: Output
            }], upTableThClass: [{
                type: HostBinding,
                args: ['class.up-table-th']
            }], upTableThSortable: [{
                type: HostBinding,
                args: ['class.up-table-th--with-sort']
            }], canFilterClass: [{
                type: HostBinding,
                args: ['class.has-suffix-icon']
            }], sortActiveClass: [{
                type: HostBinding,
                args: ['class.has-prefix-icon']
            }], maxWidth: [{
                type: HostBinding,
                args: ['style.max-width']
            }], handleClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90YWJsZS9jb21wb25lbnRzL3RhYmxlLXRoL3RhYmxlLXRoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFibGUvY29tcG9uZW50cy90YWJsZS10aC90YWJsZS10aC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7OztBQVVqRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsMkJBQTJCO0lBOEQvRCxZQUNxQixhQUFpQyxFQUNqQyxzQkFBOEM7UUFFakUsS0FBSyxFQUFFLENBQUM7UUFIVyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQS9EMUQsZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBRWhDLGFBQVEsR0FBRyxvQkFBb0IsQ0FBQztRQUVoQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGlCQUFZLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDNUQsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVwQyxtQkFBYyxHQUFHLElBQUksQ0FBQztJQXFEeEQsQ0FBQztJQXBERCxJQUFpRCxpQkFBaUI7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aUJBQWlCO2dCQUlQLFdBQVc7c0JBQWpDLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VUYWJsZVJvd0NvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYmFzZS10YWJsZS1yb3ctY29sdW1uJztcbmltcG9ydCB7IFRhYmxlU29ydERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2VudW1zL3RhYmxlLXNvcnQuZW51bSc7XG5pbXBvcnQgeyBUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFRhYmxlQ2hlY2tib3hEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RhYmxlLWNoZWNrYm94LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW3VwVGFibGVUaF0nLFxuICBleHBvcnRBczogJ3VwVGFibGVUaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS10aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVUaENvbXBvbmVudCBleHRlbmRzIEJhc2VUYWJsZVJvd0NvbHVtbkRpcmVjdGl2ZSB7XG4gIHJlYWRvbmx5IERJUkVDVElPTlMgPSBUYWJsZVNvcnREaXJlY3Rpb247XG5cbiAgQElucHV0KCkgZGF0YVRlc3QgPSAnZmlsdGVyLWNvbHVtbi1pY29uJztcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaGFzU3VmZml4SWNvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNQcmVmaXhJY29uID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc29ydE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaGFzRmlsdGVyID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGZpbHRlck9wZW5lZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51cC10YWJsZS10aCcpIHVwVGFibGVUaENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51cC10YWJsZS10aC0td2l0aC1zb3J0JykgZ2V0IHVwVGFibGVUaFNvcnRhYmxlKCkge1xuICAgIHJldHVybiAhIXRoaXMuc29ydE5hbWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1zdWZmaXgtaWNvbicpIGdldCBjYW5GaWx0ZXJDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTdWZmaXhJY29uIHx8IHRoaXMuaGFzRmlsdGVyO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLXByZWZpeC1pY29uJykgZ2V0IHNvcnRBY3RpdmVDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNQcmVmaXhJY29uIHx8ICEhdGhpcy5zb3J0TmFtZTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpIGdldCBtYXhXaWR0aCgpIHtcbiAgICByZXR1cm4gISF0aGlzLndpZHRoID8gYCR7dGhpcy53aWR0aH1weGAgOiAnYXV0byc7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zb3J0TmFtZSB8fCAhdGhpcy5zb3J0RGlyZWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlU29ydCA9IHRoaXMuc29ydERpcmVjdGl2ZS5hY3RpdmVTb3J0O1xuICAgIGlmICghYWN0aXZlU29ydCkge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aXZlLmFjdGl2ZVNvcnQgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuc29ydE5hbWUsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5zb3J0RGlyZWN0aXZlLmRlZmF1bHRTb3J0RGlyZWN0aW9uXG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmVTb3J0Lm5hbWUgIT09IHRoaXMuc29ydE5hbWUpIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGl2ZS5hY3RpdmVTb3J0ID0ge1xuICAgICAgICBuYW1lOiB0aGlzLnNvcnROYW1lLFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuc29ydERpcmVjdGl2ZS5kZWZhdWx0U29ydERpcmVjdGlvblxuICAgICAgfTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlU29ydC5kaXJlY3Rpb24gPT09IHRoaXMuc29ydERpcmVjdGl2ZS5kZWZhdWx0U29ydERpcmVjdGlvbikge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID1cbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aXZlLmRlZmF1bHRTb3J0RGlyZWN0aW9uID09PSBUYWJsZVNvcnREaXJlY3Rpb24uQVNDXG4gICAgICAgICAgPyBUYWJsZVNvcnREaXJlY3Rpb24uREVTQ1xuICAgICAgICAgIDogVGFibGVTb3J0RGlyZWN0aW9uLkFTQztcbiAgICAgIHRoaXMuc29ydERpcmVjdGl2ZS5hY3RpdmVTb3J0ID0geyBuYW1lOiB0aGlzLnNvcnROYW1lLCBkaXJlY3Rpb24gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aXZlLmFjdGl2ZVNvcnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBzb3J0RGlyZWN0aXZlOiBUYWJsZVNvcnREaXJlY3RpdmUsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHRhYmxlQ2hlY2tib3hEaXJlY3RpdmU6IFRhYmxlQ2hlY2tib3hEaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG9wZW5GaWx0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJPcGVuZWQuZW1pdCgpO1xuICB9XG5cbiAgY2xvc2VGaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXJDbG9zZWQuZW1pdCgpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGUgI3RoQ29udGVudD5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhIXNvcnROYW1lXCI+XG4gIDxpXG4gICAgKm5nSWY9XCJzb3J0RGlyZWN0aXZlPy5zb3J0TmFtZSAhPT0gc29ydE5hbWU7IGVsc2Ugc29ydEFjdGl2ZVRlbXBsYXRlXCJcbiAgICB1cEljb249XCJzb3J0X3NtYWxsXCJcbiAgICBjbGFzcz1cInNvcnQtaWNvblwiXG4gID48L2k+XG4gIDxuZy10ZW1wbGF0ZSAjc29ydEFjdGl2ZVRlbXBsYXRlPlxuICAgIDxpXG4gICAgICAqbmdJZj1cInNvcnREaXJlY3RpdmU/LnNvcnREaXJlY3Rpb24gPT09IERJUkVDVElPTlMuREVTQ1wiXG4gICAgICB1cEljb249XCJzb3J0X2Rvd25fc21hbGxcIlxuICAgICAgY2xhc3M9XCJzb3J0LWljb25cIlxuICAgID48L2k+XG4gICAgPGlcbiAgICAgICpuZ0lmPVwic29ydERpcmVjdGl2ZT8uc29ydERpcmVjdGlvbiA9PT0gRElSRUNUSU9OUy5BU0NcIlxuICAgICAgdXBJY29uPVwic29ydF91cF9zbWFsbFwiXG4gICAgICBjbGFzcz1cInNvcnQtaWNvblwiXG4gICAgPjwvaT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbmctY29udGFpbmVyPlxuXG48ZGl2IHVwVGFibGVUaExhYmVsICpuZ0lmPVwiIXRhYmxlQ2hlY2tib3hEaXJlY3RpdmVcIj5cbiAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aENvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInRhYmxlQ2hlY2tib3hEaXJlY3RpdmVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aENvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbjxpXG4gICpuZ0lmPVwiaGFzRmlsdGVyXCJcbiAgW3VwUG9wT3V0VHJpZ2dlcl09XCJmaWx0ZXJUZW1wbGF0ZVwiXG4gIFtzdG9wQ2xpY2tFdmVudFByb3BhZ2F0aW9uXT1cInRydWVcIlxuICAocG9wb3V0T3BlbmVkKT1cIm9wZW5GaWx0ZXIoKVwiXG4gIChwb3BvdXRDbG9zZWQpPVwiY2xvc2VGaWx0ZXIoKVwiXG4gIFthdHRyLmRhdGEtdGVzdF09XCJkYXRhVGVzdFwiXG4gIHBvc2l0aW9uPVwiYm90dG9tTGVmdFwiXG4gIHVwSWNvbj1cImZpbHRlcl9zbWFsbFwiXG4gIGNsYXNzPVwiZmlsdGVyLWljb25cIlxuPjwvaT5cbjxuZy10ZW1wbGF0ZSAjZmlsdGVyVGVtcGxhdGU+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIlt1cFRhYmxlRmlsdGVyVGVtcGxhdGVdXCI+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==