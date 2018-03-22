import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

/**SharedDirectives */
import { OnlyLetters } from '../Directives/OnlyLetters.directive';
import { OnlyNumber } from '../Directives/OnlyNumbers.Directive';

/**SharedValidators*/
import { CURPValidator } from '../Components/Validators/CURP.validator';
import { CURPNombreValidator } from '../Components/Validators/CURPNombre.validator';


/**SharedSComponents*/
import { NotFoundComponent } from '../Components/not-found.component';
import { BarSocialComponent, } from '../Components/GeneralComponents/bar.social.component';
import { BarraComponent } from '../Components/GeneralComponents/barra.component';
import { MenuOcultoComponent } from '../Components/GeneralComponents/menu-oculto.component'; 
import { ProfilePercentageComponent } from '../Components/GeneralComponents/profile.percent.component';
// /*Formularios Iniciales*/
//import { DatosDeContactoComponent } from '../Components/FormulariosIniciales/DatosDeContacto.component';

/*Routings*/
import { AppRoutingModule } from '../app.routing';
import { FormulariosRoutingModule } from '../Components/FormulariosIniciales/formularios.routing';
import { DatosGeneralesRoutingModule } from '../Components/DatosGenerales/DatosGenerales.routing';
import { PerfilCandidatoRoutingModule } from '../Components/PerfilCandidato/PerfilCandidato.routing';
import { VacantesRoutingModule } from '../Components/Vacantes/vacante.routing'
import { PostulacionesRoutingModule } from '../Components/Postulaciones/postulaciones.routing';
import { AlertasRoutingModule } from '../Components/Alertas/alertas.routing'


///*Services*/
//import { QuickProfileService } from '../Services/QuickProfile'

@NgModule({
    imports: [
        AppRoutingModule,
        FormulariosRoutingModule,
        DatosGeneralesRoutingModule,
        PerfilCandidatoRoutingModule,
        VacantesRoutingModule,
        PostulacionesRoutingModule,
        AlertasRoutingModule,
        CommonModule, ReactiveFormsModule
    ],
    declarations: [
        OnlyLetters, OnlyNumber,
        CURPValidator, CURPNombreValidator,
        NotFoundComponent, BarSocialComponent, BarraComponent, MenuOcultoComponent, ProfilePercentageComponent 
    ], 
    exports: [
        OnlyLetters, OnlyNumber,
        CURPValidator, 
        NotFoundComponent, BarSocialComponent, BarraComponent, MenuOcultoComponent, ProfilePercentageComponent, 
        CommonModule, FormsModule
    ]
})
export class SharedModule{}