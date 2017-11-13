import { Component } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';



@Component({
    selector: 'landing',
    template: `
        <section class="mat-typography">
        
            <mat-toolbar color="secondary">
                <span>List</span>
            </mat-toolbar>
            <button color="primary" mat-button (click)="test()">Test</button>
        </section>
    `
})
export class LandingComponent {

    test(): void {
        console.log('material btn pressed')
    }
}
