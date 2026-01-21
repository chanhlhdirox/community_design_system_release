import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UpTooltipComponent {
    content: string | TemplateRef<void>;
    templateContextData?: object;
    mouseEnter: EventEmitter<void>;
    mouseLeave: EventEmitter<void>;
    get hasTemplateForContent(): boolean;
    enter(): void;
    leave(): void;
    get templateContext(): object;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpTooltipComponent, "up-tooltip", never, { "content": "content"; "templateContextData": "templateContextData"; }, { "mouseEnter": "mouseEnter"; "mouseLeave": "mouseLeave"; }, never, never, false>;
}
//# sourceMappingURL=tooltip.component.d.ts.map