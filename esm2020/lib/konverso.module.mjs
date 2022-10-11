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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzlHLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOzs7QUFHckcsYUFBYTtBQWViLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQW9DLFlBQTZCO1FBQy9ELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IsbUVBQW1FLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXlCO1FBQzdDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDOUMsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzs0RUFoQlUsY0FBYztnRUFBZCxjQUFjO3FFQUhiLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLFlBUmhELFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsT0FBTyxFQUFFLFNBQVM7U0FBQyxDQUFDLEVBR0ssa0JBQWtCO3VGQUVwQyxjQUFjO2NBZDFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUUsNEJBQTRCLENBQUM7Z0JBQy9KLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzt3QkFDekIsY0FBYyxFQUFFLFNBQVM7d0JBQ3pCLE9BQU8sRUFBRSxTQUFTO3FCQUFDLENBQUM7aUJBQ3ZCO2dCQUNELFNBQVMsRUFBRyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7YUFDakQ7O3NCQUVjLFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR0QixjQUFjLG1CQWJWLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSwrQkFBK0IsRUFBRSw0QkFBNEIsYUFFNUosV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWSxvQ0FNSixpQkFBaUIsRUFBRSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtLb252ZXJzb0NvbXBvbmVudH0gZnJvbSAnLi9rb252ZXJzby5jb21wb25lbnQnO1xuaW1wb3J0IHtLb252ZXJzb0ludGVyZmFjZX0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0Rlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50fSBmcm9tICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0ZpcnN0VmlzaXRDb21wb25lbnR9IGZyb20gJy4vZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50JztcbmltcG9ydCB7U2FmZUh0bWxQaXBlfSBmcm9tICcuL3BpcGUvc2FmZS1odG1sLnBpcGUnO1xuaW1wb3J0IHtOb3dib2FyZEljb25Nb2R1bGUsIE5vd2JvYXJkSWNvblNlcnZpY2V9IGZyb20gJ25vd2JvYXJkLWljb24nO1xuaW1wb3J0IHtDdXN0b21DaGVja2JveENhbGVuZGFyQ29tcG9uZW50fSBmcm9tICcuL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7TW9kYWxBZGRBdHRhY2htZW50c0NvbXBvbmVudH0gZnJvbSAnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMvbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudCc7XG5cblxuLy8gQHRzLWlnbm9yZVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbS29udmVyc29Db21wb25lbnQsIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50LCBGaXJzdFZpc2l0Q29tcG9uZW50LCBTYWZlSHRtbFBpcGUsIEN1c3RvbUNoZWNrYm94Q2FsZW5kYXJDb21wb25lbnQsIE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOb3dib2FyZEljb25Nb2R1bGUuZm9yUm9vdCh7IC8vbGlnaHQgdGhlbWUgY29sb3JcbiAgICAgIGRpc2FibGVkX2NvbG9yOiBcIiM1RTcyOTBcIixcbiAgICAgIHByaW1hcnk6IFwiIzAwMUI2NlwifSksXG4gIF0sXG4gIHByb3ZpZGVycyA6IFtLb252ZXJzb1NlcnZpY2UsIE5vd2JvYXJkSWNvblNlcnZpY2VdLFxuICBleHBvcnRzOiBbS29udmVyc29Db21wb25lbnQsIE5vd2JvYXJkSWNvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgS29udmVyc29Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBLb252ZXJzb01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0tvbnZlcnNvTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEtvbnZlcnNvTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBLb252ZXJzb01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogJ19fTmd4S29udmVyc29fXycsIHVzZVZhbHVlOiBjb25maWd9LFxuICAgICAgICBLb252ZXJzb1NlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=