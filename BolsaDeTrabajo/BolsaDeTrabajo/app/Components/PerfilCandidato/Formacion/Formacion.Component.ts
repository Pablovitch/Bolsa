import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';

import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';

@Component({
    selector: 'Formaciones',
    templateUrl:'app/Components/PerfilCandidato/Formacion/Formacion.component.html'
})
export class FormacionComponent implements AfterContentInit {
    @Input('group')
    public Formaciones: FormGroup;

    @Input('Index')
    public index: number;

    @Output('Remove')
    public remove = new EventEmitter();

    Edit: boolean = false;
    contraer: boolean = true;

    MonthInicio: string;
    MonthTermino: string;
    YearInicio: string;
    YearTermino: string;
    InstitucionEducativa: string;
    GradoEstudio: string;
    EstadoEstudio: string;
    DocumentoValidador: string;
    Carrera: string;

    filteredInstituciones: any[];
    filteredCarreras: any[];
    Estatus: any[];
    meses: any[];
    years: any[];
    gradosEstudio: any[];
    documentosValidadores: any[];
    auxCarrera: any;
    auxinstitucion: any;

    institucionId: string = '';
    institucion: string = '';
    gradoEstudioId: number = 0;
    estadoEstudioId: number = 0;
    documentoId: number = 0;
    carreraId: string = '';
    carrera: string = '';
    noYearInicio: number = 0;
    noMonthInicio: number = 0;
    noYearTermino: number = 0;
    noMonthTermino: number = 0;

    constructor(
        private fb: FormBuilder,
        private _Catalogos: CatalogoPerfilCandidatoService,
        private _perfilCandidatoService: PerfilCandidatoService
    ){

        this._Catalogos.GetEstatus()
            .subscribe(resp => {
                this.Estatus = resp;
                let estadoEstudio = this.Formaciones.get('estadoEstudioId').value;
                if (estadoEstudio > 0) {
                    this.EstadoEstudioOnchangue(estadoEstudio);
                }
            });
        this._Catalogos.GetGradoEstudio()
            .subscribe(resp => {
                this.gradosEstudio = resp;
                let gradoEstudio = this.Formaciones.get('gradoEstudioId').value;
                if (gradoEstudio > 0) {
                    this.GradoEstudioOnchangue(gradoEstudio);
                }
            });
        this._Catalogos.GetMonths()
            .subscribe(resp => {
                this.meses = resp;
                let monthInicio = this.Formaciones.get('monthInicioId').value;
                let monthTermino = this.Formaciones.get('monthTerminoId').value;
                if (monthInicio > 0) {
                    this.MonthInicioOnchangue(monthInicio);
                }
                if (monthTermino > 0) {
                    this.MonthTerminoOnchangue(monthTermino);
                }
            });
        this._Catalogos.GetYears()
            .subscribe(resp => {
                this.years = resp;
                let yearInicio = this.Formaciones.get('yearInicioId').value;
                let yearTermino = this.Formaciones.get('yearTerminoId').value;
                if (yearInicio > 0) {
                    this.YearInicioOnchangue(yearInicio);
                }
                if (yearTermino > 0) {
                    this.YearTerminoOnchangue(yearTermino);
                }
            });
        this._Catalogos.GetDocumentosValidadores()
            .subscribe(resp => {
                this.documentosValidadores = resp;
                let documento = this.Formaciones.get('documentoValidadorId').value;
                if (documento > 0) {
                    this.DocumentoValidadorOnchangue(documento);
                }
            });
    }

    ngAfterContentInit() {
        if (this.Formaciones.get('id').value != 0) {
            this.InstitucionEducativa = this.Formaciones.get('institucionEducativa').value.institucionEducativa;
            this.Carrera = this.Formaciones.get('carrera').value.carrera;
        }
        else {
            this.contraer = false;
            this.Edit = true;
        }
    }


    filterInstituciones(event: any)
    {
        let query = event.query;
        this._Catalogos.GetInstituciones(query)
            .then(instituciones => {
                this.filteredInstituciones = instituciones;
            });
    }
    filterCarreras(event: any) {
        let query = event.query;
        this._Catalogos.GetCarreras(query)
            .then(carreras => {
                this.filteredCarreras = carreras;
            });
    }
    SetCarreraId(event:any)
    {
        this.Formaciones.get('carreraId').setValue(event.id);
        this.Carrera = event.carrera;
    }

    SetInstitucionId(event: any)
    {
        this.Formaciones.get('institucionEducativaId').setValue(event.id)
        this.InstitucionEducativa = event.institucionEducativa
    }
    DocumentoValidadorOnchangue(id: number) {
        if (id <= 0) return;
        this.DocumentoValidador = this.documentosValidadores.find(x => x.id == id).documentoValidador;
    }
    EstadoEstudioOnchangue(id: number) {
        if (id <= 0) return;
        this.EstadoEstudio = this.Estatus.find(x => x.id == id).estadoEstudio;
    }
    GradoEstudioOnchangue(id: number)
    {
        if (id <= 0) return;
        this.GradoEstudio = this.gradosEstudio.find(x => x.id == id).gradoEstudio;
    }
    YearInicioOnchangue(id: number) {
        if (id <= 0) return;
        this.YearInicio = this.years.find(x => x.id == id).year;

    }
    YearTerminoOnchangue(id: number) {
        if (id <= 0) return;
        this.YearTermino = this.years.find(x => x.id == id).year;
    }
    MonthInicioOnchangue(id: number) {
        if (id <= 0) return;
        this.MonthInicio = this.meses.find(x => x.id == id).month;
    }
    MonthTerminoOnchangue(id: number) {
        if (id <= 0) return;
        this.MonthTermino = this.meses.find(x => x.id == id).month;
    }


    OnEdit() {
        this.institucionId = this.Formaciones.get('institucionEducativaId').value;
        this.institucion = this.InstitucionEducativa;
        this.gradoEstudioId = this.Formaciones.get('gradoEstudioId').value;
        this.estadoEstudioId = this.Formaciones.get('estadoEstudioId').value;
        this.documentoId = this.Formaciones.get('documentoValidadorId').value;
        this.carreraId = this.Formaciones.get('carreraId').value;
        this.carrera = this.Carrera;
        this.noYearInicio = this.Formaciones.get('yearInicioId').value;
        this.noMonthInicio = this.Formaciones.get('monthInicioId').value;
        this.noYearTermino = this.Formaciones.get('yearTerminoId').value;
        this.noMonthTermino = this.Formaciones.get('monthTerminoId').value;
        this.contraer = false;
        this.Edit = true;
    }
    DiscardEdit() {
        this.Formaciones.get('institucionEducativaId').setValue(this.institucionId);
        this.InstitucionEducativa = this.institucion;
        this.Formaciones.get('gradoEstudioId').setValue(this.gradoEstudioId);
        this.GradoEstudioOnchangue(this.gradoEstudioId);
        this.Formaciones.get('estadoEstudioId').setValue(this.estadoEstudioId);
        this.GradoEstudioOnchangue(this.estadoEstudioId);
        this.Formaciones.get('documentoValidadorId').setValue(this.documentoId);
        this.DocumentoValidadorOnchangue(this.documentoId);
        this.Formaciones.get('carreraId').setValue(this.carreraId);
        this.Carrera = this.carrera;
        this.Formaciones.get('yearInicioId').setValue(this.noYearInicio);
        this.YearInicioOnchangue(this.noYearInicio);
        this.Formaciones.get('monthInicioId').setValue(this.noMonthInicio);
        this.MonthInicioOnchangue(this.noMonthInicio);
        this.Formaciones.get('yearTerminoId').setValue(this.noYearTermino);
        this.YearTerminoOnchangue(this.noYearTermino);
        this.Formaciones.get('monthTerminoId').setValue(this.noMonthTermino);
        this.Edit = false;
    }
    Expandir() {
        this.contraer = false;
    }
    Contraer() {
        this.contraer = true;
    }
    EntityDettached() {

        this.auxCarrera = this.Formaciones.get('carrera').value;
        this.auxinstitucion = this.Formaciones.get('institucionEducativa').value;
        this.Formaciones.get('carrera').setValue(null);
        this.Formaciones.get('institucionEducativa').setValue(null)
    }

    EntityAttached() {
        this.Formaciones.get('institucionEducativa').setValue(this.auxinstitucion);
         this.Formaciones.get('carrera').setValue(this.auxCarrera);
    }

    display: boolean = false;

    Showdialog() {
        this.display = true;
    }

    Remove(index: number) {
        let idFormacion = this.Formaciones.get('id').value
        if (idFormacion != '0') {
            this._perfilCandidatoService.DeleteFormacion(idFormacion)
                .subscribe(data => { });
        }
        this.remove.emit(index);
        this.display = false;
    }
    Save() {
        this.institucionId = '';
        this.institucion = '';
        this.gradoEstudioId = 0;
        this.estadoEstudioId = 0;
        this.documentoId = 0;
        this.carreraId = '';
        this.carrera = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        let date1 = new Date(this.Formaciones.get('monthInicioId').value + '/01/' + this.YearInicio)
        let date2 = new Date(this.Formaciones.get('monthTerminoId').value + '/01/' + this.YearTermino)

        if (date2 <= date1) {
            alert("La  fecha de terminación de tú formación \n debe ser mayor a tú fecha de inicio.")
            return;
        }
        this.Edit = false;
        this.EntityDettached();
        if (this.Formaciones.get('id').value == '0') {
            this._perfilCandidatoService.AddFormacion(this.Formaciones.value)
                .subscribe(formacion => {
                    this.Formaciones.get('id').setValue(formacion.id)
                    this.EntityAttached();
                });
        }
        else {
            this._perfilCandidatoService.UpdateFormacion(this.Formaciones.value)
                .subscribe(formacion => {
                    this.EntityAttached();
                });
        }

    }

}