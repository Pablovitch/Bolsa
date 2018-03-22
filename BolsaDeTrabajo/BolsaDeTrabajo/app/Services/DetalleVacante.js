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
require("rxjs/Rx");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DetalleVacanteService = (function () {
    function DetalleVacanteService(_http) {
        this._http = _http;
        this.UrlDetalleVacate = "/api/detalleVacante";
    }
    DetalleVacanteService.prototype.GetDetalleVacante = function (vacanteId) {
        return this._http.get(this.UrlDetalleVacate + "/?vacanteId=" + vacanteId)
            .map(function (result) { return result.json(); })
            .catch(this.handleError);
    };
    DetalleVacanteService.prototype.handleError = function (error) {
        console.log('sever error:', error); // debug
        if (error instanceof http_1.Response) {
            return Observable_1.Observable.throw(error.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'backend server error');
    };
    return DetalleVacanteService;
}());
DetalleVacanteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DetalleVacanteService);
exports.DetalleVacanteService = DetalleVacanteService;
//# sourceMappingURL=DetalleVacante.js.map