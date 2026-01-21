import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpSidebarComponent } from './sidebar/sidebar.component';
import { UpSidebarHeaderComponent, UpSidebarFooterComponent, UpSidebarSectionTitleComponent, UpSidebarMenuItemComponent } from './sidebar';
import { UpTypographyModule } from '../typography/typography.module';
import { UpIconsModule } from '../icons/icons.module';
import { UpAvatarModule } from '../avatar/avatar.module';
import { UpSidebarService } from './sidebar/services/sidebar.service';
import { UpTopBarComponent } from './topbar/topbar.component';
import { UpBadgeModule } from '../badge/badge.module';
import { UpFooterComponent } from './footer/footer.component';
import { UpTopBarAmbassadorLogosDirective } from './topbar/directives/ambassador-logos.directive';
import { UpTopBarCommunityLogoDirective } from './topbar/directives/community-logo.directive';
import { UpTopBarRightContentDirective } from './topbar/directives/topbar-right-content.directive';
import { UpTooltipModule } from '../tooltip/tooltip.module';
import { UpPopOutModule } from '../pop-out/pop-out.module';
import { UserDetailsComponent } from './topbar/user-details/user-details.component';
import { UpSpacingModule } from '../spacing/spacing.module';
import { UpEllipsisModule } from '../ellipsis/ellipsis.module';
import * as i0 from "@angular/core";
export class NavigationModule {
}
NavigationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NavigationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NavigationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NavigationModule, declarations: [UpSidebarHeaderComponent,
        UpSidebarFooterComponent,
        UpSidebarSectionTitleComponent,
        UpSidebarMenuItemComponent,
        UpSidebarComponent,
        UpTopBarComponent,
        UpFooterComponent,
        UpTopBarCommunityLogoDirective,
        UpTopBarAmbassadorLogosDirective,
        UpTopBarRightContentDirective,
        UserDetailsComponent], imports: [CommonModule,
        UpTypographyModule,
        UpIconsModule,
        UpAvatarModule,
        UpBadgeModule,
        UpTooltipModule,
        UpPopOutModule,
        UpSpacingModule,
        UpEllipsisModule], exports: [UpSidebarHeaderComponent,
        UpSidebarFooterComponent,
        UpSidebarSectionTitleComponent,
        UpSidebarMenuItemComponent,
        UpSidebarComponent,
        UpTopBarComponent,
        UpFooterComponent,
        UpTopBarCommunityLogoDirective,
        UpTopBarAmbassadorLogosDirective,
        UpTopBarRightContentDirective,
        UserDetailsComponent] });
NavigationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NavigationModule, providers: [UpSidebarService], imports: [CommonModule,
        UpTypographyModule,
        UpIconsModule,
        UpAvatarModule,
        UpBadgeModule,
        UpTooltipModule,
        UpPopOutModule,
        UpSpacingModule,
        UpEllipsisModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NavigationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        UpTypographyModule,
                        UpIconsModule,
                        UpAvatarModule,
                        UpBadgeModule,
                        UpTooltipModule,
                        UpPopOutModule,
                        UpSpacingModule,
                        UpEllipsisModule
                    ],
                    declarations: [
                        UpSidebarHeaderComponent,
                        UpSidebarFooterComponent,
                        UpSidebarSectionTitleComponent,
                        UpSidebarMenuItemComponent,
                        UpSidebarComponent,
                        UpTopBarComponent,
                        UpFooterComponent,
                        UpTopBarCommunityLogoDirective,
                        UpTopBarAmbassadorLogosDirective,
                        UpTopBarRightContentDirective,
                        UserDetailsComponent
                    ],
                    providers: [UpSidebarService],
                    exports: [
                        UpSidebarHeaderComponent,
                        UpSidebarFooterComponent,
                        UpSidebarSectionTitleComponent,
                        UpSidebarMenuItemComponent,
                        UpSidebarComponent,
                        UpTopBarComponent,
                        UpFooterComponent,
                        UpTopBarCommunityLogoDirective,
                        UpTopBarAmbassadorLogosDirective,
                        UpTopBarRightContentDirective,
                        UserDetailsComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix3QkFBd0IsRUFDeEIsOEJBQThCLEVBQzlCLDBCQUEwQixFQUMzQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUEwQy9ELE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkEzQnpCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsZ0NBQWdDO1FBQ2hDLDZCQUE2QjtRQUM3QixvQkFBb0IsYUFyQnBCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCLGFBaUJoQix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5QiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsOEJBQThCO1FBQzlCLGdDQUFnQztRQUNoQyw2QkFBNkI7UUFDN0Isb0JBQW9COzhHQUdYLGdCQUFnQixhQWZoQixDQUFDLGdCQUFnQixDQUFDLFlBdkIzQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQjsyRkE4QlAsZ0JBQWdCO2tCQXhDNUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4Qiw4QkFBOEI7d0JBQzlCLDBCQUEwQjt3QkFDMUIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsOEJBQThCO3dCQUM5QixnQ0FBZ0M7d0JBQ2hDLDZCQUE2Qjt3QkFDN0Isb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4Qiw4QkFBOEI7d0JBQzlCLDBCQUEwQjt3QkFDMUIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsOEJBQThCO3dCQUM5QixnQ0FBZ0M7d0JBQ2hDLDZCQUE2Qjt3QkFDN0Isb0JBQW9CO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVXBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFVwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgVXBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICBVcFNpZGViYXJTZWN0aW9uVGl0bGVDb21wb25lbnQsXG4gIFVwU2lkZWJhck1lbnVJdGVtQ29tcG9uZW50XG59IGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgeyBVcFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlJztcbmltcG9ydCB7IFVwSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9pY29ucy5tb2R1bGUnO1xuaW1wb3J0IHsgVXBBdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9hdmF0YXIvYXZhdGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBVcFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9zaWRlYmFyL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBVcFRvcEJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9wYmFyL3RvcGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBCYWRnZU1vZHVsZSB9IGZyb20gJy4uL2JhZGdlL2JhZGdlLm1vZHVsZSc7XG5pbXBvcnQgeyBVcEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBUb3BCYXJBbWJhc3NhZG9yTG9nb3NEaXJlY3RpdmUgfSBmcm9tICcuL3RvcGJhci9kaXJlY3RpdmVzL2FtYmFzc2Fkb3ItbG9nb3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVwVG9wQmFyQ29tbXVuaXR5TG9nb0RpcmVjdGl2ZSB9IGZyb20gJy4vdG9wYmFyL2RpcmVjdGl2ZXMvY29tbXVuaXR5LWxvZ28uZGlyZWN0aXZlJztcbmltcG9ydCB7IFVwVG9wQmFyUmlnaHRDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi90b3BiYXIvZGlyZWN0aXZlcy90b3BiYXItcmlnaHQtY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVXBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBVcFBvcE91dE1vZHVsZSB9IGZyb20gJy4uL3BvcC1vdXQvcG9wLW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlckRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3RvcGJhci91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcFNwYWNpbmdNb2R1bGUgfSBmcm9tICcuLi9zcGFjaW5nL3NwYWNpbmcubW9kdWxlJztcbmltcG9ydCB7IFVwRWxsaXBzaXNNb2R1bGUgfSBmcm9tICcuLi9lbGxpcHNpcy9lbGxpcHNpcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFVwVHlwb2dyYXBoeU1vZHVsZSxcbiAgICBVcEljb25zTW9kdWxlLFxuICAgIFVwQXZhdGFyTW9kdWxlLFxuICAgIFVwQmFkZ2VNb2R1bGUsXG4gICAgVXBUb29sdGlwTW9kdWxlLFxuICAgIFVwUG9wT3V0TW9kdWxlLFxuICAgIFVwU3BhY2luZ01vZHVsZSxcbiAgICBVcEVsbGlwc2lzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFVwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBVcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgVXBTaWRlYmFyU2VjdGlvblRpdGxlQ29tcG9uZW50LFxuICAgIFVwU2lkZWJhck1lbnVJdGVtQ29tcG9uZW50LFxuICAgIFVwU2lkZWJhckNvbXBvbmVudCxcbiAgICBVcFRvcEJhckNvbXBvbmVudCxcbiAgICBVcEZvb3RlckNvbXBvbmVudCxcbiAgICBVcFRvcEJhckNvbW11bml0eUxvZ29EaXJlY3RpdmUsXG4gICAgVXBUb3BCYXJBbWJhc3NhZG9yTG9nb3NEaXJlY3RpdmUsXG4gICAgVXBUb3BCYXJSaWdodENvbnRlbnREaXJlY3RpdmUsXG4gICAgVXNlckRldGFpbHNDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVXBTaWRlYmFyU2VydmljZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBVcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgVXBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIFVwU2lkZWJhclNlY3Rpb25UaXRsZUNvbXBvbmVudCxcbiAgICBVcFNpZGViYXJNZW51SXRlbUNvbXBvbmVudCxcbiAgICBVcFNpZGViYXJDb21wb25lbnQsXG4gICAgVXBUb3BCYXJDb21wb25lbnQsXG4gICAgVXBGb290ZXJDb21wb25lbnQsXG4gICAgVXBUb3BCYXJDb21tdW5pdHlMb2dvRGlyZWN0aXZlLFxuICAgIFVwVG9wQmFyQW1iYXNzYWRvckxvZ29zRGlyZWN0aXZlLFxuICAgIFVwVG9wQmFyUmlnaHRDb250ZW50RGlyZWN0aXZlLFxuICAgIFVzZXJEZXRhaWxzQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbk1vZHVsZSB7fVxuIl19