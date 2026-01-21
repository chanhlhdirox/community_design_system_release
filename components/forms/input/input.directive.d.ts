import { ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class InputDirective implements OnInit {
    elementRef: ElementRef;
    ngControl: NgControl;
    isFocused: boolean;
    nativeElementValueChanges: BehaviorSubject<string>;
    hostClass: string;
    onFocus(): void;
    onBlur(): void;
    onChange(event: any): void;
    constructor(elementRef: ElementRef, ngControl: NgControl);
    ngOnInit(): void;
    get hasError(): boolean;
    get inputType(): string;
    clearInput(): void;
    togglePasswordVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputDirective, [null, { optional: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputDirective, "input[upInput], select[upInput], textarea[upInput]", ["upInput"], {}, {}, never, never, false>;
}
//# sourceMappingURL=input.directive.d.ts.map