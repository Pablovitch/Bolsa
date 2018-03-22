import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuarioService {
    private urlUsuario = 'api/usuario';
    constructor(private _http: Http) { }

    GetUsuario(id: string): Observable<Usuario>
    {
        return this._http.get(this.urlUsuario + "/?usuarioId=" + id)
            .map(result => result.json())
            .catch(this.handleErrorObservable)
    }
    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error);
    }
}

export class Usuario {
    id: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber: string; 
    phoneNumberConfirmed: boolean;
     
}