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
var vacantes_service_1 = require("../../../Services/vacantes.service");
var forms_1 = require("@angular/forms");
var Vacantes_1 = require("../../../Models/Vacantes");
var VacanteComponent = (function () {
    function VacanteComponent(service, fb, fbfinf) {
        this.service = service;
        this.Oculto = false;
        this.showMenu = true;
        this.display = false; //Deshabilitar el modal de detalles. ***
        this.displayPostulacion = false;
        this.rangeValues = [25, 800];
        this.Val = 5;
        this.rows = 10;
        this.first = 0;
        this.page = 1;
        this.pageCount = 0;
        this.TotalRecords = 0;
        this.datospostulacion = fb.group({
            candidatoid: [],
            requisicionid: [],
            StatusId: []
        });
        this.FiltroVacantes = fbfinf.group({
            palabraClave: []
        });
    }
    VacanteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getvacantes()
            .subscribe(function (data) {
            _this.arrayvacantes = data.vacantes;
            _this.vacantes = data.vacantes;
            _this.categorias = data.categorias;
            _this.filtrocategorias = new Array(_this.categorias.length);
            _this.estados = data.estados;
            _this.filtroestado = new Array(_this.estados.length);
            _this.municipios = data.municipios;
            _this.filtromunicipio = new Array(_this.municipios.length);
            _this.estadoestudios = data.estadoestudios;
            _this.escolaridades = data.escolaridades;
            _this.filtroesc = new Array(_this.escolaridades.length);
            //console.log(data.escolaridades);
            _this.pageCount = Math.round(_this.vacantes.length / _this.rows);
            _this.TotalRecords = _this.vacantes.length;
            _this.paginador();
        });
        //console.log(this.vacantes);
        this.user = null; // Validaci�n para registro en vacantes. Variable global usuario. // Muestra solo las vacantes filtradas.
    };
    VacanteComponent.prototype.ShowMenu = function () {
        this.showMenu = !this.showMenu;
    };
    VacanteComponent.prototype.OkPostulacion = function () {
        this.displayPostulacion = false;
    };
    VacanteComponent.prototype.showdialog = function (idx) {
        var _this = this;
        this.service.getvacantesdtl(idx)
            .subscribe(function (data) {
            //console.log(data);
            _this.vacantesdtl = data;
            console.log(_this.vacantesdtl);
            _this.display = true; //Habilitamos el modal de detalles. ***
        });
    };
    VacanteComponent.prototype.paginate = function (event) {
        console.log(event);
        //event.first = Index of the first record
        // console.log(event.first);
        this.first = event.first;
        //event.rows = Number of rows to display in new page
        //console.log(event.rows);
        this.rows = event.rows;
        //event.page = Index of the new page
        //console.log(event.page);
        this.page = event.page + 1;
        //event.pageCount = Total number of pages
        console.log(event.pageCount);
        this.pageCount = event.pageCount;
        this.paginador();
    };
    VacanteComponent.prototype.paginador = function () {
        if (this.page < this.pageCount) {
            this.vacantes = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.vacantes[i] = this.arrayvacantes[this.first + i];
            }
        }
        else {
            var lenght = this.arrayvacantes.length - this.first;
            this.vacantes = new Array(lenght);
            for (var i = 0; i < lenght; i++) {
                this.vacantes[i] = this.arrayvacantes[this.first + i];
            }
        }
    };
    VacanteComponent.prototype.Postularse = function (idx) {
        this.datospostulacion.get('candidatoid').setValue(this.CandidatoId);
        this.datospostulacion.get('requisicionid').setValue(idx);
        this.datospostulacion.get('StatusId').setValue(1);
        this.service.postulacion(this.datospostulacion.value)
            .subscribe(function (data) {
            console.log(data);
        });
        this.display = false;
        this.displayPostulacion = true;
    };
    VacanteComponent.prototype.OnClickCategorias = function (event) {
        if (event.target.checked) {
            this.filtrocategorias.push(event.target.id);
            this.buscavacantes();
        }
        else {
            var index = this.filtrocategorias.indexOf(event.target.id);
            this.filtrocategorias.splice(index, 1);
            this.buscavacantes();
        }
    };
    VacanteComponent.prototype.OnClickEstados = function (event) {
        if (event.target.checked) {
            this.filtroestado.push(event.target.id);
            this.buscavacantes();
        }
        else {
            var index = this.filtroestado.indexOf(event.target.id);
            this.filtroestado.splice(index, 1);
            this.buscavacantes();
        }
    };
    VacanteComponent.prototype.OnClickMunicipios = function (event) {
        if (event.target.checked) {
            this.filtromunicipio.push(event.target.id);
            this.buscavacantes();
        }
        else {
            var index = this.filtromunicipio.indexOf(event.target.id);
            this.filtromunicipio.splice(index, 1);
            this.buscavacantes();
        }
    };
    VacanteComponent.prototype.OnClickEscolaridades = function (event) {
        if (event.target.checked) {
            this.filtroesc.push(event.target.id);
            this.buscavacantes();
        }
        else {
            var index = this.filtroesc.indexOf(event.target.id);
            this.filtroesc.splice(index, 1);
            this.buscavacantes();
        }
    };
    VacanteComponent.prototype.filtrosueldo = function (event) {
        this.SMin = event.values[0] * 100;
        this.SMax = event.values[1] * 100;
        this.buscavacantes();
    };
    VacanteComponent.prototype.buscavacantes = function () {
        var _this = this;
        var filtroX = new Vacantes_1.FiltroVacantes();
        filtroX.palabraClave = this.FiltroVacantes.get('palabraClave').value;
        filtroX.candidatoId = this.CandidatoId;
        filtroX.filtroCategoria = this.filtrocategorias;
        filtroX.filtroEstados = this.filtroestado;
        filtroX.filtrosmunicipio = this.filtromunicipio;
        filtroX.filtroEscolaridades = this.filtroesc;
        filtroX.SMin = this.SMin;
        filtroX.SMax = this.SMax;
        console.log(filtroX);
        this.service.filtrovacantes(filtroX).subscribe(function (data) {
            _this.arrayvacantes = data;
            _this.pageCount = Math.round(_this.arrayvacantes.length / _this.rows);
            _this.TotalRecords = _this.arrayvacantes.length;
            _this.paginador();
        });
    };
    return VacanteComponent;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], VacanteComponent.prototype, "CandidatoId", void 0);
VacanteComponent = __decorate([
    core_1.Component({
        selector: 'app-vacante',
        templateUrl: '/app/Components/Vacantes/Vacante/vacante.component.html',
        providers: [vacantes_service_1.VacantesService]
    }),
    __metadata("design:paramtypes", [vacantes_service_1.VacantesService, forms_1.FormBuilder, forms_1.FormBuilder])
], VacanteComponent);
exports.VacanteComponent = VacanteComponent;
//# sourceMappingURL=vacante.component.js.map