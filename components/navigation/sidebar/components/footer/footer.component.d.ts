import { OnInit } from '@angular/core';
import { AutoUnsubscribeComponent } from '../../../../../src/lib/utils';
import { Subscription } from 'rxjs';
import { UpSidebarService } from '../../services/sidebar.service';
import * as i0 from "@angular/core";
export declare class UpSidebarFooterComponent extends AutoUnsubscribeComponent implements OnInit {
    private upSidebarService;
    collapsed: boolean;
    sidebarStateSubscription: Subscription;
    appVersion: string;
    constructor(upSidebarService: UpSidebarService);
    ngOnInit(): void;
    get sidebarApplicationDetailsCssClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpSidebarFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpSidebarFooterComponent, "up-sidebar-footer", never, { "appVersion": "appVersion"; }, {}, never, never, false>;
}
//# sourceMappingURL=footer.component.d.ts.map