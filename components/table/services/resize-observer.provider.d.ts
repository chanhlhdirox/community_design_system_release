import { FactoryProvider, InjectionToken } from '@angular/core';
import { ResizeObserver } from '@juggle/resize-observer';
import { ResizeObserverCallback } from '@juggle/resize-observer/lib/ResizeObserverCallback';
import * as i0 from "@angular/core";
export declare const RESIZE_OBSERVER: InjectionToken<unknown>;
export declare abstract class ResizeObserverRef {
    resizeObserver(callback: ResizeObserverCallback): ResizeObserver;
}
export declare class WindowResizeObserverRef extends ResizeObserverRef {
    private window;
    constructor(window: Window);
    resizeObserver(callback: ResizeObserverCallback): ResizeObserver;
    static ɵfac: i0.ɵɵFactoryDeclaration<WindowResizeObserverRef, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WindowResizeObserverRef>;
}
export declare class PolyfillResizeObserverRef extends ResizeObserverRef {
    resizeObserver(callback: ResizeObserverCallback): ResizeObserver;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolyfillResizeObserverRef, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PolyfillResizeObserverRef>;
}
export declare function resizeObservableFactory(windowResizeObserverRef: WindowResizeObserverRef, polyfillResizeObserverRef: PolyfillResizeObserverRef, windowRef: Window): PolyfillResizeObserverRef;
export declare const resizeObservableProvider: FactoryProvider;
export declare const RESIZE_OBSERVABLE_PROVIDERS: (FactoryProvider | typeof WindowResizeObserverRef | typeof PolyfillResizeObserverRef)[];
//# sourceMappingURL=resize-observer.provider.d.ts.map