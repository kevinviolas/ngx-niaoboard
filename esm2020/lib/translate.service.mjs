import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'GO': `C'est parti`,
                'SEND': 'Envoyer',
                'SELECT': 'Vous devez sélectionner une réponse',
            },
            'en': {
                'GO': `Let's go`,
                'SEND': 'Send',
                'SELECT': 'You must select an answer',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFjM0I7UUFiUSxTQUFJLEdBQUc7WUFDWCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixRQUFRLEVBQUUscUNBQXFDO2FBQ2xEO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxRQUFRLEVBQUUsMkJBQTJCO2FBQ3hDO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OzZHQWxCVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQixjQUZmLE1BQU07MkZBRVAsZ0JBQWdCO2tCQUg1QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnR08nOiBgQydlc3QgcGFydGlgLFxuICAgICAgICAgICdTRU5EJzogJ0Vudm95ZXInLFxuICAgICAgICAgICdTRUxFQ1QnOiAnVm91cyBkZXZleiBzw6lsZWN0aW9ubmVyIHVuZSByw6lwb25zZScsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdHTyc6IGBMZXQncyBnb2AsXG4gICAgICAgICAgJ1NFTkQnOiAnU2VuZCcsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdZb3UgbXVzdCBzZWxlY3QgYW4gYW5zd2VyJyxcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19