import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../icons/icon.directive";
export class TagComponent {
    constructor() {
        this.closable = true;
        this.tagClosed = new EventEmitter();
    }
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TagComponent, selector: "up-tag", inputs: { closable: "closable" }, outputs: { tagClosed: "tagClosed" }, ngImport: i0, template: "<div class=\"up-tag\" [class.up-closable-tag]=\"closable\">\n  <span class=\"up-tag-label\">\n    <ng-content></ng-content>\n  </span>\n  <i\n    upIcon=\"close_medium\"\n    width=\"16px\"\n    height=\"16px\"\n    *ngIf=\"closable\"\n    (click)=\"tagClosed.next()\"\n  ></i>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-tag', template: "<div class=\"up-tag\" [class.up-closable-tag]=\"closable\">\n  <span class=\"up-tag-label\">\n    <ng-content></ng-content>\n  </span>\n  <i\n    upIcon=\"close_medium\"\n    width=\"16px\"\n    height=\"16px\"\n    *ngIf=\"closable\"\n    (click)=\"tagClosed.next()\"\n  ></i>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { closable: [{
                type: Input
            }], tagClosed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFncy90YWcvdGFnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFncy90YWcvdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNdkUsTUFBTSxPQUFPLFlBQVk7SUFJdkI7UUFIUyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTlDLENBQUM7O3lHQUpMLFlBQVk7NkZBQVosWUFBWSxxSENOekIsaVNBWUE7MkZETmEsWUFBWTtrQkFKeEIsU0FBUzsrQkFDRSxRQUFROzBFQUlULFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0ksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNsb3NhYmxlID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHRhZ0Nsb3NlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJ1cC10YWdcIiBbY2xhc3MudXAtY2xvc2FibGUtdGFnXT1cImNsb3NhYmxlXCI+XG4gIDxzcGFuIGNsYXNzPVwidXAtdGFnLWxhYmVsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIDxpXG4gICAgdXBJY29uPVwiY2xvc2VfbWVkaXVtXCJcbiAgICB3aWR0aD1cIjE2cHhcIlxuICAgIGhlaWdodD1cIjE2cHhcIlxuICAgICpuZ0lmPVwiY2xvc2FibGVcIlxuICAgIChjbGljayk9XCJ0YWdDbG9zZWQubmV4dCgpXCJcbiAgPjwvaT5cbjwvZGl2PlxuIl19