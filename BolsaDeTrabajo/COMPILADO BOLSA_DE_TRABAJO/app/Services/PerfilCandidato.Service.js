"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
var PerfilCandidatoService = (function () {
    function PerfilCandidatoService(_http) {
        this._http = _http;
        this.UrlPerfilCandidato = '../api/PerfilCandidato';
        this.UrlAboutMe = '/api/aboutMe';
        this.UrlCertificaciones = '/api/certificacion';
        this.UrlConocimientos = '/api/conocimiento';
        this.UrlCursos = '/api/curso';
        this.UrlExperiencias = 'api/experiencia';
        this.UrlFormaciones = 'api/formacion';
        this.UrlIdiomas = 'api/perfilIdioma';
    }
    PerfilCandidatoService.prototype.GetPerfilCandidato = function (candidatoId) {
        var url = this.UrlPerfilCandidato + "/?candidatoId=" + candidatoId;
        return this._http.get(this.UrlPerfilCandidato + "/?candidatoId=" + candidatoId)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddPerfilCandidato = function (id, perfilCandidato) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlPerfilCandidato + '/?id=' + id, JSON.stringify(perfilCandidato), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    /**AboutMe*/
    PerfilCandidatoService.prototype.GetAboutMe = function (PerfilCandidatoId) {
        var url = this.UrlAboutMe + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddAboutMe = function (candidato) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlAboutMe, JSON.stringify(candidato), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.UpdateAboutMe = function (aboutMe) {
        var url = this.UrlAboutMe;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(aboutMe), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    /**Certificaciones*/
    PerfilCandidatoService.prototype.GetCertificaciones = function (PerfilCandidatoId) {
        var url = this.UrlCertificaciones + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddCertificacion = function (certificacion) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlCertificaciones, JSON.stringify(certificacion), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.UpdateCertificacion = function (certificacion) {
        var url = this.UrlCertificaciones;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(certificacion), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.DeleteCertificacion = function (idCertificacion) {
        var url = this.UrlCertificaciones + "/?idCertificacion=" + idCertificacion;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url);
    };
    /**Conocimientos*/
    PerfilCandidatoService.prototype.GetConocimientos = function (PerfilCandidatoId) {
        var url = this.UrlConocimientos + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddConocimiento = function (conocimiento) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlConocimientos, JSON.stringify(conocimiento), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.UpdateConocimiento = function (conocimiento) {
        var url = this.UrlConocimientos;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(conocimiento), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.DeleteConocimiento = function (idConocimiento) {
        var url = this.UrlConocimientos + "/?idConocimiento=" + idConocimiento;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url);
    };
    /**Cursos*/
    PerfilCandidatoService.prototype.GetCursos = function (PerfilCandidatoId) {
        var url = this.UrlCursos + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddCurso = function (curso) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlCursos, JSON.stringify(curso), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.UpdateCurso = function (curso) {
        var url = this.UrlCursos;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(curso), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.DeleteCurso = function (idCurso) {
        var url = this.UrlCursos + "/?idCurso=" + idCurso;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url);
    };
    /**Experiencias*/
    PerfilCandidatoService.prototype.GetExperiencias = function (perfilCandidatoId) {
        var url = this.UrlExperiencias + "/?perfilCandidatoId=" + perfilCandidatoId;
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddExperiencia = function (experiencia) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlExperiencias, JSON.stringify(experiencia), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.UpdateExperiencia = function (experiencia) {
        var url = this.UrlExperiencias;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(experiencia), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.DeleteExperiencia = function (idExperiencia) {
        console.log('Experiencias.value');
        console.log(idExperiencia);
        var url = this.UrlExperiencias + "/?idExperiencia=" + idExperiencia;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url, options);
    };
    /**Formaciones*/
    PerfilCandidatoService.prototype.GetFormaciones = function (perfilCandidatoId) {
        var url = this.UrlFormaciones + "/?perfilCandidatoId=" + perfilCandidatoId;
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddFormacion = function (formacion) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlFormaciones, JSON.stringify(formacion), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.UpdateFormacion = function (formacion) {
        var url = this.UrlFormaciones;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(formacion), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.DeleteFormacion = function (idFormacion) {
        var url = this.UrlFormaciones + "/?idFormacion=" + idFormacion;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url, options);
    };
    /**Idiomas*/
    PerfilCandidatoService.prototype.GetIdiomas = function (PerfilCandidatoId) {
        var url = this.UrlIdiomas + "/?PerfilCandidatoId=" + PerfilCandidatoId;
        return this._http.get(url)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.AddIdioma = function (idioma) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.UrlIdiomas, JSON.stringify(idioma), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.UpdateIdioma = function (idioma) {
        var url = this.UrlIdiomas;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(url, JSON.stringify(idioma), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    PerfilCandidatoService.prototype.DeleteIdioma = function (idIdioma) {
        var url = this.UrlIdiomas + "/?idIdioma=" + idIdioma;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(url, options);
    };
    PerfilCandidatoService.prototype.handleError = function (error) {
        console.log('sever error:', error); // debug
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    return PerfilCandidatoService;
}());
PerfilCandidatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PerfilCandidatoService);
exports.PerfilCandidatoService = PerfilCandidatoService;
//# sourceMappingURL=PerfilCandidato.Service.js.map