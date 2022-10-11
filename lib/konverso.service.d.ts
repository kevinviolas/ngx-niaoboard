import { EventEmitter } from '@angular/core';
import { ColorSet, DefaultAssets, KonversoInterface, KonversoUser } from '../interface/KonversoInterface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class KonversoService {
    private http;
    authentication: EventEmitter<KonversoUser>;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    ColorSet: ColorSet;
    PlaceHolder: string[];
    NumberPlaceHolder: string[];
    AssistantMode: boolean;
    Welcome: string;
    readyState: boolean;
    locale: string;
    _auth: boolean;
    lang: BehaviorSubject<string>;
    customData: BehaviorSubject<{
        [key: string]: any;
    }>;
    emulationTrigger: BehaviorSubject<any>;
    private token;
    private _token;
    private user;
    private header;
    private endpoint;
    localModalAttachments: any;
    constructor(config: KonversoInterface, http: HttpClient);
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    send(query: string): Promise<string | any>;
    /**
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    sendTriggerEmulation(query: string): Promise<void>;
    /**
     * @private
     * Generate Header for backend call
     */
    private buildHeaders;
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    private initInstance;
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    private buildQuery;
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    private guid;
    static ɵfac: i0.ɵɵFactoryDeclaration<KonversoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<KonversoService>;
}
