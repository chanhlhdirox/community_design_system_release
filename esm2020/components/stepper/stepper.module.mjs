import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepComponent } from './components/step/step.component';
import { UpTypographyModule } from '../typography/typography.module';
import { UpIconsModule } from '../icons/icons.module';
import { UpSpacingModule } from '../spacing/spacing.module';
import * as i0 from "@angular/core";
export class UpStepperModule {
}
UpStepperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpStepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpStepperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpStepperModule, declarations: [StepperComponent,
        StepComponent], imports: [UpIconsModule,
        CommonModule,
        UpSpacingModule,
        UpTypographyModule], exports: [StepperComponent,
        StepComponent] });
UpStepperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpStepperModule, imports: [UpIconsModule,
        CommonModule,
        UpSpacingModule,
        UpTypographyModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpStepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        UpIconsModule,
                        CommonModule,
                        UpSpacingModule,
                        UpTypographyModule
                    ],
                    declarations: [
                        StepperComponent,
                        StepComponent,
                    ],
                    exports: [
                        StepperComponent,
                        StepComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBa0I1RCxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQVJ4QixnQkFBZ0I7UUFDaEIsYUFBYSxhQVBiLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQixhQU9sQixnQkFBZ0I7UUFDaEIsYUFBYTs2R0FHSixlQUFlLFlBZHhCLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjsyRkFXVCxlQUFlO2tCQWhCM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGVBQWU7d0JBQ2Ysa0JBQWtCO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGFBQWE7cUJBQ2Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXAvc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSAnLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZSc7XG5pbXBvcnQgeyBVcEljb25zTW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMvaWNvbnMubW9kdWxlJztcbmltcG9ydCB7IFVwU3BhY2luZ01vZHVsZSB9IGZyb20gJy4uL3NwYWNpbmcvc3BhY2luZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVXBJY29uc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVXBTcGFjaW5nTW9kdWxlLFxuICAgIFVwVHlwb2dyYXBoeU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdGVwcGVyQ29tcG9uZW50LFxuICAgIFN0ZXBDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTdGVwcGVyQ29tcG9uZW50LFxuICAgIFN0ZXBDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBVcFN0ZXBwZXJNb2R1bGUgeyB9XG4iXX0=