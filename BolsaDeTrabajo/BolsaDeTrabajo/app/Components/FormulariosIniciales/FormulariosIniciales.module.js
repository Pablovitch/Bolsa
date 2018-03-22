"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var primeng_1 = require("primeng/primeng");
var formularios_routing_1 = require("./formularios.routing");
//import { DatosDeContactoComponent } from './DatosDeContacto.component';
var DatosDireccion_component_1 = require("./DatosDireccion.component");
var DatosPerfil_component_1 = require("./DatosPerfil.component");
/**Services*/
var catalogos_service_1 = require("../../Services/catalogos.service");
var DatosDeCandidato_Service_1 = require("../../Services/DatosDeCandidato.Service");
var Direccion_Service_1 = require("../../Services/Direccion.Service");
var DatosPerfil_service_1 = require("../../Services/DatosPerfil.service");
var PerfilCandidato_Service_1 = require("../../Services/PerfilCandidato.Service");
var Catalogo_PerfilCandidato_service_1 = require("../../Services/Catalogo.PerfilCandidato.service");
var QuickProfile_1 = require("../../Services/QuickProfile");
var Usuario_1 = require("../../Services/Usuario");
/*Datos generales Module */
var DatosGenerales_module_1 = require("../DatosGenerales/DatosGenerales.module");
/** SharedModule */
var Shared_module_1 = require("../../Shared/Shared.module");
/**SharedValidators*/
var CURP_validator_1 = require("../../Components/Validators/CURP.validator");
var FormulariosInicialesModule = (function () {
    function FormulariosInicialesModule() {
    }
    return FormulariosInicialesModule;
}());
FormulariosInicialesModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule, formularios_routing_1.FormulariosRoutingModule,
            primeng_1.CalendarModule, primeng_1.AutoCompleteModule, animations_1.BrowserAnimationsModule, primeng_1.CheckboxModule,
            DatosGenerales_module_1.DatosGeneralesModule, Shared_module_1.SharedModule],
        declarations: [
            DatosDireccion_component_1.DatosDireccionComponent,
            DatosPerfil_component_1.DatosPerfilComponent,
        ],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' },
            DatosDeCandidato_Service_1.DatosCandidatoService, Direccion_Service_1.DireccionService, DatosPerfil_service_1.DatosPerfilService, catalogos_service_1.CatalogosService,
            QuickProfile_1.QuickProfileService, PerfilCandidato_Service_1.PerfilCandidatoService, Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
            Usuario_1.UsuarioService,
            CURP_validator_1.CURPValidator,
            primeng_1.CalendarModule, primeng_1.AutoCompleteModule, primeng_1.CheckboxModule
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], FormulariosInicialesModule);
exports.FormulariosInicialesModule = FormulariosInicialesModule;
//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
//# sourceMappingURL=FormulariosIniciales.module.js.map