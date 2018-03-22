import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DatosDeContactoComponent } from './DatosDeContacto.component';
import { DatosDireccionComponent } from './DatosDireccion.component';
import { DatosPerfilComponent } from './DatosPerfil.component';
import { DatosGeneralesComponent } from '../DatosGenerales/DatosGenerales.component'
import { NotFoundComponent } from '../not-found.component'

const FormulariosInicialesRoutes: Routes = [
    //{ path: 'DatosContacto', component: DatosDeContactoComponent },
    { path: 'DatosContacto/:id', component: DatosDeContactoComponent },
    { path: 'Direccion/:id', component: DatosDireccionComponent },
    { path: 'DatosPerfilComponent/:personaId', component: DatosPerfilComponent },
    { path: 'DatosGenerales/:candidatoId', component: DatosGeneralesComponent },
    { path: 'not-found', component: NotFoundComponent },
];
@NgModule({
    imports: [RouterModule.forChild(
        FormulariosInicialesRoutes
    )],
    exports: [RouterModule]
})
export class FormulariosRoutingModule{ }



