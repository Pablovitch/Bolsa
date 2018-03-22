import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';
import { AltaCandidatoValidator } from '../../alta.candidato.validators';
import { ConocimientoOHabilidad } from '../../../Models/PerfilCandidato';

@Component({
    selector:'ConocimientosArray',
    templateUrl: 'app/Components/PerfilCandidato/Conocimientos/ConocimientoArray.component.html'
})
export class ConocimientosArray {
    public ConocimientosArray: FormGroup;
    @Input('PerfilCandidatoId')
    private PerfilCandidatoId: string; 
    private title: string;
    private conocimientos: ConocimientoOHabilidad[];
   

    constructor(private _fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute,
        private _PerfilCandidatoService: PerfilCandidatoService) { }

    ngOnInit() {
        this.ConocimientosArray = this._fb.group({
            conocimientos: this._fb.array([])
        });


        this._PerfilCandidatoService.GetConocimientos(this.PerfilCandidatoId)
            .subscribe(data => { 
                this.conocimientos = data;
                if (this.conocimientos == null) {                   
                    return;
                } else {
                    this.PopulateForm(this.conocimientos);
                }

            });


    }

    initConocimiento() {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            conocimiento: ['', Validators.required],
            herramienta: [],
            institucionEducativa: [],
            institucionEducativaId: [''],
            nivelId: ['Nivel']
        });
    }

    addConocimiento() {
        const control = <FormArray>this.ConocimientosArray.controls['conocimientos'];
        const addrCtrl = this.initConocimiento();
        control.push(addrCtrl);
    }

    removeConocimiento(i: number) {
        const control = <FormArray>this.ConocimientosArray.controls['conocimientos'];
        control.removeAt(i);
    }

    
   

    private PopulateForm(conocimientos: ConocimientoOHabilidad[]) {
        var index: number = 1;
  
        for (let conocimiento in conocimientos) {
            this.addConocimiento()
        }
        this.ConocimientosArray.patchValue({
            conocimientos: this.conocimientos
        });
    }


}