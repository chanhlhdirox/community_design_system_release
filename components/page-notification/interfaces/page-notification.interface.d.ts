import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationType } from '../../notification/notification.constants';
import { PageNotificationState } from '../enums';
export interface PageNotification {
    messageId: string;
    type: NotificationType;
    content: string;
    duration: number;
    title: string;
    state: PageNotificationState;
    createdAt: Date;
    onClick: Subject<MouseEvent>;
    onClose: Subject<boolean>;
    footerTemplate?: TemplateRef<{}>;
}
//# sourceMappingURL=page-notification.interface.d.ts.map