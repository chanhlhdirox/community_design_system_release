import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpIconService } from './icon.service';
import { UpIconDirective } from './icon.directive';
import { flagIcons } from './utils/flag-icons';
import { designSystemIcons } from './utils/design-system-icons';
import * as i0 from "@angular/core";
import * as i1 from "./icon.service";
export class UpIconsModule {
    constructor(iconService) {
        this.iconService = iconService;
        this.iconService.registerIcons([...flagIcons, ...designSystemIcons]);
    }
}
UpIconsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconsModule, deps: [{ token: UpIconService }], target: i0.ɵɵFactoryTarget.NgModule });
UpIconsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpIconsModule, declarations: [UpIconDirective], imports: [CommonModule], exports: [UpIconDirective] });
UpIconsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconsModule, providers: [UpIconService], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [UpIconDirective],
                    providers: [UpIconService],
                    exports: [UpIconDirective]
                }]
        }], ctorParameters: function () { return [{ type: i1.UpIconService, decorators: [{
                    type: Inject,
                    args: [UpIconService]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9pY29ucy9pY29ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFRaEUsTUFBTSxPQUFPLGFBQWE7SUFDeEIsWUFBMEMsV0FBMEI7UUFBMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzswR0FIVSxhQUFhLGtCQUNKLGFBQWE7MkdBRHRCLGFBQWEsaUJBSlQsZUFBZSxhQURwQixZQUFZLGFBR1osZUFBZTsyR0FFZCxhQUFhLGFBSGIsQ0FBQyxhQUFhLENBQUMsWUFGaEIsWUFBWTsyRkFLWCxhQUFhO2tCQU56QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0I7OzBCQUVjLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBVcEljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBJY29uRGlyZWN0aXZlIH0gZnJvbSAnLi9pY29uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBmbGFnSWNvbnMgfSBmcm9tICcuL3V0aWxzL2ZsYWctaWNvbnMnO1xuaW1wb3J0IHsgZGVzaWduU3lzdGVtSWNvbnMgfSBmcm9tICcuL3V0aWxzL2Rlc2lnbi1zeXN0ZW0taWNvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVXBJY29uRGlyZWN0aXZlXSxcbiAgcHJvdmlkZXJzOiBbVXBJY29uU2VydmljZV0sXG4gIGV4cG9ydHM6IFtVcEljb25EaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFVwSWNvbnNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KFVwSWNvblNlcnZpY2UpIHB1YmxpYyBpY29uU2VydmljZTogVXBJY29uU2VydmljZSkge1xuICAgIHRoaXMuaWNvblNlcnZpY2UucmVnaXN0ZXJJY29ucyhbLi4uZmxhZ0ljb25zLCAuLi5kZXNpZ25TeXN0ZW1JY29uc10pO1xuICB9XG59XG4iXX0=