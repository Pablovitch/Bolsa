import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { PerfilCandidatoService } from '../../Services/PerfilCandidato.Service';
import { BarraComponent } from '../GeneralComponents/barra.component'


@Component({
    templateUrl:'/app/Components/DatosGenerales/DatosGenerales.component.html'
})
export class DatosGeneralesComponent implements OnInit {
    CandidatoId: string;
    ProfileName: string;
    Oculto: boolean = false;
    showMenu: boolean = true;
    @ViewChild(BarraComponent) damsaBarra: BarraComponent;
    constructor(private _Router: Router, private _Route: ActivatedRoute,
        private _perfilCandidatoService:PerfilCandidatoService
    ) {
        var parameters = this._Route.params.subscribe(params => {
            this.CandidatoId = params['candidatoId']; 
        });
    }

    ngOnInit() {
        this._perfilCandidatoService.GetPerfilCandidato(this.CandidatoId)
            .subscribe(PerfilCandidatoId => {
                localStorage.setItem('PerfilCandidatoId', PerfilCandidatoId);
               
            });  
        
    }

   
    ShowMenu() {
        this.showMenu = !this.showMenu;
    }
    

  
    OnLoadProfileName(event: any) {
        this.damsaBarra.PerfilImageOnChangue()
        this.ProfileName = event;
    }

    navigateprueba()
    {
        let candidatoId = this.CandidatoId;
        this._Router.navigate(['PerfilCandidato', candidatoId]);
    }

}