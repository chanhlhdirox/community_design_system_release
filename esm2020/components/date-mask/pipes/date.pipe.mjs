import { Pipe } from '@angular/core';
import { format } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "../services/date-format.service";
export class DatePipe {
    constructor(dateFormatService) {
        this.dateFormatService = dateFormatService;
    }
    transform(value) {
        const localFormat = this.dateFormatService.dateFormat || 'yyyy-MM-dd';
        if (!value) {
            return '';
        }
        if (typeof value === 'string') {
            return format(new Date(value), localFormat);
        }
        else {
            return format(value, localFormat);
        }
    }
}
DatePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DatePipe, deps: [{ token: i1.DateFormatService }], target: i0.ɵɵFactoryTarget.Pipe });
DatePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: DatePipe, name: "upDate" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'upDate',
                    pure: true
                }]
        }], ctorParameters: function () { return [{ type: i1.DateFormatService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdXAvY29tcG9uZW50cy9kYXRlLW1hc2svcGlwZXMvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQU9sQyxNQUFNLE9BQU8sUUFBUTtJQUNuQixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFFNUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7cUdBYlUsUUFBUTttR0FBUixRQUFROzJGQUFSLFFBQVE7a0JBSnBCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLElBQUk7aUJBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGUtZm9ybWF0LnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd1cERhdGUnLFxuICBwdXJlOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUZvcm1hdFNlcnZpY2U6IERhdGVGb3JtYXRTZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2NhbEZvcm1hdCA9IHRoaXMuZGF0ZUZvcm1hdFNlcnZpY2UuZGF0ZUZvcm1hdCB8fCAneXl5eS1NTS1kZCc7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZSh2YWx1ZSksIGxvY2FsRm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSwgbG9jYWxGb3JtYXQpO1xuICAgIH1cbiAgfVxufVxuIl19