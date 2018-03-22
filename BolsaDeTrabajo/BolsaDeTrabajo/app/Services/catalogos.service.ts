import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';

import { IEstadoCivil } from '../Models/IEstadoCivil';
import { IGenero } from '../Models/IGenero';
import { IPais } from '../Models/IPais';
import { IEstado } from '../Models/IEstado';
import { IMunicipio } from '../Models/IMunicipio';
import { ITipoLicencia } from '../Models/ITipoLicencia';
import { ITipoDiscapacidad } from '../Models/ITipoDiscapacidad';

@Injectable()
export class CatalogosService {
    constructor(private _http: Http) {

    }

    getEstadosCiviles(url: string) {
        return this._http.get(url)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError)
    }

    getTiposTelefonos(url: string) {
        return this._http.get(url)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError)
    }

    getSexos(url: string) {
        return this._http.get(url)
            .map(res => res.json())
            .catch(this.handleError)
    }

   getPaises(url: string, query: string) {
        return this._http.get(url + '/?query=' + query)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError)

    }

    getEstados(url: string, query: string) {
        return this._http.get(url + '/?query=' + query)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError)
    }

   

    getMunicipios(url: string, idEstado:number, query:string) {
        return this._http.get(url + '/?id=' + idEstado + '&query=' + query)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError)
    }

    getColonia(url: string, CP: string, query: string) {
        return this._http.get(url + '/?cp=' + CP + '&query=' + query)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError)
    }

    getTiposLicencia(url: string): Observable<ITipoLicencia[]> {
        return this._http.get(url )
            .map(res => res.json()) 
            .catch(this.handleError)
    }

    getDiscapacidades(url: string): Observable<ITipoDiscapacidad[]> {
        return this._http.get(url)
            .map(res => res.json())
            .catch(this.handleError)

    } 
    getColonias(url: string, CP: string ) {
        return this._http.get(url + '/?cp=' + CP)
            .map(res => res.json())
            .toPromise()
            .catch(this.handleError)
    }

    IsPalabraInconveniente(url: string, palabra: string)
    {
        return this._http.get(url + '/?cp=' + palabra)
            .map(res => res.json())
            .catch(this.handleError)
    }

    TipoDeRedSocial(): Observable<any>
    {
        let url = 'api/tipoRedSocial'
        return this._http.get(url)
            .map(res =>  res.json())
            .catch(this.handleError)
    }
    AreasInteres(): Observable<any>
    {
        let url = 'api/areaInteres'
        return this._http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}