import { Component, Input, Inject } from '@angular/core';
import { SumsTypeProvider, SumCategory, SumLabelSizes } from './sum-label.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../typography/sum-label/sum-label.directive";
export class UpSumLabelComponent {
    constructor(provider) {
        this.provider = provider;
        this.type = SumCategory.DEFAULT;
        this.size = SumLabelSizes.Base;
    }
    get cssClass() {
        return this.provider.types.get(this.type) || this.provider.types.get(SumCategory.DEFAULT);
    }
}
UpSumLabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpSumLabelComponent, deps: [{ token: SumsTypeProvider }], target: i0.ɵɵFactoryTarget.Component });
UpSumLabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpSumLabelComponent, selector: "up-sums", inputs: { type: "type", size: "size" }, ngImport: i0, template: "<p [ngClass]=\"cssClass\" [upSumLabel]=\"size\">\n  <span><ng-content></ng-content></span>\n</p>\n", styles: [".up-sums-component-total{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-brand-1-700)}.up-sums-component-critical{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-negative-700)}.up-sums-component-warning{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-warning-700)}.up-sums-component-default{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-neutral-700)}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.UpSumLabelDirective, selector: "[upSumLabel]", inputs: ["upSumLabel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpSumLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-sums', template: "<p [ngClass]=\"cssClass\" [upSumLabel]=\"size\">\n  <span><ng-content></ng-content></span>\n</p>\n", styles: [".up-sums-component-total{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-brand-1-700)}.up-sums-component-critical{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-negative-700)}.up-sums-component-warning{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-warning-700)}.up-sums-component-default{font-family:Source Sans Pro,serif;font-weight:300;color:var(--up-neutral-700)}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [SumsTypeProvider]
                }] }]; }, propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvY29tcG9uZW50cy9zdW1zL3N1bS1sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL2NvbXBvbmVudHMvc3Vtcy9zdW0tbGFiZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUdYLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDOzs7O0FBTy9CLE1BQU0sT0FBTyxtQkFBbUI7SUFJOUIsWUFBOEMsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUh2RCxTQUFJLEdBQVksV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxTQUFJLEdBQWtCLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFFaUIsQ0FBQztJQUVwRSxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RixDQUFDOztnSEFSVSxtQkFBbUIsa0JBSVYsZ0JBQWdCO29HQUp6QixtQkFBbUIsdUZDZGhDLG9HQUdBOzJGRFdhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxTQUFTOzswQkFRTixNQUFNOzJCQUFDLGdCQUFnQjs0Q0FIM0IsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU3Vtc1R5cGVQcm92aWRlcixcbiAgU3VtQ2F0ZWdvcnksXG4gIFN1bVR5cGUsXG4gIFN1bVR5cGVzLFxuICBTdW1MYWJlbFNpemVzXG59IGZyb20gJy4vc3VtLWxhYmVsLmNvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXN1bXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VtLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VtLWxhYmVsLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBTdW1MYWJlbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHR5cGU6IFN1bVR5cGUgPSBTdW1DYXRlZ29yeS5ERUZBVUxUO1xuICBASW5wdXQoKSBzaXplOiBTdW1MYWJlbFNpemVzID0gU3VtTGFiZWxTaXplcy5CYXNlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoU3Vtc1R5cGVQcm92aWRlcikgcHJpdmF0ZSBwcm92aWRlcjogU3VtVHlwZXMpIHt9XG5cbiAgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIudHlwZXMuZ2V0KHRoaXMudHlwZSkgfHwgdGhpcy5wcm92aWRlci50eXBlcy5nZXQoU3VtQ2F0ZWdvcnkuREVGQVVMVCk7XG4gIH1cbn1cbiIsIjxwIFtuZ0NsYXNzXT1cImNzc0NsYXNzXCIgW3VwU3VtTGFiZWxdPVwic2l6ZVwiPlxuICA8c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxuPC9wPlxuIl19