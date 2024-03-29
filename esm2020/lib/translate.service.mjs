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
                "VALIDATE_AVAILABILITY": "Valider mes préférences de rappel",
            },
            'en': {
                'GO': `Let's go`,
                'SEND_MESSAGE': 'Send my message',
                'SELECT': 'You must select an answer',
                'SCREENSHOT': 'Screenshot',
                'SEND': 'Validate impacted people number',
                "MONDAY": 'Monday',
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
                "VALIDATE_AVAILABILITY": "Validate my reminder preferences",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFzRDNCO1FBckRRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsY0FBYyxFQUFFLHFCQUFxQjtnQkFDckMsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsTUFBTSxFQUFFLHlDQUF5QztnQkFDakQsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixlQUFlLEVBQUUsbUJBQW1CO2dCQUNwQyxZQUFZLEVBQUUsY0FBYztnQkFDNUIsYUFBYSxFQUFFLGdCQUFnQjtnQkFDL0IsdUJBQXVCLEVBQUUsbUNBQW1DO2FBQy9EO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsaUJBQWlCO2dCQUNqQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxZQUFZLEVBQUUsWUFBWTtnQkFDMUIsTUFBTSxFQUFFLGlDQUFpQztnQkFDekMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsYUFBYSxFQUFFLGVBQWU7Z0JBQzlCLGVBQWUsRUFBRSxpQkFBaUI7Z0JBQ2xDLFlBQVksRUFBRSxZQUFZO2dCQUMxQixhQUFhLEVBQUUsYUFBYTtnQkFDNUIsdUJBQXVCLEVBQUUsa0NBQWtDO2FBQzlEO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dGQTFEVSxnQkFBZ0I7c0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTt1RkFFUCxnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdHTyc6IGBDJ2VzdCBwYXJ0aWAsXG4gICAgICAgICAgJ1NFTkRfTUVTU0FHRSc6ICdFbnZveWVyIG1vbiBtZXNzYWdlJyxcbiAgICAgICAgICAnU0VMRUNUJzogJ1ZvdXMgZGV2ZXogc8OpbGVjdGlvbm5lciB1bmUgcsOpcG9uc2UnLFxuICAgICAgICAgICdTQ1JFRU5TSE9UJzogXCJDYXB0dXJlIGQnw6ljcmFuXCIsXG4gICAgICAgICAgJ1NFTkQnOiAnVmFsaWRlciBsZSBub21icmUgZGUgcGVyc29ubmVzIHRvdWNow6llcycsXG4gICAgICAgICAgJ01PTkRBWSc6ICdMdW5kaScsXG4gICAgICAgICAgXCJUVUVTREFZXCI6ICdNYXJkaScsXG4gICAgICAgICAgXCJXRURORVNEQVlcIjogJ01lcmNyZWRpJyxcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdKZXVkaScsXG4gICAgICAgICAgXCJGUklEQVlcIjogJ1ZlbmRyZWRpJyxcbiAgICAgICAgICBcIlNBVFVSREFZXCI6ICdTYW1lZGknLFxuICAgICAgICAgIFwiU1VOREFZXCI6ICdEaW1hbmNoZScsXG4gICAgICAgICAgXCJPVEhFUlwiOiBcIkF1dHJlXCIsXG4gICAgICAgICAgXCJGUkVFX0ZJRUxEXCI6ICdDaGFtcCBsaWJyZScsXG4gICAgICAgICAgXCJWQUxJREFURVwiOiAnVmFsaWRlcicsXG4gICAgICAgICAgXCJTS0lQXCI6ICdQYXNzZXInLFxuICAgICAgICAgIFwiTU9STklOR1wiOiBcIk1hdGluXCIsXG4gICAgICAgICAgXCJBRlRFUk5PT05cIjogXCJBcHLDqHMtbWlkaVwiLFxuICAgICAgICAgIFwiTU9STklOR19BTExcIjogJ01hdGluICh0b3VzKScsXG4gICAgICAgICAgXCJBRlRFUk5PT05fQUxMXCI6ICdBcHLDqHMtbWlkaSAodG91cyknLFxuICAgICAgICAgIFwiQVRUQUNITUVOVFwiOiAncGnDqGNlIGpvaW50ZScsXG4gICAgICAgICAgXCJBVFRBQ0hNRU5UU1wiOiAncGnDqGNlcyBqb2ludGVzJyxcbiAgICAgICAgICBcIlZBTElEQVRFX0FWQUlMQUJJTElUWVwiOiBcIlZhbGlkZXIgbWVzIHByw6lmw6lyZW5jZXMgZGUgcmFwcGVsXCIsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdHTyc6IGBMZXQncyBnb2AsXG4gICAgICAgICAgJ1NFTkRfTUVTU0FHRSc6ICdTZW5kIG15IG1lc3NhZ2UnLFxuICAgICAgICAgICdTRUxFQ1QnOiAnWW91IG11c3Qgc2VsZWN0IGFuIGFuc3dlcicsXG4gICAgICAgICAgJ1NDUkVFTlNIT1QnOiAnU2NyZWVuc2hvdCcsXG4gICAgICAgICAgJ1NFTkQnOiAnVmFsaWRhdGUgaW1wYWN0ZWQgcGVvcGxlIG51bWJlcicsXG4gICAgICAgICAgXCJNT05EQVlcIjogJ01vbmRheScsXG4gICAgICAgICAgXCJUVUVTREFZXCI6ICdUdWVzZGF5JyxcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnV2VkbmVzZGF5JyxcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdUaHVyc2RheScsXG4gICAgICAgICAgXCJGUklEQVlcIjogJ0ZyaWRheScsXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2F0dXJkYXknLFxuICAgICAgICAgIFwiU1VOREFZXCI6ICdTdW5kYXknLFxuICAgICAgICAgIFwiT1RIRVJcIjogJ090aGVyJyxcbiAgICAgICAgICBcIkZSRUVfRklFTERcIjogJ0ZyZWUgZmllbGQnLFxuICAgICAgICAgIFwiVkFMSURBVEVcIjogJ1ZhbGlkYXRlJyxcbiAgICAgICAgICBcIlNLSVBcIjogJ1NraXAnLFxuICAgICAgICAgIFwiTU9STklOR1wiOiBcIk1vcm5pbmdcIixcbiAgICAgICAgICBcIkFGVEVSTk9PTlwiOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIFwiTU9STklOR19BTExcIjogJ01vcm5pbmcgKGFsbCknLFxuICAgICAgICAgIFwiQUZURVJOT09OX0FMTFwiOiAnQWZ0ZXJub29uIChhbGwpJyxcbiAgICAgICAgICBcIkFUVEFDSE1FTlRcIjogJ2F0dGFjaG1lbnQnLFxuICAgICAgICAgIFwiQVRUQUNITUVOVFNcIjogJ2F0dGFjaG1lbnRzJyxcbiAgICAgICAgICBcIlZBTElEQVRFX0FWQUlMQUJJTElUWVwiOiBcIlZhbGlkYXRlIG15IHJlbWluZGVyIHByZWZlcmVuY2VzXCIsXG4gICAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyB0cmFuc2xhdGUobCwgd29yZCkge1xuICAgIHJldHVybiB0aGlzLmxhbmdbbF1bd29yZF07XG4gIH1cbn1cbiJdfQ==