import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ICandidato } from '../Models/ICandidato';
import { Candidato, InformacionGeneral, DatosPersonales, Identificaciones, RedSocial } from '../Models/Candidato';
import { DataValidation } from '../Models/ValidationCurpModel';
@Injectable()
export class DatosGeneralesService {
    private _urlInformacionGeneral = "/api/InformacionGeneral";
    private _urlDatosPersonales = "/api/DatosPersonales";
    private _urlIdentificaciones = "/api/Identificaciones"
    private _urlDataValidation = "/api/DataValidationIdentificaciones";
    private _urlRedesSociales = "/api/RedesSociales";

    constructor(private _http: Http)
    { }
     /**
    Información General
     */

    GetInformacionGeneral(CandidatoId: string): Observable<InformacionGeneral> {
        return this._http.get(this._urlInformacionGeneral + "/?CandidatoId=" + CandidatoId)
            .map(result => {
                return result.json();
            })
            .catch(this.handleErrorObservable);
    }

    EditInformacionGeneral(candidato: Candidato, candidatoId: string): Observable<InformacionGeneral>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._urlInformacionGeneral + "/?CandidatoId=" + candidatoId, JSON.stringify(candidato), options)
            .map(GralInfo => { return GralInfo.json() })
            .catch(this.handleErrorObservable);
    }

    //DeleteInformacionGeneral(candidatoId: string) {
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({ headers: headers });
    //    return this._http.delete(this._urlInformacionGeneral + "/?CandidatoId=" + candidatoId);
    //}

    /**
    Datos personales
     */
    GetDatosPersonales(CandidatoId: string): Observable<DatosPersonales> {
        return this._http.get(this._urlDatosPersonales + "/?CandidatoId=" + CandidatoId)
            .map(result => {
                return result.json();
            })
            .catch(this.handleErrorObservable);
    }

    EditDatosPersonales(candidato: Candidato, candidatoId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._urlDatosPersonales + "/?CandidatoId=" + candidatoId, JSON.stringify(candidato), options);
    }

    DeleteDatosPersonales(candidatoId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this._urlDatosPersonales + "/?CandidatoId=" + candidatoId);
    }

     /**
        Indentificaciones
     */
    GetDataValidation(CandidatoId: string): Observable<DataValidation> {
        return this._http.get(this._urlDataValidation + "/?CandidatoId=" + CandidatoId)
            .map(result => {
                return result.json();
            })
            .catch(this.handleErrorObservable);
    }

    GetIdentificaciones(CandidatoId: string): Observable<Identificaciones> {
        return this._http.get(this._urlIdentificaciones + "/?CandidatoId=" + CandidatoId)
            .map(result => {
                return result.json();
            })
            .catch(this.handleErrorObservable);
    }

    EditIdentificaciones(identificaciones: Identificaciones, candidatoId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._urlIdentificaciones + "/?CandidatoId=" + candidatoId, JSON.stringify(identificaciones), options);
    }

    DeleteIdentificaciones(candidatoId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this._urlIdentificaciones + "/?CandidatoId=" + candidatoId);
    }
    /**
     * 
     * Redes Sociales
     */

    GetRedesSociales(CandidatoId: string): Observable<RedSocial[]> {
        return this._http.get(this._urlRedesSociales + "/?CandidatoId=" + CandidatoId)
            .map(result => {
                return result.json();
            })
            .catch(this.handleErrorObservable);
    }

    AddRedesSociales(redesSociales: RedSocial[], candidatoId: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._urlRedesSociales + "/?CandidatoId=" + candidatoId, JSON.stringify(redesSociales), options);
    }

 
    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error);
    } 
}