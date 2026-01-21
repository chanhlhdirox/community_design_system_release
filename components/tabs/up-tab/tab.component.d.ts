import { EventEmitter, TemplateRef } from '@angular/core';
import { TabPositionType } from '../up-tabs-component/tabs.constants';
import { BadgeType } from '../../badge/enums';
import * as i0 from "@angular/core";
export declare class TabTitleDirective {
    template: TemplateRef<unknown>;
    constructor(template: TemplateRef<unknown>);
    static ɵfac: i0.ɵɵFactoryDeclaration<TabTitleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TabTitleDirective, "[upTabTitle]", never, {}, {}, never, never, false>;
}
export declare class UpTabComponent {
    titleTemplate: TemplateRef<unknown>;
    title: string;
    count: number;
    active: boolean;
    disabled: boolean;
    grayedOut: boolean;
    separatorVisible: boolean;
    badgeStyle: BadgeType;
    position: TabPositionType;
    dataTest: string;
    tabOpened: EventEmitter<void>;
    hasCounter(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpTabComponent, "up-tab", never, { "title": "title"; "count": "count"; "active": "active"; "disabled": "disabled"; "grayedOut": "grayedOut"; "separatorVisible": "separatorVisible"; "badgeStyle": "badgeStyle"; "position": "position"; "dataTest": "dataTest"; }, { "tabOpened": "tabOpened"; }, ["titleTemplate"], ["*"], false>;
}
//# sourceMappingURL=tab.component.d.ts.map