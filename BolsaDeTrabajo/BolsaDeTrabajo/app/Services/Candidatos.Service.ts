import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICandidato } from '../Models/ICandidato';
import {  Candidato } from '../Models/Candidato';

@Injectable()
export class CandidatosService{
    private _urlCandidatos = "api/candidatos";

    constructor(private _http: Http)
    { }

    GetCandidatos(): Observable<ICandidato[]>
    {
        return this._http.get(this._urlCandidatos)
            .map(result => result.json())
            .catch(this.handleErrorObservable);
    }

    AddCandidato(candidato: any): Observable<any>
    {
       
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._urlCandidatos, JSON.stringify(candidato), options)
            .map(result =>result.json())
            .catch(this.handleErrorObservable); 
    }

    GetCandidato(id: string): Observable<Candidato>
    {
        return this._http.get(this.getUrlCandidatos(id))
            .map(result => {     
                return result.json();
            })
            .catch(this.handleErrorObservable);
    }

    EditCandidato(candidato: Candidato, candidatoId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.getUrlCandidatos(candidatoId), JSON.stringify(candidato), options); 
    }

    DeleteCandidato(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this.getUrlCandidatos(id)); 
    }
    private handleErrorObservable(error: Response | any) { 
        return Observable.throw( error);
    }
    

    getUrlCandidatos(id: string) {
        return this._urlCandidatos + "/"+ id;
    }
}