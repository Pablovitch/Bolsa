import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginatorModule, DialogModule, SliderModule, CheckboxModule } from 'primeng/primeng';

/** SharedModule */
import { SharedModule } from '../../Shared/Shared.module'

/** Vacantes Modules */
import { LayoutVacanteComponent } from '../Vacantes/app.LayoutVcts';
import { VacanteComponent } from '../Vacantes/Vacante/vacante.component';
import { BusquedaComponent } from '../Vacantes/Busqueda/busqueda.component';

/**Vacantes Service */
import { VacantesService } from '../../Services/vacantes.service'

/**Postulaciones module*/
import { PostulacionesModule } from '../Postulaciones/postulaciones.module'
@NgModule({
    imports: [
        BrowserModule, ReactiveFormsModule,
        FormsModule, HttpModule, RouterModule,
        PaginatorModule, DialogModule, SliderModule, CheckboxModule,
        SharedModule,
        PostulacionesModule
    ],
    declarations: [
        LayoutVacanteComponent,
        VacanteComponent,
        BusquedaComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        VacantesService
    ]
})
export class VacanteModule{}
