import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/day.svg'))
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/month.svg'))
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/week.svg'))
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/project.svg'))
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('assets/projects.svg'))
    ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'))
}