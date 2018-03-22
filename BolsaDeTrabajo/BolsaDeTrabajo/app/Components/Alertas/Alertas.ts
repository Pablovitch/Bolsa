import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'

import { CatalogosService } from '../../Services/catalogos.service'
import { AltaCandidatoValidator } from '../alta.candidato.validators';
@Component({
    templateUrl:'/app/Components/Alertas/Alertas.html'
})
export class Alerts {
    altaCorreo: FormGroup;
    alertas: FormGroup;
    CandidatoId: string;
    alertasArray: any[];
    Edit: boolean = true;
    Oculto: boolean = false;
    showMenu: boolean = true;
    constructor(
        private _Route: ActivatedRoute,
        private fbAC: FormBuilder,
        private fbA: FormBuilder,
        private categorias: CatalogosService
    ) { 

        this._Route.params.subscribe(params => {
            this.CandidatoId = params['candidatoId']; 
        });
        this.altaCorreo = fbAC.group({ 
            email: ['',
                Validators.compose([Validators.required, AltaCandidatoValidator.ValidarCorreo])
            ],
            confirmEmail: ['',
                Validators.compose([Validators.required, AltaCandidatoValidator.ConfirmarCorreo])]
        }); 

        this.categorias.AreasInteres()
            .subscribe(data => {
                this.alertasArray = data; 
            });

    }

    ShowMenu() {
        this.showMenu = !this.showMenu;
    }
    Save(){}

    
}