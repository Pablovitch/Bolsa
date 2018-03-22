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
var IdiomaArray = (function () {
    function IdiomaArray(_fb, _Router, _Route, _perfilCandidatoService) {
        this._fb = _fb;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilCandidatoService = _perfilCandidatoService;
    }
    IdiomaArray.prototype.ngOnInit = function () {
        var _this = this;
        this.IdiomasArray = this._fb.group({
            idiomas: this._fb.array([]),
        });
        this._perfilCandidatoService.GetIdiomas(this.PerfilCandidatoId)
            .subscribe(function (data) {
            _this.idiomas = data;
            if (_this.idiomas == null) {
                return;
            }
            else {
                _this.PopulateForm(_this.idiomas);
            }
        });
    };
    IdiomaArray.prototype.initIdioma = function () {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            idioma: [],
            idiomaId: ['', forms_1.Validators.required],
            nivelHabladoId: ['Nivel', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            nivelEscritoId: ['Nivel', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])]
        });
    };
    IdiomaArray.prototype.addIdioma = function () {
        var control = this.IdiomasArray.controls['idiomas'];
        var addrCtrl = this.initIdioma();
        control.push(addrCtrl);
    };
    IdiomaArray.prototype.removeIdioma = function (i) {
        var control = this.IdiomasArray.controls['idiomas'];
        control.removeAt(i);
    };
    IdiomaArray.prototype.EntityAttached = function () {
        var idiomas = this.IdiomasArray.controls['idiomas'];
        for (var i = 0; i < idiomas.length; i++) {
            var idioma = idiomas.controls[i];
            idioma.get('idioma').setValue(null);
        }
    };
    IdiomaArray.prototype.PopulateForm = function (idiomas) {
        for (var idioma in idiomas) {
            this.addIdioma();
        }
        this.IdiomasArray.patchValue({
            idiomas: this.idiomas,
        });
    };
    return IdiomaArray;
}());
__decorate([
    core_1.Input('PerfilCandidatoId'),
    __metadata("design:type", String)
], IdiomaArray.prototype, "PerfilCandidatoId", void 0);
IdiomaArray = __decorate([
    core_1.Component({
        selector: 'IdiomasArray',
        templateUrl: 'app/Components/PerfilCandidato/Idioma/IdiomaArray.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], IdiomaArray);
exports.IdiomaArray = IdiomaArray;
//# sourceMappingURL=IdiomaArray.component.js.map