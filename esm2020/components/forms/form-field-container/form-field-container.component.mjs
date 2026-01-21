import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormFieldLayout, FormFieldSize } from './constants';
import * as i0 from "@angular/core";
export class FormFieldContainerComponent {
    constructor() {
        this.layout = FormFieldLayout.VERTICAL;
        this.size = FormFieldSize.NORMAL;
        this.hasError = false;
        this.hasWarning = false;
        this.hasSuffix = false;
        this.hasPrefix = false;
        this.hasLabel = true;
        this.formFieldLayout = FormFieldLayout;
        this.formFieldSize = FormFieldSize;
    }
}
FormFieldContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FormFieldContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: FormFieldContainerComponent, selector: "up-form-field-container", inputs: { layout: "layout", size: "size", hasError: "hasError", hasWarning: "hasWarning", hasSuffix: "hasSuffix", hasPrefix: "hasPrefix", hasLabel: "hasLabel" }, ngImport: i0, template: "<div\n  class=\"up-form-field-container\"\n  [class.up-form-field-container--condensed]=\"size === formFieldSize.CONDENSED\"\n  [class.has-error]=\"hasError\"\n  [class.has-warning]=\"hasWarning\"\n  [class.has-prefix]=\"hasPrefix\"\n  [class.has-suffix]=\"hasSuffix\"\n  [class.no-label]=\"!hasLabel\"\n  [class.vertical-layout]='layout === formFieldLayout.VERTICAL'\n  [class.horizontal-layout]='layout === formFieldLayout.HORIZONTAL'\n>\n  <div class='up-label-input-container'>\n    <ng-content> </ng-content>\n  </div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: FormFieldContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-form-field-container', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"up-form-field-container\"\n  [class.up-form-field-container--condensed]=\"size === formFieldSize.CONDENSED\"\n  [class.has-error]=\"hasError\"\n  [class.has-warning]=\"hasWarning\"\n  [class.has-prefix]=\"hasPrefix\"\n  [class.has-suffix]=\"hasSuffix\"\n  [class.no-label]=\"!hasLabel\"\n  [class.vertical-layout]='layout === formFieldLayout.VERTICAL'\n  [class.horizontal-layout]='layout === formFieldLayout.HORIZONTAL'\n>\n  <div class='up-label-input-container'>\n    <ng-content> </ng-content>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { layout: [{
                type: Input
            }], size: [{
                type: Input
            }], hasError: [{
                type: Input
            }], hasWarning: [{
                type: Input
            }], hasSuffix: [{
                type: Input
            }], hasPrefix: [{
                type: Input
            }], hasLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWZpZWxkLWNvbnRhaW5lci9mb3JtLWZpZWxkLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tZmllbGQtY29udGFpbmVyL2Zvcm0tZmllbGQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFDTCxlQUFlLEVBRWYsYUFBYSxFQUVkLE1BQU0sYUFBYSxDQUFDOztBQVNyQixNQUFNLE9BQU8sMkJBQTJCO0lBY3RDO1FBYlMsV0FBTSxHQUF3QixlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ3ZELFNBQUksR0FBc0IsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUUvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFekIsb0JBQWUsR0FBRyxlQUFlLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxhQUFhLENBQUM7SUFFZixDQUFDOzt3SEFkTCwyQkFBMkI7NEdBQTNCLDJCQUEyQixpT0NmeEMsdWhCQWVBOzJGREFhLDJCQUEyQjtrQkFQdkMsU0FBUzsrQkFDRSx5QkFBeUIsaUJBR3BCLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07MEVBR3RDLE1BQU07c0JBQWQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtRmllbGRMYXlvdXQsXG4gIEZvcm1GaWVsZExheW91dFR5cGUsXG4gIEZvcm1GaWVsZFNpemUsXG4gIEZvcm1GaWVsZFNpemVUeXBlXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXAtZm9ybS1maWVsZC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS1maWVsZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBsYXlvdXQ6IEZvcm1GaWVsZExheW91dFR5cGUgPSBGb3JtRmllbGRMYXlvdXQuVkVSVElDQUw7XG4gIEBJbnB1dCgpIHNpemU6IEZvcm1GaWVsZFNpemVUeXBlID0gRm9ybUZpZWxkU2l6ZS5OT1JNQUw7XG5cbiAgQElucHV0KCkgaGFzRXJyb3IgPSBmYWxzZTtcbiAgQElucHV0KCkgaGFzV2FybmluZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGhhc1N1ZmZpeCA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNQcmVmaXggPSBmYWxzZTtcbiAgQElucHV0KCkgaGFzTGFiZWwgPSB0cnVlO1xuXG4gIGZvcm1GaWVsZExheW91dCA9IEZvcm1GaWVsZExheW91dDtcbiAgZm9ybUZpZWxkU2l6ZSA9IEZvcm1GaWVsZFNpemU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIiwiPGRpdlxuICBjbGFzcz1cInVwLWZvcm0tZmllbGQtY29udGFpbmVyXCJcbiAgW2NsYXNzLnVwLWZvcm0tZmllbGQtY29udGFpbmVyLS1jb25kZW5zZWRdPVwic2l6ZSA9PT0gZm9ybUZpZWxkU2l6ZS5DT05ERU5TRURcIlxuICBbY2xhc3MuaGFzLWVycm9yXT1cImhhc0Vycm9yXCJcbiAgW2NsYXNzLmhhcy13YXJuaW5nXT1cImhhc1dhcm5pbmdcIlxuICBbY2xhc3MuaGFzLXByZWZpeF09XCJoYXNQcmVmaXhcIlxuICBbY2xhc3MuaGFzLXN1ZmZpeF09XCJoYXNTdWZmaXhcIlxuICBbY2xhc3Mubm8tbGFiZWxdPVwiIWhhc0xhYmVsXCJcbiAgW2NsYXNzLnZlcnRpY2FsLWxheW91dF09J2xheW91dCA9PT0gZm9ybUZpZWxkTGF5b3V0LlZFUlRJQ0FMJ1xuICBbY2xhc3MuaG9yaXpvbnRhbC1sYXlvdXRdPSdsYXlvdXQgPT09IGZvcm1GaWVsZExheW91dC5IT1JJWk9OVEFMJ1xuPlxuICA8ZGl2IGNsYXNzPSd1cC1sYWJlbC1pbnB1dC1jb250YWluZXInPlxuICAgIDxuZy1jb250ZW50PiA8L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=