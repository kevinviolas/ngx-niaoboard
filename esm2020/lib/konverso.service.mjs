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
        this.localModalAttachments = {};
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
        console.log('FOKING CONFIG', config);
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
                    this.localModalAttachments = config.ModalAttachmentText[this.locale];
                    console.log(config.ModalAttachmentText, user.lang);
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
                this.localModalAttachments = config.ModalAttachmentText[config.lang];
                console.log(config.ModalAttachmentText, config.lang);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIva29udmVyc28uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFhLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7QUFFMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUcxQixNQUFNLE9BQU8sZUFBZTtJQXdCeEIsWUFBdUMsTUFBeUIsRUFBVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBdkJuRixtQkFBYyxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU5RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS25CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLGVBQVUsR0FBNEMsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxDQUFDO1FBQ3hHLHFCQUFnQixHQUF5QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzNFLHlDQUF5QztRQUNqQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUlwQywwQkFBcUIsR0FBUyxFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElB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aUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sb3JTZXQsIERlZmF1bHRBc3NldHMsIEtvbnZlcnNvSW50ZXJmYWNlLCBLb252ZXJzb1F1ZXJ5LCBLb252ZXJzb1VzZXJ9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0JBUkJFfSBmcm9tICcuL015RnVja2luZ011c3RhY2hlJztcblxuY29uc3QgYmFyYmUgPSBuZXcgQkFSQkUoKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvU2VydmljZSB7XG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uOiBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPigpO1xuICAgIHB1YmxpYyBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gICAgcHVibGljIGZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICBwdWJsaWMgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgQ29sb3JTZXQ6IENvbG9yU2V0O1xuICAgIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgcHVibGljIE51bWJlclBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWR5U3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XG4gICAgcHVibGljIF9hdXRoOiBib29sZWFuO1xuICAgIHB1YmxpYyBsYW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gICAgcHVibGljIGN1c3RvbURhdGE6IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4obnVsbCk7XG4gICAgcHVibGljIGVtdWxhdGlvblRyaWdnZXI6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHByaXZhdGUgX3Rva2VuID0gdGhpcy50b2tlbi5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIHVzZXI6IEtvbnZlcnNvVXNlcjtcbiAgICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gICAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2NhbE1vZGFsQXR0YWNobWVudHMgOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZShjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgUXVlcnkgVG8gYmFja2VuZCBzZXJ2ZXIgYW5kIGdldCBhIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNlbmQocXVlcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXBhcmVkRGF0YSA9IHRoaXMuYnVpbGRRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQgKyAnP3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBwcmVwYXJlZERhdGEsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSGVhZGVyIGlzIG5vdCBzZXQsIHBsZWFzZSBwcm92aWRlIGEgdG9rZW4gdGhvdWdoIHVzZXIgc2V0dGluZyBvciB0aG91Z2ggbW9kdWxlIGNvbmZpZ3VyYXRpb24nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDdXJyZW50IGlucHV0IGlzIGVtcHR5LCBwbGVhc2UgdHJ5IGFnYWluJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbXVsYXRlIHVzZXIgZW50cnkgUXVlcnkgVG8gYmFja2VuZCBzZXJ2ZXIgYW5kIGdldCBhIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNlbmRUcmlnZ2VyRW11bGF0aW9uKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmQocXVlcnkpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHRyaWdnZXIgZW11bGF0aW9uJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRpb25UcmlnZ2VyLm5leHQoe2lucHV0OiBxdWVyeSwgLi4ucmVzcG9uc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogR2VuZXJhdGUgSGVhZGVyIGZvciBiYWNrZW5kIGNhbGxcbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcbiAgICAgICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArIHRva2VuO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZPS0lORyBDT05GSUcnLCBjb25maWcpXG4gICAgICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xuICAgICAgICBpZiAoY29uZmlnLmVuZHBvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5Bc3Npc3RhbnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gY29uZmlnLkFzc2lzdGFudE1vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRzID0gY29uZmlnLmRlZmF1bHRBc3NldHM7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ29sb3JTZXQgPSBjb25maWcuZGVmYXVsdEFzc2V0cy5Db2xvclNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgodXNlcjogS29udmVyc29Vc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXI/Lmxhbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbE1vZGFsQXR0YWNobWVudHMgPSBjb25maWcuTW9kYWxBdHRhY2htZW50VGV4dFt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZy5Nb2RhbEF0dGFjaG1lbnRUZXh0LCB1c2VyLmxhbmcpXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxhY2VIb2xkZXIgPSBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5OdW1iZXJQbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBiYXJiZS5yZW5kZXIoY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdLCB1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcj8udG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyPy50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXI/LmZpcnN0VmlzaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdXNlci5maXJzdFZpc2l0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhpc3Rvcnkgb2YgY29uZmlnLkJvdEluaXRNZXNzYWdlLkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5LnB1c2goYmFyYmUucmVuZGVyKGhpc3RvcnksIHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxhY2VIb2xkZXIgPSBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXROdW1iZXJQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXROdW1iZXJQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5OdW1iZXJQbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dE51bWJlclBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxNb2RhbEF0dGFjaG1lbnRzID0gY29uZmlnLk1vZGFsQXR0YWNobWVudFRleHRbY29uZmlnLmxhbmddO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZy5Nb2RhbEF0dGFjaG1lbnRUZXh0LCBjb25maWcubGFuZylcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy5ndWlkKCksXG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IGNvbmZpZy5sYW5nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy50b2tlbikge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dChjb25maWcudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgZW5kcG9pbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqIEBwcml2YXRlXG4gICAgICogcHJlcGFyZSBzZXQgZGF0YSB0byBwdXNoIHRvIGJhY2tlbmQgc2VydmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBidWlsZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBLb252ZXJzb1F1ZXJ5IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjdXN0b206IGFueSA9IHRoaXMuY3VzdG9tRGF0YS5nZXRWYWx1ZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VzdG9tLFxuICAgICAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCksXG4gICAgICAgICAgICBpc1NlbmRpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ3VpZCgpIHtcbiAgICAgICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmFuZG9tKCkgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgcmFuZG9tKCkgKyByYW5kb20oKTtcbiAgICB9XG59XG4iXX0=