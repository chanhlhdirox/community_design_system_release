import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../button/button.directive";
import * as i2 from "../../../icons/icon.directive";
export class TableCustomOptionComponent {
    constructor() {
        this.disabled = false;
        this.optionClick = new EventEmitter();
    }
}
TableCustomOptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableCustomOptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableCustomOptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TableCustomOptionComponent, selector: "up-table-custom-option", inputs: { icon: "icon", label: "label", disabled: "disabled", dataTest: "dataTest" }, outputs: { optionClick: "optionClick" }, ngImport: i0, template: "<button upButton=\"tertiary\" (click)=\"optionClick.next()\" [disabled]=\"disabled\" [attr.data-test]=\"dataTest\">\n  <i [upIcon]=\"icon\"></i>\n  {{ label }}\n</button>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.UpButtonDirective, selector: "[upButton]", inputs: ["upButton", "width", "theme", "color"] }, { kind: "directive", type: i2.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableCustomOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-table-custom-option', template: "<button upButton=\"tertiary\" (click)=\"optionClick.next()\" [disabled]=\"disabled\" [attr.data-test]=\"dataTest\">\n  <i [upIcon]=\"icon\"></i>\n  {{ label }}\n</button>\n" }]
        }], propDecorators: { icon: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], dataTest: [{
                type: Input
            }], optionClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY3VzdG9tLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RhYmxlL2NvbXBvbmVudHMvdGFibGUtY3VzdG9tLW9wdGlvbi90YWJsZS1jdXN0b20tb3B0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdGFibGUvY29tcG9uZW50cy90YWJsZS1jdXN0b20tb3B0aW9uL3RhYmxlLWN1c3RvbS1vcHRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVF2RSxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBUVcsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0tBQ3RFOzt1SEFOWSwwQkFBMEI7MkdBQTFCLDBCQUEwQiw2TENSdkMsOEtBSUE7MkZESWEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHdCQUF3Qjs4QkFLekIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcEljb24gfSBmcm9tICcuLi8uLi8uLi9pY29ucy9saWInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1cC10YWJsZS1jdXN0b20tb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWN1c3RvbS1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1jdXN0b20tb3B0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUN1c3RvbU9wdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb246IFVwSWNvbjtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZGF0YVRlc3Q6IHN0cmluZztcbiAgQE91dHB1dCgpIG9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG59XG4iLCI8YnV0dG9uIHVwQnV0dG9uPVwidGVydGlhcnlcIiAoY2xpY2spPVwib3B0aW9uQ2xpY2submV4dCgpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIuZGF0YS10ZXN0XT1cImRhdGFUZXN0XCI+XG4gIDxpIFt1cEljb25dPVwiaWNvblwiPjwvaT5cbiAge3sgbGFiZWwgfX1cbjwvYnV0dG9uPlxuIl19