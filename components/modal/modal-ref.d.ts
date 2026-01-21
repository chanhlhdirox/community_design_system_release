import { TemplateRef } from '@angular/core';
import { ComponentType, OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { SubscriptionManager } from '../../src/lib/utils';
import { UpModalConfig } from './modal.service';
import { UpModalComponent } from './modal.component';
export declare type ModalContentType<T> = TemplateRef<T> | ComponentType<T>;
export declare class ModalRef<T = unknown, D = unknown, R = unknown> extends SubscriptionManager {
    overlay: OverlayRef;
    content: ModalContentType<T>;
    data?: D;
    config?: UpModalConfig;
    afterClosed$: Subject<R>;
    active: boolean;
    componentInstance: UpModalComponent<T, D, R>;
    constructor(overlay: OverlayRef, content: ModalContentType<T>, data?: D, config?: UpModalConfig);
    close: (result?: R) => void;
}
//# sourceMappingURL=modal-ref.d.ts.map