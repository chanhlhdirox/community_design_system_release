import { NgModule } from '@angular/core';
import { UpHeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { UpTypographyModule } from '../typography/typography.module';
import { UpIconsModule } from '../icons/icons.module';
import { UpStepLabelComponent } from './components/step-label/step-label.component';
import { UpNavigateBackComponent } from './components/header/components/navigate-back.component';
import { PageHeaderBackNavigationDirective } from './components/header/directives/page-header-back-navigation.directive';
import { PageHeaderNavigationDirective } from './components/header/directives/page-header-navigation.directive';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { UpSumLabelComponent } from './components/sums/sum-label.component';
import { SumsTypeProvider, SumsTypeFactory } from './components/sums/sum-label.constants';
import { PageHeaderIconsDirective } from './components/header/directives/page-header-icons.directive';
import { PageHeaderIconComponent } from './components/header/components/page-header-icon/page-header-icon.component';
import { UpSpacingModule } from '../spacing/spacing.module';
import * as i0 from "@angular/core";
export class PageHeaderModule {
}
PageHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: PageHeaderModule, declarations: [UpHeaderComponent,
        UpStepLabelComponent,
        UpNavigateBackComponent,
        PageHeaderBackNavigationDirective,
        PageHeaderNavigationDirective,
        HeaderNavigationComponent,
        UpSumLabelComponent,
        PageHeaderIconsDirective,
        PageHeaderIconComponent], imports: [CommonModule, UpTypographyModule, UpIconsModule, UpSpacingModule], exports: [UpHeaderComponent,
        UpStepLabelComponent,
        UpNavigateBackComponent,
        PageHeaderBackNavigationDirective,
        PageHeaderNavigationDirective,
        HeaderNavigationComponent,
        PageHeaderIconsDirective,
        PageHeaderIconComponent,
        UpSumLabelComponent] });
PageHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PageHeaderModule, providers: [
        {
            provide: SumsTypeProvider,
            useFactory: SumsTypeFactory
        }
    ], imports: [CommonModule, UpTypographyModule, UpIconsModule, UpSpacingModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PageHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UpHeaderComponent,
                        UpStepLabelComponent,
                        UpNavigateBackComponent,
                        PageHeaderBackNavigationDirective,
                        PageHeaderNavigationDirective,
                        HeaderNavigationComponent,
                        UpSumLabelComponent,
                        PageHeaderIconsDirective,
                        PageHeaderIconComponent
                    ],
                    imports: [CommonModule, UpTypographyModule, UpIconsModule, UpSpacingModule],
                    providers: [
                        {
                            provide: SumsTypeProvider,
                            useFactory: SumsTypeFactory
                        }
                    ],
                    exports: [
                        UpHeaderComponent,
                        UpStepLabelComponent,
                        UpNavigateBackComponent,
                        PageHeaderBackNavigationDirective,
                        PageHeaderNavigationDirective,
                        HeaderNavigationComponent,
                        PageHeaderIconsDirective,
                        PageHeaderIconComponent,
                        UpSumLabelComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUNySCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBaUM1RCxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBN0J6QixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLHVCQUF1QixhQUVmLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxhQVF4RSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjs4R0FHVixnQkFBZ0IsYUFsQmhCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFVBQVUsRUFBRSxlQUFlO1NBQzVCO0tBQ0YsWUFOUyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGVBQWU7MkZBbUIvRCxnQkFBZ0I7a0JBL0I1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixpQ0FBaUM7d0JBQ2pDLDZCQUE2Qjt3QkFDN0IseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztvQkFDM0UsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFVBQVUsRUFBRSxlQUFlO3lCQUM1QjtxQkFDRjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsaUNBQWlDO3dCQUNqQyw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFVwVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUnO1xuaW1wb3J0IHsgVXBJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL2ljb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBVcFN0ZXBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdGVwLWxhYmVsL3N0ZXAtbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVwTmF2aWdhdGVCYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9jb21wb25lbnRzL25hdmlnYXRlLWJhY2suY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VIZWFkZXJCYWNrTmF2aWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvZGlyZWN0aXZlcy9wYWdlLWhlYWRlci1iYWNrLW5hdmlnYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL3BhZ2UtaGVhZGVyLW5hdmlnYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEhlYWRlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLW5hdmlnYXRpb24vaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFVwU3VtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3Vtcy9zdW0tbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN1bXNUeXBlUHJvdmlkZXIsIFN1bXNUeXBlRmFjdG9yeSB9IGZyb20gJy4vY29tcG9uZW50cy9zdW1zL3N1bS1sYWJlbC5jb25zdGFudHMnO1xuaW1wb3J0IHsgUGFnZUhlYWRlckljb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9kaXJlY3RpdmVzL3BhZ2UtaGVhZGVyLWljb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQYWdlSGVhZGVySWNvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvY29tcG9uZW50cy9wYWdlLWhlYWRlci1pY29uL3BhZ2UtaGVhZGVyLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFVwU3BhY2luZ01vZHVsZSB9IGZyb20gJy4uL3NwYWNpbmcvc3BhY2luZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBVcEhlYWRlckNvbXBvbmVudCxcbiAgICBVcFN0ZXBMYWJlbENvbXBvbmVudCxcbiAgICBVcE5hdmlnYXRlQmFja0NvbXBvbmVudCxcbiAgICBQYWdlSGVhZGVyQmFja05hdmlnYXRpb25EaXJlY3RpdmUsXG4gICAgUGFnZUhlYWRlck5hdmlnYXRpb25EaXJlY3RpdmUsXG4gICAgSGVhZGVyTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBVcFN1bUxhYmVsQ29tcG9uZW50LFxuICAgIFBhZ2VIZWFkZXJJY29uc0RpcmVjdGl2ZSxcbiAgICBQYWdlSGVhZGVySWNvbkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBVcFR5cG9ncmFwaHlNb2R1bGUsIFVwSWNvbnNNb2R1bGUsIFVwU3BhY2luZ01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFN1bXNUeXBlUHJvdmlkZXIsXG4gICAgICB1c2VGYWN0b3J5OiBTdW1zVHlwZUZhY3RvcnlcbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBVcEhlYWRlckNvbXBvbmVudCxcbiAgICBVcFN0ZXBMYWJlbENvbXBvbmVudCxcbiAgICBVcE5hdmlnYXRlQmFja0NvbXBvbmVudCxcbiAgICBQYWdlSGVhZGVyQmFja05hdmlnYXRpb25EaXJlY3RpdmUsXG4gICAgUGFnZUhlYWRlck5hdmlnYXRpb25EaXJlY3RpdmUsXG4gICAgSGVhZGVyTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBQYWdlSGVhZGVySWNvbnNEaXJlY3RpdmUsXG4gICAgUGFnZUhlYWRlckljb25Db21wb25lbnQsXG4gICAgVXBTdW1MYWJlbENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJNb2R1bGUge31cbiJdfQ==