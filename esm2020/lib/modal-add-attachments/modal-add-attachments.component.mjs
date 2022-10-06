import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../translate.service";
import * as i2 from "../konverso.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "nowboard-icon";
function ModalAddAttachmentsComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 13)(2, "div", 14)(3, "div", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-icon", 16);
    i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_ng_container_15_Template_nb_icon_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const d_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deleteFile(d_r1)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", d_r1.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "delete_1")("size", 1.5);
} }
export class ModalAddAttachmentsComponent {
    constructor(data, translate, service, dialogRef) {
        this.data = data;
        this.translate = translate;
        this.service = service;
        this.dialogRef = dialogRef;
        this.documentList = [];
    }
    ngOnInit() {
        console.log(this.data.data);
        this.documentList = this.data.data.documentList;
        this.input = this.data.data.input;
    }
    deleteFile(file) {
        this.documentList.splice(this.documentList.indexOf(file), 1);
    }
    sendAttachments() {
        this.dialogRef.close(this.documentList);
    }
}
ModalAddAttachmentsComponent.ɵfac = function ModalAddAttachmentsComponent_Factory(t) { return new (t || ModalAddAttachmentsComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.KonversoService), i0.ɵɵdirectiveInject(i3.MatDialogRef)); };
ModalAddAttachmentsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalAddAttachmentsComponent, selectors: [["modal-add-attachments"]], decls: 18, vars: 9, consts: [[1, "position-relative", "modal-attachments-content"], ["mat-dialog-close", "", 1, "close-dialog-icon", "close-dialog-icon-15"], [3, "icon", "size"], [1, "bot", "bot-no-anim"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "mt30", "nb-title-l", "title"], [1, "mt30", "mb15", "file", 3, "click"], [1, "nb-text-s", "file-message"], [1, "mb10", "nb-text-s-1", "file-format"], [4, "ngFor", "ngForOf"], [1, "mt15", "full-width", "rounded", "primary", "btn-send", 3, "disabled", "click"], [1, "mb15", "file-names"], [1, "file-name-div"], [1, "mr10", "tar", "file-name"], [1, "mr0", "file-icon", 3, "icon", "size", "click"]], template: function ModalAddAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "nb-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelement(4, "div", 4)(5, "div", 5)(6, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_div_click_9_listener() { return ctx.input.click(); });
        i0.ɵɵelement(10, "nb-icon", 2);
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 10);
        i0.ɵɵtext(14, " Format .jpeg / .png / .svg ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(15, ModalAddAttachmentsComponent_ng_container_15_Template, 6, 3, "ng-container", 11);
        i0.ɵɵelementStart(16, "button", 12);
        i0.ɵɵlistener("click", function ModalAddAttachmentsComponent_Template_button_click_16_listener() { return ctx.sendAttachments(); });
        i0.ɵɵtext(17);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "close")("size", 1);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "cases.VIEW.SEND_ME_YOUR_ATTACHMENTS"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "image")("size", 1.5);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "users.SETTINGS.DROP_PHOTO"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.documentList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !(ctx.documentList[0] == null ? null : ctx.documentList[0].name));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.translate.translate(ctx.service.locale, "cases.VIEW.I_FINISHED"), " ");
    } }, dependencies: [i4.NgForOf, i5.NowboardIconComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\r\n\r\n    <div class=\"close-dialog-icon close-dialog-icon-15\" mat-dialog-close>\r\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\r\n    </div>\r\n\r\n    <div class=\"bot bot-no-anim\">\r\n        <div class=\"circle1\"></div>\r\n        <div class=\"circle2\"></div>\r\n        <div class=\"circle3\"></div>\r\n    </div>\r\n\r\n    <div class=\"mt30 nb-title-l title\">\r\n        {{translate.translate(service.locale,'cases.VIEW.SEND_ME_YOUR_ATTACHMENTS') }}\r\n    </div>\r\n\r\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\r\n        <nb-icon [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\r\n        <div class=\"nb-text-s file-message\">\r\n          {{translate.translate(service.locale,'users.SETTINGS.DROP_PHOTO') }}\r\n        </div>\r\n        <div class=\"mb10 nb-text-s-1 file-format\">\r\n          Format .jpeg / .png / .svg\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngFor=\"let d of documentList; let index = index\">\r\n        <div class=\"mb15 file-names\">\r\n            <div class=\"file-name-div\">\r\n                <div class=\"mr10 tar file-name\">\r\n                    {{ d.name }}\r\n                </div>\r\n                <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\r\n        {{translate.translate(service.locale,'cases.VIEW.I_FINISHED') }}\r\n    </button>\r\n</div>\r\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.TranslateService }, { type: i2.KonversoService }, { type: i3.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUMwQm5FLDZCQUFnRTtJQUM1RCwrQkFBNkIsY0FBQSxjQUFBO0lBR2pCLFlBQ0o7SUFBQSxpQkFBTTtJQUNOLG1DQUF3RjtJQUEvRSw0T0FBUyxlQUFBLHVCQUFhLENBQUEsSUFBQztJQUF3RCxpQkFBVSxFQUFBLEVBQUE7SUFHOUcsMEJBQWU7OztJQUxDLGVBQ0o7SUFESSwwQ0FDSjtJQUNpQyxlQUFtQjtJQUFuQixpQ0FBbUIsYUFBQTs7QUR2QnBFLE1BQU0sT0FBTyw0QkFBNEI7SUFHckMsWUFDb0MsSUFHL0IsRUFDTSxTQUEyQixFQUMzQixPQUF3QixFQUN2QixTQUFxRDtRQU43QixTQUFJLEdBQUosSUFBSSxDQUduQztRQUNNLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQTRDO1FBVGpFLGlCQUFZLEdBQWUsRUFBRSxDQUFDO0lBWTlCLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBUztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBR0QsZUFBZTtRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOzt3R0E1QlEsNEJBQTRCLHVCQUl6QixlQUFlOytFQUpsQiw0QkFBNEI7UUNWekMsOEJBQXlELGFBQUE7UUFHakQsNkJBQStDO1FBQ25ELGlCQUFNO1FBRU4sOEJBQTZCO1FBQ3pCLHlCQUEyQixhQUFBLGFBQUE7UUFHL0IsaUJBQU07UUFFTiw4QkFBbUM7UUFDL0IsWUFDSjtRQUFBLGlCQUFNO1FBRU4sOEJBQXlEO1FBQTdCLHNHQUFTLGlCQUFrQixJQUFDO1FBQ3BELDhCQUFpRDtRQUNqRCwrQkFBb0M7UUFDbEMsYUFDRjtRQUFBLGlCQUFNO1FBQ04sZ0NBQTBDO1FBQ3hDLDZDQUNGO1FBQUEsaUJBQU0sRUFBQTtRQUlWLGtHQVNlO1FBRWYsbUNBQThIO1FBQXRILDBHQUFTLHFCQUFpQixJQUFDO1FBQy9CLGFBQ0o7UUFBQSxpQkFBUyxFQUFBOztRQXJDSSxlQUFnQjtRQUFoQiw4QkFBZ0IsV0FBQTtRQVV6QixlQUNKO1FBREksbUhBQ0o7UUFHYSxlQUFnQjtRQUFoQiw4QkFBZ0IsYUFBQTtRQUV2QixlQUNGO1FBREUseUdBQ0Y7UUFPd0IsZUFBaUI7UUFBakIsMENBQWlCO1FBV1QsZUFBd0M7UUFBeEMsMkZBQXdDO1FBQ3hFLGVBQ0o7UUFESSxxR0FDSjs7dUZEOUJTLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNJLHVCQUF1Qjs7c0JBUTVCLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi4va29udmVyc28uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbW9kYWwtYWRkLWF0dGFjaG1lbnRzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgaW5wdXQgITogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRhIDoge2lucHV0IDogSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgICAgICAgZG9jdW1lbnRMaXN0IDogQXJyYXk8YW55Pn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQ+XHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0ID0gdGhpcy5kYXRhLmRhdGEuZG9jdW1lbnRMaXN0O1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmRhdGEuZGF0YS5pbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWxlKGZpbGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0LnNwbGljZSh0aGlzLmRvY3VtZW50TGlzdC5pbmRleE9mKGZpbGUpLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2VuZEF0dGFjaG1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCB0aGlzLmRvY3VtZW50TGlzdCk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1vZGFsLWF0dGFjaG1lbnRzLWNvbnRlbnRcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTVcIiBtYXQtZGlhbG9nLWNsb3NlPlxyXG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidjbG9zZSdcIiBbc2l6ZV09XCIxXCI+PC9uYi1pY29uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJvdCBib3Qtbm8tYW5pbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUxXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlM1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbmItdGl0bGUtbCB0aXRsZVwiPlxyXG4gICAgICAgIHt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwnY2FzZXMuVklFVy5TRU5EX01FX1lPVVJfQVRUQUNITUVOVFMnKSB9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm10MzAgbWIxNSBmaWxlXCIgKGNsaWNrKT1cInRoaXMuaW5wdXQuY2xpY2soKVwiPlxyXG4gICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidpbWFnZSdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5iLXRleHQtcyBmaWxlLW1lc3NhZ2VcIj5cclxuICAgICAgICAgIHt7dHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwndXNlcnMuU0VUVElOR1MuRFJPUF9QSE9UTycpIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTAgbmItdGV4dC1zLTEgZmlsZS1mb3JtYXRcIj5cclxuICAgICAgICAgIEZvcm1hdCAuanBlZyAvIC5wbmcgLyAuc3ZnXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZCBvZiBkb2N1bWVudExpc3Q7IGxldCBpbmRleCA9IGluZGV4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iMTUgZmlsZS1uYW1lc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yMTAgdGFyIGZpbGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGQubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bmItaWNvbiAoY2xpY2spPVwiZGVsZXRlRmlsZShkKVwiIFtpY29uXT1cIidkZWxldGVfMSdcIiBbc2l6ZV09XCIxLjVcIiBjbGFzcz1cIm1yMCBmaWxlLWljb25cIj48L25iLWljb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2VuZEF0dGFjaG1lbnRzKClcIiBbZGlzYWJsZWRdPVwiIXRoaXMuZG9jdW1lbnRMaXN0WzBdPy5uYW1lXCIgY2xhc3M9XCJtdDE1IGZ1bGwtd2lkdGggcm91bmRlZCBwcmltYXJ5IGJ0bi1zZW5kXCI+XHJcbiAgICAgICAge3t0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCdjYXNlcy5WSUVXLklfRklOSVNIRUQnKSB9fVxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG4iXX0=