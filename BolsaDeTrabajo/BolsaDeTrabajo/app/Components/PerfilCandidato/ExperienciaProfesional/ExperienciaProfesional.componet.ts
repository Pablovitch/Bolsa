import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';
import { MomentModule } from 'angular2-moment';

import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';

@Component({
    selector: 'experiencias',
    templateUrl: 'app/Components/PerfilCandidato/ExperienciaProfesional/ExperienciaProfesional.component.html'
})
export class ExperienciaProfesionalComponent implements AfterContentInit {
    @Input('group')
    public Experiencias: FormGroup;

    @Input('Index')
    public index: number;

    @Output('Remove')
    public remove = new EventEmitter();

    @Output('TrabajoActualChangue')
    public trabajoActualChangue = new EventEmitter();

    Edit: boolean = false;
    contraer: boolean=true;

    MonthInicio: string;
    MonthTermino: string;
    YearInicio: number;
    YearTermino: number;
    Area: string;
    GiroEmpresa: string;
    auxAreaExperiencia: any;

    filteredAreas: any[];
    meses: any[];
    years: any[];
    girosEmpresa: any[];
    constructor(
        private fb: FormBuilder,
        private _Catalogos: CatalogoPerfilCandidatoService,
        private _perfilCandidatoService: PerfilCandidatoService
    ) {
        this._Catalogos.GetGirosEmpresas()
            .subscribe(resp => {
                this.girosEmpresa = resp;
                let giroEmpresa = this.Experiencias.get('giroEmpresaId').value;
                if (giroEmpresa > 0) {
                    this.GiroEmpresaOnchangue(giroEmpresa);
                }
            });
        this._Catalogos.GetMonths()
            .subscribe(resp => {
                this.meses = resp;
                let monthInicio = this.Experiencias.get('monthInicioId').value;
                let monthTermino = this.Experiencias.get('monthTerminoId').value;
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
                let yearInicio = this.Experiencias.get('yearInicioId').value;
                let yearTermino = this.Experiencias.get('yearTerminoId').value;
                if (yearInicio > 0) {
                    this.YearInicioOnchangue(yearInicio);
                }
                if (yearTermino > 0) {
                    this.YearTerminoOnchangue(yearTermino);
                }
            });

    }
    ngAfterContentInit() {
        if (this.Experiencias.get('id').value != 0)
        {
            this.Area = this.Experiencias.get('area').value.nombre;
        }
        else
        {
            this.contraer = false;
            this.Edit = true;
        }
    }


    filterAreas(event: any) {
        let query = event.query;
        this._Catalogos.GetAreas(query)
            .then(areas => {
                this.filteredAreas = areas;
            });
    }
    SetAreaId(event: any) {

        this.Experiencias.get('areaId').setValue(event.id)
        this.Area = event.nombre;
    }
    GiroEmpresaOnchangue(id: number)
    {
        if (id <= 0) { return; }
        this.GiroEmpresa = this.girosEmpresa.find(x => x.id == id).giroEmpresa;
    }
    YearInicioOnchangue(id: number) {
        if (id <= 0) { return;}
        this.YearInicio = this.years.find(x => x.id == id).year;

    }
    YearTerminoOnchangue(id: number) {
        if (id <= 0) { return; }
        this.YearTermino = this.years.find(x => x.id == id).year;
    }
    MonthInicioOnchangue(id: number) {
        if (id <= 0) { return; }
        this.MonthInicio = this.meses.find(x => x.id == id).month;
    }
    MonthTerminoOnchangue(id: number) {
        if (id <= 0) { return; }
        this.MonthTermino = this.meses.find(x => x.id == id).month;
    }
    empresa: string = '';
    giroEmpresaId: number = 0;
    cargoAsignado: string = '';
    areaId: string = '';
    area: string = '';
    salario: number = 0;
    noYearInicio: number = 0;
    noMonthInicio: number = 0;
    noYearTermino: number = 0;
    noMonthTermino: number = 0;
    trabajoActual: boolean = false;
    descripcion: string = '';
    OnEdit() {
        this.empresa = this.Experiencias.get('empresa').value;
        this.giroEmpresaId = this.Experiencias.get('giroEmpresaId').value;
        this.cargoAsignado = this.Experiencias.get('cargoAsignado').value;
        this.areaId = this.Experiencias.get('areaId').value;
        this.area = this.Area;
        this.salario = this.Experiencias.get('salario').value;
        this.noYearInicio = this.Experiencias.get('yearInicioId').value;
        this.noMonthInicio = this.Experiencias.get('monthInicioId').value;
        this.noYearTermino = this.Experiencias.get('yearTerminoId').value;
        this.noMonthTermino = this.Experiencias.get('monthTerminoId').value;
        this.trabajoActual = this.Experiencias.get('trabajoActual').value;
        this.descripcion = this.Experiencias.get('descripcion').value;
        this.contraer = false;
        this.Edit = true;
    }
    DiscardEdit() {
         this.Experiencias.get('empresa').setValue(this.empresa);
         this.Experiencias.get('giroEmpresaId').setValue(this.giroEmpresaId);
         this.Experiencias.get('cargoAsignado').setValue(this.cargoAsignado);
         this.Experiencias.get('areaId').setValue(this.areaId);
        this.Area = this.area;
         this.Experiencias.get('salario').setValue(this.salario);
         this.Experiencias.get('yearInicioId').setValue(this.noYearInicio);
         this.YearInicioOnchangue(this.noYearInicio);
         this.Experiencias.get('monthInicioId').setValue(this.noMonthInicio);
         this.MonthInicioOnchangue(this.noMonthInicio);
         this.Experiencias.get('yearTerminoId').setValue(this.noYearTermino);
         this.YearTerminoOnchangue(this.noYearTermino);
         this.Experiencias.get('monthTerminoId').setValue(this.noMonthTermino);
         this.MonthTerminoOnchangue(this.noMonthTermino);
         this.Experiencias.get('trabajoActual').setValue(this.trabajoActual);
         this.Experiencias.get('descripcion').setValue(this.descripcion);
        this.Edit = false;
    }
    Expandir() {
        this.contraer = false;
    }
    Contraer() {
        this.contraer = true;
    }

    display: boolean = false;

    Showdialog() {
        this.display = true;
    }

    Remove(index: number) {
        this.Experiencias.get('area').setValue(null);
        let idExperiencia = this.Experiencias.get('id').value
        if (idExperiencia != '0') {
            this._perfilCandidatoService.DeleteExperiencia(idExperiencia)
                .subscribe(data => { });
        }
        this.remove.emit(index);
        this.display = false;

    }
    OnTrabajoActualChangue(event: any)
    {
        if (event.target.checked) {
            this.trabajoActualChangue.emit(this.index);
        }

    }
    Save() {
        let date1 = new Date(this.Experiencias.get('monthInicioId').value+'/01/' + this.YearInicio)
        let date2 = new Date(this.Experiencias.get('monthTerminoId').value + '/01/' + this.YearTermino)

        if (date2 <= date1)
        {
            alert("La  fecha de terminación de tú experiencia \n debe ser mayor a tú fecha de inicio.")
            return;
        }
        this.Edit = false;
        this.auxAreaExperiencia = this.Experiencias.get('area').value;
        this.Experiencias.get('area').setValue(null);
        if (this.Experiencias.get('id').value == '0') {
            this._perfilCandidatoService.AddExperiencia(this.Experiencias.value)
                .subscribe(experiencia => {
                    this.Experiencias.get('id').setValue(experiencia.id);
                    this.Experiencias.get('area').setValue(this.auxAreaExperiencia)
                    this.Area = this.auxAreaExperiencia.areaExperiencia
                });
        }
        else
        {
            this._perfilCandidatoService.UpdateExperiencia(this.Experiencias.value)
                .subscribe(experiencia => {
                    this.Experiencias.get('area').setValue(this.auxAreaExperiencia)
                    this.Area = this.auxAreaExperiencia.areaExperiencia
                });
        }

    }

}