import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';
import { PerfilCandidato, Formacion } from '../../../Models/PerfilCandidato';
import { AltaCandidatoValidator } from '../../alta.candidato.validators';

import { PerfilIdioma } from '../../../Models/PerfilCandidato';

@Component({
    selector:'IdiomasArray',
    templateUrl: 'app/Components/PerfilCandidato/Idioma/IdiomaArray.component.html'
})
export class IdiomaArray {
  
    @Input('PerfilCandidatoId')
    private PerfilCandidatoId: string;
    public IdiomasArray: FormGroup;
    private idiomas: PerfilIdioma[];
    private title: string;
    constructor(private _fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute,
        private _perfilCandidatoService: PerfilCandidatoService) { }

    ngOnInit() {

        this.IdiomasArray = this._fb.group({
            idiomas: this._fb.array([]),
        });


        this._perfilCandidatoService.GetIdiomas(this.PerfilCandidatoId)
            .subscribe(data => {
                this.idiomas = data;
                if (this.idiomas == null) {
                    return;
                } else {
                    this.PopulateForm(this.idiomas);
                }

            });


    }


    initIdioma() {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            idioma: [],
            idiomaId: ['', Validators.required],
            nivelHabladoId: ['Nivel', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])],
             nivelEscritoId: ['Nivel', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])]
        });
    }

    addIdioma() {
        const control = <FormArray>this.IdiomasArray.controls['idiomas'];
        const addrCtrl = this.initIdioma();
        control.push(addrCtrl);
    }

    removeIdioma(i: number) {
        const control = <FormArray>this.IdiomasArray.controls['idiomas'];
        control.removeAt(i);
    }

   
    private EntityAttached() {
        const idiomas = <FormArray>this.IdiomasArray.controls['idiomas'];
        for (var i = 0; i < idiomas.length; i++) {
            var idioma = idiomas.controls[i];
            idioma.get('idioma').setValue(null);
        }
        

    }
    private PopulateForm(idiomas: PerfilIdioma[]) {
        for (let idioma in idiomas) {
            this.addIdioma();
        }
        this.IdiomasArray.patchValue({
            idiomas: this.idiomas,
        });
    }


}