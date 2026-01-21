import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DateFormatService {
    constructor() {
        this.dateFormat$ = 'dd-MM-yyyy';
        this.delimiter = '-';
    }
    set dateFormat(format) {
        if (this.isValidFormat(format)) {
            this.dateFormat$ = format;
            return;
        }
        const normalisedDateFormat = format.replace(/[^M]/g, (txt) => txt.toLowerCase());
        if (this.isValidFormat(normalisedDateFormat)) {
            this.dateFormat$ = normalisedDateFormat;
            return;
        }
    }
    get dateFormat() {
        return this.dateFormat$ || `dd${this.delimiter}MM${this.delimiter}yyyy`;
    }
    isValidFormat(format) {
        return ['dd-MM-yyyy', 'MM-dd-yyyy', 'yyyy-MM-dd', 'dd/MM/yyyy', 'MM/dd/yyyy'].includes(format);
    }
}
DateFormatService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DateFormatService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DateFormatService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DateFormatService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DateFormatService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VwL2NvbXBvbmVudHMvZGF0ZS1tYXNrL3NlcnZpY2VzL2RhdGUtZm9ybWF0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QjtRQUhRLGdCQUFXLEdBQXFCLFlBQVksQ0FBQztRQUM3QyxjQUFTLEdBQUcsR0FBRyxDQUFDO0lBRVQsQ0FBQztJQUVoQixJQUFJLFVBQVUsQ0FBQyxNQUF3QjtRQUNyQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDMUIsT0FBTztTQUNSO1FBRUQsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBd0MsQ0FBQztZQUM1RCxPQUFPO1NBQ1I7SUFDSCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxNQUEyQixDQUFDO0lBQ2hHLENBQUM7SUFFTyxhQUFhLENBQUMsTUFBYztRQUNsQyxPQUFPLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs4R0F6QlUsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FGaEIsTUFBTTsyRkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXBEYXRlRm9ybWF0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9kYXRlLWZvcm1hdC10eXBlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFNlcnZpY2Uge1xuICBwcml2YXRlIGRhdGVGb3JtYXQkOiBVcERhdGVGb3JtYXRUeXBlID0gJ2RkLU1NLXl5eXknO1xuICBwcml2YXRlIGRlbGltaXRlciA9ICctJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0IGRhdGVGb3JtYXQoZm9ybWF0OiBVcERhdGVGb3JtYXRUeXBlKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZEZvcm1hdChmb3JtYXQpKSB7XG4gICAgICB0aGlzLmRhdGVGb3JtYXQkID0gZm9ybWF0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vcm1hbGlzZWREYXRlRm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1teTV0vZywgKHR4dCkgPT4gdHh0LnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmICh0aGlzLmlzVmFsaWRGb3JtYXQobm9ybWFsaXNlZERhdGVGb3JtYXQpKSB7XG4gICAgICB0aGlzLmRhdGVGb3JtYXQkID0gbm9ybWFsaXNlZERhdGVGb3JtYXQgYXMgVXBEYXRlRm9ybWF0VHlwZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBnZXQgZGF0ZUZvcm1hdCgpOiBVcERhdGVGb3JtYXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybWF0JCB8fCAoYGRkJHt0aGlzLmRlbGltaXRlcn1NTSR7dGhpcy5kZWxpbWl0ZXJ9eXl5eWAgYXMgVXBEYXRlRm9ybWF0VHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGlzVmFsaWRGb3JtYXQoZm9ybWF0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gWydkZC1NTS15eXl5JywgJ01NLWRkLXl5eXknLCAneXl5eS1NTS1kZCcsICdkZC9NTS95eXl5JywgJ01NL2RkL3l5eXknXS5pbmNsdWRlcyhmb3JtYXQpO1xuICB9XG59XG4iXX0=