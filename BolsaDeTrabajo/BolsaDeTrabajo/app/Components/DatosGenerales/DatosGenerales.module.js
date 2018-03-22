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
var primeng_1 = require("primeng/primeng");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var DatosGenerales_routing_1 = require("./DatosGenerales.routing");
/**Self Components*/
var DatosGenerales_component_1 = require("./DatosGenerales.component");
var ImageProfileUpload_component_1 = require("./ImageProfile/ImageProfileUpload.component");
var InformacionGeneral_component_1 = require("./InformacionGeneral/InformacionGeneral.component");
var DatosPersonales_component_1 = require("./DatosPersonales/DatosPersonales.component");
var Direccion_component_1 = require("./Direccion/Direccion.component");
var Identificaciones_component_1 = require("./Identificaciones/Identificaciones.component");
var RedSocial_1 = require("./RedesSociales/RedSocial");
var RedesSocialesArray_1 = require("./RedesSociales/RedesSocialesArray");
/**Services*/
var catalogos_service_1 = require("../../Services/catalogos.service");
var Direccion_Service_1 = require("../../Services/Direccion.Service");
var DatosGenerales_service_1 = require("../../Services/DatosGenerales.service");
var ProfileImage_service_1 = require("../../Services/ProfileImage.service");
var QuickProfile_1 = require("../../Services/QuickProfile");
/** SharedModule */
var Shared_module_1 = require("../../Shared/Shared.module");
/**SharedValidators*/
var CURP_validator_1 = require("../../Components/Validators/CURP.validator");
var CURPNombre_validator_1 = require("../../Components/Validators/CURPNombre.validator");
/**Perfil Candidato Module*/
var PerfilCandidato_module_1 = require("../PerfilCandidato/PerfilCandidato.module");
/*** Pipes*/
var angular2_moment_1 = require("angular2-moment");
var DatosGeneralesModule = (function () {
    function DatosGeneralesModule() {
    }
    return DatosGeneralesModule;
}());
DatosGeneralesModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule,
            primeng_1.CalendarModule, primeng_1.AutoCompleteModule, animations_1.BrowserAnimationsModule, primeng_1.CheckboxModule, primeng_1.DropdownModule,
            DatosGenerales_routing_1.DatosGeneralesRoutingModule, Shared_module_1.SharedModule, PerfilCandidato_module_1.PerfilCandidatoModule, angular2_moment_1.MomentModule
        ],
        declarations: [
            DatosGenerales_component_1.DatosGeneralesComponent,
            InformacionGeneral_component_1.InformacionGeneralComponent,
            ImageProfileUpload_component_1.ImageUploaderComponent,
            DatosPersonales_component_1.DatosPersonalesComponent,
            Direccion_component_1.DireccionComponent,
            Identificaciones_component_1.IdentificacionesComponent,
            RedSocial_1.RedSocialComponent,
            RedesSocialesArray_1.RedSocialComponentArray,
        ],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' },
            DatosGenerales_service_1.DatosGeneralesService,
            Direccion_Service_1.DireccionService,
            catalogos_service_1.CatalogosService,
            QuickProfile_1.QuickProfileService,
            ProfileImage_service_1.PerfilImageService,
            CURP_validator_1.CURPValidator,
            CURPNombre_validator_1.CURPNombreValidator
        ]
    })
], DatosGeneralesModule);
exports.DatosGeneralesModule = DatosGeneralesModule;
//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
//# sourceMappingURL=DatosGenerales.module.js.map