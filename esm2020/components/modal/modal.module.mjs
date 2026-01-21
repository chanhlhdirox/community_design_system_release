import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { UpModalComponent } from './modal.component';
import { UpConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { UpButtonModule } from '../button/button.module';
import { UpIconsModule } from '../icons/icons.module';
import { PortalModule } from '@angular/cdk/portal';
import { UpModalService } from './modal.service';
import * as i0 from "@angular/core";
export class UpModalModule {
}
UpModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpModalModule, declarations: [UpModalComponent, UpConfirmModalComponent], imports: [CommonModule, OverlayModule, PortalModule, UpButtonModule, UpIconsModule] });
UpModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalModule, providers: [UpModalService], imports: [CommonModule, OverlayModule, PortalModule, UpButtonModule, UpIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [UpModalComponent, UpConfirmModalComponent],
                    imports: [CommonModule, OverlayModule, PortalModule, UpButtonModule, UpIconsModule],
                    providers: [UpModalService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPakQsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFKUCxnQkFBZ0IsRUFBRSx1QkFBdUIsYUFDOUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWE7MkdBR3pFLGFBQWEsYUFGWCxDQUFDLGNBQWMsQ0FBQyxZQURqQixZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYTsyRkFHekUsYUFBYTtrQkFMekIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSx1QkFBdUIsQ0FBQztvQkFDekQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQztvQkFDbkYsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgVXBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVwQ29uZmlybU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVwQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgVXBJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL2ljb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFVwTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtVcE1vZGFsQ29tcG9uZW50LCBVcENvbmZpcm1Nb2RhbENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgUG9ydGFsTW9kdWxlLCBVcEJ1dHRvbk1vZHVsZSwgVXBJY29uc01vZHVsZV0sXG4gICAgcHJvdmlkZXJzOiBbVXBNb2RhbFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFVwTW9kYWxNb2R1bGUge31cbiJdfQ==