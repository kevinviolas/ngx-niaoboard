import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../translate.service";
import * as i3 from "../konverso.service";
import * as i4 from "@angular/common";
function CustomCheckboxCalendarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.columnOverride[row_r3] ? ctx_r0.translate.translate(ctx_r0.service.locale, ctx_r0.columnOverride[row_r3]) : ctx_r0.translate.translate(ctx_r0.service.locale, row_r3), " ");
} }
const _c0 = function (a0) { return { width: a0 }; };
function CustomCheckboxCalendarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(3, _c0, "calc(100% / " + ctx_r1.column.length + ")"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.columnOverride[c_r4] ? ctx_r1.translate.translate(ctx_r1.service.locale, ctx_r1.columnOverride[c_r4]) : c_r4 === "all" ? "" : ctx_r1.translate.translate(ctx_r1.service.locale, c_r4), " ");
} }
function CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelement(2, "input", 11)(3, "label", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const row_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(5, _c0, "calc(100% / " + ctx_r7.column.length + ")"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", row_r5 + "_" + c_r8)("formControlName", c_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", row_r5 + "_" + c_r8);
} }
function CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 9);
    i0.ɵɵtemplate(2, CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_ng_container_2_Template, 4, 7, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r6.form[row_r5]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.column);
} }
function CustomCheckboxCalendarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CustomCheckboxCalendarComponent_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r5 !== "");
} }
export class CustomCheckboxCalendarComponent {
    constructor(_formBuilder, 
    //public animations : AnimationsService,
    translate, service) {
        this._formBuilder = _formBuilder;
        this.translate = translate;
        this.service = service;
        this.calendarTemplate = {
            morning: { monday: false, tuhesday: false }
        };
        this.columnOverride = {};
        this.calendarChange = new EventEmitter(true);
        this.state = true;
        this.form = {};
        this.column = [];
        this.rows = [''];
        this.checked = {};
        this.calendar_value = {};
    }
    ngOnInit() {
        const formGroup = {};
        for (const part in this.calendarTemplate) {
            if (!formGroup[part]) {
                formGroup[part] = {}; // morning
            }
            this.rows.push(part);
            for (const day in this.calendarTemplate[part]) {
                // @ts-ignore
                formGroup[part][day] = [this.calendarTemplate[part][day]]; //morgin/monday
                this.column.push(day);
            }
            this.column = [...new Set(this.column)];
        }
        for (const part in formGroup) {
            this.form[part] = this._formBuilder.group(formGroup[part]);
            this.observer(part);
            this.process(this.form[part].value, part);
        }
    }
    observer(part) {
        this.form[part].valueChanges.pipe(debounceTime(200)).subscribe(changes => this.process(changes, part));
    }
    process(changes, part) {
        if (changes.all !== this.checked[part]) {
            const keys = Object.keys(this.form[part].controls);
            for (const k of keys) {
                this.form[part].controls[k].patchValue(changes.all, { emitEvent: false, onlySelf: true });
                if (!this.calendar_value[k])
                    this.calendar_value[k] = {};
                if (!this.calendar_value[k][part])
                    this.calendar_value[k][part] = changes.all;
                else
                    this.calendar_value[k][part] = changes.all;
                this.calendar_value[k][part] = changes.all;
            }
            this.checked[part] = changes.all;
        }
        else {
            const keys = Object.keys(changes).filter((e) => e !== 'all');
            let counter = keys.length;
            for (const k of keys) {
                if (!this.calendar_value[k])
                    this.calendar_value[k] = {};
                if (!this.calendar_value[k][part])
                    this.calendar_value[k][part] = changes[k];
                else
                    this.calendar_value[k][part] = changes[k];
                if (!changes[k]) {
                    counter--;
                }
            }
            if (counter === keys.length) {
                this.form[part].controls['all'].patchValue(true, { emitEvent: false, onlySelf: true });
                this.checked[part] = true;
            }
            else {
                this.checked[part] = false;
                this.form[part].controls['all'].patchValue(false, { emitEvent: false, onlySelf: true });
            }
        }
        this.calendarChange.emit(this.calendar_value);
    }
}
CustomCheckboxCalendarComponent.ɵfac = function CustomCheckboxCalendarComponent_Factory(t) { return new (t || CustomCheckboxCalendarComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.TranslateService), i0.ɵɵdirectiveInject(i3.KonversoService)); };
CustomCheckboxCalendarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomCheckboxCalendarComponent, selectors: [["custom-checkbox-calendar"]], inputs: { calendarTemplate: "calendarTemplate", columnOverride: "columnOverride", state: "state" }, outputs: { calendarChange: "calendarChange" }, decls: 7, vars: 3, consts: [[1, "checkbox-calendar"], [1, "column-title"], ["class", "calendar-row", 4, "ngFor", "ngForOf"], [1, "column-value"], [1, "calendar-row-wrapper"], [4, "ngFor", "ngForOf"], [1, "calendar-row"], [1, "calendar-head"], [4, "ngIf"], [1, "calendar-row-wrapper", 3, "formGroup"], [1, "calendar-checkbox"], ["type", "checkbox", 3, "name", "formControlName"], [1, "bot-checkbox-label", 3, "for"]], template: function CustomCheckboxCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, CustomCheckboxCalendarComponent_div_2_Template, 2, 1, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵtemplate(5, CustomCheckboxCalendarComponent_ng_container_5_Template, 3, 5, "ng-container", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CustomCheckboxCalendarComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.rows);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.column);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.rows);
    } }, dependencies: [i1.ɵNgNoValidate, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i4.NgForOf, i4.NgIf], styles: [".checkbox-calendar[_ngcontent-%COMP%]{display:flex}.checkbox-calendar[_ngcontent-%COMP%]   .column-value[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar[_ngcontent-%COMP%]   .column-value[_ngcontent-%COMP%]   .calendar-row-wrapper[_ngcontent-%COMP%]{display:flex;width:100%}.checkbox-calendar[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:24px;height:24px}.calendar-head[_ngcontent-%COMP%], .calendar-row[_ngcontent-%COMP%], .calendar-checkbox[_ngcontent-%COMP%]{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomCheckboxCalendarComponent, [{
        type: Component,
        args: [{ selector: 'custom-checkbox-calendar', template: "<div class=\"checkbox-calendar\">\r\n    <div class=\"column-title\">\r\n      <div *ngFor=\"let row of rows\" class=\"calendar-row\">\r\n        {{  (columnOverride[row] ? translate.translate(service.locale, columnOverride[row]) : translate.translate(service.locale,row))}}\r\n      </div>\r\n    </div>\r\n    <div class=\"column-value\">\r\n      <div class=\"calendar-row-wrapper\">\r\n        <ng-container *ngFor=\"let c of column\">\r\n          <div class=\"calendar-head\"\r\n               [style]=\"{width : 'calc(100% / '+column.length+')'}\">\r\n               {{ columnOverride[c] ? translate.translate(service.locale, columnOverride[c]) : (c === 'all' ? '' : translate.translate(service.locale , c) )}} \r\n            </div>\r\n        </ng-container>\r\n      </div>\r\n  \r\n      <ng-container *ngFor=\"let row of rows;\">\r\n        <ng-container *ngIf=\"row !== ''\">\r\n          <form [formGroup]=\"form[row]\" class=\"calendar-row-wrapper\">\r\n            <ng-container *ngFor=\"let c of column\">\r\n  \r\n              <div class=\"calendar-checkbox\" [style]=\"{width : 'calc(100% / '+column.length+')'}\">\r\n                <input type=\"checkbox\" [name]=\"row + '_' + c\" [formControlName]=\"c\">\r\n                <label class=\"bot-checkbox-label\" [for]=\"row + '_' + c\"></label>\r\n              </div>\r\n  \r\n            </ng-container>\r\n          </form>\r\n        </ng-container>\r\n  \r\n      </ng-container>\r\n    </div>\r\n  \r\n  </div>\r\n  ", styles: [".checkbox-calendar{display:flex}.checkbox-calendar .column-value{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar .column-value .calendar-row-wrapper{display:flex;width:100%}.checkbox-calendar .column-title{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox input[type=checkbox]{width:24px;height:24px}.calendar-head,.calendar-row,.calendar-checkbox{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.TranslateService }, { type: i3.KonversoService }]; }, { calendarTemplate: [{
            type: Input
        }], columnOverride: [{
            type: Input
        }], calendarChange: [{
            type: Output
        }], state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDQTVCLDhCQUFtRDtJQUNqRCxZQUNGO0lBQUEsaUJBQU07Ozs7SUFESixlQUNGO0lBREUsNk1BQ0Y7Ozs7SUFJRSw2QkFBdUM7SUFDckMsOEJBQzBEO0lBQ3JELFlBQ0g7SUFBQSxpQkFBTTtJQUNWLDBCQUFlOzs7O0lBSFIsZUFBb0Q7SUFBcEQsc0ZBQW9EO0lBQ3BELGVBQ0g7SUFERyw2TkFDSDs7O0lBT0EsNkJBQXVDO0lBRXJDLCtCQUFvRjtJQUNsRiw0QkFBb0UsZ0JBQUE7SUFFdEUsaUJBQU07SUFFUiwwQkFBZTs7Ozs7SUFMa0IsZUFBb0Q7SUFBcEQsc0ZBQW9EO0lBQzFELGVBQXNCO0lBQXRCLDBDQUFzQix5QkFBQTtJQUNYLGVBQXFCO0lBQXJCLHlDQUFxQjs7O0lBTi9ELDZCQUFpQztJQUMvQiwrQkFBMkQ7SUFDekQsZ0lBT2U7SUFDakIsaUJBQU87SUFDVCwwQkFBZTs7OztJQVZQLGVBQXVCO0lBQXZCLCtDQUF1QjtJQUNDLGVBQVM7SUFBVCx1Q0FBUzs7O0lBSDNDLDZCQUF3QztJQUN0QyxpSEFX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QTtRQUV6QixnRkFFTTtRQUNSLGlCQUFNO1FBQ04sOEJBQTBCLGFBQUE7UUFFdEIsa0dBS2U7UUFDakIsaUJBQU07UUFFTixrR0FjZTtRQUNqQixpQkFBTSxFQUFBOztRQTdCaUIsZUFBTztRQUFQLGtDQUFPO1FBTUUsZUFBUztRQUFULG9DQUFTO1FBUVQsZUFBUTtRQUFSLGtDQUFROzt1RkREL0IsK0JBQStCO2NBTjNDLFNBQVM7MkJBQ0UsMEJBQTBCOzJIQU8zQixnQkFBZ0I7a0JBQXhCLEtBQUs7WUFHRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNFLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBLb252ZXJzb1NlcnZpY2UgfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcclxuLy9pbXBvcnQge0FuaW1hdGlvbnNTZXJ2aWNlLCBGYWRlU2xpZGVJbk91dH0gZnJvbSBcIkBjb3JlL2FuaW1hdGlvbnNcIjtcclxuXHJcbnR5cGUgSUNhbGVuZGFyVGVtcGxhdGUgPSB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IH07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2N1c3RvbS1jaGVja2JveC1jYWxlbmRhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgLy9hbmltYXRpb25zIDogW0ZhZGVTbGlkZUluT3V0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2hlY2tib3hDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNhbGVuZGFyVGVtcGxhdGU6IElDYWxlbmRhclRlbXBsYXRlID0ge1xyXG4gICAgbW9ybmluZzoge21vbmRheTogZmFsc2UsIHR1aGVzZGF5OiBmYWxzZX1cclxuICB9XHJcbiAgQElucHV0KCkgY29sdW1uT3ZlcnJpZGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICBAT3V0cHV0KCkgY2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xyXG4gIEBJbnB1dCgpIHN0YXRlIDpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGZvcm06IHsgW2tleTogc3RyaW5nXTogRm9ybUdyb3VwIH0gPSB7fTtcclxuICBwdWJsaWMgY29sdW1uOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHB1YmxpYyByb3dzOiBzdHJpbmdbXSA9IFsnJ107XHJcbiAgcHJpdmF0ZSBjaGVja2VkOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gIHByaXZhdGUgY2FsZW5kYXJfdmFsdWU6IGFueSA9IHt9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBcclxuICAgIC8vcHVibGljIGFuaW1hdGlvbnMgOiBBbmltYXRpb25zU2VydmljZSxcclxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIFxyXG4gICAgcHVibGljIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSxcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZm9ybUdyb3VwOiBJQ2FsZW5kYXJUZW1wbGF0ZSA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBwYXJ0IGluIHRoaXMuY2FsZW5kYXJUZW1wbGF0ZSkge1xyXG4gICAgICBpZiAoIWZvcm1Hcm91cFtwYXJ0XSkge1xyXG4gICAgICAgIGZvcm1Hcm91cFtwYXJ0XSA9IHt9Oy8vIG1vcm5pbmdcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvd3MucHVzaChwYXJ0KTtcclxuICAgICAgZm9yIChjb25zdCBkYXkgaW4gdGhpcy5jYWxlbmRhclRlbXBsYXRlW3BhcnRdKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGZvcm1Hcm91cFtwYXJ0XVtkYXldID0gW3RoaXMuY2FsZW5kYXJUZW1wbGF0ZVtwYXJ0XVtkYXldXSAvL21vcmdpbi9tb25kYXlcclxuICAgICAgICB0aGlzLmNvbHVtbi5wdXNoKGRheSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb2x1bW4gPSBbLi4ubmV3IFNldCh0aGlzLmNvbHVtbildO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgcGFydCBpbiBmb3JtR3JvdXApIHtcclxuICAgICAgdGhpcy5mb3JtW3BhcnRdID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoZm9ybUdyb3VwW3BhcnRdKTtcclxuICAgICAgdGhpcy5vYnNlcnZlcihwYXJ0KTtcclxuICAgICAgdGhpcy5wcm9jZXNzKHRoaXMuZm9ybVtwYXJ0XS52YWx1ZSwgcGFydCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvYnNlcnZlcihwYXJ0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZm9ybVtwYXJ0XS52YWx1ZUNoYW5nZXMucGlwZShkZWJvdW5jZVRpbWUoMjAwKSkuc3Vic2NyaWJlKGNoYW5nZXMgPT4gdGhpcy5wcm9jZXNzKGNoYW5nZXMsIHBhcnQpKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzKGNoYW5nZXM6IGFueSwgcGFydDogc3RyaW5nKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5hbGwgIT09IHRoaXMuY2hlY2tlZFtwYXJ0XSkge1xyXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5mb3JtW3BhcnRdLmNvbnRyb2xzKTtcclxuICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcclxuICAgICAgICB0aGlzLmZvcm1bcGFydF0uY29udHJvbHNba10ucGF0Y2hWYWx1ZShjaGFuZ2VzLmFsbCwge2VtaXRFdmVudDogZmFsc2UsIG9ubHlTZWxmOiB0cnVlfSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGVuZGFyX3ZhbHVlW2tdKSB0aGlzLmNhbGVuZGFyX3ZhbHVlW2tdID0ge31cclxuICAgICAgICBpZiAoIXRoaXMuY2FsZW5kYXJfdmFsdWVba11bcGFydF0pIHRoaXMuY2FsZW5kYXJfdmFsdWVba11bcGFydF0gPSBjaGFuZ2VzLmFsbDtcclxuICAgICAgICBlbHNlIHRoaXMuY2FsZW5kYXJfdmFsdWVba11bcGFydF0gPSBjaGFuZ2VzLmFsbDtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyX3ZhbHVlW2tdW3BhcnRdID0gY2hhbmdlcy5hbGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaGVja2VkW3BhcnRdID0gY2hhbmdlcy5hbGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKChlOiBzdHJpbmcpID0+IGUgIT09ICdhbGwnKTtcclxuICAgICAgbGV0IGNvdW50ZXIgPSBrZXlzLmxlbmd0aDtcclxuICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FsZW5kYXJfdmFsdWVba10pIHRoaXMuY2FsZW5kYXJfdmFsdWVba10gPSB7fVxyXG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXNba107XHJcbiAgICAgICAgZWxzZSB0aGlzLmNhbGVuZGFyX3ZhbHVlW2tdW3BhcnRdID0gY2hhbmdlc1trXVxyXG4gICAgICAgIGlmICghY2hhbmdlc1trXSkge1xyXG4gICAgICAgICAgY291bnRlci0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoY291bnRlciA9PT0ga2V5cy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmZvcm1bcGFydF0uY29udHJvbHNbJ2FsbCddLnBhdGNoVmFsdWUodHJ1ZSwge2VtaXRFdmVudDogZmFsc2UsIG9ubHlTZWxmOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkW3BhcnRdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNoZWNrZWRbcGFydF0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1bcGFydF0uY29udHJvbHNbJ2FsbCddLnBhdGNoVmFsdWUoZmFsc2UsIHtlbWl0RXZlbnQ6IGZhbHNlLCBvbmx5U2VsZjogdHJ1ZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQodGhpcy5jYWxlbmRhcl92YWx1ZSlcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjaGVja2JveC1jYWxlbmRhclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbi10aXRsZVwiPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93c1wiIGNsYXNzPVwiY2FsZW5kYXItcm93XCI+XHJcbiAgICAgICAge3sgIChjb2x1bW5PdmVycmlkZVtyb3ddID8gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgY29sdW1uT3ZlcnJpZGVbcm93XSkgOiB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLHJvdykpfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdmFsdWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXJvdy13cmFwcGVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYyBvZiBjb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkXCJcclxuICAgICAgICAgICAgICAgW3N0eWxlXT1cInt3aWR0aCA6ICdjYWxjKDEwMCUgLyAnK2NvbHVtbi5sZW5ndGgrJyknfVwiPlxyXG4gICAgICAgICAgICAgICB7eyBjb2x1bW5PdmVycmlkZVtjXSA/IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGNvbHVtbk92ZXJyaWRlW2NdKSA6IChjID09PSAnYWxsJyA/ICcnIDogdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSAsIGMpICl9fSBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2Ygcm93cztcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicm93ICE9PSAnJ1wiPlxyXG4gICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtW3Jvd11cIiBjbGFzcz1cImNhbGVuZGFyLXJvdy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGMgb2YgY29sdW1uXCI+XHJcbiAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNoZWNrYm94XCIgW3N0eWxlXT1cInt3aWR0aCA6ICdjYWxjKDEwMCUgLyAnK2NvbHVtbi5sZW5ndGgrJyknfVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtuYW1lXT1cInJvdyArICdfJyArIGNcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJvdC1jaGVja2JveC1sYWJlbFwiIFtmb3JdPVwicm93ICsgJ18nICsgY1wiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIFxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gIDwvZGl2PlxyXG4gICJdfQ==