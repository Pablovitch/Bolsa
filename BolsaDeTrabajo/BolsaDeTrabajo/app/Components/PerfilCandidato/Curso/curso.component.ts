import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';

import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';

@Component({
    selector: 'cursos',
    templateUrl: 'app/Components/PerfilCandidato/Curso/curso.component.html'
})
export class CursoComponent implements AfterContentInit{
    @Input('group')
    public Cursos: FormGroup;

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
    auxInstitucion: any;

    filteredInstituciones: any[];
    meses: any[];
    years: any[];

    curso: string = '';
    institucionId: string = ''
    institucion: string = '';
    noYearInicio: number = 0;
    noMonthInicio: number = 0;
    noYearTermino: number = 0;
    noMonthTermino: number = 0;
    horas: number = 0;

    constructor(
        private fb: FormBuilder,
        private _Catalogos: CatalogoPerfilCandidatoService,
        private _perfilCandidatoService: PerfilCandidatoService
    ) {

        this._Catalogos.GetMonths()
            .subscribe(resp => {
                this.meses = resp;
                this.meses = resp;
                let monthInicio = this.Cursos.get('monthInicioId').value;
                let monthTermino = this.Cursos.get('monthTerminoId').value;
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
                let yearInicio = this.Cursos.get('yearInicioId').value;
                let yearTermino = this.Cursos.get('yearTerminoId').value;
                if (yearInicio > 0) {
                    this.YearInicioOnchangue(yearInicio);
                }
                if (yearTermino > 0) {
                    this.YearTerminoOnchangue(yearTermino);
                }
            });
    }

    ngAfterContentInit() {
        if (this.Cursos.get('id').value != 0) {
            this.InstitucionEducativa = this.Cursos.get('institucionEducativa').value.institucionEducativa;
        }
        else {
            this.contraer = false;
            this.Edit = true;
        }
    }

    filterInstituciones(event: any) {
        let query = event.query;
        this._Catalogos.GetInstituciones(query)
            .then(instituciones => {
                this.filteredInstituciones = instituciones;
            });
    }


    SetInstitucionId(event: any) {
        this.Cursos.get('institucionEducativaId').setValue(event.id)
        this.InstitucionEducativa = event.institucionEducativa
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
        this.curso = this.Cursos.get('curso').value;
        this.institucionId = this.Cursos.get('institucionEducativaId').value;
        this.institucion = this.InstitucionEducativa;
        this.horas = this.Cursos.get('horas').value;
        this.noYearInicio = this.Cursos.get('yearInicioId').value;
        this.noMonthInicio = this.Cursos.get('monthInicioId').value;
        this.noYearTermino = this.Cursos.get('yearTerminoId').value;
        this.noMonthTermino = this.Cursos.get('monthTerminoId').value;
        this.contraer = false;
        this.Edit = true;
    }
    DiscardEdit() {
         this.Cursos.get('curso').setValue(this.curso);
         this.Cursos.get('institucionEducativaId').setValue(this.institucionId);
         this.institucion = this.InstitucionEducativa;
         this.Cursos.get('horas').setValue(this.horas);
         this.Cursos.get('yearInicioId').setValue(this.noYearInicio);
         this.YearInicioOnchangue(this.noYearInicio);
         this.Cursos.get('monthInicioId').setValue(this.noMonthInicio);
         this.MonthInicioOnchangue(this.noMonthInicio);
         this.Cursos.get('yearTerminoId').setValue(this.noYearTermino);
         this.YearTerminoOnchangue(this.noYearTermino);
         this.Cursos.get('monthTerminoId').setValue(this.noMonthTermino);
         this.YearTerminoOnchangue(this.noMonthTermino);
         this.Cursos.get('horas').setValue(this.horas);
        this.Edit = false;
    }
    Expandir() {
        this.contraer = false;
    }
    Contraer() {
        this.contraer = true;
    }
    EntityDettached() {
        this.auxInstitucion = this.Cursos.get('institucionEducativa').value;
        this.Cursos.get('institucionEducativa').setValue(null);
    }
    private EntityAttached() {
        this.Cursos.get('institucionEducativa').setValue(this.auxInstitucion);
    }

    display: boolean = false;

    Showdialog() {
        this.display = true;
    }

    Remove(index: number) {
        let idCurso = this.Cursos.get('id').value
        if (idCurso != '0') {
            this._perfilCandidatoService.DeleteCurso(idCurso)
                .subscribe(data => { });
        }
        this.remove.emit(index);
        this.display = false;
    }
    Save() {
        this.curso = '';
        this.institucionId = ''
        this.institucion = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        this.horas = 0;
        let date1 = new Date(this.Cursos.get('monthInicioId').value + '/01/' + this.YearInicio)
        let date2 = new Date(this.Cursos.get('monthTerminoId').value + '/01/' + this.YearTermino)

        if (date2 <= date1) {
            alert("La fecha de terminación de tú curso \n debe ser mayor a tú fecha de inicio.")
            return;
        }
        this.Edit = false;
        this.EntityDettached();
        if (this.Cursos.get('id').value == '0') {
            this._perfilCandidatoService.AddCurso(this.Cursos.value)
                .subscribe(curso => {
                    this.Cursos.get('id').setValue(curso.id);
                    this.EntityAttached();
                });
        }
        else {
            this._perfilCandidatoService.UpdateCurso(this.Cursos.value)
                .subscribe(curso => {
                    this.EntityAttached();
                });
        }

    }

}