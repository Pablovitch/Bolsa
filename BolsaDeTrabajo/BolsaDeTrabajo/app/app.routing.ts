import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { DatosDeContactoComponent } from './Components/FormulariosIniciales/DatosDeContacto.component';
import { CandidatosTableComponent } from './Components/TablaCandidatos/CandidatosTable.component';


import { NotFoundComponent } from './Components/not-found.component'; 

const appRoutes: Routes = [ 
    //{ path: '', component: DatosDeContactoComponent,  pathMatch: 'full' },
    { path: 'DatosContacto/:Id', component: DatosDeContactoComponent },
    //{ path: 'FormulariosIniciales', component: DatosDeContactoComponent },
    { path: 'not-found', component: NotFoundComponent },

];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

//export const routing: ModuleWithProviders =
//    RouterModule.forRoot(appRoutes);
