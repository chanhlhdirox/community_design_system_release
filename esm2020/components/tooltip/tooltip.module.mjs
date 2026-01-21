import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { WindowProvider } from '../../src/lib/providers/window.provider';
import { UpTooltipDirective } from './tooltip.directive';
import { UpTooltipComponent } from './tooltip.component';
import { UpTypographyModule } from '../typography/typography.module';
import { TooltipConstantsFactory, TooltipConstantsProvider } from './tooltip.constants';
import { NavigatorProvider } from '../../src/lib/providers/navigator.provider';
import * as i0 from "@angular/core";
export class UpTooltipModule {
}
UpTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipModule, declarations: [UpTooltipDirective, UpTooltipComponent], imports: [CommonModule, OverlayModule, UpTypographyModule], exports: [UpTooltipDirective] });
UpTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipModule, providers: [
        { provide: TooltipConstantsProvider, useFactory: TooltipConstantsFactory },
        { provide: WindowProvider, useValue: window },
        { provide: NavigatorProvider, useValue: navigator }
    ], imports: [CommonModule, OverlayModule, UpTypographyModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [UpTooltipDirective, UpTooltipComponent],
                    imports: [CommonModule, OverlayModule, UpTypographyModule],
                    exports: [UpTooltipDirective],
                    providers: [
                        { provide: TooltipConstantsProvider, useFactory: TooltipConstantsFactory },
                        { provide: WindowProvider, useValue: window },
                        { provide: NavigatorProvider, useValue: navigator }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFZL0UsTUFBTSxPQUFPLGVBQWU7OzRHQUFmLGVBQWU7NkdBQWYsZUFBZSxpQkFUVCxrQkFBa0IsRUFBRSxrQkFBa0IsYUFDM0MsWUFBWSxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsYUFDL0Msa0JBQWtCOzZHQU9uQixlQUFlLGFBTmI7UUFDUCxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUU7UUFDMUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7UUFDN0MsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtLQUN0RCxZQU5TLFlBQVksRUFBRSxhQUFhLEVBQUUsa0JBQWtCOzJGQVFoRCxlQUFlO2tCQVYzQixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO29CQUN0RCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixDQUFDO29CQUMxRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0IsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRTt3QkFDMUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7d0JBQzdDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7cUJBQ3REO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgV2luZG93UHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zcmMvbGliL3Byb3ZpZGVycy93aW5kb3cucHJvdmlkZXInO1xuaW1wb3J0IHsgVXBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBVcFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IFVwVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gJy4uL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnN0YW50c0ZhY3RvcnksIFRvb2x0aXBDb25zdGFudHNQcm92aWRlciB9IGZyb20gJy4vdG9vbHRpcC5jb25zdGFudHMnO1xuaW1wb3J0IHsgTmF2aWdhdG9yUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9zcmMvbGliL3Byb3ZpZGVycy9uYXZpZ2F0b3IucHJvdmlkZXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1VwVG9vbHRpcERpcmVjdGl2ZSwgVXBUb29sdGlwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBVcFR5cG9ncmFwaHlNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtVcFRvb2x0aXBEaXJlY3RpdmVdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFRvb2x0aXBDb25zdGFudHNQcm92aWRlciwgdXNlRmFjdG9yeTogVG9vbHRpcENvbnN0YW50c0ZhY3RvcnkgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaW5kb3dQcm92aWRlciwgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICB7IHByb3ZpZGU6IE5hdmlnYXRvclByb3ZpZGVyLCB1c2VWYWx1ZTogbmF2aWdhdG9yIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFVwVG9vbHRpcE1vZHVsZSB7fVxuIl19