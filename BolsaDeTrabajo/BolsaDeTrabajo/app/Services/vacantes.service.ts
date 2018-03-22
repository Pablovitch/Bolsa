import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import { ApiConection } from './ApiConections';



@Injectable()
export class VacantesService {

    private urlBase = ApiConection.vacantes;
    private urlvacantedtl = ApiConection.vacantesdtl;
    private urlpostulacion = ApiConection.ServiceUrl;
    private urlfiltros = ApiConection.filtrovacantes;

    resultado: string[];

    constructor(private http: Http) { }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    getvacantes(): Observable<any> { // Obtener todas las vacantes.
        return this.http.get(this.urlBase)
            .map(result => result.json())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();

        return body || {};
    }

    private handleError(error: any) {
        console.log('sever error:', error);  // Debug
        if (error instanceof Response) {
            return Observable.throw(error.json().error || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }

    getvacantesdtl(idrequi: String){   // Obtener el detalle de una vacante seleccionada. ***
        return this.http.get(this.urlBase + '?id=' + idrequi)
            .map(result => result.json())
            .catch(this.handleError);
    }

    postulacion(postulacion: any): Observable<any>
    {   // Mandar Id para postularse a la vacante. ***
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', 'Data-Type': 'json'  });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.urlBase, JSON.stringify(postulacion), options)
            .map(result => result.json())
            .catch(this.handleError);
    }

    filtrovacantes(filtrox: any): Observable<any>
    {
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(this.urlfiltros, JSON.stringify(filtrox), options)
                .map(result => result.json())
                .catch(this.handleError);
    }
}
