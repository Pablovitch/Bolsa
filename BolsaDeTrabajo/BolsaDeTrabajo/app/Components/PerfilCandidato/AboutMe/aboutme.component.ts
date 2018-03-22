import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CatalogoPerfilCandidatoService } from '../../../Services/Catalogo.PerfilCandidato.service';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';
import { AltaCandidatoValidator } from '../../alta.candidato.validators';
import { PerfilCandidatoValidator } from '../../Validators/PerfilCandidato.validators';

import { PerfilCandidato, AboutMe } from '../../../Models/PerfilCandidato'

@Component({
    selector: 'aboutme',
    templateUrl:'app/Components/PerfilCandidato/AboutMe/aboutme.component.html'
})
export class AboutMeComponent
{
    //@Input('group')
    public aboutMe: FormGroup;

    @Input('CandidatoId')
    CandidatoId: string;
    @Input('PerfilCandidatoId')
    private PerfilCandidatoId: string;;

    Edit: boolean = false;
    AreaExperiencia: string;
    PerfilExperiencia: string;
    AreaInteres: string;
    filteredAreaExperiencia: any[];
    gradosExperiencia: any[];
    areasInteres: any[];
    auxAreadeExperiencia: any;
    constructor(
        private _fb: FormBuilder,
        private _Catalogos: CatalogoPerfilCandidatoService,
        private _PerfilCandidatoService: PerfilCandidatoService,
        private _perfilCandidatoValidator: PerfilCandidatoValidator
    ) {
        this.aboutMe = this._fb.group({
            id: [],
            perfilCandidatoId: [],
            candidatoId:[],
            acercaDeMi: [''],
            puestoDeseado: [''],
            areaExperiencia: [''],
            areaExperienciaId: ['', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])],
            perfilExperienciaId: ['Grado de Experiencia', Validators.compose([
                Validators.required, AltaCandidatoValidator.ListaValidator
            ])],
            areaInteresId: ['Área de interes'],
            salarioAceptable: ['', Validators.required],
            salarioDeseado: ['', Validators.required],
            sitioWeb: [''],
            
        });

        this.aboutMe.get('candidatoId').setValue(this.CandidatoId);
        this.aboutMe.get('perfilCandidatoId').setValue(this.PerfilCandidatoId);
        this._Catalogos.GetGradosExperiencia()
            .subscribe(gradosExperiencia => {
                this.gradosExperiencia = gradosExperiencia;
            });
        this._Catalogos.GetAreasInteres()
            .subscribe(areas => {
                this.areasInteres = areas;
            });
        
    }

    ngOnInit() {
        this.aboutMe.get('candidatoId').setValue(this.CandidatoId);
        this.aboutMe.get('perfilCandidatoId').setValue(this.PerfilCandidatoId);
        this.GetInitialData();
    }

    GetInitialData()
    {
         
        this._PerfilCandidatoService.GetAboutMe(this.PerfilCandidatoId)
            .subscribe(aboutMe => {               
                this.aboutMe.patchValue({
                    id: aboutMe.id,
                    perfilCandidatoId: aboutMe.perfilCandidatoId,
                    acercaDeMi: aboutMe.acercaDeMi,
                    puestoDeseado: aboutMe.puestoDeseado,
                    areaExperiencia: aboutMe.areaExperiencia,
                    areaExperienciaId: aboutMe.areaExperienciaId,
                    perfilExperienciaId: aboutMe.perfilExperienciaId,
                    areaInteresId: aboutMe.areaExperienciaId,
                    salarioAceptable: aboutMe.salarioAceptable,
                    salarioDeseado: aboutMe.salarioDeseado,
                    sitioWeb: aboutMe.sitioWeb
                });

                this.AreaExperiencia = (aboutMe.areaExperiencia != null) ? aboutMe.areaExperiencia.areaExperiencia:'';
                this.PerfilExperiencia = (aboutMe.perfilExperiencia !=null) ? aboutMe.perfilExperiencia.perfilExperiencia : '';
                this.AreaInteres = (aboutMe.areaInteres != null) ? aboutMe.areaInteres.areaInteres : '';
            });
    }
    sitioWebOk: boolean = true;
    SitioWebExist()
    {
        this._PerfilCandidatoService.RemoteUrlExist(this.aboutMe.get('sitioWeb').value)
            .subscribe(response => {
                this.sitioWebOk = response;
                if (!response)
                {
                    this.aboutMe.get('sitioWeb').setValue(null);
                }
                
            });
    }

    filterAreaExperiencia(event: any) {
        let query = event.query;
        this._Catalogos.GetAreasExperiencia(query)
            .then(areasExperiencia => {
                this.filteredAreaExperiencia = areasExperiencia;
            })
    }

    SetAreaExperienciaId(event:any)
    {
        this.aboutMe.get('areaExperienciaId').setValue(event.id);       
        this.AreaExperiencia = event.areaExperiencia;
    }

    PerfilExperienciaOnChangue(value: any) {
        if (value == null) return;
        this.PerfilExperiencia = this.gradosExperiencia.find(x => x.id == value).perfilExperiencia;
    }
    AreaInteresOnChangue(value: any) {
        if (value == null) return;
        this.AreaInteres = this.areasInteres.find(x => x.id == value).areaInteres;
    }
    OnEdit() {
        this.Edit = true;
    }
    DiscardEdit() {
        this.GetInitialData();
        this.Edit = false;
    }

    

    Save() {
        this.Edit = false;
        this.auxAreadeExperiencia = this.aboutMe.get('areaExperiencia').value;
        this.aboutMe.get('areaExperiencia').setValue(null);
        this._PerfilCandidatoService.UpdateAboutMe(this.aboutMe.value)
            .subscribe(aboutMe => { 
                this.aboutMe.get('areaExperiencia').setValue(this.auxAreadeExperiencia);
                this.AreaExperiencia = this.auxAreadeExperiencia.areaExperiencia
            });
    }
}