import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListItemPrefixDirective } from './list-item-prefix.directive';
import { ListItemSuffixDirective } from './list-item-suffix.directive';
import * as i0 from "@angular/core";
export class UpListModule {
}
UpListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UpListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: UpListModule, declarations: [ListComponent,
        ListItemComponent,
        ListItemPrefixDirective,
        ListItemSuffixDirective], imports: [CommonModule], exports: [ListComponent, ListItemComponent, ListItemPrefixDirective, ListItemSuffixDirective] });
UpListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpListModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ListComponent,
                        ListItemComponent,
                        ListItemPrefixDirective,
                        ListItemSuffixDirective
                    ],
                    imports: [CommonModule],
                    exports: [ListComponent, ListItemComponent, ListItemPrefixDirective, ListItemSuffixDirective]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2xpc3QvbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQVd2RSxNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTswR0FBWixZQUFZLGlCQVJyQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix1QkFBdUIsYUFFZixZQUFZLGFBQ1osYUFBYSxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QjswR0FFakYsWUFBWSxZQUhiLFlBQVk7MkZBR1gsWUFBWTtrQkFWeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQztpQkFDOUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RJdGVtUHJlZml4RGlyZWN0aXZlIH0gZnJvbSAnLi9saXN0LWl0ZW0tcHJlZml4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMaXN0SXRlbVN1ZmZpeERpcmVjdGl2ZSB9IGZyb20gJy4vbGlzdC1pdGVtLXN1ZmZpeC5kaXJlY3RpdmUnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGlzdENvbXBvbmVudCxcbiAgICBMaXN0SXRlbUNvbXBvbmVudCxcbiAgICBMaXN0SXRlbVByZWZpeERpcmVjdGl2ZSxcbiAgICBMaXN0SXRlbVN1ZmZpeERpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0xpc3RDb21wb25lbnQsIExpc3RJdGVtQ29tcG9uZW50LCBMaXN0SXRlbVByZWZpeERpcmVjdGl2ZSwgTGlzdEl0ZW1TdWZmaXhEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFVwTGlzdE1vZHVsZSB7fVxuIl19