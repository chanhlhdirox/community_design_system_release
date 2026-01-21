import { EventEmitter } from '@angular/core';
import { upIcon } from '../icons/lib';
import { NotificationConfig, NotificationMode, Notifications, NotificationType } from './notification.constants';
import { DomSanitizer } from '@angular/platform-browser';
import { UpNotificationTitleComponent } from './components/title/notification-title.component';
import * as i0 from "@angular/core";
export declare class UpNotificationComponent {
    private provider;
    private sanitizer;
    baseDataTest: string;
    type: NotificationType;
    text: string;
    closeable: boolean;
    mode: NotificationMode;
    progressBarDuration: number | undefined;
    isOpaque: boolean;
    closeNotification: EventEmitter<MouseEvent>;
    upNotificationTitleComponent?: UpNotificationTitleComponent;
    constructor(provider: Notifications, sanitizer: DomSanitizer);
    get sanitizedText(): string;
    get config(): NotificationConfig;
    get containerCssClass(): string;
    get icon(): upIcon;
    get iconColor(): string;
    get closeColor(): string;
    get textCssClass(): string;
    get modeClass(): string;
    get iconSize(): string;
    get hasInlineMode(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpNotificationComponent, "up-notification", never, { "baseDataTest": "baseDataTest"; "type": "type"; "text": "text"; "closeable": "closeable"; "mode": "mode"; "progressBarDuration": "progressBarDuration"; "isOpaque": "isOpaque"; }, { "closeNotification": "closeNotification"; }, ["upNotificationTitleComponent"], ["[upNotificationTemplate]", "[upNotificationLink]", "[upNotificationTitle]", "[upNotificationFooter]", "[upNotificationButtonLabel]"], false>;
}
//# sourceMappingURL=notification.component.d.ts.map