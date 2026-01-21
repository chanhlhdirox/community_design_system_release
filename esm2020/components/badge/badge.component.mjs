import { Component, Input, HostBinding } from '@angular/core';
import { BadgeCssClasses, BadgeTypes } from './enums';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../typography/paragraph/paragraph.directive";
export class UpBadgeComponent {
    constructor() {
        this.containerClass = true;
        this.badgeCssClasses = new Map();
        this.dataTest = 'up-badge';
    }
    ngOnInit() {
        this.badgeCssClasses.set(BadgeTypes.NOTIFICATION, BadgeCssClasses.NOTIFICATION);
        this.badgeCssClasses.set(BadgeTypes.TABS_WHITE, BadgeCssClasses.TABS_WHITE);
        this.badgeCssClasses.set(BadgeTypes.TABS_GREY, BadgeCssClasses.TABS_GREY);
        this.badgeCssClasses.set(BadgeTypes.SUBTLE, BadgeCssClasses.SUBTLE);
        this.badgeCssClasses.set(BadgeTypes.ACTIVE, BadgeCssClasses.ACTIVE);
        this.badgeCssClasses.set(BadgeTypes.INACTIVE, BadgeCssClasses.INACTIVE);
    }
    get badgeCssClass() {
        if (!this.type) {
            return this.badgeCssClasses.get(BadgeTypes.INACTIVE);
        }
        return this.badgeCssClasses.get(this.type);
    }
}
UpBadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpBadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpBadgeComponent, selector: "up-badge", inputs: { count: "count", type: "type", dataTest: "dataTest" }, host: { properties: { "class.up-badge": "this.containerClass" } }, ngImport: i0, template: "<div [ngClass]=\"badgeCssClass\">\n  <p class=\"up-badge-text\" upParagraph=\"XS\" [attr.data-test]=\"dataTest\">{{ count }}</p>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.UpParagraphDirective, selector: "[upParagraph]", inputs: ["upParagraph", "fontWeight"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-badge', template: "<div [ngClass]=\"badgeCssClass\">\n  <p class=\"up-badge-text\" upParagraph=\"XS\" [attr.data-test]=\"dataTest\">{{ count }}</p>\n</div>\n" }]
        }], propDecorators: { containerClass: [{
                type: HostBinding,
                args: ['class.up-badge']
            }], count: [{
                type: Input
            }], type: [{
                type: Input
            }], dataTest: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQWlCLGVBQWUsRUFBYSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFNaEYsTUFBTSxPQUFPLGdCQUFnQjtJQUo3QjtRQUtpQyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUVyRCxvQkFBZSxHQUFrQyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztRQUk1RSxhQUFRLEdBQUcsVUFBVSxDQUFDO0tBa0JoQztJQWhCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs2R0F4QlUsZ0JBQWdCO2lHQUFoQixnQkFBZ0IsbUxDUDdCLDRJQUdBOzJGRElhLGdCQUFnQjtrQkFKNUIsU0FBUzsrQkFDRSxVQUFVOzhCQUlXLGNBQWM7c0JBQTVDLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUlwQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWRnZUNzc0NsYXNzLCBCYWRnZUNzc0NsYXNzZXMsIEJhZGdlVHlwZSwgQmFkZ2VUeXBlcyB9IGZyb20gJy4vZW51bXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1cC1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnYmFkZ2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVwQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnVwLWJhZGdlJykgY29udGFpbmVyQ2xhc3MgPSB0cnVlO1xuXG4gIGJhZGdlQ3NzQ2xhc3NlczogTWFwPEJhZGdlVHlwZSwgQmFkZ2VDc3NDbGFzcz4gPSBuZXcgTWFwPEJhZGdlVHlwZSwgQmFkZ2VDc3NDbGFzcz4oKTtcblxuICBASW5wdXQoKSBjb3VudDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBCYWRnZVR5cGU7XG4gIEBJbnB1dCgpIGRhdGFUZXN0ID0gJ3VwLWJhZGdlJztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJhZGdlQ3NzQ2xhc3Nlcy5zZXQoQmFkZ2VUeXBlcy5OT1RJRklDQVRJT04sIEJhZGdlQ3NzQ2xhc3Nlcy5OT1RJRklDQVRJT04pO1xuICAgIHRoaXMuYmFkZ2VDc3NDbGFzc2VzLnNldChCYWRnZVR5cGVzLlRBQlNfV0hJVEUsIEJhZGdlQ3NzQ2xhc3Nlcy5UQUJTX1dISVRFKTtcbiAgICB0aGlzLmJhZGdlQ3NzQ2xhc3Nlcy5zZXQoQmFkZ2VUeXBlcy5UQUJTX0dSRVksIEJhZGdlQ3NzQ2xhc3Nlcy5UQUJTX0dSRVkpO1xuICAgIHRoaXMuYmFkZ2VDc3NDbGFzc2VzLnNldChCYWRnZVR5cGVzLlNVQlRMRSwgQmFkZ2VDc3NDbGFzc2VzLlNVQlRMRSk7XG4gICAgdGhpcy5iYWRnZUNzc0NsYXNzZXMuc2V0KEJhZGdlVHlwZXMuQUNUSVZFLCBCYWRnZUNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB0aGlzLmJhZGdlQ3NzQ2xhc3Nlcy5zZXQoQmFkZ2VUeXBlcy5JTkFDVElWRSwgQmFkZ2VDc3NDbGFzc2VzLklOQUNUSVZFKTtcbiAgfVxuXG4gIGdldCBiYWRnZUNzc0NsYXNzKCk6IEJhZGdlQ3NzQ2xhc3Mge1xuICAgIGlmICghdGhpcy50eXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5iYWRnZUNzc0NsYXNzZXMuZ2V0KEJhZGdlVHlwZXMuSU5BQ1RJVkUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmJhZGdlQ3NzQ2xhc3Nlcy5nZXQodGhpcy50eXBlKTtcbiAgfVxufVxuIiwiPGRpdiBbbmdDbGFzc109XCJiYWRnZUNzc0NsYXNzXCI+XG4gIDxwIGNsYXNzPVwidXAtYmFkZ2UtdGV4dFwiIHVwUGFyYWdyYXBoPVwiWFNcIiBbYXR0ci5kYXRhLXRlc3RdPVwiZGF0YVRlc3RcIj57eyBjb3VudCB9fTwvcD5cbjwvZGl2PlxuIl19