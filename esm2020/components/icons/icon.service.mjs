import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class UpIconService {
    constructor() {
        this.svgIcons = new Map();
    }
    registerIcons(icons) {
        icons.forEach((icon) => this.svgIcons.set(icon.name, icon.data));
    }
    findIcon(iconId) {
        const icon = this.svgIcons.get(iconId);
        if (!icon) {
            console.warn(`Icon with name "${iconId}" does not exist or is not registered in the module.`);
            return '';
        }
        return icon;
    }
}
UpIconService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UpIconService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UpIconService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9pY29ucy9pY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0MsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFFRSxhQUFRLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO0tBYzNEO0lBWkMsYUFBYSxDQUFDLEtBQWU7UUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sc0RBQXNELENBQUMsQ0FBQztZQUM5RixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzswR0FkVSxhQUFhOzhHQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVwSWNvbiB9IGZyb20gJy4vbGliJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwSWNvblNlcnZpY2Uge1xuICBzdmdJY29uczogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgcmVnaXN0ZXJJY29ucyhpY29uczogVXBJY29uW10pOiB2b2lkIHtcbiAgICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB0aGlzLnN2Z0ljb25zLnNldChpY29uLm5hbWUsIGljb24uZGF0YSkpO1xuICB9XG5cbiAgZmluZEljb24oaWNvbklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLnN2Z0ljb25zLmdldChpY29uSWQpO1xuICAgIGlmICghaWNvbikge1xuICAgICAgY29uc29sZS53YXJuKGBJY29uIHdpdGggbmFtZSBcIiR7aWNvbklkfVwiIGRvZXMgbm90IGV4aXN0IG9yIGlzIG5vdCByZWdpc3RlcmVkIGluIHRoZSBtb2R1bGUuYCk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBpY29uO1xuICB9XG59XG4iXX0=