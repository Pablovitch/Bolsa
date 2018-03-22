import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';

import { CURPValidator } from '../../Validators/CURP.validator';
import { DatosGeneralesService } from '../../../Services/DatosGenerales.service';
import { CatalogosService } from '../../../Services/catalogos.service';
import { Catalogos } from '../../../Shared/ApiCatalogos';

import { DataValidation } from '../../../Models/ValidationCurpModel';
import { ITipoLicencia } from '../../../Models/ITipoLicencia';

import { DatosCandidatoService } from '../../../Services/DatosDeCandidato.Service'
@Component({
    selector: 'damsa-identificaciones',
    templateUrl:'/app/Components/DatosGenerales/Identificaciones/Identificaciones.component.html'
})
export class IdentificacionesComponent implements OnInit{
    formIdentificaciones: FormGroup;
    @Input('CandidatoId')
    CandidatoId: string;
    Edit: boolean = false;
    tieneLicencia: boolean=false;
    filteredTiposLicencia: any[];
    TipoLicencia: string;
    DataCandidato: DataValidation;
    ITipoLicencia: string;
    constructor(private _Router: Router, private fb: FormBuilder,
        private _ValidatorCURP: CURPValidator, private _Route: ActivatedRoute,
        private _DatosGeneralesService: DatosGeneralesService, private _CatalogoService: CatalogosService,
        private _DatosCandidatoService: DatosCandidatoService,
    ) {
        this.formIdentificaciones = fb.group({
            candidatoId: [],
            nss: [''],
            curp: [{ value: '', disabled: true }, Validators.compose([Validators.required])],
            rfc: [''],
            tieneLicenciaConducir: [false],
            tipoLicenciaId: []
        });

        this._CatalogoService.getTiposLicencia(Catalogos.TIPOSLICENCIAS)
            .subscribe(tiposLicencias => {
                this.filteredTiposLicencia = tiposLicencias;
            });
    }

    ngOnInit() {
        this.formIdentificaciones.get('candidatoId').setValue(this.CandidatoId);
        this.GetInitialData();
    }

    GetInitialData()
    {
        this._DatosGeneralesService.GetIdentificaciones(this.CandidatoId)
            .subscribe(identificaciones => {

                this.formIdentificaciones.patchValue({
                    nss: identificaciones.nss,
                    curp: identificaciones.curp,
                    rfc: identificaciones.rfc,
                    tieneLicenciaConducir: identificaciones.tieneLicenciaConducir,
                    tipoLicenciaId: identificaciones.tipoLicenciaId
                });
               
                
                if (identificaciones.tieneLicenciaConducir) {
                    this.showTiposLicencias(identificaciones.tieneLicenciaConducir);
                    this.TipoLicenciaOnChange(identificaciones.tipoLicenciaId)
                }
            });
    }
    OnEdit() {
        this._DatosGeneralesService.GetDataValidation(this.CandidatoId)
            .subscribe(data => {
                this.DataCandidato = data;
            })
        this.Edit = true;
    }
    DiscardEdit() {
        this.GetInitialData();
        this.Edit = false;
    }

    showTiposLicencias(isChecked: boolean) {
        this.tieneLicencia = isChecked; 
    }

    TipoLicenciaOnChange(value: number) { 
        this.TipoLicencia = this.filteredTiposLicencia.find(x => x.id == value).tipoLicencia;
    }

    seguroSocialValido: boolean = true;
    ValidarSeguroSocial() {
        this.seguroSocialValido = true;
        if (this.formIdentificaciones.get('nss').value == null) {
            return;
        }
        var imss = this.formIdentificaciones.get('nss').value;
        if (imss.trim().length != 11) {
            this.formIdentificaciones.get('nss').setValue(null);
            return;
        }
        var isValid = this._ValidatorCURP.ValidarIMSS(
            new Date(this.DataCandidato.fechaNacimiento),
            this.formIdentificaciones.get('nss').value
        );
        if (!isValid) {
            this.seguroSocialValido = false;
           this.formIdentificaciones.get('nss').setValue(null);
        } else {
            this.seguroSocialValido = true;
        }
    }

    ClickSeguroSocial() {
        this.seguroSocialValido = false;
    }


    rfcValido: boolean = true;
    ValidarRFC() {
        this.rfcValido = true;
        if (this.formIdentificaciones.get('rfc').value == null) {
            return;
        }
        var rfc = this.formIdentificaciones.get('rfc').value;
        if (rfc.trim().length != 13) {
            this.formIdentificaciones.get('rfc').setValue(null);
            return;
        }
        var isValid = this._ValidatorCURP.ValidarRFC(
            this.DataCandidato.nombre,
            this.DataCandidato.apellidoPaterno,
            this.DataCandidato.apellidoMaterno,
            new Date(this.DataCandidato.fechaNacimiento),
            this.DataCandidato.generoId.toString(),
            this.DataCandidato.estadoNacimiento,
            this.formIdentificaciones.get('rfc').value

        );

        if (!isValid) {
            this.rfcValido = false;
            this.formIdentificaciones.get('rfc').setValue(null);
        } else {
            this.rfcValido = true;
        }
    }

    curpValida: boolean = true;
    esMexicano: boolean = false;
    ExisteCurp: boolean = false;
    ValidandoCURP(event: any) {
        if (this.formIdentificaciones.get('curp').value == null) {
            return;
        }
        var curp = this.formIdentificaciones.get('curp').value;
        if (curp.trim().length != 18) {
            this.formIdentificaciones.get('curp').setValue(null);
            return;
        }
        if (this.DataCandidato.paisNacimiento.pais.toUpperCase()=="MEXICO")
        {
            this.esMexicano = true;

        }
        var isValid = this._ValidatorCURP.ValidarCurp(
            this.DataCandidato.nombre,
            this.DataCandidato.apellidoPaterno,
            this.DataCandidato.apellidoMaterno,
            new Date(this.DataCandidato.fechaNacimiento),
            this.DataCandidato.generoId.toString(),
            this.DataCandidato.estadoNacimiento,
            this.formIdentificaciones.get('curp').value,
            this.esMexicano

        );
        if (isValid) {
            this._DatosCandidatoService.ExistCurp(this.formIdentificaciones.get('curp').value, )
                .subscribe(data => {
                    this.ExisteCurp = data;
                    this.curpValida = true;

                })

        } else {
            this.curpValida = false;
        }
    }

    ClickRFC() {
        this.rfcValido = false;
    }

    KeyUpRFC(value: any) {
        this.rfcValido = false;
    }
    onNNSChangue(value: string) {
        this.formIdentificaciones.get('nss').setValue(value.toUpperCase());
    }
    onCURPChangue(value: string) {
        this.formIdentificaciones.get('curp').setValue(value.toUpperCase());
    }
    onRFCChangue(value: string) {
        this.formIdentificaciones.get('rfc').setValue(value.toUpperCase());
    }

    Save() {
        if (this.tieneLicencia) {
            if (this.formIdentificaciones.get('tipoLicenciaId').value > 0) {
                this._DatosGeneralesService.EditIdentificaciones(this.formIdentificaciones.getRawValue(), this.CandidatoId)
                    .subscribe(PersonaId => {
                        this.Edit = false;
                        //this.formDatosDeContacto.markAsPristine();
                        //this._Router.navigate(['DatosPerfilComponent', PersonaId]);
                    });
            } else {
                alert("Si cuenta con licencia de conducir \n debe seleccionar el tipo de licencia.")
            }
        } else {
            this._DatosGeneralesService.EditIdentificaciones(this.formIdentificaciones.getRawValue(), this.CandidatoId)
                .subscribe(PersonaId => {
                    this.Edit = false;
                    //this.formDatosDeContacto.markAsPristine();
                    //this._Router.navigate(['DatosPerfilComponent', PersonaId]);
                });
        }
    }
}