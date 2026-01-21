import { EventEmitter } from '@angular/core';
import { UploadStats, UploadStatus } from '../../upload-status.constants';
import * as i0 from "@angular/core";
export declare class UploadItemComponent {
    private provider;
    cancelIconColor: string;
    fileName: string;
    uploadStatus: UploadStats;
    uploadProgress?: number;
    uploadCancelledMessage: string;
    uploadFailureMessage: string;
    navigateToDocumentDetails: EventEmitter<string>;
    cancelUpload: EventEmitter<string>;
    retryUpload: EventEmitter<string>;
    constructor(provider: UploadStatus);
    get isUploading(): boolean;
    get isUploadCompleted(): boolean;
    get isUploadFailed(): boolean;
    get isUploadCancelled(): boolean;
    get isUploadProgressProvided(): boolean;
    get uploadItemCSSClass(): string;
    get filenameCSSClass(): string;
    get cancelUploadIconColor(): string;
    handleNavigateToDocumentDetails(): void;
    handleCancelItemUpload(): void;
    handleRetryUpload(): void;
    toggleCancelUploadIconColor($event: {
        type: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadItemComponent, "up-upload-item", never, { "fileName": "fileName"; "uploadStatus": "uploadStatus"; "uploadProgress": "uploadProgress"; "uploadCancelledMessage": "uploadCancelledMessage"; "uploadFailureMessage": "uploadFailureMessage"; }, { "navigateToDocumentDetails": "navigateToDocumentDetails"; "cancelUpload": "cancelUpload"; "retryUpload": "retryUpload"; }, never, never, false>;
}
//# sourceMappingURL=upload-item.component.d.ts.map