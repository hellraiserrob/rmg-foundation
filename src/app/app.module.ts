import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatInputModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatIconModule, MatListModule, MatTooltipModule, MatDialogModule, MatMenuModule
} from '@angular/material';


import { AppComponent } from './app.component';

import { FeaturesComponent } from './features/features.component';
import { LandingComponent } from './landing/landing.component';
import { MapsComponent } from './maps/maps.component';
import { NoMatch } from './no-match/no-match.component';

import { FeatureService } from './features/feature.service'
import { DialogOverviewExampleDialog } from './dialog/dialog.component';


const appRoutes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'maps', component: MapsComponent },
    { path: '', redirectTo: '/maps', pathMatch: 'full' },
    { path: '**', component: NoMatch },
];

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        FeaturesComponent,
        MapsComponent,
        NoMatch,
        DialogOverviewExampleDialog
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatTooltipModule,
        MatDialogModule,
        MatMenuModule
    ],
    providers: [FeatureService],
    bootstrap: [AppComponent, DialogOverviewExampleDialog]
})
export class AppModule { }
