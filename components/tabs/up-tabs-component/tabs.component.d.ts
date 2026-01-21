import { QueryList } from '@angular/core';
import { UpTabComponent } from '../up-tab/tab.component';
import { LevelType, TabsLevelTypes } from './tabs.constants';
import { BadgeType } from '../../badge/enums';
import * as i0 from "@angular/core";
export declare class UpTabsComponent {
    private provider;
    tabs: QueryList<UpTabComponent>;
    borderEnabled: boolean;
    levelType: LevelType;
    constructor(provider: TabsLevelTypes);
    selectTab(selectedTab: UpTabComponent): void;
    getBadgeStyle(tab: UpTabComponent): BadgeType;
    get levelTypeSection(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpTabsComponent, "up-tabs", never, { "borderEnabled": "borderEnabled"; "levelType": "levelType"; }, {}, ["tabs"], ["*"], false>;
}
//# sourceMappingURL=tabs.component.d.ts.map