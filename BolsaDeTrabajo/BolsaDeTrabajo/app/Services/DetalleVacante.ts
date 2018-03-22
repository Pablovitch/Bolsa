import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class DetalleVacanteService {
    private UrlDetalleVacate:string="/api/detalleVacante"
    constructor(private _http: Http) { }

    GetDetalleVacante(vacanteId: string): Observable<any> {
        return this._http.get(this.UrlDetalleVacate + "/?vacanteId=" + vacanteId)
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