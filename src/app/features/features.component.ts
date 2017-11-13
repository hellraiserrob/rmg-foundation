import { Component, OnInit } from '@angular/core';

import { Feature } from './feature'
import { FeatureService } from './feature.service'

@Component({
    selector: 'features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    title: string = 'Features';

    features: Feature[]


    // features: Feature[] = [
    //     new Feature('One', false),
    //     new Feature('Two', true)
    // ];

    constructor(private featureService: FeatureService) {

    }

    ngOnInit(): void {
        // this.test('Rob')

        this.getFeatures()
    }

    getFeatures(): void {

        this.featureService.getFeatures()
            .subscribe(features => {
                this.features = features['data']
            }, err => {
                console.log('there was an error');
            })

    }

    // private test(name: string): void {
    //     console.log(`hello ${name}`)
    // }

}
