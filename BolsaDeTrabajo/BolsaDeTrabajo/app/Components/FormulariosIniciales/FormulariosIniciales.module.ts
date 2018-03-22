import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';



import { FormulariosRoutingModule } from './formularios.routing';

//import { DatosDeContactoComponent } from './DatosDeContacto.component';
import { DatosDireccionComponent } from './DatosDireccion.component';
import { DatosPerfilComponent } from './DatosPerfil.component';

/**Services*/
import { CatalogosService } from '../../Services/catalogos.service';
import { DatosCandidatoService } from '../../Services/DatosDeCandidato.Service';
import { DireccionService } from '../../Services/Direccion.Service';
import { DatosPerfilService } from '../../Services/DatosPerfil.service';
import { PerfilCandidatoService } from '../../Services/PerfilCandidato.Service';
import { CatalogoPerfilCandidatoService } from '../../Services/Catalogo.PerfilCandidato.service'; 
import { QuickProfileService } from '../../Services/QuickProfile';
import { UsuarioService } from '../../Services/Usuario'
/*Datos generales Module */
import { DatosGeneralesModule } from '../DatosGenerales/DatosGenerales.module';
/** SharedModule */
import { SharedModule } from '../../Shared/Shared.module'
/**SharedValidators*/
import { CURPValidator } from '../../Components/Validators/CURP.validator'; 

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, FormulariosRoutingModule,
        CalendarModule, AutoCompleteModule, BrowserAnimationsModule, CheckboxModule,
        DatosGeneralesModule, SharedModule],
    declarations: [ 
        DatosDireccionComponent,
        DatosPerfilComponent,        
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' },
        DatosCandidatoService, DireccionService, DatosPerfilService, CatalogosService,
        QuickProfileService, PerfilCandidatoService, CatalogoPerfilCandidatoService,
        UsuarioService,
        CURPValidator,        
        CalendarModule, AutoCompleteModule, CheckboxModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FormulariosInicialesModule { }

//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

