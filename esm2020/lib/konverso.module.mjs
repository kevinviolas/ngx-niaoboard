import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KonversoComponent } from './konverso.component';
import { KonversoService } from './konverso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DesktopFullScreenComponent } from './desktop-full-screen/desktop-full-screen.component';
import { CommonModule } from '@angular/common';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { NowboardIconModule, NowboardIconService } from "nowboard-icon";
import { CustomCheckboxCalendarComponent } from './custom-checkbox-calendar/custom-checkbox-calendar.component';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
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
KonversoModule.ɵfac = function KonversoModule_Factory(t) { return new (t || KonversoModule)(i0.ɵɵinject(KonversoModule, 12)); };
KonversoModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: KonversoModule });
KonversoModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [KonversoService, NowboardIconService], imports: [[
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            CommonModule,
            NowboardIconModule.forRoot({
                disabled_color: "#5E7290",
                primary: "#001B66"
            }),
        ], NowboardIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoModule, [{
        type: NgModule,
        args: [{
                declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent],
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    CommonModule,
                    NowboardIconModule.forRoot({
                        disabled_color: "#5E7290",
                        primary: "#001B66"
                    }),
                ],
                providers: [KonversoService, NowboardIconService],
                exports: [KonversoComponent, NowboardIconModule]
            }]
    }], function () { return [{ type: KonversoModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule, i1.NowboardIconModule], exports: [KonversoComponent, NowboardIconModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDOzs7QUFHaEgsYUFBYTtBQWViLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9DLFlBQTZCO1FBQy9ELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUVBQW1FLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBQzdDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDOUMsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzs0RUFoQlUsY0FBYyxjQUMwQixjQUFjO2dFQUR0RCxjQUFjO3FFQUhiLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLFlBVHpDO1lBQ1AsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDekIsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLE9BQU8sRUFBRSxTQUFTO2FBQUMsQ0FBQztTQUN2QixFQUU0QixrQkFBa0I7dUZBRXBDLGNBQWM7Y0FkMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSwrQkFBK0IsQ0FBQztnQkFDakksT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osa0JBQWtCLENBQUMsT0FBTyxDQUFDO3dCQUN6QixjQUFjLEVBQUUsU0FBUzt3QkFDekIsT0FBTyxFQUFFLFNBQVM7cUJBQUMsQ0FBQztpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFHLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQzthQUNqRDtzQ0FFb0QsY0FBYztzQkFBcEQsUUFBUTs7c0JBQUksUUFBUTs7d0ZBRHRCLGNBQWMsbUJBYlYsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLCtCQUErQixhQUU5SCxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixZQUFZLG9DQU1KLGlCQUFpQixFQUFFLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0tvbnZlcnNvQ29tcG9uZW50fSBmcm9tICcuL2tvbnZlcnNvLmNvbXBvbmVudCc7XG5pbXBvcnQge0tvbnZlcnNvSW50ZXJmYWNlfSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4va29udmVyc28uc2VydmljZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7RGVza3RvcEZ1bGxTY3JlZW5Db21wb25lbnR9IGZyb20gJy4vZGVza3RvcC1mdWxsLXNjcmVlbi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZpcnN0VmlzaXRDb21wb25lbnQgfSBmcm9tICcuL2ZpcnN0LXZpc2l0L2ZpcnN0LXZpc2l0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3BpcGUvc2FmZS1odG1sLnBpcGUnO1xuaW1wb3J0IHtOb3dib2FyZEljb25Nb2R1bGUsIE5vd2JvYXJkSWNvblNlcnZpY2V9IGZyb20gXCJub3dib2FyZC1pY29uXCI7XG5pbXBvcnQgeyBDdXN0b21DaGVja2JveENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5cblxuLy8gQHRzLWlnbm9yZVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbS29udmVyc29Db21wb25lbnQsIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50LCBGaXJzdFZpc2l0Q29tcG9uZW50LCBTYWZlSHRtbFBpcGUsIEN1c3RvbUNoZWNrYm94Q2FsZW5kYXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOb3dib2FyZEljb25Nb2R1bGUuZm9yUm9vdCh7IC8vbGlnaHQgdGhlbWUgY29sb3JcbiAgICAgIGRpc2FibGVkX2NvbG9yOiBcIiM1RTcyOTBcIixcbiAgICAgIHByaW1hcnk6IFwiIzAwMUI2NlwifSksXG4gIF0sXG4gIHByb3ZpZGVycyA6IFtLb252ZXJzb1NlcnZpY2UsIE5vd2JvYXJkSWNvblNlcnZpY2VdLFxuICBleHBvcnRzOiBbS29udmVyc29Db21wb25lbnQsIE5vd2JvYXJkSWNvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgS29udmVyc29Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBLb252ZXJzb01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0tvbnZlcnNvTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEtvbnZlcnNvTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBLb252ZXJzb01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ19fTmd4S29udmVyc29fXycsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICBLb252ZXJzb1NlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=