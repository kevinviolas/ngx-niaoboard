import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
import * as i0 from "@angular/core";
declare type ICalendarTemplate = {
    [key: string]: {
        [key: string]: boolean;
    };
};
export declare class CustomCheckboxCalendarComponent implements OnInit {
    private _formBuilder;
    translate: TranslateService;
    service: KonversoService;
    calendarTemplate: ICalendarTemplate;
    columnOverride: {
        [key: string]: string;
    };
    calendarChange: EventEmitter<any>;
    state: boolean;
    form: {
        [key: string]: FormGroup;
    };
    column: string[];
    rows: string[];
    private checked;
    private calendar_value;
    constructor(_formBuilder: FormBuilder, translate: TranslateService, service: KonversoService);
    ngOnInit(): void;
    private observer;
    private process;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomCheckboxCalendarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomCheckboxCalendarComponent, "custom-checkbox-calendar", never, { "calendarTemplate": "calendarTemplate"; "columnOverride": "columnOverride"; "state": "state"; }, { "calendarChange": "calendarChange"; }, never, never, false>;
}
export {};
