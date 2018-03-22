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
var alta_candidato_validators_1 = require("../alta.candidato.validators");
var CURP_validator_1 = require("../Validators/CURP.validator");
var catalogos_service_1 = require("../../Services/catalogos.service");
var ApiCatalogos_1 = require("../../Shared/ApiCatalogos");
var DatosDeCandidato_Service_1 = require("../../Services/DatosDeCandidato.Service");
var Usuario_1 = require("../../Services/Usuario");
var DatosDeContactoComponent = (function () {
    function DatosDeContactoComponent(fb, _catalogosService, _Router, _DatosCandidatoService, _Route, _ValidatorCURP, _Usuario) {
        var _this = this;
        this.fb = fb;
        this._catalogosService = _catalogosService;
        this._Router = _Router;
        this._DatosCandidatoService = _DatosCandidatoService;
        this._Route = _Route;
        this._ValidatorCURP = _ValidatorCURP;
        this._Usuario = _Usuario;
        this.curpValida = false;
        this.esMexicano = true;
        this.ExisteCurp = false;
        this.telefonoRequerido = false;
        this.emailRequerido = false;
        this.CandidatoId = null;
        this.Oculto = true;
        this.showMenu = false;
        var parametros = this._Route.params.subscribe(function (params) {
            _this.userId = params["Id"];
            _this.formDatosDeContacto = fb.group({
                userId: [],
                imgProfileUrl: [''],
                Nombre: ['', forms_1.Validators.required],
                apellidoPaterno: ['', forms_1.Validators.required],
                apellidoMaterno: [''],
                email: ['',
                    forms_1.Validators.compose([alta_candidato_validators_1.AltaCandidatoValidator.ValidarCorreo])
                ],
                confirmEmail: ['',
                    forms_1.Validators.compose([alta_candidato_validators_1.AltaCandidatoValidator.ConfirmarCorreo])],
                paisNacimiento: [''],
                paisNacimientoId: [null, forms_1.Validators.required],
                estadoNacimiento: [''],
                estadoNacimientoId: [null],
                generoId: ['Género', forms_1.Validators.compose([
                        forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator
                    ])],
                tipoTelefonoId: ['Tipo Teléfono', forms_1.Validators.compose([alta_candidato_validators_1.AltaCandidatoValidator.ListaValidator])],
                telefono: [{ value: '', disabled: false }, forms_1.Validators.required],
                fechaNacimiento: ['', forms_1.Validators.required],
                curp: ['', forms_1.Validators.compose([forms_1.Validators.required])]
            });
            _this.sexosDropdown();
            _this.TiposTelefonosDropdown();
            _this._Usuario.GetUsuario(_this.userId)
                .subscribe(function (data) {
                _this.user = data;
                if (_this.user == null) {
                    _this._Router.navigate(['not-found']);
                }
                if (_this.user.emailConfirmed) {
                    _this.formDatosDeContacto.get('email').disable();
                    _this.formDatosDeContacto.get('confirmEmail').disable();
                    _this.formDatosDeContacto.get('email').setValue(_this.user.email);
                    _this.formDatosDeContacto.get('confirmEmail').setValue(_this.user.email);
                }
                else if (_this.user.phoneNumberConfirmed) {
                    _this.formDatosDeContacto.get('tipoTelefonoId').disable();
                    _this.formDatosDeContacto.get('telefono').disable();
                    _this.formDatosDeContacto.get('tipoTelefonoId').setValue(1);
                    _this.formDatosDeContacto.get('telefono').setValue(_this.user.phoneNumber);
                    _this.formDatosDeContacto.get('confirmEmail').setValue('');
                }
            });
        });
    }
    DatosDeContactoComponent.prototype.ShowMenu = function () {
        this.showMenu = true;
    };
    DatosDeContactoComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
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
    };
    DatosDeContactoComponent.prototype.filterCountrySingle = function (event) {
        var _this = this;
        var query = event.query;
        this._catalogosService.getPaises(ApiCatalogos_1.Catalogos.PAISES, query).then(function (countries) {
            _this.filteredCountriesSingle = countries;
        });
    };
    DatosDeContactoComponent.prototype.SetPaisNacimiento = function (value) {
        if (value.id > 0) {
            if (value.pais.toString().toLowerCase() == 'mexico') {
                this.esMexicano = true;
            }
            else {
                this.esMexicano = false;
            }
        }
        this.formDatosDeContacto.get('paisNacimientoId').setValue(value.id);
        this.formDatosDeContacto.get('paisNacimiento').setValue(null);
        this.ValidandoCURP();
    };
    DatosDeContactoComponent.prototype.doClearPais = function () {
        this.autocompletePaisCharge.inputEL.nativeElement.value = '';
    };
    DatosDeContactoComponent.prototype.onClearPais = function () {
        this.formDatosDeContacto.get('paisNacimientoId').setValue(null);
        this.formDatosDeContacto.get('paisNacimiento').setValue(null);
    };
    DatosDeContactoComponent.prototype.onBlurPais = function () {
        var paisId = this.formDatosDeContacto.get('paisNacimientoId').value;
        if (paisId == null) {
            this.doClearPais();
        }
    };
    DatosDeContactoComponent.prototype.onClearEstado = function () {
        this.formDatosDeContacto.get('estadoNacimientoId').setValue(null);
        this.formDatosDeContacto.get('estadoNacimiento').setValue(null);
    };
    DatosDeContactoComponent.prototype.onBlurEstado = function () {
        var paisId = this.formDatosDeContacto.get('estadoNacimientoId').value;
        if (paisId == null) {
            this.doClear();
        }
    };
    DatosDeContactoComponent.prototype.doClear = function () {
        this.autocompleteEstadoCharge.inputEL.nativeElement.value = '';
    };
    DatosDeContactoComponent.prototype.filterStateSingle = function (event) {
        var _this = this;
        var pais = this.formDatosDeContacto.get('paisNacimientoId').invalid;
        if (pais) {
            this.filteredStatesSingle = [{ id: 0, estado: "**Seleccione un país**", clave: "X", paisId: 0 }];
            return;
        }
        var query = event.query;
        this._catalogosService.getEstados(ApiCatalogos_1.Catalogos.ESTADOS, query).then(function (states) {
            _this.filteredStatesSingle = states;
        });
    };
    DatosDeContactoComponent.prototype.setEstadoNacimiento = function (value) {
        if (value.id > 0) {
            this.formDatosDeContacto.get('estadoNacimientoId').setValue(value.id);
        }
        else {
            this.formDatosDeContacto.get('estadoNacimiento').setValue(null);
        }
        this.ValidandoCURP();
    };
    DatosDeContactoComponent.prototype.filterTownsSingle = function (event) {
        var _this = this;
        var estado = this.formDatosDeContacto.get('estadoNacimientoId').invalid;
        if (estado) {
            this.filteredTownsSingle = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDatosDeContacto.get('estadoNacimientoId').value;
        var query = event.query;
        this._catalogosService.getMunicipios(ApiCatalogos_1.Catalogos.MUNICIPIOS, estadoId, query)
            .then(function (towns) {
            _this.filteredTownsSingle = towns;
        });
    };
    DatosDeContactoComponent.prototype.setMunicipioNacimiento = function (value) {
        if (value.id > 0) {
            this.formDatosDeContacto.get('municipioNacimientoId').setValue(value.id);
        }
        this.formDatosDeContacto.get('municipioNacimiento').setValue(null);
    };
    DatosDeContactoComponent.prototype.TiposTelefonosDropdown = function () {
        var _this = this;
        this._catalogosService.getTiposTelefonos(ApiCatalogos_1.Catalogos.TIPOSTELEFONOS)
            .then(function (TiposTelefonos) {
            _this.tiposTelefonos = TiposTelefonos;
        });
    };
    DatosDeContactoComponent.prototype.sexosDropdown = function () {
        var _this = this;
        this._catalogosService.getEstadosCiviles(ApiCatalogos_1.Catalogos.SEXOS).then(function (generos) {
            _this.generos = generos;
        });
        this.ValidandoCURP();
    };
    DatosDeContactoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this._catalogosService.getPaises(ApiCatalogos_1.Catalogos.PAISES, query).then(function (countries) {
            _this.filteredCountries = countries;
        });
    };
    DatosDeContactoComponent.prototype.ValidandoCURP = function () {
        var _this = this;
        if (this.formDatosDeContacto.get('curp').value == null) {
            return;
        }
        var curp = this.formDatosDeContacto.get('curp').value;
        if (curp.trim().length != 18) {
            this.formDatosDeContacto.get('curp').setValue(null);
            return;
        }
        var isValid = this._ValidatorCURP.ValidarCurp(this.formDatosDeContacto.get('Nombre').value, this.formDatosDeContacto.get('apellidoPaterno').value, this.formDatosDeContacto.get('apellidoMaterno').value, this.formDatosDeContacto.get('fechaNacimiento').value, this.formDatosDeContacto.get('generoId').value, this.formDatosDeContacto.get('estadoNacimiento').value, this.formDatosDeContacto.get('curp').value, this.esMexicano);
        this.ExisteCurp = false;
        if (isValid) {
            this._DatosCandidatoService.ExistCurp(this.formDatosDeContacto.get('curp').value)
                .subscribe(function (data) {
                _this.ExisteCurp = data;
                _this.curpValida = true;
            });
        }
        else {
            this.curpValida = false;
        }
    };
    DatosDeContactoComponent.prototype.onNombreChangue = function (value) {
        this.formDatosDeContacto.get('Nombre').setValue(value.toUpperCase());
    };
    DatosDeContactoComponent.prototype.onApellidoPaternoChangue = function (value) {
        this.formDatosDeContacto.get('apellidoPaterno').setValue(value.toUpperCase());
    };
    DatosDeContactoComponent.prototype.onApellidoMaternoChangue = function (value) {
        this.formDatosDeContacto.get('apellidoMaterno').setValue(value.toUpperCase());
    };
    DatosDeContactoComponent.prototype.onCURPChangue = function (value) {
        this.formDatosDeContacto.get('curp').setValue(value.toUpperCase());
    };
    DatosDeContactoComponent.prototype.Save = function () {
        var _this = this;
        this.formDatosDeContacto.get('estadoNacimiento').setValue(null);
        this._DatosCandidatoService.DatosContactoCandidato(this.formDatosDeContacto.getRawValue(), this.userId)
            .subscribe(function (id) {
            //this.formDatosDeContacto.markAsPristine();
            _this._Router.navigate(['Direccion', id]);
        });
    };
    return DatosDeContactoComponent;
}());
__decorate([
    core_1.ViewChild('paisNacimiento'),
    __metadata("design:type", primeng_1.AutoComplete)
], DatosDeContactoComponent.prototype, "autocompletePaisCharge", void 0);
__decorate([
    core_1.ViewChild('estadoNacimiento'),
    __metadata("design:type", primeng_1.AutoComplete)
], DatosDeContactoComponent.prototype, "autocompleteEstadoCharge", void 0);
DatosDeContactoComponent = __decorate([
    core_1.Component({
        selector: 'damsa-datos-contacto',
        templateUrl: '/app/Components/FormulariosIniciales/DatosDeContacto.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, catalogos_service_1.CatalogosService,
        router_1.Router, DatosDeCandidato_Service_1.DatosCandidatoService,
        router_1.ActivatedRoute, CURP_validator_1.CURPValidator,
        Usuario_1.UsuarioService])
], DatosDeContactoComponent);
exports.DatosDeContactoComponent = DatosDeContactoComponent;
//# sourceMappingURL=DatosDeContacto.component.js.map