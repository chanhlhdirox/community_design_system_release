import { InjectionToken } from '@angular/core';
import { ButtonCSSClasses } from './enums/button-css-class.enum';
import { ButtonWidthCSSClasses } from './enums/button-width-css-class.enum';
export declare const ButtonTypes: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly SECONDARY_OUTLINE: "secondary-outline";
    readonly TERTIARY: "tertiary";
    readonly ROUNDED: "rounded";
};
export declare type ButtonType = typeof ButtonTypes[keyof typeof ButtonTypes];
export declare const ButtonWidths: {
    readonly FIXED: "fixed";
    readonly FLUID: "fluid";
    readonly INTRINSIC: "intrinsic";
};
export declare type ButtonWidth = typeof ButtonWidths[keyof typeof ButtonWidths];
export declare const ButtonColors: {
    DEFAULT: string;
    DANGER: string;
};
export declare type ButtonColor = typeof ButtonColors[keyof typeof ButtonColors];
export interface ButtonClasses {
    buttonClasses: Map<ButtonType, ButtonCSSClasses>;
    buttonWidthClasses: Map<ButtonWidth, ButtonWidthCSSClasses>;
}
export declare const ButtonClassesProvider: InjectionToken<ButtonClasses>;
export declare const ButtonClassesFactory: () => {
    buttonClasses: Map<ButtonType, ButtonCSSClasses>;
    buttonWidthClasses: Map<ButtonWidth, ButtonWidthCSSClasses>;
};
//# sourceMappingURL=button.constants.d.ts.map