import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPreviewComponent } from './components/pdf-preview/pdf-preview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpFormsModule } from '../forms/forms.module';
import { UpIconsModule } from '../icons/icons.module';
import { UpTypographyModule } from '../typography/typography.module';
import { UpPopOutModule } from '../pop-out/pop-out.module';
import { UpTooltipModule } from '../tooltip/tooltip.module';
import { UpButtonModule } from '../button/button.module';
import { UpSpacingModule } from '../spacing/spacing.module';
import { PdfPreviewMagnifyingGlassComponent } from './components/pdf-preview-magnifying-glass/pdf-preview-magnifying-glass.component';
import { PdfPreviewCopyToClipboardComponent } from './components/pdf-preview-copy-to-clipboard/pdf-preview-copy-to-clipboard.component';
import { WINDOW_PROVIDERS } from '../../providers/window.provider';
import { PdfPreviewCopyToClipboardTooltipComponent } from './components/pdf-preview-copy-to-clipboard-tooltip/pdf-preview-copy-to-clipboard-tooltip.component';
import { PdfPreviewSignPlaceholderComponent } from './components/pdf-preview-sign-placeholder/pdf-preview-sign-placeholder.component';
import * as i0 from "@angular/core";
export class PdfPreviewModule {
}
PdfPreviewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PdfPreviewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewModule, declarations: [PdfPreviewComponent,
        PdfPreviewMagnifyingGlassComponent,
        PdfPreviewCopyToClipboardComponent,
        PdfPreviewCopyToClipboardTooltipComponent,
        PdfPreviewSignPlaceholderComponent], imports: [CommonModule,
        PdfViewerModule,
        FormsModule,
        UpFormsModule,
        UpIconsModule,
        UpTypographyModule,
        UpPopOutModule,
        ReactiveFormsModule,
        UpTooltipModule,
        UpButtonModule,
        UpSpacingModule], exports: [PdfPreviewComponent] });
PdfPreviewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewModule, providers: [WINDOW_PROVIDERS], imports: [CommonModule,
        PdfViewerModule,
        FormsModule,
        UpFormsModule,
        UpIconsModule,
        UpTypographyModule,
        UpPopOutModule,
        ReactiveFormsModule,
        UpTooltipModule,
        UpButtonModule,
        UpSpacingModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PdfPreviewComponent,
                        PdfPreviewMagnifyingGlassComponent,
                        PdfPreviewCopyToClipboardComponent,
                        PdfPreviewCopyToClipboardTooltipComponent,
                        PdfPreviewSignPlaceholderComponent
                    ],
                    exports: [PdfPreviewComponent],
                    imports: [
                        CommonModule,
                        PdfViewerModule,
                        FormsModule,
                        UpFormsModule,
                        UpIconsModule,
                        UpTypographyModule,
                        UpPopOutModule,
                        ReactiveFormsModule,
                        UpTooltipModule,
                        UpButtonModule,
                        UpSpacingModule
                    ],
                    providers: [WINDOW_PROVIDERS]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wZGYtcHJldmlldy9wZGYtcHJldmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUN0SSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvRkFBb0YsQ0FBQztBQUN4SSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxvR0FBb0csQ0FBQztBQUMvSixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQzs7QUEwQnRJLE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkF0QnpCLG1CQUFtQjtRQUNuQixrQ0FBa0M7UUFDbEMsa0NBQWtDO1FBQ2xDLHlDQUF5QztRQUN6QyxrQ0FBa0MsYUFJbEMsWUFBWTtRQUNaLGVBQWU7UUFDZixXQUFXO1FBQ1gsYUFBYTtRQUNiLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWUsYUFaUCxtQkFBbUI7OEdBZ0JsQixnQkFBZ0IsYUFGaEIsQ0FBQyxnQkFBZ0IsQ0FBQyxZQVozQixZQUFZO1FBQ1osZUFBZTtRQUNmLFdBQVc7UUFDWCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTsyRkFJTixnQkFBZ0I7a0JBeEI1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLGtDQUFrQzt3QkFDbEMsa0NBQWtDO3dCQUNsQyx5Q0FBeUM7d0JBQ3pDLGtDQUFrQztxQkFDbkM7b0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQzlCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGRmUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZGYtcHJldmlldy9wZGYtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVmlld2VyTW9kdWxlIH0gZnJvbSAnbmcyLXBkZi12aWV3ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBVcEZvcm1zTW9kdWxlIH0gZnJvbSAnLi4vZm9ybXMvZm9ybXMubW9kdWxlJztcbmltcG9ydCB7IFVwSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9pY29ucy5tb2R1bGUnO1xuaW1wb3J0IHsgVXBUeXBvZ3JhcGh5TW9kdWxlIH0gZnJvbSAnLi4vdHlwb2dyYXBoeS90eXBvZ3JhcGh5Lm1vZHVsZSc7XG5pbXBvcnQgeyBVcFBvcE91dE1vZHVsZSB9IGZyb20gJy4uL3BvcC1vdXQvcG9wLW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgVXBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBVcEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IFVwU3BhY2luZ01vZHVsZSB9IGZyb20gJy4uL3NwYWNpbmcvc3BhY2luZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGRmUHJldmlld01hZ25pZnlpbmdHbGFzc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZGYtcHJldmlldy1tYWduaWZ5aW5nLWdsYXNzL3BkZi1wcmV2aWV3LW1hZ25pZnlpbmctZ2xhc3MuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlByZXZpZXdDb3B5VG9DbGlwYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGRmLXByZXZpZXctY29weS10by1jbGlwYm9hcmQvcGRmLXByZXZpZXctY29weS10by1jbGlwYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFdJTkRPV19QUk9WSURFUlMgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvd2luZG93LnByb3ZpZGVyJztcbmltcG9ydCB7IFBkZlByZXZpZXdDb3B5VG9DbGlwYm9hcmRUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BkZi1wcmV2aWV3LWNvcHktdG8tY2xpcGJvYXJkLXRvb2x0aXAvcGRmLXByZXZpZXctY29weS10by1jbGlwYm9hcmQtdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUHJldmlld1NpZ25QbGFjZWhvbGRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wZGYtcHJldmlldy1zaWduLXBsYWNlaG9sZGVyL3BkZi1wcmV2aWV3LXNpZ24tcGxhY2Vob2xkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGRmUHJldmlld0NvbXBvbmVudCxcbiAgICBQZGZQcmV2aWV3TWFnbmlmeWluZ0dsYXNzQ29tcG9uZW50LFxuICAgIFBkZlByZXZpZXdDb3B5VG9DbGlwYm9hcmRDb21wb25lbnQsXG4gICAgUGRmUHJldmlld0NvcHlUb0NsaXBib2FyZFRvb2x0aXBDb21wb25lbnQsXG4gICAgUGRmUHJldmlld1NpZ25QbGFjZWhvbGRlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbUGRmUHJldmlld0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUGRmVmlld2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFVwRm9ybXNNb2R1bGUsXG4gICAgVXBJY29uc01vZHVsZSxcbiAgICBVcFR5cG9ncmFwaHlNb2R1bGUsXG4gICAgVXBQb3BPdXRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBVcFRvb2x0aXBNb2R1bGUsXG4gICAgVXBCdXR0b25Nb2R1bGUsXG4gICAgVXBTcGFjaW5nTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1dJTkRPV19QUk9WSURFUlNdXG59KVxuZXhwb3J0IGNsYXNzIFBkZlByZXZpZXdNb2R1bGUge31cbiJdfQ==