import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICandidato } from '../Models/ICandidato';
import { Candidato } from '../Models/Candidato';

@Injectable()
export class DatosCandidatoService {
    private _urlCandidatos = "api/datosContacto";

    constructor(private _http: Http)
    { }

    DatosContactoCandidato(candidato: any, userId: string): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._urlCandidatos + "/?userId=" + userId, JSON.stringify(candidato), options)
            .map(result => result.json())
            .catch(this.handleErrorObservable);
    }

    ExistCurp(curp: string) {
        return this._http.get(this._urlCandidatos + "/?curp=" + curp)
            .map(resp => resp.json())
            .catch(this.handleErrorObservable);
    }
   
    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error);
    }
}