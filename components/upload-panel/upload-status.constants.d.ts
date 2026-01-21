import { InjectionToken } from '@angular/core';
export declare type UploadStats = 'in_progress' | 'completed' | 'failed' | 'cancelled';
export interface UploadStatus {
    cssClassesBasedOnStatus: Map<UploadStats, string>;
    fileNameCssClassesBasedOnStatus: Map<UploadStats, string>;
}
export declare const UploadStatusProvider: InjectionToken<UploadStatus>;
export declare const UploadStatusFactory: () => {
    cssClassesBasedOnStatus: Map<UploadStats, string>;
    fileNameCssClassesBasedOnStatus: Map<UploadStats, string>;
};
//# sourceMappingURL=upload-status.constants.d.ts.map