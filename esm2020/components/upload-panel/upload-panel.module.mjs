import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPanelComponent } from './upload-panel.component';
import { UploadItemComponent } from './components/upload-item/upload-item.component';
import { UpTypographyModule } from '../typography/typography.module';
import { UpIconsModule } from '../icons/icons.module';
import { UpButtonModule } from '../button/button.module';
import { UploadStatusProvider, UploadStatusFactory } from './upload-status.constants';
import { UploadProgressComponent } from './components/upload-progress/upload-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UploadPanelService } from './services/upload-panel.service';
import * as i0 from "@angular/core";
export class UploadPanelModule {
}
UploadPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UploadPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UploadPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UploadPanelModule, declarations: [UploadProgressComponent, UploadItemComponent, UploadPanelComponent], imports: [CommonModule,
        UpTypographyModule,
        UpIconsModule,
        UpButtonModule,
        NgCircleProgressModule], exports: [UploadProgressComponent, UploadItemComponent, UploadPanelComponent] });
UploadPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UploadPanelModule, providers: [
        {
            provide: UploadStatusProvider,
            useFactory: UploadStatusFactory
        },
        UploadPanelService
    ], imports: [CommonModule,
        UpTypographyModule,
        UpIconsModule,
        UpButtonModule,
        NgCircleProgressModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UploadPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        UpTypographyModule,
                        UpIconsModule,
                        UpButtonModule,
                        NgCircleProgressModule
                    ],
                    declarations: [UploadProgressComponent, UploadItemComponent, UploadPanelComponent],
                    providers: [
                        {
                            provide: UploadStatusProvider,
                            useFactory: UploadStatusFactory
                        },
                        UploadPanelService
                    ],
                    exports: [UploadProgressComponent, UploadItemComponent, UploadPanelComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdXBsb2FkLXBhbmVsL3VwbG9hZC1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFvQnJFLE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFWYix1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsYUFOL0UsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYztRQUNkLHNCQUFzQixhQVVkLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQjsrR0FFakUsaUJBQWlCLGFBVGpCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsb0JBQW9CO1lBQzdCLFVBQVUsRUFBRSxtQkFBbUI7U0FDaEM7UUFDRCxrQkFBa0I7S0FDbkIsWUFiQyxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2Qsc0JBQXNCOzJGQVliLGlCQUFpQjtrQkFsQjdCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2Qsc0JBQXNCO3FCQUN2QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDbEYsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxvQkFBb0I7NEJBQzdCLFVBQVUsRUFBRSxtQkFBbUI7eUJBQ2hDO3dCQUNELGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUM7aUJBQzlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBVcGxvYWRQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGxvYWRJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwbG9hZC1pdGVtL3VwbG9hZC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlJztcbmltcG9ydCB7IFVwSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9pY29ucy5tb2R1bGUnO1xuaW1wb3J0IHsgVXBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBVcGxvYWRTdGF0dXNQcm92aWRlciwgVXBsb2FkU3RhdHVzRmFjdG9yeSB9IGZyb20gJy4vdXBsb2FkLXN0YXR1cy5jb25zdGFudHMnO1xuaW1wb3J0IHsgVXBsb2FkUHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXBsb2FkLXByb2dyZXNzL3VwbG9hZC1wcm9ncmVzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdDaXJjbGVQcm9ncmVzc01vZHVsZSB9IGZyb20gJ25nLWNpcmNsZS1wcm9ncmVzcyc7XG5pbXBvcnQgeyBVcGxvYWRQYW5lbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VwbG9hZC1wYW5lbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBVcFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgVXBJY29uc01vZHVsZSxcbiAgICBVcEJ1dHRvbk1vZHVsZSxcbiAgICBOZ0NpcmNsZVByb2dyZXNzTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VwbG9hZFByb2dyZXNzQ29tcG9uZW50LCBVcGxvYWRJdGVtQ29tcG9uZW50LCBVcGxvYWRQYW5lbENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFVwbG9hZFN0YXR1c1Byb3ZpZGVyLFxuICAgICAgdXNlRmFjdG9yeTogVXBsb2FkU3RhdHVzRmFjdG9yeVxuICAgIH0sXG4gICAgVXBsb2FkUGFuZWxTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtVcGxvYWRQcm9ncmVzc0NvbXBvbmVudCwgVXBsb2FkSXRlbUNvbXBvbmVudCwgVXBsb2FkUGFuZWxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFBhbmVsTW9kdWxlIHt9XG4iXX0=