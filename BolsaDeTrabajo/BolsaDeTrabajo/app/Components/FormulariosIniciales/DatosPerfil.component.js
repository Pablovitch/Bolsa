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
var Catalogo_PerfilCandidato_service_1 = require("../../Services/Catalogo.PerfilCandidato.service");
var DatosPerfil_service_1 = require("../../Services/DatosPerfil.service");
var alta_candidato_validators_1 = require("../alta.candidato.validators");
var DatosPerfilComponent = (function () {
    function DatosPerfilComponent(fb, _PerfilCandidatoService, _DatosPerfilService, _Router, _Route, _Catalogos) {
        var _this = this;
        this.fb = fb;
        this._PerfilCandidatoService = _PerfilCandidatoService;
        this._DatosPerfilService = _DatosPerfilService;
        this._Router = _Router;
        this._Route = _Route;
        this._Catalogos = _Catalogos;
        this.CandidatoId = null;
        this.Oculto = true;
        this.showMenu = false;
        var parametros = this._Route.params.subscribe(function (params) {
            _this.candidatoId = params["personaId"];
        });
        this.datosBasicosPerfil = fb.group({
            candidatoId: [],
            areaExperiencia: [''],
            areaExperienciaId: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            salarioAceptable: ['', forms_1.Validators.required],
            salarioDeseado: ['', forms_1.Validators.required]
        });
        this.datosBasicosPerfil.get('candidatoId').setValue(this.candidatoId);
    }
    DatosPerfilComponent.prototype.ShowMenu = function () {
        this.showMenu = true;
    };
    DatosPerfilComponent.prototype.filterAreaExperiencia = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetAreasExperiencia(query)
            .then(function (areasExperiencia) {
            _this.filteredAreaExperiencia = areasExperiencia;
        });
    };
    DatosPerfilComponent.prototype.SetAreaExperienciaId = function (event) {
        this.datosBasicosPerfil.get('areaExperienciaId').setValue(event.id);
        this.datosBasicosPerfil.get('areaExperiencia').setValue(null);
    };
    DatosPerfilComponent.prototype.Save = function () {
        var _this = this;
        this._PerfilCandidatoService.AddAboutMe(this.datosBasicosPerfil.value)
            .subscribe(function (PerfilCandidatoId) {
            //this.formDatosDeContacto.markAsPristine();
            var CandidatoId = _this.candidatoId;
            _this._Router.navigate(['DatosGenerales', CandidatoId]);
        });
    };
    return DatosPerfilComponent;
}());
DatosPerfilComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/Components/FormulariosIniciales/DatosPerfil.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, PerfilCandidato_Service_1.PerfilCandidatoService,
        DatosPerfil_service_1.DatosPerfilService,
        router_1.Router, router_1.ActivatedRoute,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService])
], DatosPerfilComponent);
exports.DatosPerfilComponent = DatosPerfilComponent;
//# sourceMappingURL=DatosPerfil.component.js.map