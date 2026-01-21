import { Observable, Subscription } from 'rxjs';
import { UploadStats } from '../upload-status.constants';
export declare type UploadHandler = (file: File) => Observable<unknown>;
export declare type UploadSuccessHandler = (file: File, result: unknown) => void;
export declare type UploadErrorHandler = (file: File, error: unknown) => void;
export interface UploadItemHandlers {
    onClickHandler: Function;
    uploadCall: UploadHandler;
    onSuccess: UploadSuccessHandler;
    onFailed: UploadErrorHandler;
}
export interface UploadItemConfiguration {
    file: File;
    name: string;
    methods: UploadItemHandlers;
}
export declare class UploadPanelItem {
    name: string;
    progress?: number;
    file: File;
    status: UploadStats;
    methods: UploadItemHandlers;
    protected uploadSubscription$: Subscription;
    protected uploadResult: unknown;
    constructor(item: UploadItemConfiguration);
    upload(): void;
    cancel(): void;
    retry(): void;
    openItem(): void;
}
//# sourceMappingURL=upload-panel-item.d.ts.map