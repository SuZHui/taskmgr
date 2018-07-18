import { trigger, state, style, transition, animate, group } from "@angular/animations";

export const slideToRight = trigger('routeAnim', [
    state('void', style({ position: 'absolute', width: '100%', left: '100%', 'z-index': 1000 })),
    state('*', style({ position: 'relative', width: '100%' })),
    transition(':enter', [
        style({ left: '0%', opacity: 0 }),
        group([
            animate('1000ms ease-in-out', style({ left: '0%', height: '82%' })),
            animate('1000ms ease-in', style({ opacity: 1 }))
        ])
        
    ]),
    transition(':leave', [
        style({ left: '0%', opacity: 0 }),
        group([
            animate('1000ms ease-in-out', style({ left: '100%' })),
            animate('1000ms ease-in', style({ opacity: 1 }))
        ])
    ])
])