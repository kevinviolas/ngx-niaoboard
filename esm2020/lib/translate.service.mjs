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
TranslateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TranslateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TranslateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TranslateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFzRDNCO1FBckRRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsY0FBYyxFQUFFLHFCQUFxQjtnQkFDckMsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsTUFBTSxFQUFFLHlDQUF5QztnQkFDakQsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixlQUFlLEVBQUUsbUJBQW1CO2dCQUNwQyxZQUFZLEVBQUUsY0FBYztnQkFDNUIsYUFBYSxFQUFFLGdCQUFnQjtnQkFDL0IsdUJBQXVCLEVBQUUsNEJBQTRCO2FBQ3hEO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixjQUFjLEVBQUUsaUJBQWlCO2dCQUNqQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxZQUFZLEVBQUUsWUFBWTtnQkFDMUIsTUFBTSxFQUFFLGlDQUFpQztnQkFDekMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsYUFBYSxFQUFFLGVBQWU7Z0JBQzlCLGVBQWUsRUFBRSxpQkFBaUI7Z0JBQ2xDLFlBQVksRUFBRSxZQUFZO2dCQUMxQixhQUFhLEVBQUUsYUFBYTtnQkFDNUIsdUJBQXVCLEVBQUUsdUJBQXVCO2FBQ25EO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OzZHQTFEVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQixjQUZmLE1BQU07MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbGFuZyA9IHtcclxuICAgICAgJ2ZyJzoge1xyXG4gICAgICAgICAgJ0dPJzogYEMnZXN0IHBhcnRpYCxcclxuICAgICAgICAgICdTRU5EX01FU1NBR0UnOiAnRW52b3llciBtb24gbWVzc2FnZScsXHJcbiAgICAgICAgICAnU0VMRUNUJzogJ1ZvdXMgZGV2ZXogc8OpbGVjdGlvbm5lciB1bmUgcsOpcG9uc2UnLFxyXG4gICAgICAgICAgJ1NDUkVFTlNIT1QnOiBcIkNhcHR1cmUgZCfDqWNyYW5cIixcclxuICAgICAgICAgICdTRU5EJzogJ1ZhbGlkZXIgbGUgbm9tYnJlIGRlIHBlcnNvbm5lcyB0b3VjaMOpZXMnLFxyXG4gICAgICAgICAgJ01PTkRBWSc6ICdMdW5kaScsXHJcbiAgICAgICAgICBcIlRVRVNEQVlcIjogJ01hcmRpJyxcclxuICAgICAgICAgIFwiV0VETkVTREFZXCI6ICdNZXJjcmVkaScsXHJcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdKZXVkaScsXHJcbiAgICAgICAgICBcIkZSSURBWVwiOiAnVmVuZHJlZGknLFxyXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2FtZWRpJyxcclxuICAgICAgICAgIFwiU1VOREFZXCI6ICdEaW1hbmNoZScsXHJcbiAgICAgICAgICBcIk9USEVSXCI6IFwiQXV0cmVcIixcclxuICAgICAgICAgIFwiRlJFRV9GSUVMRFwiOiAnQ2hhbXAgbGlicmUnLFxyXG4gICAgICAgICAgXCJWQUxJREFURVwiOiAnVmFsaWRlcicsXHJcbiAgICAgICAgICBcIlNLSVBcIjogJ1Bhc3NlcicsXHJcbiAgICAgICAgICBcIk1PUk5JTkdcIjogXCJNYXRpblwiLFxyXG4gICAgICAgICAgXCJBRlRFUk5PT05cIjogXCJBcHLDqHMtbWlkaVwiLFxyXG4gICAgICAgICAgXCJNT1JOSU5HX0FMTFwiOiAnTWF0aW4gKHRvdXMpJyxcclxuICAgICAgICAgIFwiQUZURVJOT09OX0FMTFwiOiAnQXByw6hzLW1pZGkgKHRvdXMpJyxcclxuICAgICAgICAgIFwiQVRUQUNITUVOVFwiOiAncGnDqGNlIGpvaW50ZScsXHJcbiAgICAgICAgICBcIkFUVEFDSE1FTlRTXCI6ICdwacOoY2VzIGpvaW50ZXMnLFxyXG4gICAgICAgICAgXCJWQUxJREFURV9BVkFJTEFCSUxJVFlcIjogXCJWYWxpZGVyIG1lcyBkaXNwb25pYmlsaXTDqXNcIixcclxuICAgICAgfSxcclxuICAgICAgJ2VuJzoge1xyXG4gICAgICAgICAgJ0dPJzogYExldCdzIGdvYCxcclxuICAgICAgICAgICdTRU5EX01FU1NBR0UnOiAnU2VuZCBteSBtZXNzYWdlJyxcclxuICAgICAgICAgICdTRUxFQ1QnOiAnWW91IG11c3Qgc2VsZWN0IGFuIGFuc3dlcicsXHJcbiAgICAgICAgICAnU0NSRUVOU0hPVCc6ICdTY3JlZW5zaG90JyxcclxuICAgICAgICAgICdTRU5EJzogJ1ZhbGlkYXRlIGltcGFjdGVkIHBlb3BsZSBudW1iZXInLFxyXG4gICAgICAgICAgXCJNT05EQVlcIjogJ01vbmRheScsXHJcbiAgICAgICAgICBcIlRVRVNEQVlcIjogJ1R1ZXNkYXknLFxyXG4gICAgICAgICAgXCJXRURORVNEQVlcIjogJ1dlZG5lc2RheScsXHJcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdUaHVyc2RheScsXHJcbiAgICAgICAgICBcIkZSSURBWVwiOiAnRnJpZGF5JyxcclxuICAgICAgICAgIFwiU0FUVVJEQVlcIjogJ1NhdHVyZGF5JyxcclxuICAgICAgICAgIFwiU1VOREFZXCI6ICdTdW5kYXknLFxyXG4gICAgICAgICAgXCJPVEhFUlwiOiAnT3RoZXInLFxyXG4gICAgICAgICAgXCJGUkVFX0ZJRUxEXCI6ICdGcmVlIGZpZWxkJyxcclxuICAgICAgICAgIFwiVkFMSURBVEVcIjogJ1ZhbGlkYXRlJyxcclxuICAgICAgICAgIFwiU0tJUFwiOiAnU2tpcCcsXHJcbiAgICAgICAgICBcIk1PUk5JTkdcIjogXCJNb3JuaW5nXCIsXHJcbiAgICAgICAgICBcIkFGVEVSTk9PTlwiOiBcIkFmdGVybm9vblwiLFxyXG4gICAgICAgICAgXCJNT1JOSU5HX0FMTFwiOiAnTW9ybmluZyAoYWxsKScsXHJcbiAgICAgICAgICBcIkFGVEVSTk9PTl9BTExcIjogJ0FmdGVybm9vbiAoYWxsKScsXHJcbiAgICAgICAgICBcIkFUVEFDSE1FTlRcIjogJ2F0dGFjaG1lbnQnLFxyXG4gICAgICAgICAgXCJBVFRBQ0hNRU5UU1wiOiAnYXR0YWNobWVudHMnLFxyXG4gICAgICAgICAgXCJWQUxJREFURV9BVkFJTEFCSUxJVFlcIjogXCJWYWxpZGF0ZSBhdmFpbGFiaWxpdHlcIixcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xyXG4gIH1cclxufVxyXG4iXX0=