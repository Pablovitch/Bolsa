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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
/** SharedModule */
var Shared_module_1 = require("../../Shared/Shared.module");
/** Vacantes Modules */
var app_LayoutVcts_1 = require("../Vacantes/app.LayoutVcts");
var vacante_component_1 = require("../Vacantes/Vacante/vacante.component");
var busqueda_component_1 = require("../Vacantes/Busqueda/busqueda.component");
/**Vacantes Service */
var vacantes_service_1 = require("../../Services/vacantes.service");
/**Postulaciones module*/
var postulaciones_module_1 = require("../Postulaciones/postulaciones.module");
var VacanteModule = (function () {
    function VacanteModule() {
    }
    return VacanteModule;
}());
VacanteModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule,
            forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule,
            primeng_1.PaginatorModule, primeng_1.DialogModule, primeng_1.SliderModule, primeng_1.CheckboxModule,
            Shared_module_1.SharedModule,
            postulaciones_module_1.PostulacionesModule
        ],
        declarations: [
            app_LayoutVcts_1.LayoutVacanteComponent,
            vacante_component_1.VacanteComponent,
            busqueda_component_1.BusquedaComponent
        ],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' },
            vacantes_service_1.VacantesService
        ]
    })
], VacanteModule);
exports.VacanteModule = VacanteModule;
//# sourceMappingURL=vacante.module.js.map