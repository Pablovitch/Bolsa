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
var FormacionesArray = (function () {
    function FormacionesArray(_fb, _Router, _Route, _perfilCandidatoService) {
        this._fb = _fb;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilCandidatoService = _perfilCandidatoService;
    }
    ;
    FormacionesArray.prototype.ngOnInit = function () {
        var _this = this;
        this.FormacionesArray = this._fb.group({
            Formaciones: this._fb.array([]),
        });
        this._perfilCandidatoService.GetFormaciones(this.PerfilCandidatoId)
            .subscribe(function (data) {
            _this.formaciones = data;
            if (_this.formaciones == null) {
                _this.addFormacion();
                return;
            }
            else {
                _this.PopulateForm(_this.formaciones);
            }
        });
    };
    FormacionesArray.prototype.initFormacion = function () {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            institucionEducativa: [],
            institucionEducativaId: ['', forms_1.Validators.required],
            gradoEstudioId: ['Nivel de Estudios', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            estadoEstudioId: ['Estatus', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            documentoValidadorId: ['Documento Validador'],
            carrera: [],
            carreraId: [],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino']
        });
    };
    FormacionesArray.prototype.addFormacion = function () {
        var control = this.FormacionesArray.controls['Formaciones'];
        var addrCtrl = this.initFormacion();
        control.push(addrCtrl);
    };
    FormacionesArray.prototype.removeFormacion = function (i) {
        var control = this.FormacionesArray.controls['Formaciones'];
        control.removeAt(i);
    };
    FormacionesArray.prototype.PopulateForm = function (formaciones) {
        for (var formaion in formaciones) {
            this.addFormacion();
        }
        this.FormacionesArray.patchValue({
            Formaciones: this.formaciones,
        });
    };
    return FormacionesArray;
}());
__decorate([
    core_1.Input('PerfilCandidatoId'),
    __metadata("design:type", String)
], FormacionesArray.prototype, "PerfilCandidatoId", void 0);
FormacionesArray = __decorate([
    core_1.Component({
        selector: 'FormacionesArray',
        templateUrl: 'app/Components/PerfilCandidato/Formacion/FormacionArray.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], FormacionesArray);
exports.FormacionesArray = FormacionesArray;
//# sourceMappingURL=FormacionArray.component.js.map