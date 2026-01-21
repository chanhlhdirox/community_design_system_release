import { upIcon } from '../icons/lib';
import { InjectionToken } from '@angular/core';
export declare const NotificationCategory: {
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly ERROR: "error";
};
export declare type NotificationType = typeof NotificationCategory[keyof typeof NotificationCategory];
export declare const NotificationModeType: {
    readonly INLINE: "inline";
    readonly FLOATING: "floating";
};
export declare type NotificationMode = typeof NotificationModeType[keyof typeof NotificationModeType];
export declare type NotificationConfig = {
    containerCssClass: string;
    titleCssClass: string;
    textCssClass: string;
    icon: upIcon;
    iconColor: string;
    closeColor: string;
};
export interface Notifications {
    notificationTypes: Map<NotificationType, NotificationConfig>;
    notificationModes: Map<NotificationMode, string>;
    progressBarClassName: Map<NotificationType, string>;
    progressBarSupported: boolean;
}
export declare const NotificationsProvider: InjectionToken<Notifications>;
export declare const NotificationsFactory: () => {
    notificationTypes: Map<NotificationType, NotificationConfig>;
    notificationModes: Map<NotificationMode, string>;
    progressBarClassName: Map<NotificationType, string>;
    progressBarSupported: boolean;
};
//# sourceMappingURL=notification.constants.d.ts.map