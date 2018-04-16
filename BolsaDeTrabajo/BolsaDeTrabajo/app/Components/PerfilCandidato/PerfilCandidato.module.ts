import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, AutoCompleteModule, CheckboxModule, TooltipModule, DialogModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { PerfilCandidatoRoutingModule } from './PerfilCandidato.routing';

/**Self Components*/
import { AboutMeComponent } from './AboutMe/aboutme.component';
import { CandidatoPerfil } from './perfil-candidato.component';
import { CertificacionComponent } from './Certificacion/Certificacion.component';
import { CertificacionesArray } from './Certificacion/CertificacionArray.component';
import { ConocimientoComponent } from './Conocimientos/Conocimiento.component';
import { ConocimientosArray } from './Conocimientos/ConocimientoArray.component';
import { CursoComponent } from './Curso/curso.component';
import { CursosArray } from './Curso/CursoArray.component';
import { ExperienciaProfesionalComponent } from './ExperienciaProfesional/ExperienciaProfesional.componet';
import { ExperienciasProfesionalesArray } from './ExperienciaProfesional/ExperienciaProfesionalArray.component';
import { FormacionComponent } from './Formacion/Formacion.Component';
import { FormacionesArray } from './Formacion/FormacionArray.component';
import { IdiomaComponent } from './Idioma/idioma.component';
import { IdiomaArray } from './Idioma/IdiomaArray.component';

/**Services*/
import { CatalogosService } from '../../Services/catalogos.service';
import { CatalogoPerfilCandidatoService } from '../../Services/Catalogo.PerfilCandidato.service';
import { QuickProfileService } from '../../Services/QuickProfile';

import { PerfilCandidatoValidator } from '../../Components/Validators/PerfilCandidato.validators';

/** SharedModule */
import { SharedModule } from '../../Shared/Shared.module'

/**Vacantes Module */
import { VacanteModule } from '../../Components/Vacantes/vacante.module';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, RouterModule,
        CalendarModule, AutoCompleteModule, BrowserAnimationsModule, CheckboxModule, TooltipModule,
        PerfilCandidatoRoutingModule, DialogModule,
        SharedModule,
        VacanteModule ],
    declarations: [
        AboutMeComponent,
        CandidatoPerfil,
        CertificacionComponent,
        CertificacionesArray,
        ConocimientoComponent,
        ConocimientosArray,
        CursoComponent,
        CursosArray,
        ExperienciaProfesionalComponent,
        ExperienciasProfesionalesArray,
        FormacionComponent,
        FormacionesArray,
        IdiomaComponent,
        IdiomaArray
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' },
        CatalogosService, CatalogoPerfilCandidatoService, QuickProfileService, PerfilCandidatoValidator
    ]

})
export class PerfilCandidatoModule { }

//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

