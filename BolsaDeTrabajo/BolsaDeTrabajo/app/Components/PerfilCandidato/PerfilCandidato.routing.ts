import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CandidatoPerfil } from './perfil-candidato.component';
import { NotFoundComponent } from '../not-found.component'

const PerfilCandidatoRoutes: Routes = [
    { path: 'PerfilCandidato/:candidatoId', component: CandidatoPerfil },
    { path: 'not-found', component: NotFoundComponent },
    //{ path: '', component: DatosDeContactoComponent },

];
@NgModule({
    imports: [RouterModule.forChild(
        PerfilCandidatoRoutes
        )],
    exports: [RouterModule]
})
export class PerfilCandidatoRoutingModule { }