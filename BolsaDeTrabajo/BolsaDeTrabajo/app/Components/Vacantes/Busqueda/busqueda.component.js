"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var busqueda_service_1 = require("../../../Services/busqueda.service");
var BusquedaComponent = (function () {
    function BusquedaComponent(service) {
        this.service = service;
        this.showMenu = true;
    }
    BusquedaComponent.prototype.ShowMenu = function () {
        this.showMenu = !this.showMenu;
    };
    BusquedaComponent.prototype.buscavacantes = function () {
        //this.service.getfiltro(this.filtro).then(res => { this.vacantesdtl = res })
        //alert(event.nombre);
        console.log('Envio filtro: ' + this.filtro);
    };
    BusquedaComponent.prototype.ngOnInit = function () {
    };
    return BusquedaComponent;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], BusquedaComponent.prototype, "CandidatoId", void 0);
BusquedaComponent = __decorate([
    core_1.Component({
        selector: 'app-busqueda',
        templateUrl: '/app/Components/Vacantes/Busqueda/busqueda.component.html',
        //styleUrls: ['/app/Components/Vacantes/Busqueda/busqueda.component.css'],
        providers: [busqueda_service_1.BusquedaService]
    }),
    __metadata("design:paramtypes", [busqueda_service_1.BusquedaService])
], BusquedaComponent);
exports.BusquedaComponent = BusquedaComponent;
//# sourceMappingURL=busqueda.component.js.map