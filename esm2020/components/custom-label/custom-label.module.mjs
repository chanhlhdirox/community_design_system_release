import { NgModule } from '@angular/core';
import { UpCustomLabelComponent } from './custom-label.component';
import { CommonModule } from '@angular/common';
import { UpTypographyModule } from '../typography/typography.module';
import { CustomLabelTypesFactory, CustomLabelTypesProvider } from './custom-label.constants';
import * as i0 from "@angular/core";
export class UpCustomLabelModule {
}
UpCustomLabelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpCustomLabelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpCustomLabelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpCustomLabelModule, declarations: [UpCustomLabelComponent], imports: [CommonModule, UpTypographyModule], exports: [UpCustomLabelComponent] });
UpCustomLabelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpCustomLabelModule, providers: [
        {
            provide: CustomLabelTypesProvider,
            useFactory: CustomLabelTypesFactory
        }
    ], imports: [CommonModule, UpTypographyModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpCustomLabelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, UpTypographyModule],
                    declarations: [UpCustomLabelComponent],
                    providers: [
                        {
                            provide: CustomLabelTypesProvider,
                            useFactory: CustomLabelTypesFactory
                        }
                    ],
                    exports: [UpCustomLabelComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxhYmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvY3VzdG9tLWxhYmVsL2N1c3RvbS1sYWJlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBYTdGLE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkFUZixzQkFBc0IsYUFEM0IsWUFBWSxFQUFFLGtCQUFrQixhQVFoQyxzQkFBc0I7aUhBRXJCLG1CQUFtQixhQVJuQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxVQUFVLEVBQUUsdUJBQXVCO1NBQ3BDO0tBQ0YsWUFQUyxZQUFZLEVBQUUsa0JBQWtCOzJGQVUvQixtQkFBbUI7a0JBWC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDO29CQUMzQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDdEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSx3QkFBd0I7NEJBQ2pDLFVBQVUsRUFBRSx1QkFBdUI7eUJBQ3BDO3FCQUNGO29CQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcEN1c3RvbUxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBVcFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlJztcbmltcG9ydCB7IEN1c3RvbUxhYmVsVHlwZXNGYWN0b3J5LCBDdXN0b21MYWJlbFR5cGVzUHJvdmlkZXIgfSBmcm9tICcuL2N1c3RvbS1sYWJlbC5jb25zdGFudHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBVcFR5cG9ncmFwaHlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtVcEN1c3RvbUxhYmVsQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ3VzdG9tTGFiZWxUeXBlc1Byb3ZpZGVyLFxuICAgICAgdXNlRmFjdG9yeTogQ3VzdG9tTGFiZWxUeXBlc0ZhY3RvcnlcbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IFtVcEN1c3RvbUxhYmVsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBVcEN1c3RvbUxhYmVsTW9kdWxlIHt9XG4iXX0=