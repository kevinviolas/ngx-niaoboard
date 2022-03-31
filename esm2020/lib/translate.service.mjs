import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'GO': `C'est parti`,
                'SEND_MESSAGE': 'Envoyer mon message',
                'SELECT': 'Vous devez sélectionner une réponse',
                'SCREENSHOT': "Capture d'écran",
                'SEND': 'Envoyer'
            },
            'en': {
                'GO': `Let's go`,
                'SEND_MESSAGE': 'Send my message',
                'SELECT': 'You must select an answer',
                'SCREENSHOT': 'Screenshot',
                'SEND': 'Send'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFrQjNCO1FBakJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsY0FBYyxFQUFFLHFCQUFxQjtnQkFDckMsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsTUFBTSxFQUFFLFNBQVM7YUFDcEI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGNBQWMsRUFBRSxpQkFBaUI7Z0JBQ2pDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFlBQVksRUFBRSxZQUFZO2dCQUMxQixNQUFNLEVBQUUsTUFBTTthQUNqQjtTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnRkF0QlUsZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07dUZBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnR08nOiBgQydlc3QgcGFydGlgLFxuICAgICAgICAgICdTRU5EX01FU1NBR0UnOiAnRW52b3llciBtb24gbWVzc2FnZScsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdWb3VzIGRldmV6IHPDqWxlY3Rpb25uZXIgdW5lIHLDqXBvbnNlJyxcbiAgICAgICAgICAnU0NSRUVOU0hPVCc6IFwiQ2FwdHVyZSBkJ8OpY3JhblwiLFxuICAgICAgICAgICdTRU5EJzogJ0Vudm95ZXInXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdHTyc6IGBMZXQncyBnb2AsXG4gICAgICAgICAgJ1NFTkRfTUVTU0FHRSc6ICdTZW5kIG15IG1lc3NhZ2UnLFxuICAgICAgICAgICdTRUxFQ1QnOiAnWW91IG11c3Qgc2VsZWN0IGFuIGFuc3dlcicsXG4gICAgICAgICAgJ1NDUkVFTlNIT1QnOiAnU2NyZWVuc2hvdCcsXG4gICAgICAgICAgJ1NFTkQnOiAnU2VuZCdcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19