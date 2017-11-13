import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx'
import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

import { Feature } from './feature';

@Injectable()
export class FeatureService {

    //  constructor(private messageService: MessageService) { }
    constructor(private http: HttpClient) { }

    getFeatures(): Observable<Feature[]> {

        return this.http.get<Feature[]>('/assets/test.json')
        
    }
}