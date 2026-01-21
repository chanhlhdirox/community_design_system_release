import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { SpacingClassSuffix, SpacingCSSClassPrefix, SpacingMultiplier } from './spacing.constants';
import * as i0 from "@angular/core";
export declare abstract class SpacingBaseDirective implements OnInit {
    protected el: ElementRef;
    protected renderer: Renderer2;
    abstract prefix: string;
    abstract multiplier: SpacingMultiplier;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    get suffix(): SpacingClassSuffix;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpacingBaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SpacingBaseDirective, never, never, {}, {}, never, never, false>;
}
export declare class UpMarginDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpMarginDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpMarginDirective, "[upMargin]", never, { "multiplier": "upMargin"; }, {}, never, never, false>;
}
export declare class UpMarginBottomDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpMarginBottomDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpMarginBottomDirective, "[upMarginBottom]", never, { "multiplier": "upMarginBottom"; }, {}, never, never, false>;
}
export declare class UpMarginLeftDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpMarginLeftDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpMarginLeftDirective, "[upMarginLeft]", never, { "multiplier": "upMarginLeft"; }, {}, never, never, false>;
}
export declare class UpMarginRightDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpMarginRightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpMarginRightDirective, "[upMarginRight]", never, { "multiplier": "upMarginRight"; }, {}, never, never, false>;
}
export declare class UpMarginTopDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpMarginTopDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpMarginTopDirective, "[upMarginTop]", never, { "multiplier": "upMarginTop"; }, {}, never, never, false>;
}
export declare class UpPaddingDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPaddingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpPaddingDirective, "[upPadding]", never, { "multiplier": "upPadding"; }, {}, never, never, false>;
}
export declare class UpPaddingBottomDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPaddingBottomDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpPaddingBottomDirective, "[upPaddingBottom]", never, { "multiplier": "upPaddingBottom"; }, {}, never, never, false>;
}
export declare class UpPaddingLeftDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPaddingLeftDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpPaddingLeftDirective, "[upPaddingLeft]", never, { "multiplier": "upPaddingLeft"; }, {}, never, never, false>;
}
export declare class UpPaddingRightDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPaddingRightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpPaddingRightDirective, "[upPaddingRight]", never, { "multiplier": "upPaddingRight"; }, {}, never, never, false>;
}
export declare class UpPaddingTopDirective extends SpacingBaseDirective {
    multiplier: SpacingMultiplier;
    prefix: SpacingCSSClassPrefix;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPaddingTopDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpPaddingTopDirective, "[upPaddingTop]", never, { "multiplier": "upPaddingTop"; }, {}, never, never, false>;
}
//# sourceMappingURL=spacing.directive.d.ts.map