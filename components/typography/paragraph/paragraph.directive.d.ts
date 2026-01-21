import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { UpTypographyBaseClass } from '../typography-base-class/typography.class';
import * as i0 from "@angular/core";
export declare const ParagraphSizes: {
    readonly XXS: "XXS";
    readonly XS: "XS";
    readonly S: "S";
    readonly Base: "base";
};
export declare type ParagraphSize = typeof ParagraphSizes[keyof typeof ParagraphSizes];
export declare const ParagraphFontWeights: {
    readonly Regular: "regular";
    readonly Bold: "bold";
};
export declare type ParagraphFontWeight = typeof ParagraphFontWeights[keyof typeof ParagraphFontWeights];
export declare const paragraphSizeClassesMap: Map<ParagraphSize, string>;
export declare const paragraphFontWeightClassesMap: Map<ParagraphFontWeight, string>;
export declare class UpParagraphDirective extends UpTypographyBaseClass implements AfterViewInit, OnChanges {
    size: ParagraphSize;
    fontWeight: ParagraphFontWeight;
    readonly sizeClassesMap: Map<ParagraphSize, string>;
    readonly fontWeightClassesMap: Map<ParagraphFontWeight, string>;
    readonly defaultSize: "base";
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private isFontWeightValid;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpParagraphDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpParagraphDirective, "[upParagraph]", never, { "size": "upParagraph"; "fontWeight": "fontWeight"; }, {}, never, never, false>;
}
//# sourceMappingURL=paragraph.directive.d.ts.map