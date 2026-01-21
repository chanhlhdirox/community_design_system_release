import { InjectionToken } from '@angular/core';
export declare const CustomLabelCategory: {
    NEW: string;
    UPDATED: string;
    ERROR: string;
    WARNING: string;
    POSITIVE: string;
    GENERIC: string;
    NEUTRAL: string;
    DEFAULT: string;
};
export declare type CustomLabelType = typeof CustomLabelCategory[keyof typeof CustomLabelCategory];
export interface CustomLabelTypes {
    labelTypes: Map<CustomLabelType, string>;
}
export declare const CustomLabelTypesProvider: InjectionToken<CustomLabelTypes>;
export declare const CustomLabelTypesFactory: () => {
    labelTypes: Map<string, string>;
};
//# sourceMappingURL=custom-label.constants.d.ts.map