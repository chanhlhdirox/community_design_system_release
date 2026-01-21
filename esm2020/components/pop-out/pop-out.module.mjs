import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { UpPopOutTriggerDirective } from './pop-out-trigger.directive';
import { UpIconsModule } from '../icons/icons.module';
import { FLOATING_CARD_TOKEN } from '../floating-card/constants';
import { UpFloatingCardModule } from '../floating-card/floating-card.module';
import { UpPopOutOptionComponent } from './pop-out-option/pop-out-option.component';
import { UpPopOutSeparatorComponent } from './pop-out-separator/pop-out-separator.component';
import { UpButtonModule } from '../button/button.module';
import * as i0 from "@angular/core";
export class UpPopOutModule {
}
UpPopOutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpPopOutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutModule, declarations: [UpPopOutTriggerDirective, UpPopOutOptionComponent, UpPopOutSeparatorComponent], imports: [OverlayModule,
        PortalModule,
        CommonModule,
        UpIconsModule,
        UpFloatingCardModule,
        UpButtonModule], exports: [UpPopOutTriggerDirective, UpPopOutOptionComponent, UpPopOutSeparatorComponent] });
UpPopOutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutModule, providers: [
        {
            provide: FLOATING_CARD_TOKEN,
            useValue: null
        }
    ], imports: [OverlayModule,
        PortalModule,
        CommonModule,
        UpIconsModule,
        UpFloatingCardModule,
        UpButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPopOutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [UpPopOutTriggerDirective, UpPopOutOptionComponent, UpPopOutSeparatorComponent],
                    imports: [
                        OverlayModule,
                        PortalModule,
                        CommonModule,
                        UpIconsModule,
                        UpFloatingCardModule,
                        UpButtonModule
                    ],
                    exports: [UpPopOutTriggerDirective, UpPopOutOptionComponent, UpPopOutSeparatorComponent],
                    providers: [
                        {
                            provide: FLOATING_CARD_TOKEN,
                            useValue: null
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wLW91dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3BvcC1vdXQvcG9wLW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQW9CekQsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFqQlIsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLGFBRXhGLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsY0FBYyxhQUVSLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQjs0R0FROUUsY0FBYyxhQVBaO1FBQ1A7WUFDSSxPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO0tBQ0osWUFiRyxhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGNBQWM7MkZBVVQsY0FBYztrQkFsQjFCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUM7b0JBQzdGLE9BQU8sRUFBRTt3QkFDTCxhQUFhO3dCQUNiLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsY0FBYztxQkFDakI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUM7b0JBQ3hGLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsbUJBQW1COzRCQUM1QixRQUFRLEVBQUUsSUFBSTt5QkFDakI7cUJBQ0o7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgVXBQb3BPdXRUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9wb3Atb3V0LXRyaWdnZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVwSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9pY29ucy5tb2R1bGUnO1xuaW1wb3J0IHsgRkxPQVRJTkdfQ0FSRF9UT0tFTiB9IGZyb20gJy4uL2Zsb2F0aW5nLWNhcmQvY29uc3RhbnRzJztcbmltcG9ydCB7IFVwRmxvYXRpbmdDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmxvYXRpbmctY2FyZC9mbG9hdGluZy1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcEZsb2F0aW5nQ2FyZE1vZHVsZSB9IGZyb20gJy4uL2Zsb2F0aW5nLWNhcmQvZmxvYXRpbmctY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgVXBQb3BPdXRPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3BvcC1vdXQtb3B0aW9uL3BvcC1vdXQtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcFBvcE91dFNlcGFyYXRvckNvbXBvbmVudCB9IGZyb20gJy4vcG9wLW91dC1zZXBhcmF0b3IvcG9wLW91dC1zZXBhcmF0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFVwQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1VwUG9wT3V0VHJpZ2dlckRpcmVjdGl2ZSwgVXBQb3BPdXRPcHRpb25Db21wb25lbnQsIFVwUG9wT3V0U2VwYXJhdG9yQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgICAgIFBvcnRhbE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBVcEljb25zTW9kdWxlLFxuICAgICAgICBVcEZsb2F0aW5nQ2FyZE1vZHVsZSxcbiAgICAgICAgVXBCdXR0b25Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtVcFBvcE91dFRyaWdnZXJEaXJlY3RpdmUsIFVwUG9wT3V0T3B0aW9uQ29tcG9uZW50LCBVcFBvcE91dFNlcGFyYXRvckNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEZMT0FUSU5HX0NBUkRfVE9LRU4sXG4gICAgICAgICAgICB1c2VWYWx1ZTogbnVsbFxuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVcFBvcE91dE1vZHVsZSB7fVxuIl19