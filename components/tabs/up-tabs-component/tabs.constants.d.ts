import { InjectionToken } from '@angular/core';
export declare const TabsPositionsTypes: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export declare type TabPositionType = typeof TabsPositionsTypes[keyof typeof TabsPositionsTypes];
export declare const LevelTypes: {
    readonly PAGE: "Page";
    readonly SECTION: "Section";
};
export declare type LevelType = typeof LevelTypes[keyof typeof LevelTypes];
export interface TabsLevelTypes {
    tabsLevelTypes: Map<LevelType, string>;
}
export declare const TabsLevelTypesProvider: InjectionToken<TabsLevelTypes>;
export declare const TabsLevelFactory: () => {
    tabsLevelTypes: Map<LevelType, string>;
};
//# sourceMappingURL=tabs.constants.d.ts.map