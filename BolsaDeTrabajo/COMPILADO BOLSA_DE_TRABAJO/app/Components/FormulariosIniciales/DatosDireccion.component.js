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
        this.ProfileName = '';
        this.Oculto = true;
        this.showMenu = true;
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
            codigoPostal: [''],
            colonia: [''],
            coloniaId: [],
            calle: [''],
            numeroExterior: [''],
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