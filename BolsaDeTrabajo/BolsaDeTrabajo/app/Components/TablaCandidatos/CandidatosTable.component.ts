import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ICandidato } from '../../Models/ICandidato';
import { CandidatosService } from '../../Services/Candidatos.Service';

@Component({
    templateUrl:'app/Components/TablaCandidatos/CandidatosTable.html'
})

export class CandidatosTableComponent {
    candidatos: any[];
    

    constructor(private _CandidatosService: CandidatosService, private _router: Router)
    { }

    ProfileName: string = '';
    Oculto: boolean = true;
    showMenu: boolean = true;
    ShowMenu() {
        this.showMenu = true;
    }

    ngOnInit()
    {
        this.LoadCandidatos();
    }

    LoadCandidatos()
    {
        this._CandidatosService.GetCandidatos()
            .subscribe(data => { 
                this.candidatos = data
            }, Error => console.log(<any>Error))
    }


    NewCandidato()
    {
        this._router.navigate(['FormulariosIniciales']);
    }

    


    DeleteCandidato(candidato: any) {
         var error: string;
        if (confirm("Seguro que deseas eliminar " + candidato.nombre + "?")) {
            var index = this.candidatos.indexOf(candidato)
            // Here, with the splice method, we remove 1 object
            // at the given index.
            this.candidatos.splice(index, 1);

            this._CandidatosService.DeleteCandidato(candidato.id)
                .subscribe(null,
                err => {
                    if (err != null) {
                        alert("Could not delete the user.");
                        this.candidatos.splice(index, 0, candidato);
                    }
                    // Revert the view back to its original state
                    // by putting the user object at the index
                    // it used to be.
                    //this.candidatos.splice(index, 0, candidato);
                });
        }
    }
}