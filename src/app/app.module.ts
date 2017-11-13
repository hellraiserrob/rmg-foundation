import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';


import { AppComponent } from './app.component';

import { FeaturesComponent } from './features/features.component';
import { LandingComponent } from './landing/landing.component';
import { NoMatch } from './no-match/no-match.component';

import { FeatureService } from './features/feature.service'


const appRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'features', component: FeaturesComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', component: NoMatch },
];

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        FeaturesComponent,
        NoMatch,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [FeatureService],
    bootstrap: [AppComponent]
})
export class AppModule { }
