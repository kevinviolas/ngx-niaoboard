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
    i0.ɵɵtextInterpolate1("", ctx_r1.columnOverride[c_r4] ? ctx_r1.columnOverride[c_r4] : c_r4 === "all" ? "" : ctx_r1.translate.translate(ctx_r1.service.locale, c_r4), " ");
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
    } }, directives: [i4.NgForOf, i4.NgIf, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.FormControlName], styles: [".checkbox-calendar[_ngcontent-%COMP%]{display:flex}.checkbox-calendar[_ngcontent-%COMP%]   .column-value[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar[_ngcontent-%COMP%]   .column-value[_ngcontent-%COMP%]   .calendar-row-wrapper[_ngcontent-%COMP%]{display:flex;width:100%}.checkbox-calendar[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:24px;height:24px}.calendar-head[_ngcontent-%COMP%], .calendar-row[_ngcontent-%COMP%], .calendar-checkbox[_ngcontent-%COMP%]{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomCheckboxCalendarComponent, [{
        type: Component,
        args: [{ selector: 'custom-checkbox-calendar', template: "<div class=\"checkbox-calendar\">\n    <div class=\"column-title\">\n      <div *ngFor=\"let row of rows\" class=\"calendar-row\">\n        {{  (columnOverride[row] ? translate.translate(service.locale, columnOverride[row]) : translate.translate(service.locale,row))}}\n      </div>\n    </div>\n    <div class=\"column-value\">\n      <div class=\"calendar-row-wrapper\">\n        <ng-container *ngFor=\"let c of column\">\n          <div class=\"calendar-head\"\n               [style]=\"{width : 'calc(100% / '+column.length+')'}\">{{ columnOverride[c] ? columnOverride[c] : (c === 'all' ? '' : translate.translate(service.locale,c))}} </div>\n        </ng-container>\n      </div>\n  \n      <ng-container *ngFor=\"let row of rows;\">\n        <ng-container *ngIf=\"row !== ''\">\n          <form [formGroup]=\"form[row]\" class=\"calendar-row-wrapper\">\n            <ng-container *ngFor=\"let c of column\">\n  \n              <div class=\"calendar-checkbox\" [style]=\"{width : 'calc(100% / '+column.length+')'}\">\n                <input type=\"checkbox\" [name]=\"row + '_' + c\" [formControlName]=\"c\">\n                <label class=\"bot-checkbox-label\" [for]=\"row + '_' + c\"></label>\n              </div>\n  \n            </ng-container>\n          </form>\n        </ng-container>\n  \n      </ng-container>\n    </div>\n  \n  </div>\n  ", styles: [".checkbox-calendar{display:flex}.checkbox-calendar .column-value{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar .column-value .calendar-row-wrapper{display:flex;width:100%}.checkbox-calendar .column-title{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox input[type=checkbox]{width:24px;height:24px}.calendar-head,.calendar-row,.calendar-checkbox{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.TranslateService }, { type: i3.KonversoService }]; }, { calendarTemplate: [{
            type: Input
        }], columnOverride: [{
            type: Input
        }], calendarChange: [{
            type: Output
        }], state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDQTVCLDhCQUFtRDtJQUNqRCxZQUNGO0lBQUEsaUJBQU07Ozs7SUFESixlQUNGO0lBREUsNk1BQ0Y7Ozs7SUFJRSw2QkFBdUM7SUFDckMsOEJBQzBEO0lBQUEsWUFBd0c7SUFBQSxpQkFBTTtJQUMxSywwQkFBZTs7OztJQURSLGVBQW9EO0lBQXBELHNGQUFvRDtJQUFDLGVBQXdHO0lBQXhHLHlLQUF3Rzs7O0lBT2hLLDZCQUF1QztJQUVyQywrQkFBb0Y7SUFDbEYsNEJBQW9FLGdCQUFBO0lBRXRFLGlCQUFNO0lBRVIsMEJBQWU7Ozs7O0lBTGtCLGVBQW9EO0lBQXBELHNGQUFvRDtJQUMxRCxlQUFzQjtJQUF0QiwwQ0FBc0IseUJBQUE7SUFDWCxlQUFxQjtJQUFyQix5Q0FBcUI7OztJQU4vRCw2QkFBaUM7SUFDL0IsK0JBQTJEO0lBQ3pELGdJQU9lO0lBQ2pCLGlCQUFPO0lBQ1QsMEJBQWU7Ozs7SUFWUCxlQUF1QjtJQUF2QiwrQ0FBdUI7SUFDQyxlQUFTO0lBQVQsdUNBQVM7OztJQUgzQyw2QkFBd0M7SUFDdEMs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LGFBQUE7UUFFekIsZ0ZBRU07UUFDUixpQkFBTTtRQUNOLDhCQUEwQixhQUFBO1FBRXRCLGtHQUdlO1FBQ2pCLGlCQUFNO1FBRU4sa0dBY2U7UUFDakIsaUJBQU0sRUFBQTs7UUEzQmlCLGVBQU87UUFBUCxrQ0FBTztRQU1FLGVBQVM7UUFBVCxvQ0FBUztRQU1ULGVBQVE7UUFBUixrQ0FBUTs7dUZEQy9CLCtCQUErQjtjQU4zQyxTQUFTOzJCQUNFLDBCQUEwQjsySEFPM0IsZ0JBQWdCO2tCQUF4QixLQUFLO1lBR0csY0FBYztrQkFBdEIsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU07WUFDRSxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgS29udmVyc29TZXJ2aWNlIH0gZnJvbSAnLi4va29udmVyc28uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuLy9pbXBvcnQge0FuaW1hdGlvbnNTZXJ2aWNlLCBGYWRlU2xpZGVJbk91dH0gZnJvbSBcIkBjb3JlL2FuaW1hdGlvbnNcIjtcblxudHlwZSBJQ2FsZW5kYXJUZW1wbGF0ZSA9IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxuICAvL2FuaW1hdGlvbnMgOiBbRmFkZVNsaWRlSW5PdXRdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUNoZWNrYm94Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNhbGVuZGFyVGVtcGxhdGU6IElDYWxlbmRhclRlbXBsYXRlID0ge1xuICAgIG1vcm5pbmc6IHttb25kYXk6IGZhbHNlLCB0dWhlc2RheTogZmFsc2V9XG4gIH1cbiAgQElucHV0KCkgY29sdW1uT3ZlcnJpZGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgQE91dHB1dCgpIGNhbGVuZGFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgQElucHV0KCkgc3RhdGUgOmJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBmb3JtOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Hcm91cCB9ID0ge307XG4gIHB1YmxpYyBjb2x1bW46IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyByb3dzOiBzdHJpbmdbXSA9IFsnJ107XG4gIHByaXZhdGUgY2hlY2tlZDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSBjYWxlbmRhcl92YWx1ZTogYW55ID0ge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIFxuICAgIC8vcHVibGljIGFuaW1hdGlvbnMgOiBBbmltYXRpb25zU2VydmljZSxcbiAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBcbiAgICBwdWJsaWMgc2VydmljZTogS29udmVyc29TZXJ2aWNlLFxuICApIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybUdyb3VwOiBJQ2FsZW5kYXJUZW1wbGF0ZSA9IHt9O1xuICAgIGZvciAoY29uc3QgcGFydCBpbiB0aGlzLmNhbGVuZGFyVGVtcGxhdGUpIHtcbiAgICAgIGlmICghZm9ybUdyb3VwW3BhcnRdKSB7XG4gICAgICAgIGZvcm1Hcm91cFtwYXJ0XSA9IHt9Oy8vIG1vcm5pbmdcbiAgICAgIH1cbiAgICAgIHRoaXMucm93cy5wdXNoKHBhcnQpO1xuICAgICAgZm9yIChjb25zdCBkYXkgaW4gdGhpcy5jYWxlbmRhclRlbXBsYXRlW3BhcnRdKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZm9ybUdyb3VwW3BhcnRdW2RheV0gPSBbdGhpcy5jYWxlbmRhclRlbXBsYXRlW3BhcnRdW2RheV1dIC8vbW9yZ2luL21vbmRheVxuICAgICAgICB0aGlzLmNvbHVtbi5wdXNoKGRheSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbHVtbiA9IFsuLi5uZXcgU2V0KHRoaXMuY29sdW1uKV07XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwYXJ0IGluIGZvcm1Hcm91cCkge1xuICAgICAgdGhpcy5mb3JtW3BhcnRdID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoZm9ybUdyb3VwW3BhcnRdKTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIocGFydCk7XG4gICAgICB0aGlzLnByb2Nlc3ModGhpcy5mb3JtW3BhcnRdLnZhbHVlLCBwYXJ0KTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgb2JzZXJ2ZXIocGFydDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtW3BhcnRdLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgyMDApKS5zdWJzY3JpYmUoY2hhbmdlcyA9PiB0aGlzLnByb2Nlc3MoY2hhbmdlcywgcGFydCkpXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3MoY2hhbmdlczogYW55LCBwYXJ0OiBzdHJpbmcpIHtcbiAgICBpZiAoY2hhbmdlcy5hbGwgIT09IHRoaXMuY2hlY2tlZFtwYXJ0XSkge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybVtwYXJ0XS5jb250cm9scyk7XG4gICAgICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgICAgICB0aGlzLmZvcm1bcGFydF0uY29udHJvbHNba10ucGF0Y2hWYWx1ZShjaGFuZ2VzLmFsbCwge2VtaXRFdmVudDogZmFsc2UsIG9ubHlTZWxmOiB0cnVlfSk7XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSA9IHt9XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXMuYWxsO1xuICAgICAgICBlbHNlIHRoaXMuY2FsZW5kYXJfdmFsdWVba11bcGFydF0gPSBjaGFuZ2VzLmFsbDtcbiAgICAgICAgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXMuYWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja2VkW3BhcnRdID0gY2hhbmdlcy5hbGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGU6IHN0cmluZykgPT4gZSAhPT0gJ2FsbCcpO1xuICAgICAgbGV0IGNvdW50ZXIgPSBrZXlzLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgayBvZiBrZXlzKSB7XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSA9IHt9XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXNba107XG4gICAgICAgIGVsc2UgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXNba11cbiAgICAgICAgaWYgKCFjaGFuZ2VzW2tdKSB7XG4gICAgICAgICAgY291bnRlci0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY291bnRlciA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5mb3JtW3BhcnRdLmNvbnRyb2xzWydhbGwnXS5wYXRjaFZhbHVlKHRydWUsIHtlbWl0RXZlbnQ6IGZhbHNlLCBvbmx5U2VsZjogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmNoZWNrZWRbcGFydF0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGVja2VkW3BhcnRdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybVtwYXJ0XS5jb250cm9sc1snYWxsJ10ucGF0Y2hWYWx1ZShmYWxzZSwge2VtaXRFdmVudDogZmFsc2UsIG9ubHlTZWxmOiB0cnVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdCh0aGlzLmNhbGVuZGFyX3ZhbHVlKVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGVja2JveC1jYWxlbmRhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzXCIgY2xhc3M9XCJjYWxlbmRhci1yb3dcIj5cbiAgICAgICAge3sgIChjb2x1bW5PdmVycmlkZVtyb3ddID8gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgY29sdW1uT3ZlcnJpZGVbcm93XSkgOiB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLHJvdykpfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdmFsdWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1yb3ctd3JhcHBlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjIG9mIGNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkXCJcbiAgICAgICAgICAgICAgIFtzdHlsZV09XCJ7d2lkdGggOiAnY2FsYygxMDAlIC8gJytjb2x1bW4ubGVuZ3RoKycpJ31cIj57eyBjb2x1bW5PdmVycmlkZVtjXSA/IGNvbHVtbk92ZXJyaWRlW2NdIDogKGMgPT09ICdhbGwnID8gJycgOiB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLGMpKX19IDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzO1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicm93ICE9PSAnJ1wiPlxuICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVtyb3ddXCIgY2xhc3M9XCJjYWxlbmRhci1yb3ctd3JhcHBlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYyBvZiBjb2x1bW5cIj5cbiAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jaGVja2JveFwiIFtzdHlsZV09XCJ7d2lkdGggOiAnY2FsYygxMDAlIC8gJytjb2x1bW4ubGVuZ3RoKycpJ31cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW25hbWVdPVwicm93ICsgJ18nICsgY1wiIFtmb3JtQ29udHJvbE5hbWVdPVwiY1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJvdC1jaGVja2JveC1sYWJlbFwiIFtmb3JdPVwicm93ICsgJ18nICsgY1wiPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gIFxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIFxuICA8L2Rpdj5cbiAgIl19