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
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
var ApiConections_1 = require("./ApiConections");
var VacantesService = (function () {
    function VacantesService(http) {
        this.http = http;
        this.urlBase = ApiConections_1.ApiConection.vacantes;
        this.urlvacantedtl = ApiConections_1.ApiConection.vacantesdtl;
        this.urlpostulacion = ApiConections_1.ApiConection.ServiceUrl;
        this.urlfiltros = ApiConections_1.ApiConection.filtrovacantes;
    }
    VacantesService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    VacantesService.prototype.getvacantes = function () {
        return this.http.get(this.urlBase)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    VacantesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    VacantesService.prototype.handleError = function (error) {
        console.log('sever error:', error); // Debug
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    VacantesService.prototype.getvacantesdtl = function (idrequi) {
        return this.http.get(this.urlBase + '?id=' + idrequi)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    VacantesService.prototype.postulacion = function (postulacion) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8', 'Data-Type': 'json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.urlBase, JSON.stringify(postulacion), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    VacantesService.prototype.filtrovacantes = function (filtrox) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.urlfiltros, JSON.stringify(filtrox), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    return VacantesService;
}());
VacantesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], VacantesService);
exports.VacantesService = VacantesService;
//# sourceMappingURL=vacantes.service.js.map