import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng'; 

import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';

@Component({
    selector: 'idiomas',
    templateUrl:'app/Components/PerfilCandidato/Idioma/Idioma.component.html'
})
export class IdiomaComponent implements AfterContentInit{
    @Input('group')
    public language: FormGroup;

   
    @Input('Index')
    public index: number;

    @Output('Remove')
    public remove = new EventEmitter();

    Edit: boolean = false; 
    Idioma: string;
    NivelEscrito: string;
    NivelHablado: string;

    idiomaId: number = 0;
    idioma: string = '';
    nivelEscrito: number = 0;
    nivelHablado: number = 0;
    auxIdioma: any;
    filteredIdiomas: any[];
    niveles: any[]

    constructor(private fb: FormBuilder,
        private _Catalogos: CatalogoPerfilCandidatoService,
        private _perfilCandidatoService: PerfilCandidatoService
    ){

        this._Catalogos.GetNiveles()
            .subscribe(niveles => {
                this.niveles = niveles;
                let hablado = this.language.get('nivelHabladoId').value;
                let escrito = this.language.get('nivelEscritoId').value;
                if (hablado > 0) {
                    this.NivelHabladoOnChangue(hablado);
                }
                if (escrito > 0) {
                    this.NivelEscritoOnChangue(escrito);
                }
            })
    }

    ngAfterContentInit() {
        if (this.language.get('id').value != 0) {
            this.Idioma = this.language.get('idioma').value.idioma;
        }
        else {
            this.Edit = true;
        }
    }
     
    filterIdiomas(event: any)
    {
        let query = event.query; 
        this._Catalogos.GetIdiomas(query)
            .then(idiomas => {                
                this.filteredIdiomas = idiomas;
            });
        
    }

    SetIdiomaId(event: any) {
        this.language.get('idiomaId').setValue(event.id);        
        this.Idioma = event.idioma;
    }

    NivelEscritoOnChangue(id: number)
    {
        if (id <= 0) return;
        this.NivelEscrito = this.niveles.find(x => x.id == id).nivel;
    }
    NivelHabladoOnChangue(id: number) {
        if (id <= 0) return;
        this.NivelHablado = this.niveles.find(x => x.id == id).nivel;        
    }

   
    OnEdit() {
        this.idiomaId = this.language.get('idiomaId').value;
        this.idioma = this.Idioma;
        this.nivelEscrito = this.language.get('nivelEscritoId').value;
        this.nivelHablado = this.language.get('nivelHabladoId').value;
        this.Edit = true;
    }
    DiscardEdit() {
        this.language.get('idiomaId').setValue(this.idiomaId);
        this.Idioma = this.idioma;
        this.language.get('nivelEscritoId').setValue(this.nivelEscrito);
        this.NivelEscritoOnChangue(this.nivelEscrito);
        this.language.get('nivelHabladoId').setValue(this.nivelHablado);
        this.NivelHabladoOnChangue(this.nivelHablado);
        this.Edit = false;
    } 
    private EntityDettached() {
        this.auxIdioma = this.language.get('idioma').value;
        this.language.get('idioma').setValue(null);
    }
    private EntityAttached() { 
        this.language.get('idioma').setValue(this.auxIdioma);
    }

    Remove(index: number) {
        let idIdioma = this.language.get('id').value
        if (idIdioma != '0') {
            this._perfilCandidatoService.DeleteIdioma(idIdioma)
                .subscribe(data => { });
        }
        this.remove.emit(index);
    }
    Save() {
        this.idiomaId= 0;
        this.idioma = '';
        this.nivelEscrito = 0;
        this.nivelHablado = 0;
        this.Edit = false;
        this.EntityDettached();
        if (this.language.get('id').value == '0') {
            this._perfilCandidatoService.AddIdioma(this.language.value)
                .subscribe(idioma => {
                    this.language.get('id').setValue(idioma.id)
                    this.EntityAttached();
                });
        }
        else {
            this._perfilCandidatoService.UpdateIdioma(this.language.value)
                .subscribe(idioma => {
                    this.EntityAttached();
                });
        }

    }

}