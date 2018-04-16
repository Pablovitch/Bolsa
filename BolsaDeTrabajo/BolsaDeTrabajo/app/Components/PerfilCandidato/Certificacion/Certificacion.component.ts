import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';

import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';

@Component({
    selector: 'certificaciones',
    templateUrl: 'app/Components/PerfilCandidato/Certificacion/Certificacion.component.html'
})
export class CertificacionComponent {
    @Input('group')
    public Certificacion: FormGroup;

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

    nombreCertificacion: string = '';
    autoridadEmisora: string = '';
    noLicencia: string = '';
    URLCertificacion: string = '';
    noYearInicio: number = 0;
    noMonthInicio: number = 0;
    noYearTermino: number = 0;
    noMonthTermino: number = 0;
    vence: boolean = false;

    meses: any[];
    years: any[];
    constructor(
        private fb: FormBuilder,
        private _Catalogos: CatalogoPerfilCandidatoService,
        private _perfilCandidatoService: PerfilCandidatoService) {

        this._Catalogos.GetMonths()
            .subscribe(resp => {
                this.meses = resp;
                let monthInicio = this.Certificacion.get('monthInicioId').value;
                let monthTermino = this.Certificacion.get('monthTerminoId').value;
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
                let yearInicio = this.Certificacion.get('yearInicioId').value;
                let yearTermino = this.Certificacion.get('yearTerminoId').value;
                if (yearInicio > 0) {
                    this.YearInicioOnchangue(yearInicio);
                }
                if (yearTermino > 0) {
                    this.YearTerminoOnchangue(yearTermino);
                }
            });
    }

    ngAfterContentInit() {
        if (this.Certificacion.get('id').value == 0) {
            this.contraer = false;
            this.Edit = true;
        }
    }

    YearInicioOnchangue(id:number){
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
        this.nombreCertificacion = this.Certificacion.get('certificacion').value;
        this.autoridadEmisora = this.Certificacion.get('autoridadEmisora').value;
        this.noLicencia = this.Certificacion.get('licencia').value;
        this.URLCertificacion = this.Certificacion.get('urlCertificacion').value;
        this.noYearInicio = this.Certificacion.get('yearInicioId').value;
        this.noMonthInicio = this.Certificacion.get('monthInicioId').value;
        this.noYearTermino = this.Certificacion.get('yearTerminoId').value;
        this.noMonthTermino = this.Certificacion.get('monthTerminoId').value;
        this.vence = this.Certificacion.get('noVence').value;
        this.contraer = false;
        this.Edit = true;
    }
    DiscardEdit() {
         this.Certificacion.get('certificacion').setValue(this.nombreCertificacion);
         this.Certificacion.get('autoridadEmisora').setValue(this.autoridadEmisora);
         this.Certificacion.get('licencia').setValue(this.noLicencia);
         this.Certificacion.get('urlCertificacion').setValue(this.URLCertificacion);
         this.Certificacion.get('yearInicioId').setValue(this.noYearInicio);
         this.YearInicioOnchangue(this.noYearInicio);
         this.Certificacion.get('monthInicioId').setValue(this.noMonthInicio);
         this.MonthInicioOnchangue(this.noMonthInicio);
         this.Certificacion.get('yearTerminoId').setValue(this.noYearTermino);
         this.YearTerminoOnchangue(this.noYearTermino);
         this.Certificacion.get('monthTerminoId').setValue(this.noMonthTermino);
         this.Certificacion.get('noVence').setValue(this.vence);
         this.MonthTerminoOnchangue(this.noMonthTermino);
        this.Edit = false;
    }
    Expandir()
    {
        this.contraer = false;
    }
    Contraer()
    {
        this.contraer = true;
    }

    display: boolean = false;

    Showdialog() {
        this.display = true;
    }

    Remove(index: number) {
        let idCertificacion = this.Certificacion.get('id').value
        if (idCertificacion != '0') {
            this._perfilCandidatoService.DeleteCertificacion(idCertificacion)
                .subscribe(data => { });
        }
        this.remove.emit(index);
        this.display = false;
    }
    Save() {
        this.nombreCertificacion= '';
        this.autoridadEmisora = '';
        this.noLicencia = '';
        this.URLCertificacion = '';
        this.noYearInicio = 0;
        this.noMonthInicio = 0;
        this.noYearTermino = 0;
        this.noMonthTermino = 0;
        let date1 = new Date(this.Certificacion.get('monthInicioId').value + '/01/' + this.YearInicio)
        let date2 = new Date(this.Certificacion.get('monthTerminoId').value + '/01/' + this.YearTermino)

        if (date2 <= date1) {
            alert("La  fecha de terminación de tú certificación \n debe ser mayor a tú fecha de inicio.")
            return;
        }
        this.Edit = false;
        if (this.Certificacion.get('id').value == '0') {
            this._perfilCandidatoService.AddCertificacion(this.Certificacion.value)
                .subscribe(certificacion => {
                    this.Certificacion.get('id').setValue(certificacion.id)
                });
        }
        else {
            this._perfilCandidatoService.UpdateCertificacion(this.Certificacion.value)
                .subscribe(certificacion => {
                    //this.Experiencias.get('id').setValue(experiencia.id)
                });
        }
    }

}