import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { Postulaciones } from '../../Components/Postulaciones/Postulaciones';
import { NotFoundComponent } from '../not-found.component'

const PostulacionesRoutes: Routes = [
    { path: 'Postulaciones/:candidatoId', component: Postulaciones },
    { path: 'not-found', component: NotFoundComponent },
]
@NgModule({
    imports: [RouterModule.forChild(
        PostulacionesRoutes
    )],
    exports:[RouterModule]
})
export class PostulacionesRoutingModule{}