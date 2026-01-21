import { EventEmitter } from '@angular/core';
import { upIcon } from '../icons/lib';
import * as i0 from "@angular/core";
export declare class UploadPanelComponent {
    statusHeaderOpened: boolean;
    statusHeaderMessage: string;
    remainingTimeInfo: string;
    cancelUploadText: string;
    uploadProcessCompletedSuccessfully: boolean;
    closePanel: EventEmitter<void>;
    cancelUploads: EventEmitter<void>;
    toggleStatusHeader(): void;
    get statusHeaderCSSClass(): string;
    get statusHeaderChevronIcon(): upIcon;
    get isStatusHeaderOpened(): boolean;
    get isUploadProcessCompletedSuccessfully(): boolean;
    handleClosePanel(): void;
    handleCancelUploads(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadPanelComponent, "up-upload-panel", never, { "statusHeaderMessage": "statusHeaderMessage"; "remainingTimeInfo": "remainingTimeInfo"; "cancelUploadText": "cancelUploadText"; "uploadProcessCompletedSuccessfully": "uploadProcessCompletedSuccessfully"; }, { "closePanel": "closePanel"; "cancelUploads": "cancelUploads"; }, never, ["*"], false>;
}
//# sourceMappingURL=upload-panel.component.d.ts.map