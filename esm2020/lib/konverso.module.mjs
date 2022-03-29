import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KonversoComponent } from './konverso.component';
import { KonversoService } from './konverso.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DesktopFullScreenComponent } from './desktop-full-screen/desktop-full-screen.component';
import { CommonModule } from '@angular/common';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import * as i0 from "@angular/core";
// @ts-ignore
export class KonversoModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('KonversoModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: KonversoModule,
            providers: [
                { provide: '__NgxKonverso__', useValue: config },
                KonversoService
            ]
        };
    }
}
KonversoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, deps: [{ token: KonversoModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
KonversoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe], imports: [FormsModule,
        HttpClientModule,
        CommonModule], exports: [KonversoComponent] });
KonversoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, providers: [KonversoService], imports: [[
            FormsModule,
            HttpClientModule,
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe],
                    imports: [
                        FormsModule,
                        HttpClientModule,
                        CommonModule,
                    ],
                    providers: [KonversoService],
                    exports: [KonversoComponent]
                }]
        }], ctorParameters: function () { return [{ type: KonversoModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRXJELGFBQWE7QUFXYixNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQyxZQUE2QjtRQUMvRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLG1FQUFtRSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQzlDLGVBQWU7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7MkdBaEJVLGNBQWMsa0JBQzBCLGNBQWM7NEdBRHRELGNBQWMsaUJBVFYsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxhQUU3RixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFlBQVksYUFHSixpQkFBaUI7NEdBRWhCLGNBQWMsYUFIYixDQUFDLGVBQWUsQ0FBQyxZQUxwQjtZQUNQLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsWUFBWTtTQUNiOzJGQUlVLGNBQWM7a0JBVjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO29CQUNoRyxPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFHLENBQUMsZUFBZSxDQUFDO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0I7MERBRW9ELGNBQWM7MEJBQXBELFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtLb252ZXJzb0NvbXBvbmVudH0gZnJvbSAnLi9rb252ZXJzby5jb21wb25lbnQnO1xuaW1wb3J0IHtLb252ZXJzb0ludGVyZmFjZX0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0Rlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50fSBmcm9tICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGaXJzdFZpc2l0Q29tcG9uZW50IH0gZnJvbSAnLi9maXJzdC12aXNpdC9maXJzdC12aXNpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlL3NhZmUtaHRtbC5waXBlJztcblxuLy8gQHRzLWlnbm9yZVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbS29udmVyc29Db21wb25lbnQsIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50LCBGaXJzdFZpc2l0Q29tcG9uZW50LCBTYWZlSHRtbFBpcGVdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVycyA6IFtLb252ZXJzb1NlcnZpY2VdLFxuICBleHBvcnRzOiBbS29udmVyc29Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogS29udmVyc29Nb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdLb252ZXJzb01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxLb252ZXJzb01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogS29udmVyc29Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05neEtvbnZlcnNvX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgS29udmVyc29TZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19