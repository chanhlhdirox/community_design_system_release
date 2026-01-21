import { Directive } from '@angular/core';
import { SubscriptionManager } from './subscription-manager';
import * as i0 from "@angular/core";
export class AutoUnsubscribeComponent extends SubscriptionManager {
    ngOnDestroy() {
        this.unsubscribeAll();
    }
}
AutoUnsubscribeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AutoUnsubscribeComponent, deps: null, target: i0.ɵɵFactoryTarget.Directive });
AutoUnsubscribeComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: AutoUnsubscribeComponent, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AutoUnsubscribeComponent, decorators: [{
            type: Directive
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by11bnN1YnNjcmliZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91cC9zcmMvbGliL3V0aWxzL2F1dG8tdW5zdWJzY3JpYmUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRzdELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxtQkFBbUI7SUFDL0QsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOztxSEFIVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQURwQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbk1hbmFnZXIgfSBmcm9tICcuL3N1YnNjcmlwdGlvbi1tYW5hZ2VyJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgQXV0b1Vuc3Vic2NyaWJlQ29tcG9uZW50IGV4dGVuZHMgU3Vic2NyaXB0aW9uTWFuYWdlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgfVxufVxuIl19