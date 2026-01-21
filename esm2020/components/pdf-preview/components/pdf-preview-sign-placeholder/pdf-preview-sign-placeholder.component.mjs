import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent, merge, Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
export class PdfPreviewSignPlaceholderComponent {
    constructor(ngZone, renderer) {
        this.ngZone = ngZone;
        this.mouseSensibility = 10;
        this.coordinates = new EventEmitter();
        this.destroy$ = new Subject();
        this.isDragging = false;
        this.SPAN_CLASSNAME = 'signPlaceholderText';
        this.SIGN_PLACEHOLDER_CONTAINER = 'signPlaceholderContainer';
        this.PDF_CONTAINER_CLASSNAME = 'up-pdf-preview-viewer-container';
        this.renderer = renderer;
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    createSignPlaceholder() {
        if (this.placeHolderContainer || this.span) {
            return;
        }
        this.calculatePDFCoordinates(100, 300);
        this.ngZone.runOutsideAngular(() => {
            this.createSignPlaceholderDOMElement();
            this.bindSignPlaceholder();
        });
    }
    createSignPlaceholderDOMElement() {
        this.span = document.createElement('span');
        this.span.textContent = this.labelPlaceholder;
        this.span.className = this.SPAN_CLASSNAME;
        this.placeHolderContainer = document.createElement('div');
        this.placeHolderContainer.style.width = `${this.placeHolderSize.width}px`;
        this.placeHolderContainer.style.height = `${this.placeHolderSize.height}px`;
        this.placeHolderContainer.className = this.SIGN_PLACEHOLDER_CONTAINER;
        this.placeHolderContainer.setAttribute('data-test', 'signPlaceholderContainer');
        this.placeHolderContainer.appendChild(this.span);
        const parentElementContainer = this.parentElement.nativeElement.querySelector(`.${this.PDF_CONTAINER_CLASSNAME}`) ||
            document.querySelector(`.${this.PDF_CONTAINER_CLASSNAME}`);
        parentElementContainer.appendChild(this.placeHolderContainer);
    }
    bindSignPlaceholder() {
        const container = this.parentElement?.nativeElement?.querySelector('.up-pdf-preview-viewer-container') ||
            document.querySelector('.up-pdf-preview-viewer-container');
        const placeholder = this.parentElement?.nativeElement.querySelector('.up-pdf-preview-viewer-container .signPlaceholderContainer') || document.querySelector('.up-pdf-preview-viewer-container .signPlaceholderContainer');
        fromEvent(placeholder, 'mousedown')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.isDragging = true;
        });
        fromEvent(placeholder, 'mouseup')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.isDragging = false;
        });
        const scroll$ = fromEvent(window, 'scroll');
        const mouseMove$ = fromEvent(placeholder, 'mousemove');
        const mouseMoveOnContainer$ = fromEvent(container, 'mousemove');
        merge(scroll$, mouseMove$, mouseMoveOnContainer$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((event) => {
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
            }
            this.hoveringPageNumber = this.page;
            this.animationFrame = requestAnimationFrame(() => {
                this.calculateSignPlaceHolderOffSet();
                if (!event?.pageX && !event?.pageY) {
                    this.animationFrame = null;
                    this.isDragging = false;
                }
                if (this.isMouseOutsidePdfContainer(event)) {
                    this.animationFrame = null;
                    this.isDragging = false;
                }
                if (this.isDragging) {
                    this.showSingPlaceholder(event);
                }
            });
        });
    }
    showSingPlaceholder(event) {
        const mx = event.pageX - this.signPlaceholderContainerOffset.left;
        const my = event.pageY - this.signPlaceholderContainerOffset.top;
        const container = this.parentElement?.nativeElement?.querySelector(`.${this.PDF_CONTAINER_CLASSNAME} .up-pdf-preview-viewer .pdfViewer`) ||
            document.querySelector(`.${this.PDF_CONTAINER_CLASSNAME} .up-pdf-preview-viewer .pdfViewer`);
        let mxWithPlaceHolder = mx - parseInt(this.placeHolderSize.width.toString(), 10) / 2;
        let myWithPlaceHolder = my - parseInt(this.placeHolderSize.height.toString(), 10) / 2 - container?.scrollTop;
        if (mxWithPlaceHolder > 0 &&
            mxWithPlaceHolder <= mx + this.placeHolderSize.width / 2 - this.mouseSensibility &&
            myWithPlaceHolder > 0 &&
            myWithPlaceHolder <= my + this.placeHolderSize.height / 2 - this.mouseSensibility) {
            this.placeHolderContainer.style.left = mxWithPlaceHolder + 'px';
            this.placeHolderContainer.style.top = myWithPlaceHolder + 'px';
            this.calculatePDFCoordinates(mxWithPlaceHolder, myWithPlaceHolder);
        }
    }
    calculateSignPlaceHolderOffSet() {
        this.pageElement =
            this.parentElement?.nativeElement?.querySelector(`.${this.PDF_CONTAINER_CLASSNAME} .page`) ||
                document.querySelector(`.${this.PDF_CONTAINER_CLASSNAME} .page`);
        const containerElement = this.parentElement?.nativeElement?.querySelector(`.${this.PDF_CONTAINER_CLASSNAME}`) ||
            document.querySelector(`.${this.PDF_CONTAINER_CLASSNAME}`);
        const pageElementStyle = getComputedStyle(this.pageElement, null);
        const containerElementStyle = getComputedStyle(containerElement, null);
        this.signPlaceHolderContainerWidth = parseFloat(pageElementStyle?.width.replace('px', ''));
        this.signPlaceHolderContainerHeight = parseFloat(pageElementStyle?.height.replace('px', ''));
        this.containerWidth = parseFloat(containerElementStyle?.width.replace('px', ''));
        this.containerHeight = parseFloat(containerElementStyle?.height.replace('px', ''));
        const rect = this.pageElement?.getBoundingClientRect();
        this.signPlaceholderContainerOffset = {
            top: rect.top + (window.scrollY || window.pageYOffset),
            left: rect.left + (window.scrollX || window.pageXOffset)
        };
    }
    calculatePDFCoordinates(x, y) {
        this.document.getPage(this.page).then((page) => {
            const viewPort = page.getViewport({ scale: 0.92 });
            let lower = viewPort.convertToPdfPoint(x, y + this.placeHolderSize.height);
            let upper = viewPort.convertToPdfPoint(x + this.placeHolderSize.width, y);
            this.coordinates.emit({
                llx: String(Math.round(lower[0])),
                lly: String(Math.round(lower[1])),
                urx: String(Math.round(upper[0])),
                ury: String(Math.round(upper[1])),
                page: String(this.page)
            });
        });
    }
    isMouseOutsidePdfContainer(event) {
        return (event.pageY <= this.signPlaceholderContainerOffset?.top + this.placeHolderSize.height / 2 ||
            event.pageY >= this.signPlaceholderContainerOffset?.top + this.signPlaceHolderContainerHeight - this.placeHolderSize.height / 2 ||
            event.pageX <= this.signPlaceholderContainerOffset?.left + this.placeHolderSize.width / 2 + this.mouseSensibility ||
            event.pageX >=
                this.signPlaceholderContainerOffset?.left +
                    this.signPlaceHolderContainerWidth -
                    this.placeHolderSize.width / 2 -
                    this.mouseSensibility);
    }
}
PdfPreviewSignPlaceholderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewSignPlaceholderComponent, deps: [{ token: i0.NgZone }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
PdfPreviewSignPlaceholderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: PdfPreviewSignPlaceholderComponent, selector: "up-pdf-preview-sign-placeholder", inputs: { parentElement: "parentElement", document: "document", page: "page", mouseSensibility: "mouseSensibility", placeHolderSize: "placeHolderSize", labelPlaceholder: "labelPlaceholder" }, outputs: { coordinates: "coordinates" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PdfPreviewSignPlaceholderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'up-pdf-preview-sign-placeholder',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.Renderer2 }]; }, propDecorators: { parentElement: [{
                type: Input
            }], document: [{
                type: Input
            }], page: [{
                type: Input
            }], mouseSensibility: [{
                type: Input
            }], placeHolderSize: [{
                type: Input
            }], labelPlaceholder: [{
                type: Input
            }], coordinates: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXZpZXctc2lnbi1wbGFjZWhvbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9jb21wb25lbnRzL3BkZi1wcmV2aWV3L2NvbXBvbmVudHMvcGRmLXByZXZpZXctc2lnbi1wbGFjZWhvbGRlci9wZGYtcHJldmlldy1zaWduLXBsYWNlaG9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUUvRyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU01RCxNQUFNLE9BQU8sa0NBQWtDO0lBaUM3QyxZQUFvQixNQUFjLEVBQUUsUUFBbUI7UUFBbkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTdCekIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBSXJCLGdCQUFXLEdBQXVGLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkgsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXhDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFlbkIsbUJBQWMsR0FBRyxxQkFBcUIsQ0FBQztRQUN2QywrQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztRQUN4RCw0QkFBdUIsR0FBRyxpQ0FBaUMsQ0FBQztRQUtsRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzFDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyx1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QUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQREZEb2N1bWVudFByb3h5IH0gZnJvbSAnbmcyLXBkZi12aWV3ZXInO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VwLXBkZi1wcmV2aWV3LXNpZ24tcGxhY2Vob2xkZXInLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgUGRmUHJldmlld1NpZ25QbGFjZWhvbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHBhcmVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGRvY3VtZW50OiBQREZEb2N1bWVudFByb3h5O1xuICBASW5wdXQoKSBwYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1vdXNlU2Vuc2liaWxpdHkgPSAxMDtcbiAgQElucHV0KCkgcGxhY2VIb2xkZXJTaXplO1xuICBASW5wdXQoKSBsYWJlbFBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNvb3JkaW5hdGVzOiBFdmVudEVtaXR0ZXI8eyBsbHg6IHN0cmluZzsgbGx5OiBzdHJpbmc7IHVyeDogc3RyaW5nOyB1cnk6IHN0cmluZzsgcGFnZTogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICBwcml2YXRlIGhvdmVyaW5nUGFnZU51bWJlcjtcbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZTogbnVtYmVyO1xuICBwcml2YXRlIHBhZ2VFbGVtZW50O1xuXG4gIHByaXZhdGUgc2lnblBsYWNlaG9sZGVyQ29udGFpbmVyT2Zmc2V0OiB7IGxlZnQ/OiBudW1iZXI7IHJpZ2h0PzogbnVtYmVyOyB0b3A/OiBudW1iZXI7IGJvdHRvbT86IG51bWJlciB9O1xuICBwcml2YXRlIHNwYW46IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHBsYWNlSG9sZGVyQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBwcml2YXRlIHNpZ25QbGFjZUhvbGRlckNvbnRhaW5lcldpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgc2lnblBsYWNlSG9sZGVyQ29udGFpbmVySGVpZ2h0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBjb250YWluZXJXaWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGNvbnRhaW5lckhlaWdodDogbnVtYmVyO1xuXG4gIHByaXZhdGUgU1BBTl9DTEFTU05BTUUgPSAnc2lnblBsYWNlaG9sZGVyVGV4dCc7XG4gIHByaXZhdGUgU0lHTl9QTEFDRUhPTERFUl9DT05UQUlORVIgPSAnc2lnblBsYWNlaG9sZGVyQ29udGFpbmVyJztcbiAgcHJpdmF0ZSBQREZfQ09OVEFJTkVSX0NMQVNTTkFNRSA9ICd1cC1wZGYtcHJldmlldy12aWV3ZXItY29udGFpbmVyJztcblxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICB9XG5cbiAgY3JlYXRlU2lnblBsYWNlaG9sZGVyKCkge1xuICAgIGlmICh0aGlzLnBsYWNlSG9sZGVyQ29udGFpbmVyIHx8IHRoaXMuc3Bhbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FsY3VsYXRlUERGQ29vcmRpbmF0ZXMoMTAwLCAzMDApXG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVNpZ25QbGFjZWhvbGRlckRPTUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuYmluZFNpZ25QbGFjZWhvbGRlcigpO1xuICAgIH0pO1xuICB9XG5cblxuICBwcml2YXRlIGNyZWF0ZVNpZ25QbGFjZWhvbGRlckRPTUVsZW1lbnQoKSB7XG4gICAgdGhpcy5zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMuc3Bhbi50ZXh0Q29udGVudCA9IHRoaXMubGFiZWxQbGFjZWhvbGRlcjtcbiAgICB0aGlzLnNwYW4uY2xhc3NOYW1lID0gdGhpcy5TUEFOX0NMQVNTTkFNRTtcblxuICAgIHRoaXMucGxhY2VIb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnBsYWNlSG9sZGVyQ29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7dGhpcy5wbGFjZUhvbGRlclNpemUud2lkdGh9cHhgO1xuICAgIHRoaXMucGxhY2VIb2xkZXJDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5wbGFjZUhvbGRlclNpemUuaGVpZ2h0fXB4YDtcbiAgICB0aGlzLnBsYWNlSG9sZGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuU0lHTl9QTEFDRUhPTERFUl9DT05UQUlORVI7XG4gICAgdGhpcy5wbGFjZUhvbGRlckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsJ3NpZ25QbGFjZWhvbGRlckNvbnRhaW5lcicpXG5cbiAgICB0aGlzLnBsYWNlSG9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc3Bhbik7XG5cbiAgICBjb25zdCBwYXJlbnRFbGVtZW50Q29udGFpbmVyID1cbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuUERGX0NPTlRBSU5FUl9DTEFTU05BTUV9YCkgfHxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuUERGX0NPTlRBSU5FUl9DTEFTU05BTUV9YCk7XG4gICAgcGFyZW50RWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlSG9sZGVyQ29udGFpbmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFNpZ25QbGFjZWhvbGRlcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPVxuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Py5uYXRpdmVFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcudXAtcGRmLXByZXZpZXctdmlld2VyLWNvbnRhaW5lcicpIHx8XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXAtcGRmLXByZXZpZXctdmlld2VyLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPVxuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Py5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcudXAtcGRmLXByZXZpZXctdmlld2VyLWNvbnRhaW5lciAuc2lnblBsYWNlaG9sZGVyQ29udGFpbmVyJ1xuICAgICAgKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXAtcGRmLXByZXZpZXctdmlld2VyLWNvbnRhaW5lciAuc2lnblBsYWNlaG9sZGVyQ29udGFpbmVyJyk7XG5cbiAgICBmcm9tRXZlbnQocGxhY2Vob2xkZXIsICdtb3VzZWRvd24nKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICB9KTtcblxuICAgIGZyb21FdmVudChwbGFjZWhvbGRlciwgJ21vdXNldXAnKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBzY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpO1xuICAgIGNvbnN0IG1vdXNlTW92ZSQgPSBmcm9tRXZlbnQocGxhY2Vob2xkZXIsICdtb3VzZW1vdmUnKTtcbiAgICBjb25zdCBtb3VzZU1vdmVPbkNvbnRhaW5lciQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2Vtb3ZlJyk7XG5cbiAgICBtZXJnZShzY3JvbGwkLCBtb3VzZU1vdmUkLCBtb3VzZU1vdmVPbkNvbnRhaW5lciQpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ob3ZlcmluZ1BhZ2VOdW1iZXIgPSB0aGlzLnBhZ2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU2lnblBsYWNlSG9sZGVyT2ZmU2V0KCk7XG5cbiAgICAgICAgICBpZiAoIWV2ZW50Py5wYWdlWCAmJiAhZXZlbnQ/LnBhZ2VZKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmlzTW91c2VPdXRzaWRlUGRmQ29udGFpbmVyKGV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaW5nUGxhY2Vob2xkZXIoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1NpbmdQbGFjZWhvbGRlcihldmVudCkge1xuICAgIGNvbnN0IG14ID0gZXZlbnQucGFnZVggLSB0aGlzLnNpZ25QbGFjZWhvbGRlckNvbnRhaW5lck9mZnNldC5sZWZ0O1xuICAgIGNvbnN0IG15ID0gZXZlbnQucGFnZVkgLSB0aGlzLnNpZ25QbGFjZWhvbGRlckNvbnRhaW5lck9mZnNldC50b3A7XG5cbiAgICBjb25zdCBjb250YWluZXIgPVxuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Py5uYXRpdmVFbGVtZW50Py5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLlBERl9DT05UQUlORVJfQ0xBU1NOQU1FfSAudXAtcGRmLXByZXZpZXctdmlld2VyIC5wZGZWaWV3ZXJgKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5QREZfQ09OVEFJTkVSX0NMQVNTTkFNRX0gLnVwLXBkZi1wcmV2aWV3LXZpZXdlciAucGRmVmlld2VyYCk7XG5cbiAgICBsZXQgbXhXaXRoUGxhY2VIb2xkZXIgPSBteCAtIHBhcnNlSW50KHRoaXMucGxhY2VIb2xkZXJTaXplLndpZHRoLnRvU3RyaW5nKCksIDEwKSAvIDI7XG4gICAgbGV0IG15V2l0aFBsYWNlSG9sZGVyID0gbXkgLSBwYXJzZUludCh0aGlzLnBsYWNlSG9sZGVyU2l6ZS5oZWlnaHQudG9TdHJpbmcoKSwgMTApIC8gMiAtIGNvbnRhaW5lcj8uc2Nyb2xsVG9wO1xuXG4gICAgaWYgKFxuICAgICAgbXhXaXRoUGxhY2VIb2xkZXIgPiAwICYmXG4gICAgICBteFdpdGhQbGFjZUhvbGRlciA8PSBteCArIHRoaXMucGxhY2VIb2xkZXJTaXplLndpZHRoIC8gMiAtIHRoaXMubW91c2VTZW5zaWJpbGl0eSAmJlxuICAgICAgbXlXaXRoUGxhY2VIb2xkZXIgPiAwICYmXG4gICAgICBteVdpdGhQbGFjZUhvbGRlciA8PSBteSArIHRoaXMucGxhY2VIb2xkZXJTaXplLmhlaWdodCAvIDIgLSB0aGlzLm1vdXNlU2Vuc2liaWxpdHlcbiAgICApIHtcbiAgICAgIHRoaXMucGxhY2VIb2xkZXJDb250YWluZXIuc3R5bGUubGVmdCA9IG14V2l0aFBsYWNlSG9sZGVyICsgJ3B4JztcbiAgICAgIHRoaXMucGxhY2VIb2xkZXJDb250YWluZXIuc3R5bGUudG9wID0gbXlXaXRoUGxhY2VIb2xkZXIgKyAncHgnO1xuICAgICAgdGhpcy5jYWxjdWxhdGVQREZDb29yZGluYXRlcyhteFdpdGhQbGFjZUhvbGRlciwgbXlXaXRoUGxhY2VIb2xkZXIpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTaWduUGxhY2VIb2xkZXJPZmZTZXQoKSB7XG4gICAgdGhpcy5wYWdlRWxlbWVudCA9XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuUERGX0NPTlRBSU5FUl9DTEFTU05BTUV9IC5wYWdlYCkgfHxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuUERGX0NPTlRBSU5FUl9DTEFTU05BTUV9IC5wYWdlYCk7XG5cbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID1cbiAgICAgIHRoaXMucGFyZW50RWxlbWVudD8ubmF0aXZlRWxlbWVudD8ucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5QREZfQ09OVEFJTkVSX0NMQVNTTkFNRX1gKSB8fFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5QREZfQ09OVEFJTkVSX0NMQVNTTkFNRX1gKTtcblxuICAgIGNvbnN0IHBhZ2VFbGVtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMucGFnZUVsZW1lbnQsIG51bGwpO1xuICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyRWxlbWVudCwgbnVsbCk7XG5cbiAgICB0aGlzLnNpZ25QbGFjZUhvbGRlckNvbnRhaW5lcldpZHRoID0gcGFyc2VGbG9hdChwYWdlRWxlbWVudFN0eWxlPy53aWR0aC5yZXBsYWNlKCdweCcsICcnKSk7XG4gICAgdGhpcy5zaWduUGxhY2VIb2xkZXJDb250YWluZXJIZWlnaHQgPSBwYXJzZUZsb2F0KHBhZ2VFbGVtZW50U3R5bGU/LmhlaWdodC5yZXBsYWNlKCdweCcsICcnKSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lcldpZHRoID0gcGFyc2VGbG9hdChjb250YWluZXJFbGVtZW50U3R5bGU/LndpZHRoLnJlcGxhY2UoJ3B4JywgJycpKTtcbiAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IHBhcnNlRmxvYXQoY29udGFpbmVyRWxlbWVudFN0eWxlPy5oZWlnaHQucmVwbGFjZSgncHgnLCAnJykpO1xuXG4gICAgY29uc3QgcmVjdCA9IHRoaXMucGFnZUVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc2lnblBsYWNlaG9sZGVyQ29udGFpbmVyT2Zmc2V0ID0ge1xuICAgICAgdG9wOiByZWN0LnRvcCArICh3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQpLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgKHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5wYWdlWE9mZnNldClcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVQREZDb29yZGluYXRlcyh4LCB5KSB7XG4gICAgdGhpcy5kb2N1bWVudC5nZXRQYWdlKHRoaXMucGFnZSkudGhlbigocGFnZSkgPT4ge1xuICAgICAgY29uc3Qgdmlld1BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IDAuOTIgfSk7XG4gICAgICBsZXQgbG93ZXIgPSB2aWV3UG9ydC5jb252ZXJ0VG9QZGZQb2ludCh4LCB5ICsgdGhpcy5wbGFjZUhvbGRlclNpemUuaGVpZ2h0KVxuICAgICAgbGV0IHVwcGVyID0gdmlld1BvcnQuY29udmVydFRvUGRmUG9pbnQoeCArIHRoaXMucGxhY2VIb2xkZXJTaXplLndpZHRoLCB5KVxuXG4gICAgICB0aGlzLmNvb3JkaW5hdGVzLmVtaXQoe1xuICAgICAgICBsbHg6IFN0cmluZyhNYXRoLnJvdW5kKGxvd2VyWzBdKSksXG4gICAgICAgIGxseTogU3RyaW5nKE1hdGgucm91bmQobG93ZXJbMV0pKSxcbiAgICAgICAgdXJ4OiBTdHJpbmcoTWF0aC5yb3VuZCh1cHBlclswXSkpLFxuICAgICAgICB1cnk6IFN0cmluZyhNYXRoLnJvdW5kKHVwcGVyWzFdKSksXG4gICAgICAgIHBhZ2U6IFN0cmluZyh0aGlzLnBhZ2UpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgfVxuXG4gIHByaXZhdGUgaXNNb3VzZU91dHNpZGVQZGZDb250YWluZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZXZlbnQucGFnZVkgPD0gdGhpcy5zaWduUGxhY2Vob2xkZXJDb250YWluZXJPZmZzZXQ/LnRvcCArIHRoaXMucGxhY2VIb2xkZXJTaXplLmhlaWdodCAvIDIgfHxcbiAgICAgIGV2ZW50LnBhZ2VZID49IHRoaXMuc2lnblBsYWNlaG9sZGVyQ29udGFpbmVyT2Zmc2V0Py50b3AgKyB0aGlzLnNpZ25QbGFjZUhvbGRlckNvbnRhaW5lckhlaWdodCAtIHRoaXMucGxhY2VIb2xkZXJTaXplLmhlaWdodCAvIDIgfHxcbiAgICAgIGV2ZW50LnBhZ2VYIDw9IHRoaXMuc2lnblBsYWNlaG9sZGVyQ29udGFpbmVyT2Zmc2V0Py5sZWZ0ICsgdGhpcy5wbGFjZUhvbGRlclNpemUud2lkdGggLyAyICsgdGhpcy5tb3VzZVNlbnNpYmlsaXR5IHx8XG4gICAgICBldmVudC5wYWdlWCA+PVxuICAgICAgdGhpcy5zaWduUGxhY2Vob2xkZXJDb250YWluZXJPZmZzZXQ/LmxlZnQgK1xuICAgICAgdGhpcy5zaWduUGxhY2VIb2xkZXJDb250YWluZXJXaWR0aCAtXG4gICAgICB0aGlzLnBsYWNlSG9sZGVyU2l6ZS53aWR0aCAvIDIgLVxuICAgICAgdGhpcy5tb3VzZVNlbnNpYmlsaXR5XG4gICAgKTtcbiAgfVxufVxuIl19