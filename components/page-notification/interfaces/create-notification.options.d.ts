import { TemplateRef } from '@angular/core';
import { NotificationType } from '../../notification/notification.constants';
export interface CreateNotificationOptions {
    type: NotificationType;
    title?: string;
    content?: string;
    duration?: number;
    footerTemplate?: TemplateRef<{}>;
    maxStack?: number;
}
//# sourceMappingURL=create-notification.options.d.ts.map