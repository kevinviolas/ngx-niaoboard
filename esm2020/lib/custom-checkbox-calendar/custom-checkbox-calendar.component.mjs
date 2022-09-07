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
    i0.ɵɵtextInterpolate1(" ", ctx_r1.columnOverride[c_r4] ? ctx_r1.columnOverride[c_r4] : c_r4 === "all" ? "" : ctx_r1.translate.translate(ctx_r1.service.locale, ctx_r1.columnOverride[c_r4]), " ");
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
        args: [{ selector: 'custom-checkbox-calendar', template: "<div class=\"checkbox-calendar\">\n    <div class=\"column-title\">\n      <div *ngFor=\"let row of rows\" class=\"calendar-row\">\n        {{  (columnOverride[row] ? translate.translate(service.locale, columnOverride[row]) : translate.translate(service.locale,row))}}\n      </div>\n    </div>\n    <div class=\"column-value\">\n      <div class=\"calendar-row-wrapper\">\n        <ng-container *ngFor=\"let c of column\">\n          <div class=\"calendar-head\"\n               [style]=\"{width : 'calc(100% / '+column.length+')'}\">\n               {{ columnOverride[c] ? columnOverride[c] : (c === 'all' ? '' : translate.translate(service.locale , columnOverride[c]) )}} \n            </div>\n        </ng-container>\n      </div>\n  \n      <ng-container *ngFor=\"let row of rows;\">\n        <ng-container *ngIf=\"row !== ''\">\n          <form [formGroup]=\"form[row]\" class=\"calendar-row-wrapper\">\n            <ng-container *ngFor=\"let c of column\">\n  \n              <div class=\"calendar-checkbox\" [style]=\"{width : 'calc(100% / '+column.length+')'}\">\n                <input type=\"checkbox\" [name]=\"row + '_' + c\" [formControlName]=\"c\">\n                <label class=\"bot-checkbox-label\" [for]=\"row + '_' + c\"></label>\n              </div>\n  \n            </ng-container>\n          </form>\n        </ng-container>\n  \n      </ng-container>\n    </div>\n  \n  </div>\n  ", styles: [".checkbox-calendar{display:flex}.checkbox-calendar .column-value{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar .column-value .calendar-row-wrapper{display:flex;width:100%}.checkbox-calendar .column-title{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox input[type=checkbox]{width:24px;height:24px}.calendar-head,.calendar-row,.calendar-checkbox{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.TranslateService }, { type: i3.KonversoService }]; }, { calendarTemplate: [{
            type: Input
        }], columnOverride: [{
            type: Input
        }], calendarChange: [{
            type: Output
        }], state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIvY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2N1c3RvbS1jaGVja2JveC1jYWxlbmRhci9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDQTVCLDhCQUFtRDtJQUNqRCxZQUNGO0lBQUEsaUJBQU07Ozs7SUFESixlQUNGO0lBREUsNk1BQ0Y7Ozs7SUFJRSw2QkFBdUM7SUFDckMsOEJBQzBEO0lBQ3JELFlBQ0g7SUFBQSxpQkFBTTtJQUNWLDBCQUFlOzs7O0lBSFIsZUFBb0Q7SUFBcEQsc0ZBQW9EO0lBQ3BELGVBQ0g7SUFERyxpTUFDSDs7O0lBT0EsNkJBQXVDO0lBRXJDLCtCQUFvRjtJQUNsRiw0QkFBb0UsZ0JBQUE7SUFFdEUsaUJBQU07SUFFUiwwQkFBZTs7Ozs7SUFMa0IsZUFBb0Q7SUFBcEQsc0ZBQW9EO0lBQzFELGVBQXNCO0lBQXRCLDBDQUFzQix5QkFBQTtJQUNYLGVBQXFCO0lBQXJCLHlDQUFxQjs7O0lBTi9ELDZCQUFpQztJQUMvQiwrQkFBMkQ7SUFDekQsZ0lBT2U7SUFDakIsaUJBQU87SUFDVCwwQkFBZTs7OztJQVZQLGVBQXVCO0lBQXZCLCtDQUF1QjtJQUNDLGVBQVM7SUFBVCx1Q0FBUzs7O0lBSDNDLDZCQUF3QztJQUN0QyxpSEFX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QTtRQUV6QixnRkFFTTtRQUNSLGlCQUFNO1FBQ04sOEJBQTBCLGFBQUE7UUFFdEIsa0dBS2U7UUFDakIsaUJBQU07UUFFTixrR0FjZTtRQUNqQixpQkFBTSxFQUFBOztRQTdCaUIsZUFBTztRQUFQLGtDQUFPO1FBTUUsZUFBUztRQUFULG9DQUFTO1FBUVQsZUFBUTtRQUFSLGtDQUFROzt1RkREL0IsK0JBQStCO2NBTjNDLFNBQVM7MkJBQ0UsMEJBQTBCOzJIQU8zQixnQkFBZ0I7a0JBQXhCLEtBQUs7WUFHRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNFLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBLb252ZXJzb1NlcnZpY2UgfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG4vL2ltcG9ydCB7QW5pbWF0aW9uc1NlcnZpY2UsIEZhZGVTbGlkZUluT3V0fSBmcm9tIFwiQGNvcmUvYW5pbWF0aW9uc1wiO1xuXG50eXBlIElDYWxlbmRhclRlbXBsYXRlID0geyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdXN0b20tY2hlY2tib3gtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIC8vYW5pbWF0aW9ucyA6IFtGYWRlU2xpZGVJbk91dF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2hlY2tib3hDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY2FsZW5kYXJUZW1wbGF0ZTogSUNhbGVuZGFyVGVtcGxhdGUgPSB7XG4gICAgbW9ybmluZzoge21vbmRheTogZmFsc2UsIHR1aGVzZGF5OiBmYWxzZX1cbiAgfVxuICBASW5wdXQoKSBjb2x1bW5PdmVycmlkZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBAT3V0cHV0KCkgY2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICBASW5wdXQoKSBzdGF0ZSA6Ym9vbGVhbiA9IHRydWU7XG5cbiAgcHVibGljIGZvcm06IHsgW2tleTogc3RyaW5nXTogRm9ybUdyb3VwIH0gPSB7fTtcbiAgcHVibGljIGNvbHVtbjogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIHJvd3M6IHN0cmluZ1tdID0gWycnXTtcbiAgcHJpdmF0ZSBjaGVja2VkOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhbGVuZGFyX3ZhbHVlOiBhbnkgPSB7fVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgXG4gICAgLy9wdWJsaWMgYW5pbWF0aW9ucyA6IEFuaW1hdGlvbnNTZXJ2aWNlLFxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UsXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZm9ybUdyb3VwOiBJQ2FsZW5kYXJUZW1wbGF0ZSA9IHt9O1xuICAgIGZvciAoY29uc3QgcGFydCBpbiB0aGlzLmNhbGVuZGFyVGVtcGxhdGUpIHtcbiAgICAgIGlmICghZm9ybUdyb3VwW3BhcnRdKSB7XG4gICAgICAgIGZvcm1Hcm91cFtwYXJ0XSA9IHt9Oy8vIG1vcm5pbmdcbiAgICAgIH1cbiAgICAgIHRoaXMucm93cy5wdXNoKHBhcnQpO1xuICAgICAgZm9yIChjb25zdCBkYXkgaW4gdGhpcy5jYWxlbmRhclRlbXBsYXRlW3BhcnRdKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZm9ybUdyb3VwW3BhcnRdW2RheV0gPSBbdGhpcy5jYWxlbmRhclRlbXBsYXRlW3BhcnRdW2RheV1dIC8vbW9yZ2luL21vbmRheVxuICAgICAgICB0aGlzLmNvbHVtbi5wdXNoKGRheSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbHVtbiA9IFsuLi5uZXcgU2V0KHRoaXMuY29sdW1uKV07XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwYXJ0IGluIGZvcm1Hcm91cCkge1xuICAgICAgdGhpcy5mb3JtW3BhcnRdID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoZm9ybUdyb3VwW3BhcnRdKTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIocGFydCk7XG4gICAgICB0aGlzLnByb2Nlc3ModGhpcy5mb3JtW3BhcnRdLnZhbHVlLCBwYXJ0KTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgb2JzZXJ2ZXIocGFydDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtW3BhcnRdLnZhbHVlQ2hhbmdlcy5waXBlKGRlYm91bmNlVGltZSgyMDApKS5zdWJzY3JpYmUoY2hhbmdlcyA9PiB0aGlzLnByb2Nlc3MoY2hhbmdlcywgcGFydCkpXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3MoY2hhbmdlczogYW55LCBwYXJ0OiBzdHJpbmcpIHtcbiAgICBpZiAoY2hhbmdlcy5hbGwgIT09IHRoaXMuY2hlY2tlZFtwYXJ0XSkge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybVtwYXJ0XS5jb250cm9scyk7XG4gICAgICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgICAgICB0aGlzLmZvcm1bcGFydF0uY29udHJvbHNba10ucGF0Y2hWYWx1ZShjaGFuZ2VzLmFsbCwge2VtaXRFdmVudDogZmFsc2UsIG9ubHlTZWxmOiB0cnVlfSk7XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSA9IHt9XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXMuYWxsO1xuICAgICAgICBlbHNlIHRoaXMuY2FsZW5kYXJfdmFsdWVba11bcGFydF0gPSBjaGFuZ2VzLmFsbDtcbiAgICAgICAgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXMuYWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja2VkW3BhcnRdID0gY2hhbmdlcy5hbGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGU6IHN0cmluZykgPT4gZSAhPT0gJ2FsbCcpO1xuICAgICAgbGV0IGNvdW50ZXIgPSBrZXlzLmxlbmd0aDtcbiAgICAgIGZvciAoY29uc3QgayBvZiBrZXlzKSB7XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXSA9IHt9XG4gICAgICAgIGlmICghdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSkgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXNba107XG4gICAgICAgIGVsc2UgdGhpcy5jYWxlbmRhcl92YWx1ZVtrXVtwYXJ0XSA9IGNoYW5nZXNba11cbiAgICAgICAgaWYgKCFjaGFuZ2VzW2tdKSB7XG4gICAgICAgICAgY291bnRlci0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY291bnRlciA9PT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5mb3JtW3BhcnRdLmNvbnRyb2xzWydhbGwnXS5wYXRjaFZhbHVlKHRydWUsIHtlbWl0RXZlbnQ6IGZhbHNlLCBvbmx5U2VsZjogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmNoZWNrZWRbcGFydF0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGVja2VkW3BhcnRdID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9ybVtwYXJ0XS5jb250cm9sc1snYWxsJ10ucGF0Y2hWYWx1ZShmYWxzZSwge2VtaXRFdmVudDogZmFsc2UsIG9ubHlTZWxmOiB0cnVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdCh0aGlzLmNhbGVuZGFyX3ZhbHVlKVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGVja2JveC1jYWxlbmRhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzXCIgY2xhc3M9XCJjYWxlbmRhci1yb3dcIj5cbiAgICAgICAge3sgIChjb2x1bW5PdmVycmlkZVtyb3ddID8gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgY29sdW1uT3ZlcnJpZGVbcm93XSkgOiB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLHJvdykpfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdmFsdWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1yb3ctd3JhcHBlclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjIG9mIGNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1oZWFkXCJcbiAgICAgICAgICAgICAgIFtzdHlsZV09XCJ7d2lkdGggOiAnY2FsYygxMDAlIC8gJytjb2x1bW4ubGVuZ3RoKycpJ31cIj5cbiAgICAgICAgICAgICAgIHt7IGNvbHVtbk92ZXJyaWRlW2NdID8gY29sdW1uT3ZlcnJpZGVbY10gOiAoYyA9PT0gJ2FsbCcgPyAnJyA6IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUgLCBjb2x1bW5PdmVycmlkZVtjXSkgKX19IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gIFxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIHJvd3M7XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyb3cgIT09ICcnXCI+XG4gICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtW3Jvd11cIiBjbGFzcz1cImNhbGVuZGFyLXJvdy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjIG9mIGNvbHVtblwiPlxuICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNoZWNrYm94XCIgW3N0eWxlXT1cInt3aWR0aCA6ICdjYWxjKDEwMCUgLyAnK2NvbHVtbi5sZW5ndGgrJyknfVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbbmFtZV09XCJyb3cgKyAnXycgKyBjXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYm90LWNoZWNrYm94LWxhYmVsXCIgW2Zvcl09XCJyb3cgKyAnXycgKyBjXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgXG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgXG4gIDwvZGl2PlxuICAiXX0=