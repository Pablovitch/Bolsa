import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import { FiltroPostulaciones } from '../Models/Postulaciones';

@Injectable()
export class PostulacionesService {
    private _urlPostulaciones: string = '/api/Postulaciones';
    private _urlFiltro: string = '/api/filtroPostulaciones';

    constructor(private _http: Http) { }

    GetPostulaciones(candidatoId: string): Observable<any> {
        return this._http.get(this._urlPostulaciones + '/?candidatoId=' + candidatoId)
            .map(result => result.json())
            .catch(this.handleError);
    }

    DeletePostulacion(postulacionId:string)
    {
        return this._http
            .delete(this._urlPostulaciones + '/?postulacionId=' + postulacionId)

    }

    FiltroPostulaciones(filtrox: any): Observable<any>
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._urlFiltro, JSON.stringify(filtrox), options)
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
