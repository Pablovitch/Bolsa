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
var router_1 = require("@angular/router");
var PerfilCandidato_routing_1 = require("./PerfilCandidato.routing");
/**Self Components*/
var aboutme_component_1 = require("./AboutMe/aboutme.component");
var perfil_candidato_component_1 = require("./perfil-candidato.component");
var Certificacion_component_1 = require("./Certificacion/Certificacion.component");
var CertificacionArray_component_1 = require("./Certificacion/CertificacionArray.component");
var Conocimiento_component_1 = require("./Conocimientos/Conocimiento.component");
var ConocimientoArray_component_1 = require("./Conocimientos/ConocimientoArray.component");
var curso_component_1 = require("./Curso/curso.component");
var CursoArray_component_1 = require("./Curso/CursoArray.component");
var ExperienciaProfesional_componet_1 = require("./ExperienciaProfesional/ExperienciaProfesional.componet");
var ExperienciaProfesionalArray_component_1 = require("./ExperienciaProfesional/ExperienciaProfesionalArray.component");
var Formacion_Component_1 = require("./Formacion/Formacion.Component");
var FormacionArray_component_1 = require("./Formacion/FormacionArray.component");
var idioma_component_1 = require("./Idioma/idioma.component");
var IdiomaArray_component_1 = require("./Idioma/IdiomaArray.component");
/**Services*/
var catalogos_service_1 = require("../../Services/catalogos.service");
var Catalogo_PerfilCandidato_service_1 = require("../../Services/Catalogo.PerfilCandidato.service");
var QuickProfile_1 = require("../../Services/QuickProfile");
var PerfilCandidato_validators_1 = require("../../Components/Validators/PerfilCandidato.validators");
/** SharedModule */
var Shared_module_1 = require("../../Shared/Shared.module");
/**Vacantes Module */
var vacante_module_1 = require("../../Components/Vacantes/vacante.module");
var PerfilCandidatoModule = (function () {
    function PerfilCandidatoModule() {
    }
    return PerfilCandidatoModule;
}());
PerfilCandidatoModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule,
            primeng_1.CalendarModule, primeng_1.AutoCompleteModule, animations_1.BrowserAnimationsModule, primeng_1.CheckboxModule, primeng_1.TooltipModule,
            PerfilCandidato_routing_1.PerfilCandidatoRoutingModule,
            Shared_module_1.SharedModule,
            vacante_module_1.VacanteModule],
        declarations: [
            aboutme_component_1.AboutMeComponent,
            perfil_candidato_component_1.CandidatoPerfil,
            Certificacion_component_1.CertificacionComponent,
            CertificacionArray_component_1.CertificacionesArray,
            Conocimiento_component_1.ConocimientoComponent,
            ConocimientoArray_component_1.ConocimientosArray,
            curso_component_1.CursoComponent,
            CursoArray_component_1.CursosArray,
            ExperienciaProfesional_componet_1.ExperienciaProfesionalComponent,
            ExperienciaProfesionalArray_component_1.ExperienciasProfesionalesArray,
            Formacion_Component_1.FormacionComponent,
            FormacionArray_component_1.FormacionesArray,
            idioma_component_1.IdiomaComponent,
            IdiomaArray_component_1.IdiomaArray
        ],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' },
            catalogos_service_1.CatalogosService, Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService, QuickProfile_1.QuickProfileService, PerfilCandidato_validators_1.PerfilCandidatoValidator
        ]
    })
], PerfilCandidatoModule);
exports.PerfilCandidatoModule = PerfilCandidatoModule;
//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
//# sourceMappingURL=PerfilCandidato.module.js.map