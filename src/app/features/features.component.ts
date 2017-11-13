import { Component, OnInit } from '@angular/core';

import { Feature } from './feature'

@Component({
    selector: 'features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    title: string = 'List';

    features: Feature[] = [
        new Feature('One', false),
        new Feature('Two', true)
    ];

    ngOnInit(): void {
        this.test('Rob')
    }

    private test(name: string): void {
        console.log(`hello ${name}`)
    }

}
