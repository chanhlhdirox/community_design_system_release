import { ElementRef, Renderer2, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonClasses, ButtonType, ButtonWidth, ButtonColor } from './button.constants';
import { ButtonCSSClasses } from './enums/button-css-class.enum';
import { ButtonWidthCSSClasses } from './enums/button-width-css-class.enum';
import { AppTheme } from '../../src/lib/theme/types/types';
import * as i0 from "@angular/core";
export declare class UpButtonDirective implements AfterViewInit, OnChanges {
    protected el: ElementRef;
    protected renderer: Renderer2;
    protected provider: ButtonClasses;
    upButton: ButtonType;
    width: ButtonWidth;
    theme: AppTheme;
    color: ButtonColor;
    constructor(el: ElementRef, renderer: Renderer2, provider: ButtonClasses);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    get typeClass(): ButtonCSSClasses;
    get buttonWidthClass(): ButtonWidthCSSClasses;
    private addCSSClasses;
    protected addClass(buttonClass: string): void;
    private removeAllTypeClasses;
    private removeAllWidthClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpButtonDirective, "[upButton]", never, { "upButton": "upButton"; "width": "width"; "theme": "theme"; "color": "color"; }, {}, never, never, false>;
}
//# sourceMappingURL=button.directive.d.ts.map