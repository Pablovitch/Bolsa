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
var catalogos_service_1 = require("../../../Services/catalogos.service");
var Direccion_Service_1 = require("../../../Services/Direccion.Service");
var ApiCatalogos_1 = require("../../../Shared/ApiCatalogos");
var DireccionComponent = (function () {
    function DireccionComponent(fb, _catalogosService, _Router, _DireccionService, _Route) {
        this.fb = fb;
        this._catalogosService = _catalogosService;
        this._Router = _Router;
        this._DireccionService = _DireccionService;
        this._Route = _Route;
        this.viveMexico = true;
        this.defaultStr = '';
        this.Edit = false;
        this.direccionCompleted = false;
        this.formDireccion = fb.group({
            personaId: [],
            id: [],
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
    }
    DireccionComponent.prototype.ngOnInit = function () {
        this.formDireccion.get('personaId').setValue(this.personaId);
        this.GetInitialData();
    };
    DireccionComponent.prototype.GetInitialData = function () {
        var _this = this;
        this._DireccionService.GetDireccion(this.personaId)
            .subscribe(function (direccion) {
            _this.formDireccion.patchValue({
                id: direccion.id,
                pais: direccion.pais,
                paisId: direccion.paisId,
                estado: direccion.estado,
                estadoId: direccion.estadoId,
                municipio: direccion.municipio,
                municipioId: direccion.municipioId,
                codigoPostal: direccion.codigoPostal,
                colonia: direccion.colonia,
                coloniaId: direccion.coloniaId,
                calle: direccion.calle,
                numeroExterior: direccion.numeroExterior,
                numeroInterior: direccion.numeroInterior
            });
            _this.Pais = direccion.pais.pais;
            _this.Estado = (direccion.estado == null) ? _this.defaultStr : direccion.estado.estado;
            _this.Municipio = (direccion.municipio == null) ? _this.defaultStr : direccion.municipio.municipio;
            _this.Colonia = (direccion.colonia == null) ? _this.defaultStr : direccion.colonia.colonia;
            _this.viveMexico = (_this.Pais.toLowerCase() != 'mexico') ? false : true;
            _this.DireccionCompleted();
            _this.validarViveMexico();
        });
    };
    //PAISES = '../api/paises/';
    DireccionComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this._catalogosService.getPaises(ApiCatalogos_1.Catalogos.PAISES, query).then(function (countries) {
            _this.filteredCountries = countries;
        });
    };
    DireccionComponent.prototype.setPais = function (value) {
        this.formDireccion.get('paisId').setValue(value.id);
        this.Pais = value.pais;
        if (value.pais.toString().toLowerCase() == "mexico") {
            this.viveMexico = true;
        }
        else {
            this.viveMexico = false;
        }
        this.validarViveMexico();
    };
    DireccionComponent.prototype.ValidatePais = function () {
        if (this.formDireccion.get('pais').value != null) {
            this.formDireccion.get('paisId').setValue(null);
            this.Pais = '';
        }
    };
    //ESTADOS = '../api/estados'
    DireccionComponent.prototype.filterState = function (event) {
        var _this = this;
        var estado = this.formDireccion.get('paisId').value;
        if (estado == null) {
            this.filteredStates = [{ id: 0, estado: "**Seleccione un país**", clave: "X", paisId: 0 }];
            return;
        }
        var query = event.query;
        this._catalogosService.getEstados(ApiCatalogos_1.Catalogos.ESTADOS, query).then(function (states) {
            _this.filteredStates = states;
        });
    };
    DireccionComponent.prototype.setEstado = function (value) {
        if (value.id > 0) {
            this.formDireccion.get('estadoId').setValue(value.id);
            this.Estado = value.estado;
        }
    };
    DireccionComponent.prototype.ValidateEstado = function () {
        if (this.formDireccion.get('estado').value != null) {
            this.formDireccion.get('estadoId').setValue(null);
            this.Estado = '';
        }
    };
    //MUNICIPIOS = '../api/municipios';
    DireccionComponent.prototype.filterTowns = function (event) {
        var _this = this;
        var estado = this.formDireccion.get('estadoId').invalid;
        if (estado) {
            this.filteredTowns = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDireccion.get('estadoId').value;
        var query = event.query;
        this._catalogosService.getMunicipios(ApiCatalogos_1.Catalogos.MUNICIPIOS, estadoId, query).then(function (towns) {
            _this.filteredTowns = towns;
        });
    };
    DireccionComponent.prototype.ValidateMunicipio = function () {
        if (this.formDireccion.get('municipio').value != null) {
            this.Municipio = '';
            this.formDireccion.get('municipioId').setValue(null);
        }
    };
    DireccionComponent.prototype.setMunicipio = function (value) {
        this.formDireccion.get('municipioId').setValue(value.id);
        this.Municipio = value.municipio;
    };
    DireccionComponent.prototype.filterColonias = function (event) {
        var _this = this;
        var postalCode = this.formDireccion.get('codigoPostal').value;
        var query = event.query;
        this._catalogosService.getColonia(ApiCatalogos_1.Catalogos.COLONIAS, postalCode, query).then(function (colonias) {
            _this.filteredColonias = colonias;
        });
    };
    //COLONIAS = '../api/colonias';
    DireccionComponent.prototype.buscarColonias = function () {
        var _this = this;
        if (!this.viveMexico) {
            return;
        }
        var postalCode = this.formDireccion.get('codigoPostal').value;
        this._catalogosService.getColonias(ApiCatalogos_1.Catalogos.COLONIAS, postalCode).
            then(function (colonias) {
            _this.filteredColonias = colonias;
        });
    };
    DireccionComponent.prototype.setColonia = function (value) {
        this.formDireccion.get('coloniaId').setValue(value.id);
        this.formDireccion.get('colonia').setValue(null);
        this.Colonia = value.colonia;
    };
    DireccionComponent.prototype.OnEdit = function () {
        this.Edit = true;
    };
    DireccionComponent.prototype.DiscardEdit = function () {
        this.GetInitialData();
        this.Edit = false;
    };
    DireccionComponent.prototype.validarViveMexico = function () {
        if (!this.viveMexico) {
            this.onClearEstado();
            this.formDireccion.get('estado').disable();
            this.onClearMunicipio();
            this.formDireccion.get('municipio').disable();
            this.onClearColonia();
            this.formDireccion.get('colonia').disable();
            this.formDireccion.get('calle').setValue(null);
            this.formDireccion.get('calle').disable();
            this.formDireccion.get('numeroExterior').setValue(null);
            this.formDireccion.get('numeroExterior').disable();
            this.formDireccion.get('numeroInterior').setValue(null);
            this.formDireccion.get('numeroInterior').disable();
        }
        else {
            this.formDireccion.get('estado').enable();
            this.formDireccion.get('municipio').enable();
            this.formDireccion.get('colonia').enable();
            this.formDireccion.get('calle').enable();
            this.formDireccion.get('numeroExterior').enable();
            this.formDireccion.get('numeroInterior').enable();
        }
    };
    DireccionComponent.prototype.DetachForm = function () {
        this.pais = this.formDireccion.get('pais').value;
        this.estado = this.formDireccion.get('estado').value;
        this.municipio = this.formDireccion.get('municipio').value;
        this.formDireccion.get('pais').setValue(null);
        this.formDireccion.get('municipio').setValue(null);
        this.formDireccion.get('estado').setValue(null);
    };
    DireccionComponent.prototype.doClearPais = function () {
        this.autocompletePaisCharge.inputEL.nativeElement.value = '';
    };
    DireccionComponent.prototype.onClearPais = function () {
        this.formDireccion.get('pais').setValue(null);
        this.formDireccion.get('paisId').setValue(null);
    };
    DireccionComponent.prototype.onBlurPais = function () {
        var paisId = this.formDireccion.get('paisId').value;
        if (paisId == null) {
            this.doClearPais();
        }
        this.DireccionCompleted();
    };
    DireccionComponent.prototype.onClearEstado = function () {
        this.formDireccion.get('estadoId').setValue(null);
        this.formDireccion.get('estado').setValue(null);
    };
    DireccionComponent.prototype.onBlurEstado = function () {
        var EstadoId = this.formDireccion.get('estadoId').value;
        if (EstadoId == null) {
            this.doClearEstado();
        }
        this.DireccionCompleted();
    };
    DireccionComponent.prototype.doClearEstado = function () {
        this.autocompleteEstadoCharge.inputEL.nativeElement.value = '';
    };
    DireccionComponent.prototype.onClearMunicipio = function () {
        this.formDireccion.get('municipioId').setValue(null);
        this.formDireccion.get('municipio').setValue(null);
    };
    DireccionComponent.prototype.onBlurMunicipio = function () {
        var municipioId = this.formDireccion.get('municipioId').value;
        if (municipioId == null) {
            this.doClearMunicipio();
        }
        this.DireccionCompleted();
    };
    DireccionComponent.prototype.doClearMunicipio = function () {
        this.autocompleteMunicipioCharge.inputEL.nativeElement.value = '';
    };
    DireccionComponent.prototype.onClearColonia = function () {
        this.formDireccion.get('coloniaId').setValue(null);
        this.formDireccion.get('colonia').setValue(null);
    };
    DireccionComponent.prototype.onBlurColonia = function () {
        var ColoniaId = this.formDireccion.get('coloniaId').value;
        if (ColoniaId == null) {
            this.doClearColonia();
        }
        this.DireccionCompleted();
    };
    DireccionComponent.prototype.doClearColonia = function () {
        this.autocompleteColoniaCharge.inputEL.nativeElement.value = '';
    };
    DireccionComponent.prototype.onCPChangue = function (value) {
        this.formDireccion.get('codigoPostal').setValue(value.toUpperCase());
        this.DireccionCompleted();
    };
    DireccionComponent.prototype.onCalleChangue = function (value) {
        this.formDireccion.get('calle').setValue(value.toUpperCase());
        this.DireccionCompleted();
    };
    DireccionComponent.prototype.onNumeroExteriorChangue = function (value) {
        this.formDireccion.get('numeroExterior').setValue(value.toUpperCase());
        this.DireccionCompleted();
    };
    DireccionComponent.prototype.onNumeroInteriorChangue = function (value) {
        this.formDireccion.get('numeroInterior').setValue(value.toUpperCase());
    };
    DireccionComponent.prototype.DireccionCompleted = function () {
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
    DireccionComponent.prototype.Save = function () {
        var _this = this;
        this.DetachForm();
        this._DireccionService.EditDireccion(this.formDireccion.value)
            .subscribe(function (PersonaId) {
            _this.formDireccion.get('pais').setValue(_this.pais);
            _this.formDireccion.get('municipio').setValue(_this.municipio);
            _this.formDireccion.get('estado').setValue(_this.estado);
            //this.formDatosDeContacto.markAsPristine();
            //this._Router.navigate(['DatosPerfilComponent', PersonaId]);
        });
        this.Edit = false;
    };
    return DireccionComponent;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], DireccionComponent.prototype, "personaId", void 0);
__decorate([
    core_1.ViewChild('pais'),
    __metadata("design:type", primeng_1.AutoComplete)
], DireccionComponent.prototype, "autocompletePaisCharge", void 0);
__decorate([
    core_1.ViewChild('estado'),
    __metadata("design:type", primeng_1.AutoComplete)
], DireccionComponent.prototype, "autocompleteEstadoCharge", void 0);
__decorate([
    core_1.ViewChild('municipio'),
    __metadata("design:type", primeng_1.AutoComplete)
], DireccionComponent.prototype, "autocompleteMunicipioCharge", void 0);
__decorate([
    core_1.ViewChild('colonia'),
    __metadata("design:type", primeng_1.AutoComplete)
], DireccionComponent.prototype, "autocompleteColoniaCharge", void 0);
DireccionComponent = __decorate([
    core_1.Component({
        selector: 'damsa-direccion',
        templateUrl: '/app/Components/DatosGenerales/Direccion/Direccion.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, catalogos_service_1.CatalogosService,
        router_1.Router, Direccion_Service_1.DireccionService,
        router_1.ActivatedRoute])
], DireccionComponent);
exports.DireccionComponent = DireccionComponent;
//# sourceMappingURL=Direccion.component.js.map