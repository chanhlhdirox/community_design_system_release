import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpButtonDirective } from './button.directive';
import { ButtonClassesProvider, ButtonClassesFactory } from './button.constants';
import * as i0 from "@angular/core";
export class UpButtonModule {
}
UpButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpButtonModule, declarations: [UpButtonDirective], imports: [CommonModule], exports: [UpButtonDirective] });
UpButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpButtonModule, providers: [
        {
            provide: ButtonClassesProvider,
            useFactory: ButtonClassesFactory
        }
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [UpButtonDirective],
                    exports: [UpButtonDirective],
                    providers: [
                        {
                            provide: ButtonClassesProvider,
                            useFactory: ButtonClassesFactory
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYWpGLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBVFYsaUJBQWlCLGFBRHRCLFlBQVksYUFFWixpQkFBaUI7NEdBUWhCLGNBQWMsYUFQZDtRQUNUO1lBQ0UsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixVQUFVLEVBQUUsb0JBQW9CO1NBQ2pDO0tBQ0YsWUFSUyxZQUFZOzJGQVVYLGNBQWM7a0JBWDFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzVCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixVQUFVLEVBQUUsb0JBQW9CO3lCQUNqQztxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVXBCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnV0dG9uQ2xhc3Nlc1Byb3ZpZGVyLCBCdXR0b25DbGFzc2VzRmFjdG9yeSB9IGZyb20gJy4vYnV0dG9uLmNvbnN0YW50cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtVcEJ1dHRvbkRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtVcEJ1dHRvbkRpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEJ1dHRvbkNsYXNzZXNQcm92aWRlcixcbiAgICAgIHVzZUZhY3Rvcnk6IEJ1dHRvbkNsYXNzZXNGYWN0b3J5XG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFVwQnV0dG9uTW9kdWxlIHt9XG4iXX0=