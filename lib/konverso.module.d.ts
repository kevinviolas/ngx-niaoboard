import { ModuleWithProviders } from '@angular/core';
import { KonversoInterface } from '../interface/KonversoInterface';
import * as i0 from "@angular/core";
import * as i1 from "./konverso.component";
import * as i2 from "./desktop-full-screen/desktop-full-screen.component";
import * as i3 from "./first-visit/first-visit.component";
import * as i4 from "./pipe/safe-html.pipe";
import * as i5 from "./custom-checkbox-calendar/custom-checkbox-calendar.component";
import * as i6 from "./modal-add-attachments/modal-add-attachments.component";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/common/http";
import * as i9 from "@angular/common";
import * as i10 from "nowboard-icon";
export declare class KonversoModule {
    constructor(parentModule?: KonversoModule);
    static forRoot(config: KonversoInterface): ModuleWithProviders<KonversoModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<KonversoModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<KonversoModule, [typeof i1.KonversoComponent, typeof i2.DesktopFullScreenComponent, typeof i3.FirstVisitComponent, typeof i4.SafeHtmlPipe, typeof i5.CustomCheckboxCalendarComponent, typeof i6.ModalAddAttachmentsComponent], [typeof i7.FormsModule, typeof i7.ReactiveFormsModule, typeof i8.HttpClientModule, typeof i9.CommonModule, typeof i10.NowboardIconModule], [typeof i1.KonversoComponent, typeof i10.NowboardIconModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<KonversoModule>;
}
