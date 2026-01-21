import { Pipe } from '@angular/core';
import Big from 'big.js';
import { isNaN } from 'lodash';
import { formatNumber } from 'accounting';
import * as i0 from "@angular/core";
import * as i1 from "../services/decimal-separator.service";
export class NumberPipe {
    constructor(decimalSeparatorService) {
        this.decimalSeparatorService = decimalSeparatorService;
        this.MAX_DECIMALS = 20;
    }
    transform(value, numberOfDecimals) {
        if (!isNaN(parseFloat(value))) {
            const viewValue = Big(value);
            let stringValue = viewValue.toString();
            let fractional;
            if (numberOfDecimals || numberOfDecimals === 0) {
                stringValue = viewValue.toFixed(numberOfDecimals);
                fractional = stringValue.split('.')[1];
            }
            else {
                fractional = stringValue.split('.')[1];
                fractional =
                    fractional && fractional.length > this.MAX_DECIMALS
                        ? this.roundIntegerPart(fractional)
                        : fractional;
            }
            let decimal = stringValue.split('.')[0];
            if (decimal !== '-0') {
                decimal = formatNumber(decimal, 0, this.decimalSeparatorService.thousandSeparator, this.decimalSeparatorService.separator);
            }
            return fractional
                ? `${decimal}${this.decimalSeparatorService.separator}${fractional}`
                : `${decimal}`;
        }
    }
    roundIntegerPart(value) {
        return Big(`${value.substring(0, 20)}.${value.substring(20)}`)
            .round()
            .toString();
    }
}
NumberPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NumberPipe, deps: [{ token: i1.DecimalSeparatorService }], target: i0.ɵɵFactoryTarget.Pipe });
NumberPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: NumberPipe, name: "upNumber" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: NumberPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'upNumber'
                }]
        }], ctorParameters: function () { return [{ type: i1.DecimalSeparatorService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL251bWVyaWNhbC1tYXNrL3BpcGVzL251bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQztBQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQU0xQyxNQUFNLE9BQU8sVUFBVTtJQUdyQixZQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUZwRSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUVxRCxDQUFDO0lBRXhFLFNBQVMsQ0FBQyxLQUFVLEVBQUUsZ0JBQXlCO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QyxJQUFJLFVBQVUsQ0FBQztZQUVmLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO2dCQUM5QyxXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNsRCxVQUFVLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxVQUFVLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsVUFBVTtvQkFDUixVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWTt3QkFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxVQUFVLENBQUM7YUFDbEI7WUFFRCxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDcEIsT0FBTyxHQUFHLFlBQVksQ0FDcEIsT0FBTyxFQUNQLENBQUMsRUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLEVBQzlDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQ3ZDLENBQUM7YUFDSDtZQUVELE9BQU8sVUFBVTtnQkFDZixDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsR0FBRyxVQUFVLEVBQUU7Z0JBQ3BFLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQUs7UUFDNUIsT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDM0QsS0FBSyxFQUFFO2FBQ1AsUUFBUSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7dUdBMUNVLFVBQVU7cUdBQVYsVUFBVTsyRkFBVixVQUFVO2tCQUh0QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBCaWcgZnJvbSAnYmlnLmpzJztcbmltcG9ydCB7IGlzTmFOIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gJ2FjY291bnRpbmcnO1xuaW1wb3J0IHsgRGVjaW1hbFNlcGFyYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kZWNpbWFsLXNlcGFyYXRvci5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAndXBOdW1iZXInXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgTUFYX0RFQ0lNQUxTID0gMjA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWNpbWFsU2VwYXJhdG9yU2VydmljZTogRGVjaW1hbFNlcGFyYXRvclNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIG51bWJlck9mRGVjaW1hbHM/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICghaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpKSB7XG4gICAgICBjb25zdCB2aWV3VmFsdWUgPSBCaWcodmFsdWUpO1xuICAgICAgbGV0IHN0cmluZ1ZhbHVlID0gdmlld1ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgZnJhY3Rpb25hbDtcblxuICAgICAgaWYgKG51bWJlck9mRGVjaW1hbHMgfHwgbnVtYmVyT2ZEZWNpbWFscyA9PT0gMCkge1xuICAgICAgICBzdHJpbmdWYWx1ZSA9IHZpZXdWYWx1ZS50b0ZpeGVkKG51bWJlck9mRGVjaW1hbHMpO1xuICAgICAgICBmcmFjdGlvbmFsID0gc3RyaW5nVmFsdWUuc3BsaXQoJy4nKVsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyYWN0aW9uYWwgPSBzdHJpbmdWYWx1ZS5zcGxpdCgnLicpWzFdO1xuICAgICAgICBmcmFjdGlvbmFsID1cbiAgICAgICAgICBmcmFjdGlvbmFsICYmIGZyYWN0aW9uYWwubGVuZ3RoID4gdGhpcy5NQVhfREVDSU1BTFNcbiAgICAgICAgICAgID8gdGhpcy5yb3VuZEludGVnZXJQYXJ0KGZyYWN0aW9uYWwpXG4gICAgICAgICAgICA6IGZyYWN0aW9uYWw7XG4gICAgICB9XG5cbiAgICAgIGxldCBkZWNpbWFsID0gc3RyaW5nVmFsdWUuc3BsaXQoJy4nKVswXTtcbiAgICAgIGlmIChkZWNpbWFsICE9PSAnLTAnKSB7XG4gICAgICAgIGRlY2ltYWwgPSBmb3JtYXROdW1iZXIoXG4gICAgICAgICAgZGVjaW1hbCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMuZGVjaW1hbFNlcGFyYXRvclNlcnZpY2UudGhvdXNhbmRTZXBhcmF0b3IsXG4gICAgICAgICAgdGhpcy5kZWNpbWFsU2VwYXJhdG9yU2VydmljZS5zZXBhcmF0b3JcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZyYWN0aW9uYWxcbiAgICAgICAgPyBgJHtkZWNpbWFsfSR7dGhpcy5kZWNpbWFsU2VwYXJhdG9yU2VydmljZS5zZXBhcmF0b3J9JHtmcmFjdGlvbmFsfWBcbiAgICAgICAgOiBgJHtkZWNpbWFsfWA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByb3VuZEludGVnZXJQYXJ0KHZhbHVlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQmlnKGAke3ZhbHVlLnN1YnN0cmluZygwLCAyMCl9LiR7dmFsdWUuc3Vic3RyaW5nKDIwKX1gKVxuICAgICAgLnJvdW5kKClcbiAgICAgIC50b1N0cmluZygpO1xuICB9XG59XG4iXX0=