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
var forms_1 = require("@angular/forms");
var Catalogo_PerfilCandidato_service_1 = require("../../../Services/Catalogo.PerfilCandidato.service");
var PerfilCandidato_Service_1 = require("../../../Services/PerfilCandidato.Service");
var alta_candidato_validators_1 = require("../../alta.candidato.validators");
var PerfilCandidato_validators_1 = require("../../Validators/PerfilCandidato.validators");
var AboutMeComponent = (function () {
    function AboutMeComponent(_fb, _Catalogos, _PerfilCandidatoService, _perfilCandidatoValidator) {
        var _this = this;
        this._fb = _fb;
        this._Catalogos = _Catalogos;
        this._PerfilCandidatoService = _PerfilCandidatoService;
        this._perfilCandidatoValidator = _perfilCandidatoValidator;
        this.Edit = false;
        this.sitioWebOk = true;
        this.aboutMe = this._fb.group({
            id: [],
            perfilCandidatoId: [],
            candidatoId: [],
            acercaDeMi: [''],
            puestoDeseado: [''],
            areaExperiencia: [''],
            areaExperienciaId: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            perfilExperienciaId: ['Grado de Experiencia', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            areaInteresId: ['Área de interes'],
            salarioAceptable: ['', forms_1.Validators.required],
            salarioDeseado: ['', forms_1.Validators.required],
            sitioWeb: [''],
        });
        this.aboutMe.get('candidatoId').setValue(this.CandidatoId);
        this.aboutMe.get('perfilCandidatoId').setValue(this.PerfilCandidatoId);
        this._Catalogos.GetGradosExperiencia()
            .subscribe(function (gradosExperiencia) {
            _this.gradosExperiencia = gradosExperiencia;
        });
        this._Catalogos.GetAreasInteres()
            .subscribe(function (areas) {
            _this.areasInteres = areas;
        });
    }
    ;
    AboutMeComponent.prototype.ngOnInit = function () {
        this.aboutMe.get('candidatoId').setValue(this.CandidatoId);
        this.aboutMe.get('perfilCandidatoId').setValue(this.PerfilCandidatoId);
        this.GetInitialData();
    };
    AboutMeComponent.prototype.GetInitialData = function () {
        var _this = this;
        this._PerfilCandidatoService.GetAboutMe(this.PerfilCandidatoId)
            .subscribe(function (aboutMe) {
            _this.aboutMe.patchValue({
                id: aboutMe.id,
                perfilCandidatoId: aboutMe.perfilCandidatoId,
                acercaDeMi: aboutMe.acercaDeMi,
                puestoDeseado: aboutMe.puestoDeseado,
                areaExperiencia: aboutMe.areaExperiencia,
                areaExperienciaId: aboutMe.areaExperienciaId,
                perfilExperienciaId: aboutMe.perfilExperienciaId,
                areaInteresId: aboutMe.areaExperienciaId,
                salarioAceptable: aboutMe.salarioAceptable,
                salarioDeseado: aboutMe.salarioDeseado,
                sitioWeb: aboutMe.sitioWeb
            });
            _this.AreaExperiencia = (aboutMe.areaExperiencia != null) ? aboutMe.areaExperiencia.areaExperiencia : '';
            _this.PerfilExperiencia = (aboutMe.perfilExperiencia != null) ? aboutMe.perfilExperiencia.perfilExperiencia : '';
            _this.AreaInteres = (aboutMe.areaInteres != null) ? aboutMe.areaInteres.areaInteres : '';
        });
    };
    AboutMeComponent.prototype.SitioWebExist = function () {
        var _this = this;
        this._PerfilCandidatoService.RemoteUrlExist(this.aboutMe.get('sitioWeb').value)
            .subscribe(function (response) {
            _this.sitioWebOk = response;
            if (!response) {
                _this.aboutMe.get('sitioWeb').setValue(null);
            }
        });
    };
    AboutMeComponent.prototype.filterAreaExperiencia = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetAreasExperiencia(query)
            .then(function (areasExperiencia) {
            _this.filteredAreaExperiencia = areasExperiencia;
        });
    };
    AboutMeComponent.prototype.SetAreaExperienciaId = function (event) {
        this.aboutMe.get('areaExperienciaId').setValue(event.id);
        this.AreaExperiencia = event.areaExperiencia;
    };
    AboutMeComponent.prototype.PerfilExperienciaOnChangue = function (value) {
        if (value == null)
            return;
        this.PerfilExperiencia = this.gradosExperiencia.find(function (x) { return x.id == value; }).perfilExperiencia;
    };
    AboutMeComponent.prototype.AreaInteresOnChangue = function (value) {
        if (value == null)
            return;
        this.AreaInteres = this.areasInteres.find(function (x) { return x.id == value; }).areaInteres;
    };
    AboutMeComponent.prototype.OnEdit = function () {
        this.Edit = true;
    };
    AboutMeComponent.prototype.DiscardEdit = function () {
        this.GetInitialData();
        this.Edit = false;
    };
    AboutMeComponent.prototype.Save = function () {
        var _this = this;
        this.Edit = false;
        this.auxAreadeExperiencia = this.aboutMe.get('areaExperiencia').value;
        this.aboutMe.get('areaExperiencia').setValue(null);
        this._PerfilCandidatoService.UpdateAboutMe(this.aboutMe.value)
            .subscribe(function (aboutMe) {
            _this.aboutMe.get('areaExperiencia').setValue(_this.auxAreadeExperiencia);
            _this.AreaExperiencia = _this.auxAreadeExperiencia.areaExperiencia;
        });
    };
    return AboutMeComponent;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], AboutMeComponent.prototype, "CandidatoId", void 0);
__decorate([
    core_1.Input('PerfilCandidatoId'),
    __metadata("design:type", String)
], AboutMeComponent.prototype, "PerfilCandidatoId", void 0);
AboutMeComponent = __decorate([
    core_1.Component({
        selector: 'aboutme',
        templateUrl: 'app/Components/PerfilCandidato/AboutMe/aboutme.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
        PerfilCandidato_Service_1.PerfilCandidatoService,
        PerfilCandidato_validators_1.PerfilCandidatoValidator])
], AboutMeComponent);
exports.AboutMeComponent = AboutMeComponent;
//# sourceMappingURL=aboutme.component.js.map