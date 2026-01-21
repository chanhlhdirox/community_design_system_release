import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { upIcon } from '../../icons/lib';
import * as i0 from "@angular/core";
export declare class UpActionBarActionComponent implements OnChanges, OnInit {
    iconColor: string;
    actionPrefixIcon: upIcon;
    hasPrefixIcon: boolean;
    prefixIcon?: upIcon;
    suffixIcon?: upIcon;
    highlighted: boolean;
    loading: boolean;
    disabled: boolean;
    containerClass: boolean;
    onHover(): void;
    onMouseOut(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private setHasPrefixIcon;
    private setActionPrefixIcon;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpActionBarActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpActionBarActionComponent, "up-action-bar-action", never, { "prefixIcon": "prefixIcon"; "suffixIcon": "suffixIcon"; "highlighted": "highlighted"; "loading": "loading"; "disabled": "disabled"; }, {}, never, ["*"], false>;
}
//# sourceMappingURL=action-bar-action.component.d.ts.map