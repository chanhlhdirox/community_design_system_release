import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpTypographyModule } from '../typography/typography.module';
import { UpTimelineComponent } from './timeline.component';
import { UpTimelineEventComponent } from './components/timeline-event.component';
import * as i0 from "@angular/core";
export class UpTimelineModule {
}
UpTimelineModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTimelineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpTimelineModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpTimelineModule, declarations: [UpTimelineComponent, UpTimelineEventComponent], imports: [CommonModule, UpTypographyModule], exports: [UpTimelineComponent, UpTimelineEventComponent] });
UpTimelineModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTimelineModule, imports: [CommonModule, UpTypographyModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTimelineModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, UpTypographyModule],
                    declarations: [UpTimelineComponent, UpTimelineEventComponent],
                    exports: [UpTimelineComponent, UpTimelineEventComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90aW1lbGluZS90aW1lbGluZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBT2pGLE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkFIWixtQkFBbUIsRUFBRSx3QkFBd0IsYUFEbEQsWUFBWSxFQUFFLGtCQUFrQixhQUVoQyxtQkFBbUIsRUFBRSx3QkFBd0I7OEdBRTVDLGdCQUFnQixZQUpqQixZQUFZLEVBQUUsa0JBQWtCOzJGQUkvQixnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDO29CQUMzQyxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsQ0FBQztvQkFDN0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsd0JBQXdCLENBQUM7aUJBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBVcFR5cG9ncmFwaHlNb2R1bGUgfSBmcm9tICcuLi90eXBvZ3JhcGh5L3R5cG9ncmFwaHkubW9kdWxlJztcbmltcG9ydCB7IFVwVGltZWxpbmVDb21wb25lbnQgfSBmcm9tICcuL3RpbWVsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcFRpbWVsaW5lRXZlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZWxpbmUtZXZlbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVXBUeXBvZ3JhcGh5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVXBUaW1lbGluZUNvbXBvbmVudCwgVXBUaW1lbGluZUV2ZW50Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1VwVGltZWxpbmVDb21wb25lbnQsIFVwVGltZWxpbmVFdmVudENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVXBUaW1lbGluZU1vZHVsZSB7fVxuIl19