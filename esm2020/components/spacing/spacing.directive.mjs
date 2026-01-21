import { ElementRef, Inject, Renderer2 } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { SpacingCSSClassPrefix, SpacingMultiplierAliases } from './spacing.constants';
import * as i0 from "@angular/core";
export class SpacingBaseDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, `${this.prefix}-${this.suffix}`);
    }
    get suffix() {
        const alias = SpacingMultiplierAliases[this.multiplier];
        if (!this.multiplier) {
            return '0';
        }
        return !!alias ? alias : this.multiplier;
    }
}
SpacingBaseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SpacingBaseDirective, deps: [{ token: ElementRef }, { token: Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
SpacingBaseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: SpacingBaseDirective, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SpacingBaseDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }]; } });
export class UpMarginDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.Margin;
    }
}
UpMarginDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpMarginDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpMarginDirective, selector: "[upMargin]", inputs: { multiplier: ["upMargin", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upMargin]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upMargin']
            }] } });
export class UpMarginBottomDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.MarginBottom;
    }
}
UpMarginBottomDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginBottomDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpMarginBottomDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpMarginBottomDirective, selector: "[upMarginBottom]", inputs: { multiplier: ["upMarginBottom", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginBottomDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upMarginBottom]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upMarginBottom']
            }] } });
export class UpMarginLeftDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.MarginLeft;
    }
}
UpMarginLeftDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginLeftDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpMarginLeftDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpMarginLeftDirective, selector: "[upMarginLeft]", inputs: { multiplier: ["upMarginLeft", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginLeftDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upMarginLeft]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upMarginLeft']
            }] } });
export class UpMarginRightDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.MarginRight;
    }
}
UpMarginRightDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginRightDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpMarginRightDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpMarginRightDirective, selector: "[upMarginRight]", inputs: { multiplier: ["upMarginRight", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginRightDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upMarginRight]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upMarginRight']
            }] } });
export class UpMarginTopDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.MarginTop;
    }
}
UpMarginTopDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginTopDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpMarginTopDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpMarginTopDirective, selector: "[upMarginTop]", inputs: { multiplier: ["upMarginTop", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpMarginTopDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upMarginTop]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upMarginTop']
            }] } });
export class UpPaddingDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.Padding;
    }
}
UpPaddingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpPaddingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpPaddingDirective, selector: "[upPadding]", inputs: { multiplier: ["upPadding", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upPadding]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upPadding']
            }] } });
export class UpPaddingBottomDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.PaddingBottom;
    }
}
UpPaddingBottomDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingBottomDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpPaddingBottomDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpPaddingBottomDirective, selector: "[upPaddingBottom]", inputs: { multiplier: ["upPaddingBottom", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingBottomDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upPaddingBottom]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upPaddingBottom']
            }] } });
export class UpPaddingLeftDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.PaddingLeft;
    }
}
UpPaddingLeftDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingLeftDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpPaddingLeftDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpPaddingLeftDirective, selector: "[upPaddingLeft]", inputs: { multiplier: ["upPaddingLeft", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingLeftDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upPaddingLeft]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upPaddingLeft']
            }] } });
export class UpPaddingRightDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.PaddingRight;
    }
}
UpPaddingRightDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingRightDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpPaddingRightDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpPaddingRightDirective, selector: "[upPaddingRight]", inputs: { multiplier: ["upPaddingRight", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingRightDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upPaddingRight]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upPaddingRight']
            }] } });
export class UpPaddingTopDirective extends SpacingBaseDirective {
    constructor() {
        super(...arguments);
        this.prefix = SpacingCSSClassPrefix.PaddingTop;
    }
}
UpPaddingTopDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingTopDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
UpPaddingTopDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: UpPaddingTopDirective, selector: "[upPaddingTop]", inputs: { multiplier: ["upPaddingTop", "multiplier"] }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpPaddingTopDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[upPaddingTop]' }]
        }], propDecorators: { multiplier: [{
                type: Input,
                args: ['upPaddingTop']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2luZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3NwYWNpbmcvc3BhY2luZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFFTCxxQkFBcUIsRUFFckIsd0JBQXdCLEVBQ3pCLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sT0FBZ0Isb0JBQW9CO0lBS3hDLFlBQ2dDLEVBQWMsRUFDZixRQUFtQjtRQURsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMvQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsTUFBTSxLQUFLLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQyxDQUFDOztpSEFwQm1CLG9CQUFvQixrQkFNOUIsVUFBVSxhQUNWLFNBQVM7cUdBUEMsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRHpDLFNBQVM7OzBCQU9MLE1B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O3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFEbkMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTs4QkFFaEIsVUFBVTtzQkFBbEMsS0FBSzt1QkFBQyxnQkFBZ0I7O0FBS3pCLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFBb0I7SUFEL0Q7O1FBR0UsV0FBTSxHQUFHLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztLQUMzQzs7a0hBSFkscUJBQXFCO3NHQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs4QkFFaEIsVUFBVTtzQkFBaEMsS0FBSzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgU3BhY2luZ0NsYXNzU3VmZml4LFxuICBTcGFjaW5nQ1NTQ2xhc3NQcmVmaXgsXG4gIFNwYWNpbmdNdWx0aXBsaWVyLFxuICBTcGFjaW5nTXVsdGlwbGllckFsaWFzZXNcbn0gZnJvbSAnLi9zcGFjaW5nLmNvbnN0YW50cyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwYWNpbmdCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWJzdHJhY3QgcHJlZml4OiBzdHJpbmc7XG5cbiAgYWJzdHJhY3QgbXVsdGlwbGllcjogU3BhY2luZ011bHRpcGxpZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgYCR7dGhpcy5wcmVmaXh9LSR7dGhpcy5zdWZmaXh9YCk7XG4gIH1cblxuICBnZXQgc3VmZml4KCk6IFNwYWNpbmdDbGFzc1N1ZmZpeCB7XG4gICAgY29uc3QgYWxpYXMgPSBTcGFjaW5nTXVsdGlwbGllckFsaWFzZXNbdGhpcy5tdWx0aXBsaWVyXTtcbiAgICBpZiAoIXRoaXMubXVsdGlwbGllcikge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9XG4gICAgcmV0dXJuICEhYWxpYXMgPyBhbGlhcyA6IHRoaXMubXVsdGlwbGllcjtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbdXBNYXJnaW5dJyB9KVxuZXhwb3J0IGNsYXNzIFVwTWFyZ2luRGlyZWN0aXZlIGV4dGVuZHMgU3BhY2luZ0Jhc2VEaXJlY3RpdmUge1xuICBASW5wdXQoJ3VwTWFyZ2luJykgbXVsdGlwbGllcjogU3BhY2luZ011bHRpcGxpZXI7XG4gIHByZWZpeCA9IFNwYWNpbmdDU1NDbGFzc1ByZWZpeC5NYXJnaW47XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t1cE1hcmdpbkJvdHRvbV0nIH0pXG5leHBvcnQgY2xhc3MgVXBNYXJnaW5Cb3R0b21EaXJlY3RpdmUgZXh0ZW5kcyBTcGFjaW5nQmFzZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndXBNYXJnaW5Cb3R0b20nKSBtdWx0aXBsaWVyOiBTcGFjaW5nTXVsdGlwbGllcjtcbiAgcHJlZml4ID0gU3BhY2luZ0NTU0NsYXNzUHJlZml4Lk1hcmdpbkJvdHRvbTtcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3VwTWFyZ2luTGVmdF0nIH0pXG5leHBvcnQgY2xhc3MgVXBNYXJnaW5MZWZ0RGlyZWN0aXZlIGV4dGVuZHMgU3BhY2luZ0Jhc2VEaXJlY3RpdmUge1xuICBASW5wdXQoJ3VwTWFyZ2luTGVmdCcpIG11bHRpcGxpZXI6IFNwYWNpbmdNdWx0aXBsaWVyO1xuICBwcmVmaXggPSBTcGFjaW5nQ1NTQ2xhc3NQcmVmaXguTWFyZ2luTGVmdDtcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3VwTWFyZ2luUmlnaHRdJyB9KVxuZXhwb3J0IGNsYXNzIFVwTWFyZ2luUmlnaHREaXJlY3RpdmUgZXh0ZW5kcyBTcGFjaW5nQmFzZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndXBNYXJnaW5SaWdodCcpIG11bHRpcGxpZXI6IFNwYWNpbmdNdWx0aXBsaWVyO1xuICBwcmVmaXggPSBTcGFjaW5nQ1NTQ2xhc3NQcmVmaXguTWFyZ2luUmlnaHQ7XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t1cE1hcmdpblRvcF0nIH0pXG5leHBvcnQgY2xhc3MgVXBNYXJnaW5Ub3BEaXJlY3RpdmUgZXh0ZW5kcyBTcGFjaW5nQmFzZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndXBNYXJnaW5Ub3AnKSBtdWx0aXBsaWVyOiBTcGFjaW5nTXVsdGlwbGllcjtcbiAgcHJlZml4ID0gU3BhY2luZ0NTU0NsYXNzUHJlZml4Lk1hcmdpblRvcDtcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3VwUGFkZGluZ10nIH0pXG5leHBvcnQgY2xhc3MgVXBQYWRkaW5nRGlyZWN0aXZlIGV4dGVuZHMgU3BhY2luZ0Jhc2VEaXJlY3RpdmUge1xuICBASW5wdXQoJ3VwUGFkZGluZycpIG11bHRpcGxpZXI6IFNwYWNpbmdNdWx0aXBsaWVyO1xuICBwcmVmaXggPSBTcGFjaW5nQ1NTQ2xhc3NQcmVmaXguUGFkZGluZztcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3VwUGFkZGluZ0JvdHRvbV0nIH0pXG5leHBvcnQgY2xhc3MgVXBQYWRkaW5nQm90dG9tRGlyZWN0aXZlIGV4dGVuZHMgU3BhY2luZ0Jhc2VEaXJlY3RpdmUge1xuICBASW5wdXQoJ3VwUGFkZGluZ0JvdHRvbScpIG11bHRpcGxpZXI6IFNwYWNpbmdNdWx0aXBsaWVyO1xuICBwcmVmaXggPSBTcGFjaW5nQ1NTQ2xhc3NQcmVmaXguUGFkZGluZ0JvdHRvbTtcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3VwUGFkZGluZ0xlZnRdJyB9KVxuZXhwb3J0IGNsYXNzIFVwUGFkZGluZ0xlZnREaXJlY3RpdmUgZXh0ZW5kcyBTcGFjaW5nQmFzZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndXBQYWRkaW5nTGVmdCcpIG11bHRpcGxpZXI6IFNwYWNpbmdNdWx0aXBsaWVyO1xuICBwcmVmaXggPSBTcGFjaW5nQ1NTQ2xhc3NQcmVmaXguUGFkZGluZ0xlZnQ7XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t1cFBhZGRpbmdSaWdodF0nIH0pXG5leHBvcnQgY2xhc3MgVXBQYWRkaW5nUmlnaHREaXJlY3RpdmUgZXh0ZW5kcyBTcGFjaW5nQmFzZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgndXBQYWRkaW5nUmlnaHQnKSBtdWx0aXBsaWVyOiBTcGFjaW5nTXVsdGlwbGllcjtcbiAgcHJlZml4ID0gU3BhY2luZ0NTU0NsYXNzUHJlZml4LlBhZGRpbmdSaWdodDtcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3VwUGFkZGluZ1RvcF0nIH0pXG5leHBvcnQgY2xhc3MgVXBQYWRkaW5nVG9wRGlyZWN0aXZlIGV4dGVuZHMgU3BhY2luZ0Jhc2VEaXJlY3RpdmUge1xuICBASW5wdXQoJ3VwUGFkZGluZ1RvcCcpIG11bHRpcGxpZXI6IFNwYWNpbmdNdWx0aXBsaWVyO1xuICBwcmVmaXggPSBTcGFjaW5nQ1NTQ2xhc3NQcmVmaXguUGFkZGluZ1RvcDtcbn1cbiJdfQ==