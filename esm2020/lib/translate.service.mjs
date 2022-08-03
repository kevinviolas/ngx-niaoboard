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
                "ATTACHMENT": 'pièce jointe',
                "ATTACHMENTS": 'pièces jointes',
                "VALIDATE_AVAILABILITY": "Valider mes disponibilités",
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
                "ATTACHMENT": 'attachment',
                "ATTACHMENTS": 'attachments',
                "VALIDATE_AVAILABILITY": "Validate availability",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFxRDNCO1FBcERRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsY0FBYyxFQUFFLHFCQUFxQjtnQkFDckMsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsTUFBTSxFQUFFLHlDQUF5QztnQkFDakQsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixlQUFlLEVBQUUsbUJBQW1CO2dCQUNwQyxZQUFZLEVBQUUsY0FBYztnQkFDNUIsYUFBYSxFQUFFLGdCQUFnQjtnQkFDL0IsdUJBQXVCLEVBQUUsNEJBQTRCO2FBQ3hEO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsaUJBQWlCO2dCQUNqQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxZQUFZLEVBQUUsWUFBWTtnQkFDMUIsTUFBTSxFQUFFLGlDQUFpQztnQkFDekMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixhQUFhLEVBQUUsZUFBZTtnQkFDOUIsZUFBZSxFQUFFLGlCQUFpQjtnQkFDbEMsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLGFBQWEsRUFBRSxhQUFhO2dCQUM1Qix1QkFBdUIsRUFBRSx1QkFBdUI7YUFDbkQ7U0FDSixDQUFBO0lBRWUsQ0FBQztJQUVWLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0ZBekRVLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGZixNQUFNO3VGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGxhbmcgPSB7XG4gICAgICAnZnInOiB7XG4gICAgICAgICAgJ0dPJzogYEMnZXN0IHBhcnRpYCxcbiAgICAgICAgICAnU0VORF9NRVNTQUdFJzogJ0Vudm95ZXIgbW9uIG1lc3NhZ2UnLFxuICAgICAgICAgICdTRUxFQ1QnOiAnVm91cyBkZXZleiBzw6lsZWN0aW9ubmVyIHVuZSByw6lwb25zZScsXG4gICAgICAgICAgJ1NDUkVFTlNIT1QnOiBcIkNhcHR1cmUgZCfDqWNyYW5cIixcbiAgICAgICAgICAnU0VORCc6ICdWYWxpZGVyIGxlIG5vbWJyZSBkZSBwZXJzb25uZXMgdG91Y2jDqWVzJyxcbiAgICAgICAgICAnTU9OREFZJzogJ0x1bmRpJyxcbiAgICAgICAgICBcIlRVRVNEQVlcIjogJ01hcmRpJyxcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnTWVyY3JlZGknLFxuICAgICAgICAgIFwiVEhVUlNEQVlcIjogJ0pldWRpJyxcbiAgICAgICAgICBcIkZSSURBWVwiOiAnVmVuZHJlZGknLFxuICAgICAgICAgIFwiU0FUVVJEQVlcIjogJ1NhbWVkaScsXG4gICAgICAgICAgXCJTVU5EQVlcIjogJ0RpbWFuY2hlJyxcbiAgICAgICAgICBcIk9USEVSXCI6IFwiQXV0cmVcIixcbiAgICAgICAgICBcIkZSRUVfRklFTERcIjogJ0NoYW1wIGxpYnJlJyxcbiAgICAgICAgICBcIlZBTElEQVRFXCI6ICdWYWxpZGVyJyxcbiAgICAgICAgICBcIlNLSVBcIjogJ1Bhc3NlcicsXG4gICAgICAgICAgXCJNT1JOSU5HXCI6IFwiTWF0aW5cIixcbiAgICAgICAgICBcIkFGVEVSTk9PTlwiOiBcIkFwcsOocy1taWRpXCIsXG4gICAgICAgICAgXCJNT1JOSU5HX0FMTFwiOiAnTWF0aW4gKHRvdXMpJyxcbiAgICAgICAgICBcIkFGVEVSTk9PTl9BTExcIjogJ0FwcsOocy1taWRpICh0b3VzKScsXG4gICAgICAgICAgXCJBVFRBQ0hNRU5UXCI6ICdwacOoY2Ugam9pbnRlJyxcbiAgICAgICAgICBcIkFUVEFDSE1FTlRTXCI6ICdwacOoY2VzIGpvaW50ZXMnLFxuICAgICAgICAgIFwiVkFMSURBVEVfQVZBSUxBQklMSVRZXCI6IFwiVmFsaWRlciBtZXMgZGlzcG9uaWJpbGl0w6lzXCIsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdHTyc6IGBMZXQncyBnb2AsXG4gICAgICAgICAgJ1NFTkRfTUVTU0FHRSc6ICdTZW5kIG15IG1lc3NhZ2UnLFxuICAgICAgICAgICdTRUxFQ1QnOiAnWW91IG11c3Qgc2VsZWN0IGFuIGFuc3dlcicsXG4gICAgICAgICAgJ1NDUkVFTlNIT1QnOiAnU2NyZWVuc2hvdCcsXG4gICAgICAgICAgJ1NFTkQnOiAnVmFsaWRhdGUgaW1wYWN0ZWQgcGVvcGxlIG51bWJlcicsXG4gICAgICAgICAgXCJUVUVTREFZXCI6ICdUdWVzZGF5JyxcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnV2VkbmVzZGF5JyxcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdUaHVyc2RheScsXG4gICAgICAgICAgXCJGUklEQVlcIjogJ0ZyaWRheScsXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2F0dXJkYXknLFxuICAgICAgICAgIFwiU1VOREFZXCI6ICdTdW5kYXknLFxuICAgICAgICAgIFwiT1RIRVJcIjogJ090aGVyJyxcbiAgICAgICAgICBcIkZSRUVfRklFTERcIjogJ0ZyZWUgZmllbGQnLFxuICAgICAgICAgIFwiVkFMSURBVEVcIjogJ1ZhbGlkYXRlJyxcbiAgICAgICAgICBcIlNLSVBcIjogJ1NraXAnLFxuICAgICAgICAgIFwiTU9STklOR1wiOiBcIk1vcm5pbmdcIixcbiAgICAgICAgICBcIkFGVEVSTk9PTlwiOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIFwiTU9STklOR19BTExcIjogJ01vcm5pbmcgKGFsbCknLFxuICAgICAgICAgIFwiQUZURVJOT09OX0FMTFwiOiAnQWZ0ZXJub29uIChhbGwpJyxcbiAgICAgICAgICBcIkFUVEFDSE1FTlRcIjogJ2F0dGFjaG1lbnQnLFxuICAgICAgICAgIFwiQVRUQUNITUVOVFNcIjogJ2F0dGFjaG1lbnRzJyxcbiAgICAgICAgICBcIlZBTElEQVRFX0FWQUlMQUJJTElUWVwiOiBcIlZhbGlkYXRlIGF2YWlsYWJpbGl0eVwiLFxuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdHJhbnNsYXRlKGwsIHdvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICB9XG59XG4iXX0=