import { ChangeDetectorRef } from '@angular/core';
import { CreateNotificationOptions, PageNotification, PageNotificationConfig } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class PageNotificationContainerComponent {
    private changeDetectorRef;
    private notificationConfig;
    private notificationId;
    instances: PageNotification[];
    constructor(changeDetectorRef: ChangeDetectorRef, notificationConfig: PageNotificationConfig);
    static instanceRemoved(instance: PageNotification): void;
    create(options: CreateNotificationOptions): PageNotification;
    remove(id: string): void;
    removeAll(): void;
    private instancesChanged;
    private generateNotificationId;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageNotificationContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageNotificationContainerComponent, "up-page-notification-container", never, {}, {}, never, never, false>;
}
//# sourceMappingURL=page-notification-container.component.d.ts.map