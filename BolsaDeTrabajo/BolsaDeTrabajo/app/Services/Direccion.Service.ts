import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICandidato } from '../Models/ICandidato';
import { Candidato, Direccion } from '../Models/Candidato';

@Injectable()
export class DireccionService {
    private _urldireccion = "../api/direccion";

    constructor(private _http: Http)
    { }

    DireccionCandidato(direccion: any): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._urldireccion, JSON.stringify(direccion), options)
            .map(result => result.json())
            .catch(this.handleErrorObservable);
    }

    GetDireccion(CandidatoId: string): Observable<Direccion> {
        return this._http.get(this._urldireccion + "/?CandidatoId=" + CandidatoId)
            .map(result => {
                return result.json();
            })
            .catch(this.handleErrorObservable);
    }


    EditDireccion(direccion: Direccion) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._urldireccion,  JSON.stringify(direccion), options);
    }


    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error);
    }
}