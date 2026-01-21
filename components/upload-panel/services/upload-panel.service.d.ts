import { UploadPanelItem, UploadItemConfiguration } from '../helpers/upload-panel-item';
import * as i0 from "@angular/core";
export declare class UploadPanelService {
    documentUploads: UploadPanelItem[];
    get uploadCount(): number;
    get isUploadProcessCompletedSuccessfully(): boolean;
    get isUploadStarted(): boolean;
    upload(config: UploadItemConfiguration): void;
    reset(): void;
    handleClosePanel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadPanelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UploadPanelService>;
}
//# sourceMappingURL=upload-panel.service.d.ts.map