import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { BARBE } from './MyFuckingMustache';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const barbe = new BARBE();
export class KonversoService {
    constructor(config, http) {
        this.http = http;
        this.authentication = new EventEmitter();
        this.firstVisit = false;
        this.AssistantMode = false;
        this.readyState = false;
        this.lang = new BehaviorSubject('');
        this.customData = new BehaviorSubject(null);
        this.emulationTrigger = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        // tslint:disable-next-line:variable-name
        this._token = this.token.asObservable();
        this.buildHeaders();
        this.initInstance(config);
    }
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    async send(query) {
        return new Promise((resolve, reject) => {
            if (query && query.replace(new RegExp(' ', 'g'), '')) {
                if (this.header) {
                    const preparedData = this.buildQuery(query);
                    const options = {
                        headers: this.header
                    };
                    this.http.post(this.endpoint + '?t=' + new Date().getTime(), preparedData, options)
                        .subscribe((data) => {
                        resolve(data);
                    });
                }
                else {
                    reject(new Error('Header is not set, please provide a token though user setting or though module configuration'));
                }
            }
            else {
                reject(new Error('Current input is empty, please try again'));
            }
        });
    }
    /**
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    async sendTriggerEmulation(query) {
        const response = await this.send(query).catch((err) => {
            console.log('error trigger emulation', err);
        });
        if (response) {
            this.emulationTrigger.next({ input: query, ...response });
        }
    }
    /**
     * @private
     * Generate Header for backend call
     */
    buildHeaders() {
        this._token.subscribe((token) => {
            const bearer = 'Bearer ' + token;
            this.header = new HttpHeaders({
                //'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': bearer
            });
        });
    }
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    initInstance(config) {
        this._auth = !!config.auth;
        if (config.endpoint) {
            this.endpoint = config.endpoint;
            if (config.AssistantMode) {
                this.AssistantMode = config.AssistantMode;
            }
            if (config.defaultAssets) {
                this.assets = config.defaultAssets;
                if (config.defaultAssets.ColorSet) {
                    this.ColorSet = config.defaultAssets.ColorSet;
                }
            }
            if (config.auth) {
                this.authentication.subscribe((user) => {
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user?.lang;
                    this.lang.next(this.locale);
                    if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                        this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        this.Welcome = barbe.render(config.BotInitMessage.Welcome[this.locale], user);
                    }
                    if (user?.token) {
                        this.token.next(user?.token);
                    }
                    if (user?.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (config?.BotInitMessage?.FirstUsage &&
                            this.locale &&
                            config?.BotInitMessage?.FirstUsage[this.locale]) {
                            this.firstUsageStory = [];
                            for (const history of config.BotInitMessage.FirstUsage[this.locale]) {
                                this.firstUsageStory.push(barbe.render(history, user));
                            }
                        }
                    }
                    this.user = user;
                    this.readyState = true;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale);
                if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                    this.PlaceHolder = config.InputPlaceHolder[this.locale];
                }
                if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                    this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
                }
                if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                    this.Welcome = config.BotInitMessage.Welcome[this.locale];
                }
                this.user = {
                    userId: this.guid(),
                    lang: config.lang
                };
                this.readyState = true;
            }
            if (config.token) {
                this.token.next(config.token);
            }
        }
        else {
            return new Error('Please provide endpoint');
        }
    }
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    buildQuery(query) {
        // @ts-ignore
        const custom = this.customData.getValue();
        return {
            ...custom,
            ...this.user,
            query: query.replace(/\s+/g, ' ').trim(),
            isSending: true
        };
    }
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    guid() {
        let random = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    }
}
KonversoService.ɵfac = function KonversoService_Factory(t) { return new (t || KonversoService)(i0.ɵɵinject('__NgxKonverso__'), i0.ɵɵinject(i1.HttpClient)); };
KonversoService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: KonversoService, factory: KonversoService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KonversoService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxKonverso__']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIva29udmVyc28uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFhLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7QUFFMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUcxQixNQUFNLE9BQU8sZUFBZTtJQXVCeEIsWUFBdUMsTUFBeUIsRUFBVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBdEJuRixtQkFBYyxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU5RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLGVBQVUsR0FBNEMsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxDQUFDO1FBQ3hHLHFCQUFnQixHQUF5QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzNFLHlDQUF5QztRQUNqQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU12QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMs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QUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNLLElBQUk7UUFDUixJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUMzQyxRQUFRLENBQUMsRUFBRSxDQUFDO2lCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFDRixPQUFPLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN6SCxDQUFDOzs4RUEzTFEsZUFBZSxjQXVCSixpQkFBaUI7cUVBdkI1QixlQUFlLFdBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVU7O3NCQXdCTSxNQUFNO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xvclNldCwgRGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIEtvbnZlcnNvUXVlcnksIEtvbnZlcnNvVXNlcn0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7QkFSQkV9IGZyb20gJy4vTXlGdWNraW5nTXVzdGFjaGUnO1xuXG5jb25zdCBiYXJiZSA9IG5ldyBCQVJCRSgpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS29udmVyc29TZXJ2aWNlIHtcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb246IEV2ZW50RW1pdHRlcjxLb252ZXJzb1VzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxLb252ZXJzb1VzZXI+KCk7XG4gICAgcHVibGljIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgICBwdWJsaWMgZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgIHB1YmxpYyBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBDb2xvclNldDogQ29sb3JTZXQ7XG4gICAgcHVibGljIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgTnVtYmVyUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBBc3Npc3RhbnRNb2RlID0gZmFsc2U7XG4gICAgcHVibGljIFdlbGNvbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZHlTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcbiAgICBwdWJsaWMgX2F1dGg6IGJvb2xlYW47XG4gICAgcHVibGljIGxhbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgICBwdWJsaWMgY3VzdG9tRGF0YTogQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PihudWxsKTtcbiAgICBwdWJsaWMgZW11bGF0aW9uVHJpZ2dlcjogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICAgIHByaXZhdGUgdG9rZW46IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgcHJpdmF0ZSBfdG9rZW4gPSB0aGlzLnRva2VuLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByaXZhdGUgdXNlcjogS29udmVyc29Vc2VyO1xuICAgIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcbiAgICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neEtvbnZlcnNvX18nKSBjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzZW5kKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVwYXJlZERhdGEgPSB0aGlzLmJ1aWxkUXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLmVuZHBvaW50ICsgJz90PScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgcHJlcGFyZWREYXRhLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hlYWRlciBpcyBub3Qgc2V0LCBwbGVhc2UgcHJvdmlkZSBhIHRva2VuIHRob3VnaCB1c2VyIHNldHRpbmcgb3IgdGhvdWdoIG1vZHVsZSBjb25maWd1cmF0aW9uJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ3VycmVudCBpbnB1dCBpcyBlbXB0eSwgcGxlYXNlIHRyeSBhZ2FpbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW11bGF0ZSB1c2VyIGVudHJ5IFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzZW5kVHJpZ2dlckVtdWxhdGlvbihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kKHF1ZXJ5KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciB0cmlnZ2VyIGVtdWxhdGlvbicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0aW9uVHJpZ2dlci5uZXh0KHtpbnB1dDogcXVlcnksIC4uLnJlc3BvbnNlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gICAgICovXG4gICAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuLnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAvLydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgLy8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xuICAgICAgICBpZiAoY29uZmlnLmVuZHBvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5Bc3Npc3RhbnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gY29uZmlnLkFzc2lzdGFudE1vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRzID0gY29uZmlnLmRlZmF1bHRBc3NldHM7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ29sb3JTZXQgPSBjb25maWcuZGVmYXVsdEFzc2V0cy5Db2xvclNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgodXNlcjogS29udmVyc29Vc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXI/Lmxhbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLklucHV0TnVtYmVyUGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0TnVtYmVyUGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk51bWJlclBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0TnVtYmVyUGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuQ3VzdG9tV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV2VsY29tZSA9IGJhcmJlLnJlbmRlcihjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0sIHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyPy50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHVzZXI/LnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcj8uZmlyc3RWaXNpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1c2VyLmZpcnN0VmlzaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnPy5Cb3RJbml0TWVzc2FnZT8uRmlyc3RVc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPy5Cb3RJbml0TWVzc2FnZT8uRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaGlzdG9yeSBvZiBjb25maWcuQm90SW5pdE1lc3NhZ2UuRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkucHVzaChiYXJiZS5yZW5kZXIoaGlzdG9yeSwgdXNlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk51bWJlclBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0TnVtYmVyUGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuV2VsY29tZSA9IGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuZ3VpZCgpLFxuICAgICAgICAgICAgICAgICAgICBsYW5nOiBjb25maWcubGFuZ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLm5leHQoY29uZmlnLnRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIHByZXBhcmUgc2V0IGRhdGEgdG8gcHVzaCB0byBiYWNrZW5kIHNlcnZlclxuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRRdWVyeShxdWVyeTogc3RyaW5nKTogS29udmVyc29RdWVyeSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY3VzdG9tOiBhbnkgPSB0aGlzLmN1c3RvbURhdGEuZ2V0VmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmN1c3RvbSxcbiAgICAgICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpLFxuICAgICAgICAgICAgaXNTZW5kaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBHZW5lcmF0ZSBSYW5kb20gdW5pcSBJZCBmb3IgS29udmVyc28gSW5zdGFuY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGd1aWQoKSB7XG4gICAgICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gICAgfVxufVxuIl19