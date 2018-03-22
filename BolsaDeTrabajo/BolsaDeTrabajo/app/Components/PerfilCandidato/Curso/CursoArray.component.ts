import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';
import { PerfilCandidato, Formacion } from '../../../Models/PerfilCandidato';
import { AltaCandidatoValidator } from '../../alta.candidato.validators';
import { Curso } from '../../../Models/PerfilCandidato'

@Component({
    selector: 'CursosArray',
    templateUrl: 'app/Components/PerfilCandidato/Curso/CursoArray.component.html'
})
export class CursosArray {
    public CursosArray: FormGroup;

    @Input('PerfilCandidatoId')
    private PerfilCandidatoId: string;
    private title: string;
    cursos: Curso[];


    constructor(private _fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute,
        private _perfilCandidatoService: PerfilCandidatoService) { }

    ngOnInit() {

          this.CursosArray = this._fb.group({
            cursos: this._fb.array([]), 
        });


          this._perfilCandidatoService.GetCursos(this.PerfilCandidatoId)
            .subscribe(data => {
                this.cursos = data;
                if (this.cursos == null) { 
                    return;
                } else {
                    this.PopulateForm(this.cursos);
                }

            });


    }


     
    initCurso() {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            curso: ['', Validators.required],
            institucionEducativa: [],
            institucionEducativaId: [''],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino'],
            horas: []
        });
    }

    addCurso() {
        const control = <FormArray>this.CursosArray.controls['cursos'];
        const addrCtrl = this.initCurso();
        control.push(addrCtrl);
    }

    removeCurso(i: number) {
        const control = <FormArray>this.CursosArray.controls['cursos'];
        control.removeAt(i);
    }
    private PopulateForm(cursos: Curso[]) {
        for (let curso in cursos) {
            this.addCurso()
        }
        this.CursosArray.patchValue({
            cursos: this.cursos, 
        });
    }


}