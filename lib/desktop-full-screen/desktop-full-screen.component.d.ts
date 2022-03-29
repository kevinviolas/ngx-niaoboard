import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { DefaultAssets, OpenChatBotResponse, UserInput } from '../../interface/KonversoInterface';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
import * as i0 from "@angular/core";
export declare class DesktopFullScreenComponent implements OnChanges, OnInit {
    private service;
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
    readySend: EventEmitter<boolean>;
    send: EventEmitter<UserInput>;
    sendBotCommand: EventEmitter<string>;
    sendEvent: EventEmitter<string>;
    userInput: string;
    currentPlaceHolder: string;
    sendBtn: string;
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
    constructor(translate: TranslateService, service: KonversoService);
    ngOnChanges(): void;
    launchLoop(): void;
    looper(): void;
    ngOnInit(): void;
    userWriting(key: any): void;
    emit($event: any): void;
    _send(): void;
    scroll(scrollHeight: number): Promise<number>;
    byPassUserInput(botdata: string, i?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DesktopFullScreenComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DesktopFullScreenComponent, "bot-full-screen", never, { "AssistantMode": "AssistantMode"; "assets": "assets"; "firstVisit": "firstVisit"; "firstUsageStory": "firstUsageStory"; "displayData": "displayData"; "disableUserInput": "disableUserInput"; "LastUserInput": "LastUserInput"; "LastBotAnswer": "LastBotAnswer"; "PlaceHolder": "PlaceHolder"; "IsMobile": "IsMobile"; "showInput": "showInput"; "NumberPlaceHolder": "NumberPlaceHolder"; }, { "readySend": "readySend"; "send": "send"; "sendBotCommand": "sendBotCommand"; "sendEvent": "sendEvent"; }, never, never>;
}
