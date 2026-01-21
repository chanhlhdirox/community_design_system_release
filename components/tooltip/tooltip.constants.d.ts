import { InjectionToken } from '@angular/core';
import { ConnectedPosition } from '@angular/cdk/overlay';
export declare const TooltipTriggerType: {
    readonly HOVER: "hover";
    readonly CLICK: "click";
};
export declare type TooltipTrigger = typeof TooltipTriggerType[keyof typeof TooltipTriggerType];
export declare const TooltipPositionType: {
    readonly RIGHT: "right";
    readonly LEFT: "left";
    readonly BOTTOM: "bottom";
    readonly TOP: "top";
};
export declare type TooltipPosition = typeof TooltipPositionType[keyof typeof TooltipPositionType];
export interface TooltipConstants {
    positions: Map<string, ConnectedPosition>;
    hoverOffPersistTime: number;
}
export declare const TooltipConstantsProvider: InjectionToken<TooltipConstants>;
export declare const TooltipConstantsFactory: () => {
    positions: Map<string, ConnectedPosition>;
    hoverOffPersistTime: number;
};
//# sourceMappingURL=tooltip.constants.d.ts.map