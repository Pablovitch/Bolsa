import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, AutoCompleteModule, CheckboxModule, DropdownModule } from 'primeng/primeng'; 
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DatosGeneralesRoutingModule } from './DatosGenerales.routing';
/**Self Components*/
import { DatosGeneralesComponent } from './DatosGenerales.component';
import { ImageUploaderComponent } from './ImageProfile/ImageProfileUpload.component';
import { InformacionGeneralComponent } from './InformacionGeneral/InformacionGeneral.component';
import { DatosPersonalesComponent } from './DatosPersonales/DatosPersonales.component';
import { DireccionComponent } from './Direccion/Direccion.component';
import { IdentificacionesComponent } from './Identificaciones/Identificaciones.component';

import { RedSocialComponent } from './RedesSociales/RedSocial';
import { RedSocialComponentArray } from './RedesSociales/RedesSocialesArray';

/**Services*/
import { CatalogosService } from '../../Services/catalogos.service';
import { DireccionService } from '../../Services/Direccion.Service';
import { DatosGeneralesService } from '../../Services/DatosGenerales.service';
import { PerfilImageService } from '../../Services/ProfileImage.service';
import { QuickProfileService } from '../../Services/QuickProfile';

/** SharedModule */
import { SharedModule } from '../../Shared/Shared.module';
/**SharedValidators*/
import { CURPValidator } from '../../Components/Validators/CURP.validator';
import { CURPNombreValidator } from '../../Components/Validators/CURPNombre.validator';

/**Perfil Candidato Module*/
import { PerfilCandidatoModule } from '../PerfilCandidato/PerfilCandidato.module';
/*** Pipes*/
import { MomentModule } from 'angular2-moment';
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule,
        CalendarModule, AutoCompleteModule, BrowserAnimationsModule, CheckboxModule, DropdownModule,
        DatosGeneralesRoutingModule, SharedModule, PerfilCandidatoModule, MomentModule
    ],
    declarations: [ 
        DatosGeneralesComponent,
        InformacionGeneralComponent, 
        ImageUploaderComponent,
        DatosPersonalesComponent,
        DireccionComponent,
        IdentificacionesComponent,
        RedSocialComponent,
        RedSocialComponentArray,
             
       
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' },
        DatosGeneralesService,
        DireccionService,
        CatalogosService,
        QuickProfileService,
        PerfilImageService,
        CURPValidator,
        CURPNombreValidator
    ]

})
export class DatosGeneralesModule { }

//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

