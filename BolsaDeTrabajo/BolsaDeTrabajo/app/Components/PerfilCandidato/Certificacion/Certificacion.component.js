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
var CertificacionComponent = (function () {
    function CertificacionComponent(fb, _Catalogos, _perfilCandidatoService) {
        var _this = this;
        this.fb = fb;
        this._Catalogos = _Catalogos;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.remove = new core_1.EventEmitter();
        this.Edit = false;
        this.contraer = true;
        this.nombreCertificacion = '';
        this.autoridadEmisora = '';
        this.noLicencia = '';
        this.URLCertificacion = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        this.vence = false;
        this.display = false;
        this._Catalogos.GetMonths()
            .subscribe(function (resp) {
            _this.meses = resp;
            var monthInicio = _this.Certificacion.get('monthInicioId').value;
            var monthTermino = _this.Certificacion.get('monthTerminoId').value;
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
            var yearInicio = _this.Certificacion.get('yearInicioId').value;
            var yearTermino = _this.Certificacion.get('yearTerminoId').value;
            if (yearInicio > 0) {
                _this.YearInicioOnchangue(yearInicio);
            }
            if (yearTermino > 0) {
                _this.YearTerminoOnchangue(yearTermino);
            }
        });
    }
    CertificacionComponent.prototype.ngAfterContentInit = function () {
        if (this.Certificacion.get('id').value == 0) {
            this.contraer = false;
            this.Edit = true;
        }
    };
    CertificacionComponent.prototype.YearInicioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.YearInicio = this.years.find(function (x) { return x.id == id; }).year;
    };
    CertificacionComponent.prototype.YearTerminoOnchangue = function (id) {
        if (id <= 0)
            return;
        this.YearTermino = this.years.find(function (x) { return x.id == id; }).year;
    };
    CertificacionComponent.prototype.MonthInicioOnchangue = function (id) {
        if (id <= 0)
            return;
        this.MonthInicio = this.meses.find(function (x) { return x.id == id; }).month;
    };
    CertificacionComponent.prototype.MonthTerminoOnchangue = function (id) {
        if (id <= 0)
            return;
        this.MonthTermino = this.meses.find(function (x) { return x.id == id; }).month;
    };
    CertificacionComponent.prototype.OnEdit = function () {
        this.nombreCertificacion = this.Certificacion.get('certificacion').value;
        this.autoridadEmisora = this.Certificacion.get('autoridadEmisora').value;
        this.noLicencia = this.Certificacion.get('licencia').value;
        this.URLCertificacion = this.Certificacion.get('urlCertificacion').value;
        this.noYearInicio = this.Certificacion.get('yearInicioId').value;
        this.noMonthInicio = this.Certificacion.get('monthInicioId').value;
        this.noYearTermino = this.Certificacion.get('yearTerminoId').value;
        this.noMonthTermino = this.Certificacion.get('monthTerminoId').value;
        this.vence = this.Certificacion.get('noVence').value;
        this.contraer = false;
        this.Edit = true;
    };
    CertificacionComponent.prototype.DiscardEdit = function () {
        this.Certificacion.get('certificacion').setValue(this.nombreCertificacion);
        this.Certificacion.get('autoridadEmisora').setValue(this.autoridadEmisora);
        this.Certificacion.get('licencia').setValue(this.noLicencia);
        this.Certificacion.get('urlCertificacion').setValue(this.URLCertificacion);
        this.Certificacion.get('yearInicioId').setValue(this.noYearInicio);
        this.YearInicioOnchangue(this.noYearInicio);
        this.Certificacion.get('monthInicioId').setValue(this.noMonthInicio);
        this.MonthInicioOnchangue(this.noMonthInicio);
        this.Certificacion.get('yearTerminoId').setValue(this.noYearTermino);
        this.YearTerminoOnchangue(this.noYearTermino);
        this.Certificacion.get('monthTerminoId').setValue(this.noMonthTermino);
        this.Certificacion.get('noVence').setValue(this.vence);
        this.MonthTerminoOnchangue(this.noMonthTermino);
        this.Edit = false;
    };
    CertificacionComponent.prototype.Expandir = function () {
        this.contraer = false;
    };
    CertificacionComponent.prototype.Contraer = function () {
        this.contraer = true;
    };
    CertificacionComponent.prototype.Showdialog = function () {
        this.display = true;
    };
    CertificacionComponent.prototype.Remove = function (index) {
        var idCertificacion = this.Certificacion.get('id').value;
        if (idCertificacion != '0') {
            this._perfilCandidatoService.DeleteCertificacion(idCertificacion)
                .subscribe(function (data) { });
        }
        this.remove.emit(index);
        this.display = false;
    };
    CertificacionComponent.prototype.Save = function () {
        var _this = this;
        this.nombreCertificacion = '';
        this.autoridadEmisora = '';
        this.noLicencia = '';
        this.URLCertificacion = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        var date1 = new Date(this.Certificacion.get('monthInicioId').value + '/01/' + this.YearInicio);
        var date2 = new Date(this.Certificacion.get('monthTerminoId').value + '/01/' + this.YearTermino);
        if (date2 <= date1) {
            alert("La  fecha de terminación de tú certificación \n debe ser mayor a tú fecha de inicio.");
            return;
        }
        this.Edit = false;
        if (this.Certificacion.get('id').value == '0') {
            this._perfilCandidatoService.AddCertificacion(this.Certificacion.value)
                .subscribe(function (certificacion) {
                _this.Certificacion.get('id').setValue(certificacion.id);
            });
        }
        else {
            this._perfilCandidatoService.UpdateCertificacion(this.Certificacion.value)
                .subscribe(function (certificacion) {
                //this.Experiencias.get('id').setValue(experiencia.id)
            });
        }
    };
    return CertificacionComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", forms_1.FormGroup)
], CertificacionComponent.prototype, "Certificacion", void 0);
__decorate([
    core_1.Input('Index'),
    __metadata("design:type", Number)
], CertificacionComponent.prototype, "index", void 0);
__decorate([
    core_1.Output('Remove'),
    __metadata("design:type", Object)
], CertificacionComponent.prototype, "remove", void 0);
CertificacionComponent = __decorate([
    core_1.Component({
        selector: 'certificaciones',
        templateUrl: 'app/Components/PerfilCandidato/Certificacion/Certificacion.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], CertificacionComponent);
exports.CertificacionComponent = CertificacionComponent;
//# sourceMappingURL=Certificacion.component.js.map