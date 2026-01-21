import { ComponentType, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentFactoryResolver, ElementRef, Injector, TemplateRef, ViewContainerRef } from '@angular/core';
import { ModalRef } from './modal-ref';
import { ModalSize } from './modal.component';
import * as i0 from "@angular/core";
export interface UpModalConfig {
    id?: number;
    viewContainerRef?: ViewContainerRef;
    originElementRef?: ElementRef;
    modalCSSClass?: string;
    staticBackdrop?: boolean;
    size?: ModalSize;
    componentFactoryResolver?: ComponentFactoryResolver;
}
export declare class UpModalService {
    private overlay;
    private injector;
    overlayConfig: OverlayConfig;
    modals: ModalRef[];
    constructor(overlay: Overlay, injector: Injector);
    open<T, D, R>(content: ComponentType<T> | TemplateRef<T>, data?: D, config?: UpModalConfig): ModalRef<T, D, R>;
    closeAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpModalService>;
}
//# sourceMappingURL=modal.service.d.ts.map