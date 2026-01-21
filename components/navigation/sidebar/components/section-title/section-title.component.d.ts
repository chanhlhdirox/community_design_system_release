import { OnInit } from '@angular/core';
import { UpSidebarService } from '../../services/sidebar.service';
import { AutoUnsubscribeComponent } from '../../../../../src/lib/utils';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class UpSidebarSectionTitleComponent extends AutoUnsubscribeComponent implements OnInit {
    private upSidebarService;
    collapsed: boolean;
    sidebarStateSubscription: Subscription;
    title: string;
    constructor(upSidebarService: UpSidebarService);
    ngOnInit(): void;
    get sectionTitleCssClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpSidebarSectionTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpSidebarSectionTitleComponent, "up-sidebar-section", never, { "title": "title"; }, {}, never, never, false>;
}
//# sourceMappingURL=section-title.component.d.ts.map