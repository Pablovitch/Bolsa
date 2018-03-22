import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PerfilCandidatoService } from '../../Services/PerfilCandidato.Service';
import { PerfilCandidato, Formacion } from '../../Models/PerfilCandidato';
import { AltaCandidatoValidator } from '../alta.candidato.validators';

import { AboutMe } from '../../Models/PerfilCandidato'

@Component({
    templateUrl: 'app/Components/PerfilCandidato/Perfil-Candidato.component.html'
})
export class CandidatoPerfil {
    public PerfilCandidato: FormGroup;
    private CandidatoId: string;
    private PerfilCandidatoId: string;
    private acercaDeMi: AboutMe;
    private title: string
    index: number = 1;   
    ProfileName: string;
    Oculto: boolean = false;
    showMenu: boolean = true;

    constructor(private _fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute,
        private _perfilCandidatoService: PerfilCandidatoService) {
        this.PerfilCandidato = this._fb.group({ 
        });
        
    }

    ngOnInit() {   

        var parametros = this._Route.params.subscribe(params => {
            this.CandidatoId = params["candidatoId"];
            this.PerfilCandidatoId = localStorage.getItem('PerfilCandidatoId'); 
        });
           
             
    }  

   
    ShowMenu() {
        this.showMenu = !this.showMenu;
    }

    OnLoadProfileName(event: any) {
        this.ProfileName = event;
    }

   
   
}