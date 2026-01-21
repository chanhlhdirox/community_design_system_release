import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class UpTextEllipsisComponent implements OnInit, OnDestroy {
    textOverflowContainer: ElementRef;
    content: string;
    hasEllipsis: boolean;
    checkWindowResize: Subscription;
    ngOnInit(): void;
    ngOnDestroy(): void;
    checkIfHasEllipsis(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpTextEllipsisComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpTextEllipsisComponent, "up-text-ellipsis", never, {}, {}, never, ["*"], false>;
}
//# sourceMappingURL=text-ellipsis.component.d.ts.map