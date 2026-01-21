import { Notifications, NotificationType } from '../../notification.constants';
import * as i0 from "@angular/core";
export declare class UpNotificationProgressBarComponent {
    private provider;
    duration: number;
    type: NotificationType;
    constructor(provider: Notifications);
    get progressBarClassName(): string;
    get animationDuration(): string;
    get animationCssProperty(): string;
    get shouldAnimateProgressBar(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpNotificationProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpNotificationProgressBarComponent, "up-notification-progress-bar", never, { "duration": "duration"; "type": "type"; }, {}, never, never, false>;
}
//# sourceMappingURL=progress-bar.component.d.ts.map