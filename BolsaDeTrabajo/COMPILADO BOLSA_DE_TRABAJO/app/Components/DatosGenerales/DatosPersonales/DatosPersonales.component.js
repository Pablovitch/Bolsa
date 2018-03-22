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
var alta_candidato_validators_1 = require("../../alta.candidato.validators");
var DatosGenerales_service_1 = require("../../../Services/DatosGenerales.service");
var catalogos_service_1 = require("../../../Services/catalogos.service");
var ApiCatalogos_1 = require("../../../Shared/ApiCatalogos");
var DatosPersonalesComponent = (function () {
    function DatosPersonalesComponent(_DatosGeneralesService, fb, _Router, _Route, _catalogosService) {
        this._DatosGeneralesService = _DatosGeneralesService;
        this.fb = fb;
        this._Router = _Router;
        this._Route = _Route;
        this._catalogosService = _catalogosService;
        this.Edit = false;
        this.esMexicano = true;
        this.discapacitado = false;
        this.defaultStr = '';
        this.telefonoValidate = true;
        this.metodoContacto = true;
        this.formDatosPersonales = fb.group({
            candidatoId: [],
            paisNacimiento: [''],
            paisNacimientoId: [null, forms_1.Validators.required],
            estadoNacimiento: [''],
            estadoNacimientoId: [null, forms_1.Validators.required],
            municipioNacimiento: [''],
            municipioNacimientoId: [null],
            codigoPostal: [''],
            generoId: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                ])],
            estadoCivilId: [null],
            esDiscapacitado: [false],
            tipoDiscapacidadId: [null],
            puedeViajar: [false],
            puedeRehubicarse: [false],
            telCelular: [],
            telCasa: [],
            telOficina: [],
            correoElectronico: [true],
            celular: [false],
            whatsApp: [false],
            telLocal: [false],
            fechaNacimiento: ['', forms_1.Validators.required],
        });
    }
    DatosPersonalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };
        this.tr = {
            firstDayOfWeek: 1
        };
        var today = new Date();
        var month = today.getMonth();
        var year = today.getFullYear();
        var prevMonth = (month === 0) ? 11 : month - 1;
        var prevYear = (prevMonth === 11) ? year - 1 : year;
        var nextMonth = (month === 11) ? 0 : month + 1;
        var nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
        var invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
        this.formDatosPersonales.get('candidatoId').setValue(this.CandidatoId);
        this.edoCivilDropdown();
        this.sexosDropdown();
        this._DatosGeneralesService.GetDatosPersonales(this.CandidatoId)
            .subscribe(function (PersonalData) {
            _this.formDatosPersonales.patchValue({
                paisNacimiento: PersonalData.paisNacimiento,
                paisNacimientoId: PersonalData.paisNacimientoId,
                estadoNacimiento: PersonalData.estadoNacimiento,
                estadoNacimientoId: PersonalData.estadoNacimientoId,
                municipioNacimiento: PersonalData.municipioNacimiento,
                municipioNacimientoId: PersonalData.municipioNacimientoId,
                codigoPostal: PersonalData.codigoPostal,
                generoId: PersonalData.generoId,
                estadoCivilId: PersonalData.estadoCivilId,
                esDiscapacitado: PersonalData.esDiscapacitado,
                tipoDiscapacidadId: PersonalData.tipoDiscapacidadId,
                puedeViajar: PersonalData.puedeViajar,
                puedeRehubicarse: PersonalData.puedeRehubicarse,
                telCelular: PersonalData.telCelular,
                telCasa: PersonalData.telCasa,
                telOficina: PersonalData.telOficina,
                correoElectronico: PersonalData.correoElectronico,
                celular: PersonalData.celular,
                whatsApp: PersonalData.whatsApp,
                telLocal: PersonalData.telLocal,
                fechaNacimiento: new Date(PersonalData.fechaNacimiento)
            });
            _this.PaisNacimiento = PersonalData.paisNacimiento.pais;
            _this.EstadoNacimiento = PersonalData.estadoNacimiento.estado;
            _this.MunicipioNacimiento = (PersonalData.municipioNacimiento == null) ? _this.defaultStr : PersonalData.municipioNacimiento.municipio;
            _this.GeneroOnChange(PersonalData.generoId);
            if (PersonalData.estadoCivilId > 0) {
                _this.EdoCivilOnChange(PersonalData.estadoCivilId);
            }
            if (PersonalData.esDiscapacitado) {
                _this.showTiposDiscapacidades(PersonalData.esDiscapacitado);
            }
        });
    };
    DatosPersonalesComponent.prototype.ValidarTelefonos = function () {
        var celular = this.formDatosPersonales.get('telCelular').value;
        var casa = this.formDatosPersonales.get('telCasa').value;
        var oficina = this.formDatosPersonales.get('telOficina').value;
        if (celular != null && !this.ValidarTelefono(celular)) {
            celular = null;
            this.formDatosPersonales.get('telCelular').setValue(null);
        }
        if (casa != null && !this.ValidarTelefono(casa)) {
            casa = null;
            this.formDatosPersonales.get('telCasa').setValue(null);
        }
        if (oficina != null && !this.ValidarTelefono(oficina)) {
            oficina = null;
            this.formDatosPersonales.get('telOficina').setValue(null);
        }
        if (celular == null && casa == null && oficina == null) {
            this.telefonoValidate = false;
        }
        else {
            this.telefonoValidate = true;
        }
    };
    DatosPersonalesComponent.prototype.ValidarTelefono = function (telefono) {
        if (telefono.trim().length != 10) {
            return false;
        }
        else {
            return true;
        }
    };
    DatosPersonalesComponent.prototype.ValidarMetodoContacto = function () {
        var email = this.formDatosPersonales.get('correoElectronico').value;
        var celular = this.formDatosPersonales.get('celular').value;
        var whatsapp = this.formDatosPersonales.get('whatsApp').value;
        var telLocal = this.formDatosPersonales.get('telLocal').value;
        if (email == true || celular == true || whatsapp == true || telLocal == true) {
            this.metodoContacto = true;
        }
        else {
            this.metodoContacto = false;
        }
    };
    DatosPersonalesComponent.prototype.edoCivilDropdown = function () {
        var _this = this;
        this._catalogosService.getEstadosCiviles(ApiCatalogos_1.Catalogos.ESTADOS_CIVILES)
            .then(function (edosCiviles) {
            _this.estadosCiviles = edosCiviles;
        });
    };
    DatosPersonalesComponent.prototype.EdoCivilOnChange = function (value) {
        this.EdoCivil = this.estadosCiviles.find(function (x) { return x.id == value; }).estadoCivil;
    };
    DatosPersonalesComponent.prototype.sexosDropdown = function () {
        var _this = this;
        this._catalogosService.getEstadosCiviles(ApiCatalogos_1.Catalogos.SEXOS).then(function (generos) {
            _this.generos = generos;
        });
    };
    DatosPersonalesComponent.prototype.GeneroOnChange = function (value) {
        this.Genero = this.generos.find(function (x) { return x.id == value; }).genero;
    };
    DatosPersonalesComponent.prototype.DiscapacidadOnChange = function (value) {
        this.Discapacidad = this.discapacidades.find(function (x) { return x.id == value; }).tipoDiscapacidad;
    };
    DatosPersonalesComponent.prototype.showTiposDiscapacidades = function (isChecked) {
        var _this = this;
        this.discapacitado = isChecked;
        if (isChecked) {
            this._catalogosService.getDiscapacidades(ApiCatalogos_1.Catalogos.DISCAPACIDADES)
                .subscribe(function (discapacidades) {
                _this.discapacidades = discapacidades;
            });
        }
    };
    DatosPersonalesComponent.prototype.filterCountrySingle = function (event) {
        var _this = this;
        var query = event.query;
        this._catalogosService.getPaises(ApiCatalogos_1.Catalogos.PAISES, query).then(function (countries) {
            _this.filteredCountriesSingle = countries;
        });
    };
    DatosPersonalesComponent.prototype.SetPaisNacimiento = function (value) {
        if (value.id > 0) {
            if (value.pais.toString().toLowerCase() == 'mexico') {
                this.esMexicano = true;
            }
            else {
                this.esMexicano = false;
            }
        }
        this.PaisNacimiento = value.pais;
        this.formDatosPersonales.get('paisNacimientoId').setValue(value.id);
    };
    DatosPersonalesComponent.prototype.ValidatePais = function () {
        if (this.formDatosPersonales.get('paisNacimiento').value != null) {
            this.formDatosPersonales.get('paisNacimientoId').setValue(null);
            this.PaisNacimiento = '';
        }
    };
    DatosPersonalesComponent.prototype.filterStateSingle = function (event) {
        var _this = this;
        var pais = this.formDatosPersonales.get('paisNacimientoId').invalid;
        if (pais) {
            this.filteredStatesSingle = [{ id: 0, estado: "**Seleccione un país**", clave: "X", paisId: 0 }];
            return;
        }
        var query = event.query;
        this._catalogosService.getEstados(ApiCatalogos_1.Catalogos.ESTADOS, query).then(function (states) {
            _this.filteredStatesSingle = states;
        });
    };
    DatosPersonalesComponent.prototype.setEstadoNacimiento = function (value) {
        if (value.id > 0) {
            this.EstadoNacimiento = value.estado;
            this.formDatosPersonales.get('estadoNacimientoId').setValue(value.id);
        }
    };
    DatosPersonalesComponent.prototype.ValidateEstado = function () {
        if (this.formDatosPersonales.get('estadoNacimiento').value != null) {
            this.formDatosPersonales.get('estadoNacimientoId').setValue(null);
            this.EstadoNacimiento = '';
        }
    };
    DatosPersonalesComponent.prototype.filterTownsSingle = function (event) {
        var _this = this;
        var estado = this.formDatosPersonales.get('estadoNacimientoId').invalid;
        if (estado) {
            this.filteredTownsSingle = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDatosPersonales.get('estadoNacimientoId').value;
        var query = event.query;
        this._catalogosService.getMunicipios(ApiCatalogos_1.Catalogos.MUNICIPIOS, estadoId, query)
            .then(function (towns) {
            _this.filteredTownsSingle = towns;
        });
    };
    DatosPersonalesComponent.prototype.setMunicipioNacimiento = function (value) {
        if (value.id > 0) {
            this.MunicipioNacimiento = value.municipio;
            this.formDatosPersonales.get('municipioNacimientoId').setValue(value.id);
        }
    };
    DatosPersonalesComponent.prototype.ValidateMunicipio = function () {
        if (this.formDatosPersonales.get('municipioNacimiento').value != null) {
            this.formDatosPersonales.get('municipioNacimientoId').setValue(null);
            this.MunicipioNacimiento = '';
        }
    };
    DatosPersonalesComponent.prototype.OnEdit = function () {
        this.Edit = true;
    };
    DatosPersonalesComponent.prototype.DiscardEdit = function () {
        this.Edit = false;
    };
    DatosPersonalesComponent.prototype.DetachedForm = function () {
        this.formDatosPersonales.get('paisNacimiento').setValue(null);
        this.formDatosPersonales.get('estadoNacimiento').setValue(null);
        this.formDatosPersonales.get('municipioNacimiento').setValue(null);
    };
    DatosPersonalesComponent.prototype.Save = function () {
        var _this = this;
        this._DatosGeneralesService.EditDatosPersonales(this.formDatosPersonales.value, this.CandidatoId)
            .subscribe(function (x) {
            //this._Router.navigate(['']);
            _this.Edit = false;
        });
    };
    return DatosPersonalesComponent;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], DatosPersonalesComponent.prototype, "CandidatoId", void 0);
DatosPersonalesComponent = __decorate([
    core_1.Component({
        selector: 'damsa-personal-data',
        templateUrl: '/app/Components/DatosGenerales/DatosPersonales/DatosPersonales.component.html'
    }),
    __metadata("design:paramtypes", [DatosGenerales_service_1.DatosGeneralesService,
        forms_1.FormBuilder, router_1.Router,
        router_1.ActivatedRoute,
        catalogos_service_1.CatalogosService])
], DatosPersonalesComponent);
exports.DatosPersonalesComponent = DatosPersonalesComponent;
//# sourceMappingURL=DatosPersonales.component.js.map