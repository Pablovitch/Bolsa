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
var FormacionComponent = (function () {
    function FormacionComponent(fb, _Catalogos, _perfilCandidatoService) {
        var _this = this;
        this.fb = fb;
        this._Catalogos = _Catalogos;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.remove = new core_1.EventEmitter();
        this.Edit = false;
        this.contraer = true;
        this.institucionId = '';
        this.institucion = '';
        this.gradoEstudioId = 0;
        this.estadoEstudioId = 0;
        this.documentoId = 0;
        this.carreraId = '';
        this.carrera = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        this._Catalogos.GetEstatus()
            .subscribe(function (resp) {
            _this.Estatus = resp;
            var estadoEstudio = _this.Formaciones.get('estadoEstudioId').value;
            if (estadoEstudio > 0) {
                _this.EstadoEstudioOnchangue(estadoEstudio);
            }
        });
        this._Catalogos.GetGradoEstudio()
            .subscribe(function (resp) {
            _this.gradosEstudio = resp;
            var gradoEstudio = _this.Formaciones.get('gradoEstudioId').value;
            if (gradoEstudio > 0) {
                _this.GradoEstudioOnchangue(gradoEstudio);
            }
        });
        this._Catalogos.GetMonths()
            .subscribe(function (resp) {
            _this.meses = resp;
            var monthInicio = _this.Formaciones.get('monthInicioId').value;
            var monthTermino = _this.Formaciones.get('monthTerminoId').value;
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
            var yearInicio = _this.Formaciones.get('yearInicioId').value;
            var yearTermino = _this.Formaciones.get('yearTerminoId').value;
            if (yearInicio > 0) {
                _this.YearInicioOnchangue(yearInicio);
            }
            if (yearTermino > 0) {
                _this.YearTerminoOnchangue(yearTermino);
            }
        });
        this._Catalogos.GetDocumentosValidadores()
            .subscribe(function (resp) {
            _this.documentosValidadores = resp;
            var documento = _this.Formaciones.get('documentoValidadorId').value;
            if (documento > 0) {
                _this.DocumentoValidadorOnchangue(documento);
            }
        });
    }
    FormacionComponent.prototype.ngAfterContentInit = function () {
        if (this.Formaciones.get('id').value != 0) {
            this.InstitucionEducativa = this.Formaciones.get('institucionEducativa').value.institucionEducativa;
            this.Carrera = this.Formaciones.get('carrera').value.carrera;
        }
        else {
            this.contraer = false;
            this.Edit = true;
        }
    };
    FormacionComponent.prototype.filterInstituciones = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetInstituciones(query)
            .then(function (instituciones) {
            _this.filteredInstituciones = instituciones;
        });
    };
    FormacionComponent.prototype.filterCarreras = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetCarreras(query)
            .then(function (carreras) {
            _this.filteredCarreras = carreras;
        });
    };
    FormacionComponent.prototype.SetCarreraId = function (event) {
        this.Formaciones.get('carreraId').setValue(event.id);
        this.Carrera = event.carrera;
    };
    FormacionComponent.prototype.SetInstitucionId = function (event) {
        this.Formaciones.get('institucionEducativaId').setValue(event.id);
        this.InstitucionEducativa = event.institucionEducativa;
    };
    FormacionComponent.prototype.DocumentoValidadorOnchangue = function (id) {
        if (id <= 0)
            return;
        this.DocumentoValidador = this.documentosValidadores.find(function (x) { return x.id == id; }).documentoValidador;
    };
    FormacionComponent.prototype.EstadoEstudioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.EstadoEstudio = this.Estatus.find(function (x) { return x.id == id; }).estadoEstudio;
    };
    FormacionComponent.prototype.GradoEstudioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.GradoEstudio = this.gradosEstudio.find(function (x) { return x.id == id; }).gradoEstudio;
    };
    FormacionComponent.prototype.YearInicioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.YearInicio = this.years.find(function (x) { return x.id == id; }).year;
    };
    FormacionComponent.prototype.YearTerminoOnchangue = function (id) {
        if (id <= 0)
            return;
        this.YearTermino = this.years.find(function (x) { return x.id == id; }).year;
    };
    FormacionComponent.prototype.MonthInicioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.MonthInicio = this.meses.find(function (x) { return x.id == id; }).month;
    };
    FormacionComponent.prototype.MonthTerminoOnchangue = function (id) {
        if (id <= 0)
            return;
        this.MonthTermino = this.meses.find(function (x) { return x.id == id; }).month;
    };
    FormacionComponent.prototype.OnEdit = function () {
        this.institucionId = this.Formaciones.get('institucionEducativaId').value;
        this.institucion = this.InstitucionEducativa;
        this.gradoEstudioId = this.Formaciones.get('gradoEstudioId').value;
        this.estadoEstudioId = this.Formaciones.get('estadoEstudioId').value;
        this.documentoId = this.Formaciones.get('documentoValidadorId').value;
        this.carreraId = this.Formaciones.get('carreraId').value;
        this.carrera = this.Carrera;
        this.noYearInicio = this.Formaciones.get('yearInicioId').value;
        this.noMonthInicio = this.Formaciones.get('monthInicioId').value;
        this.noYearTermino = this.Formaciones.get('yearTerminoId').value;
        this.noMonthTermino = this.Formaciones.get('monthTerminoId').value;
        this.contraer = false;
        this.Edit = true;
    };
    FormacionComponent.prototype.DiscardEdit = function () {
        this.Formaciones.get('institucionEducativaId').setValue(this.institucionId);
        this.InstitucionEducativa = this.institucion;
        this.Formaciones.get('gradoEstudioId').setValue(this.gradoEstudioId);
        this.GradoEstudioOnchangue(this.gradoEstudioId);
        this.Formaciones.get('estadoEstudioId').setValue(this.estadoEstudioId);
        this.GradoEstudioOnchangue(this.estadoEstudioId);
        this.Formaciones.get('documentoValidadorId').setValue(this.documentoId);
        this.DocumentoValidadorOnchangue(this.documentoId);
        this.Formaciones.get('carreraId').setValue(this.carreraId);
        this.Carrera = this.carrera;
        this.Formaciones.get('yearInicioId').setValue(this.noYearInicio);
        this.YearInicioOnchangue(this.noYearInicio);
        this.Formaciones.get('monthInicioId').setValue(this.noMonthInicio);
        this.MonthInicioOnchangue(this.noMonthInicio);
        this.Formaciones.get('yearTerminoId').setValue(this.noYearTermino);
        this.YearTerminoOnchangue(this.noYearTermino);
        this.Formaciones.get('monthTerminoId').setValue(this.noMonthTermino);
        this.Edit = false;
    };
    FormacionComponent.prototype.Expandir = function () {
        this.contraer = false;
    };
    FormacionComponent.prototype.Contraer = function () {
        this.contraer = true;
    };
    FormacionComponent.prototype.EntityDettached = function () {
        this.auxCarrera = this.Formaciones.get('carrera').value;
        this.auxinstitucion = this.Formaciones.get('institucionEducativa').value;
        this.Formaciones.get('carrera').setValue(null);
        this.Formaciones.get('institucionEducativa').setValue(null);
    };
    FormacionComponent.prototype.EntityAttached = function () {
        this.Formaciones.get('institucionEducativa').setValue(this.auxinstitucion);
        this.Formaciones.get('carrera').setValue(this.auxCarrera);
    };
    FormacionComponent.prototype.Remove = function (index) {
        var idFormacion = this.Formaciones.get('id').value;
        if (idFormacion != '0') {
            this._perfilCandidatoService.DeleteFormacion(idFormacion)
                .subscribe(function (data) { });
        }
        this.remove.emit(index);
    };
    FormacionComponent.prototype.Save = function () {
        var _this = this;
        this.institucionId = '';
        this.institucion = '';
        this.gradoEstudioId = 0;
        this.estadoEstudioId = 0;
        this.documentoId = 0;
        this.carreraId = '';
        this.carrera = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        var date1 = new Date(this.Formaciones.get('monthInicioId').value + '/01/' + this.YearInicio);
        var date2 = new Date(this.Formaciones.get('monthTerminoId').value + '/01/' + this.YearTermino);
        if (date2 <= date1) {
            alert("La  fecha de terminación de tú formación \n debe ser mayor a tú fecha de inicio.");
            return;
        }
        this.Edit = false;
        this.EntityDettached();
        if (this.Formaciones.get('id').value == '0') {
            this._perfilCandidatoService.AddFormacion(this.Formaciones.value)
                .subscribe(function (formacion) {
                _this.Formaciones.get('id').setValue(formacion.id);
                _this.EntityAttached();
            });
        }
        else {
            this._perfilCandidatoService.UpdateFormacion(this.Formaciones.value)
                .subscribe(function (formacion) {
                _this.EntityAttached();
            });
        }
    };
    return FormacionComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", forms_1.FormGroup)
], FormacionComponent.prototype, "Formaciones", void 0);
__decorate([
    core_1.Input('Index'),
    __metadata("design:type", Number)
], FormacionComponent.prototype, "index", void 0);
__decorate([
    core_1.Output('Remove'),
    __metadata("design:type", Object)
], FormacionComponent.prototype, "remove", void 0);
FormacionComponent = __decorate([
    core_1.Component({
        selector: 'Formaciones',
        templateUrl: 'app/Components/PerfilCandidato/Formacion/Formacion.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], FormacionComponent);
exports.FormacionComponent = FormacionComponent;
//# sourceMappingURL=Formacion.Component.js.map