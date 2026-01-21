import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { TooltipConstants } from '../../../tooltip/tooltip.constants';
import * as i0 from "@angular/core";
export declare class PdfPreviewCopyToClipboardComponent implements OnDestroy {
    private ngZone;
    private renderer;
    private overlay;
    private overlayPositionBuilder;
    private changeDetectorRef;
    private window;
    private tooltipConstants;
    parentElement: ElementRef;
    delay: number;
    tooltipCloseDelay: number;
    copiedLabel: string;
    lastSelectedText: string;
    destroy$: Subject<void>;
    private overlayRef;
    private tooltipAutoCloseTimeout;
    constructor(ngZone: NgZone, renderer: Renderer2, overlay: Overlay, overlayPositionBuilder: OverlayPositionBuilder, changeDetectorRef: ChangeDetectorRef, window: Window, tooltipConstants: TooltipConstants);
    ngOnDestroy(): void;
    activateSelectionCopy(): void;
    private createTooltip;
    private getOverlay;
    private copySelectionToClipboard;
    private getHighlightedNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfPreviewCopyToClipboardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfPreviewCopyToClipboardComponent, "up-pdf-preview-copy-to-clipboard", never, { "parentElement": "parentElement"; "delay": "delay"; "tooltipCloseDelay": "tooltipCloseDelay"; "copiedLabel": "copiedLabel"; }, {}, never, never, false>;
}
//# sourceMappingURL=pdf-preview-copy-to-clipboard.component.d.ts.map