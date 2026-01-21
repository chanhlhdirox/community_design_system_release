import { Injectable } from '@angular/core';
import { Separator } from '../enum/separator.enum';
import * as i0 from "@angular/core";
export class DecimalSeparatorService {
    constructor() {
        this.decimalSeparator = Separator.DOT;
    }
    set separator(separator) {
        this.decimalSeparator = separator;
    }
    get separator() {
        return this.decimalSeparator;
    }
    get thousandSeparator() {
        return this.decimalSeparator === Separator.DOT ? Separator.COMMA : Separator.DOT;
    }
}
DecimalSeparatorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DecimalSeparatorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DecimalSeparatorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DecimalSeparatorService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DecimalSeparatorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaW1hbC1zZXBhcmF0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvbnVtZXJpY2FsLW1hc2svc2VydmljZXMvZGVjaW1hbC1zZXBhcmF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQztRQUZRLHFCQUFnQixHQUFjLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFFckMsQ0FBQztJQUVoQixJQUFJLFNBQVMsQ0FBQyxTQUFvQjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUNuRixDQUFDOztvSEFmVSx1QkFBdUI7d0hBQXZCLHVCQUF1QixjQUZ0QixNQUFNOzJGQUVQLHVCQUF1QjtrQkFIbkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tICcuLi9lbnVtL3NlcGFyYXRvci5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGVjaW1hbFNlcGFyYXRvclNlcnZpY2Uge1xuICBwcml2YXRlIGRlY2ltYWxTZXBhcmF0b3I6IFNlcGFyYXRvciA9IFNlcGFyYXRvci5ET1Q7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldCBzZXBhcmF0b3Ioc2VwYXJhdG9yOiBTZXBhcmF0b3IpIHtcbiAgICB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG4gIH1cblxuICBnZXQgc2VwYXJhdG9yKCk6IFNlcGFyYXRvciB7XG4gICAgcmV0dXJuIHRoaXMuZGVjaW1hbFNlcGFyYXRvcjtcbiAgfVxuXG4gIGdldCB0aG91c2FuZFNlcGFyYXRvcigpOiBTZXBhcmF0b3Ige1xuICAgIHJldHVybiB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPT09IFNlcGFyYXRvci5ET1QgPyBTZXBhcmF0b3IuQ09NTUEgOiBTZXBhcmF0b3IuRE9UO1xuICB9XG59XG4iXX0=