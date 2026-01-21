import { Component, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pop-out.service";
import * as i2 from "@angular/common";
import * as i3 from "../../icons/icon.directive";
import * as i4 from "../../button/button.directive";
export class UpPopOutOptionComponent {
    constructor(dropdownService) {
        this.dropdownService = dropdownService;
        this.danger = false;
        this.iconWidth = '24px';
        this.iconHeight = '24px';
        this.disabled = false;
        this.dataTest = '';
    }
    emitClickEvent() {
        if (this.disabled) {
            return;
        }
        this.dropdownService.optionClick.next({});
    }
    get iconColor() {
        if (this.disabled) {
            return 'var(--up-neutral-400)';
        }
        return this.danger ? 'var(--up-negative-600)' : 'var(--up-brand-1-600)';
    }
}
UpPopOutOptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutOptionComponent, deps: [{ token: i1.UpPopOutService }], target: i0.ɵɵFactoryTarget.Component });
UpPopOutOptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpPopOutOptionComponent, selector: "up-pop-out-option", inputs: { danger: "danger", icon: "icon", iconWidth: "iconWidth", iconHeight: "iconHeight", disabled: "disabled", dataTest: "dataTest" }, host: { listeners: { "click": "emitClickEvent()" } }, ngImport: i0, template: "<div *ngIf=\"icon\" class=\"up-menu-option-icon\">\n  <i [upIcon]=\"icon\" [width]=\"iconWidth\" [height]=\"iconHeight\" [color]=\"iconColor\"></i>\n</div>\n<button [upButton]=\"'tertiary'\" [class.up-danger-option]=\"danger\" [disabled]='disabled' [attr.data-test]=\"dataTest\">\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;height:24px;margin:12px 0;width:100%;cursor:pointer}:host:last-child{margin-bottom:0}:host:first-child{margin-top:0}:host button{margin-left:-10px}:host button.up-danger-option{color:var(--up-negative-600)}:host .up-menu-option-icon{margin-right:0}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }, { kind: "directive", type: i4.UpButtonDirective, selector: "[upButton]", inputs: ["upButton", "width", "theme", "color"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-pop-out-option', template: "<div *ngIf=\"icon\" class=\"up-menu-option-icon\">\n  <i [upIcon]=\"icon\" [width]=\"iconWidth\" [height]=\"iconHeight\" [color]=\"iconColor\"></i>\n</div>\n<button [upButton]=\"'tertiary'\" [class.up-danger-option]=\"danger\" [disabled]='disabled' [attr.data-test]=\"dataTest\">\n  <ng-content></ng-content>\n</button>\n", styles: [":host{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;height:24px;margin:12px 0;width:100%;cursor:pointer}:host:last-child{margin-bottom:0}:host:first-child{margin-top:0}:host button{margin-left:-10px}:host button.up-danger-option{color:var(--up-negative-600)}:host .up-menu-option-icon{margin-right:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.UpPopOutService }]; }, propDecorators: { danger: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconWidth: [{
                type: Input
            }], iconHeight: [{
                type: Input
            }], disabled: [{
                type: Input
            }], dataTest: [{
                type: Input
            }], emitClickEvent: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLW91dC1vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wb3Atb3V0L3BvcC1vdXQtb3B0aW9uL3BvcC1vdXQtb3B0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvcG9wLW91dC9wb3Atb3V0LW9wdGlvbi9wb3Atb3V0LW9wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVMvRCxNQUFNLE9BQU8sdUJBQXVCO0lBUWxDLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVAzQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVnQyxDQUFDO0lBR3hELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyx1QkFBdUIsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0lBQzFFLENBQUM7O29IQXZCVSx1QkFBdUI7d0dBQXZCLHVCQUF1Qix5UENUcEMsbVVBTUE7MkZER2EsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLG1CQUFtQjtzR0FLcEIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUtOLGNBQWM7c0JBRGIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1cEljb24gfSBmcm9tICcuLi8uLi9pY29ucy9saWInO1xuaW1wb3J0IHsgVXBQb3BPdXRTZXJ2aWNlIH0gZnJvbSAnLi4vcG9wLW91dC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXAtcG9wLW91dC1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wLW91dC1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3Atb3V0LW9wdGlvbi5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVwUG9wT3V0T3B0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGFuZ2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb24/OiB1cEljb247XG4gIEBJbnB1dCgpIGljb25XaWR0aCA9ICcyNHB4JztcbiAgQElucHV0KCkgaWNvbkhlaWdodCA9ICcyNHB4JztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZGF0YVRlc3QgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3Bkb3duU2VydmljZTogVXBQb3BPdXRTZXJ2aWNlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgZW1pdENsaWNrRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcm9wZG93blNlcnZpY2Uub3B0aW9uQ2xpY2submV4dCh7fSk7XG4gIH1cblxuICBnZXQgaWNvbkNvbG9yKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiAndmFyKC0tdXAtbmV1dHJhbC00MDApJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGFuZ2VyID8gJ3ZhcigtLXVwLW5lZ2F0aXZlLTYwMCknIDogJ3ZhcigtLXVwLWJyYW5kLTEtNjAwKSc7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJ1cC1tZW51LW9wdGlvbi1pY29uXCI+XG4gIDxpIFt1cEljb25dPVwiaWNvblwiIFt3aWR0aF09XCJpY29uV2lkdGhcIiBbaGVpZ2h0XT1cImljb25IZWlnaHRcIiBbY29sb3JdPVwiaWNvbkNvbG9yXCI+PC9pPlxuPC9kaXY+XG48YnV0dG9uIFt1cEJ1dHRvbl09XCIndGVydGlhcnknXCIgW2NsYXNzLnVwLWRhbmdlci1vcHRpb25dPVwiZGFuZ2VyXCIgW2Rpc2FibGVkXT0nZGlzYWJsZWQnIFthdHRyLmRhdGEtdGVzdF09XCJkYXRhVGVzdFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5cbiJdfQ==