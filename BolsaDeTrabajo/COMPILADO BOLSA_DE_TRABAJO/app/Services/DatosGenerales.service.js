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
var DatosGeneralesService = (function () {
    function DatosGeneralesService(_http) {
        this._http = _http;
        this._urlInformacionGeneral = "/api/InformacionGeneral";
        this._urlDatosPersonales = "/api/DatosPersonales";
        this._urlIdentificaciones = "/api/Identificaciones";
        this._urlDataValidation = "/api/DataValidationIdentificaciones";
    }
    /**
   Información General
    */
    DatosGeneralesService.prototype.GetInformacionGeneral = function (CandidatoId) {
        return this._http.get(this._urlInformacionGeneral + "/?CandidatoId=" + CandidatoId)
            .map(function (result) {
            return result.json();
        })
            .catch(this.handleErrorObservable);
    };
    DatosGeneralesService.prototype.EditInformacionGeneral = function (candidato, candidatoId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._urlInformacionGeneral + "/?CandidatoId=" + candidatoId, JSON.stringify(candidato), options)
            .map(function (GralInfo) { return GralInfo.json(); })
            .catch(this.handleErrorObservable);
    };
    DatosGeneralesService.prototype.DeleteInformacionGeneral = function (candidatoId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(this._urlInformacionGeneral + "/?CandidatoId=" + candidatoId);
    };
    /**
    Datos personales
     */
    DatosGeneralesService.prototype.GetDatosPersonales = function (CandidatoId) {
        return this._http.get(this._urlDatosPersonales + "/?CandidatoId=" + CandidatoId)
            .map(function (result) {
            return result.json();
        })
            .catch(this.handleErrorObservable);
    };
    DatosGeneralesService.prototype.EditDatosPersonales = function (candidato, candidatoId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._urlDatosPersonales + "/?CandidatoId=" + candidatoId, JSON.stringify(candidato), options);
    };
    DatosGeneralesService.prototype.DeleteDatosPersonales = function (candidatoId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(this._urlDatosPersonales + "/?CandidatoId=" + candidatoId);
    };
    /**
       Indentificaciones
    */
    DatosGeneralesService.prototype.GetDataValidation = function (CandidatoId) {
        return this._http.get(this._urlDataValidation + "/?CandidatoId=" + CandidatoId)
            .map(function (result) {
            return result.json();
        })
            .catch(this.handleErrorObservable);
    };
    DatosGeneralesService.prototype.GetIdentificaciones = function (CandidatoId) {
        return this._http.get(this._urlIdentificaciones + "/?CandidatoId=" + CandidatoId)
            .map(function (result) {
            return result.json();
        })
            .catch(this.handleErrorObservable);
    };
    DatosGeneralesService.prototype.EditIdentificaciones = function (identificaciones, candidatoId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._urlIdentificaciones + "/?CandidatoId=" + candidatoId, JSON.stringify(identificaciones), options);
    };
    DatosGeneralesService.prototype.DeleteIdentificaciones = function (candidatoId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete(this._urlIdentificaciones + "/?CandidatoId=" + candidatoId);
    };
    DatosGeneralesService.prototype.handleErrorObservable = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return DatosGeneralesService;
}());
DatosGeneralesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DatosGeneralesService);
exports.DatosGeneralesService = DatosGeneralesService;
//# sourceMappingURL=DatosGenerales.service.js.map