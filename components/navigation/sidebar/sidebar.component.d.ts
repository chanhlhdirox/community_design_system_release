import { OnInit } from '@angular/core';
import { upIcon } from '../../icons/lib';
import { AutoUnsubscribeComponent } from '../../../src/lib/utils';
import { Subscription } from 'rxjs';
import { UpSidebarService } from './services/sidebar.service';
import * as i0 from "@angular/core";
export declare class UpSidebarComponent extends AutoUnsubscribeComponent implements OnInit {
    private upSidebarService;
    collapsed: boolean;
    sidebarStateSubscription: Subscription;
    constructor(upSidebarService: UpSidebarService);
    ngOnInit(): void;
    toggleSidebar(): void;
    get sidebarCssClass(): string;
    get icon(): upIcon;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpSidebarComponent, "up-sidebar", never, {}, {}, never, ["*"], false>;
}
//# sourceMappingURL=sidebar.component.d.ts.map