import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PerfilCandidato } from '../Models/PerfilCandidato';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class CatalogoPerfilCandidatoService {

    private UrlIdiomas: string = '../api/idiomas';
    private UrlNiveles: string = '../api/niveles';
    private UrlEstatus: string = '../api/estadosEstudio';
    private UrlInstituciones: string = '../api/institucionEducativa';
    private UrlCarreras: string = '../api/carreras';
    private UrlMonths: string = '../api/months';
    private UrlYears: string = '../api/years';
    private UrlGradosestudio: string = '../api/gradosEstudio';
    private UrlDocumentosValidadores: string = '../api/documentosValidadores'; 
    private UrlUploadImage: string = '../api/ProfileImageUploader';
    private UrlAreaExperiencia: string = '../api/AreaExperiencia';
    private UrlAreaInteres: string = '../api/AreaInteres';
    private UrlAreas: string = '../api/areas';
    private UrlGirosEmpresas: string = '../api/GirosEmpresa';
    private UrlPerfilExperiencia: string = '../api/PerfilExperiencia';

    constructor(private _http: Http) {
    }
    GetIdiomas(query: string) {
        return this._http.get(this.UrlIdiomas + "/?query=" + query)
            .map(resp => resp.json())
            .toPromise()
            .catch(this.handleError);
    }

    GetNiveles() {
        return this._http.get(this.UrlNiveles)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetInstituciones(query: string) {
        return this._http.get(this.UrlInstituciones + "/?query=" + query)
            .map(resp => resp.json())
            .toPromise()
            .catch(this.handleError);
    }
    GetCarreras(query: string) {
        return this._http.get(this.UrlCarreras + "/?query=" + query)
            .map(resp => resp.json())
            .toPromise()
            .catch(this.handleError);
    }

    GetEstatus() {
        return this._http.get(this.UrlEstatus)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetMonths() {
        return this._http.get(this.UrlMonths)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetYears() {
        return this._http.get(this.UrlYears)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetGradoEstudio() {
        return this._http.get(this.UrlGradosestudio)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetDocumentosValidadores() {
        return this._http.get(this.UrlDocumentosValidadores)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetAreasExperiencia(query: string) {
        return this._http.get(this.UrlAreaExperiencia + "/?query=" + query)
            .map(resp => resp.json())
            .toPromise()
            .catch(this.handleError);
    }
    GetGradosExperiencia() {
        return this._http.get(this.UrlPerfilExperiencia)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetAreasInteres() {
        return this._http.get(this.UrlAreaInteres)
            .map(resp => resp.json())
            .catch(this.handleError);
    }
    GetAreas(query: string) {
        return this._http.get(this.UrlAreas + "/?query=" + query)
            .map(resp => resp.json())
            .toPromise()
            .catch(this.handleError);
    }
    GetGirosEmpresas() {
        return this._http.get(this.UrlGirosEmpresas)
            .map(resp => resp.json())
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

