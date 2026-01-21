import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpTitleDirective } from './title/title.directive';
import { UpParagraphDirective } from './paragraph/paragraph.directive';
import { UpSumLabelDirective } from './sum-label/sum-label.directive';
import * as i0 from "@angular/core";
export class UpTypographyModule {
}
UpTypographyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTypographyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpTypographyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpTypographyModule, declarations: [UpTitleDirective, UpParagraphDirective, UpSumLabelDirective], imports: [CommonModule], exports: [UpTitleDirective, UpParagraphDirective, UpSumLabelDirective] });
UpTypographyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTypographyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTypographyModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [UpTitleDirective, UpParagraphDirective, UpSumLabelDirective],
                    exports: [UpTitleDirective, UpParagraphDirective, UpSumLabelDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBT3RFLE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFIZCxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsYUFEaEUsWUFBWSxhQUVaLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQjtnSEFFMUQsa0JBQWtCLFlBSm5CLFlBQVk7MkZBSVgsa0JBQWtCO2tCQUw5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7b0JBQzNFLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDO2lCQUN2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVXBUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vdGl0bGUvdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFVwUGFyYWdyYXBoRGlyZWN0aXZlIH0gZnJvbSAnLi9wYXJhZ3JhcGgvcGFyYWdyYXBoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBVcFN1bUxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9zdW0tbGFiZWwvc3VtLWxhYmVsLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtVcFRpdGxlRGlyZWN0aXZlLCBVcFBhcmFncmFwaERpcmVjdGl2ZSwgVXBTdW1MYWJlbERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtVcFRpdGxlRGlyZWN0aXZlLCBVcFBhcmFncmFwaERpcmVjdGl2ZSwgVXBTdW1MYWJlbERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgVXBUeXBvZ3JhcGh5TW9kdWxlIHt9XG4iXX0=