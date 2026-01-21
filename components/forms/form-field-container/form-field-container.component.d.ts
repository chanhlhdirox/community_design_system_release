import { FormFieldLayoutType, FormFieldSizeType } from './constants';
import * as i0 from "@angular/core";
export declare class FormFieldContainerComponent {
    layout: FormFieldLayoutType;
    size: FormFieldSizeType;
    hasError: boolean;
    hasWarning: boolean;
    hasSuffix: boolean;
    hasPrefix: boolean;
    hasLabel: boolean;
    formFieldLayout: {
        readonly VERTICAL: "vertical";
        readonly HORIZONTAL: "horizontal";
    };
    formFieldSize: {
        readonly NORMAL: "normal";
        readonly CONDENSED: "condensed";
    };
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFieldContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFieldContainerComponent, "up-form-field-container", never, { "layout": "layout"; "size": "size"; "hasError": "hasError"; "hasWarning": "hasWarning"; "hasSuffix": "hasSuffix"; "hasPrefix": "hasPrefix"; "hasLabel": "hasLabel"; }, {}, never, ["*"], false>;
}
//# sourceMappingURL=form-field-container.component.d.ts.map