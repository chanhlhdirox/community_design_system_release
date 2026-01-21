import { Pipe } from '@angular/core';
import { format, isValid } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "../services/date-format.service";
export class TimePipe {
    constructor(dateFormatService) {
        this.dateFormatService = dateFormatService;
    }
    transform(value, args) {
        const localFormat = args?.format || (this.dateFormatService.dateFormat || 'yyyy-MM-dd') + ' HH:mm';
        if (!value) {
            return '';
        }
        if (typeof value === 'string') {
            const parsedDate = new Date(value);
            if (isValid(parsedDate)) {
                return format(parsedDate, localFormat);
            }
            else {
                return '';
            }
        }
        else {
            return format(value, localFormat);
        }
    }
}
TimePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TimePipe, deps: [{ token: i1.DateFormatService }], target: i0.ɵɵFactoryTarget.Pipe });
TimePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: TimePipe, name: "upTime" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TimePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'upTime'
                }]
        }], ctorParameters: function () { return [{ type: i1.DateFormatService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9kYXRlLW1hc2svcGlwZXMvdGltZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBRTVELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBMEI7UUFDOUMsTUFBTSxXQUFXLEdBQ2YsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7O3FHQW5CVSxRQUFRO21HQUFSLFFBQVE7MkZBQVIsUUFBUTtrQkFIcEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdCwgaXNWYWxpZCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IERhdGVGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0ZS1mb3JtYXQuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3VwVGltZSdcbn0pXG5leHBvcnQgY2xhc3MgVGltZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlRm9ybWF0U2VydmljZTogRGF0ZUZvcm1hdFNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiB7IGZvcm1hdD86IHN0cmluZyB9KTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2NhbEZvcm1hdCA9XG4gICAgICBhcmdzPy5mb3JtYXQgfHwgKHRoaXMuZGF0ZUZvcm1hdFNlcnZpY2UuZGF0ZUZvcm1hdCB8fCAneXl5eS1NTS1kZCcpICsgJyBISDptbSc7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIGlmIChpc1ZhbGlkKHBhcnNlZERhdGUpKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQocGFyc2VkRGF0ZSwgbG9jYWxGb3JtYXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm9ybWF0KHZhbHVlLCBsb2NhbEZvcm1hdCk7XG4gICAgfVxuICB9XG59XG4iXX0=