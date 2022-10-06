import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { DefaultAssets, KonversoInterface, OpenChatBotResponse, UserInput } from '../../interface/KonversoInterface';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
import { AnimationsService } from 'ngx-nowbrains-animations';
import * as i0 from "@angular/core";
export declare const FadeSlideInOutKonversoTranslateOutTest: import("@angular/animations").AnimationTriggerMetadata;
export declare const FadeSlideInOutKonversoHeightTest: import("@angular/animations").AnimationTriggerMetadata;
export declare class DesktopFullScreenComponent implements OnChanges, OnInit {
    translate: TranslateService;
    service: KonversoService;
    animations: AnimationsService;
    AssistantMode: boolean;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    displayData: (UserInput | OpenChatBotResponse)[];
    disableUserInput: boolean;
    LastUserInput: UserInput;
    LastBotAnswer: OpenChatBotResponse;
    PlaceHolder: string[];
    IsMobile: boolean;
    showInput: boolean;
    NumberPlaceHolder: string[];
    afterProcess: boolean;
    fileNb: number;
    readySend: EventEmitter<boolean>;
    send: EventEmitter<UserInput>;
    sendBotCommand: EventEmitter<string>;
    sendEvent: EventEmitter<string>;
    sendCalendar: EventEmitter<any>;
    openUpload: EventEmitter<boolean>;
    userInput: string;
    currentPlaceHolder: string;
    sendBtn: string;
    sendBtnMsg: string;
    select: string;
    changed: boolean;
    botListening: boolean;
    showWrapper: boolean;
    showText: boolean;
    inputType: string;
    inputLimit: number;
    private newMessage;
    private messageCurrent;
    private msgArray;
    private botListeningTimer;
    private anim_done;
    private reloaded;
    private timer;
    btnScreen: string;
    nbAttachments: number;
    config: KonversoInterface;
    private days;
    calendarAvailability: {};
    calendarTemplate: {
        morning: {
            all: boolean;
            monday: boolean;
            tuesday: boolean;
            wednesday: boolean;
            thursday: boolean;
            friday: boolean;
        };
        afternoon: {
            all: boolean;
            monday: boolean;
            tuesday: boolean;
            wednesday: boolean;
            thursday: boolean;
            friday: boolean;
        };
    };
    calendarKeyOverride: {
        morning: string;
        afternoon: string;
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
    };
    animationTTX: number;
    animationTtxAdd: number;
    animationSlideValue: number;
    animationSlideValueAdd: number;
    animationHeightTTX: number;
    changeNumber(value: number): void;
    constructor(translate: TranslateService, service: KonversoService, animations: AnimationsService, config: KonversoInterface);
    ngOnChanges(): void;
    bindCalendar($event: any): void;
    getCalendar(): void;
    launchLoop(): void;
    looper(): void;
    ngOnInit(): void;
    userWriting(key: any): void;
    emit($event: any): void;
    _send(): void;
    scroll(scrollHeight: number): Promise<number>;
    byPassUserInput(botdata: string, i?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DesktopFullScreenComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DesktopFullScreenComponent, "bot-full-screen", never, { "AssistantMode": "AssistantMode"; "assets": "assets"; "firstVisit": "firstVisit"; "firstUsageStory": "firstUsageStory"; "displayData": "displayData"; "disableUserInput": "disableUserInput"; "LastUserInput": "LastUserInput"; "LastBotAnswer": "LastBotAnswer"; "PlaceHolder": "PlaceHolder"; "IsMobile": "IsMobile"; "showInput": "showInput"; "NumberPlaceHolder": "NumberPlaceHolder"; "afterProcess": "afterProcess"; "fileNb": "fileNb"; }, { "readySend": "readySend"; "send": "send"; "sendBotCommand": "sendBotCommand"; "sendEvent": "sendEvent"; "sendCalendar": "sendCalendar"; "openUpload": "openUpload"; }, never, never, false>;
}
