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
var CursoComponent = (function () {
    function CursoComponent(fb, _Catalogos, _perfilCandidatoService) {
        var _this = this;
        this.fb = fb;
        this._Catalogos = _Catalogos;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.remove = new core_1.EventEmitter();
        this.Edit = false;
        this.contraer = true;
        this.curso = '';
        this.institucionId = '';
        this.institucion = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        this.horas = 0;
        this.display = false;
        this._Catalogos.GetMonths()
            .subscribe(function (resp) {
            _this.meses = resp;
            _this.meses = resp;
            var monthInicio = _this.Cursos.get('monthInicioId').value;
            var monthTermino = _this.Cursos.get('monthTerminoId').value;
            if (monthInicio > 0) {
                _this.MonthInicioOnchangue(monthInicio);
            }
            if (monthTermino > 0) {
                _this.MonthTerminoOnchangue(monthTermino);
            }
        });
        this._Catalogos.GetYears()
            .subscribe(function (resp) {
            _this.years = resp;
            var yearInicio = _this.Cursos.get('yearInicioId').value;
            var yearTermino = _this.Cursos.get('yearTerminoId').value;
            if (yearInicio > 0) {
                _this.YearInicioOnchangue(yearInicio);
            }
            if (yearTermino > 0) {
                _this.YearTerminoOnchangue(yearTermino);
            }
        });
    }
    CursoComponent.prototype.ngAfterContentInit = function () {
        if (this.Cursos.get('id').value != 0) {
            this.InstitucionEducativa = this.Cursos.get('institucionEducativa').value.institucionEducativa;
        }
        else {
            this.contraer = false;
            this.Edit = true;
        }
    };
    CursoComponent.prototype.filterInstituciones = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetInstituciones(query)
            .then(function (instituciones) {
            _this.filteredInstituciones = instituciones;
        });
    };
    CursoComponent.prototype.SetInstitucionId = function (event) {
        this.Cursos.get('institucionEducativaId').setValue(event.id);
        this.InstitucionEducativa = event.institucionEducativa;
    };
    CursoComponent.prototype.YearInicioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.YearInicio = this.years.find(function (x) { return x.id == id; }).year;
    };
    CursoComponent.prototype.YearTerminoOnchangue = function (id) {
        if (id <= 0)
            return;
        this.YearTermino = this.years.find(function (x) { return x.id == id; }).year;
    };
    CursoComponent.prototype.MonthInicioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.MonthInicio = this.meses.find(function (x) { return x.id == id; }).month;
    };
    CursoComponent.prototype.MonthTerminoOnchangue = function (id) {
        if (id <= 0)
            return;
        this.MonthTermino = this.meses.find(function (x) { return x.id == id; }).month;
    };
    CursoComponent.prototype.OnEdit = function () {
        this.curso = this.Cursos.get('curso').value;
        this.institucionId = this.Cursos.get('institucionEducativaId').value;
        this.institucion = this.InstitucionEducativa;
        this.horas = this.Cursos.get('horas').value;
        this.noYearInicio = this.Cursos.get('yearInicioId').value;
        this.noMonthInicio = this.Cursos.get('monthInicioId').value;
        this.noYearTermino = this.Cursos.get('yearTerminoId').value;
        this.noMonthTermino = this.Cursos.get('monthTerminoId').value;
        this.contraer = false;
        this.Edit = true;
    };
    CursoComponent.prototype.DiscardEdit = function () {
        this.Cursos.get('curso').setValue(this.curso);
        this.Cursos.get('institucionEducativaId').setValue(this.institucionId);
        this.institucion = this.InstitucionEducativa;
        this.Cursos.get('horas').setValue(this.horas);
        this.Cursos.get('yearInicioId').setValue(this.noYearInicio);
        this.YearInicioOnchangue(this.noYearInicio);
        this.Cursos.get('monthInicioId').setValue(this.noMonthInicio);
        this.MonthInicioOnchangue(this.noMonthInicio);
        this.Cursos.get('yearTerminoId').setValue(this.noYearTermino);
        this.YearTerminoOnchangue(this.noYearTermino);
        this.Cursos.get('monthTerminoId').setValue(this.noMonthTermino);
        this.YearTerminoOnchangue(this.noMonthTermino);
        this.Cursos.get('horas').setValue(this.horas);
        this.Edit = false;
    };
    CursoComponent.prototype.Expandir = function () {
        this.contraer = false;
    };
    CursoComponent.prototype.Contraer = function () {
        this.contraer = true;
    };
    CursoComponent.prototype.EntityDettached = function () {
        this.auxInstitucion = this.Cursos.get('institucionEducativa').value;
        this.Cursos.get('institucionEducativa').setValue(null);
    };
    CursoComponent.prototype.EntityAttached = function () {
        this.Cursos.get('institucionEducativa').setValue(this.auxInstitucion);
    };
    CursoComponent.prototype.Showdialog = function () {
        this.display = true;
    };
    CursoComponent.prototype.Remove = function (index) {
        var idCurso = this.Cursos.get('id').value;
        if (idCurso != '0') {
            this._perfilCandidatoService.DeleteCurso(idCurso)
                .subscribe(function (data) { });
        }
        this.remove.emit(index);
        this.display = false;
    };
    CursoComponent.prototype.Save = function () {
        var _this = this;
        this.curso = '';
        this.institucionId = '';
        this.institucion = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        this.horas = 0;
        var date1 = new Date(this.Cursos.get('monthInicioId').value + '/01/' + this.YearInicio);
        var date2 = new Date(this.Cursos.get('monthTerminoId').value + '/01/' + this.YearTermino);
        if (date2 <= date1) {
            alert("La fecha de terminación de tú curso \n debe ser mayor a tú fecha de inicio.");
            return;
        }
        this.Edit = false;
        this.EntityDettached();
        if (this.Cursos.get('id').value == '0') {
            this._perfilCandidatoService.AddCurso(this.Cursos.value)
                .subscribe(function (curso) {
                _this.Cursos.get('id').setValue(curso.id);
                _this.EntityAttached();
            });
        }
        else {
            this._perfilCandidatoService.UpdateCurso(this.Cursos.value)
                .subscribe(function (curso) {
                _this.EntityAttached();
            });
        }
    };
    return CursoComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", forms_1.FormGroup)
], CursoComponent.prototype, "Cursos", void 0);
__decorate([
    core_1.Input('Index'),
    __metadata("design:type", Number)
], CursoComponent.prototype, "index", void 0);
__decorate([
    core_1.Output('Remove'),
    __metadata("design:type", Object)
], CursoComponent.prototype, "remove", void 0);
CursoComponent = __decorate([
    core_1.Component({
        selector: 'cursos',
        templateUrl: 'app/Components/PerfilCandidato/Curso/curso.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], CursoComponent);
exports.CursoComponent = CursoComponent;
//# sourceMappingURL=curso.component.js.map