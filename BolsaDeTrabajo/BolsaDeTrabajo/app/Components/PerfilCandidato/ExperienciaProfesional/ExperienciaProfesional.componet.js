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
var ExperienciaProfesionalComponent = (function () {
    function ExperienciaProfesionalComponent(fb, _Catalogos, _perfilCandidatoService) {
        var _this = this;
        this.fb = fb;
        this._Catalogos = _Catalogos;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.remove = new core_1.EventEmitter();
        this.trabajoActualChangue = new core_1.EventEmitter();
        this.Edit = false;
        this.contraer = true;
        this.empresa = '';
        this.giroEmpresaId = 0;
        this.cargoAsignado = '';
        this.areaId = '';
        this.area = '';
        this.salario = 0;
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        this.trabajoActual = false;
        this.descripcion = '';
        this.display = false;
        this._Catalogos.GetGirosEmpresas()
            .subscribe(function (resp) {
            _this.girosEmpresa = resp;
            var giroEmpresa = _this.Experiencias.get('giroEmpresaId').value;
            if (giroEmpresa > 0) {
                _this.GiroEmpresaOnchangue(giroEmpresa);
            }
        });
        this._Catalogos.GetMonths()
            .subscribe(function (resp) {
            _this.meses = resp;
            var monthInicio = _this.Experiencias.get('monthInicioId').value;
            var monthTermino = _this.Experiencias.get('monthTerminoId').value;
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
            var yearInicio = _this.Experiencias.get('yearInicioId').value;
            var yearTermino = _this.Experiencias.get('yearTerminoId').value;
            if (yearInicio > 0) {
                _this.YearInicioOnchangue(yearInicio);
            }
            if (yearTermino > 0) {
                _this.YearTerminoOnchangue(yearTermino);
            }
        });
    }
    ExperienciaProfesionalComponent.prototype.ngAfterContentInit = function () {
        if (this.Experiencias.get('id').value != 0) {
            this.Area = this.Experiencias.get('area').value.nombre;
        }
        else {
            this.contraer = false;
            this.Edit = true;
        }
    };
    ExperienciaProfesionalComponent.prototype.filterAreas = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetAreas(query)
            .then(function (areas) {
            _this.filteredAreas = areas;
        });
    };
    ExperienciaProfesionalComponent.prototype.SetAreaId = function (event) {
        this.Experiencias.get('areaId').setValue(event.id);
        this.Area = event.nombre;
    };
    ExperienciaProfesionalComponent.prototype.GiroEmpresaOnchangue = function (id) {
        if (id <= 0) {
            return;
        }
        this.GiroEmpresa = this.girosEmpresa.find(function (x) { return x.id == id; }).giroEmpresa;
    };
    ExperienciaProfesionalComponent.prototype.YearInicioOnchangue = function (id) {
        if (id <= 0) {
            return;
        }
        this.YearInicio = this.years.find(function (x) { return x.id == id; }).year;
    };
    ExperienciaProfesionalComponent.prototype.YearTerminoOnchangue = function (id) {
        if (id <= 0) {
            return;
        }
        this.YearTermino = this.years.find(function (x) { return x.id == id; }).year;
    };
    ExperienciaProfesionalComponent.prototype.MonthInicioOnchangue = function (id) {
        if (id <= 0) {
            return;
        }
        this.MonthInicio = this.meses.find(function (x) { return x.id == id; }).month;
    };
    ExperienciaProfesionalComponent.prototype.MonthTerminoOnchangue = function (id) {
        if (id <= 0) {
            return;
        }
        this.MonthTermino = this.meses.find(function (x) { return x.id == id; }).month;
    };
    ExperienciaProfesionalComponent.prototype.OnEdit = function () {
        this.empresa = this.Experiencias.get('empresa').value;
        this.giroEmpresaId = this.Experiencias.get('giroEmpresaId').value;
        this.cargoAsignado = this.Experiencias.get('cargoAsignado').value;
        this.areaId = this.Experiencias.get('areaId').value;
        this.area = this.Area;
        this.salario = this.Experiencias.get('salario').value;
        this.noYearInicio = this.Experiencias.get('yearInicioId').value;
        this.noMonthInicio = this.Experiencias.get('monthInicioId').value;
        this.noYearTermino = this.Experiencias.get('yearTerminoId').value;
        this.noMonthTermino = this.Experiencias.get('monthTerminoId').value;
        this.trabajoActual = this.Experiencias.get('trabajoActual').value;
        this.descripcion = this.Experiencias.get('descripcion').value;
        this.contraer = false;
        this.Edit = true;
    };
    ExperienciaProfesionalComponent.prototype.DiscardEdit = function () {
        this.Experiencias.get('empresa').setValue(this.empresa);
        this.Experiencias.get('giroEmpresaId').setValue(this.giroEmpresaId);
        this.Experiencias.get('cargoAsignado').setValue(this.cargoAsignado);
        this.Experiencias.get('areaId').setValue(this.areaId);
        this.Area = this.area;
        this.Experiencias.get('salario').setValue(this.salario);
        this.Experiencias.get('yearInicioId').setValue(this.noYearInicio);
        this.YearInicioOnchangue(this.noYearInicio);
        this.Experiencias.get('monthInicioId').setValue(this.noMonthInicio);
        this.MonthInicioOnchangue(this.noMonthInicio);
        this.Experiencias.get('yearTerminoId').setValue(this.noYearTermino);
        this.YearTerminoOnchangue(this.noYearTermino);
        this.Experiencias.get('monthTerminoId').setValue(this.noMonthTermino);
        this.MonthTerminoOnchangue(this.noMonthTermino);
        this.Experiencias.get('trabajoActual').setValue(this.trabajoActual);
        this.Experiencias.get('descripcion').setValue(this.descripcion);
        this.Edit = false;
    };
    ExperienciaProfesionalComponent.prototype.Expandir = function () {
        this.contraer = false;
    };
    ExperienciaProfesionalComponent.prototype.Contraer = function () {
        this.contraer = true;
    };
    ExperienciaProfesionalComponent.prototype.Showdialog = function () {
        this.display = true;
    };
    ExperienciaProfesionalComponent.prototype.Remove = function (index) {
        this.Experiencias.get('area').setValue(null);
        var idExperiencia = this.Experiencias.get('id').value;
        if (idExperiencia != '0') {
            this._perfilCandidatoService.DeleteExperiencia(idExperiencia)
                .subscribe(function (data) { });
        }
        this.remove.emit(index);
        this.display = false;
    };
    ExperienciaProfesionalComponent.prototype.OnTrabajoActualChangue = function (event) {
        if (event.target.checked) {
            this.trabajoActualChangue.emit(this.index);
        }
    };
    ExperienciaProfesionalComponent.prototype.Save = function () {
        var _this = this;
        var date1 = new Date(this.Experiencias.get('monthInicioId').value + '/01/' + this.YearInicio);
        var date2 = new Date(this.Experiencias.get('monthTerminoId').value + '/01/' + this.YearTermino);
        if (date2 <= date1) {
            alert("La  fecha de terminación de tú experiencia \n debe ser mayor a tú fecha de inicio.");
            return;
        }
        this.Edit = false;
        this.auxAreaExperiencia = this.Experiencias.get('area').value;
        this.Experiencias.get('area').setValue(null);
        if (this.Experiencias.get('id').value == '0') {
            this._perfilCandidatoService.AddExperiencia(this.Experiencias.value)
                .subscribe(function (experiencia) {
                _this.Experiencias.get('id').setValue(experiencia.id);
                _this.Experiencias.get('area').setValue(_this.auxAreaExperiencia);
                _this.Area = _this.auxAreaExperiencia.areaExperiencia;
            });
        }
        else {
            this._perfilCandidatoService.UpdateExperiencia(this.Experiencias.value)
                .subscribe(function (experiencia) {
                _this.Experiencias.get('area').setValue(_this.auxAreaExperiencia);
                _this.Area = _this.auxAreaExperiencia.areaExperiencia;
            });
        }
    };
    return ExperienciaProfesionalComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", forms_1.FormGroup)
], ExperienciaProfesionalComponent.prototype, "Experiencias", void 0);
__decorate([
    core_1.Input('Index'),
    __metadata("design:type", Number)
], ExperienciaProfesionalComponent.prototype, "index", void 0);
__decorate([
    core_1.Output('Remove'),
    __metadata("design:type", Object)
], ExperienciaProfesionalComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output('TrabajoActualChangue'),
    __metadata("design:type", Object)
], ExperienciaProfesionalComponent.prototype, "trabajoActualChangue", void 0);
ExperienciaProfesionalComponent = __decorate([
    core_1.Component({
        selector: 'experiencias',
        templateUrl: 'app/Components/PerfilCandidato/ExperienciaProfesional/ExperienciaProfesional.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], ExperienciaProfesionalComponent);
exports.ExperienciaProfesionalComponent = ExperienciaProfesionalComponent;
//# sourceMappingURL=ExperienciaProfesional.componet.js.map