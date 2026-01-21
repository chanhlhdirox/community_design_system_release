import { Injectable } from '@angular/core';
import { TableDisplayDensityEnum } from '../enums/table-display-density.enum';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TableDisplayDensityService {
    constructor() {
        this.displayDensityMode$ = new BehaviorSubject(TableDisplayDensityEnum.REGULAR);
    }
    setDisplayDensity(mode) {
        this.displayDensityMode$.next(mode);
    }
    getDisplayDensity() {
        return this.displayDensityMode$;
    }
}
TableDisplayDensityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableDisplayDensityService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TableDisplayDensityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableDisplayDensityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableDisplayDensityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGlzcGxheS1kZW5zaXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3RhYmxlL3NlcnZpY2VzL3RhYmxlLWRpc3BsYXktZGVuc2l0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7QUFLaEQsTUFBTSxPQUFPLDBCQUEwQjtJQUtyQztRQUpBLHdCQUFtQixHQUFxQyxJQUFJLGVBQWUsQ0FDekUsdUJBQXVCLENBQUMsT0FBTyxDQUNoQyxDQUFDO0lBRWEsQ0FBQztJQUVoQixpQkFBaUIsQ0FBQyxJQUE2QjtRQUM3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzt1SEFiVSwwQkFBMEI7MkhBQTFCLDBCQUEwQixjQUZ6QixNQUFNOzJGQUVQLDBCQUEwQjtrQkFIdEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZURpc3BsYXlEZW5zaXR5RW51bSB9IGZyb20gJy4uL2VudW1zL3RhYmxlLWRpc3BsYXktZGVuc2l0eS5lbnVtJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZURpc3BsYXlEZW5zaXR5U2VydmljZSB7XG4gIGRpc3BsYXlEZW5zaXR5TW9kZSQ6IFN1YmplY3Q8VGFibGVEaXNwbGF5RGVuc2l0eUVudW0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICBUYWJsZURpc3BsYXlEZW5zaXR5RW51bS5SRUdVTEFSXG4gICk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldERpc3BsYXlEZW5zaXR5KG1vZGU6IFRhYmxlRGlzcGxheURlbnNpdHlFbnVtKSB7XG4gICAgdGhpcy5kaXNwbGF5RGVuc2l0eU1vZGUkLm5leHQobW9kZSk7XG4gIH1cblxuICBnZXREaXNwbGF5RGVuc2l0eSgpOiBTdWJqZWN0PFRhYmxlRGlzcGxheURlbnNpdHlFbnVtPiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheURlbnNpdHlNb2RlJDtcbiAgfVxufVxuIl19