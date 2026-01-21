import { Directive, ElementRef, Input, Renderer2, Inject } from '@angular/core';
import { UpIconService } from './icon.service';
import * as i0 from "@angular/core";
import * as i1 from "./icon.service";
export class UpIconDirective {
    constructor(el, iconService, renderer) {
        this.el = el;
        this.iconService = iconService;
        this.renderer = renderer;
        this.color = 'var(--up-brand-1)';
    }
    ngOnChanges(changes) {
        if (changes.upIcon || changes.color) {
            this.setIcon();
        }
    }
    getIcon() {
        let svgIcon;
        try {
            svgIcon = this.iconService.findIcon(this.upIcon);
        }
        catch (error) {
            svgIcon = this.iconService.findIcon(this.fallback);
        }
        return svgIcon;
    }
    setIcon() {
        try {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', `<div style="color: ${this.color};${this.dimensionStyle}">${this.getIcon()}</div>`);
        }
        catch (error) {
            console.error(error.message);
        }
    }
    get dimensionStyle() {
        return this.height && this.width ? `width: ${this.width};height: ${this.height};` : '';
    }
}
UpIconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconDirective, deps: [{ token: ElementRef }, { token: UpIconService }, { token: Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
UpIconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpIconDirective, selector: "[upIcon]", inputs: { upIcon: "upIcon", fallback: "fallback", color: "color", width: "width", height: "height" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[upIcon]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.UpIconService, decorators: [{
                    type: Inject,
                    args: [UpIconService]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }]; }, propDecorators: { upIcon: [{
                type: Input
            }], fallback: [{
                type: Input
            }], color: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL2ljb25zL2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUdQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTS9DLE1BQU0sT0FBTyxlQUFlO0lBZ0IxQixZQUM4QixFQUFjLEVBQ1gsV0FBMEIsRUFDOUIsUUFBbUI7UUFGbEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNYLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFYaEQsVUFBSyxHQUFHLG1CQUFtQixDQUFDO0lBWXpCLENBQUM7SUFFSixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUVPLE9BQU87UUFDYixJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUk7WUFDRixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLE9BQU87UUFDYixJQUFJO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixXQUFXLEVBQ1gsc0JBQXNCLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FDbkYsQ0FBQztTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxJQUFZLGNBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RixDQUFDOzs0R0FwRFUsZUFBZSxrQkFpQmhCLFVBQVUsYUFDVixhQUFhLGFBQ2IsU0FBUztnR0FuQlIsZUFBZTsyRkFBZixlQUFlO2tCQUgzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7MEJBa0JJLE1BQU07MkJBQUMsVUFBVTs7MEJBQ2pCLE1BQU07MkJBQUMsYUFBYTs7MEJBQ3BCLE1BQU07MkJBQUMsU0FBUzs0Q0FqQm5CLE1BQU07c0JBREwsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLEtBQUs7c0JBREosS0FBSztnQkFJTixNQUFNO3NCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIEluamVjdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBJY29uU2VydmljZSB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVwSWNvbiB9IGZyb20gJy4vbGliJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VwSWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFVwSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHVwSWNvbjogVXBJY29uWyduYW1lJ107XG5cbiAgQElucHV0KClcbiAgZmFsbGJhY2s6IFVwSWNvblsnbmFtZSddO1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gJ3ZhcigtLXVwLWJyYW5kLTEpJztcblxuICBASW5wdXQoKVxuICB3aWR0aDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGhlaWdodDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFVwSWNvblNlcnZpY2UpIHByaXZhdGUgaWNvblNlcnZpY2U6IFVwSWNvblNlcnZpY2UsXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnVwSWNvbiB8fCBjaGFuZ2VzLmNvbG9yKSB7XG4gICAgICB0aGlzLnNldEljb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEljb24oKTogc3RyaW5nIHtcbiAgICBsZXQgc3ZnSWNvbjtcbiAgICB0cnkge1xuICAgICAgc3ZnSWNvbiA9IHRoaXMuaWNvblNlcnZpY2UuZmluZEljb24odGhpcy51cEljb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzdmdJY29uID0gdGhpcy5pY29uU2VydmljZS5maW5kSWNvbih0aGlzLmZhbGxiYWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2Z0ljb247XG4gIH1cblxuICBwcml2YXRlIHNldEljb24oKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ2lubmVySFRNTCcsXG4gICAgICAgIGA8ZGl2IHN0eWxlPVwiY29sb3I6ICR7dGhpcy5jb2xvcn07JHt0aGlzLmRpbWVuc2lvblN0eWxlfVwiPiR7dGhpcy5nZXRJY29uKCl9PC9kaXY+YFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBkaW1lbnNpb25TdHlsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmhlaWdodCAmJiB0aGlzLndpZHRoID8gYHdpZHRoOiAke3RoaXMud2lkdGh9O2hlaWdodDogJHt0aGlzLmhlaWdodH07YCA6ICcnO1xuICB9XG59XG4iXX0=