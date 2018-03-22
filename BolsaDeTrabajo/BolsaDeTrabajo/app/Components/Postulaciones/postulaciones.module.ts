import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { PaginatorModule, DialogModule } from 'primeng/primeng';

/** SharedModule */
import { SharedModule } from '../../Shared/Shared.module'
import { AlertasModule } from '../Alertas/alertas.module'

/** PostulacionesModules */
import { Postulaciones } from '../../Components/Postulaciones/Postulaciones';

/**Postulaciones Service */
import { PostulacionesService } from '../../Services/Postulaciones'
import { DetalleVacanteService } from '../../Services/DetalleVacante'
@NgModule({
    imports: [
        BrowserModule, ReactiveFormsModule,
        FormsModule, HttpModule, RouterModule,
        PaginatorModule, DialogModule,
        AlertasModule,
        SharedModule
    ],
    declarations: [Postulaciones ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        PostulacionesService,
        DetalleVacanteService
    ]
})
export class PostulacionesModule {}