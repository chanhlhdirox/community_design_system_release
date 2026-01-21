import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, TableOptionsComponent, TableFiltersComponent, TableCustomOptionComponent, TableThComponent, TableLoadingIndicatorComponent } from './components';
import { TableBodyDirective, TableFilterTemplateDirective, TableHeadDirective, TableRowDirective, TableSortDirective, TableTdDirective, TableThLabelDirective, TableThSubLabelDirective, TablePaginationDirective, TableSubHeadDirective, } from './directives';
import { UpButtonModule } from '../button/button.module';
import { UpIconsModule } from '../icons/icons.module';
import { TableCheckboxDirective } from './directives/table-checkbox.directive';
import { RESIZE_OBSERVABLE_PROVIDERS } from './services';
import { UpPopOutModule } from '../pop-out/pop-out.module';
import { WINDOW_PROVIDERS } from '../../providers/window.provider';
import * as i0 from "@angular/core";
export class UpTableModule {
}
UpTableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpTableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpTableModule, declarations: [TableComponent,
        TableOptionsComponent,
        TableFiltersComponent,
        TableBodyDirective,
        TableHeadDirective,
        TableRowDirective,
        TableTdDirective,
        TableThComponent,
        TableCheckboxDirective,
        TableThLabelDirective,
        TableThSubLabelDirective,
        TableCustomOptionComponent,
        TableSortDirective,
        TableFilterTemplateDirective,
        TablePaginationDirective,
        TableLoadingIndicatorComponent,
        TableSubHeadDirective], imports: [CommonModule, UpButtonModule, UpIconsModule, UpPopOutModule], exports: [TableComponent,
        TableOptionsComponent,
        TableFiltersComponent,
        TableBodyDirective,
        TableHeadDirective,
        TableRowDirective,
        TableTdDirective,
        TableThComponent,
        TableThLabelDirective,
        TableThSubLabelDirective,
        TableCheckboxDirective,
        TableCustomOptionComponent,
        TableSortDirective,
        TableFilterTemplateDirective,
        TablePaginationDirective,
        TableLoadingIndicatorComponent,
        TableSubHeadDirective] });
UpTableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTableModule, providers: [WINDOW_PROVIDERS, RESIZE_OBSERVABLE_PROVIDERS], imports: [CommonModule, UpButtonModule, UpIconsModule, UpPopOutModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, UpButtonModule, UpIconsModule, UpPopOutModule],
                    declarations: [
                        TableComponent,
                        TableOptionsComponent,
                        TableFiltersComponent,
                        TableBodyDirective,
                        TableHeadDirective,
                        TableRowDirective,
                        TableTdDirective,
                        TableThComponent,
                        TableCheckboxDirective,
                        TableThLabelDirective,
                        TableThSubLabelDirective,
                        TableCustomOptionComponent,
                        TableSortDirective,
                        TableFilterTemplateDirective,
                        TablePaginationDirective,
                        TableLoadingIndicatorComponent,
                        TableSubHeadDirective
                    ],
                    exports: [
                        TableComponent,
                        TableOptionsComponent,
                        TableFiltersComponent,
                        TableBodyDirective,
                        TableHeadDirective,
                        TableRowDirective,
                        TableTdDirective,
                        TableThComponent,
                        TableThLabelDirective,
                        TableThSubLabelDirective,
                        TableCheckboxDirective,
                        TableCustomOptionComponent,
                        TableSortDirective,
                        TableFilterTemplateDirective,
                        TablePaginationDirective,
                        TableLoadingIndicatorComponent,
                        TableSubHeadDirective
                    ],
                    providers: [WINDOW_PROVIDERS, RESIZE_OBSERVABLE_PROVIDERS]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGNBQWMsRUFDZCxxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLDBCQUEwQixFQUMxQixnQkFBZ0IsRUFDaEIsOEJBQThCLEVBQy9CLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsNEJBQTRCLEVBQzVCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4QixxQkFBcUIsR0FDdEIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQTRDbkUsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkF2Q3RCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5QixxQkFBcUIsYUFsQmIsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsY0FBYyxhQXFCbkUsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLHFCQUFxQjsyR0FJWixhQUFhLGFBRmIsQ0FBQyxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxZQXZDaEQsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsY0FBYzsyRkF5QzFELGFBQWE7a0JBMUN6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztvQkFDdEUsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QiwwQkFBMEI7d0JBQzFCLGtCQUFrQjt3QkFDbEIsNEJBQTRCO3dCQUM1Qix3QkFBd0I7d0JBQ3hCLDhCQUE4Qjt3QkFDOUIscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFDMUIsa0JBQWtCO3dCQUNsQiw0QkFBNEI7d0JBQzVCLHdCQUF3Qjt3QkFDeEIsOEJBQThCO3dCQUM5QixxQkFBcUI7cUJBQ3RCO29CQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDO2lCQUMzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgVGFibGVDb21wb25lbnQsXG4gIFRhYmxlT3B0aW9uc0NvbXBvbmVudCxcbiAgVGFibGVGaWx0ZXJzQ29tcG9uZW50LFxuICBUYWJsZUN1c3RvbU9wdGlvbkNvbXBvbmVudCxcbiAgVGFibGVUaENvbXBvbmVudCxcbiAgVGFibGVMb2FkaW5nSW5kaWNhdG9yQ29tcG9uZW50XG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBUYWJsZUJvZHlEaXJlY3RpdmUsXG4gIFRhYmxlRmlsdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gIFRhYmxlSGVhZERpcmVjdGl2ZSxcbiAgVGFibGVSb3dEaXJlY3RpdmUsXG4gIFRhYmxlU29ydERpcmVjdGl2ZSxcbiAgVGFibGVUZERpcmVjdGl2ZSxcbiAgVGFibGVUaExhYmVsRGlyZWN0aXZlLFxuICBUYWJsZVRoU3ViTGFiZWxEaXJlY3RpdmUsXG4gIFRhYmxlUGFnaW5hdGlvbkRpcmVjdGl2ZSxcbiAgVGFibGVTdWJIZWFkRGlyZWN0aXZlLFxufSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgVXBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBVcEljb25zTW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMvaWNvbnMubW9kdWxlJztcbmltcG9ydCB7IFRhYmxlQ2hlY2tib3hEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGFibGUtY2hlY2tib3guZGlyZWN0aXZlJztcbmltcG9ydCB7IFJFU0laRV9PQlNFUlZBQkxFX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMnO1xuaW1wb3J0IHsgVXBQb3BPdXRNb2R1bGUgfSBmcm9tICcuLi9wb3Atb3V0L3BvcC1vdXQubW9kdWxlJztcbmltcG9ydCB7IFdJTkRPV19QUk9WSURFUlMgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvd2luZG93LnByb3ZpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVXBCdXR0b25Nb2R1bGUsIFVwSWNvbnNNb2R1bGUsIFVwUG9wT3V0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgVGFibGVPcHRpb25zQ29tcG9uZW50LFxuICAgIFRhYmxlRmlsdGVyc0NvbXBvbmVudCxcbiAgICBUYWJsZUJvZHlEaXJlY3RpdmUsXG4gICAgVGFibGVIZWFkRGlyZWN0aXZlLFxuICAgIFRhYmxlUm93RGlyZWN0aXZlLFxuICAgIFRhYmxlVGREaXJlY3RpdmUsXG4gICAgVGFibGVUaENvbXBvbmVudCxcbiAgICBUYWJsZUNoZWNrYm94RGlyZWN0aXZlLFxuICAgIFRhYmxlVGhMYWJlbERpcmVjdGl2ZSxcbiAgICBUYWJsZVRoU3ViTGFiZWxEaXJlY3RpdmUsXG4gICAgVGFibGVDdXN0b21PcHRpb25Db21wb25lbnQsXG4gICAgVGFibGVTb3J0RGlyZWN0aXZlLFxuICAgIFRhYmxlRmlsdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgVGFibGVQYWdpbmF0aW9uRGlyZWN0aXZlLFxuICAgIFRhYmxlTG9hZGluZ0luZGljYXRvckNvbXBvbmVudCxcbiAgICBUYWJsZVN1YkhlYWREaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIFRhYmxlT3B0aW9uc0NvbXBvbmVudCxcbiAgICBUYWJsZUZpbHRlcnNDb21wb25lbnQsXG4gICAgVGFibGVCb2R5RGlyZWN0aXZlLFxuICAgIFRhYmxlSGVhZERpcmVjdGl2ZSxcbiAgICBUYWJsZVJvd0RpcmVjdGl2ZSxcbiAgICBUYWJsZVRkRGlyZWN0aXZlLFxuICAgIFRhYmxlVGhDb21wb25lbnQsXG4gICAgVGFibGVUaExhYmVsRGlyZWN0aXZlLFxuICAgIFRhYmxlVGhTdWJMYWJlbERpcmVjdGl2ZSxcbiAgICBUYWJsZUNoZWNrYm94RGlyZWN0aXZlLFxuICAgIFRhYmxlQ3VzdG9tT3B0aW9uQ29tcG9uZW50LFxuICAgIFRhYmxlU29ydERpcmVjdGl2ZSxcbiAgICBUYWJsZUZpbHRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIFRhYmxlUGFnaW5hdGlvbkRpcmVjdGl2ZSxcbiAgICBUYWJsZUxvYWRpbmdJbmRpY2F0b3JDb21wb25lbnQsXG4gICAgVGFibGVTdWJIZWFkRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW1dJTkRPV19QUk9WSURFUlMsIFJFU0laRV9PQlNFUlZBQkxFX1BST1ZJREVSU11cbn0pXG5leHBvcnQgY2xhc3MgVXBUYWJsZU1vZHVsZSB7fVxuIl19