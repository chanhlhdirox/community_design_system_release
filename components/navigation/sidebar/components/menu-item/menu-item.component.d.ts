import { EventEmitter, OnInit } from '@angular/core';
import { upIcon } from '../../../../icons/lib';
import { AutoUnsubscribeComponent } from '../../../../../src/lib/utils';
import { UpSidebarService } from '../../services/sidebar.service';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class UpSidebarMenuItemComponent extends AutoUnsubscribeComponent implements OnInit {
    private upSidebarService;
    collapsed: boolean;
    sidebarStateSubscription: Subscription;
    placeholderIcon: string;
    containerClass: boolean;
    selected: boolean;
    count: string;
    icon: string | upIcon;
    disabled: boolean;
    greyedOut: boolean;
    popover: string;
    dataTest: string;
    persistTooltip: boolean;
    handleClick: EventEmitter<void>;
    constructor(upSidebarService: UpSidebarService);
    ngOnInit(): void;
    get menuItemContainerCssClass(): string;
    get selectedItemCssClass(): string;
    get hasBadge(): boolean;
    get isTooltipDisabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpSidebarMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpSidebarMenuItemComponent, "up-menu-item", never, { "selected": "selected"; "count": "count"; "icon": "icon"; "disabled": "disabled"; "greyedOut": "greyedOut"; "popover": "popover"; "dataTest": "dataTest"; "persistTooltip": "persistTooltip"; }, { "handleClick": "handleClick"; }, never, ["*"], false>;
}
//# sourceMappingURL=menu-item.component.d.ts.map