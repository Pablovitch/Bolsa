import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutVacanteComponent } from '../Vacantes/app.LayoutVcts';
import { NotFoundComponent } from '../not-found.component';

const VacantesRoutes: Routes = [
    { path: 'Vacantes/:candidatoId', component: LayoutVacanteComponent },
    { path: 'not-found', component: NotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forChild(VacantesRoutes)],
    exports: [RouterModule]
})
export class VacantesRoutingModule{}