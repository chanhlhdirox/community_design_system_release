import { ElementRef, Inject, Renderer2, Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class UpTypographyBaseClass {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    ngAfterViewInit() {
        if (!this.size) {
            this.renderer.addClass(this.hostElement.nativeElement, this.sizeClassesMap.get(this.defaultSize));
            return;
        }
        if (!this.isSizeValid(this.size)) {
            console.error(`${this.size} is not a valid size.`);
            return;
        }
        this.renderer.addClass(this.hostElement.nativeElement, this.sizeClassesMap.get(this.size));
    }
    ngOnChanges(changes) {
        if (changes.size) {
            this.renderer.removeClass(this.hostElement.nativeElement, this.sizeClassesMap.get(changes.size.previousValue));
            this.renderer.addClass(this.hostElement.nativeElement, this.sizeClassesMap.get(changes.size.currentValue));
        }
    }
    isSizeValid(size) {
        return this.sizeClassesMap.has(size);
    }
}
UpTypographyBaseClass.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTypographyBaseClass, deps: [{ token: Renderer2 }, { token: ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
UpTypographyBaseClass.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpTypographyBaseClass, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpTypographyBaseClass, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LWJhc2UtY2xhc3MvdHlwb2dyYXBoeS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBR1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLE9BQU8scUJBQXFCO0lBS2hDLFlBQytCLFFBQW1CLEVBQ2xCLFdBQXVCO1FBRHhCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFDcEQsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMxQyxDQUFDO1lBQ0YsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDO1lBQ25ELE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDcEQsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDbkQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFZO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7a0hBMUNVLHFCQUFxQixrQkFNdEIsU0FBUyxhQUNULFVBQVU7c0dBUFQscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLFNBQVM7OzBCQU9MLE1BQU07MkJBQUMsU0FBUzs7MEJBQ2hCLE1BQU07MkJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIERpcmVjdGl2ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgVXBUeXBvZ3JhcGh5QmFzZUNsYXNzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc2l6ZTogc3RyaW5nO1xuICBzaXplQ2xhc3Nlc01hcDogTWFwPHN0cmluZywgc3RyaW5nPjtcbiAgZGVmYXVsdFNpemU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFJlbmRlcmVyMikgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLnNpemVDbGFzc2VzTWFwLmdldCh0aGlzLmRlZmF1bHRTaXplKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTaXplVmFsaWQodGhpcy5zaXplKSkge1xuICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLnNpemV9IGlzIG5vdCBhIHZhbGlkIHNpemUuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2l6ZUNsYXNzZXNNYXAuZ2V0KHRoaXMuc2l6ZSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnNpemUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5zaXplQ2xhc3Nlc01hcC5nZXQoY2hhbmdlcy5zaXplLnByZXZpb3VzVmFsdWUpXG4gICAgICApO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLnNpemVDbGFzc2VzTWFwLmdldChjaGFuZ2VzLnNpemUuY3VycmVudFZhbHVlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzU2l6ZVZhbGlkKHNpemU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemVDbGFzc2VzTWFwLmhhcyhzaXplKTtcbiAgfVxufVxuIl19