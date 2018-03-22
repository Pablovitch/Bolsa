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
var DatosCandidatoService = (function () {
    function DatosCandidatoService(_http) {
        this._http = _http;
        this._urlCandidatos = "api/datosContacto";
    }
    DatosCandidatoService.prototype.DatosContactoCandidato = function (candidato, userId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._urlCandidatos + "/?userId=" + userId, JSON.stringify(candidato), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleErrorObservable);
    };
    DatosCandidatoService.prototype.ExistCurp = function (curp) {
        return this._http.get(this._urlCandidatos + "/?curp=" + curp)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleErrorObservable);
    };
    DatosCandidatoService.prototype.handleErrorObservable = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return DatosCandidatoService;
}());
DatosCandidatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DatosCandidatoService);
exports.DatosCandidatoService = DatosCandidatoService;
//# sourceMappingURL=DatosDeCandidato.Service.js.map