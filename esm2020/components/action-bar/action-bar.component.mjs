import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/icon.directive";
export class UpActionBarComponent {
    constructor() {
        this.loading = false;
    }
}
UpActionBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpActionBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpActionBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpActionBarComponent, selector: "up-action-bar", inputs: { loading: "loading" }, ngImport: i0, template: "<div class=\"up-action-bar\">\n  <div class=\"action-bar-content\" [class.bar-loading]=\"loading\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"spinner-container\">\n    <i upIcon=\"spinner_medium\" width=\"24px\" height=\"24px\" color=\"white\"></i>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpActionBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-action-bar', template: "<div class=\"up-action-bar\">\n  <div class=\"action-bar-content\" [class.bar-loading]=\"loading\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"spinner-container\">\n    <i upIcon=\"spinner_medium\" width=\"24px\" height=\"24px\" color=\"white\"></i>\n  </div>\n</div>\n" }]
        }], propDecorators: { loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU1qRCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBTUUsWUFBTyxHQUFHLEtBQUssQ0FBQztLQUNqQjs7aUhBSFksb0JBQW9CO3FHQUFwQixvQkFBb0IscUZDTmpDLGlUQVNBOzJGREhhLG9CQUFvQjtrQkFKaEMsU0FBUzsrQkFDRSxlQUFlOzhCQUt6QixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLWFjdGlvbi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXBBY3Rpb25CYXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBsb2FkaW5nID0gZmFsc2U7XG59XG4iLCI8ZGl2IGNsYXNzPVwidXAtYWN0aW9uLWJhclwiPlxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWJhci1jb250ZW50XCIgW2NsYXNzLmJhci1sb2FkaW5nXT1cImxvYWRpbmdcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxuICAgIDxpIHVwSWNvbj1cInNwaW5uZXJfbWVkaXVtXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIGNvbG9yPVwid2hpdGVcIj48L2k+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=