import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KonversoComponent } from './konverso.component';
import { KonversoService } from './konverso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DesktopFullScreenComponent } from './desktop-full-screen/desktop-full-screen.component';
import { CommonModule } from '@angular/common';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { NowboardIconModule, NowboardIconService } from 'nowboard-icon';
import { CustomCheckboxCalendarComponent } from './custom-checkbox-calendar/custom-checkbox-calendar.component';
import { ModalAddAttachmentsComponent } from './modal-add-attachments/modal-add-attachments.component';
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
KonversoModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [KonversoService, NowboardIconService], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        NowboardIconModule.forRoot({
            disabled_color: "#5E7290",
            primary: "#001B66"
        }), NowboardIconModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoModule, [{
        type: NgModule,
        args: [{
                declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent, ModalAddAttachmentsComponent],
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent, ModalAddAttachmentsComponent], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule, i1.NowboardIconModule], exports: [KonversoComponent, NowboardIconModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzlHLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOzs7QUFHckcsYUFBYTtBQWViLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9DLFlBQTZCO1FBQy9ELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUVBQW1FLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBQzdDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDOUMsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzs0RUFoQlUsY0FBYztnRUFBZCxjQUFjO3FFQUhiLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLFlBUmhELFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsT0FBTyxFQUFFLFNBQVM7U0FBQyxDQUFDLEVBR0ssa0JBQWtCO3VGQUVwQyxjQUFjO2NBZDFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQy9KLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzt3QkFDekIsY0FBYyxFQUFFLFNBQVM7d0JBQ3pCLE9BQU8sRUFBRSxTQUFTO3FCQUFDLENBQUM7aUJBQ3ZCO2dCQUNELFNBQVMsRUFBRyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7YUFDakQ7O3NCQUVjLFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR0QixjQUFjLG1CQWJWLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsYUFFNUosV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWSxvQ0FNSixpQkFBaUIsRUFBRSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0tvbnZlcnNvQ29tcG9uZW50fSBmcm9tICcuL2tvbnZlcnNvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7S29udmVyc29JbnRlcmZhY2V9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XHJcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuL2tvbnZlcnNvLnNlcnZpY2UnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0Rlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50fSBmcm9tICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtGaXJzdFZpc2l0Q29tcG9uZW50fSBmcm9tICcuL2ZpcnN0LXZpc2l0L2ZpcnN0LXZpc2l0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2FmZUh0bWxQaXBlfSBmcm9tICcuL3BpcGUvc2FmZS1odG1sLnBpcGUnO1xyXG5pbXBvcnQge05vd2JvYXJkSWNvbk1vZHVsZSwgTm93Ym9hcmRJY29uU2VydmljZX0gZnJvbSAnbm93Ym9hcmQtaWNvbic7XHJcbmltcG9ydCB7Q3VzdG9tQ2hlY2tib3hDYWxlbmRhckNvbXBvbmVudH0gZnJvbSAnLi9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TW9kYWxBZGRBdHRhY2htZW50c0NvbXBvbmVudH0gZnJvbSAnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMvbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudCc7XHJcblxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0tvbnZlcnNvQ29tcG9uZW50LCBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCwgRmlyc3RWaXNpdENvbXBvbmVudCwgU2FmZUh0bWxQaXBlLCBDdXN0b21DaGVja2JveENhbGVuZGFyQ29tcG9uZW50LCBNb2RhbEFkZEF0dGFjaG1lbnRzQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3QoeyAvL2xpZ2h0IHRoZW1lIGNvbG9yXHJcbiAgICAgIGRpc2FibGVkX2NvbG9yOiBcIiM1RTcyOTBcIixcclxuICAgICAgcHJpbWFyeTogXCIjMDAxQjY2XCJ9KSxcclxuICBdLFxyXG4gIHByb3ZpZGVycyA6IFtLb252ZXJzb1NlcnZpY2UsIE5vd2JvYXJkSWNvblNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtLb252ZXJzb0NvbXBvbmVudCwgTm93Ym9hcmRJY29uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgS29udmVyc29Nb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IEtvbnZlcnNvTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnS29udmVyc29Nb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxLb252ZXJzb01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEtvbnZlcnNvTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogJ19fTmd4S29udmVyc29fXycsIHVzZVZhbHVlOiBjb25maWd9LFxyXG4gICAgICAgIEtvbnZlcnNvU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=