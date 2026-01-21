import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpLabelComponent } from './up-label/label.component';
import { UpInputGroupComponent } from './input-group/input-group.component';
import { FormFieldContainerComponent } from './form-field-container/form-field-container.component';
import { InputDirective } from './input/input.directive';
import { PrefixDirective } from './prefix/prefix.directive';
import { SuffixDirective } from './suffix/suffix.directive';
import { UpSwitchComponent } from './up-switch/up-switch.component';
import { UpCheckboxComponent } from './up-checkbox/up-checkbox.component';
import { UpRadioComponent } from './up-radio/up-radio.component';
import { NgSelectModule, NgSelectComponent } from '@ng-select/ng-select';
import { UpIconsModule } from '../icons/icons.module';
import { UpTypographyModule } from '../typography/typography.module';
import { UpTooltipModule } from '../tooltip/tooltip.module';
import { PercentageInputMaskDirective } from './percentage-input-mask.directive';
import { NumericalValueInputMaskDirective } from './numerical-value-input-mask.directive';
import { UpCheckboxListComponent } from './up-checkbox-list/up-checkbox-list.component';
import { UpCheckboxListItemComponent } from './up-checkbox-list/up-checkbox-list-item/up-checkbox-list-item.component';
import * as i0 from "@angular/core";
export class UpFormsModule {
}
UpFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpFormsModule, declarations: [UpLabelComponent,
        UpInputGroupComponent,
        FormFieldContainerComponent,
        InputDirective,
        PrefixDirective,
        SuffixDirective,
        UpCheckboxComponent,
        UpRadioComponent,
        UpSwitchComponent,
        UpCheckboxComponent,
        PercentageInputMaskDirective,
        NumericalValueInputMaskDirective,
        UpCheckboxListComponent,
        UpCheckboxListItemComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        UpIconsModule,
        UpTypographyModule,
        UpTooltipModule], exports: [UpLabelComponent,
        UpInputGroupComponent,
        FormFieldContainerComponent,
        InputDirective,
        PrefixDirective,
        SuffixDirective,
        UpRadioComponent,
        UpCheckboxComponent,
        UpSwitchComponent,
        NgSelectComponent,
        NumericalValueInputMaskDirective,
        PercentageInputMaskDirective,
        UpCheckboxListComponent,
        UpCheckboxListItemComponent] });
UpFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpFormsModule, imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        UpIconsModule,
        UpTypographyModule,
        UpTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgSelectModule,
                        UpIconsModule,
                        UpTypographyModule,
                        UpTooltipModule
                    ],
                    declarations: [
                        UpLabelComponent,
                        UpInputGroupComponent,
                        FormFieldContainerComponent,
                        InputDirective,
                        PrefixDirective,
                        SuffixDirective,
                        UpCheckboxComponent,
                        UpRadioComponent,
                        UpSwitchComponent,
                        UpCheckboxComponent,
                        PercentageInputMaskDirective,
                        NumericalValueInputMaskDirective,
                        UpCheckboxListComponent,
                        UpCheckboxListItemComponent
                    ],
                    exports: [
                        UpLabelComponent,
                        UpInputGroupComponent,
                        FormFieldContainerComponent,
                        InputDirective,
                        PrefixDirective,
                        SuffixDirective,
                        UpRadioComponent,
                        UpCheckboxComponent,
                        UpSwitchComponent,
                        NgSelectComponent,
                        NumericalValueInputMaskDirective,
                        PercentageInputMaskDirective,
                        UpCheckboxListComponent,
                        UpCheckboxListItemComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9mb3Jtcy9mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDBFQUEwRSxDQUFDOztBQTZDdkgsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFoQ3RCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLHVCQUF1QjtRQUN2QiwyQkFBMkIsYUF0QjNCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGVBQWUsYUFtQmYsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGdDQUFnQztRQUNoQyw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjsyR0FHbEIsYUFBYSxZQXpDdEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZUFBZTsyRkFtQ04sYUFBYTtrQkEzQ3pCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRTt3QkFDWixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsMkJBQTJCO3dCQUMzQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQiwyQkFBMkI7d0JBQzNCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsZ0NBQWdDO3dCQUNoQyw0QkFBNEI7d0JBQzVCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3FCQUM1QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVcExhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi91cC1sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBJbnB1dEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1ncm91cC9pbnB1dC1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUZpZWxkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWZpZWxkLWNvbnRhaW5lci9mb3JtLWZpZWxkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0L2lucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcmVmaXhEaXJlY3RpdmUgfSBmcm9tICcuL3ByZWZpeC9wcmVmaXguZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1ZmZpeERpcmVjdGl2ZSB9IGZyb20gJy4vc3VmZml4L3N1ZmZpeC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVXBTd2l0Y2hDb21wb25lbnQgfSBmcm9tICcuL3VwLXN3aXRjaC91cC1zd2l0Y2guY29tcG9uZW50JztcbmltcG9ydCB7IFVwQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL3VwLWNoZWNrYm94L3VwLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi91cC1yYWRpby91cC1yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUsIE5nU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgVXBJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL2ljb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBVcFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlJztcbmltcG9ydCB7IFVwVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgUGVyY2VudGFnZUlucHV0TWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vcGVyY2VudGFnZS1pbnB1dC1tYXNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOdW1lcmljYWxWYWx1ZUlucHV0TWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbnVtZXJpY2FsLXZhbHVlLWlucHV0LW1hc2suZGlyZWN0aXZlJztcbmltcG9ydCB7IFVwQ2hlY2tib3hMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi91cC1jaGVja2JveC1saXN0L3VwLWNoZWNrYm94LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFVwQ2hlY2tib3hMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdXAtY2hlY2tib3gtbGlzdC91cC1jaGVja2JveC1saXN0LWl0ZW0vdXAtY2hlY2tib3gtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBVcEljb25zTW9kdWxlLFxuICAgIFVwVHlwb2dyYXBoeU1vZHVsZSxcbiAgICBVcFRvb2x0aXBNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVXBMYWJlbENvbXBvbmVudCxcbiAgICBVcElucHV0R3JvdXBDb21wb25lbnQsXG4gICAgRm9ybUZpZWxkQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIElucHV0RGlyZWN0aXZlLFxuICAgIFByZWZpeERpcmVjdGl2ZSxcbiAgICBTdWZmaXhEaXJlY3RpdmUsXG4gICAgVXBDaGVja2JveENvbXBvbmVudCxcbiAgICBVcFJhZGlvQ29tcG9uZW50LFxuICAgIFVwU3dpdGNoQ29tcG9uZW50LFxuICAgIFVwQ2hlY2tib3hDb21wb25lbnQsXG4gICAgUGVyY2VudGFnZUlucHV0TWFza0RpcmVjdGl2ZSxcbiAgICBOdW1lcmljYWxWYWx1ZUlucHV0TWFza0RpcmVjdGl2ZSxcbiAgICBVcENoZWNrYm94TGlzdENvbXBvbmVudCxcbiAgICBVcENoZWNrYm94TGlzdEl0ZW1Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFVwTGFiZWxDb21wb25lbnQsXG4gICAgVXBJbnB1dEdyb3VwQ29tcG9uZW50LFxuICAgIEZvcm1GaWVsZENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBJbnB1dERpcmVjdGl2ZSxcbiAgICBQcmVmaXhEaXJlY3RpdmUsXG4gICAgU3VmZml4RGlyZWN0aXZlLFxuICAgIFVwUmFkaW9Db21wb25lbnQsXG4gICAgVXBDaGVja2JveENvbXBvbmVudCxcbiAgICBVcFN3aXRjaENvbXBvbmVudCxcbiAgICBOZ1NlbGVjdENvbXBvbmVudCxcbiAgICBOdW1lcmljYWxWYWx1ZUlucHV0TWFza0RpcmVjdGl2ZSxcbiAgICBQZXJjZW50YWdlSW5wdXRNYXNrRGlyZWN0aXZlLFxuICAgIFVwQ2hlY2tib3hMaXN0Q29tcG9uZW50LFxuICAgIFVwQ2hlY2tib3hMaXN0SXRlbUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFVwRm9ybXNNb2R1bGUge31cbiJdfQ==