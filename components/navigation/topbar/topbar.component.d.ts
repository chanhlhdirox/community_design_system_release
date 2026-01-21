import { TemplateRef } from '@angular/core';
import { upIcon } from '../../icons/lib';
import * as i0 from "@angular/core";
export declare class UpTopBarComponent {
    containerClass: boolean;
    chevronIcon: upIcon;
    avatarInitials: string;
    notificationCount: string;
    logo: string;
    showTopBarAmbassadorSeparator: boolean;
    userMenuTemplate: TemplateRef<void>;
    updateChevronIcon(isUserMenuOpen: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpTopBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpTopBarComponent, "up-top-bar", never, { "avatarInitials": "avatarInitials"; "notificationCount": "notificationCount"; "logo": "logo"; "showTopBarAmbassadorSeparator": "showTopBarAmbassadorSeparator"; "userMenuTemplate": "userMenuTemplate"; }, {}, never, ["[upTopBarCommunityLogo]", "[upTopBarAmbassadorLogos]", "[upTopBarRightContent]"], false>;
}
//# sourceMappingURL=topbar.component.d.ts.map