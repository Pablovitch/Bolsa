import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { RedSocial } from '../../../Models/Candidato'
import { DatosGeneralesService } from '../../../Services/DatosGenerales.service'

@Component({
    selector: 'damsa-redes-sociales ',
    templateUrl: 'app/Components/DatosGenerales/RedesSociales/RedesSocialesArray.html'
})
export class RedSocialComponentArray implements OnInit {
    public RedesSocialessArray: FormGroup;
    @Input('CandidatoId')
    CandidatoId: string;
    Edit: boolean = false;
    redesSociales: RedSocial[];
    constructor(
        private _fb: FormBuilder,
        private _datosGenerales: DatosGeneralesService
    ) {
        
    }

    ngOnInit() {
        this.RedesSocialessArray = this._fb.group({
            redesSociales: this._fb.array([])
        });
        this._datosGenerales.GetRedesSociales(this.CandidatoId)
            .subscribe(data => {
                this.redesSociales = data;
                if (this.redesSociales == null)
                {
                    this.addRedSocial(); 
                }
                else
                {
                    this.PopulateForm(this.redesSociales);
                }
            })

    }
    initRedSocial() {
        return this._fb.group({
            id: [],
            personaId: [this.CandidatoId],
            tipoRedSocialId: [],
            redSocial: ['',Validators.required]
        });
    }

    addRedSocial()
    {
        const control = <FormArray>this.RedesSocialessArray.controls['redesSociales'];
        const addCtrl = this.initRedSocial();
        control.push(addCtrl);
    }

    removeRedSocial(i:any)
    {
        const control = <FormArray>this.RedesSocialessArray.controls['redesSociales'];
        control.removeAt(i);
    }

    OnEdit() {
        this.Edit = true;
    }
    DiscardEdit() {
        this.ngOnInit();
        this.Edit = false;
    }

    private PopulateForm(redesSociales: RedSocial[])
    {
        for (let redSocial in redesSociales)
        {
            this.addRedSocial();
        }

        this.RedesSocialessArray.patchValue({
            redesSociales: redesSociales,
        });
    }

    Save(model: any)
    {
        this.Edit = false;
        this._datosGenerales.AddRedesSociales(this.RedesSocialessArray.get('redesSociales').value, this.CandidatoId)
            .subscribe(data => {

            });

        
    }
}