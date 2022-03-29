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
KonversoModule.ɵfac = function KonversoModule_Factory(t) { return new (t || KonversoModule)(i0.ɵɵinject(KonversoModule, 12)); };
KonversoModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: KonversoModule });
KonversoModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [KonversoService], imports: [[
            FormsModule,
            HttpClientModule,
            CommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoModule, [{
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
    }], function () { return [{ type: KonversoModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe], imports: [FormsModule,
        HttpClientModule,
        CommonModule], exports: [KonversoComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRXJELGFBQWE7QUFXYixNQUFNLE9BQU8sY0FBYztJQUN6QixZQUFvQyxZQUE2QjtRQUMvRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLG1FQUFtRSxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUF5QjtRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQzlDLGVBQWU7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7NEVBaEJVLGNBQWMsY0FDMEIsY0FBYztnRUFEdEQsY0FBYztxRUFIYixDQUFDLGVBQWUsQ0FBQyxZQUxwQjtZQUNQLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsWUFBWTtTQUNiO3VGQUlVLGNBQWM7Y0FWMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLFlBQVksQ0FBQztnQkFDaEcsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixZQUFZO2lCQUNiO2dCQUNELFNBQVMsRUFBRyxDQUFDLGVBQWUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0I7c0NBRW9ELGNBQWM7c0JBQXBELFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR0QixjQUFjLG1CQVRWLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLFlBQVksYUFFN0YsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixZQUFZLGFBR0osaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7S29udmVyc29Db21wb25lbnR9IGZyb20gJy4va29udmVyc28uY29tcG9uZW50JztcbmltcG9ydCB7S29udmVyc29JbnRlcmZhY2V9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudH0gZnJvbSAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmlyc3RWaXNpdENvbXBvbmVudCB9IGZyb20gJy4vZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZS9zYWZlLWh0bWwucGlwZSc7XG5cbi8vIEB0cy1pZ25vcmVcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0tvbnZlcnNvQ29tcG9uZW50LCBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCwgRmlyc3RWaXNpdENvbXBvbmVudCwgU2FmZUh0bWxQaXBlXSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnMgOiBbS29udmVyc29TZXJ2aWNlXSxcbiAgZXhwb3J0czogW0tvbnZlcnNvQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBLb252ZXJzb01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IEtvbnZlcnNvTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnS29udmVyc29Nb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8S29udmVyc29Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEtvbnZlcnNvTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiAnX19OZ3hLb252ZXJzb19fJywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIEtvbnZlcnNvU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==