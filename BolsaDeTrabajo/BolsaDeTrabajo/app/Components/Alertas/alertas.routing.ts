import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { Alerts } from '../../Components/Alertas/Alertas';
import { NotFoundComponent } from '../not-found.component'

const AlertsRoutes: Routes = [
    { path: 'Alertas/:candidatoId', component: Alerts },
    { path: 'not-found', component: NotFoundComponent },
]
@NgModule({
    imports: [RouterModule.forChild(
        AlertsRoutes
    )],
    exports: [RouterModule]
})
export class AlertasRoutingModule { }