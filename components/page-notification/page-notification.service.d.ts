import { Overlay } from '@angular/cdk/overlay';
import { Injector } from '@angular/core';
import { PageNotificationContainerComponent } from './components';
import { PageNotification, CreateNotificationOptions } from './interfaces';
import * as i0 from "@angular/core";
export declare class UpPageNotificationService {
    private overlay;
    private injector;
    private containerInstance;
    constructor(overlay: Overlay, injector: Injector);
    get container(): PageNotificationContainerComponent;
    private createContainer;
    add(options: CreateNotificationOptions): PageNotification;
    remove(id?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPageNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpPageNotificationService>;
}
//# sourceMappingURL=page-notification.service.d.ts.map