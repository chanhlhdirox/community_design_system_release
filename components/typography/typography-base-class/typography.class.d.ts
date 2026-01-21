import { AfterViewInit, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UpTypographyBaseClass implements AfterViewInit, OnChanges {
    protected renderer: Renderer2;
    protected hostElement: ElementRef;
    size: string;
    sizeClassesMap: Map<string, string>;
    defaultSize: string;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private isSizeValid;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpTypographyBaseClass, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<UpTypographyBaseClass, never, never, {}, {}, never, never, false>;
}
//# sourceMappingURL=typography.class.d.ts.map