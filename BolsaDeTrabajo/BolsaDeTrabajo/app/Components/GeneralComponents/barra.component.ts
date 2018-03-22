import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { QuickProfileService } from '../../Services/QuickProfile';
import { QuickProfile } from '../../Models/QuickProfile';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
@Component({
    selector: 'damsa-barra',
    templateUrl:'/app/Components/GeneralComponents/barra.component.html'
})
export class BarraComponent implements OnInit {
    

    @Output('ClickMenuBoton')
    clickMenuButton = new EventEmitter();
    @Input('ProfileName')
    CandidatoNombre: string;
    @Input('Oculto')
    Oculto: boolean;

    @Input('CandidatoId')
    CandidatoId: string;
    defautlUrlImageProfile: string = '/assets/images/photo-default.png'
    urlImageProfile: string;
    nombreCompleto:string
    public quickProfile: QuickProfile;
    
    constructor(
        private  _Route: ActivatedRoute,
        private _quickProfileService: QuickProfileService
    ) { 
        
    
    }

    ngOnInit() {
        
        if (this.CandidatoId != null && this.CandidatoId != undefined) {
            this._quickProfileService.GetQuickProfile(this.CandidatoId)
                .subscribe(quickprofile => {
                    //console.log(quickprofile);
                    this.nombreCompleto = quickprofile.nombreCompleto;
                    this.urlImageProfile = (quickprofile.urlImageProfile == null) ? this.defautlUrlImageProfile : quickprofile.urlImageProfile;
                    //console.log('quickprofile');
                    //console.log(this.urlImageProfile);
                    this.quickProfile = quickprofile;
                });
        }
    }

    onClick() {
        this.clickMenuButton.emit();
    }

    PerfilImageOnChangue() {
        this.ngOnInit();
    }
}