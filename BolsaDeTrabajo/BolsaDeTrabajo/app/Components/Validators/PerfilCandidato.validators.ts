import { FormControl, FormGroup } from '@angular/forms';
import { PerfilCandidatoService } from '../../Services/PerfilCandidato.Service';
import { Injectable } from '@angular/core';
@Injectable()
export class PerfilCandidatoValidator {
    constructor(private _perfilCandidatoService: PerfilCandidatoService){}

    /*static*/ SitioWebExist(control: FormControl):any
    {
        let exist: boolean;
            this._perfilCandidatoService.RemoteUrlExist(control.value)
                .subscribe(response => {
                    exist = response;
            });
            if (exist)
            { return null }
            else
            { return { SitioWebExist: true } }
        
           
    }


}