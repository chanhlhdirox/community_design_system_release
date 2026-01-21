import { Component, Input } from '@angular/core';
import { TitleSizes } from '../typography/title/title.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/icon.directive";
import * as i3 from "../typography/paragraph/paragraph.directive";
export const AvatarSizes = {
    SMALL: 'small',
    DEFAULT: 'default',
    LARGE: 'large'
};
export const AvatarTypes = {
    USER: 'user',
    COMPANY: 'company'
};
export class UpAvatarComponent {
    constructor() {
        this.type = AvatarTypes.USER;
        this.size = AvatarSizes.DEFAULT;
        this.darkMode = false;
    }
    get isUserAvatar() {
        return this.type === AvatarTypes.USER;
    }
    get isCompanyAvatar() {
        return this.type === AvatarTypes.COMPANY;
    }
    get componentSizeClass() {
        switch (this.size) {
            case AvatarSizes.SMALL:
                return 'up-avatar-user-small';
            case AvatarSizes.LARGE:
                return 'up-avatar-user-large';
            default:
                return 'up-avatar-user-default';
        }
    }
    get textSize() {
        return this.size === AvatarSizes.SMALL ? TitleSizes.XXS : TitleSizes.S;
    }
    get darkModeClass() {
        return !!this.darkMode ? 'up-avatar-dark-mode' : '';
    }
    get avatarStyles() {
        return { 'background-image': `url('${this.logo}')` };
    }
}
UpAvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpAvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UpAvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: UpAvatarComponent, selector: "up-avatar", inputs: { type: "type", logo: "logo", size: "size", initials: "initials", darkMode: "darkMode" }, ngImport: i0, template: "<ng-template [ngIf]=\"isUserAvatar\">\n  <div *ngIf=\"!logo\" [ngClass]=\"[darkModeClass, componentSizeClass]\" data-test=\"avatar-user-initials\">\n    <p [upParagraph]=\"textSize\">{{ initials }}</p>\n  </div>\n  <div *ngIf=\"logo\" [ngClass]=\"componentSizeClass\" [ngStyle]=\"avatarStyles\" data-test=\"avatar-user-logo\"></div>\n</ng-template>\n\n<ng-template [ngIf]=\"isCompanyAvatar\">\n  <div *ngIf=\"!logo\" class=\"up-avatar-company-icon-container\">\n    <i class=\"up-avatar-company-icon\" [upIcon]=\"'company_medium'\" data-test=\"avatar-company-default-logo\"></i>\n  </div>\n  <div *ngIf=\"logo\" class=\"up-avatar-company-container\" [ngStyle]=\"avatarStyles\" data-test=\"avatar-company-logo\"></div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.UpIconDirective, selector: "[upIcon]", inputs: ["upIcon", "fallback", "color", "width", "height"] }, { kind: "directive", type: i3.UpParagraphDirective, selector: "[upParagraph]", inputs: ["upParagraph", "fontWeight"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'up-avatar', template: "<ng-template [ngIf]=\"isUserAvatar\">\n  <div *ngIf=\"!logo\" [ngClass]=\"[darkModeClass, componentSizeClass]\" data-test=\"avatar-user-initials\">\n    <p [upParagraph]=\"textSize\">{{ initials }}</p>\n  </div>\n  <div *ngIf=\"logo\" [ngClass]=\"componentSizeClass\" [ngStyle]=\"avatarStyles\" data-test=\"avatar-user-logo\"></div>\n</ng-template>\n\n<ng-template [ngIf]=\"isCompanyAvatar\">\n  <div *ngIf=\"!logo\" class=\"up-avatar-company-icon-container\">\n    <i class=\"up-avatar-company-icon\" [upIcon]=\"'company_medium'\" data-test=\"avatar-company-default-logo\"></i>\n  </div>\n  <div *ngIf=\"logo\" class=\"up-avatar-company-container\" [ngStyle]=\"avatarStyles\" data-test=\"avatar-company-logo\"></div>\n</ng-template>\n" }]
        }], propDecorators: { type: [{
                type: Input
            }], logo: [{
                type: Input
            }], size: [{
                type: Input
            }], initials: [{
                type: Input
            }], darkMode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQUdqRSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDekIsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsU0FBUztJQUNsQixLQUFLLEVBQUUsT0FBTztDQUNOLENBQUM7QUFFWCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDekIsSUFBSSxFQUFFLE1BQU07SUFDWixPQUFPLEVBQUUsU0FBUztDQUNWLENBQUM7QUFTWCxNQUFNLE9BQU8saUJBQWlCO0lBSjlCO1FBS1csU0FBSSxHQUFlLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFcEMsU0FBSSxHQUFlLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFFdkMsYUFBUSxHQUFHLEtBQUssQ0FBQztLQWdDM0I7SUE5QkMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3BCLE9BQU8sc0JBQXNCLENBQUM7WUFDaEMsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDcEIsT0FBTyxzQkFBc0IsQ0FBQztZQUNoQztnQkFDRSxPQUFPLHdCQUF3QixDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN2RCxDQUFDOzs4R0FwQ1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsbUpDdEI5QixpdUJBYUE7MkZEU2EsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLFdBQVc7OEJBSVosSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGVTaXplcyB9IGZyb20gJy4uL3R5cG9ncmFwaHkvdGl0bGUvdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhcmFncmFwaFNpemUgfSBmcm9tICcuLi90eXBvZ3JhcGh5L3BhcmFncmFwaC9wYXJhZ3JhcGguZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IEF2YXRhclNpemVzID0ge1xuICBTTUFMTDogJ3NtYWxsJyxcbiAgREVGQVVMVDogJ2RlZmF1bHQnLFxuICBMQVJHRTogJ2xhcmdlJ1xufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEF2YXRhclR5cGVzID0ge1xuICBVU0VSOiAndXNlcicsXG4gIENPTVBBTlk6ICdjb21wYW55J1xufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgQXZhdGFyU2l6ZSA9IHR5cGVvZiBBdmF0YXJTaXplc1trZXlvZiB0eXBlb2YgQXZhdGFyU2l6ZXNdO1xuZXhwb3J0IHR5cGUgQXZhdGFyVHlwZSA9IHR5cGVvZiBBdmF0YXJUeXBlc1trZXlvZiB0eXBlb2YgQXZhdGFyVHlwZXNdO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1cC1hdmF0YXInLFxuICB0ZW1wbGF0ZVVybDogJ2F2YXRhci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXBBdmF0YXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0eXBlOiBBdmF0YXJUeXBlID0gQXZhdGFyVHlwZXMuVVNFUjtcbiAgQElucHV0KCkgbG9nbz86IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogQXZhdGFyU2l6ZSA9IEF2YXRhclNpemVzLkRFRkFVTFQ7XG4gIEBJbnB1dCgpIGluaXRpYWxzPzogc3RyaW5nO1xuICBASW5wdXQoKSBkYXJrTW9kZSA9IGZhbHNlO1xuXG4gIGdldCBpc1VzZXJBdmF0YXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQXZhdGFyVHlwZXMuVVNFUjtcbiAgfVxuXG4gIGdldCBpc0NvbXBhbnlBdmF0YXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gQXZhdGFyVHlwZXMuQ09NUEFOWTtcbiAgfVxuXG4gIGdldCBjb21wb25lbnRTaXplQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgY2FzZSBBdmF0YXJTaXplcy5TTUFMTDpcbiAgICAgICAgcmV0dXJuICd1cC1hdmF0YXItdXNlci1zbWFsbCc7XG4gICAgICBjYXNlIEF2YXRhclNpemVzLkxBUkdFOlxuICAgICAgICByZXR1cm4gJ3VwLWF2YXRhci11c2VyLWxhcmdlJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAndXAtYXZhdGFyLXVzZXItZGVmYXVsdCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRleHRTaXplKCk6IFBhcmFncmFwaFNpemUge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09IEF2YXRhclNpemVzLlNNQUxMID8gVGl0bGVTaXplcy5YWFMgOiBUaXRsZVNpemVzLlM7XG4gIH1cblxuICBnZXQgZGFya01vZGVDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiAhIXRoaXMuZGFya01vZGUgPyAndXAtYXZhdGFyLWRhcmstbW9kZScgOiAnJztcbiAgfVxuXG4gIGdldCBhdmF0YXJTdHlsZXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCcke3RoaXMubG9nb30nKWAgfTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzVXNlckF2YXRhclwiPlxuICA8ZGl2ICpuZ0lmPVwiIWxvZ29cIiBbbmdDbGFzc109XCJbZGFya01vZGVDbGFzcywgY29tcG9uZW50U2l6ZUNsYXNzXVwiIGRhdGEtdGVzdD1cImF2YXRhci11c2VyLWluaXRpYWxzXCI+XG4gICAgPHAgW3VwUGFyYWdyYXBoXT1cInRleHRTaXplXCI+e3sgaW5pdGlhbHMgfX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwibG9nb1wiIFtuZ0NsYXNzXT1cImNvbXBvbmVudFNpemVDbGFzc1wiIFtuZ1N0eWxlXT1cImF2YXRhclN0eWxlc1wiIGRhdGEtdGVzdD1cImF2YXRhci11c2VyLWxvZ29cIj48L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpc0NvbXBhbnlBdmF0YXJcIj5cbiAgPGRpdiAqbmdJZj1cIiFsb2dvXCIgY2xhc3M9XCJ1cC1hdmF0YXItY29tcGFueS1pY29uLWNvbnRhaW5lclwiPlxuICAgIDxpIGNsYXNzPVwidXAtYXZhdGFyLWNvbXBhbnktaWNvblwiIFt1cEljb25dPVwiJ2NvbXBhbnlfbWVkaXVtJ1wiIGRhdGEtdGVzdD1cImF2YXRhci1jb21wYW55LWRlZmF1bHQtbG9nb1wiPjwvaT5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJsb2dvXCIgY2xhc3M9XCJ1cC1hdmF0YXItY29tcGFueS1jb250YWluZXJcIiBbbmdTdHlsZV09XCJhdmF0YXJTdHlsZXNcIiBkYXRhLXRlc3Q9XCJhdmF0YXItY29tcGFueS1sb2dvXCI+PC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19