import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, AutoCompleteModule, CheckboxModule, DropdownModule, TooltipModule, SliderModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
/*Routings*/
import { AppRoutingModule } from './app.routing';
 /*Formularios Iniciales*/
import { DatosDeContactoComponent } from './Components/FormulariosIniciales/DatosDeContacto.component';

import { FormulariosInicialesModule } from './Components/FormulariosIniciales/FormulariosIniciales.module';
/** Services */
import { CandidatosService } from './Services/Candidatos.Service';
import { QuickProfileService } from './Services/QuickProfile';

/** SharedModule */
import { SharedModule } from './Shared/Shared.module'


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, BrowserAnimationsModule,
        AppRoutingModule,
        CalendarModule, AutoCompleteModule, CheckboxModule, DropdownModule, TooltipModule,
        FormulariosInicialesModule, SharedModule, SliderModule
    ],
    declarations: [
        AppComponent, DatosDeContactoComponent
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' },
        CandidatosService, QuickProfileService,
        CalendarModule, AutoCompleteModule, CheckboxModule, DropdownModule],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }

//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

