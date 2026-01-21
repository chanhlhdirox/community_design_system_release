import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { PageNotificationContainerComponent, PageNotificationComponent } from './components';
import { UpPageNotificationService } from './page-notification.service';
import { UpNotificationModule } from '../notification/notification.module';
import { PageNotificationConfigFactory, PageNotificationConfigProvider, WindowProvider } from './providers';
import { UpTypographyModule } from '../typography/typography.module';
import * as i0 from "@angular/core";
export class UpPageNotificationModule {
}
UpPageNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPageNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpPageNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpPageNotificationModule, declarations: [PageNotificationContainerComponent, PageNotificationComponent], imports: [CommonModule,
        OverlayModule,
        UpNotificationModule,
        BrowserAnimationsModule,
        UpTypographyModule] });
UpPageNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPageNotificationModule, providers: [
        UpPageNotificationService,
        { provide: PageNotificationConfigProvider, useFactory: PageNotificationConfigFactory },
        { provide: WindowProvider, useValue: window }
    ], imports: [CommonModule,
        OverlayModule,
        UpNotificationModule,
        BrowserAnimationsModule,
        UpTypographyModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPageNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PageNotificationContainerComponent, PageNotificationComponent],
                    imports: [
                        CommonModule,
                        OverlayModule,
                        UpNotificationModule,
                        BrowserAnimationsModule,
                        UpTypographyModule
                    ],
                    providers: [
                        UpPageNotificationService,
                        { provide: PageNotificationConfigProvider, useFactory: PageNotificationConfigFactory },
                        { provide: WindowProvider, useValue: window }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ub3RpZmljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wYWdlLW5vdGlmaWNhdGlvbi9wYWdlLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLDhCQUE4QixFQUM5QixjQUFjLEVBQ2YsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBaUJyRSxNQUFNLE9BQU8sd0JBQXdCOztxSEFBeEIsd0JBQXdCO3NIQUF4Qix3QkFBd0IsaUJBZGxCLGtDQUFrQyxFQUFFLHlCQUF5QixhQUV4RSxZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsa0JBQWtCO3NIQVFiLHdCQUF3QixhQU50QjtRQUNQLHlCQUF5QjtRQUN6QixFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsNkJBQTZCLEVBQUU7UUFDdEYsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7S0FDaEQsWUFWRyxZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsa0JBQWtCOzJGQVFiLHdCQUF3QjtrQkFmcEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSx5QkFBeUIsQ0FBQztvQkFDN0UsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AseUJBQXlCO3dCQUN6QixFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxVQUFVLEVBQUUsNkJBQTZCLEVBQUU7d0JBQ3RGLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO3FCQUNoRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgUGFnZU5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgUGFnZU5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVcFBhZ2VOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVwTm90aWZpY2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgUGFnZU5vdGlmaWNhdGlvbkNvbmZpZ0ZhY3RvcnksXG4gIFBhZ2VOb3RpZmljYXRpb25Db25maWdQcm92aWRlcixcbiAgV2luZG93UHJvdmlkZXJcbn0gZnJvbSAnLi9wcm92aWRlcnMnO1xuaW1wb3J0IHsgVXBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSAnLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUGFnZU5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgUGFnZU5vdGlmaWNhdGlvbkNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgICAgIFVwTm90aWZpY2F0aW9uTW9kdWxlLFxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgVXBUeXBvZ3JhcGh5TW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXBQYWdlTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBQYWdlTm90aWZpY2F0aW9uQ29uZmlnUHJvdmlkZXIsIHVzZUZhY3Rvcnk6IFBhZ2VOb3RpZmljYXRpb25Db25maWdGYWN0b3J5IH0sXG4gICAgICAgIHsgcHJvdmlkZTogV2luZG93UHJvdmlkZXIsIHVzZVZhbHVlOiB3aW5kb3cgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVXBQYWdlTm90aWZpY2F0aW9uTW9kdWxlIHt9XG4iXX0=