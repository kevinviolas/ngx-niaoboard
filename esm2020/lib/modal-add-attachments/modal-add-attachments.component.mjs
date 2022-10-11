import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../konverso.service";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/common";
import * as i4 from "nowboard-icon";
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
    constructor(data, service, dialogRef) {
        this.data = data;
        this.service = service;
        this.dialogRef = dialogRef;
        this.documentList = [];
        this.displayText = {};
    }
    ngOnInit() {
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
ModalAddAttachmentsComponent.ɵfac = function ModalAddAttachmentsComponent_Factory(t) { return new (t || ModalAddAttachmentsComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i1.KonversoService), i0.ɵɵdirectiveInject(i2.MatDialogRef)); };
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
        i0.ɵɵtextInterpolate1(" ", ctx.service.localModalAttachments.SEND_ME_YOUR_ATTACHMENTS, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", "image")("size", 1.5);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.service.localModalAttachments.DROP_PHOTO, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.documentList);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !(ctx.documentList[0] == null ? null : ctx.documentList[0].name));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.service.localModalAttachments.I_FINISHED, " ");
    } }, dependencies: [i3.NgForOf, i4.NowboardIconComponent], styles: [".modal-attachments-content[_ngcontent-%COMP%]   .bot-no-anim[_ngcontent-%COMP%]{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content[_ngcontent-%COMP%]   .circle3[_ngcontent-%COMP%]{width:120px;height:120px}.modal-attachments-content[_ngcontent-%COMP%]   .circle2[_ngcontent-%COMP%]{width:90px;height:90px}.modal-attachments-content[_ngcontent-%COMP%]   .circle1[_ngcontent-%COMP%]{width:60px;height:60px}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]{margin:0!important}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content[_ngcontent-%COMP%]   .file-names[_ngcontent-%COMP%]   .file-name-div[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%]{width:120px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalAddAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'modal-add-attachments', template: "<div class=\"position-relative modal-attachments-content\">\n\n    <div class=\"close-dialog-icon close-dialog-icon-15\" mat-dialog-close>\n        <nb-icon [icon]=\"'close'\" [size]=\"1\"></nb-icon>\n    </div>\n\n    <div class=\"bot bot-no-anim\">\n        <div class=\"circle1\"></div>\n        <div class=\"circle2\"></div>\n        <div class=\"circle3\"></div>\n    </div>\n\n    <div class=\"mt30 nb-title-l title\">\n        {{service.localModalAttachments.SEND_ME_YOUR_ATTACHMENTS }}\n    </div>\n\n    <div class=\"mt30 mb15 file\" (click)=\"this.input.click()\">\n        <nb-icon [icon]=\"'image'\" [size]=\"1.5\"></nb-icon>\n        <div class=\"nb-text-s file-message\">\n          {{service.localModalAttachments.DROP_PHOTO }}\n        </div>\n        <div class=\"mb10 nb-text-s-1 file-format\">\n          Format .jpeg / .png / .svg\n        </div>\n\n    </div>\n\n    <ng-container *ngFor=\"let d of documentList; let index = index\">\n        <div class=\"mb15 file-names\">\n            <div class=\"file-name-div\">\n                <div class=\"mr10 tar file-name\">\n                    {{ d.name }}\n                </div>\n                <nb-icon (click)=\"deleteFile(d)\" [icon]=\"'delete_1'\" [size]=\"1.5\" class=\"mr0 file-icon\"></nb-icon>\n            </div>\n        </div>\n    </ng-container>\n\n    <button (click)=\"sendAttachments()\" [disabled]=\"!this.documentList[0]?.name\" class=\"mt15 full-width rounded primary btn-send\">\n        {{service.localModalAttachments.I_FINISHED }}\n    </button>\n</div>\n", styles: [".modal-attachments-content .bot-no-anim{margin:auto;height:120px;animation:none;-webkit-animation:none}.modal-attachments-content .circle3{width:120px;height:120px}.modal-attachments-content .circle2{width:90px;height:90px}.modal-attachments-content .circle1{width:60px;height:60px}.modal-attachments-content .file-names{margin:0!important}.modal-attachments-content .file-names .file-name-div{margin-bottom:0;width:auto;max-width:initial}.modal-attachments-content .file-names .file-name-div .file-name{width:120px}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i1.KonversoService }, { type: i2.MatDialogRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvbW9kYWwtYWRkLWF0dGFjaG1lbnRzL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL21vZGFsLWFkZC1hdHRhY2htZW50cy9tb2RhbC1hZGQtYXR0YWNobWVudHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBZSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztJQzBCbkUsNkJBQWdFO0lBQzVELCtCQUE2QixjQUFBLGNBQUE7SUFHakIsWUFDSjtJQUFBLGlCQUFNO0lBQ04sbUNBQXdGO0lBQS9FLDRPQUFTLGVBQUEsdUJBQWEsQ0FBQSxJQUFDO0lBQXdELGlCQUFVLEVBQUEsRUFBQTtJQUc5RywwQkFBZTs7O0lBTEMsZUFDSjtJQURJLDBDQUNKO0lBQ2lDLGVBQW1CO0lBQW5CLGlDQUFtQixhQUFBOztBRHZCcEUsTUFBTSxPQUFPLDRCQUE0QjtJQUlyQyxZQUNvQyxJQUcvQixFQUNNLE9BQXdCLEVBQ3ZCLFNBQXFEO1FBTDdCLFNBQUksR0FBSixJQUFJLENBR25DO1FBQ00sWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBNEM7UUFUakUsaUJBQVksR0FBZSxFQUFFLENBQUM7UUFFdkIsZ0JBQVcsR0FBUyxFQUFFLENBQUM7SUFTOUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUdELGVBQWU7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7d0dBMUJRLDRCQUE0Qix1QkFLekIsZUFBZTsrRUFMbEIsNEJBQTRCO1FDVnpDLDhCQUF5RCxhQUFBO1FBR2pELDZCQUErQztRQUNuRCxpQkFBTTtRQUVOLDhCQUE2QjtRQUN6Qix5QkFBMkIsYUFBQSxhQUFBO1FBRy9CLGlCQUFNO1FBRU4sOEJBQW1DO1FBQy9CLFlBQ0o7UUFBQSxpQkFBTTtRQUVOLDhCQUF5RDtRQUE3QixzR0FBUyxpQkFBa0IsSUFBQztRQUNwRCw4QkFBaUQ7UUFDakQsK0JBQW9DO1FBQ2xDLGFBQ0Y7UUFBQSxpQkFBTTtRQUNOLGdDQUEwQztRQUN4Qyw2Q0FDRjtRQUFBLGlCQUFNLEVBQUE7UUFJVixrR0FTZTtRQUVmLG1DQUE4SDtRQUF0SCwwR0FBUyxxQkFBaUIsSUFBQztRQUMvQixhQUNKO1FBQUEsaUJBQVMsRUFBQTs7UUFyQ0ksZUFBZ0I7UUFBaEIsOEJBQWdCLFdBQUE7UUFVekIsZUFDSjtRQURJLDJGQUNKO1FBR2EsZUFBZ0I7UUFBaEIsOEJBQWdCLGFBQUE7UUFFdkIsZUFDRjtRQURFLDZFQUNGO1FBT3dCLGVBQWlCO1FBQWpCLDBDQUFpQjtRQVdULGVBQXdDO1FBQXhDLDJGQUF3QztRQUN4RSxlQUNKO1FBREksNkVBQ0o7O3VGRDlCUyw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDSSx1QkFBdUI7O3NCQVM1QixNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vZGFsLWFkZC1hdHRhY2htZW50cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLWFkZC1hdHRhY2htZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9kYWwtYWRkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxBZGRBdHRhY2htZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZG9jdW1lbnRMaXN0OiBBcnJheTxhbnk+ID0gW107XG4gICAgcHVibGljIGlucHV0ICE6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHVibGljIGRpc3BsYXlUZXh0IDogYW55ID0ge307XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YToge1xuICAgICAgICAgICAgZGF0YSA6IHtpbnB1dCA6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICBkb2N1bWVudExpc3QgOiBBcnJheTxhbnk+fVxuICAgICAgICB9LFxuICAgICAgICBwdWJsaWMgc2VydmljZTogS29udmVyc29TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsQWRkQXR0YWNobWVudHNDb21wb25lbnQ+XG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRMaXN0ID0gdGhpcy5kYXRhLmRhdGEuZG9jdW1lbnRMaXN0O1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5kYXRhLmRhdGEuaW5wdXQ7XG4gICAgfVxuXG4gICAgZGVsZXRlRmlsZShmaWxlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudExpc3Quc3BsaWNlKHRoaXMuZG9jdW1lbnRMaXN0LmluZGV4T2YoZmlsZSksIDEpO1xuICAgIH1cblxuXG4gICAgc2VuZEF0dGFjaG1lbnRzKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSggdGhpcy5kb2N1bWVudExpc3QpO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtb2RhbC1hdHRhY2htZW50cy1jb250ZW50XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGlhbG9nLWljb24gY2xvc2UtZGlhbG9nLWljb24tMTVcIiBtYXQtZGlhbG9nLWNsb3NlPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInY2xvc2UnXCIgW3NpemVdPVwiMVwiPjwvbmItaWNvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJib3QgYm90LW5vLWFuaW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTFcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG5iLXRpdGxlLWwgdGl0bGVcIj5cbiAgICAgICAge3tzZXJ2aWNlLmxvY2FsTW9kYWxBdHRhY2htZW50cy5TRU5EX01FX1lPVVJfQVRUQUNITUVOVFMgfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdDMwIG1iMTUgZmlsZVwiIChjbGljayk9XCJ0aGlzLmlucHV0LmNsaWNrKClcIj5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2ltYWdlJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5iLXRleHQtcyBmaWxlLW1lc3NhZ2VcIj5cbiAgICAgICAgICB7e3NlcnZpY2UubG9jYWxNb2RhbEF0dGFjaG1lbnRzLkRST1BfUEhPVE8gfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYjEwIG5iLXRleHQtcy0xIGZpbGUtZm9ybWF0XCI+XG4gICAgICAgICAgRm9ybWF0IC5qcGVnIC8gLnBuZyAvIC5zdmdcbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGQgb2YgZG9jdW1lbnRMaXN0OyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWIxNSBmaWxlLW5hbWVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtcjEwIHRhciBmaWxlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZC5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gKGNsaWNrKT1cImRlbGV0ZUZpbGUoZClcIiBbaWNvbl09XCInZGVsZXRlXzEnXCIgW3NpemVdPVwiMS41XCIgY2xhc3M9XCJtcjAgZmlsZS1pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2VuZEF0dGFjaG1lbnRzKClcIiBbZGlzYWJsZWRdPVwiIXRoaXMuZG9jdW1lbnRMaXN0WzBdPy5uYW1lXCIgY2xhc3M9XCJtdDE1IGZ1bGwtd2lkdGggcm91bmRlZCBwcmltYXJ5IGJ0bi1zZW5kXCI+XG4gICAgICAgIHt7c2VydmljZS5sb2NhbE1vZGFsQXR0YWNobWVudHMuSV9GSU5JU0hFRCB9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=