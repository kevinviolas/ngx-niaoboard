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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFzRDNCO1FBckRRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsY0FBYyxFQUFFLHFCQUFxQjtnQkFDckMsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsTUFBTSxFQUFFLHlDQUF5QztnQkFDakQsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixlQUFlLEVBQUUsbUJBQW1CO2dCQUNwQyxZQUFZLEVBQUUsY0FBYztnQkFDNUIsYUFBYSxFQUFFLGdCQUFnQjtnQkFDL0IsdUJBQXVCLEVBQUUsNEJBQTRCO2FBQ3hEO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsaUJBQWlCO2dCQUNqQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxZQUFZLEVBQUUsWUFBWTtnQkFDMUIsTUFBTSxFQUFFLGlDQUFpQztnQkFDekMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsYUFBYSxFQUFFLGVBQWU7Z0JBQzlCLGVBQWUsRUFBRSxpQkFBaUI7Z0JBQ2xDLFlBQVksRUFBRSxZQUFZO2dCQUMxQixhQUFhLEVBQUUsYUFBYTtnQkFDNUIsdUJBQXVCLEVBQUUsdUJBQXVCO2FBQ25EO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dGQTFEVSxnQkFBZ0I7c0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTt1RkFFUCxnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsYW5nID0ge1xyXG4gICAgICAnZnInOiB7XHJcbiAgICAgICAgICAnR08nOiBgQydlc3QgcGFydGlgLFxyXG4gICAgICAgICAgJ1NFTkRfTUVTU0FHRSc6ICdFbnZveWVyIG1vbiBtZXNzYWdlJyxcclxuICAgICAgICAgICdTRUxFQ1QnOiAnVm91cyBkZXZleiBzw6lsZWN0aW9ubmVyIHVuZSByw6lwb25zZScsXHJcbiAgICAgICAgICAnU0NSRUVOU0hPVCc6IFwiQ2FwdHVyZSBkJ8OpY3JhblwiLFxyXG4gICAgICAgICAgJ1NFTkQnOiAnVmFsaWRlciBsZSBub21icmUgZGUgcGVyc29ubmVzIHRvdWNow6llcycsXHJcbiAgICAgICAgICAnTU9OREFZJzogJ0x1bmRpJyxcclxuICAgICAgICAgIFwiVFVFU0RBWVwiOiAnTWFyZGknLFxyXG4gICAgICAgICAgXCJXRURORVNEQVlcIjogJ01lcmNyZWRpJyxcclxuICAgICAgICAgIFwiVEhVUlNEQVlcIjogJ0pldWRpJyxcclxuICAgICAgICAgIFwiRlJJREFZXCI6ICdWZW5kcmVkaScsXHJcbiAgICAgICAgICBcIlNBVFVSREFZXCI6ICdTYW1lZGknLFxyXG4gICAgICAgICAgXCJTVU5EQVlcIjogJ0RpbWFuY2hlJyxcclxuICAgICAgICAgIFwiT1RIRVJcIjogXCJBdXRyZVwiLFxyXG4gICAgICAgICAgXCJGUkVFX0ZJRUxEXCI6ICdDaGFtcCBsaWJyZScsXHJcbiAgICAgICAgICBcIlZBTElEQVRFXCI6ICdWYWxpZGVyJyxcclxuICAgICAgICAgIFwiU0tJUFwiOiAnUGFzc2VyJyxcclxuICAgICAgICAgIFwiTU9STklOR1wiOiBcIk1hdGluXCIsXHJcbiAgICAgICAgICBcIkFGVEVSTk9PTlwiOiBcIkFwcsOocy1taWRpXCIsXHJcbiAgICAgICAgICBcIk1PUk5JTkdfQUxMXCI6ICdNYXRpbiAodG91cyknLFxyXG4gICAgICAgICAgXCJBRlRFUk5PT05fQUxMXCI6ICdBcHLDqHMtbWlkaSAodG91cyknLFxyXG4gICAgICAgICAgXCJBVFRBQ0hNRU5UXCI6ICdwacOoY2Ugam9pbnRlJyxcclxuICAgICAgICAgIFwiQVRUQUNITUVOVFNcIjogJ3Bpw6hjZXMgam9pbnRlcycsXHJcbiAgICAgICAgICBcIlZBTElEQVRFX0FWQUlMQUJJTElUWVwiOiBcIlZhbGlkZXIgbWVzIGRpc3BvbmliaWxpdMOpc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICAnZW4nOiB7XHJcbiAgICAgICAgICAnR08nOiBgTGV0J3MgZ29gLFxyXG4gICAgICAgICAgJ1NFTkRfTUVTU0FHRSc6ICdTZW5kIG15IG1lc3NhZ2UnLFxyXG4gICAgICAgICAgJ1NFTEVDVCc6ICdZb3UgbXVzdCBzZWxlY3QgYW4gYW5zd2VyJyxcclxuICAgICAgICAgICdTQ1JFRU5TSE9UJzogJ1NjcmVlbnNob3QnLFxyXG4gICAgICAgICAgJ1NFTkQnOiAnVmFsaWRhdGUgaW1wYWN0ZWQgcGVvcGxlIG51bWJlcicsXHJcbiAgICAgICAgICBcIk1PTkRBWVwiOiAnTW9uZGF5JyxcclxuICAgICAgICAgIFwiVFVFU0RBWVwiOiAnVHVlc2RheScsXHJcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnV2VkbmVzZGF5JyxcclxuICAgICAgICAgIFwiVEhVUlNEQVlcIjogJ1RodXJzZGF5JyxcclxuICAgICAgICAgIFwiRlJJREFZXCI6ICdGcmlkYXknLFxyXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2F0dXJkYXknLFxyXG4gICAgICAgICAgXCJTVU5EQVlcIjogJ1N1bmRheScsXHJcbiAgICAgICAgICBcIk9USEVSXCI6ICdPdGhlcicsXHJcbiAgICAgICAgICBcIkZSRUVfRklFTERcIjogJ0ZyZWUgZmllbGQnLFxyXG4gICAgICAgICAgXCJWQUxJREFURVwiOiAnVmFsaWRhdGUnLFxyXG4gICAgICAgICAgXCJTS0lQXCI6ICdTa2lwJyxcclxuICAgICAgICAgIFwiTU9STklOR1wiOiBcIk1vcm5pbmdcIixcclxuICAgICAgICAgIFwiQUZURVJOT09OXCI6IFwiQWZ0ZXJub29uXCIsXHJcbiAgICAgICAgICBcIk1PUk5JTkdfQUxMXCI6ICdNb3JuaW5nIChhbGwpJyxcclxuICAgICAgICAgIFwiQUZURVJOT09OX0FMTFwiOiAnQWZ0ZXJub29uIChhbGwpJyxcclxuICAgICAgICAgIFwiQVRUQUNITUVOVFwiOiAnYXR0YWNobWVudCcsXHJcbiAgICAgICAgICBcIkFUVEFDSE1FTlRTXCI6ICdhdHRhY2htZW50cycsXHJcbiAgICAgICAgICBcIlZBTElEQVRFX0FWQUlMQUJJTElUWVwiOiBcIlZhbGlkYXRlIGF2YWlsYWJpbGl0eVwiLFxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgdHJhbnNsYXRlKGwsIHdvcmQpIHtcclxuICAgIHJldHVybiB0aGlzLmxhbmdbbF1bd29yZF07XHJcbiAgfVxyXG59XHJcbiJdfQ==