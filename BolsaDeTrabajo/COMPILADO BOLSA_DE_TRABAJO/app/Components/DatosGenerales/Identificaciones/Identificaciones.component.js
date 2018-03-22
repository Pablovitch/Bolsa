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
var router_1 = require("@angular/router");
var CURP_validator_1 = require("../../Validators/CURP.validator");
var DatosGenerales_service_1 = require("../../../Services/DatosGenerales.service");
var catalogos_service_1 = require("../../../Services/catalogos.service");
var ApiCatalogos_1 = require("../../../Shared/ApiCatalogos");
var IdentificacionesComponent = (function () {
    function IdentificacionesComponent(_Router, fb, _ValidatorCURP, _Route, _DatosGeneralesService, _CatalogoService) {
        this._Router = _Router;
        this.fb = fb;
        this._ValidatorCURP = _ValidatorCURP;
        this._Route = _Route;
        this._DatosGeneralesService = _DatosGeneralesService;
        this._CatalogoService = _CatalogoService;
        this.Edit = false;
        this.seguroSocialValido = true;
        this.rfcValido = true;
        this.curpValida = true;
        this.formIdentificaciones = fb.group({
            candidatoId: [],
            nss: [''],
            curp: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            rfc: [''],
            tieneLicenciaConducir: [false],
            tipoLicenciaId: [null]
        });
        this.showTiposLicencias(true);
    }
    IdentificacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formIdentificaciones.get('candidatoId').setValue(this.CandidatoId);
        this._DatosGeneralesService.GetIdentificaciones(this.CandidatoId)
            .subscribe(function (identificaciones) {
            _this.formIdentificaciones.patchValue({
                nss: identificaciones.nss,
                curp: identificaciones.curp,
                rfc: identificaciones.rfc,
                tieneLicenciaConducir: identificaciones.tieneLicenciaConducir,
                tipoLicenciaId: identificaciones.tipoLicenciaId
            });
            if (identificaciones.tieneLicenciaConducir) {
                _this.tieneLicencia = identificaciones.tieneLicenciaConducir;
                //this.showTiposLicencias(identificaciones.tieneLicenciaConducir);
                _this.TipoLicenciaOnChange(identificaciones.tipoLicenciaId);
            }
        });
    };
    IdentificacionesComponent.prototype.OnEdit = function () {
        var _this = this;
        this._DatosGeneralesService.GetDataValidation(this.CandidatoId)
            .subscribe(function (data) {
            _this.DataCandidato = data;
        });
        this.Edit = true;
    };
    IdentificacionesComponent.prototype.DiscardEdit = function () {
        this.Edit = false;
    };
    IdentificacionesComponent.prototype.showTiposLicencias = function (isChecked) {
        var _this = this;
        this.tieneLicencia = isChecked;
        if (isChecked) {
            this._CatalogoService.getTiposLicencia(ApiCatalogos_1.Catalogos.TIPOSLICENCIAS)
                .subscribe(function (tiposLicencias) {
                _this.filteredTiposLicencia = tiposLicencias;
            });
        }
    };
    IdentificacionesComponent.prototype.TipoLicenciaOnChange = function (value) {
        this.TipoLicencia = this.filteredTiposLicencia.find(function (x) { return x.id == value; }).tipoLicencia;
    };
    IdentificacionesComponent.prototype.ValidarSeguroSocial = function () {
        this.seguroSocialValido = true;
        if (this.formIdentificaciones.get('nss').value == null) {
            return;
        }
        var imss = this.formIdentificaciones.get('nss').value;
        if (imss.trim().length != 11) {
            this.formIdentificaciones.get('nss').setValue(null);
            return;
        }
        var isValid = this._ValidatorCURP.ValidarIMSS(this.DataCandidato.fechaNacimiento, this.formIdentificaciones.get('nss').value);
        if (!isValid) {
            this.seguroSocialValido = false;
            this.formIdentificaciones.get('nss').setValue(null);
        }
        else {
            this.seguroSocialValido = true;
        }
    };
    IdentificacionesComponent.prototype.ClickSeguroSocial = function () {
        this.seguroSocialValido = false;
    };
    IdentificacionesComponent.prototype.ValidarRFC = function () {
        this.rfcValido = true;
        if (this.formIdentificaciones.get('rfc').value == null) {
            return;
        }
        var rfc = this.formIdentificaciones.get('rfc').value;
        if (rfc.trim().length != 13) {
            this.formIdentificaciones.get('rfc').setValue(null);
            return;
        }
        var isValid = this._ValidatorCURP.ValidarRFC(this.DataCandidato.nombre, this.DataCandidato.apellidoPaterno, this.DataCandidato.apellidoMaterno, new Date(this.DataCandidato.fechaNacimiento), this.DataCandidato.generoId.toString(), this.DataCandidato.estadoNacimiento, this.formIdentificaciones.get('rfc').value);
        if (!isValid) {
            this.rfcValido = false;
            this.formIdentificaciones.get('rfc').setValue(null);
        }
        else {
            this.rfcValido = true;
        }
    };
    IdentificacionesComponent.prototype.ValidandoCURP = function (event) {
        if (this.formIdentificaciones.get('curp').value == null) {
            return;
        }
        var curp = this.formIdentificaciones.get('curp').value;
        if (curp.trim().length != 18) {
            this.formIdentificaciones.get('curp').setValue(null);
            return;
        }
        var isValid = this._ValidatorCURP.ValidarCurp(this.DataCandidato.nombre, this.DataCandidato.apellidoPaterno, this.DataCandidato.apellidoMaterno, new Date(this.DataCandidato.fechaNacimiento), this.DataCandidato.generoId.toString(), this.DataCandidato.estadoNacimiento, this.formIdentificaciones.get('curp').value);
        if (isValid) {
            this.curpValida = true;
        }
        else {
            this.curpValida = false;
        }
    };
    IdentificacionesComponent.prototype.ClickRFC = function () {
        this.rfcValido = false;
    };
    IdentificacionesComponent.prototype.KeyUpRFC = function (value) {
        this.rfcValido = false;
    };
    IdentificacionesComponent.prototype.Save = function () {
        var _this = this;
        this._DatosGeneralesService.EditIdentificaciones(this.formIdentificaciones.value, this.CandidatoId)
            .subscribe(function (PersonaId) {
            _this.Edit = false;
            //this.formDatosDeContacto.markAsPristine();
            //this._Router.navigate(['DatosPerfilComponent', PersonaId]);
        });
    };
    return IdentificacionesComponent;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], IdentificacionesComponent.prototype, "CandidatoId", void 0);
IdentificacionesComponent = __decorate([
    core_1.Component({
        selector: 'damsa-identificaciones',
        templateUrl: '/app/Components/DatosGenerales/Identificaciones/Identificaciones.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder,
        CURP_validator_1.CURPValidator, router_1.ActivatedRoute,
        DatosGenerales_service_1.DatosGeneralesService, catalogos_service_1.CatalogosService])
], IdentificacionesComponent);
exports.IdentificacionesComponent = IdentificacionesComponent;
//# sourceMappingURL=Identificaciones.component.js.map