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
var forms_1 = require("@angular/forms");
var PerfilCandidato_Service_1 = require("../../Services/PerfilCandidato.Service");
var CandidatoPerfil = (function () {
    function CandidatoPerfil(_fb, _Router, _Route, _perfilCandidatoService) {
        this._fb = _fb;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.index = 1;
        this.Oculto = false;
        this.showMenu = true;
        this.PerfilCandidato = this._fb.group({});
    }
    CandidatoPerfil.prototype.ngOnInit = function () {
        var _this = this;
        var parametros = this._Route.params.subscribe(function (params) {
            _this.CandidatoId = params["candidatoId"];
            _this.PerfilCandidatoId = localStorage.getItem('PerfilCandidatoId');
        });
    };
    CandidatoPerfil.prototype.ShowMenu = function () {
        this.showMenu = !this.showMenu;
    };
    CandidatoPerfil.prototype.OnLoadProfileName = function (event) {
        this.ProfileName = event;
    };
    return CandidatoPerfil;
}());
CandidatoPerfil = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/PerfilCandidato/Perfil-Candidato.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], CandidatoPerfil);
exports.CandidatoPerfil = CandidatoPerfil;
//# sourceMappingURL=perfil-candidato.component.js.map