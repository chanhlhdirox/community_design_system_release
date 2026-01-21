import { Component, Input, Inject } from '@angular/core';
import { CustomLabelTypesProvider, CustomLabelCategory } from './custom-label.constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../typography/paragraph/paragraph.directive";
export class UpCustomLabelComponent {
    constructor(provider) {
        this.provider = provider;
        this.type = CustomLabelCategory.DEFAULT;
        this.content = '';
    }
    get cssClass() {
        return (this.provider.labelTypes.get(this.type) ||
            this.provider.labelTypes.get(CustomLabelCategory.DEFAULT));
    }
}
UpCustomLabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpCustomLabelComponent, deps: [{ token: CustomLabelTypesProvider }], target: i0.ɵɵFactoryTarget.Component });
UpCustomLabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpCustomLabelComponent, selector: "up-custom-label", inputs: { type: "type", content: "content" }, ngImport: i0, template: "<div [ngClass]=\"cssClass\">\n  <p upParagraph=\"S\">{{ content }}</p>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.UpParagraphDirective, selector: "[upParagraph]", inputs: ["upParagraph", "fontWeight"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpCustomLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-custom-label', template: "<div [ngClass]=\"cssClass\">\n  <p upParagraph=\"S\">{{ content }}</p>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [CustomLabelTypesProvider]
                }] }]; }, propDecorators: { type: [{
                type: Input
            }], content: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvY3VzdG9tLWxhYmVsL2N1c3RvbS1sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2N1c3RvbS1sYWJlbC9jdXN0b20tbGFiZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsbUJBQW1CLEVBRXBCLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNbEMsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQyxZQUFzRCxRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUh2RSxTQUFJLEdBQW9CLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztRQUNwRCxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBRTZELENBQUM7SUFFcEYsSUFBSSxRQUFRO1FBQ1YsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FDMUQsQ0FBQztJQUNKLENBQUM7O21IQVhVLHNCQUFzQixrQkFJYix3QkFBd0I7dUdBSmpDLHNCQUFzQixxR0NabkMsa0ZBR0E7MkZEU2Esc0JBQXNCO2tCQUpsQyxTQUFTOytCQUNFLGlCQUFpQjs7MEJBT2QsTUFBTTsyQkFBQyx3QkFBd0I7NENBSG5DLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEN1c3RvbUxhYmVsVHlwZXNQcm92aWRlcixcbiAgQ3VzdG9tTGFiZWxUeXBlcyxcbiAgQ3VzdG9tTGFiZWxDYXRlZ29yeSxcbiAgQ3VzdG9tTGFiZWxUeXBlXG59IGZyb20gJy4vY3VzdG9tLWxhYmVsLmNvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLWN1c3RvbS1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tbGFiZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVwQ3VzdG9tTGFiZWxDb21wb25lbnQge1xuICBASW5wdXQoKSB0eXBlOiBDdXN0b21MYWJlbFR5cGUgPSBDdXN0b21MYWJlbENhdGVnb3J5LkRFRkFVTFQ7XG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEN1c3RvbUxhYmVsVHlwZXNQcm92aWRlcikgcHJpdmF0ZSBwcm92aWRlcjogQ3VzdG9tTGFiZWxUeXBlcykge31cblxuICBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm92aWRlci5sYWJlbFR5cGVzLmdldCh0aGlzLnR5cGUpIHx8XG4gICAgICB0aGlzLnByb3ZpZGVyLmxhYmVsVHlwZXMuZ2V0KEN1c3RvbUxhYmVsQ2F0ZWdvcnkuREVGQVVMVClcbiAgICApO1xuICB9XG59XG4iLCI8ZGl2IFtuZ0NsYXNzXT1cImNzc0NsYXNzXCI+XG4gIDxwIHVwUGFyYWdyYXBoPVwiU1wiPnt7IGNvbnRlbnQgfX08L3A+XG48L2Rpdj5cbiJdfQ==