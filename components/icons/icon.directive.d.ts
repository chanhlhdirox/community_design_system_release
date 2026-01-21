import { ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { UpIconService } from './icon.service';
import { UpIcon } from './lib';
import * as i0 from "@angular/core";
export declare class UpIconDirective implements OnChanges {
    private el;
    private iconService;
    private renderer;
    upIcon: UpIcon['name'];
    fallback: UpIcon['name'];
    color: string;
    width: string;
    height: string;
    constructor(el: ElementRef, iconService: UpIconService, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    private getIcon;
    private setIcon;
    private get dimensionStyle();
    static ɵfac: i0.ɵɵFactoryDeclaration<UpIconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpIconDirective, "[upIcon]", never, { "upIcon": "upIcon"; "fallback": "fallback"; "color": "color"; "width": "width"; "height": "height"; }, {}, never, never, false>;
}
//# sourceMappingURL=icon.directive.d.ts.map