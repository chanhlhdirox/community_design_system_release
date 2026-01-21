import { upIcon } from '../../icons/lib';
import { UpPopOutService } from '../pop-out.service';
import * as i0 from "@angular/core";
export declare class UpPopOutOptionComponent {
    private dropdownService;
    danger: boolean;
    icon?: upIcon;
    iconWidth: string;
    iconHeight: string;
    disabled: boolean;
    dataTest: string;
    constructor(dropdownService: UpPopOutService);
    emitClickEvent(): void;
    get iconColor(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPopOutOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpPopOutOptionComponent, "up-pop-out-option", never, { "danger": "danger"; "icon": "icon"; "iconWidth": "iconWidth"; "iconHeight": "iconHeight"; "disabled": "disabled"; "dataTest": "dataTest"; }, {}, never, ["*"], false>;
}
//# sourceMappingURL=pop-out-option.component.d.ts.map