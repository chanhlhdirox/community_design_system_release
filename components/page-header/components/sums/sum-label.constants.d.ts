import { InjectionToken } from '@angular/core';
export declare const SumCategory: {
    readonly TOTAL: "total";
    readonly CRITICAL: "overdue";
    readonly WARNING: "warning";
    readonly DEFAULT: "default";
};
export declare type SumType = typeof SumCategory[keyof typeof SumCategory];
export interface SumTypes {
    types: Map<SumType, string>;
}
export declare const SumsTypeProvider: InjectionToken<SumTypes>;
export declare const SumsTypeFactory: () => {
    types: Map<SumType, string>;
};
export declare const SumLabelSizes: {
    readonly XXS: "XXS";
    readonly XS: "XS";
    readonly S: "S";
    readonly Base: "base";
    readonly L: "L";
    readonly XL: "XL";
    readonly XXL: "XXL";
    readonly XXXL: "XXXL";
};
export declare const SumsSizeProvider: InjectionToken<SumLabelSizes>;
export declare type SumLabelSizes = typeof SumLabelSizes[keyof typeof SumLabelSizes];
export declare const sumLabelSizeClassesMap: Map<SumLabelSizes, string>;
export declare const SumsSizeFactory: () => {
    sumLabelSizeClassesMap: Map<SumLabelSizes, string>;
};
//# sourceMappingURL=sum-label.constants.d.ts.map