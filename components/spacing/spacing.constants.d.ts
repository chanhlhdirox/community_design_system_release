export declare enum SpacingCSSClassPrefix {
    Margin = "up-margin",
    MarginTop = "up-margin-top",
    MarginRight = "up-margin-right",
    MarginBottom = "up-margin-bottom",
    MarginLeft = "up-margin-left",
    Padding = "up-padding",
    PaddingTop = "up-padding-top",
    PaddingRight = "up-padding-right",
    PaddingBottom = "up-padding-bottom",
    PaddingLeft = "up-padding-left"
}
export declare const SpacingMultiplierAliases: {
    readonly 0.5: "five-tenths";
};
export declare type SpacingMultiplierAlias = typeof SpacingMultiplierAliases[keyof typeof SpacingMultiplierAliases];
export declare const SpacingMultipliers: readonly ["0", "0.5", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24"];
export declare type SpacingMultiplier = typeof SpacingMultipliers[number];
export declare type SpacingClassSuffix = SpacingMultiplier | SpacingMultiplierAlias;
//# sourceMappingURL=spacing.constants.d.ts.map