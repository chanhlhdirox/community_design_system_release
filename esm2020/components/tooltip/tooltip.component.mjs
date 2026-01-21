import { Component, EventEmitter, HostListener, Input, Output, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class UpTooltipComponent {
    constructor() {
        this.mouseEnter = new EventEmitter();
        this.mouseLeave = new EventEmitter();
    }
    get hasTemplateForContent() {
        return this.content instanceof TemplateRef;
    }
    enter() {
        this.mouseEnter.emit();
    }
    leave() {
        this.mouseLeave.emit();
    }
    get templateContext() {
        return { $implicit: this.templateContextData, ...this.templateContextData } || {};
    }
}
UpTooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpTooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpTooltipComponent, selector: "up-tooltip", inputs: { content: "content", templateContextData: "templateContextData" }, outputs: { mouseEnter: "mouseEnter", mouseLeave: "mouseLeave" }, host: { listeners: { "mouseenter": "enter()", "mouseleave": "leave()" } }, ngImport: i0, template: "<div class=\"up-tooltip-container\">\n  <span *ngIf=\"!hasTemplateForContent\" class=\"up-tooltip-text-content\">\n    {{ content }}\n  </span>\n  <ng-container *ngIf=\"hasTemplateForContent\">\n    <ng-container *ngTemplateOutlet=\"content; context: templateContext\"></ng-container>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-tooltip', template: "<div class=\"up-tooltip-container\">\n  <span *ngIf=\"!hasTemplateForContent\" class=\"up-tooltip-text-content\">\n    {{ content }}\n  </span>\n  <ng-container *ngIf=\"hasTemplateForContent\">\n    <ng-container *ngTemplateOutlet=\"content; context: templateContext\"></ng-container>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { content: [{
                type: Input
            }], templateContextData: [{
                type: Input
            }], mouseEnter: [{
                type: Output
            }], mouseLeave: [{
                type: Output
            }], enter: [{
                type: HostListener,
                args: ['mouseenter']
            }], leave: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU1sRyxNQUFNLE9BQU8sa0JBQWtCO0lBSi9CO1FBWUUsZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRzFELGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztLQW1CM0Q7SUFqQkMsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBR0QsS0FBSztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdELEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEYsQ0FBQzs7K0dBN0JVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDBRQ04vQiwyVEFRQTsyRkRGYSxrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0UsWUFBWTs4QkFLdEIsT0FBTztzQkFETixLQUFLO2dCQUlOLG1CQUFtQjtzQkFEbEIsS0FBSztnQkFJTixVQUFVO3NCQURULE1BQU07Z0JBSVAsVUFBVTtzQkFEVCxNQUFNO2dCQVFQLEtBQUs7c0JBREosWUFBWTt1QkFBQyxZQUFZO2dCQU0xQixLQUFLO3NCQURKLFlBQVk7dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXBUb29sdGlwQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgdGVtcGxhdGVDb250ZXh0RGF0YT86IG9iamVjdDtcblxuICBAT3V0cHV0KClcbiAgbW91c2VFbnRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKVxuICBtb3VzZUxlYXZlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IGhhc1RlbXBsYXRlRm9yQ29udGVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgZW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZUVudGVyLmVtaXQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBsZWF2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vdXNlTGVhdmUuZW1pdCgpO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlQ29udGV4dCgpOiBvYmplY3Qge1xuICAgIHJldHVybiB7ICRpbXBsaWNpdDogdGhpcy50ZW1wbGF0ZUNvbnRleHREYXRhLCAuLi50aGlzLnRlbXBsYXRlQ29udGV4dERhdGEgfSB8fCB7fTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInVwLXRvb2x0aXAtY29udGFpbmVyXCI+XG4gIDxzcGFuICpuZ0lmPVwiIWhhc1RlbXBsYXRlRm9yQ29udGVudFwiIGNsYXNzPVwidXAtdG9vbHRpcC10ZXh0LWNvbnRlbnRcIj5cbiAgICB7eyBjb250ZW50IH19XG4gIDwvc3Bhbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc1RlbXBsYXRlRm9yQ29udGVudFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50OyBjb250ZXh0OiB0ZW1wbGF0ZUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==