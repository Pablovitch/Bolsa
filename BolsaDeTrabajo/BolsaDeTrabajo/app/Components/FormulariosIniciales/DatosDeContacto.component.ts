import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { CalendarModule, AutoCompleteModule, AutoComplete } from 'primeng/primeng';
import { MomentModule } from 'angular2-moment';

import { AltaCandidatoValidator } from '../alta.candidato.validators';
import { CURPValidator } from '../Validators/CURP.validator';
import { CatalogosService } from '../../Services/catalogos.service';
import { Catalogos } from '../../Shared/ApiCatalogos';
import { DatosCandidatoService } from '../../Services/DatosDeCandidato.Service'
import { UsuarioService, Usuario } from '../../Services/Usuario';

@Component({
    selector: 'damsa-datos-contacto',
    templateUrl:'/app/Components/FormulariosIniciales/DatosDeContacto.component.html'
})
export class DatosDeContactoComponent {
    formDatosDeContacto: FormGroup;
    estadosCiviles: any[];
    tiposTelefonos: any[];
    curpValida: boolean = false;
    esMexicano: boolean = true;
    ExisteCurp: boolean = false;
    userId: string;
    generos: any[];
    user: Usuario;
    telefonoRequerido: boolean = false;
    emailRequerido: boolean = false;
    CandidatoId: string = null;
    Oculto: boolean = true;
    showMenu: boolean = false;

    constructor(
        private fb: FormBuilder, private _catalogosService: CatalogosService,
        private _Router: Router, private _DatosCandidatoService: DatosCandidatoService,
        private _Route: ActivatedRoute, private _ValidatorCURP: CURPValidator,
        private _Usuario: UsuarioService
    ) {
        var parametros = this._Route.params.subscribe(params => {
            this.userId = params["Id"];

            this.formDatosDeContacto = fb.group({
                userId: [],
                imgProfileUrl: [''],
                Nombre: ['', Validators.required],
                apellidoPaterno: ['', Validators.required],
                apellidoMaterno: [''],
                email: ['',
                    Validators.compose([AltaCandidatoValidator.ValidarCorreo])
                ],
                confirmEmail: ['',
                    Validators.compose([AltaCandidatoValidator.ConfirmarCorreo])],
                paisNacimiento: [''],
                paisNacimientoId: [null, Validators.required],
                estadoNacimiento: [''],
                estadoNacimientoId: [null],

                generoId: ['Género', Validators.compose([
                    Validators.required, AltaCandidatoValidator.ListaValidator
                ])],
                tipoTelefonoId: ['Tipo Teléfono', Validators.compose([AltaCandidatoValidator.ListaValidator])],
                telefono: [{ value: '', disabled: false }, Validators.required],
                fechaNacimiento: ['', Validators.required],
                curp: ['', Validators.compose([Validators.required])]
            });
            this.sexosDropdown();
            this.TiposTelefonosDropdown();

            this._Usuario.GetUsuario(this.userId)
                .subscribe(data => {
                    this.user = data;
                    if (this.user == null) {
                        this._Router.navigate(['not-found']);
                    }
                    if (this.user.emailConfirmed) {
                        this.formDatosDeContacto.get('email').disable();
                        this.formDatosDeContacto.get('confirmEmail').disable();
                        this.formDatosDeContacto.get('email').setValue(this.user.email);
                        this.formDatosDeContacto.get('confirmEmail').setValue(this.user.email);
                    }
                    else if (this.user.phoneNumberConfirmed) {
                        this.formDatosDeContacto.get('tipoTelefonoId').disable();
                        this.formDatosDeContacto.get('telefono').disable();
                        this.formDatosDeContacto.get('tipoTelefonoId').setValue(1);
                        this.formDatosDeContacto.get('telefono').setValue(this.user.phoneNumber);
                        this.formDatosDeContacto.get('confirmEmail').setValue('');
                    }
                })
        });

    }


    ShowMenu() {
        this.showMenu = true;
    }

    minDate: Date;
    maxDate: Date;
    es: any;
    tr: any;
    invalidDates: Array<Date>
    ngOnInit() {

        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
        }

        this.tr = {
            firstDayOfWeek: 1
        }

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
    }

    filteredCountriesSingle: any[];
    filterCountrySingle(event: any) {
        let query = event.query;
        this._catalogosService.getPaises(Catalogos.PAISES, query).then(countries => {
            this.filteredCountriesSingle = countries;

        });
    }



    SetPaisNacimiento(value: any) {
        if (value.id > 0) {
            if (value.pais.toString().toLowerCase() == 'mexico') {
                this.esMexicano = true
            } else {
                this.esMexicano = false;
            }
        }
        this.formDatosDeContacto.get('paisNacimientoId').setValue(value.id);
        this.formDatosDeContacto.get('paisNacimiento').setValue(null);
        this.ValidandoCURP();
    }
    @ViewChild('paisNacimiento') autocompletePaisCharge: AutoComplete;

    doClearPais() {
        this.autocompletePaisCharge.inputEL.nativeElement.value = '';
    }
    onClearPais()
    {
        this.formDatosDeContacto.get('paisNacimientoId').setValue(null);
        this.formDatosDeContacto.get('paisNacimiento').setValue(null);
    }
    onBlurPais()
    {
        let paisId = this.formDatosDeContacto.get('paisNacimientoId').value;
        if (paisId == null)
        {
            this.doClearPais();
        }
    }
    onClearEstado() {
        this.formDatosDeContacto.get('estadoNacimientoId').setValue(null);
        this.formDatosDeContacto.get('estadoNacimiento').setValue(null);
    }
    onBlurEstado() {
        let paisId = this.formDatosDeContacto.get('estadoNacimientoId').value;
        if (paisId == null) {
            this.doClear();
        }
    }
    @ViewChild('estadoNacimiento') autocompleteEstadoCharge: AutoComplete;

    doClear() {
        this.autocompleteEstadoCharge.inputEL.nativeElement.value = '';
    }


    filteredStatesSingle: any[];
    filterStateSingle(event: any) {
        let pais: boolean = this.formDatosDeContacto.get('paisNacimientoId').invalid;
        if (pais) {
            this.filteredStatesSingle = [{ id: 0, estado: "**Seleccione un país**", clave: "X", paisId: 0 }];
            return;
        }
        let query = event.query;
        this._catalogosService.getEstados(Catalogos.ESTADOS, query).then(states => {
            this.filteredStatesSingle = states;

        });
    }

    setEstadoNacimiento(value: any) {
        if (value.id > 0) {
            this.formDatosDeContacto.get('estadoNacimientoId').setValue(value.id);
        }
        else {
            this.formDatosDeContacto.get('estadoNacimiento').setValue(null);
        }
        this.ValidandoCURP();
    }

    filteredTownsSingle: any[];
    filterTownsSingle(event: any) {
        let estado: boolean = this.formDatosDeContacto.get('estadoNacimientoId').invalid;
        if (estado) {
            this.filteredTownsSingle = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDatosDeContacto.get('estadoNacimientoId').value;
        let query = event.query;
        this._catalogosService.getMunicipios(Catalogos.MUNICIPIOS, estadoId, query)
            .then(towns => {
                this.filteredTownsSingle = towns;
            });
    }
    setMunicipioNacimiento(value: any) {
        if (value.id > 0) {
            this.formDatosDeContacto.get('municipioNacimientoId').setValue(value.id);
        }
        this.formDatosDeContacto.get('municipioNacimiento').setValue(null);
    }

    TiposTelefonosDropdown() {
        this._catalogosService.getTiposTelefonos(Catalogos.TIPOSTELEFONOS)
            .then(TiposTelefonos => {
                this.tiposTelefonos = TiposTelefonos;
            });
    }

    sexosDropdown() {
        this._catalogosService.getEstadosCiviles(Catalogos.SEXOS).then(generos => {
            this.generos = generos;
        });
        this.ValidandoCURP();
    }


    filteredCountries: any[];
    filterCountry(event: any) {
        let query = event.query;
        this._catalogosService.getPaises(Catalogos.PAISES, query).then(countries => {
            this.filteredCountries = countries;

        });
    }



    ValidandoCURP() {

            if (this.formDatosDeContacto.get('curp').value == null) {
                return;
            }
            var curp = this.formDatosDeContacto.get('curp').value;
            if (curp.trim().length != 18) {
                this.formDatosDeContacto.get('curp').setValue(null);
                return;
            }
            var isValid = this._ValidatorCURP.ValidarCurp(
                this.formDatosDeContacto.get('Nombre').value,
                this.formDatosDeContacto.get('apellidoPaterno').value,
                this.formDatosDeContacto.get('apellidoMaterno').value,
                this.formDatosDeContacto.get('fechaNacimiento').value,
                this.formDatosDeContacto.get('generoId').value,
                this.formDatosDeContacto.get('estadoNacimiento').value,
                this.formDatosDeContacto.get('curp').value,
                this.esMexicano

            );
            this.ExisteCurp = false;
            if (isValid) {
                this._DatosCandidatoService.ExistCurp(this.formDatosDeContacto.get('curp').value, )
                    .subscribe(data => {
                        this.ExisteCurp = data;
                        this.curpValida = true;

                    })

            } else {
                this.curpValida = false;
            }
        }

    onNombreChangue(value: string) {
        this.formDatosDeContacto.get('Nombre').setValue(value.toUpperCase());
    }
    onApellidoPaternoChangue(value: string) {
        this.formDatosDeContacto.get('apellidoPaterno').setValue(value.toUpperCase());
    }
    onApellidoMaternoChangue(value: string) {
        this.formDatosDeContacto.get('apellidoMaterno').setValue(value.toUpperCase());
    }
    onCURPChangue(value: string) {
        this.formDatosDeContacto.get('curp').setValue(value.toUpperCase());
    }

        Save() {
            this.formDatosDeContacto.get('estadoNacimiento').setValue(null);
            this._DatosCandidatoService.DatosContactoCandidato(this.formDatosDeContacto.getRawValue(), this.userId)
                .subscribe(id => {
                    //this.formDatosDeContacto.markAsPristine();
                    this._Router.navigate(['Direccion', id]);
                });
    }

}


