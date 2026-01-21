import { AfterViewInit, ElementRef, EventEmitter, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AutoUnsubscribeComponent } from '../../src/lib/utils';
import { popOutPositions } from './constants';
import { UpPopOutService } from './pop-out.service';
import * as i0 from "@angular/core";
export declare class UpPopOutTriggerDirective extends AutoUnsubscribeComponent implements AfterViewInit {
    private overlay;
    private viewContainerRef;
    private hostElement;
    private upPopOutService;
    contentTemplate: TemplateRef<any>;
    popoutOpened: EventEmitter<void>;
    popoutClosed: EventEmitter<void>;
    position: popOutPositions;
    closeOnOptionClick: boolean;
    popoutDisabled: boolean;
    stopClickEventPropagation: boolean;
    hasFloatingCardPadding: boolean;
    overlayRef: OverlayRef | null;
    openMenu(event: MouseEvent): void;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef, hostElement: ElementRef, upPopOutService: UpPopOutService);
    ngAfterViewInit(): void;
    open(): void;
    close(): void;
    private subscribeToCloseEvents;
    private get overlayConfig();
    private get positionStrategy();
    private createPortal;
    private get hasValidSetup();
    static ɵfac: i0.ɵɵFactoryDeclaration<UpPopOutTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpPopOutTriggerDirective, "[upPopOutTrigger]", ["upPopOutTrigger"], { "contentTemplate": "upPopOutTrigger"; "position": "position"; "closeOnOptionClick": "closeOnOptionClick"; "popoutDisabled": "popoutDisabled"; "stopClickEventPropagation": "stopClickEventPropagation"; "hasFloatingCardPadding": "hasFloatingCardPadding"; }, { "popoutOpened": "popoutOpened"; "popoutClosed": "popoutClosed"; }, never, never, false>;
}
//# sourceMappingURL=pop-out-trigger.directive.d.ts.map