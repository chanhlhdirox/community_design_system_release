import { NgModule } from '@angular/core';
import { UpTypographyModule } from '../typography/typography.module';
import { CommonModule } from '@angular/common';
import { UpIconsModule } from '../icons/icons.module';
import { UpNotificationComponent } from './notification.component';
import { NotificationsProvider, NotificationsFactory } from './notification.constants';
import { UpNotificationLinkComponent } from './components/link/notification-link.component';
import { UpNotificationLinkDirective } from './directives/notification-link.directive';
import { UpNotificationTitleComponent } from './components/title/notification-title.component';
import { UpNotificationTitleDirective } from './directives/notification-title.directive';
import { UpNotificationFooterDirective } from './directives/notification-footer.directive';
import { UpNotificationProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { NotificationTemplateDirective } from './directives/notification-template.directive';
import * as i0 from "@angular/core";
export class UpNotificationModule {
}
UpNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationModule, declarations: [UpNotificationComponent,
        UpNotificationTitleComponent,
        UpNotificationLinkComponent,
        UpNotificationTitleDirective,
        UpNotificationLinkDirective,
        UpNotificationFooterDirective,
        UpNotificationProgressBarComponent,
        NotificationTemplateDirective], imports: [CommonModule, UpTypographyModule, UpIconsModule], exports: [UpNotificationComponent,
        UpNotificationTitleComponent,
        UpNotificationLinkComponent,
        UpNotificationTitleDirective,
        UpNotificationLinkDirective,
        UpNotificationFooterDirective,
        UpNotificationProgressBarComponent,
        NotificationTemplateDirective] });
UpNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationModule, providers: [{ provide: NotificationsProvider, useFactory: NotificationsFactory }], imports: [CommonModule, UpTypographyModule, UpIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, UpTypographyModule, UpIconsModule],
                    providers: [{ provide: NotificationsProvider, useFactory: NotificationsFactory }],
                    declarations: [
                        UpNotificationComponent,
                        UpNotificationTitleComponent,
                        UpNotificationLinkComponent,
                        UpNotificationTitleDirective,
                        UpNotificationLinkDirective,
                        UpNotificationFooterDirective,
                        UpNotificationProgressBarComponent,
                        NotificationTemplateDirective
                    ],
                    exports: [
                        UpNotificationComponent,
                        UpNotificationTitleComponent,
                        UpNotificationLinkComponent,
                        UpNotificationTitleDirective,
                        UpNotificationLinkDirective,
                        UpNotificationFooterDirective,
                        UpNotificationProgressBarComponent,
                        NotificationTemplateDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztBQTBCN0YsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQXBCN0IsdUJBQXVCO1FBQ3ZCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0Isa0NBQWtDO1FBQ2xDLDZCQUE2QixhQVZyQixZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxhQWF2RCx1QkFBdUI7UUFDdkIsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QixrQ0FBa0M7UUFDbEMsNkJBQTZCO2tIQUdwQixvQkFBb0IsYUF0QnBCLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLENBQUMsWUFEdkUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGFBQWE7MkZBdUI5QyxvQkFBb0I7a0JBeEJoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxhQUFhLENBQUM7b0JBQzFELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO29CQUNqRixZQUFZLEVBQUU7d0JBQ1osdUJBQXVCO3dCQUN2Qiw0QkFBNEI7d0JBQzVCLDJCQUEyQjt3QkFDM0IsNEJBQTRCO3dCQUM1QiwyQkFBMkI7d0JBQzNCLDZCQUE2Qjt3QkFDN0Isa0NBQWtDO3dCQUNsQyw2QkFBNkI7cUJBQzlCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLDRCQUE0Qjt3QkFDNUIsMkJBQTJCO3dCQUMzQiw0QkFBNEI7d0JBQzVCLDJCQUEyQjt3QkFDM0IsNkJBQTZCO3dCQUM3QixrQ0FBa0M7d0JBQ2xDLDZCQUE2QjtxQkFDOUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSAnLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVXBJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL2ljb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBVcE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zUHJvdmlkZXIsIE5vdGlmaWNhdGlvbnNGYWN0b3J5IH0gZnJvbSAnLi9ub3RpZmljYXRpb24uY29uc3RhbnRzJztcbmltcG9ydCB7IFVwTm90aWZpY2F0aW9uTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rL25vdGlmaWNhdGlvbi1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcE5vdGlmaWNhdGlvbkxpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbm90aWZpY2F0aW9uLWxpbmsuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVwTm90aWZpY2F0aW9uVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGl0bGUvbm90aWZpY2F0aW9uLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcE5vdGlmaWNhdGlvblRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL25vdGlmaWNhdGlvbi10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVXBOb3RpZmljYXRpb25Gb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbm90aWZpY2F0aW9uLWZvb3Rlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVXBOb3RpZmljYXRpb25Qcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ub3RpZmljYXRpb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVXBUeXBvZ3JhcGh5TW9kdWxlLCBVcEljb25zTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOb3RpZmljYXRpb25zUHJvdmlkZXIsIHVzZUZhY3Rvcnk6IE5vdGlmaWNhdGlvbnNGYWN0b3J5IH1dLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBVcE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcbiAgICBVcE5vdGlmaWNhdGlvblRpdGxlQ29tcG9uZW50LFxuICAgIFVwTm90aWZpY2F0aW9uTGlua0NvbXBvbmVudCxcbiAgICBVcE5vdGlmaWNhdGlvblRpdGxlRGlyZWN0aXZlLFxuICAgIFVwTm90aWZpY2F0aW9uTGlua0RpcmVjdGl2ZSxcbiAgICBVcE5vdGlmaWNhdGlvbkZvb3RlckRpcmVjdGl2ZSxcbiAgICBVcE5vdGlmaWNhdGlvblByb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgIE5vdGlmaWNhdGlvblRlbXBsYXRlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBVcE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcbiAgICBVcE5vdGlmaWNhdGlvblRpdGxlQ29tcG9uZW50LFxuICAgIFVwTm90aWZpY2F0aW9uTGlua0NvbXBvbmVudCxcbiAgICBVcE5vdGlmaWNhdGlvblRpdGxlRGlyZWN0aXZlLFxuICAgIFVwTm90aWZpY2F0aW9uTGlua0RpcmVjdGl2ZSxcbiAgICBVcE5vdGlmaWNhdGlvbkZvb3RlckRpcmVjdGl2ZSxcbiAgICBVcE5vdGlmaWNhdGlvblByb2dyZXNzQmFyQ29tcG9uZW50LFxuICAgIE5vdGlmaWNhdGlvblRlbXBsYXRlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVXBOb3RpZmljYXRpb25Nb2R1bGUge31cbiJdfQ==