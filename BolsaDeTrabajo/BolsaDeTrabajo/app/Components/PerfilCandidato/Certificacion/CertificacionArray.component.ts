import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PerfilCandidatoService } from '../../../Services/PerfilCandidato.Service';
import { PerfilCandidato, Certificacion } from '../../../Models/PerfilCandidato';
import { AltaCandidatoValidator } from '../../alta.candidato.validators';

@Component({
    selector:'CertificacionesArray',
    templateUrl: 'app/Components/PerfilCandidato/Certificacion/CertificacionArray.component.html'
})
export class CertificacionesArray {
    @Input('PerfilCandidatoId')
    private PerfilCandidatoId: string;
    public CertificacionesArray: FormGroup;
    private certificaciones: Certificacion[];
    private title: string;
    constructor(private _fb: FormBuilder,
        private _Router: Router,
        private _Route: ActivatedRoute,
        private _perfilCandidatoService: PerfilCandidatoService) { }

    ngOnInit() { 

        this.CertificacionesArray = this._fb.group({
            certificaciones: this._fb.array([]),
        });


        this._perfilCandidatoService.GetCertificaciones(this.PerfilCandidatoId)
            .subscribe(data => {
                this.certificaciones = data;
                if (this.certificaciones == null) { 
                    this.addCertificacion(); 
                } else {
                    this.PopulateForm(this.certificaciones);
                }

            });
    }


    

    initCertificacion() {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            certificacion: ['', Validators.required],
            autoridadEmisora: [],
            licencia: [],
            urlCertificacion: [],
            noVence: [],
            yearInicioId: ['Año Inicio'],
            monthInicioId: ['Mes Inicio'],
            yearTerminoId: ['Año Termino'],
            monthTerminoId: ['Mes Termino']
        });
    }

    addCertificacion() {
        const control = <FormArray>this.CertificacionesArray.controls['certificaciones'];
        const addrCtrl = this.initCertificacion();
        control.push(addrCtrl);
    }

    removeCertificacion(i: any) {
        const control = <FormArray>this.CertificacionesArray.controls['certificaciones'];
        control.removeAt(i);
    }

     
    private EntityAttached() {
    }
    private PopulateForm(certificaciones: Certificacion[]) {
        var index: number = 1;  
        for (let certificacion in certificaciones) {
            this.addCertificacion()
        }
        this.CertificacionesArray.patchValue({ 
            certificaciones: certificaciones,
        });
    }


}