import { Component, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';

import { AltaCandidatoValidator } from '../../alta.candidato.validators';
import { CURPNombreValidator } from '../../Validators/CURPNombre.validator'
import { PerfilImageService } from '../../../Services/ProfileImage.service';
import { DatosGeneralesService } from '../../../Services/DatosGenerales.service';

import { Candidato, InformacionGeneral } from '../../../Models/Candidato';


@Component({
    selector:'damsa-info-gral',
    templateUrl: '/app/Components/DatosGenerales/InformacionGeneral/InformacionGeneral.component.html'
})
export class InformacionGeneralComponent implements OnInit {
    formInformacionGeneral: FormGroup;
    @Input('CandidatoId')
    CandidatoId: string;

    @Output('LoadProfileName')
    LoadProfileName = new EventEmitter();
    Edit: boolean = false;
    imgProfile: string = '';
    GralInfo: InformacionGeneral;
   

    constructor(
        private _DatosGeneralesService: DatosGeneralesService,
        private fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute, 
        private _perfilImageService: PerfilImageService,
        private _validatorCURP: CURPNombreValidator
    ) {
        this.formInformacionGeneral = fb.group({
            candidatoId:[],
            curp: [],
            imgProfileUrl: [''],
            Nombre: ['', Validators.required],
            apellidoPaterno: ['', Validators.required],
            apellidoMaterno: [''],
            email: ['',
                Validators.compose([Validators.required, AltaCandidatoValidator.ValidarCorreo])
            ],
            confirmEmail: ['',
                Validators.compose([Validators.required, AltaCandidatoValidator.ConfirmarCorreo])]
        });        

    }

    ngOnInit() {
        this.formInformacionGeneral.get('candidatoId').setValue(this.CandidatoId);
        this.GetInicialData();      
    } 
    GetInicialData() {
        this._DatosGeneralesService.GetInformacionGeneral(this.CandidatoId)
            .subscribe(InfoGral => {
                this.formInformacionGeneral.patchValue({
                    imgProfileUrl: InfoGral.imgProfileUrl,
                    Nombre: InfoGral.nombre,
                    apellidoPaterno: InfoGral.apellidoPaterno,
                    apellidoMaterno: InfoGral.apellidoMaterno,
                    curp: InfoGral.curp,
                    email: InfoGral.email,
                    confirmEmail: InfoGral.email
                });
                this.imgProfile = InfoGral.imgProfileUrl;
            });
    }
   
    OnLoadedProfileImage(event: any) {
        this.formInformacionGeneral.get('imgProfileUrl').setValue(event);
        this.Save();
      }

    OnEdit() {
        this.Edit = true;
    }
    DiscardEdit() {
        this.GetInicialData();
        this.Edit = false;
    }

    onNombreChangue(value: string) {
        this.formInformacionGeneral.get('Nombre').setValue(value.toUpperCase());
    }
    onApellidoPaternoChangue(value: string) {
        this.formInformacionGeneral.get('apellidoPaterno').setValue(value.toUpperCase());
    }
    onApellidoMaternoChangue(value: string) {
        this.formInformacionGeneral.get('apellidoMaterno').setValue(value.toUpperCase());
    }

    Save() {
        let curpValida = this._validatorCURP.ValidarCurpNombre(
            this.formInformacionGeneral.get('Nombre').value,
            this.formInformacionGeneral.get('apellidoPaterno').value,
            this.formInformacionGeneral.get('apellidoMaterno').value,
            this.formInformacionGeneral.get('curp').value,
        )
        if (curpValida) {
            this.Edit = false;
            console.log('editandoInformaciónpersonal')
            console.log(this.formInformacionGeneral.value)
            this._DatosGeneralesService.EditInformacionGeneral(this.formInformacionGeneral.value, this.CandidatoId)
                .subscribe(InfoGral => {
                    
                    //this._Router.navigate(['']);
                    this.LoadProfileName.emit(this.formInformacionGeneral.get('imgProfileUrl').value)
                    
                });
        } else
        {
            alert("Los datos del nombre no concuerdan con la curp proporcionada previamente.")
            this.GetInicialData();
        }
        
    }
}






