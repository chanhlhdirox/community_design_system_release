import { Directive, Input, ElementRef, Inject, Renderer2 } from '@angular/core';
import { ButtonClassesProvider, ButtonTypes, ButtonColors } from './button.constants';
import { ButtonCSSClasses } from './enums/button-css-class.enum';
import { AppThemes } from '../../src/lib/theme/types/types';
import * as i0 from "@angular/core";
export class UpButtonDirective {
    constructor(el, renderer, provider) {
        this.el = el;
        this.renderer = renderer;
        this.provider = provider;
        this.theme = AppThemes.LIGHT;
        this.color = ButtonColors.DEFAULT;
    }
    ngAfterViewInit() {
        this.addClass(ButtonCSSClasses.BASE);
        this.addClass(this.typeClass);
        this.addClass(this.buttonWidthClass);
    }
    ngOnChanges(changes) {
        if (changes.upButton || changes.theme || changes.color) {
            this.removeAllTypeClasses();
            this.addCSSClasses();
        }
        if (changes.width) {
            this.removeAllWidthClasses();
            this.addClass(ButtonCSSClasses.BASE);
            this.addClass(this.buttonWidthClass);
        }
    }
    get typeClass() {
        return (this.provider.buttonClasses.get(this.upButton) ||
            this.provider.buttonClasses.get(ButtonTypes.PRIMARY));
    }
    get buttonWidthClass() {
        return this.provider.buttonWidthClasses.get(this.width);
    }
    addCSSClasses() {
        this.addClass(this.typeClass);
        if (this.theme === AppThemes.DARK) {
            this.addClass(ButtonCSSClasses.DARK_THEME);
        }
        if (this.color === ButtonColors.DANGER) {
            switch (this.upButton) {
                case ButtonTypes.PRIMARY:
                    this.addClass(ButtonCSSClasses.PRIMARY_DANGER);
                    break;
                case ButtonTypes.SECONDARY:
                    this.addClass(ButtonCSSClasses.SECONDARY_DANGER);
                    break;
                case ButtonTypes.SECONDARY_OUTLINE:
                    this.addClass(ButtonCSSClasses.SECONDARY_OUTLINE_DANGER);
                    break;
                case ButtonTypes.TERTIARY:
                    this.addClass(ButtonCSSClasses.TERTIARY_DANGER);
                    break;
                case ButtonTypes.ROUNDED:
                    this.addClass(ButtonCSSClasses.ROUNDED_DANGER);
                    break;
            }
        }
    }
    addClass(buttonClass) {
        if (buttonClass) {
            this.renderer.addClass(this.el.nativeElement, buttonClass);
        }
    }
    removeAllTypeClasses() {
        Object.values(ButtonCSSClasses)
            .filter((cls) => cls !== 'up-button')
            .forEach((buttonClass) => {
            this.renderer.removeClass(this.el.nativeElement, buttonClass);
        });
    }
    removeAllWidthClasses() {
        this.provider.buttonWidthClasses.forEach((buttonWidthClass) => this.renderer.removeClass(this.el.nativeElement, buttonWidthClass));
    }
}
UpButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpButtonDirective, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: ButtonClassesProvider }], target: i0.ɵɵFactoryTarget.Directive });
UpButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpButtonDirective, selector: "[upButton]", inputs: { upButton: "upButton", width: "width", theme: "theme", color: "color" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upButton]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ButtonClassesProvider]
                }] }]; }, propDecorators: { upButton: [{
                type: Input
            }], width: [{
                type: Input
            }], theme: [{
                type: Input
            }], color: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLHFCQUFxQixFQUlyQixXQUFXLEVBQ1gsWUFBWSxFQUViLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFakUsT0FBTyxFQUFZLFNBQVMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUt0RSxNQUFNLE9BQU8saUJBQWlCO0lBTTVCLFlBQ2dDLEVBQWMsRUFDZixRQUFtQixFQUNQLFFBQXVCO1FBRmxDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ1AsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQU56RCxVQUFLLEdBQWEsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNsQyxVQUFLLEdBQWdCLFlBQVksQ0FBQyxPQUFPLENBQUM7SUFNaEQsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RELElBQUksQ0FB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QWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7OEdBdkZVLGlCQUFpQixrQkFPbEIsVUFBVSxhQUNWLFNBQVMsYUFDVCxxQkFBcUI7a0dBVHBCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7MEJBUUksTUFBTTsyQkFBQyxVQUFVOzswQkFDakIsTUFBTTsyQkFBQyxTQUFTOzswQkFDaEIsTUFBTTsyQkFBQyxxQkFBcUI7NENBUnRCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uQ2xhc3Nlc1Byb3ZpZGVyLFxuICBCdXR0b25DbGFzc2VzLFxuICBCdXR0b25UeXBlLFxuICBCdXR0b25XaWR0aCxcbiAgQnV0dG9uVHlwZXMsXG4gIEJ1dHRvbkNvbG9ycyxcbiAgQnV0dG9uQ29sb3Jcbn0gZnJvbSAnLi9idXR0b24uY29uc3RhbnRzJztcbmltcG9ydCB7IEJ1dHRvbkNTU0NsYXNzZXMgfSBmcm9tICcuL2VudW1zL2J1dHRvbi1jc3MtY2xhc3MuZW51bSc7XG5pbXBvcnQgeyBCdXR0b25XaWR0aENTU0NsYXNzZXMgfSBmcm9tICcuL2VudW1zL2J1dHRvbi13aWR0aC1jc3MtY2xhc3MuZW51bSc7XG5pbXBvcnQgeyBBcHBUaGVtZSwgQXBwVGhlbWVzIH0gZnJvbSAnLi4vLi4vc3JjL2xpYi90aGVtZS90eXBlcy90eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1cEJ1dHRvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFVwQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdXBCdXR0b246IEJ1dHRvblR5cGU7XG4gIEBJbnB1dCgpIHdpZHRoOiBCdXR0b25XaWR0aDtcbiAgQElucHV0KCkgdGhlbWU6IEFwcFRoZW1lID0gQXBwVGhlbWVzLkxJR0hUO1xuICBASW5wdXQoKSBjb2xvcjogQnV0dG9uQ29sb3IgPSBCdXR0b25Db2xvcnMuREVGQVVMVDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFJlbmRlcmVyMikgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChCdXR0b25DbGFzc2VzUHJvdmlkZXIpIHByb3RlY3RlZCBwcm92aWRlcjogQnV0dG9uQ2xhc3Nlc1xuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQ2xhc3MoQnV0dG9uQ1NTQ2xhc3Nlcy5CQVNFKTtcbiAgICB0aGlzLmFkZENsYXNzKHRoaXMudHlwZUNsYXNzKTtcbiAgICB0aGlzLmFkZENsYXNzKHRoaXMuYnV0dG9uV2lkdGhDbGFzcyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudXBCdXR0b24gfHwgY2hhbmdlcy50aGVtZSB8fCBjaGFuZ2VzLmNvbG9yKSB7XG4gICAgICB0aGlzLnJlbW92ZUFsbFR5cGVDbGFzc2VzKCk7XG4gICAgICB0aGlzLmFkZENTU0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy53aWR0aCkge1xuICAgICAgdGhpcy5yZW1vdmVBbGxXaWR0aENsYXNzZXMoKTtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoQnV0dG9uQ1NTQ2xhc3Nlcy5CQVNFKTtcbiAgICAgIHRoaXMuYWRkQ2xhc3ModGhpcy5idXR0b25XaWR0aENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdHlwZUNsYXNzKCk6IEJ1dHRvbkNTU0NsYXNzZXMge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3ZpZGVyLmJ1dHRvbkNsYXNzZXMuZ2V0KHRoaXMudXBCdXR0b24pIHx8XG4gICAgICB0aGlzLnByb3ZpZGVyLmJ1dHRvbkNsYXNzZXMuZ2V0KEJ1dHRvblR5cGVzLlBSSU1BUlkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBidXR0b25XaWR0aENsYXNzKCk6IEJ1dHRvbldpZHRoQ1NTQ2xhc3NlcyB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuYnV0dG9uV2lkdGhDbGFzc2VzLmdldCh0aGlzLndpZHRoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ1NTQ2xhc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZENsYXNzKHRoaXMudHlwZUNsYXNzKTtcblxuICAgIGlmICh0aGlzLnRoZW1lID09PSBBcHBUaGVtZXMuREFSSykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhCdXR0b25DU1NDbGFzc2VzLkRBUktfVEhFTUUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb2xvciA9PT0gQnV0dG9uQ29sb3JzLkRBTkdFUikge1xuICAgICAgc3dpdGNoICh0aGlzLnVwQnV0dG9uKSB7XG4gICAgICAgIGNhc2UgQnV0dG9uVHlwZXMuUFJJTUFSWTpcbiAgICAgICAgICB0aGlzLmFkZENsYXNzKEJ1dHRvbkNTU0NsYXNzZXMuUFJJTUFSWV9EQU5HRVIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEJ1dHRvblR5cGVzLlNFQ09OREFSWTpcbiAgICAgICAgICB0aGlzLmFkZENsYXNzKEJ1dHRvbkNTU0NsYXNzZXMuU0VDT05EQVJZX0RBTkdFUik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQnV0dG9uVHlwZXMuU0VDT05EQVJZX09VVExJTkU6XG4gICAgICAgICAgdGhpcy5hZGRDbGFzcyhCdXR0b25DU1NDbGFzc2VzLlNFQ09OREFSWV9PVVRMSU5FX0RBTkdFUik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQnV0dG9uVHlwZXMuVEVSVElBUlk6XG4gICAgICAgICAgdGhpcy5hZGRDbGFzcyhCdXR0b25DU1NDbGFzc2VzLlRFUlRJQVJZX0RBTkdFUik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQnV0dG9uVHlwZXMuUk9VTkRFRDpcbiAgICAgICAgICB0aGlzLmFkZENsYXNzKEJ1dHRvbkNTU0NsYXNzZXMuUk9VTkRFRF9EQU5HRVIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRDbGFzcyhidXR0b25DbGFzczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGJ1dHRvbkNsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYnV0dG9uQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQWxsVHlwZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgT2JqZWN0LnZhbHVlcyhCdXR0b25DU1NDbGFzc2VzKVxuICAgICAgLmZpbHRlcigoY2xzKSA9PiBjbHMgIT09ICd1cC1idXR0b24nKVxuICAgICAgLmZvckVhY2goKGJ1dHRvbkNsYXNzKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBidXR0b25DbGFzcyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQWxsV2lkdGhDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvdmlkZXIuYnV0dG9uV2lkdGhDbGFzc2VzLmZvckVhY2goKGJ1dHRvbldpZHRoQ2xhc3MpID0+XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYnV0dG9uV2lkdGhDbGFzcylcbiAgICApO1xuICB9XG59XG4iXX0=