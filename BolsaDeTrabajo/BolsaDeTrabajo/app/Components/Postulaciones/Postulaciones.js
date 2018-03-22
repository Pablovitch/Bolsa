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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var Postulaciones_1 = require("../../Services/Postulaciones");
var DetalleVacante_1 = require("../../Services/DetalleVacante");
var Postulaciones_2 = require("../../Models/Postulaciones");
var Postulaciones = (function () {
    function Postulaciones(_Route, postulacionesService, vacanteService, fb) {
        var _this = this;
        this._Route = _Route;
        this.postulacionesService = postulacionesService;
        this.vacanteService = vacanteService;
        this.Oculto = false;
        this.showMenu = true;
        this.display = false;
        this.displayAlert = false;
        this.rows = 5;
        this.first = 0;
        this.page = 1;
        this.pageCount = 0;
        this.TotalRecords = 0;
        this.filtroPostulacion = fb.group({
            palabraClave: ['']
        });
        this._Route.params.subscribe(function (params) {
            _this.CandidatoId = params['candidatoId'];
        });
        this.postulacionesService.GetPostulaciones(this.CandidatoId)
            .subscribe(function (data) {
            _this.ArrayPostulacipones = data.postulaciones;
            _this.status = data.statusPostulaciones;
            _this.categorias = data.categorias;
            _this.filtroStatus = new Array(_this.status.length);
            _this.filtroCategorias = new Array(_this.categorias.length);
            _this.pageCount = Math.round(_this.ArrayPostulacipones.length / _this.rows);
            _this.TotalRecords = _this.ArrayPostulacipones.length;
            _this.paginador();
        });
    }
    Postulaciones.prototype.ShowMenu = function () {
        this.showMenu = !this.showMenu;
    };
    Postulaciones.prototype.paginate = function (event) {
        //console.log(event);
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
        //console.log(event.pageCount);
        this.pageCount = event.pageCount;
        this.paginador();
    };
    Postulaciones.prototype.paginador = function () {
        if (this.page < this.pageCount) {
            this.Postulaciones = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.Postulaciones[i] = this.ArrayPostulacipones[this.first + i];
            }
        }
        else {
            var lenght = this.ArrayPostulacipones.length - this.first;
            this.Postulaciones = new Array(lenght);
            for (var i = 0; i < lenght; i++) {
                this.Postulaciones[i] = this.ArrayPostulacipones[this.first + i];
            }
        }
    };
    Postulaciones.prototype.showDialog = function (idVacante) {
        var _this = this;
        this.vacanteService.GetDetalleVacante(idVacante)
            .subscribe(function (data) {
            _this.DetalleVacante = data;
            _this.display = true;
        });
    };
    Postulaciones.prototype.OnCheckingStatus = function (event) {
        if (event.target.checked) {
            this.filtroStatus.push(event.target.id);
            this.OnFiltering();
        }
        else {
            var index = this.filtroStatus.indexOf(event.target.id);
            this.filtroStatus.splice(index, 1);
            this.OnFiltering();
        }
    };
    Postulaciones.prototype.OnCheckingCategoria = function (event) {
        if (event.target.checked) {
            this.filtroCategorias.push(event.target.id);
            this.OnFiltering();
        }
        else {
            var index = this.filtroCategorias.indexOf(event.target.id);
            this.filtroCategorias.splice(index, 1);
            this.OnFiltering();
        }
    };
    Postulaciones.prototype.OnFiltering = function () {
        var _this = this;
        var filtroX = new Postulaciones_2.FiltroPostulaciones();
        filtroX.candidatoId = this.CandidatoId;
        filtroX.palabraClave = this.filtroPostulacion.get('palabraClave').value;
        filtroX.filtroStatus = this.filtroStatus;
        filtroX.filtroCategoria = this.filtroCategorias;
        this.postulacionesService.FiltroPostulaciones(filtroX).subscribe(function (data) {
            _this.ArrayPostulacipones = data;
            _this.pageCount = Math.round(_this.ArrayPostulacipones.length / _this.rows);
            _this.TotalRecords = _this.ArrayPostulacipones.length;
            _this.paginador();
        });
    };
    Postulaciones.prototype.onClickDeclinar = function (idPostulacion, descripcionvct) {
        this.idDeclinada = idPostulacion;
        this.Descvacante = descripcionvct;
        this.displayAlert = true;
    };
    Postulaciones.prototype.Declinar = function () {
        var _this = this;
        this.postulacionesService.DeletePostulacion(this.idDeclinada)
            .subscribe(function (data) {
            _this.postulacionesService.GetPostulaciones(_this.CandidatoId)
                .subscribe(function (data) {
                _this.ArrayPostulacipones = data.postulaciones;
                _this.status = data.statusPostulaciones;
                _this.categorias = data.categorias;
                _this.filtroStatus = new Array(_this.status.length);
                _this.filtroCategorias = new Array(_this.categorias.length);
                _this.pageCount = Math.round(_this.ArrayPostulacipones.length / _this.rows);
                _this.TotalRecords = _this.ArrayPostulacipones.length;
                _this.paginador();
            });
            _this.displayAlert = false;
            _this.idDeclinada = '';
        });
    };
    Postulaciones.prototype.NoDeclinar = function () {
        this.idDeclinada = '';
        this.displayAlert = false;
    };
    return Postulaciones;
}());
Postulaciones = __decorate([
    core_1.Component({
        templateUrl: '/app/Components/Postulaciones/Postulaciones.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        Postulaciones_1.PostulacionesService,
        DetalleVacante_1.DetalleVacanteService,
        forms_1.FormBuilder])
], Postulaciones);
exports.Postulaciones = Postulaciones;
//# sourceMappingURL=Postulaciones.js.map