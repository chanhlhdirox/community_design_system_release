import { OnInit } from '@angular/core';
import { BadgeCssClass, BadgeType } from './enums';
import * as i0 from "@angular/core";
export declare class UpBadgeComponent implements OnInit {
    containerClass: boolean;
    badgeCssClasses: Map<BadgeType, BadgeCssClass>;
    count: string;
    type: BadgeType;
    dataTest: string;
    ngOnInit(): void;
    get badgeCssClass(): BadgeCssClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpBadgeComponent, "up-badge", never, { "count": "count"; "type": "type"; "dataTest": "dataTest"; }, {}, never, never, false>;
}
//# sourceMappingURL=badge.component.d.ts.map