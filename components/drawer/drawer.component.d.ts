import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum DrawerLocation {
    Left = "left",
    Right = "right"
}
export declare class DrawerComponent {
    opened: boolean;
    showCloseButton: boolean;
    location: DrawerLocation.Left | DrawerLocation.Right;
    closed: EventEmitter<void>;
    constructor();
    get isLeftDrawer(): boolean;
    handleEscape(event: any): void;
    hideDrawer(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DrawerComponent, "up-drawer", never, { "opened": "opened"; "showCloseButton": "showCloseButton"; "location": "location"; }, { "closed": "closed"; }, never, ["*"], false>;
}
//# sourceMappingURL=drawer.component.d.ts.map