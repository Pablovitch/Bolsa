import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service'; 
import { AltaCandidatoValidator } from '../../alta.candidato.validators';

import { Formacion } from '../../../Models/PerfilCandidato';

@Component({
    selector:'FormacionesArray',
    templateUrl: 'app/Components/PerfilCandidato/Formacion/FormacionArray.component.html'
})
export class FormacionesArray {
    @Input('PerfilCandidatoId')
    private PerfilCandidatoId: string;;
    public FormacionesArray: FormGroup;
    private formaciones: Formacion[];
    private title: string;

    constructor(private _fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute,
        private _perfilCandidatoService: PerfilCandidatoService) { }

    ngOnInit() { 

        this.FormacionesArray = this._fb.group({
            Formaciones: this._fb.array([]), 
        });        
                this._perfilCandidatoService.GetFormaciones(this.PerfilCandidatoId)
                    .subscribe(data => {
                        this.formaciones = data;
                        if (this.formaciones == null) {
                            this.addFormacion();
                            return;
                        } else {
                            this.PopulateForm(this.formaciones);
                        }

                    });
    }  
    initFormacion() {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            institucionEducativa: [],
            institucionEducativaId: ['', Validators.required],
            gradoEstudioId: ['Nivel de Estudios', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])],
            estadoEstudioId: ['Estatus', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])],
            documentoValidadorId: ['Documento Validador'],
            carrera: [],
            carreraId: [],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino']
        });
    }

    addFormacion() {
        const control = <FormArray>this.FormacionesArray.controls['Formaciones'];
        const addrCtrl = this.initFormacion();
        control.push(addrCtrl);
    }

    removeFormacion(i: number) {
        const control = <FormArray>this.FormacionesArray.controls['Formaciones'];
        control.removeAt(i);
    }
    
    private PopulateForm(formaciones: Formacion[]) {
        
        for (let formaion in formaciones) {
            this.addFormacion()
        } 
        this.FormacionesArray.patchValue({
            Formaciones: this.formaciones, 
        });
    }


}