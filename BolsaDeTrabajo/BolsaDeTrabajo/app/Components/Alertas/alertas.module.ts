import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router' 

/** SharedModule */
import { SharedModule } from '../../Shared/Shared.module'

/** AlertasModules */
import { Alerts } from '../Alertas/Alertas';
/**Alertas Service */ 
@NgModule({
    imports: [
        BrowserModule, ReactiveFormsModule,
        FormsModule, HttpModule, RouterModule, 
        SharedModule
    ],
    declarations: [Alerts],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }, 
    ]
})
export class AlertasModule { }