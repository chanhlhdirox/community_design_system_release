import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../typography/title/title.directive";
export class UpTimelineComponent {
    get timelineTitle() {
        return this.title ? this.title : 'Timeline';
    }
}
UpTimelineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTimelineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpTimelineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpTimelineComponent, selector: "up-timeline", inputs: { title: "title" }, ngImport: i0, template: "<div class=\"up-timeline\">\n  <h3 class=\"up-timeline-title\" upTitle=\"XS\">{{ timelineTitle }}</h3>\n  <ng-content></ng-content>\n</div>\n", styles: [".up-timeline{display:-webkit-flex;display:flex;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-direction:column;flex-direction:column}.up-timeline .up-timeline-title{margin-bottom:15px}\n"], dependencies: [{ kind: "directive", type: i1.UpTitleDirective, selector: "[upTitle]", inputs: ["upTitle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTimelineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-timeline', template: "<div class=\"up-timeline\">\n  <h3 class=\"up-timeline-title\" upTitle=\"XS\">{{ timelineTitle }}</h3>\n  <ng-content></ng-content>\n</div>\n", styles: [".up-timeline{display:-webkit-flex;display:flex;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-direction:column;flex-direction:column}.up-timeline .up-timeline-title{margin-bottom:15px}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPakQsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QixJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDOztnSEFOVSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwrRUNQaEMsK0lBSUE7MkZER2EsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGFBQWE7OEJBTXZCLEtBQUs7c0JBREosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXAtdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJ3RpbWVsaW5lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RpbWVsaW5lLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBUaW1lbGluZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgZ2V0IHRpbWVsaW5lVGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPyB0aGlzLnRpdGxlIDogJ1RpbWVsaW5lJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVwLXRpbWVsaW5lXCI+XG4gIDxoMyBjbGFzcz1cInVwLXRpbWVsaW5lLXRpdGxlXCIgdXBUaXRsZT1cIlhTXCI+e3sgdGltZWxpbmVUaXRsZSB9fTwvaDM+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19