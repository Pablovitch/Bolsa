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
var router_1 = require("@angular/router");
var primeng_1 = require("primeng/primeng");
/** SharedModule */
var Shared_module_1 = require("../../Shared/Shared.module");
var alertas_module_1 = require("../Alertas/alertas.module");
/** PostulacionesModules */
var Postulaciones_1 = require("../../Components/Postulaciones/Postulaciones");
/**Postulaciones Service */
var Postulaciones_2 = require("../../Services/Postulaciones");
var DetalleVacante_1 = require("../../Services/DetalleVacante");
var PostulacionesModule = (function () {
    function PostulacionesModule() {
    }
    return PostulacionesModule;
}());
PostulacionesModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule,
            forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule,
            primeng_1.PaginatorModule, primeng_1.DialogModule,
            alertas_module_1.AlertasModule,
            Shared_module_1.SharedModule
        ],
        declarations: [Postulaciones_1.Postulaciones],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '/' },
            Postulaciones_2.PostulacionesService,
            DetalleVacante_1.DetalleVacanteService
        ]
    })
], PostulacionesModule);
exports.PostulacionesModule = PostulacionesModule;
//# sourceMappingURL=postulaciones.module.js.map