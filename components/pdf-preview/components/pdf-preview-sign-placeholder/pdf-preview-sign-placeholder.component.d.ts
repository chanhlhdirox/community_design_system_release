import { ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import * as i0 from "@angular/core";
export declare class PdfPreviewSignPlaceholderComponent implements OnDestroy {
    private ngZone;
    parentElement: ElementRef;
    document: PDFDocumentProxy;
    page: number;
    mouseSensibility: number;
    placeHolderSize: any;
    labelPlaceholder: string;
    coordinates: EventEmitter<{
        llx: string;
        lly: string;
        urx: string;
        ury: string;
        page: string;
    }>;
    private destroy$;
    private isDragging;
    private hoveringPageNumber;
    private animationFrame;
    private pageElement;
    private signPlaceholderContainerOffset;
    private span;
    private placeHolderContainer;
    private signPlaceHolderContainerWidth;
    private signPlaceHolderContainerHeight;
    private containerWidth;
    private containerHeight;
    private SPAN_CLASSNAME;
    private SIGN_PLACEHOLDER_CONTAINER;
    private PDF_CONTAINER_CLASSNAME;
    private renderer;
    constructor(ngZone: NgZone, renderer: Renderer2);
    ngOnDestroy(): void;
    createSignPlaceholder(): void;
    private createSignPlaceholderDOMElement;
    private bindSignPlaceholder;
    private showSingPlaceholder;
    private calculateSignPlaceHolderOffSet;
    private calculatePDFCoordinates;
    private isMouseOutsidePdfContainer;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfPreviewSignPlaceholderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfPreviewSignPlaceholderComponent, "up-pdf-preview-sign-placeholder", never, { "parentElement": "parentElement"; "document": "document"; "page": "page"; "mouseSensibility": "mouseSensibility"; "placeHolderSize": "placeHolderSize"; "labelPlaceholder": "labelPlaceholder"; }, { "coordinates": "coordinates"; }, never, never, false>;
}
//# sourceMappingURL=pdf-preview-sign-placeholder.component.d.ts.map