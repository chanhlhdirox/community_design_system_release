import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class UpBaseListPaginationComponent {
    constructor() {
        this.items = [];
        this.pageNumber = 1;
        this.pageSize = 10;
    }
    get currentPageItems() {
        return this.items.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('items')) {
            this.pageNumber = 1;
        }
    }
    pageNumberChange(pageNumber) {
        this.pageNumber = pageNumber;
    }
}
UpBaseListPaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpBaseListPaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
UpBaseListPaginationComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpBaseListPaginationComponent, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpBaseListPaginationComponent, decorators: [{
            type: Directive
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1saXN0LXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9wYWdpbmF0aW9uL2Jhc2UtbGlzdC1wYWdpbmF0aW9uL2Jhc2UtbGlzdC1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHcEUsTUFBTSxPQUFnQiw2QkFBNkI7SUFEbkQ7UUFFRSxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixhQUFRLEdBQUcsRUFBRSxDQUFDO0tBZWY7SUFiQyxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQWtCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7OzBIQWpCbUIsNkJBQTZCOzhHQUE3Qiw2QkFBNkI7MkZBQTdCLDZCQUE2QjtrQkFEbEQsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVwQmFzZUxpc3RQYWdpbmF0aW9uQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgaXRlbXM6IFRbXSA9IFtdO1xuICBwYWdlTnVtYmVyID0gMTtcbiAgcGFnZVNpemUgPSAxMDtcblxuICBnZXQgY3VycmVudFBhZ2VJdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnNsaWNlKCh0aGlzLnBhZ2VOdW1iZXIgLSAxKSAqIHRoaXMucGFnZVNpemUsIHRoaXMucGFnZU51bWJlciAqIHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdpdGVtcycpKSB7XG4gICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2VOdW1iZXJDaGFuZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgfVxufVxuIl19