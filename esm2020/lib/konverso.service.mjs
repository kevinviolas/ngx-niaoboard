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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIva29udmVyc28uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFhLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7QUFFMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUcxQixNQUFNLE9BQU8sZUFBZTtJQXVCeEIsWUFBdUMsTUFBeUIsRUFBVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBdEJuRixtQkFBYyxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU5RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLGVBQVUsR0FBNEMsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxDQUFDO1FBQ3hHLHFCQUFnQixHQUF5QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzNFLHlDQUF5QztRQUNqQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU12QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMs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QUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNLLElBQUk7UUFDUixJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUMzQyxRQUFRLENBQUMsRUFBRSxDQUFDO2lCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUM7UUFDRixPQUFPLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN6SCxDQUFDOzs4RUEzTFEsZUFBZSxjQXVCSixpQkFBaUI7cUVBdkI1QixlQUFlLFdBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVU7O3NCQXdCTSxNQUFNO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbG9yU2V0LCBEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0ludGVyZmFjZSwgS29udmVyc29RdWVyeSwgS29udmVyc29Vc2VyfSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtCQVJCRX0gZnJvbSAnLi9NeUZ1Y2tpbmdNdXN0YWNoZSc7XHJcblxyXG5jb25zdCBiYXJiZSA9IG5ldyBCQVJCRSgpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgS29udmVyc29TZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4oKTtcclxuICAgIHB1YmxpYyBhc3NldHM6IERlZmF1bHRBc3NldHM7XHJcbiAgICBwdWJsaWMgZmlyc3RWaXNpdCA9IGZhbHNlO1xyXG4gICAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgQ29sb3JTZXQ6IENvbG9yU2V0O1xyXG4gICAgcHVibGljIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBOdW1iZXJQbGFjZUhvbGRlcjogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xyXG4gICAgcHVibGljIFdlbGNvbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkeVN0YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgX2F1dGg6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbGFuZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xyXG4gICAgcHVibGljIGN1c3RvbURhdGE6IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4obnVsbCk7XHJcbiAgICBwdWJsaWMgZW11bGF0aW9uVHJpZ2dlcjogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gICAgcHJpdmF0ZSB0b2tlbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxyXG4gICAgcHJpdmF0ZSBfdG9rZW4gPSB0aGlzLnRva2VuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgcHJpdmF0ZSB1c2VyOiBLb252ZXJzb1VzZXI7XHJcbiAgICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XHJcbiAgICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hLb252ZXJzb19fJykgY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKTtcclxuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZShjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBRdWVyeSBUbyBiYWNrZW5kIHNlcnZlciBhbmQgZ2V0IGEgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSBxdWVyeVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VuZChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVwYXJlZERhdGEgPSB0aGlzLmJ1aWxkUXVlcnkocXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQgKyAnP3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBwcmVwYXJlZERhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hlYWRlciBpcyBub3Qgc2V0LCBwbGVhc2UgcHJvdmlkZSBhIHRva2VuIHRob3VnaCB1c2VyIHNldHRpbmcgb3IgdGhvdWdoIG1vZHVsZSBjb25maWd1cmF0aW9uJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ3VycmVudCBpbnB1dCBpcyBlbXB0eSwgcGxlYXNlIHRyeSBhZ2FpbicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW11bGF0ZSB1c2VyIGVudHJ5IFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxyXG4gICAgICogQHBhcmFtIHF1ZXJ5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZW5kVHJpZ2dlckVtdWxhdGlvbihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmQocXVlcnkpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgdHJpZ2dlciBlbXVsYXRpb24nLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtdWxhdGlvblRyaWdnZXIubmV4dCh7aW5wdXQ6IHF1ZXJ5LCAuLi5yZXNwb25zZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBHZW5lcmF0ZSBIZWFkZXIgZm9yIGJhY2tlbmQgY2FsbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcclxuICAgICAgICB0aGlzLl90b2tlbi5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgLy8nQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgLy8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjb25maWdcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0SW5zdGFuY2UoY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSkge1xyXG4gICAgICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xyXG4gICAgICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludDtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5Bc3Npc3RhbnRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFzc2lzdGFudE1vZGUgPSBjb25maWcuQXNzaXN0YW50TW9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2V0cyA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvclNldCA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuYXV0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IEtvbnZlcnNvVXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXI/Lmxhbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk51bWJlclBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0TnVtYmVyUGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV2VsY29tZSA9IGJhcmJlLnJlbmRlcihjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0sIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcj8udG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHVzZXI/LnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXI/LmZpcnN0VmlzaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVzZXIuZmlyc3RWaXNpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc/LkJvdEluaXRNZXNzYWdlPy5GaXJzdFVzYWdlW3RoaXMubG9jYWxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaGlzdG9yeSBvZiBjb25maWcuQm90SW5pdE1lc3NhZ2UuRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeS5wdXNoKGJhcmJlLnJlbmRlcihoaXN0b3J5LCB1c2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmxhbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXROdW1iZXJQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXROdW1iZXJQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk51bWJlclBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0TnVtYmVyUGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuV2VsY29tZSA9IGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuZ3VpZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IGNvbmZpZy5sYW5nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLm5leHQoY29uZmlnLnRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogcHJlcGFyZSBzZXQgZGF0YSB0byBwdXNoIHRvIGJhY2tlbmQgc2VydmVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnVpbGRRdWVyeShxdWVyeTogc3RyaW5nKTogS29udmVyc29RdWVyeSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IGN1c3RvbTogYW55ID0gdGhpcy5jdXN0b21EYXRhLmdldFZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uY3VzdG9tLFxyXG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpLFxyXG4gICAgICAgICAgICBpc1NlbmRpbmc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWQoKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XHJcbiAgICB9XHJcbn1cclxuIl19