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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var forms_2 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
/*Routings*/
var app_routing_1 = require("./app.routing");
/*Formularios Iniciales*/
var DatosDeContacto_component_1 = require("./Components/FormulariosIniciales/DatosDeContacto.component");
var FormulariosIniciales_module_1 = require("./Components/FormulariosIniciales/FormulariosIniciales.module");
/** Services */
var Candidatos_Service_1 = require("./Services/Candidatos.Service");
var QuickProfile_1 = require("./Services/QuickProfile");
/** SharedModule */
var Shared_module_1 = require("./Shared/Shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_2.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule, animations_1.BrowserAnimationsModule,
            app_routing_1.AppRoutingModule,
            primeng_1.CalendarModule, primeng_1.AutoCompleteModule, primeng_1.CheckboxModule, primeng_1.DropdownModule, primeng_1.TooltipModule,
            FormulariosIniciales_module_1.FormulariosInicialesModule, Shared_module_1.SharedModule, primeng_1.SliderModule, primeng_1.DialogModule
        ],
        declarations: [
            app_component_1.AppComponent, DatosDeContacto_component_1.DatosDeContactoComponent
        ],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' },
            Candidatos_Service_1.CandidatosService, QuickProfile_1.QuickProfileService,
            primeng_1.CalendarModule, primeng_1.AutoCompleteModule, primeng_1.CheckboxModule, primeng_1.DropdownModule],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
//# sourceMappingURL=app.module.js.map