import { Separator } from '../enum/separator.enum';
export declare class NumberUtils {
    static parseMaskNumber(value: string, decimalSeparator?: Separator, allowNegativeValues?: boolean, fixedDecimals?: boolean): number;
    static removeDisallowedCharacters(value: string, decimalSeparator?: Separator, allowNegativeValues?: boolean): string;
    static getRegex(allowedMinus?: any, decimalSeparator?: Separator, allowedSeparator?: boolean): RegExp;
    static removeDisallowedCharactersWithoutSeparator(value: string, allowNegativeValues?: boolean): string;
    static getRegexWithoutSeparator(allowedMinus?: any): RegExp;
}
//# sourceMappingURL=number-utils.d.ts.map