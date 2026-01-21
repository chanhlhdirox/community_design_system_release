import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpIconsModule } from '../icons/icons.module';
import * as i0 from "@angular/core";
export class UpDrawerModule {
}
UpDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpDrawerModule, declarations: [DrawerComponent], imports: [CommonModule, OverlayModule, BrowserAnimationsModule, UpIconsModule], exports: [DrawerComponent] });
UpDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpDrawerModule, imports: [CommonModule, OverlayModule, BrowserAnimationsModule, UpIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, BrowserAnimationsModule, UpIconsModule],
                    declarations: [DrawerComponent],
                    exports: [DrawerComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBT3RELE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBSFIsZUFBZSxhQURwQixZQUFZLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGFBQWEsYUFFbkUsZUFBZTs0R0FFaEIsY0FBYyxZQUpiLFlBQVksRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsYUFBYTsyRkFJcEUsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGFBQWEsQ0FBQztvQkFDOUUsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL2RyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFVwSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9pY29ucy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBVcEljb25zTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEcmF3ZXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtEcmF3ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVwRHJhd2VyTW9kdWxlIHt9XG4iXX0=