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
var PerfilCandidato_Service_1 = require("../../Services/PerfilCandidato.Service");
var barra_component_1 = require("../GeneralComponents/barra.component");
var DatosGeneralesComponent = (function () {
    function DatosGeneralesComponent(_Router, _Route, _perfilCandidatoService) {
        var _this = this;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.Oculto = false;
        this.showMenu = true;
        var parameters = this._Route.params.subscribe(function (params) {
            _this.CandidatoId = params['candidatoId'];
        });
    }
    DatosGeneralesComponent.prototype.ngOnInit = function () {
        this._perfilCandidatoService.GetPerfilCandidato(this.CandidatoId)
            .subscribe(function (PerfilCandidatoId) {
            localStorage.setItem('PerfilCandidatoId', PerfilCandidatoId);
        });
    };
    DatosGeneralesComponent.prototype.ShowMenu = function () {
        this.showMenu = !this.showMenu;
    };
    DatosGeneralesComponent.prototype.OnLoadProfileName = function (event) {
        this.damsaBarra.PerfilImageOnChangue();
        this.ProfileName = event;
    };
    DatosGeneralesComponent.prototype.navigateprueba = function () {
        var candidatoId = this.CandidatoId;
        this._Router.navigate(['PerfilCandidato', candidatoId]);
    };
    return DatosGeneralesComponent;
}());
__decorate([
    core_1.ViewChild(barra_component_1.BarraComponent),
    __metadata("design:type", barra_component_1.BarraComponent)
], DatosGeneralesComponent.prototype, "damsaBarra", void 0);
DatosGeneralesComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/Components/DatosGenerales/DatosGenerales.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], DatosGeneralesComponent);
exports.DatosGeneralesComponent = DatosGeneralesComponent;
//# sourceMappingURL=DatosGenerales.component.js.map