import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../typography/paragraph/paragraph.directive";
export class UpNotificationLinkComponent {
}
UpNotificationLinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationLinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpNotificationLinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpNotificationLinkComponent, selector: "up-notification-link", inputs: { linkText: "linkText", linkURL: "linkURL" }, ngImport: i0, template: "<a [upParagraph]=\"'S'\" class=\"up-notification-link-message\" href=\"{{ linkURL }}\" target=\"_blank\">{{\n  linkText\n}}</a>\n", dependencies: [{ kind: "directive", type: i1.UpParagraphDirective, selector: "[upParagraph]", inputs: ["upParagraph", "fontWeight"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-notification-link', template: "<a [upParagraph]=\"'S'\" class=\"up-notification-link-message\" href=\"{{ linkURL }}\" target=\"_blank\">{{\n  linkText\n}}</a>\n" }]
        }], propDecorators: { linkText: [{
                type: Input
            }], linkURL: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9ub3RpZmljYXRpb24vY29tcG9uZW50cy9saW5rL25vdGlmaWNhdGlvbi1saW5rLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvbGluay9ub3RpZmljYXRpb24tbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTWpELE1BQU0sT0FBTywyQkFBMkI7O3dIQUEzQiwyQkFBMkI7NEdBQTNCLDJCQUEyQixrSENOeEMsbUlBR0E7MkZER2EsMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLHNCQUFzQjs4QkFLaEMsUUFBUTtzQkFEUCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXAtbm90aWZpY2F0aW9uLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJ25vdGlmaWNhdGlvbi1saW5rLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVcE5vdGlmaWNhdGlvbkxpbmtDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBsaW5rVGV4dDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGxpbmtVUkw6IHN0cmluZztcbn1cbiIsIjxhIFt1cFBhcmFncmFwaF09XCInUydcIiBjbGFzcz1cInVwLW5vdGlmaWNhdGlvbi1saW5rLW1lc3NhZ2VcIiBocmVmPVwie3sgbGlua1VSTCB9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7XG4gIGxpbmtUZXh0XG59fTwvYT5cbiJdfQ==