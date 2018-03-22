"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DatosDeContacto_component_1 = require("./DatosDeContacto.component");
var DatosDireccion_component_1 = require("./DatosDireccion.component");
var DatosPerfil_component_1 = require("./DatosPerfil.component");
var DatosGenerales_component_1 = require("../DatosGenerales/DatosGenerales.component");
var not_found_component_1 = require("../not-found.component");
var FormulariosInicialesRoutes = [
    //{ path: 'DatosContacto', component: DatosDeContactoComponent },
    { path: 'DatosContacto/:id', component: DatosDeContacto_component_1.DatosDeContactoComponent },
    { path: 'Direccion/:id', component: DatosDireccion_component_1.DatosDireccionComponent },
    { path: 'DatosPerfilComponent/:personaId', component: DatosPerfil_component_1.DatosPerfilComponent },
    { path: 'DatosGenerales/:candidatoId', component: DatosGenerales_component_1.DatosGeneralesComponent },
    { path: 'not-found', component: not_found_component_1.NotFoundComponent },
];
var FormulariosRoutingModule = (function () {
    function FormulariosRoutingModule() {
    }
    return FormulariosRoutingModule;
}());
FormulariosRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(FormulariosInicialesRoutes)],
        exports: [router_1.RouterModule]
    })
], FormulariosRoutingModule);
exports.FormulariosRoutingModule = FormulariosRoutingModule;
//# sourceMappingURL=formularios.routing.js.map