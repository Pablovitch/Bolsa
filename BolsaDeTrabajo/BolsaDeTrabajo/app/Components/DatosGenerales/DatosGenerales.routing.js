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
var DatosGenerales_component_1 = require("./DatosGenerales.component");
var perfil_candidato_component_1 = require("../PerfilCandidato/perfil-candidato.component");
var not_found_component_1 = require("../not-found.component");
var DatosGeneralesRoutes = [
    { path: 'DatosGenerales/:candidatoId', component: DatosGenerales_component_1.DatosGeneralesComponent },
    { path: 'PerfilCandidato/:candidatoId', component: perfil_candidato_component_1.CandidatoPerfil },
    { path: 'not-found', component: not_found_component_1.NotFoundComponent },
];
var DatosGeneralesRoutingModule = (function () {
    function DatosGeneralesRoutingModule() {
    }
    return DatosGeneralesRoutingModule;
}());
DatosGeneralesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(DatosGeneralesRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], DatosGeneralesRoutingModule);
exports.DatosGeneralesRoutingModule = DatosGeneralesRoutingModule;
//# sourceMappingURL=DatosGenerales.routing.js.map