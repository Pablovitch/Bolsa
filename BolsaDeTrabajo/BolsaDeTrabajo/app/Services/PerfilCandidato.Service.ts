import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {
    PerfilCandidato,
    AboutMe,
    Certificacion,
    ConocimientoOHabilidad,
    Curso,
    ExperienciaProfesional,
    Formacion,
    PerfilIdioma
} from '../Models/PerfilCandidato';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class PerfilCandidatoService { 
    private UrlPerfilCandidato: string = '../api/PerfilCandidato';
    private UrlAboutMe: string = '/api/aboutMe';
    private UrlCertificaciones: string = '/api/certificacion';
    private UrlConocimientos: string = '/api/conocimiento';
    private UrlCursos: string = '/api/curso';
    private UrlExperiencias: string = 'api/experiencia';
    private UrlFormaciones: string = 'api/formacion';
    private UrlIdiomas: string = 'api/perfilIdioma';
    constructor(private _http: Http) {
    }
    GetPerfilCandidato(candidatoId: string)
    {
        let url = this.UrlPerfilCandidato + "/?candidatoId=" + candidatoId;
        return this._http.get(this.UrlPerfilCandidato + "/?candidatoId=" + candidatoId)
            .map(result => result.json())
            .catch(this.handleError);
    }
    AddPerfilCandidato(id:number, perfilCandidato: PerfilCandidato): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlPerfilCandidato+'/?id='+id, JSON.stringify(perfilCandidato), options)
            .map(result => result.json())
            .catch(this.handleError);
    }

    /**AboutMe*/

    GetAboutMe(PerfilCandidatoId: string): Observable<AboutMe> {
        let url = this.UrlAboutMe + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    }
    AddAboutMe(candidato: any): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlAboutMe, JSON.stringify(candidato), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    UpdateAboutMe(aboutMe: AboutMe): Observable<AboutMe> {
        let url = this.UrlAboutMe;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(aboutMe), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    RemoteUrlExist(sitioWeb: string)
    {
        let url = "/api/SitioWeb/?url=" + sitioWeb;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    }
    /**Certificaciones*/

    GetCertificaciones(PerfilCandidatoId: string): Observable<Certificacion[]> {
        let url = this.UrlCertificaciones + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    } 

    AddCertificacion(certificacion: Certificacion): Observable<Certificacion> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlCertificaciones, JSON.stringify(certificacion), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    UpdateCertificacion(certificacion: Certificacion): Observable<Certificacion>{
        let url = this.UrlCertificaciones;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(certificacion), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    DeleteCertificacion(idCertificacion: string) {
        let url = this.UrlCertificaciones + "/?idCertificacion=" + idCertificacion;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url);
    }

    /**Conocimientos*/
    GetConocimientos(PerfilCandidatoId: string): Observable<ConocimientoOHabilidad[]> {
        let url = this.UrlConocimientos + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    }
    AddConocimiento(conocimiento: ConocimientoOHabilidad): Observable<ConocimientoOHabilidad> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlConocimientos, JSON.stringify(conocimiento), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    UpdateConocimiento(conocimiento: ConocimientoOHabilidad) {
        let url = this.UrlConocimientos;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(conocimiento), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    DeleteConocimiento(idConocimiento: string) {
        let url = this.UrlConocimientos + "/?idConocimiento=" + idConocimiento;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url);
    }

    /**Cursos*/
    GetCursos(PerfilCandidatoId: string): Observable<Curso[]> {
        let url = this.UrlCursos + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    }
    AddCurso(curso: Curso): Observable<Curso> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlCursos, JSON.stringify(curso), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    UpdateCurso(curso: Curso): Observable<Curso> {
        let url = this.UrlCursos;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(curso), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    DeleteCurso(idCurso: string) {
        let url = this.UrlCursos + "/?idCurso=" + idCurso;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url);
    }

    /**Experiencias*/
    GetExperiencias(perfilCandidatoId: string): Observable<ExperienciaProfesional[]> {
        let url = this.UrlExperiencias + "/?perfilCandidatoId=" + perfilCandidatoId;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    }
    AddExperiencia(experiencia: ExperienciaProfesional): Observable<ExperienciaProfesional> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlExperiencias, JSON.stringify(experiencia), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    UpdateExperiencia(experiencia: ExperienciaProfesional) {
        let url = this.UrlExperiencias;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(experiencia), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    DeleteExperiencia(idExperiencia: string) { 
        let url = this.UrlExperiencias + "/?idExperiencia=" + idExperiencia;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url, options);
    }

    /**Formaciones*/
    GetFormaciones(perfilCandidatoId: string): Observable<Formacion[]> {
        let url = this.UrlFormaciones + "/?perfilCandidatoId=" + perfilCandidatoId;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    }
    AddFormacion(formacion: Formacion): Observable<Formacion> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlFormaciones, JSON.stringify(formacion), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    UpdateFormacion(formacion: Formacion): Observable<Formacion>  {
        let url = this.UrlFormaciones;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(formacion), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    DeleteFormacion(idFormacion: string) {
        let url = this.UrlFormaciones + "/?idFormacion=" + idFormacion;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url, options);
    }

    /**Idiomas*/
    GetIdiomas(PerfilCandidatoId: string): Observable<PerfilIdioma[]> {
        let url = this.UrlIdiomas + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(result => result.json())
            .catch(this.handleError);
    }
    AddIdioma(idioma: PerfilIdioma): Observable<PerfilIdioma> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.UrlIdiomas, JSON.stringify(idioma), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    UpdateIdioma(idioma: PerfilIdioma): Observable<PerfilIdioma> {
        let url = this.UrlIdiomas;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(idioma), options)
            .map(result => result.json())
            .catch(this.handleError);
    }
    DeleteIdioma(idIdioma: string) {
        let url = this.UrlIdiomas + "/?idIdioma=" + idIdioma;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url, options);
    }

    private handleError(error: any) {
        //console.log('sever error:', error);  // debug
        if (error instanceof Response) {
            return Observable.throw(error.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }
}

