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
import { ApiConection } from './ApiConections';

@Injectable()
export class BusquedaService {

    private urlbusqueda = ApiConection.ServiceUrl + ApiConection.busqueda;

    constructor(private http: Http) { console.log("Servicio Busqueda"); }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private extractData(res: Response) {
        let body = res.json();

        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error ocurred', error);
        return Promise.reject(error.message || 'Server error');
    }

    getfiltro(filtro: String){ // Mandar al controlador el filtro. ***
      return this.http.get(this.urlbusqueda+'?filter='+filtro)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
    }

    getvacantesfilter(filtro: String){   // Obtener el detalle de una vacante seleccionada. ***
      return this.http.get(this.urlbusqueda+'?filter='+filtro)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
    }
}
