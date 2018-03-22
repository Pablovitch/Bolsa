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
var router_1 = require("@angular/router");
var Candidatos_Service_1 = require("../../Services/Candidatos.Service");
var CandidatosTableComponent = (function () {
    function CandidatosTableComponent(_CandidatosService, _router) {
        this._CandidatosService = _CandidatosService;
        this._router = _router;
        this.ProfileName = '';
        this.Oculto = true;
        this.showMenu = true;
    }
    CandidatosTableComponent.prototype.ShowMenu = function () {
        this.showMenu = true;
    };
    CandidatosTableComponent.prototype.ngOnInit = function () {
        this.LoadCandidatos();
    };
    CandidatosTableComponent.prototype.LoadCandidatos = function () {
        var _this = this;
        this._CandidatosService.GetCandidatos()
            .subscribe(function (data) {
            _this.candidatos = data;
        }, function (Error) { return console.log(Error); });
    };
    CandidatosTableComponent.prototype.NewCandidato = function () {
        this._router.navigate(['FormulariosIniciales']);
    };
    CandidatosTableComponent.prototype.DeleteCandidato = function (candidato) {
        var _this = this;
        var error;
        if (confirm("Seguro que deseas eliminar " + candidato.nombre + "?")) {
            var index = this.candidatos.indexOf(candidato);
            // Here, with the splice method, we remove 1 object
            // at the given index.
            this.candidatos.splice(index, 1);
            this._CandidatosService.DeleteCandidato(candidato.id)
                .subscribe(null, function (err) {
                if (err != null) {
                    alert("Could not delete the user.");
                    _this.candidatos.splice(index, 0, candidato);
                }
                // Revert the view back to its original state
                // by putting the user object at the index
                // it used to be.
                //this.candidatos.splice(index, 0, candidato);
            });
        }
    };
    return CandidatosTableComponent;
}());
CandidatosTableComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/TablaCandidatos/CandidatosTable.html'
    }),
    __metadata("design:paramtypes", [Candidatos_Service_1.CandidatosService, router_1.Router])
], CandidatosTableComponent);
exports.CandidatosTableComponent = CandidatosTableComponent;
//# sourceMappingURL=CandidatosTable.component.js.map