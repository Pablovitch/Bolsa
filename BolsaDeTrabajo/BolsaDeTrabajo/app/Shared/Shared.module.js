"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
/**SharedDirectives */
var OnlyLetters_directive_1 = require("../Directives/OnlyLetters.directive");
var OnlyNumbers_Directive_1 = require("../Directives/OnlyNumbers.Directive");
/**SharedValidators*/
var CURP_validator_1 = require("../Components/Validators/CURP.validator");
var CURPNombre_validator_1 = require("../Components/Validators/CURPNombre.validator");
/**SharedSComponents*/
var not_found_component_1 = require("../Components/not-found.component");
var bar_social_component_1 = require("../Components/GeneralComponents/bar.social.component");
var barra_component_1 = require("../Components/GeneralComponents/barra.component");
var menu_oculto_component_1 = require("../Components/GeneralComponents/menu-oculto.component");
var profile_percent_component_1 = require("../Components/GeneralComponents/profile.percent.component");
// /*Formularios Iniciales*/
//import { DatosDeContactoComponent } from '../Components/FormulariosIniciales/DatosDeContacto.component';
/*Routings*/
var app_routing_1 = require("../app.routing");
var formularios_routing_1 = require("../Components/FormulariosIniciales/formularios.routing");
var DatosGenerales_routing_1 = require("../Components/DatosGenerales/DatosGenerales.routing");
var PerfilCandidato_routing_1 = require("../Components/PerfilCandidato/PerfilCandidato.routing");
var vacante_routing_1 = require("../Components/Vacantes/vacante.routing");
var postulaciones_routing_1 = require("../Components/Postulaciones/postulaciones.routing");
var alertas_routing_1 = require("../Components/Alertas/alertas.routing");
///*Services*/
//import { QuickProfileService } from '../Services/QuickProfile'
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routing_1.AppRoutingModule,
            formularios_routing_1.FormulariosRoutingModule,
            DatosGenerales_routing_1.DatosGeneralesRoutingModule,
            PerfilCandidato_routing_1.PerfilCandidatoRoutingModule,
            vacante_routing_1.VacantesRoutingModule,
            postulaciones_routing_1.PostulacionesRoutingModule,
            alertas_routing_1.AlertasRoutingModule,
            common_1.CommonModule, forms_1.ReactiveFormsModule
        ],
        declarations: [
            OnlyLetters_directive_1.OnlyLetters, OnlyNumbers_Directive_1.OnlyNumber,
            CURP_validator_1.CURPValidator, CURPNombre_validator_1.CURPNombreValidator,
            not_found_component_1.NotFoundComponent, bar_social_component_1.BarSocialComponent, barra_component_1.BarraComponent, menu_oculto_component_1.MenuOcultoComponent, profile_percent_component_1.ProfilePercentageComponent
        ],
        exports: [
            OnlyLetters_directive_1.OnlyLetters, OnlyNumbers_Directive_1.OnlyNumber,
            CURP_validator_1.CURPValidator,
            not_found_component_1.NotFoundComponent, bar_social_component_1.BarSocialComponent, barra_component_1.BarraComponent, menu_oculto_component_1.MenuOcultoComponent, profile_percent_component_1.ProfilePercentageComponent,
            common_1.CommonModule, forms_1.FormsModule
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=Shared.module.js.map