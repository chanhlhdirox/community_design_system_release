import { HexColor } from './hex-color.interface';
import { BackgroundColorNames, Brand1VariantsColorNames, Brand3VariantsColorNames, BrandColorNames, ChoiceSelectorsColorNames, GraphicsColorNames, IconColorNames, InputColorNames, NavigationSidebarColorNames, NegativeVariantsColorNames, NeutralVariantsColorNames, PositiveVariantsColorNames, TextColorNames, WarningVariantsColorNames } from '../enums';
import { SpacingConfiguration } from './spacing-configuration.interface';
export interface ThemeNegativeVariantsColors {
    [NegativeVariantsColorNames.upNegative_900]: HexColor;
    [NegativeVariantsColorNames.upNegative_800]: HexColor;
    [NegativeVariantsColorNames.upNegative_700]: HexColor;
    [NegativeVariantsColorNames.upNegative_600]: HexColor;
    [NegativeVariantsColorNames.upNegative_500]: HexColor;
    [NegativeVariantsColorNames.upNegative_400]: HexColor;
    [NegativeVariantsColorNames.upNegative_300]: HexColor;
    [NegativeVariantsColorNames.upNegative_200]: HexColor;
    [NegativeVariantsColorNames.upNegative_100]: HexColor;
    [NegativeVariantsColorNames.upNegative_50]: HexColor;
}
export interface ThemeNeutralVariantsColors {
    [NeutralVariantsColorNames.upNeutral_900]: HexColor;
    [NeutralVariantsColorNames.upNeutral_800]: HexColor;
    [NeutralVariantsColorNames.upNeutral_700]: HexColor;
    [NeutralVariantsColorNames.upNeutral_600]: HexColor;
    [NeutralVariantsColorNames.upNeutral_500]: HexColor;
    [NeutralVariantsColorNames.upNeutral_400]: HexColor;
    [NeutralVariantsColorNames.upNeutral_300]: HexColor;
    [NeutralVariantsColorNames.upNeutral_200]: HexColor;
    [NeutralVariantsColorNames.upNeutral_100]: HexColor;
    [NeutralVariantsColorNames.upWhite]: HexColor;
}
export interface ThemePositiveVariantsColors {
    [PositiveVariantsColorNames.upPositive_900]: HexColor;
    [PositiveVariantsColorNames.upPositive_800]: HexColor;
    [PositiveVariantsColorNames.upPositive_700]: HexColor;
    [PositiveVariantsColorNames.upPositive_600]: HexColor;
    [PositiveVariantsColorNames.upPositive_500]: HexColor;
    [PositiveVariantsColorNames.upPositive_400]: HexColor;
    [PositiveVariantsColorNames.upPositive_300]: HexColor;
    [PositiveVariantsColorNames.upPositive_200]: HexColor;
    [PositiveVariantsColorNames.upPositive_100]: HexColor;
    [PositiveVariantsColorNames.upPositive_50]: HexColor;
}
export interface ThemeWarningVariantsColors {
    [WarningVariantsColorNames.upWarning_900]: HexColor;
    [WarningVariantsColorNames.upWarning_800]: HexColor;
    [WarningVariantsColorNames.upWarning_700]: HexColor;
    [WarningVariantsColorNames.upWarning_600]: HexColor;
    [WarningVariantsColorNames.upWarning_500]: HexColor;
    [WarningVariantsColorNames.upWarning_400]: HexColor;
    [WarningVariantsColorNames.upWarning_300]: HexColor;
    [WarningVariantsColorNames.upWarning_200]: HexColor;
    [WarningVariantsColorNames.upWarning_100]: HexColor;
    [WarningVariantsColorNames.upWarning_50]: HexColor;
}
export interface ThemeBrand1VariantsColors {
    [Brand1VariantsColorNames.upBrand1_900]: HexColor;
    [Brand1VariantsColorNames.upBrand1_800]: HexColor;
    [Brand1VariantsColorNames.upBrand1_700]: HexColor;
    [Brand1VariantsColorNames.upBrand1_600]: HexColor;
    [Brand1VariantsColorNames.upBrand1_500]: HexColor;
    [Brand1VariantsColorNames.upBrand1_400]: HexColor;
    [Brand1VariantsColorNames.upBrand1_300]: HexColor;
    [Brand1VariantsColorNames.upBrand1_200]: HexColor;
    [Brand1VariantsColorNames.upBrand1_100]: HexColor;
    [Brand1VariantsColorNames.upBrand1_50]: HexColor;
}
export interface ThemeBrand3VariantsColors {
    [Brand3VariantsColorNames.upBrand3_900]: HexColor;
    [Brand3VariantsColorNames.upBrand3_800]: HexColor;
    [Brand3VariantsColorNames.upBrand3_700]: HexColor;
    [Brand3VariantsColorNames.upBrand3_600]: HexColor;
    [Brand3VariantsColorNames.upBrand3_500]: HexColor;
    [Brand3VariantsColorNames.upBrand3_400]: HexColor;
    [Brand3VariantsColorNames.upBrand3_300]: HexColor;
    [Brand3VariantsColorNames.upBrand3_200]: HexColor;
    [Brand3VariantsColorNames.upBrand3_100]: HexColor;
    [Brand3VariantsColorNames.upBrand3_50]: HexColor;
}
export interface ThemeTextColors {
    [TextColorNames.upCoreTxt]: HexColor;
    [TextColorNames.upDeemphasisedTxt1]: HexColor;
    [TextColorNames.upDeemphasisedTxt2]: HexColor;
    [TextColorNames.upCoreTxtInverted]: HexColor;
    [TextColorNames.upDeemphasisedTxtInverted1]: HexColor;
    [TextColorNames.upDeemphasisedTxtInverted2]: HexColor;
}
export interface ThemeInputColors {
    [InputColorNames.upInputLabel]: HexColor;
    [InputColorNames.upInputLabelFocus]: HexColor;
    [InputColorNames.upInputLabelHover]: HexColor;
    [InputColorNames.upInputFocus]: HexColor;
    [InputColorNames.upInputPlaceholder]: HexColor;
    [InputColorNames.upInputTxt]: HexColor;
    [InputColorNames.upInputTxtDisabled]: HexColor;
    [InputColorNames.upInputHelperTxt]: HexColor;
    [InputColorNames.upInputHoverBorder]: HexColor;
    [InputColorNames.upInputHelperTxtError]: HexColor;
    [InputColorNames.upInputBorder]: HexColor;
    [InputColorNames.upInputBorderHover]: HexColor;
    [InputColorNames.upInputBorderFocus]: HexColor;
    [InputColorNames.upInputBorderError]: HexColor;
    [InputColorNames.upInputBorderWarning]: HexColor;
    [InputColorNames.upInputDisabled]: HexColor;
    [InputColorNames.upCaret]: HexColor;
    [InputColorNames.upInputWarningTxtError]: HexColor;
}
export interface ThemeChoiceSelectorColors {
    [ChoiceSelectorsColorNames.upChoiceSelectorLabel]: HexColor;
    [ChoiceSelectorsColorNames.upChoiceSelectorLabelDisabled]: HexColor;
    [ChoiceSelectorsColorNames.upChoiceSelector]: HexColor;
    [ChoiceSelectorsColorNames.upChoiceSelectorReadonly]: HexColor;
    [ChoiceSelectorsColorNames.upSwitchThumbOn]: HexColor;
    [ChoiceSelectorsColorNames.upSwitchTrackOn]: HexColor;
    [ChoiceSelectorsColorNames.upSwitchThumbOff]: HexColor;
    [ChoiceSelectorsColorNames.upSwitchTrackOff]: HexColor;
    [ChoiceSelectorsColorNames.upSwitchThumbDisabled]: HexColor;
    [ChoiceSelectorsColorNames.upSwitchTrackDisabled]: HexColor;
}
export interface ThemeBackgroundColors {
    [BackgroundColorNames.upBg]: HexColor;
    [BackgroundColorNames.upBgDark]: HexColor;
    [BackgroundColorNames.upBgDarkOffset1]: HexColor;
    [BackgroundColorNames.upBgDarkOffset2]: HexColor;
    [BackgroundColorNames.upBgDarkOffset3]: HexColor;
}
export interface ThemeGraphicsColors {
    [GraphicsColorNames.upDividerDark]: HexColor;
}
export interface ThemeIconColors {
    [IconColorNames.upIc]: HexColor;
    [IconColorNames.upIcDeemphasised]: HexColor;
    [IconColorNames.upIcDestructive]: HexColor;
}
export interface ThemeNavigationSidebarColors {
    [NavigationSidebarColorNames.upNavLink]: HexColor;
    [NavigationSidebarColorNames.upNavLinkHover]: HexColor;
    [NavigationSidebarColorNames.upNavLinkActive]: HexColor;
    [NavigationSidebarColorNames.upNavLinkBgActive]: HexColor;
}
export declare type DesignSystemThemeParameters = Partial<ThemeColorsObject & SpacingConfiguration> & {
    [BrandColorNames.upBrand1]: HexColor;
    [BrandColorNames.upBrand3]: HexColor;
};
export interface ThemeColorsObject extends ThemeNegativeVariantsColors, ThemeNeutralVariantsColors, ThemePositiveVariantsColors, ThemeWarningVariantsColors, ThemeBrand1VariantsColors, ThemeBrand3VariantsColors, ThemeTextColors, ThemeInputColors, ThemeChoiceSelectorColors, ThemeBackgroundColors, ThemeGraphicsColors, ThemeIconColors, ThemeNavigationSidebarColors {
    [BrandColorNames.upBrand1]: HexColor;
    [BrandColorNames.upBrand2]: HexColor;
    [BrandColorNames.upBrand3]: HexColor;
}
//# sourceMappingURL=theme-colors.interface.d.ts.map