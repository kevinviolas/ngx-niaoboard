import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KonversoComponent } from './konverso.component';
import { KonversoService } from './konverso.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DesktopFullScreenComponent } from './desktop-full-screen/desktop-full-screen.component';
import { CommonModule } from '@angular/common';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { NowboardIconModule, NowboardIconService } from "nowboard-icon";
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
                declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe],
                imports: [
                    FormsModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe], imports: [FormsModule,
        HttpClientModule,
        CommonModule, i1.NowboardIconModule], exports: [KonversoComponent, NowboardIconModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFdEUsYUFBYTtBQWNiLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9DLFlBQTZCO1FBQy9ELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUVBQW1FLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBQzdDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDOUMsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzs0RUFoQlUsY0FBYyxjQUMwQixjQUFjO2dFQUR0RCxjQUFjO3FFQUhiLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLFlBUnpDO1lBQ1AsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osa0JBQWtCLENBQUMsT0FBTyxDQUFDO2dCQUN6QixjQUFjLEVBQUUsU0FBUztnQkFDekIsT0FBTyxFQUFFLFNBQVM7YUFBQyxDQUFDO1NBQ3ZCLEVBRTRCLGtCQUFrQjt1RkFFcEMsY0FBYztjQWIxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO2dCQUNoRyxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osa0JBQWtCLENBQUMsT0FBTyxDQUFDO3dCQUN6QixjQUFjLEVBQUUsU0FBUzt3QkFDekIsT0FBTyxFQUFFLFNBQVM7cUJBQUMsQ0FBQztpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFHLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDO2dCQUNsRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQzthQUNqRDtzQ0FFb0QsY0FBYztzQkFBcEQsUUFBUTs7c0JBQUksUUFBUTs7d0ZBRHRCLGNBQWMsbUJBWlYsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxhQUU3RixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFlBQVksb0NBTUosaUJBQWlCLEVBQUUsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7S29udmVyc29Db21wb25lbnR9IGZyb20gJy4va29udmVyc28uY29tcG9uZW50JztcbmltcG9ydCB7S29udmVyc29JbnRlcmZhY2V9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudH0gZnJvbSAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmlyc3RWaXNpdENvbXBvbmVudCB9IGZyb20gJy4vZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZS9zYWZlLWh0bWwucGlwZSc7XG5pbXBvcnQge05vd2JvYXJkSWNvbk1vZHVsZSwgTm93Ym9hcmRJY29uU2VydmljZX0gZnJvbSBcIm5vd2JvYXJkLWljb25cIjtcblxuLy8gQHRzLWlnbm9yZVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbS29udmVyc29Db21wb25lbnQsIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50LCBGaXJzdFZpc2l0Q29tcG9uZW50LCBTYWZlSHRtbFBpcGVdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3QoeyAvL2xpZ2h0IHRoZW1lIGNvbG9yXG4gICAgICBkaXNhYmxlZF9jb2xvcjogXCIjNUU3MjkwXCIsXG4gICAgICBwcmltYXJ5OiBcIiMwMDFCNjZcIn0pLFxuICBdLFxuICBwcm92aWRlcnMgOiBbS29udmVyc29TZXJ2aWNlLCBOb3dib2FyZEljb25TZXJ2aWNlXSxcbiAgZXhwb3J0czogW0tvbnZlcnNvQ29tcG9uZW50LCBOb3dib2FyZEljb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogS29udmVyc29Nb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdLb252ZXJzb01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxLb252ZXJzb01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogS29udmVyc29Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05neEtvbnZlcnNvX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgS29udmVyc29TZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19