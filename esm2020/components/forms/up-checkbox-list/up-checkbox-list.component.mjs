import { Component, ContentChildren, forwardRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UpCheckboxListItemComponent } from './up-checkbox-list-item/up-checkbox-list-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../up-checkbox/up-checkbox.component";
export class UpCheckboxListComponent {
    constructor() {
        this.containerClass = true;
        this.checkedItemsMapping = {};
        this.onChange = (_) => { };
        this.onBlur = (_) => { };
    }
    generateMapping() {
        this.checkedItemsMapping =
            this.selectedItems?.reduce((acc, value) => {
                return { ...acc, [value]: true };
            }, {}) || {};
    }
    valueChanged(event, value) {
        this.selectedItems = this.selectedItems || [];
        if (event.target.checked) {
            this.selectedItems = Array.from(new Set([...this.selectedItems, value]));
        }
        else {
            this.selectedItems = this.selectedItems.filter((item) => item !== value);
        }
        this.generateMapping();
        this.onChange(this.selectedItems);
    }
    writeValue(obj) {
        this.selectedItems = obj;
        this.generateMapping();
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
}
UpCheckboxListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpCheckboxListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpCheckboxListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpCheckboxListComponent, selector: "up-checkbox-list", inputs: { disabled: "disabled" }, host: { properties: { "class.UpCheckboxListComponent": "this.containerClass" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UpCheckboxListComponent),
            multi: true
        }
    ], queries: [{ propertyName: "options", predicate: UpCheckboxListItemComponent, descendants: true }], ngImport: i0, template: "<div *ngFor=\"let option of options\">\n  <up-checkbox\n    [disabled]=\"disabled || option?.disabled\"\n    [name]=\"option.value\"\n    [id]=\"option.value\"\n    [toggled]=\"checkedItemsMapping[option.value]\"\n    [label]=\"option.label\"\n    (change)=\"valueChanged($event, option.value)\"\n  ></up-checkbox>\n</div>\n", styles: [".up-paragraph-S{font-family:Source Sans Pro,serif;color:var(--up-coreTxt);font-weight:400;margin:0;font-size:14px;line-height:21px}.UpCheckboxListComponent .cp-container:not(:first-child){margin-top:16px}.UpCheckboxListComponent .up-cb-content-container{font-family:Source Sans Pro,serif;color:var(--up-coreTxt);font-weight:400;margin:0;font-size:14px;line-height:21px;color:var(--up-neutral-700)}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.UpCheckboxComponent, selector: "up-checkbox" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpCheckboxListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-checkbox-list', encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UpCheckboxListComponent),
                            multi: true
                        }
                    ], template: "<div *ngFor=\"let option of options\">\n  <up-checkbox\n    [disabled]=\"disabled || option?.disabled\"\n    [name]=\"option.value\"\n    [id]=\"option.value\"\n    [toggled]=\"checkedItemsMapping[option.value]\"\n    [label]=\"option.label\"\n    (change)=\"valueChanged($event, option.value)\"\n  ></up-checkbox>\n</div>\n", styles: [".up-paragraph-S{font-family:Source Sans Pro,serif;color:var(--up-coreTxt);font-weight:400;margin:0;font-size:14px;line-height:21px}.UpCheckboxListComponent .cp-container:not(:first-child){margin-top:16px}.UpCheckboxListComponent .up-cb-content-container{font-family:Source Sans Pro,serif;color:var(--up-coreTxt);font-weight:400;margin:0;font-size:14px;line-height:21px;color:var(--up-neutral-700)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { containerClass: [{
                type: HostBinding,
                args: ['class.UpCheckboxListComponent']
            }], disabled: [{
                type: Input
            }], options: [{
                type: ContentChildren,
                args: [UpCheckboxListItemComponent, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXAtY2hlY2tib3gtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2Zvcm1zL3VwLWNoZWNrYm94LWxpc3QvdXAtY2hlY2tib3gtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2Zvcm1zL3VwLWNoZWNrYm94LWxpc3QvdXAtY2hlY2tib3gtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7O0FBZXRHLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEM7UUFSOEMsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFNcEUsd0JBQW1CLEdBQStCLEVBQUUsQ0FBQztRQXNCckQsYUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDckIsV0FBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFyQkosQ0FBQztJQUVoQixlQUFlO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDeEMsT0FBTyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDbkMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDOUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUtELFVBQVUsQ0FBQyxHQUFhO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7b0hBL0NVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLCtKQVJ2QjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3RELEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRixrREFLZ0IsMkJBQTJCLGdEQzVCOUMsc1VBVUE7MkZEZWEsdUJBQXVCO2tCQWJuQyxTQUFTOytCQUNFLGtCQUFrQixpQkFHYixpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDOzRCQUN0RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjswRUFHNkMsY0FBYztzQkFBM0QsV0FBVzt1QkFBQywrQkFBK0I7Z0JBQ25DLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRU4sT0FBTztzQkFETixlQUFlO3VCQUFDLDJCQUEyQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVcENoZWNrYm94TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3VwLWNoZWNrYm94LWxpc3QtaXRlbS91cC1jaGVja2JveC1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndXAtY2hlY2tib3gtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cC1jaGVja2JveC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXAtY2hlY2tib3gtbGlzdC5jb21wb25lbnQuc2FzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVwQ2hlY2tib3hMaXN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFVwQ2hlY2tib3hMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLlVwQ2hlY2tib3hMaXN0Q29tcG9uZW50JykgY29udGFpbmVyQ2xhc3MgPSB0cnVlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZHJlbihVcENoZWNrYm94TGlzdEl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgb3B0aW9uczogUXVlcnlMaXN0PFVwQ2hlY2tib3hMaXN0SXRlbUNvbXBvbmVudD47XG5cbiAgc2VsZWN0ZWRJdGVtczogc3RyaW5nW107XG4gIGNoZWNrZWRJdGVtc01hcHBpbmc6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdlbmVyYXRlTWFwcGluZygpIHtcbiAgICB0aGlzLmNoZWNrZWRJdGVtc01hcHBpbmcgPVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zPy5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCBbdmFsdWVdOiB0cnVlIH07XG4gICAgICB9LCB7fSkgfHwge307XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXZlbnQsIHZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5zZWxlY3RlZEl0ZW1zIHx8IFtdO1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50aGlzLnNlbGVjdGVkSXRlbXMsIHZhbHVlXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZ2VuZXJhdGVNYXBwaW5nKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoXykgPT4ge307XG4gIG9uQmx1ciA9IChfKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBvYmo7XG4gICAgdGhpcy5nZW5lcmF0ZU1hcHBpbmcoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ciA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPlxuICA8dXAtY2hlY2tib3hcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgb3B0aW9uPy5kaXNhYmxlZFwiXG4gICAgW25hbWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICBbaWRdPVwib3B0aW9uLnZhbHVlXCJcbiAgICBbdG9nZ2xlZF09XCJjaGVja2VkSXRlbXNNYXBwaW5nW29wdGlvbi52YWx1ZV1cIlxuICAgIFtsYWJlbF09XCJvcHRpb24ubGFiZWxcIlxuICAgIChjaGFuZ2UpPVwidmFsdWVDaGFuZ2VkKCRldmVudCwgb3B0aW9uLnZhbHVlKVwiXG4gID48L3VwLWNoZWNrYm94PlxuPC9kaXY+XG4iXX0=