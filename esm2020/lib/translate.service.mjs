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
                'SEND': 'Valider le nombre de personnes touchées',
                'MONDAY': 'Lundi',
                "TUESDAY": 'Mardi',
                "WEDNESDAY": 'Mercredi',
                "THURSDAY": 'Jeudi',
                "FRIDAY": 'Vendredi',
                "SATURDAY": 'Samedi',
                "SUNDAY": 'Dimanche',
                "OTHER": "Autre",
                "FREE_FIELD": 'Champ libre',
                "VALIDATE": 'Valider',
                "SKIP": 'Passer',
                "MORNING": "Matin",
                "AFTERNOON": "Après-midi",
                "MORNING_ALL": 'Matin (tous)',
                "AFTERNOON_ALL": 'Après-midi (tous)',
            },
            'en': {
                'GO': `Let's go`,
                'SEND_MESSAGE': 'Send my message',
                'SELECT': 'You must select an answer',
                'SCREENSHOT': 'Screenshot',
                'SEND': 'Validate impacted people number',
                "TUESDAY": 'Tuesday',
                "WEDNESDAY": 'Wednesday',
                "THURSDAY": 'Thursday',
                "FRIDAY": 'Friday',
                "SATURDAY": 'Saturday',
                "SUNDAY": 'Sunday',
                "OTHER": 'Other',
                "FREE_FIELD": 'Free field',
                "VALIDATE": 'Validate',
                "SKIP": 'Skip',
                "MORNING": "Morning",
                "AFTERNOON": "Afternoon",
                "MORNING_ALL": 'Morning (all)',
                "AFTERNOON_ALL": 'Afternoon (all)',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUErQzNCO1FBOUNRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsY0FBYyxFQUFFLHFCQUFxQjtnQkFDckMsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsTUFBTSxFQUFFLHlDQUF5QztnQkFDakQsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixlQUFlLEVBQUUsbUJBQW1CO2FBQ3ZDO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsaUJBQWlCO2dCQUNqQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxZQUFZLEVBQUUsWUFBWTtnQkFDMUIsTUFBTSxFQUFFLGlDQUFpQztnQkFDekMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixhQUFhLEVBQUUsZUFBZTtnQkFDOUIsZUFBZSxFQUFFLGlCQUFpQjthQUNyQztTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnRkFuRFUsZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07dUZBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnR08nOiBgQydlc3QgcGFydGlgLFxuICAgICAgICAgICdTRU5EX01FU1NBR0UnOiAnRW52b3llciBtb24gbWVzc2FnZScsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdWb3VzIGRldmV6IHPDqWxlY3Rpb25uZXIgdW5lIHLDqXBvbnNlJyxcbiAgICAgICAgICAnU0NSRUVOU0hPVCc6IFwiQ2FwdHVyZSBkJ8OpY3JhblwiLFxuICAgICAgICAgICdTRU5EJzogJ1ZhbGlkZXIgbGUgbm9tYnJlIGRlIHBlcnNvbm5lcyB0b3VjaMOpZXMnLFxuICAgICAgICAgICdNT05EQVknOiAnTHVuZGknLFxuICAgICAgICAgIFwiVFVFU0RBWVwiOiAnTWFyZGknLFxuICAgICAgICAgIFwiV0VETkVTREFZXCI6ICdNZXJjcmVkaScsXG4gICAgICAgICAgXCJUSFVSU0RBWVwiOiAnSmV1ZGknLFxuICAgICAgICAgIFwiRlJJREFZXCI6ICdWZW5kcmVkaScsXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2FtZWRpJyxcbiAgICAgICAgICBcIlNVTkRBWVwiOiAnRGltYW5jaGUnLFxuICAgICAgICAgIFwiT1RIRVJcIjogXCJBdXRyZVwiLFxuICAgICAgICAgIFwiRlJFRV9GSUVMRFwiOiAnQ2hhbXAgbGlicmUnLFxuICAgICAgICAgIFwiVkFMSURBVEVcIjogJ1ZhbGlkZXInLFxuICAgICAgICAgIFwiU0tJUFwiOiAnUGFzc2VyJyxcbiAgICAgICAgICBcIk1PUk5JTkdcIjogXCJNYXRpblwiLFxuICAgICAgICAgIFwiQUZURVJOT09OXCI6IFwiQXByw6hzLW1pZGlcIixcbiAgICAgICAgICBcIk1PUk5JTkdfQUxMXCI6ICdNYXRpbiAodG91cyknLFxuICAgICAgICAgIFwiQUZURVJOT09OX0FMTFwiOiAnQXByw6hzLW1pZGkgKHRvdXMpJyxcbiAgICAgIH0sXG4gICAgICAnZW4nOiB7XG4gICAgICAgICAgJ0dPJzogYExldCdzIGdvYCxcbiAgICAgICAgICAnU0VORF9NRVNTQUdFJzogJ1NlbmQgbXkgbWVzc2FnZScsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdZb3UgbXVzdCBzZWxlY3QgYW4gYW5zd2VyJyxcbiAgICAgICAgICAnU0NSRUVOU0hPVCc6ICdTY3JlZW5zaG90JyxcbiAgICAgICAgICAnU0VORCc6ICdWYWxpZGF0ZSBpbXBhY3RlZCBwZW9wbGUgbnVtYmVyJyxcbiAgICAgICAgICBcIlRVRVNEQVlcIjogJ1R1ZXNkYXknLFxuICAgICAgICAgIFwiV0VETkVTREFZXCI6ICdXZWRuZXNkYXknLFxuICAgICAgICAgIFwiVEhVUlNEQVlcIjogJ1RodXJzZGF5JyxcbiAgICAgICAgICBcIkZSSURBWVwiOiAnRnJpZGF5JyxcbiAgICAgICAgICBcIlNBVFVSREFZXCI6ICdTYXR1cmRheScsXG4gICAgICAgICAgXCJTVU5EQVlcIjogJ1N1bmRheScsXG4gICAgICAgICAgXCJPVEhFUlwiOiAnT3RoZXInLFxuICAgICAgICAgIFwiRlJFRV9GSUVMRFwiOiAnRnJlZSBmaWVsZCcsXG4gICAgICAgICAgXCJWQUxJREFURVwiOiAnVmFsaWRhdGUnLFxuICAgICAgICAgIFwiU0tJUFwiOiAnU2tpcCcsXG4gICAgICAgICAgXCJNT1JOSU5HXCI6IFwiTW9ybmluZ1wiLFxuICAgICAgICAgIFwiQUZURVJOT09OXCI6IFwiQWZ0ZXJub29uXCIsXG4gICAgICAgICAgXCJNT1JOSU5HX0FMTFwiOiAnTW9ybmluZyAoYWxsKScsXG4gICAgICAgICAgXCJBRlRFUk5PT05fQUxMXCI6ICdBZnRlcm5vb24gKGFsbCknLFxuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdHJhbnNsYXRlKGwsIHdvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICB9XG59XG4iXX0=