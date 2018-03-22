import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { PerfilCandidatoService } from '../../Services/PerfilCandidato.Service';
import { CatalogoPerfilCandidatoService } from '../../Services/Catalogo.PerfilCandidato.service';
import { DatosPerfilService } from '../../Services/DatosPerfil.service';
import { AltaCandidatoValidator } from '../alta.candidato.validators';


@Component({
    templateUrl:'/app/Components/FormulariosIniciales/DatosPerfil.component.html'
})
export class DatosPerfilComponent {
    public datosBasicosPerfil: FormGroup;
    filteredAreaExperiencia: any[];
    gradosExperiencia: any[];
    areasInteres: any[];
    candidatoId: number;

    CandidatoId: string = null;
    Oculto: boolean = true;
    showMenu: boolean = false;

    constructor(private fb: FormBuilder, private _PerfilCandidatoService: PerfilCandidatoService,
                private _DatosPerfilService: DatosPerfilService,
                private _Router: Router, private _Route: ActivatedRoute,
                private _Catalogos: CatalogoPerfilCandidatoService,
    ) {
        var parametros = this._Route.params.subscribe(params => {
            this.candidatoId = params["personaId"];
        });
        this.datosBasicosPerfil = fb.group({
            candidatoId:[],
            areaExperiencia: [''],
            areaExperienciaId: ['', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])],
            salarioAceptable: ['', Validators.required],
            salarioDeseado: ['', Validators.required]
        });

        this.datosBasicosPerfil.get('candidatoId').setValue(this.candidatoId);

    } 
    ShowMenu() {
        this.showMenu = true;
    }

    filterAreaExperiencia(event: any) {
        let query = event.query;
        this._Catalogos.GetAreasExperiencia(query)
            .then(areasExperiencia => {
                this.filteredAreaExperiencia = areasExperiencia;
            })
    }

    SetAreaExperienciaId(event: any) {
        this.datosBasicosPerfil.get('areaExperienciaId').setValue(event.id);
        this.datosBasicosPerfil.get('areaExperiencia').setValue(null);
    }

    Save() {
        this._PerfilCandidatoService.AddAboutMe(this.datosBasicosPerfil.value)
            .subscribe(PerfilCandidatoId => {                
                //this.formDatosDeContacto.markAsPristine();
                let CandidatoId=this.candidatoId
                this._Router.navigate(['DatosGenerales', CandidatoId]);
            });
    }
    
}