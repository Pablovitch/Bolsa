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
var CertificacionesArray = (function () {
    function CertificacionesArray(_fb, _Router, _Route, _perfilCandidatoService) {
        this._fb = _fb;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilCandidatoService = _perfilCandidatoService;
    }
    CertificacionesArray.prototype.ngOnInit = function () {
        var _this = this;
        this.CertificacionesArray = this._fb.group({
            certificaciones: this._fb.array([]),
        });
        this._perfilCandidatoService.GetCertificaciones(this.PerfilCandidatoId)
            .subscribe(function (data) {
            _this.certificaciones = data;
            if (_this.certificaciones == null) {
                _this.addCertificacion();
            }
            else {
                _this.PopulateForm(_this.certificaciones);
            }
        });
    };
    CertificacionesArray.prototype.initCertificacion = function () {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            certificacion: ['', forms_1.Validators.required],
            autoridadEmisora: [],
            licencia: [],
            urlCertificacion: [],
            noVence: [],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino']
        });
    };
    CertificacionesArray.prototype.addCertificacion = function () {
        var control = this.CertificacionesArray.controls['certificaciones'];
        var addrCtrl = this.initCertificacion();
        control.push(addrCtrl);
    };
    CertificacionesArray.prototype.removeCertificacion = function (i) {
        var control = this.CertificacionesArray.controls['certificaciones'];
        control.removeAt(i);
    };
    CertificacionesArray.prototype.EntityAttached = function () {
    };
    CertificacionesArray.prototype.PopulateForm = function (certificaciones) {
        var index = 1;
        for (var certificacion in certificaciones) {
            this.addCertificacion();
        }
        this.CertificacionesArray.patchValue({
            certificaciones: certificaciones,
        });
    };
    return CertificacionesArray;
}());
__decorate([
    core_1.Input('PerfilCandidatoId'),
    __metadata("design:type", String)
], CertificacionesArray.prototype, "PerfilCandidatoId", void 0);
CertificacionesArray = __decorate([
    core_1.Component({
        selector: 'CertificacionesArray',
        templateUrl: 'app/Components/PerfilCandidato/Certificacion/CertificacionArray.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], CertificacionesArray);
exports.CertificacionesArray = CertificacionesArray;
//# sourceMappingURL=CertificacionArray.component.js.map