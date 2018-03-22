import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';
import { DatePipe } from '@angular/common';

import { AltaCandidatoValidator } from '../../alta.candidato.validators';
import { PerfilImageService } from '../../../Services/ProfileImage.service';
import { DatosGeneralesService } from '../../../Services/DatosGenerales.service';
import { CatalogosService } from '../../../Services/catalogos.service';
import { Catalogos } from '../../../Shared/ApiCatalogos';

import { Candidato, DatosPersonales } from '../../../Models/Candidato';
import { ITipoDiscapacidad } from '../../../Models/ITipoDiscapacidad';
@Component({
    selector: 'damsa-personal-data',
    templateUrl: '/app/Components/DatosGenerales/DatosPersonales/DatosPersonales.component.html'
})
export class DatosPersonalesComponent implements OnInit {
    formDatosPersonales: FormGroup;
    @Input('CandidatoId')
    CandidatoId: string;
    estadosCiviles: any[];
    generos: any[];
    discapacidades: ITipoDiscapacidad[];
    Edit: boolean = false; 
    esMexicano: boolean = true;
    discapacitado: boolean = false;
    defaultStr: string = '';
    PaisNacimiento: string;
    EstadoNacimiento: string;
    MunicipioNacimiento: string;
    Genero: string;
    EdoCivil: string;
    Discapacidad: string;
    telefonoValidate: boolean = true;
    metodoContacto: boolean = true;
    PersonalData: DatosPersonales;
    constructor(
        private _DatosGeneralesService: DatosGeneralesService,
        private fb: FormBuilder, private _Router: Router,
        private _Route: ActivatedRoute,
        private _catalogosService: CatalogosService,
    ) {
        this.formDatosPersonales = fb.group({
            candidatoId: [],
            paisNacimiento: [{ value: '', disabled: true }],
            paisNacimientoId: [null, Validators.required],
            estadoNacimiento: [{ value: '', disabled: true }],
            estadoNacimientoId: [null],
            municipioNacimiento: [''],
            municipioNacimientoId: [null],
            codigoPostal: [''],
            generoId: [{value: '', disabled: true}, Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
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
            fechaNacimiento: [{ value: '', disabled: true }, Validators.required],
        });

    }


    minDate: Date;
    maxDate: Date;
    es: any;
    tr: any;
    invalidDates: Array<Date>
    ngOnInit() {

        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
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

        this.formDatosPersonales.get('candidatoId').setValue(this.CandidatoId);
        this.edoCivilDropdown();
        this.sexosDropdown();

        this.GetInitilaData();
       
    }

    GetInitilaData()
    {
        this._DatosGeneralesService.GetDatosPersonales(this.CandidatoId)
            .subscribe(PersonalData => {
                this.formDatosPersonales.patchValue({
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

                console.log('si me trae el codigopostal?')
                console.log(PersonalData.codigoPostal)
                this.PaisNacimiento = PersonalData.paisNacimiento.pais;
                this.EstadoNacimiento = (PersonalData.estadoNacimiento == null) ? '' : PersonalData.estadoNacimiento.estado;
                this.MunicipioNacimiento = (PersonalData.municipioNacimiento == null) ? this.defaultStr : PersonalData.municipioNacimiento.municipio;
                this.GeneroOnChange(PersonalData.generoId);
                this.esMexicano = (PersonalData.paisNacimiento.pais.toLowerCase() == 'mexico') ? true : false;
                if (!this.esMexicano) {
                    this.formDatosPersonales.get('municipioNacimiento').disable();
                }
                if (PersonalData.estadoCivilId > 0) {
                    this.EdoCivilOnChange(PersonalData.estadoCivilId);
                }

                if (PersonalData.esDiscapacitado) {
                    this.showTiposDiscapacidades(PersonalData.esDiscapacitado);
                }
                // this.formDatosPersonales.get('generoId').disable(); 
            });
    }
    
    ValidarTelefonos() {
        var celular = this.formDatosPersonales.get('telCelular').value;
        var casa = this.formDatosPersonales.get('telCasa').value;
        var oficina = this.formDatosPersonales.get('telOficina').value;
       
        if (celular =='' ) {
            celular = null;
            this.formDatosPersonales.get('telCelular').setValue(null);

        }
        if (casa == ''  ) {
            casa = null;
            this.formDatosPersonales.get('telCasa').setValue(null);
        }
        if (oficina == ''  ) {
            oficina = null;
            this.formDatosPersonales.get('telOficina').setValue(null);
        }
       
        if (celular == null && casa == null && oficina == null) {
            this.telefonoValidate = false;
        } else {
            this.telefonoValidate = true;
        }
    } 
    
    ValidarMetodoContacto() {
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
    }
   
    edoCivilDropdown() {
        this._catalogosService.getEstadosCiviles(Catalogos.ESTADOS_CIVILES)
            .then(edosCiviles => {
                this.estadosCiviles = edosCiviles;
            });
    }
    EdoCivilOnChange(value: any) { 
        this.EdoCivil = this.estadosCiviles.find(x => x.id == value).estadoCivil;
    }
    sexosDropdown() {
        this._catalogosService.getEstadosCiviles(Catalogos.SEXOS).then(generos => {
            this.generos = generos;
        });
    }

    GeneroOnChange(value: any) { 
        this.Genero = this.generos.find(x => x.id == value).genero; 
    }

    DiscapacidadOnChange(value: any) {
        this.Discapacidad = this.discapacidades.find(x => x.id == value).tipoDiscapacidad; 
}
    showTiposDiscapacidades(isChecked: boolean) {

        this.discapacitado = isChecked;
        if (isChecked) {
            this._catalogosService.getDiscapacidades(Catalogos.DISCAPACIDADES)
                .subscribe(discapacidades => {
                    this.discapacidades = discapacidades;
                })
        }

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
        this.PaisNacimiento = value.pais;
        this.formDatosPersonales.get('paisNacimientoId').setValue(value.id);
        
    }

    ValidatePais() {
        if (this.formDatosPersonales.get('paisNacimiento').value != null) {
            this.formDatosPersonales.get('paisNacimientoId').setValue(null);
            this.PaisNacimiento = '';
        }
    }


    filteredStatesSingle: any[];
    filterStateSingle(event: any) {
        let pais: boolean = this.formDatosPersonales.get('paisNacimientoId').invalid;
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
            this.EstadoNacimiento = value.estado;
            this.formDatosPersonales.get('estadoNacimientoId').setValue(value.id);
        }
    }
    ValidateEstado() {
        if (this.formDatosPersonales.get('estadoNacimiento').value != null) {
            this.formDatosPersonales.get('estadoNacimientoId').setValue(null);
            this.EstadoNacimiento = '';
        }
    }

    filteredTownsSingle: any[];
    filterTownsSingle(event: any) {
        let estado: boolean = this.formDatosPersonales.get('estadoNacimientoId').invalid;
        if (estado) {
            this.filteredTownsSingle = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDatosPersonales.get('estadoNacimientoId').value;
        let query = event.query;
        this._catalogosService.getMunicipios(Catalogos.MUNICIPIOS, estadoId, query)
            .then(towns => {
                this.filteredTownsSingle = towns;
            });
    }
    setMunicipioNacimiento(value: any) {
        if (value.id > 0) {
            this.MunicipioNacimiento = value.municipio;
            this.formDatosPersonales.get('municipioNacimientoId').setValue(value.id);
        }
        
    } 
    ValidateMunicipio() {
        if (this.formDatosPersonales.get('municipioNacimiento').value != null) {
            this.formDatosPersonales.get('municipioNacimientoId').setValue(null);
            this.MunicipioNacimiento = '';
        }
    }
    OnEdit() {
        this.Edit = true;
    }
    DiscardEdit() {        
        this.Edit = false;
        this.GetInitilaData();
    }
    DetachedForm()
    {
        this.formDatosPersonales.get('paisNacimiento').setValue(null);
        this.formDatosPersonales.get('estadoNacimiento').setValue(null);
        this.formDatosPersonales.get('municipioNacimiento').setValue(null);
    }
    Save() {
        this._DatosGeneralesService.EditDatosPersonales(this.formDatosPersonales.getRawValue(), this.CandidatoId)
            .subscribe(x => {
                //this._Router.navigate(['']);
                this.Edit = false;
            });
    }
}






