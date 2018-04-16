import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';

import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';

@Component({
    selector: 'conocimientos',
    templateUrl: 'app/Components/PerfilCandidato/Conocimientos/Conocimiento.component.html'
})
export class ConocimientoComponent {
    @Input('group')
    public Conocimientos: FormGroup;

    @Input('CandidatoId')
    CandidatoId: string;

    @Input('Index')
    public index: number;

    @Output('Remove')
    public remove = new EventEmitter();

    Edit: boolean = false;
    contraer: boolean = true;

    InstitucionEducativa: string;
    Nivel: string;


    filteredInstituciones: any[];
    niveles: any[]

    conocimientoHabilidad: string = '';
    herramienta: string = '';
    institucion: string = '';
    institucionId: string = '';
    nivelId: number = 0;
    auxInstitucion: any;

    constructor(
        private fb: FormBuilder,
        private _Catalogos: CatalogoPerfilCandidatoService,
        private _perfilCandidatoService: PerfilCandidatoService
    ) {

        this._Catalogos.GetNiveles()
            .subscribe(niveles => {
                this.niveles = niveles;
                let Nivel = this.Conocimientos.get('nivelId').value;
                if (Nivel > 0) {
                    this.NivelOnchangue(Nivel);
                }
            })
    }
    ngAfterContentInit() {
        if (this.Conocimientos.get('id').value != 0) {
            this.InstitucionEducativa = this.Conocimientos.get('institucionEducativa').value.institucionEducativa;
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
        this.Conocimientos.get('institucionEducativaId').setValue(event.id);
        this.InstitucionEducativa = event.institucionEducativa
    }

    NivelOnchangue(id: number) {
        if (id > 0) {
            this.Nivel = this.niveles.find(x => x.id == id).nivel;
        }
    }

    OnEdit() {
        this.conocimientoHabilidad = this.Conocimientos.get('conocimiento').value;
        this.herramienta = this.Conocimientos.get('herramienta').value;
        this.institucion = this.InstitucionEducativa;
        this.institucionId = this.Conocimientos.get('institucionEducativaId').value;
        this.nivelId = this.Conocimientos.get('nivelId').value;
        this.contraer = false;
        this.Edit = true;
    }
    DiscardEdit() {
        this.Conocimientos.get('conocimiento').setValue(this.conocimientoHabilidad);
        this.Conocimientos.get('herramienta').setValue(this.herramienta);
        this.InstitucionEducativa = this.institucion;
        this.Conocimientos.get('institucionEducativaId').setValue(this.institucionId);
        this.Conocimientos.get('nivelId').setValue(this.nivelId);
        this.NivelOnchangue(this.nivelId);
        this.Edit = false;
    }
    Expandir() {
        this.contraer = false;
    }
    Contraer() {
        this.contraer = true;
    }

    EntityDettached() {
        this.auxInstitucion = this.Conocimientos.get('institucionEducativa').value;
        this.Conocimientos.get('institucionEducativa').setValue(null);
    }

    private EntityAttached()
    {
        this.Conocimientos.get('institucionEducativa').setValue(this.auxInstitucion);
    }

    display: boolean = false;

    Showdialog() {
        this.display = true;
    }

    Remove(index: number) {
        let idExperiencia = this.Conocimientos.get('id').value
        if (idExperiencia != '0') {
            this._perfilCandidatoService.DeleteConocimiento(idExperiencia)
                .subscribe(data => { });
        }
        this.remove.emit(index);
        this.display = false;
    }

    Save() {
        this.conocimientoHabilidad= '';
        this.herramienta = '';
        this.institucion = '';
        this.institucionId = '';
        this.nivelId = 0;
        this.Edit = false;
        this.EntityDettached();
        if (this.Conocimientos.get('id').value == '0') {
            this._perfilCandidatoService.AddConocimiento(this.Conocimientos.value)
                .subscribe(conocimiento => {
                    this.Conocimientos.get('id').setValue(conocimiento.id)
                    this.EntityAttached();
                });
        }
        else {
            this._perfilCandidatoService.UpdateConocimiento(this.Conocimientos.value)
                .subscribe(conocimiento => {
                    this.EntityAttached();
                });
        }

    }

}