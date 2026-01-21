import { Injectable } from '@angular/core';
import { UploadPanelItem } from '../helpers/upload-panel-item';
import * as i0 from "@angular/core";
export class UploadPanelService {
    constructor() {
        this.documentUploads = [];
    }
    get uploadCount() {
        return this.documentUploads.filter((item) => item.status === 'in_progress').length;
    }
    get isUploadProcessCompletedSuccessfully() {
        return (this.documentUploads.length > 0 &&
            this.documentUploads.every((document) => document.status !== 'in_progress'));
    }
    get isUploadStarted() {
        return this.documentUploads.length > 0;
    }
    upload(config) {
        const item = new UploadPanelItem(config);
        this.documentUploads.push(item);
        item.upload();
    }
    reset() {
        this.documentUploads.forEach((item) => item.cancel());
        this.documentUploads = [];
    }
    handleClosePanel() {
        this.reset();
    }
}
UploadPanelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UploadPanelService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UploadPanelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UploadPanelService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UploadPanelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXBhbmVsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3VwbG9hZC1wYW5lbC9zZXJ2aWNlcy91cGxvYWQtcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQTJCLE1BQU0sOEJBQThCLENBQUM7O0FBS3hGLE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFJRSxvQkFBZSxHQUFzQixFQUFFLENBQUM7S0ErQnpDO0lBN0JDLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3JGLENBQUM7SUFFRCxJQUFJLG9DQUFvQztRQUN0QyxPQUFPLENBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxhQUFhLENBQUMsQ0FDNUUsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUErQjtRQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7OytHQS9CVSxrQkFBa0I7bUhBQWxCLGtCQUFrQixjQUZqQixNQUFNOzJGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcGxvYWRQYW5lbEl0ZW0sIFVwbG9hZEl0ZW1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi4vaGVscGVycy91cGxvYWQtcGFuZWwtaXRlbSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFBhbmVsU2VydmljZSB7XG4gIGRvY3VtZW50VXBsb2FkczogVXBsb2FkUGFuZWxJdGVtW10gPSBbXTtcblxuICBnZXQgdXBsb2FkQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudFVwbG9hZHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gJ2luX3Byb2dyZXNzJykubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGlzVXBsb2FkUHJvY2Vzc0NvbXBsZXRlZFN1Y2Nlc3NmdWxseSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5kb2N1bWVudFVwbG9hZHMubGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5kb2N1bWVudFVwbG9hZHMuZXZlcnkoKGRvY3VtZW50KSA9PiBkb2N1bWVudC5zdGF0dXMgIT09ICdpbl9wcm9ncmVzcycpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBpc1VwbG9hZFN0YXJ0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRVcGxvYWRzLmxlbmd0aCA+IDA7XG4gIH1cblxuICB1cGxvYWQoY29uZmlnOiBVcGxvYWRJdGVtQ29uZmlndXJhdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSBuZXcgVXBsb2FkUGFuZWxJdGVtKGNvbmZpZyk7XG4gICAgdGhpcy5kb2N1bWVudFVwbG9hZHMucHVzaChpdGVtKTtcbiAgICBpdGVtLnVwbG9hZCgpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5kb2N1bWVudFVwbG9hZHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jYW5jZWwoKSk7XG4gICAgdGhpcy5kb2N1bWVudFVwbG9hZHMgPSBbXTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG59XG4iXX0=