import { ControlValueAccessor } from '@angular/forms';
import { Position } from '../form-field-container/constants';
import { ParagraphSize } from '../../typography/paragraph/paragraph.directive';
import * as i0 from "@angular/core";
export declare class ToggleBaseComponent implements ControlValueAccessor {
    labelContainerClass: string;
    inputContainerClass: string;
    tooltip: string;
    persistTooltip: boolean;
    label: string;
    disabled: boolean;
    labelPosition: Position;
    id: string;
    dataTest: string;
    name: string;
    hasLabel: boolean;
    labelSize: ParagraphSize;
    value: boolean | string;
    toggled: boolean;
    onChange: (_: any) => void;
    onBlur: (_: any) => void;
    writeValue(obj: boolean | string): void;
    get hasLabelToLeft(): boolean;
    get hasLabelToRight(): boolean;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onChanged($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToggleBaseComponent, never, never, { "labelContainerClass": "labelContainerClass"; "inputContainerClass": "inputContainerClass"; "tooltip": "tooltip"; "persistTooltip": "persistTooltip"; "label": "label"; "disabled": "disabled"; "labelPosition": "labelPosition"; "id": "id"; "dataTest": "dataTest"; "name": "name"; "hasLabel": "hasLabel"; "labelSize": "labelSize"; "value": "value"; "toggled": "toggled"; }, {}, never, never, false>;
}
//# sourceMappingURL=toggle-base.component.d.ts.map