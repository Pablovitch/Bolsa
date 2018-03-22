import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';
import { PerfilCandidato, Formacion } from '../../../Models/PerfilCandidato';
import { AltaCandidatoValidator } from '../../alta.candidato.validators';
import { TooltipModule } from 'primeng/primeng';

import { ExperienciaProfesional } from '../../../Models/PerfilCandidato'

@Component({
    selector:'ExperienciasArray',
    templateUrl: 'app/Components/PerfilCandidato/ExperienciaProfesional/ExperienciaProfesionalArray.component.html'
})
export class ExperienciasProfesionalesArray {
    public ExperienciasArray: FormGroup; 
   
    @Input('PerfilCandidatoId')
    private PerfilCandidatoId: string;
    private candidatoPerfil: PerfilCandidato;
    private title: string;
    private experiencias: ExperienciaProfesional[];

     constructor(private _fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute,
        private _perfilCandidatoService: PerfilCandidatoService) { }

    ngOnInit() { 
        this.ExperienciasArray = this._fb.group({
              experiencias: this._fb.array([]),
        });
        this._perfilCandidatoService.GetExperiencias(this.PerfilCandidatoId)
            .subscribe(data => {
                this.experiencias = data;
                if (this.experiencias == null) {
                    return;
                } else {
                    this.PopulateForm(this.experiencias);
                }
            });
       
    }

     initExperiencia() {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            empresa: ['', Validators.required],
            giroEmpresaId: ['Giro Empresa', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])],
            cargoAsignado: ['', Validators.required],
            area: [],
            areaId: ['', Validators.required],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino'],
            salario: ['', Validators.required],
            descripcion: [''],
            trabajoActual: []
        });
    }

    addExperiencia() {
        const control = <FormArray>this.ExperienciasArray.controls['experiencias'];
        const addrCtrl = this.initExperiencia();
        control.push(addrCtrl);
    }

    removeExperiencia(i: number) {
        const control = <FormArray>this.ExperienciasArray.controls['experiencias'];
        control.removeAt(i);
    }    

    OnTrabajoActualChangue(index: number)
    { 
        const controls = <FormArray>this.ExperienciasArray.controls['experiencias'];
        //console.log(controls)
        for (var i = 0; i < controls.length; i++)
        {

        }
    }
    
    private PopulateForm(experiencias: ExperienciaProfesional[]) {
     
        for (let experiencia in experiencias) {
            this.addExperiencia()
        }
        
        this.ExperienciasArray.patchValue({
            experiencias: this.experiencias,
        });
    }


}