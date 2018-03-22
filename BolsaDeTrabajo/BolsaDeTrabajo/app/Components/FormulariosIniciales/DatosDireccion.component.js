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
var primeng_1 = require("primeng/primeng");
var catalogos_service_1 = require("../../Services/catalogos.service");
var Direccion_Service_1 = require("../../Services/Direccion.Service");
var ApiCatalogos_1 = require("../../Shared/ApiCatalogos");
var DatosDireccionComponent = (function () {
    function DatosDireccionComponent(fb, _catalogosService, _Router, _DireccionService, _Route) {
        var _this = this;
        this.fb = fb;
        this._catalogosService = _catalogosService;
        this._Router = _Router;
        this._DireccionService = _DireccionService;
        this._Route = _Route;
        this.viveMexico = true;
        this.direccionCompleted = false;
        this.CandidatoId = null;
        this.Oculto = true;
        this.showMenu = false;
        this.PAISES = '../api/paises/';
        this.ESTADOS = '../api/estados';
        this.MUNICIPIOS = '../api/municipios';
        this.COLONIAS = '../api/colonias';
        var parametros = this._Route.params.subscribe(function (params) {
            _this.personaId = params["id"];
        });
        this.formDireccion = fb.group({
            personaId: [],
            pais: [''],
            paisId: [null, forms_1.Validators.required],
            estado: [''],
            estadoId: [null],
            municipio: [''],
            municipioId: [null],
            codigoPostal: [null],
            colonia: [''],
            coloniaId: [null],
            calle: [null],
            numeroExterior: [null],
            numeroInterior: ['']
        });
        this.formDireccion.get('personaId').setValue(this.personaId);
    }
    DatosDireccionComponent.prototype.ShowMenu = function () {
        this.showMenu = true;
    };
    DatosDireccionComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this._catalogosService.getPaises(this.PAISES, query).then(function (countries) {
            _this.filteredCountries = countries;
        });
    };
    DatosDireccionComponent.prototype.setPais = function (value) {
        this.formDireccion.get('paisId').setValue(value.id);
        this.formDireccion.get('pais').setValue(null);
        if (value.pais.toString().toLowerCase() == "mexico") {
            this.viveMexico = true;
        }
        else {
            this.viveMexico = false;
        }
    };
    DatosDireccionComponent.prototype.filterState = function (event) {
        var _this = this;
        var estado = this.formDireccion.get('paisId').value;
        if (estado == null) {
            this.filteredStates = [{ id: 0, estado: "**Seleccione un país**", clave: "X", paisId: 0 }];
            return;
        }
        var query = event.query;
        this._catalogosService.getEstados(this.ESTADOS, query).then(function (states) {
            _this.filteredStates = states;
        });
    };
    DatosDireccionComponent.prototype.setEstado = function (value) {
        if (value.id > 0) {
            this.formDireccion.get('estadoId').setValue(value.id);
        }
        this.formDireccion.get('estado').setValue(null);
    };
    DatosDireccionComponent.prototype.filterTowns = function (event) {
        var _this = this;
        var estado = this.formDireccion.get('estadoId').invalid;
        if (estado) {
            this.filteredTowns = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDireccion.get('estadoId').value;
        var query = event.query;
        this._catalogosService.getMunicipios(this.MUNICIPIOS, estadoId, query).then(function (towns) {
            _this.filteredTowns = towns;
        });
    };
    DatosDireccionComponent.prototype.setMunicipio = function (value) {
        this.formDireccion.get('municipioId').setValue(value.id);
        this.formDireccion.get('municipio').setValue(null);
    };
    DatosDireccionComponent.prototype.filterColonias = function (event) {
        var _this = this;
        var postalCode = this.formDireccion.get('codigoPostal').value;
        var query = event.query;
        this._catalogosService.getColonia(ApiCatalogos_1.Catalogos.COLONIAS, postalCode, query).then(function (colonias) {
            _this.filteredColonias = colonias;
        });
    };
    DatosDireccionComponent.prototype.buscarColonias = function () {
        var _this = this;
        if (!this.viveMexico) {
            return;
        }
        var postalCode = this.formDireccion.get('codigoPostal').value;
        this._catalogosService.getColonias(this.COLONIAS, postalCode).
            then(function (colonias) {
            _this.filteredColonias = colonias;
        });
    };
    DatosDireccionComponent.prototype.setColonia = function (value) {
        this.formDireccion.get('coloniaId').setValue(value.id);
        this.formDireccion.get('colonia').setValue(null);
    };
    DatosDireccionComponent.prototype.doClearPais = function () {
        this.autocompletePaisCharge.inputEL.nativeElement.value = '';
    };
    DatosDireccionComponent.prototype.onClearPais = function () {
        this.formDireccion.get('pais').setValue(null);
        this.formDireccion.get('paisId').setValue(null);
    };
    DatosDireccionComponent.prototype.onBlurPais = function () {
        var paisId = this.formDireccion.get('paisId').value;
        if (paisId == null) {
            this.doClearPais();
        }
        this.DireccionCompleted();
    };
    DatosDireccionComponent.prototype.onClearEstado = function () {
        this.formDireccion.get('estadoId').setValue(null);
        this.formDireccion.get('estado').setValue(null);
    };
    DatosDireccionComponent.prototype.onBlurEstado = function () {
        var EstadoId = this.formDireccion.get('estadoId').value;
        if (EstadoId == null) {
            this.doClearEstado();
        }
        this.DireccionCompleted();
    };
    DatosDireccionComponent.prototype.doClearEstado = function () {
        this.autocompleteEstadoCharge.inputEL.nativeElement.value = '';
    };
    DatosDireccionComponent.prototype.onClearMunicipio = function () {
        this.formDireccion.get('municipioId').setValue(null);
        this.formDireccion.get('municipio').setValue(null);
    };
    DatosDireccionComponent.prototype.onBlurMunicipio = function () {
        var municipioId = this.formDireccion.get('municipioId').value;
        if (municipioId == null) {
            this.doClearMunicipio();
        }
        this.DireccionCompleted();
    };
    DatosDireccionComponent.prototype.doClearMunicipio = function () {
        this.autocompleteMunicipioCharge.inputEL.nativeElement.value = '';
    };
    DatosDireccionComponent.prototype.onClearColonia = function () {
        this.formDireccion.get('coloniaId').setValue(null);
        this.formDireccion.get('colonia').setValue(null);
    };
    DatosDireccionComponent.prototype.onBlurColonia = function () {
        var ColoniaId = this.formDireccion.get('coloniaId').value;
        if (ColoniaId == null) {
            this.doClearColonia();
        }
        this.DireccionCompleted();
    };
    DatosDireccionComponent.prototype.doClearColonia = function () {
        this.autocompleteColoniaCharge.inputEL.nativeElement.value = '';
    };
    DatosDireccionComponent.prototype.onCPChangue = function (value) {
        this.formDireccion.get('codigoPostal').setValue(value.toUpperCase());
        this.DireccionCompleted();
    };
    DatosDireccionComponent.prototype.onCalleChangue = function (value) {
        this.formDireccion.get('calle').setValue(value.toUpperCase());
        this.DireccionCompleted();
    };
    DatosDireccionComponent.prototype.onNumeroExteriorChangue = function (value) {
        this.formDireccion.get('numeroExterior').setValue(value.toUpperCase());
        this.DireccionCompleted();
    };
    DatosDireccionComponent.prototype.onNumeroInteriorChangue = function (value) {
        this.formDireccion.get('numeroInterior').setValue(value.toUpperCase());
    };
    DatosDireccionComponent.prototype.DireccionCompleted = function () {
        var paisId = null;
        var estadoId = null;
        var municipioId = null;
        var coloniaId = null;
        var cp = null;
        var calle = null;
        var numeroExterior = null;
        paisId = this.formDireccion.get('paisId').value;
        estadoId = this.formDireccion.get('estadoId').value;
        municipioId = this.formDireccion.get('municipioId').value;
        coloniaId = this.formDireccion.get('coloniaId').value;
        cp = this.formDireccion.get('codigoPostal').value;
        calle = this.formDireccion.get('calle').value;
        numeroExterior = this.formDireccion.get('numeroExterior').value;
        if (this.viveMexico) {
            if (paisId != null && estadoId != null && municipioId != null && coloniaId != null && (cp != null && cp != '') && (calle != null && calle != '') && (numeroExterior != null && numeroExterior != '')) {
                this.direccionCompleted = true;
            }
            else {
                this.direccionCompleted = false;
            }
        }
        else {
            if (paisId != null && (cp != null && cp != '')) {
                this.direccionCompleted = true;
            }
            else {
                this.direccionCompleted = false;
            }
        }
    };
    DatosDireccionComponent.prototype.Save = function () {
        var _this = this;
        this._DireccionService.DireccionCandidato(this.formDireccion.value)
            .subscribe(function (PersonaId) {
            //this.formDatosDeContacto.markAsPristine();
            _this._Router.navigate(['DatosPerfilComponent', PersonaId]);
        });
    };
    return DatosDireccionComponent;
}());
__decorate([
    core_1.ViewChild('pais'),
    __metadata("design:type", primeng_1.AutoComplete)
], DatosDireccionComponent.prototype, "autocompletePaisCharge", void 0);
__decorate([
    core_1.ViewChild('estado'),
    __metadata("design:type", primeng_1.AutoComplete)
], DatosDireccionComponent.prototype, "autocompleteEstadoCharge", void 0);
__decorate([
    core_1.ViewChild('municipio'),
    __metadata("design:type", primeng_1.AutoComplete)
], DatosDireccionComponent.prototype, "autocompleteMunicipioCharge", void 0);
__decorate([
    core_1.ViewChild('colonia'),
    __metadata("design:type", primeng_1.AutoComplete)
], DatosDireccionComponent.prototype, "autocompleteColoniaCharge", void 0);
DatosDireccionComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/Components/FormulariosIniciales/DatosDireccion.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, catalogos_service_1.CatalogosService,
        router_1.Router, Direccion_Service_1.DireccionService,
        router_1.ActivatedRoute])
], DatosDireccionComponent);
exports.DatosDireccionComponent = DatosDireccionComponent;
//# sourceMappingURL=DatosDireccion.component.js.map