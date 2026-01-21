import { Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { TabsPositionsTypes } from '../up-tabs-component/tabs.constants';
import { BadgeTypes } from '../../badge/enums';
import * as i0 from "@angular/core";
export class TabTitleDirective {
    constructor(template) {
        this.template = template;
    }
}
TabTitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabTitleDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
TabTitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: TabTitleDirective, selector: "[upTabTitle]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabTitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upTabTitle]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
export class UpTabComponent {
    constructor() {
        this.active = false;
        this.disabled = false;
        this.grayedOut = false;
        this.badgeStyle = BadgeTypes.TABS_WHITE;
        this.position = TabsPositionsTypes.LEFT;
        this.tabOpened = new EventEmitter();
    }
    hasCounter() {
        return !isNaN(parseInt(String(this.count), 10));
    }
}
UpTabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpTabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpTabComponent, selector: "up-tab", inputs: { title: "title", count: "count", active: "active", disabled: "disabled", grayedOut: "grayedOut", separatorVisible: "separatorVisible", badgeStyle: "badgeStyle", position: "position", dataTest: "dataTest" }, outputs: { tabOpened: "tabOpened" }, queries: [{ propertyName: "titleTemplate", first: true, predicate: TabTitleDirective, descendants: true, read: TemplateRef }], ngImport: i0, template: "<span [hidden]=\"!active\">\n  <ng-content></ng-content>\n</span>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-tab', template: "<span [hidden]=\"!active\">\n  <ng-content></ng-content>\n</span>\n" }]
        }], propDecorators: { titleTemplate: [{
                type: ContentChild,
                args: [TabTitleDirective, { read: TemplateRef }]
            }], title: [{
                type: Input
            }], count: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], grayedOut: [{
                type: Input
            }], separatorVisible: [{
                type: Input
            }], badgeStyle: [{
                type: Input
            }], position: [{
                type: Input
            }], dataTest: [{
                type: Input
            }], tabOpened: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFicy91cC10YWIvdGFiLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFicy91cC10YWIvdGFiLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFGLE9BQU8sRUFBYSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFLMUQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFtQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtJQUFHLENBQUM7OzhHQUQxQyxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7QUFTRCxNQUFNLE9BQU8sY0FBYztJQUozQjtRQVNXLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZUFBVSxHQUFjLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsYUFBUSxHQUFvQixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFHbkQsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0tBSzlEO0lBSEMsVUFBVTtRQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDOzsyR0FqQlUsY0FBYzsrRkFBZCxjQUFjLHNWQUNYLGlCQUFpQiwyQkFBVSxXQUFXLDZCQ3hCdEQscUVBR0E7MkZEb0JhLGNBQWM7a0JBSjFCLFNBQVM7K0JBQ0UsUUFBUTs4QkFJc0MsYUFBYTtzQkFBcEUsWUFBWTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBRTdDLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJQb3NpdGlvblR5cGUsIFRhYnNQb3NpdGlvbnNUeXBlcyB9IGZyb20gJy4uL3VwLXRhYnMtY29tcG9uZW50L3RhYnMuY29uc3RhbnRzJztcbmltcG9ydCB7IEJhZGdlVHlwZSwgQmFkZ2VUeXBlcyB9IGZyb20gJy4uLy4uL2JhZGdlL2VudW1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VwVGFiVGl0bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJUaXRsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dW5rbm93bj4pIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVwVGFiQ29tcG9uZW50IHtcbiAgQENvbnRlbnRDaGlsZChUYWJUaXRsZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0aXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx1bmtub3duPjtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZ3JheWVkT3V0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlcGFyYXRvclZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJhZGdlU3R5bGU6IEJhZGdlVHlwZSA9IEJhZGdlVHlwZXMuVEFCU19XSElURTtcbiAgQElucHV0KCkgcG9zaXRpb246IFRhYlBvc2l0aW9uVHlwZSA9IFRhYnNQb3NpdGlvbnNUeXBlcy5MRUZUO1xuICBASW5wdXQoKSBkYXRhVGVzdDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSB0YWJPcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBoYXNDb3VudGVyKCkge1xuICAgIHJldHVybiAhaXNOYU4ocGFyc2VJbnQoU3RyaW5nKHRoaXMuY291bnQpLCAxMCkpO1xuICB9XG59XG4iLCI8c3BhbiBbaGlkZGVuXT1cIiFhY3RpdmVcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9zcGFuPlxuIl19