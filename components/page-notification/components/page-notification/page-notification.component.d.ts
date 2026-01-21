import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { PageNotification } from '../../interfaces';
import { WindowProperties } from '../../providers';
import * as i0 from "@angular/core";
export declare class PageNotificationComponent implements OnInit, OnDestroy {
    private changeDetectorRef;
    private window;
    instance: PageNotification;
    readonly destroyed: EventEmitter<{
        id: string;
    }>;
    private closeTimer?;
    private autoCloseTimer?;
    constructor(changeDetectorRef: ChangeDetectorRef, window: WindowProperties);
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(event: MouseEvent): void;
    enter(): void;
    emitNotificationClick(event: MouseEvent): void;
    leave(): void;
    get autoCloseable(): boolean;
    get progressBarEnabled(): boolean;
    get progressBarDuration(): number;
    private destroy;
    readonly closeTimerHandler: () => void;
    private startAutoCloseTimeout;
    readonly autoCloseTimerHandler: () => void;
    private clearAutoCloseTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageNotificationComponent, "up-page-notification", ["upPageNotification"], { "instance": "instance"; }, { "destroyed": "destroyed"; }, never, never, false>;
}
//# sourceMappingURL=page-notification.component.d.ts.map