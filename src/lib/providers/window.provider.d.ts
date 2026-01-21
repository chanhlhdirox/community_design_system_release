import { InjectionToken } from '@angular/core';
export interface WindowProperties {
    setTimeout(callback: () => void, timeout?: number): number;
    clearTimeout(handle?: number): void;
}
export declare const WindowProvider: InjectionToken<WindowProperties>;
//# sourceMappingURL=window.provider.d.ts.map