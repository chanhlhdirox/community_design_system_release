import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTitleDirective, UpTabComponent } from './up-tab/tab.component';
import { UpTabsComponent } from './up-tabs-component/tabs.component';
import { UpBadgeModule } from '../badge/badge.module';
import { UpIconsModule } from '../icons/icons.module';
import { TabsLevelFactory, TabsLevelTypesProvider } from './up-tabs-component/tabs.constants';
import * as i0 from "@angular/core";
export class TabsModule {
}
TabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: TabsModule, declarations: [UpTabsComponent, UpTabComponent, TabTitleDirective], imports: [CommonModule, UpBadgeModule, UpIconsModule], exports: [UpTabsComponent, UpTabComponent, TabTitleDirective] });
TabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabsModule, providers: [{ provide: TabsLevelTypesProvider, useFactory: TabsLevelFactory }], imports: [CommonModule, UpBadgeModule, UpIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [UpTabsComponent, UpTabComponent, TabTitleDirective],
                    imports: [CommonModule, UpBadgeModule, UpIconsModule],
                    exports: [UpTabsComponent, UpTabComponent, TabTitleDirective],
                    providers: [{ provide: TabsLevelTypesProvider, useFactory: TabsLevelFactory }]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RhYnMvdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQVE5RixNQUFNLE9BQU8sVUFBVTs7dUdBQVYsVUFBVTt3R0FBVixVQUFVLGlCQUxOLGVBQWUsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLGFBQ3ZELFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxhQUMxQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGlCQUFpQjt3R0FHakQsVUFBVSxhQUZWLENBQUMsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLENBQUMsWUFGcEUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhOzJGQUl6QyxVQUFVO2tCQU50QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7b0JBQ2xFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO29CQUNyRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDO29CQUM3RCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDL0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhYlRpdGxlRGlyZWN0aXZlLCBVcFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdXAtdGFiL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi91cC10YWJzLWNvbXBvbmVudC90YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcEJhZGdlTW9kdWxlIH0gZnJvbSAnLi4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcbmltcG9ydCB7IFVwSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9pY29ucy5tb2R1bGUnO1xuaW1wb3J0IHsgVGFic0xldmVsRmFjdG9yeSwgVGFic0xldmVsVHlwZXNQcm92aWRlciB9IGZyb20gJy4vdXAtdGFicy1jb21wb25lbnQvdGFicy5jb25zdGFudHMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtVcFRhYnNDb21wb25lbnQsIFVwVGFiQ29tcG9uZW50LCBUYWJUaXRsZURpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFVwQmFkZ2VNb2R1bGUsIFVwSWNvbnNNb2R1bGVdLFxuICBleHBvcnRzOiBbVXBUYWJzQ29tcG9uZW50LCBVcFRhYkNvbXBvbmVudCwgVGFiVGl0bGVEaXJlY3RpdmVdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFRhYnNMZXZlbFR5cGVzUHJvdmlkZXIsIHVzZUZhY3Rvcnk6IFRhYnNMZXZlbEZhY3RvcnkgfV1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7fVxuIl19