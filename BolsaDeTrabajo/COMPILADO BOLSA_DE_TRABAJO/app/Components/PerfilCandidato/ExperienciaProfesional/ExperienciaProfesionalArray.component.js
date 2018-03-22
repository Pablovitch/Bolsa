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
var PerfilCandidato_Service_1 = require("../../../Services/PerfilCandidato.Service");
var alta_candidato_validators_1 = require("../../alta.candidato.validators");
var ExperienciasProfesionalesArray = (function () {
    function ExperienciasProfesionalesArray(_fb, _Router, _Route, _perfilCandidatoService) {
        this._fb = _fb;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilCandidatoService = _perfilCandidatoService;
    }
    ExperienciasProfesionalesArray.prototype.ngOnInit = function () {
        var _this = this;
        this.ExperienciasArray = this._fb.group({
            experiencias: this._fb.array([]),
        });
        this._perfilCandidatoService.GetExperiencias(this.PerfilCandidatoId)
            .subscribe(function (data) {
            _this.experiencias = data;
            if (_this.experiencias == null) {
                return;
            }
            else {
                _this.PopulateForm(_this.experiencias);
            }
        });
    };
    ExperienciasProfesionalesArray.prototype.initExperiencia = function () {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            empresa: ['', forms_1.Validators.required],
            giroEmpresaId: ['Giro Empresa', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            cargoAsignado: ['', forms_1.Validators.required],
            area: [],
            areaId: ['', forms_1.Validators.required],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino'],
            salario: ['', forms_1.Validators.required],
            descripcion: [''],
            trabajoActual: []
        });
    };
    ExperienciasProfesionalesArray.prototype.addExperiencia = function () {
        var control = this.ExperienciasArray.controls['experiencias'];
        var addrCtrl = this.initExperiencia();
        control.push(addrCtrl);
    };
    ExperienciasProfesionalesArray.prototype.removeExperiencia = function (i) {
        var control = this.ExperienciasArray.controls['experiencias'];
        control.removeAt(i);
    };
    ExperienciasProfesionalesArray.prototype.PopulateForm = function (experiencias) {
        for (var experiencia in experiencias) {
            this.addExperiencia();
        }
        this.ExperienciasArray.patchValue({
            experiencias: this.experiencias,
        });
    };
    return ExperienciasProfesionalesArray;
}());
__decorate([
    core_1.Input('PerfilCandidatoId'),
    __metadata("design:type", String)
], ExperienciasProfesionalesArray.prototype, "PerfilCandidatoId", void 0);
ExperienciasProfesionalesArray = __decorate([
    core_1.Component({
        selector: 'ExperienciasArray',
        templateUrl: 'app/Components/PerfilCandidato/ExperienciaProfesional/ExperienciaProfesionalArray.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], ExperienciasProfesionalesArray);
exports.ExperienciasProfesionalesArray = ExperienciasProfesionalesArray;
//# sourceMappingURL=ExperienciaProfesionalArray.component.js.map