import { ParagraphSize } from '../typography/paragraph/paragraph.directive';
import * as i0 from "@angular/core";
export declare const AvatarSizes: {
    readonly SMALL: "small";
    readonly DEFAULT: "default";
    readonly LARGE: "large";
};
export declare const AvatarTypes: {
    readonly USER: "user";
    readonly COMPANY: "company";
};
export declare type AvatarSize = typeof AvatarSizes[keyof typeof AvatarSizes];
export declare type AvatarType = typeof AvatarTypes[keyof typeof AvatarTypes];
export declare class UpAvatarComponent {
    type: AvatarType;
    logo?: string;
    size: AvatarSize;
    initials?: string;
    darkMode: boolean;
    get isUserAvatar(): boolean;
    get isCompanyAvatar(): boolean;
    get componentSizeClass(): string;
    get textSize(): ParagraphSize;
    get darkModeClass(): string;
    get avatarStyles(): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<UpAvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpAvatarComponent, "up-avatar", never, { "type": "type"; "logo": "logo"; "size": "size"; "initials": "initials"; "darkMode": "darkMode"; }, {}, never, never, false>;
}
//# sourceMappingURL=avatar.component.d.ts.map