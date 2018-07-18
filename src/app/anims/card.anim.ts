import { trigger, state, style, transition, animate } from "@angular/animations";

export const cardAnim = trigger('card', [
    state('out', style({ transform: 'scale(1)', 'box-shadow': 'none' })),
    state('hover', style({ transform: 'scale(1)', 'box-shadow': '0px 0px 8px 8px #ccc' })),
    transition('out => hover', animate('180ms ease-in')),
    transition('hover => out', animate('180ms ease-out')),
])