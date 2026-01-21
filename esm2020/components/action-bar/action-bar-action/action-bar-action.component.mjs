import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { upIconSpinnerMedium } from '../../icons/lib';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../icons/icon.directive";
export class UpActionBarActionComponent {
    constructor() {
        this.iconColor = 'white';
        this.highlighted = false;
        this.loading = false;
        this.disabled = false;
        this.containerClass = true;
    }
    onHover() {
        if (this.loading) {
            return;
        }
        this.iconColor = 'var(--up-brand-1-200)';
    }
    onMouseOut() {
        this.iconColor = 'white';
    }
    ngOnChanges(changes) {
        if (changes.loading) {
            this.setActionPrefixIcon();
            this.setHasPrefixIcon();
        }
        if (changes.prefixIcon) {
            this.setHasPrefixIcon();
        }
    }
    ngOnInit() {
        this.setActionPrefixIcon();
        this.setHasPrefixIcon();
    }
    setHasPrefixIcon() {
        this.hasPrefixIcon = !!this.prefixIcon || this.loading;
    }
    setActionPrefixIcon() {
        this.actionPrefixIcon = this.loading ? upIconSpinnerMedium.name : this.prefixIcon;
    }
}
UpActionBarActionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpActionBarActionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpActionBarActionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpActionBarActionComponent, selector: "up-action-bar-action", inputs: { prefixIcon: "prefixIcon", suffixIcon: "suffixIcon", highlighted: "highlighted", loading: "loading", disabled: "disabled" }, host: { listeners: { "mouseover": "onHover()", "mouseleave": "onMouseOut()" }, properties: { "class.action-highlighted": "this.highlighted", "class.action-loading": "this.loading", "class.action-disabled": "this.disabled", "class.up-action-bar-action": "this.containerClass" } }, usesOnChanges: true, ngImport: i0, template: "<div *ngIf=\"hasPrefixIcon\" class=\"up-action-bar-prefix-icon\">\n  <span [upIcon]=\"actionPrefixIcon\" width=\"24px\" height=\"24px\" [color]=\"iconColor\"></span>\n</div>\n\n<ng-content></ng-content>\n\n<div *ngIf=\"suffixIcon\" class=\"up-action-bar-suffix-icon\">\n  <span [upIcon]=\"suffixIcon\" width=\"24px\" height=\"24px\" [color]=\"iconColor\"></span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpActionBarActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-action-bar-action', template: "<div *ngIf=\"hasPrefixIcon\" class=\"up-action-bar-prefix-icon\">\n  <span [upIcon]=\"actionPrefixIcon\" width=\"24px\" height=\"24px\" [color]=\"iconColor\"></span>\n</div>\n\n<ng-content></ng-content>\n\n<div *ngIf=\"suffixIcon\" class=\"up-action-bar-suffix-icon\">\n  <span [upIcon]=\"suffixIcon\" width=\"24px\" height=\"24px\" [color]=\"iconColor\"></span>\n</div>\n" }]
        }], propDecorators: { prefixIcon: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], highlighted: [{
                type: HostBinding,
                args: ['class.action-highlighted']
            }, {
                type: Input
            }], loading: [{
                type: HostBinding,
                args: ['class.action-loading']
            }, {
                type: Input
            }], disabled: [{
                type: HostBinding,
                args: ['class.action-disabled']
            }, {
                type: Input
            }], containerClass: [{
                type: HostBinding,
                args: ['class.up-action-bar-action']
            }], onHover: [{
                type: HostListener,
                args: ['mouseover']
            }], onMouseOut: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci1hY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9hY3Rpb24tYmFyL2FjdGlvbi1iYXItYWN0aW9uL2FjdGlvbi1iYXItYWN0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvYWN0aW9uLWJhci9hY3Rpb24tYmFyLWFjdGlvbi9hY3Rpb24tYmFyLWFjdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBVSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBTTlELE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLRSxjQUFTLEdBQUcsT0FBTyxDQUFDO1FBU3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSXBCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFJaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUwQixtQkFBYyxHQUFHLElBQUksQ0FBQztLQXFDbEU7SUFuQzRCLE9BQU87UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7SUFDM0MsQ0FBQztJQUUyQixVQUFVO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN6RCxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDcEYsQ0FBQzs7dUhBeERVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLCtlQ2Z2QyxzWEFTQTsyRkRNYSwwQkFBMEI7a0JBSnRDLFNBQVM7K0JBQ0Usc0JBQXNCOzhCQVF2QixVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBSU4sV0FBVztzQkFGVixXQUFXO3VCQUFDLDBCQUEwQjs7c0JBQ3RDLEtBQUs7Z0JBS04sT0FBTztzQkFGTixXQUFXO3VCQUFDLHNCQUFzQjs7c0JBQ2xDLEtBQUs7Z0JBS04sUUFBUTtzQkFGUCxXQUFXO3VCQUFDLHVCQUF1Qjs7c0JBQ25DLEtBQUs7Z0JBR3FDLGNBQWM7c0JBQXhELFdBQVc7dUJBQUMsNEJBQTRCO2dCQUVkLE9BQU87c0JBQWpDLFlBQVk7dUJBQUMsV0FBVztnQkFRRyxVQUFVO3NCQUFyQyxZQUFZO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVwSWNvbiwgdXBJY29uU3Bpbm5lck1lZGl1bSB9IGZyb20gJy4uLy4uL2ljb25zL2xpYic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLWFjdGlvbi1iYXItYWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1iYXItYWN0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVcEFjdGlvbkJhckFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgaWNvbkNvbG9yID0gJ3doaXRlJztcbiAgYWN0aW9uUHJlZml4SWNvbjogdXBJY29uO1xuICBoYXNQcmVmaXhJY29uOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHByZWZpeEljb24/OiB1cEljb247XG4gIEBJbnB1dCgpIHN1ZmZpeEljb24/OiB1cEljb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3Rpb24taGlnaGxpZ2h0ZWQnKVxuICBASW5wdXQoKVxuICBoaWdobGlnaHRlZCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aW9uLWxvYWRpbmcnKVxuICBASW5wdXQoKVxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3Rpb24tZGlzYWJsZWQnKVxuICBASW5wdXQoKVxuICBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudXAtYWN0aW9uLWJhci1hY3Rpb24nKSBjb250YWluZXJDbGFzcyA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJykgb25Ib3ZlcigpIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pY29uQ29sb3IgPSAndmFyKC0tdXAtYnJhbmQtMS0yMDApJztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbk1vdXNlT3V0KCkge1xuICAgIHRoaXMuaWNvbkNvbG9yID0gJ3doaXRlJztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLnNldEFjdGlvblByZWZpeEljb24oKTtcbiAgICAgIHRoaXMuc2V0SGFzUHJlZml4SWNvbigpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnByZWZpeEljb24pIHtcbiAgICAgIHRoaXMuc2V0SGFzUHJlZml4SWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0QWN0aW9uUHJlZml4SWNvbigpO1xuICAgIHRoaXMuc2V0SGFzUHJlZml4SWNvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIYXNQcmVmaXhJY29uKCkge1xuICAgIHRoaXMuaGFzUHJlZml4SWNvbiA9ICEhdGhpcy5wcmVmaXhJY29uIHx8IHRoaXMubG9hZGluZztcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aW9uUHJlZml4SWNvbigpIHtcbiAgICB0aGlzLmFjdGlvblByZWZpeEljb24gPSB0aGlzLmxvYWRpbmcgPyB1cEljb25TcGlubmVyTWVkaXVtLm5hbWUgOiB0aGlzLnByZWZpeEljb247XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJoYXNQcmVmaXhJY29uXCIgY2xhc3M9XCJ1cC1hY3Rpb24tYmFyLXByZWZpeC1pY29uXCI+XG4gIDxzcGFuIFt1cEljb25dPVwiYWN0aW9uUHJlZml4SWNvblwiIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiBbY29sb3JdPVwiaWNvbkNvbG9yXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuPGRpdiAqbmdJZj1cInN1ZmZpeEljb25cIiBjbGFzcz1cInVwLWFjdGlvbi1iYXItc3VmZml4LWljb25cIj5cbiAgPHNwYW4gW3VwSWNvbl09XCJzdWZmaXhJY29uXCIgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIFtjb2xvcl09XCJpY29uQ29sb3JcIj48L3NwYW4+XG48L2Rpdj5cbiJdfQ==