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
var CatalogoPerfilCandidatoService = (function () {
    function CatalogoPerfilCandidatoService(_http) {
        this._http = _http;
        this.UrlIdiomas = '../api/idiomas';
        this.UrlNiveles = '../api/niveles';
        this.UrlEstatus = '../api/estadosEstudio';
        this.UrlInstituciones = '../api/institucionEducativa';
        this.UrlCarreras = '../api/carreras';
        this.UrlMonths = '../api/months';
        this.UrlYears = '../api/years';
        this.UrlGradosestudio = '../api/gradosEstudio';
        this.UrlDocumentosValidadores = '../api/documentosValidadores';
        this.UrlUploadImage = '../api/ProfileImageUploader';
        this.UrlAreaExperiencia = '../api/AreaExperiencia';
        this.UrlAreaInteres = '../api/AreaInteres';
        this.UrlAreas = '../api/areas';
        this.UrlGirosEmpresas = '../api/GirosEmpresa';
        this.UrlPerfilExperiencia = '../api/PerfilExperiencia';
    }
    CatalogoPerfilCandidatoService.prototype.GetIdiomas = function (query) {
        return this._http.get(this.UrlIdiomas + "/?query=" + query)
            .map(function (resp) { return resp.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetNiveles = function () {
        return this._http.get(this.UrlNiveles)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetInstituciones = function (query) {
        return this._http.get(this.UrlInstituciones + "/?query=" + query)
            .map(function (resp) { return resp.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetCarreras = function (query) {
        return this._http.get(this.UrlCarreras + "/?query=" + query)
            .map(function (resp) { return resp.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetEstatus = function () {
        return this._http.get(this.UrlEstatus)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetMonths = function () {
        return this._http.get(this.UrlMonths)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetYears = function () {
        return this._http.get(this.UrlYears)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetGradoEstudio = function () {
        return this._http.get(this.UrlGradosestudio)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetDocumentosValidadores = function () {
        return this._http.get(this.UrlDocumentosValidadores)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetAreasExperiencia = function (query) {
        return this._http.get(this.UrlAreaExperiencia + "/?query=" + query)
            .map(function (resp) { return resp.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetGradosExperiencia = function () {
        return this._http.get(this.UrlPerfilExperiencia)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetAreasInteres = function () {
        return this._http.get(this.UrlAreaInteres)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetAreas = function (query) {
        return this._http.get(this.UrlAreas + "/?query=" + query)
            .map(function (resp) { return resp.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.GetGirosEmpresas = function () {
        return this._http.get(this.UrlGirosEmpresas)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CatalogoPerfilCandidatoService.prototype.handleError = function (error) {
        console.log('sever error:', error); // debug
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    return CatalogoPerfilCandidatoService;
}());
CatalogoPerfilCandidatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CatalogoPerfilCandidatoService);
exports.CatalogoPerfilCandidatoService = CatalogoPerfilCandidatoService;
//# sourceMappingURL=Catalogo.PerfilCandidato.service.js.map