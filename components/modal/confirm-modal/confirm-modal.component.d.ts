import { ModalRef } from '../modal-ref';
import * as i0 from "@angular/core";
export interface ConfirmModalConfig {
    confirmLabel: string;
    cancelLabel: string;
    title?: string;
    body?: string;
    confirmable?: boolean;
    cancelable?: boolean;
    hideModalActions?: boolean;
}
export declare class UpConfirmModalComponent {
    private modalRef;
    constructor(modalRef: ModalRef<UpConfirmModalComponent, ConfirmModalConfig, boolean>);
    get data(): ConfirmModalConfig;
    confirm(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpConfirmModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpConfirmModalComponent, "up-confirm-modal", never, {}, {}, never, never, false>;
}
//# sourceMappingURL=confirm-modal.component.d.ts.map