import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'GO': `C'est parti`,
                'SEND': 'Envoyer mon message',
                'SELECT': 'Vous devez sélectionner une réponse',
            },
            'en': {
                'GO': `Let's go`,
                'SEND': 'Send my message',
                'SELECT': 'You must select an answer',
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(); };
TranslateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TranslateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFjM0I7UUFiUSxTQUFJLEdBQUc7WUFDWCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU0sRUFBRSxxQkFBcUI7Z0JBQzdCLFFBQVEsRUFBRSxxQ0FBcUM7YUFDbEQ7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLFFBQVEsRUFBRSwyQkFBMkI7YUFDeEM7U0FDSixDQUFBO0lBRWUsQ0FBQztJQUVWLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0ZBbEJVLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGZixNQUFNO3VGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGxhbmcgPSB7XG4gICAgICAnZnInOiB7XG4gICAgICAgICAgJ0dPJzogYEMnZXN0IHBhcnRpYCxcbiAgICAgICAgICAnU0VORCc6ICdFbnZveWVyIG1vbiBtZXNzYWdlJyxcbiAgICAgICAgICAnU0VMRUNUJzogJ1ZvdXMgZGV2ZXogc8OpbGVjdGlvbm5lciB1bmUgcsOpcG9uc2UnLFxuICAgICAgfSxcbiAgICAgICdlbic6IHtcbiAgICAgICAgICAnR08nOiBgTGV0J3MgZ29gLFxuICAgICAgICAgICdTRU5EJzogJ1NlbmQgbXkgbWVzc2FnZScsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdZb3UgbXVzdCBzZWxlY3QgYW4gYW5zd2VyJyxcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19