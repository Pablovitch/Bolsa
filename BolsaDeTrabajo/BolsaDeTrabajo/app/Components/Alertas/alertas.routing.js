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
var Alertas_1 = require("../../Components/Alertas/Alertas");
var not_found_component_1 = require("../not-found.component");
var AlertsRoutes = [
    { path: 'Alertas/:candidatoId', component: Alertas_1.Alerts },
    { path: 'not-found', component: not_found_component_1.NotFoundComponent },
];
var AlertasRoutingModule = (function () {
    function AlertasRoutingModule() {
    }
    return AlertasRoutingModule;
}());
AlertasRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(AlertsRoutes)],
        exports: [router_1.RouterModule]
    })
], AlertasRoutingModule);
exports.AlertasRoutingModule = AlertasRoutingModule;
//# sourceMappingURL=alertas.routing.js.map