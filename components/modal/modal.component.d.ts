import { ComponentRef, EmbeddedViewRef } from '@angular/core';
import { ModalContentType, ModalRef } from './modal-ref';
import { CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare enum ModalContentTypes {
    Template = "template",
    Component = "component"
}
export declare enum ModalSize {
    fullScreen = "full-screen"
}
export declare class UpModalComponent<T, D, V> {
    private modalRef;
    content: ModalContentType<T>;
    contentTypes: typeof ModalContentTypes;
    portalOutlet: CdkPortalOutlet;
    get hostCssClasses(): string;
    constructor(modalRef: ModalRef<T, D, V>);
    get modalBaseCssClass(): string;
    get customModalCSSClass(): string;
    close(): void;
    attachComponentPortal(portal: ComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpModalComponent<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpModalComponent<any, any, any>, "up-modal", never, {}, {}, never, never, false>;
}
//# sourceMappingURL=modal.component.d.ts.map