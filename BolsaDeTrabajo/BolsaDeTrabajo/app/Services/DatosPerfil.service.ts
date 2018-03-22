import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICandidato } from '../Models/ICandidato';
import { Candidato } from '../Models/Candidato';

@Injectable()
export class DatosPerfilService {
    private _urlCandidatos = "../api/aboutMe";

    constructor(private _http: Http)
    { }

    DatosBasicosPerfil(candidato: any): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._urlCandidatos, JSON.stringify(candidato), options)
            .map(result => result.json())
            .catch(this.handleErrorObservable);
    }


    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error);
    }
}