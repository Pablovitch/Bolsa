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
var DireccionService = (function () {
    function DireccionService(_http) {
        this._http = _http;
        this._urldireccion = "../api/direccion";
    }
    DireccionService.prototype.DireccionCandidato = function (direccion) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._urldireccion, JSON.stringify(direccion), options)
            .map(function (result) { return result.json(); })
            .catch(this.handleErrorObservable);
    };
    DireccionService.prototype.GetDireccion = function (CandidatoId) {
        return this._http.get(this._urldireccion + "/?CandidatoId=" + CandidatoId)
            .map(function (result) {
            return result.json();
        })
            .catch(this.handleErrorObservable);
    };
    DireccionService.prototype.EditDireccion = function (direccion) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._urldireccion, JSON.stringify(direccion), options);
    };
    DireccionService.prototype.handleErrorObservable = function (error) {
        return Observable_1.Observable.throw(error);
    };
    return DireccionService;
}());
DireccionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DireccionService);
exports.DireccionService = DireccionService;
//# sourceMappingURL=Direccion.Service.js.map