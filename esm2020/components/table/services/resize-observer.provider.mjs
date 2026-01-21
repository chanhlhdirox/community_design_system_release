/// <reference types="resize-observer-browser" />
/// <reference types="resize-observer-browser" />
import { InjectionToken, Injectable, Inject } from '@angular/core';
import { ResizeObserver } from '@juggle/resize-observer';
import { WINDOW } from '../../../providers/window.provider';
import * as i0 from "@angular/core";
export const RESIZE_OBSERVER = new InjectionToken('ResizeObserver');
export class ResizeObserverRef {
    resizeObserver(callback) {
        throw new Error('Not implemented.');
    }
}
export class WindowResizeObserverRef extends ResizeObserverRef {
    constructor(window) {
        super();
        this.window = window;
    }
    resizeObserver(callback) {
        return new this.window.ResizeObserver(callback);
    }
}
WindowResizeObserverRef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: WindowResizeObserverRef, deps: [{ token: WINDOW }], target: i0.ɵɵFactoryTarget.Injectable });
WindowResizeObserverRef.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: WindowResizeObserverRef });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: WindowResizeObserverRef, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: Window, decorators: [{
                    type: Inject,
                    args: [WINDOW]
                }] }]; } });
export class PolyfillResizeObserverRef extends ResizeObserverRef {
    resizeObserver(callback) {
        return new ResizeObserver(callback);
    }
}
PolyfillResizeObserverRef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PolyfillResizeObserverRef, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
PolyfillResizeObserverRef.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PolyfillResizeObserverRef });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PolyfillResizeObserverRef, decorators: [{
            type: Injectable
        }] });
export function resizeObservableFactory(windowResizeObserverRef, polyfillResizeObserverRef, windowRef) {
    if (windowRef.ResizeObserver) {
        return windowResizeObserverRef;
    }
    return polyfillResizeObserverRef;
}
export const resizeObservableProvider = {
    provide: RESIZE_OBSERVER,
    useFactory: resizeObservableFactory,
    deps: [WindowResizeObserverRef, PolyfillResizeObserverRef, WINDOW]
};
export const RESIZE_OBSERVABLE_PROVIDERS = [
    WindowResizeObserverRef,
    PolyfillResizeObserverRef,
    resizeObservableProvider
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVyLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy90YWJsZS9zZXJ2aWNlcy9yZXNpemUtb2JzZXJ2ZXIucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQWpELGlEQUFpRDtBQUVqRCxPQUFPLEVBQW1CLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRTVELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXBFLE1BQU0sT0FBZ0IsaUJBQWlCO0lBQ3JDLGNBQWMsQ0FBQyxRQUFnQztRQUM3QyxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBR0QsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGlCQUFpQjtJQUM1RCxZQUFvQyxNQUFjO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBRDBCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFnQztRQUM3QyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7b0hBUFUsdUJBQXVCLGtCQUNkLE1BQU07d0hBRGYsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVU7OzBCQUVJLE1BQU07MkJBQUMsTUFBTTs7QUFVNUIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGlCQUFpQjtJQUM5RCxjQUFjLENBQUMsUUFBZ0M7UUFDN0MsT0FBTyxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDOztzSEFIVSx5QkFBeUI7MEhBQXpCLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQURyQyxVQUFVOztBQU9YLE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsdUJBQWdELEVBQ2hELHlCQUFvRCxFQUNwRCxTQUFpQjtJQUVqQixJQUFJLFNBQVMsQ0FBQyxjQUFjLEVBQUU7UUFDNUIsT0FBTyx1QkFBdUIsQ0FBQztLQUNoQztJQUVELE9BQU8seUJBQXlCLENBQUM7QUFDbkMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFvQjtJQUN2RCxPQUFPLEVBQUUsZUFBZTtJQUN4QixVQUFVLEVBQUUsdUJBQXVCO0lBQ25DLElBQUksRUFBRSxDQUFDLHVCQUF1QixFQUFFLHlCQUF5QixFQUFFLE1BQU0sQ0FBQztDQUNuRSxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekMsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix3QkFBd0I7Q0FDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwicmVzaXplLW9ic2VydmVyLWJyb3dzZXJcIiAvPlxuXG5pbXBvcnQgeyBGYWN0b3J5UHJvdmlkZXIsIEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNhbGxiYWNrJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy93aW5kb3cucHJvdmlkZXInO1xuXG5leHBvcnQgY29uc3QgUkVTSVpFX09CU0VSVkVSID0gbmV3IEluamVjdGlvblRva2VuKCdSZXNpemVPYnNlcnZlcicpO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzaXplT2JzZXJ2ZXJSZWYge1xuICByZXNpemVPYnNlcnZlcihjYWxsYmFjazogUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayk6IFJlc2l6ZU9ic2VydmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2luZG93UmVzaXplT2JzZXJ2ZXJSZWYgZXh0ZW5kcyBSZXNpemVPYnNlcnZlclJlZiB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbmRvdzogV2luZG93KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrOiBSZXNpemVPYnNlcnZlckNhbGxiYWNrKTogUmVzaXplT2JzZXJ2ZXIge1xuICAgIHJldHVybiBuZXcgdGhpcy53aW5kb3cuUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2x5ZmlsbFJlc2l6ZU9ic2VydmVyUmVmIGV4dGVuZHMgUmVzaXplT2JzZXJ2ZXJSZWYge1xuICByZXNpemVPYnNlcnZlcihjYWxsYmFjazogUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayk6IFJlc2l6ZU9ic2VydmVyIHtcbiAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplT2JzZXJ2YWJsZUZhY3RvcnkoXG4gIHdpbmRvd1Jlc2l6ZU9ic2VydmVyUmVmOiBXaW5kb3dSZXNpemVPYnNlcnZlclJlZixcbiAgcG9seWZpbGxSZXNpemVPYnNlcnZlclJlZjogUG9seWZpbGxSZXNpemVPYnNlcnZlclJlZixcbiAgd2luZG93UmVmOiBXaW5kb3dcbik6IFBvbHlmaWxsUmVzaXplT2JzZXJ2ZXJSZWYge1xuICBpZiAod2luZG93UmVmLlJlc2l6ZU9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHdpbmRvd1Jlc2l6ZU9ic2VydmVyUmVmO1xuICB9XG5cbiAgcmV0dXJuIHBvbHlmaWxsUmVzaXplT2JzZXJ2ZXJSZWY7XG59XG5cbmV4cG9ydCBjb25zdCByZXNpemVPYnNlcnZhYmxlUHJvdmlkZXI6IEZhY3RvcnlQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogUkVTSVpFX09CU0VSVkVSLFxuICB1c2VGYWN0b3J5OiByZXNpemVPYnNlcnZhYmxlRmFjdG9yeSxcbiAgZGVwczogW1dpbmRvd1Jlc2l6ZU9ic2VydmVyUmVmLCBQb2x5ZmlsbFJlc2l6ZU9ic2VydmVyUmVmLCBXSU5ET1ddXG59O1xuXG5leHBvcnQgY29uc3QgUkVTSVpFX09CU0VSVkFCTEVfUFJPVklERVJTID0gW1xuICBXaW5kb3dSZXNpemVPYnNlcnZlclJlZixcbiAgUG9seWZpbGxSZXNpemVPYnNlcnZlclJlZixcbiAgcmVzaXplT2JzZXJ2YWJsZVByb3ZpZGVyXG5dO1xuIl19