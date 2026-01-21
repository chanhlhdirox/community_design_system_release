import { UpTypographyBaseClass } from '../typography-base-class/typography.class';
import * as i0 from "@angular/core";
export declare const TitleSizes: {
    readonly XXS: "XXS";
    readonly XS: "XS";
    readonly S: "S";
    readonly Base: "base";
    readonly L: "L";
    readonly XL: "XL";
    readonly XXL: "XXL";
    readonly XXXL: "XXXL";
};
export declare type TitleSize = typeof TitleSizes[keyof typeof TitleSizes];
export declare const titleSizeClassesMap: Map<TitleSize, string>;
export declare class UpTitleDirective extends UpTypographyBaseClass {
    size: TitleSize;
    readonly sizeClassesMap: Map<TitleSize, string>;
    readonly defaultSize: "base";
    static ɵfac: i0.ɵɵFactoryDeclaration<UpTitleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpTitleDirective, "[upTitle]", never, { "size": "upTitle"; }, {}, never, never, false>;
}
//# sourceMappingURL=title.directive.d.ts.map