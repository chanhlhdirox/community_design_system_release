import { ClassProvider, FactoryProvider, InjectionToken } from '@angular/core';
export declare const WINDOW: InjectionToken<unknown>;
declare global {
    interface Window {
        community_name: string;
    }
}
export declare abstract class WindowRef {
    get nativeWindow(): Window;
}
export declare class BrowserWindowRef extends WindowRef {
    get nativeWindow(): Window;
}
export declare function windowFactory(browserWindowRef: BrowserWindowRef): Window;
export declare const WINDOW_PROVIDERS: (ClassProvider | FactoryProvider)[];
//# sourceMappingURL=window.provider.d.ts.map