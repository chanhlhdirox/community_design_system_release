import { TitleSize } from '../../../typography/title/title.directive';
import { Notifications, NotificationType } from '../../notification.constants';
import * as i0 from "@angular/core";
export declare class UpNotificationTitleComponent {
    private provider;
    baseDataTest: string;
    type: NotificationType;
    title: string;
    size: TitleSize;
    constructor(provider: Notifications);
    get notificationTitleCssClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpNotificationTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpNotificationTitleComponent, "up-notification-title", never, { "baseDataTest": "baseDataTest"; "type": "type"; "title": "title"; "size": "size"; }, {}, never, never, false>;
}
//# sourceMappingURL=notification-title.component.d.ts.map