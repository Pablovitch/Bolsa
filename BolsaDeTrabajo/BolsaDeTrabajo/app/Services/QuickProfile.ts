import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { QuickProfile } from '../Models/QuickProfile';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';



@Injectable()
export class QuickProfileService
{
    private UrlQuickProfile: string = '/api/QuickProfile';

    constructor(
        private _http: Http
    ) { }

    GetQuickProfile(candidatoId: string): Observable<QuickProfile>
    {
        return this._http.get(this.UrlQuickProfile + "/?candidatoId=" + candidatoId)
            .map(result => result.json())
            .catch(this.handleError);
    }
    private handleError(error: any) {
        console.log('sever error:', error);  // debug
        if (error instanceof Response) {
            return Observable.throw(error.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }
}