import { Position } from '../form-field-container/constants';
import { Input, Directive } from '@angular/core';
import { ParagraphSizes } from '../../typography/paragraph/paragraph.directive';
import * as i0 from "@angular/core";
export class ToggleBaseComponent {
    constructor() {
        this.persistTooltip = false;
        this.labelPosition = Position.RIGHT;
        this.id = 'toggleId';
        this.hasLabel = true;
        this.labelSize = ParagraphSizes.Base;
        this.value = true;
        this.toggled = false;
        this.onChange = (_) => { };
        this.onBlur = (_) => { };
    }
    writeValue(obj) {
        this.toggled = obj === this.value;
    }
    get hasLabelToLeft() {
        return this.hasLabel && this.labelPosition === Position.LEFT;
    }
    get hasLabelToRight() {
        return this.hasLabel && this.labelPosition === Position.RIGHT;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onBlur = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onChanged($event) {
        this.toggled = !!$event?.target?.checked;
        if (typeof this.value === 'boolean' && this.value === true) {
            this.onChange(this.toggled);
        }
        else {
            this.onChange(this.toggled ? this.value : '');
        }
    }
}
ToggleBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ToggleBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ToggleBaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: ToggleBaseComponent, inputs: { labelContainerClass: "labelContainerClass", inputContainerClass: "inputContainerClass", tooltip: "tooltip", persistTooltip: "persistTooltip", label: "label", disabled: "disabled", labelPosition: "labelPosition", id: "id", dataTest: "dataTest", name: "name", hasLabel: "hasLabel", labelSize: "labelSize", value: "value", toggled: "toggled" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ToggleBaseComponent, decorators: [{
            type: Directive
        }], propDecorators: { labelContainerClass: [{
                type: Input
            }], inputContainerClass: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], persistTooltip: [{
                type: Input
            }], label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], id: [{
                type: Input
            }], dataTest: [{
                type: Input
            }], name: [{
                type: Input
            }], hasLabel: [{
                type: Input
            }], labelSize: [{
                type: Input
            }], value: [{
                type: Input
            }], toggled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9mb3Jtcy90b2dnbGUtYmFzZS1jb21wb25lbnQvdG9nZ2xlLWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUcvRixNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBS1csbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFHdkIsa0JBQWEsR0FBYSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3pDLE9BQUUsR0FBRyxVQUFVLENBQUM7UUFHaEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQWtCLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFHeEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixhQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztLQW1DcEI7SUFqQ0MsVUFBVSxDQUFDLEdBQXFCO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFNO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFFekMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7Z0hBckRVLG1CQUFtQjtvR0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRC9CLFNBQVM7OEJBRUMsbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUdOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9mb3JtLWZpZWxkLWNvbnRhaW5lci9jb25zdGFudHMnO1xuaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYWdyYXBoU2l6ZSwgUGFyYWdyYXBoU2l6ZXMgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5L3BhcmFncmFwaC9wYXJhZ3JhcGguZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgVG9nZ2xlQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgbGFiZWxDb250YWluZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dENvbnRhaW5lckNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgcGVyc2lzdFRvb2x0aXAgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246IFBvc2l0aW9uID0gUG9zaXRpb24uUklHSFQ7XG4gIEBJbnB1dCgpIGlkID0gJ3RvZ2dsZUlkJztcbiAgQElucHV0KCkgZGF0YVRlc3Q6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBoYXNMYWJlbCA9IHRydWU7XG4gIEBJbnB1dCgpIGxhYmVsU2l6ZTogUGFyYWdyYXBoU2l6ZSA9IFBhcmFncmFwaFNpemVzLkJhc2U7XG4gIEBJbnB1dCgpIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICB0b2dnbGVkID0gZmFsc2U7XG5cbiAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gIG9uQmx1ciA9IChfKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKG9iajogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlZCA9IG9iaiA9PT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldCBoYXNMYWJlbFRvTGVmdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNMYWJlbCAmJiB0aGlzLmxhYmVsUG9zaXRpb24gPT09IFBvc2l0aW9uLkxFRlQ7XG4gIH1cblxuICBnZXQgaGFzTGFiZWxUb1JpZ2h0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc0xhYmVsICYmIHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gUG9zaXRpb24uUklHSFQ7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkJsdXIgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG9uQ2hhbmdlZCgkZXZlbnQpIHtcbiAgICB0aGlzLnRvZ2dsZWQgPSAhISRldmVudD8udGFyZ2V0Py5jaGVja2VkO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnYm9vbGVhbicgJiYgdGhpcy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnRvZ2dsZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudG9nZ2xlZCA/IHRoaXMudmFsdWUgOiAnJyk7XG4gICAgfVxuICB9XG59XG4iXX0=