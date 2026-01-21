import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpTypographyModule } from '../typography/typography.module';
import { UpFloatingCardComponent } from './floating-card.component';
import { FLOATING_CARD_TOKEN } from './constants';
import * as i0 from "@angular/core";
export class UpFloatingCardModule {
}
UpFloatingCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpFloatingCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpFloatingCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpFloatingCardModule, declarations: [UpFloatingCardComponent], imports: [CommonModule, UpTypographyModule], exports: [UpFloatingCardComponent] });
UpFloatingCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpFloatingCardModule, providers: [
        {
            provide: FLOATING_CARD_TOKEN,
            useValue: null
        }
    ], imports: [CommonModule, UpTypographyModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpFloatingCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [UpFloatingCardComponent],
                    imports: [CommonModule, UpTypographyModule],
                    exports: [UpFloatingCardComponent],
                    providers: [
                        {
                            provide: FLOATING_CARD_TOKEN,
                            useValue: null
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2Zsb2F0aW5nLWNhcmQvZmxvYXRpbmctY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDOztBQWFsRCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBVmhCLHVCQUF1QixhQUM1QixZQUFZLEVBQUUsa0JBQWtCLGFBQ2hDLHVCQUF1QjtrSEFRdEIsb0JBQW9CLGFBUHBCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRixZQVBTLFlBQVksRUFBRSxrQkFBa0I7MkZBUy9CLG9CQUFvQjtrQkFYaEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDO29CQUMzQyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxtQkFBbUI7NEJBQzVCLFFBQVEsRUFBRSxJQUFJO3lCQUNmO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFVwVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUnO1xuaW1wb3J0IHsgVXBGbG9hdGluZ0NhcmRDb21wb25lbnQgfSBmcm9tICcuL2Zsb2F0aW5nLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEZMT0FUSU5HX0NBUkRfVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1VwRmxvYXRpbmdDYXJkQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVXBUeXBvZ3JhcGh5TW9kdWxlXSxcbiAgZXhwb3J0czogW1VwRmxvYXRpbmdDYXJkQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogRkxPQVRJTkdfQ0FSRF9UT0tFTixcbiAgICAgIHVzZVZhbHVlOiBudWxsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFVwRmxvYXRpbmdDYXJkTW9kdWxlIHt9XG4iXX0=