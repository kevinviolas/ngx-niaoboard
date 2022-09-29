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
KonversoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, deps: [{ token: KonversoModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
KonversoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule, i1.NowboardIconModule], exports: [KonversoComponent, NowboardIconModule] });
KonversoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, providers: [KonversoService, NowboardIconService], imports: [[
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            CommonModule,
            NowboardIconModule.forRoot({
                disabled_color: "#5E7290",
                primary: "#001B66"
            }),
        ], NowboardIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, decorators: [{
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
        }], ctorParameters: function () { return [{ type: KonversoModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDOzs7QUFHaEgsYUFBYTtBQWViLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9DLFlBQTZCO1FBQy9ELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUVBQW1FLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBQzdDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDOUMsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzsyR0FoQlUsY0FBYyxrQkFDMEIsY0FBYzs0R0FEdEQsY0FBYyxpQkFiVixpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsK0JBQStCLGFBRTlILFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVksb0NBTUosaUJBQWlCLEVBQUUsa0JBQWtCOzRHQUVwQyxjQUFjLGFBSGIsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsWUFUekM7WUFDUCxXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osa0JBQWtCLENBQUMsT0FBTyxDQUFDO2dCQUN6QixjQUFjLEVBQUUsU0FBUztnQkFDekIsT0FBTyxFQUFFLFNBQVM7YUFBQyxDQUFDO1NBQ3ZCLEVBRTRCLGtCQUFrQjsyRkFFcEMsY0FBYztrQkFkMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsK0JBQStCLENBQUM7b0JBQ2pJLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzs0QkFDekIsY0FBYyxFQUFFLFNBQVM7NEJBQ3pCLE9BQU8sRUFBRSxTQUFTO3lCQUFDLENBQUM7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztvQkFDbEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7aUJBQ2pEOzBEQUVvRCxjQUFjOzBCQUFwRCxRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtLb252ZXJzb0NvbXBvbmVudH0gZnJvbSAnLi9rb252ZXJzby5jb21wb25lbnQnO1xyXG5pbXBvcnQge0tvbnZlcnNvSW50ZXJmYWNlfSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xyXG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi9rb252ZXJzby5zZXJ2aWNlJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudH0gZnJvbSAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZpcnN0VmlzaXRDb21wb25lbnQgfSBmcm9tICcuL2ZpcnN0LXZpc2l0L2ZpcnN0LXZpc2l0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZS9zYWZlLWh0bWwucGlwZSc7XHJcbmltcG9ydCB7Tm93Ym9hcmRJY29uTW9kdWxlLCBOb3dib2FyZEljb25TZXJ2aWNlfSBmcm9tIFwibm93Ym9hcmQtaWNvblwiO1xyXG5pbXBvcnQgeyBDdXN0b21DaGVja2JveENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcblxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0tvbnZlcnNvQ29tcG9uZW50LCBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCwgRmlyc3RWaXNpdENvbXBvbmVudCwgU2FmZUh0bWxQaXBlLCBDdXN0b21DaGVja2JveENhbGVuZGFyQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3QoeyAvL2xpZ2h0IHRoZW1lIGNvbG9yXHJcbiAgICAgIGRpc2FibGVkX2NvbG9yOiBcIiM1RTcyOTBcIixcclxuICAgICAgcHJpbWFyeTogXCIjMDAxQjY2XCJ9KSxcclxuICBdLFxyXG4gIHByb3ZpZGVycyA6IFtLb252ZXJzb1NlcnZpY2UsIE5vd2JvYXJkSWNvblNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtLb252ZXJzb0NvbXBvbmVudCwgTm93Ym9hcmRJY29uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgS29udmVyc29Nb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IEtvbnZlcnNvTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnS29udmVyc29Nb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxLb252ZXJzb01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEtvbnZlcnNvTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogJ19fTmd4S29udmVyc29fXycsIHVzZVZhbHVlOiBjb25maWd9LFxyXG4gICAgICAgIEtvbnZlcnNvU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=