import { OnInit, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { AutoUnsubscribeComponent } from '../../../../../src/lib/utils';
import { Subscription } from 'rxjs';
import { UpSidebarService } from '../../services/sidebar.service';
import { UpIcon } from '../../../../icons/lib';
import * as i0 from "@angular/core";
export declare class UpSidebarHeaderComponent extends AutoUnsubscribeComponent implements OnInit, OnChanges {
    private upSidebarService;
    collapsed: boolean;
    sidebarStateSubscription: Subscription;
    companyName: string;
    companyId: string;
    tooltip: string;
    companyInitials: string;
    companyLocation: string;
    chevronToggled: boolean;
    showCompanySwitcher: boolean;
    companySwitcherTemplate: TemplateRef<void>;
    toggleDropdown: EventEmitter<boolean>;
    hasLongCompanyName: boolean;
    private MAX_CHARACTERS_WORD_ALLOWED;
    constructor(upSidebarService: UpSidebarService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    get userCompanyDetailsCssClass(): string;
    handleChevronToggle(): void;
    get showRightSideTemplate(): boolean;
    get chevronIcon(): UpIcon['name'];
    private setHasLongCompanyName;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpSidebarHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpSidebarHeaderComponent, "up-sidebar-header", never, { "companyName": "companyName"; "companyId": "companyId"; "tooltip": "tooltip"; "companyInitials": "companyInitials"; "companyLocation": "companyLocation"; "chevronToggled": "chevronToggled"; "showCompanySwitcher": "showCompanySwitcher"; "companySwitcherTemplate": "companySwitcherTemplate"; }, { "toggleDropdown": "toggleDropdown"; }, never, ["*"], false>;
}
//# sourceMappingURL=header.component.d.ts.map