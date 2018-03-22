import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DatosGeneralesComponent } from './DatosGenerales.component';
import { CandidatoPerfil } from '../PerfilCandidato/perfil-candidato.component';
import { NotFoundComponent } from '../not-found.component'

const DatosGeneralesRoutes: Routes = [
    { path: 'DatosGenerales/:candidatoId', component: DatosGeneralesComponent },
    { path: 'PerfilCandidato/:candidatoId', component: CandidatoPerfil },
    { path: 'not-found', component: NotFoundComponent },
        //{ path: '', component: DatosGeneralesComponent, pathMatch:'full' },
];
@NgModule({
    imports: [
        RouterModule.forChild(DatosGeneralesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DatosGeneralesRoutingModule { }


