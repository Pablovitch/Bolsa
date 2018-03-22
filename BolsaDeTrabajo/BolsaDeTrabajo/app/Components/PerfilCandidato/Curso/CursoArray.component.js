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
var CursosArray = (function () {
    function CursosArray(_fb, _Router, _Route, _perfilCandidatoService) {
        this._fb = _fb;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilCandidatoService = _perfilCandidatoService;
    }
    CursosArray.prototype.ngOnInit = function () {
        var _this = this;
        this.CursosArray = this._fb.group({
            cursos: this._fb.array([]),
        });
        this._perfilCandidatoService.GetCursos(this.PerfilCandidatoId)
            .subscribe(function (data) {
            _this.cursos = data;
            if (_this.cursos == null) {
                return;
            }
            else {
                _this.PopulateForm(_this.cursos);
            }
        });
    };
    CursosArray.prototype.initCurso = function () {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            curso: ['', forms_1.Validators.required],
            institucionEducativa: [],
            institucionEducativaId: [''],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino'],
            horas: []
        });
    };
    CursosArray.prototype.addCurso = function () {
        var control = this.CursosArray.controls['cursos'];
        var addrCtrl = this.initCurso();
        control.push(addrCtrl);
    };
    CursosArray.prototype.removeCurso = function (i) {
        var control = this.CursosArray.controls['cursos'];
        control.removeAt(i);
    };
    CursosArray.prototype.PopulateForm = function (cursos) {
        for (var curso in cursos) {
            this.addCurso();
        }
        this.CursosArray.patchValue({
            cursos: this.cursos,
        });
    };
    return CursosArray;
}());
__decorate([
    core_1.Input('PerfilCandidatoId'),
    __metadata("design:type", String)
], CursosArray.prototype, "PerfilCandidatoId", void 0);
CursosArray = __decorate([
    core_1.Component({
        selector: 'CursosArray',
        templateUrl: 'app/Components/PerfilCandidato/Curso/CursoArray.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], CursosArray);
exports.CursosArray = CursosArray;
//# sourceMappingURL=CursoArray.component.js.map