import { QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UpCheckboxListItemComponent } from './up-checkbox-list-item/up-checkbox-list-item.component';
import * as i0 from "@angular/core";
export declare class UpCheckboxListComponent implements ControlValueAccessor {
    containerClass: boolean;
    disabled: boolean;
    options: QueryList<UpCheckboxListItemComponent>;
    selectedItems: string[];
    checkedItemsMapping: {
        [key: string]: boolean;
    };
    constructor();
    generateMapping(): void;
    valueChanged(event: any, value: any): void;
    onChange: (_: any) => void;
    onBlur: (_: any) => void;
    writeValue(obj: string[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpCheckboxListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpCheckboxListComponent, "up-checkbox-list", never, { "disabled": "disabled"; }, {}, ["options"], never, false>;
}
//# sourceMappingURL=up-checkbox-list.component.d.ts.map