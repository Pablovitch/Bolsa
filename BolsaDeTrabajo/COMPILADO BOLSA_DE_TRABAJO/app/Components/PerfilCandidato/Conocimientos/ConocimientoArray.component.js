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
var PerfilCandidato_Service_1 = require("../../../Services/PerfilCandidato.Service");
var ConocimientosArray = (function () {
    function ConocimientosArray(_fb, _Router, _Route, _PerfilCandidatoService) {
        this._fb = _fb;
        this._Router = _Router;
        this._Route = _Route;
        this._PerfilCandidatoService = _PerfilCandidatoService;
    }
    ConocimientosArray.prototype.ngOnInit = function () {
        var _this = this;
        this.ConocimientosArray = this._fb.group({
            conocimientos: this._fb.array([])
        });
        this._PerfilCandidatoService.GetConocimientos(this.PerfilCandidatoId)
            .subscribe(function (data) {
            _this.conocimientos = data;
            if (_this.conocimientos == null) {
                return;
            }
            else {
                _this.PopulateForm(_this.conocimientos);
            }
        });
    };
    ConocimientosArray.prototype.initConocimiento = function () {
        return this._fb.group({
            id: ['0'],
            perfilCandidatoId: [this.PerfilCandidatoId],
            conocimiento: ['', forms_1.Validators.required],
            herramienta: [],
            institucionEducativa: [],
            institucionEducativaId: [''],
            nivelId: ['Nivel']
        });
    };
    ConocimientosArray.prototype.addConocimiento = function () {
        var control = this.ConocimientosArray.controls['conocimientos'];
        var addrCtrl = this.initConocimiento();
        control.push(addrCtrl);
    };
    ConocimientosArray.prototype.removeConocimiento = function (i) {
        var control = this.ConocimientosArray.controls['conocimientos'];
        control.removeAt(i);
    };
    ConocimientosArray.prototype.PopulateForm = function (conocimientos) {
        var index = 1;
        for (var conocimiento in conocimientos) {
            this.addConocimiento();
        }
        this.ConocimientosArray.patchValue({
            conocimientos: this.conocimientos
        });
    };
    return ConocimientosArray;
}());
__decorate([
    core_1.Input('PerfilCandidatoId'),
    __metadata("design:type", String)
], ConocimientosArray.prototype, "PerfilCandidatoId", void 0);
ConocimientosArray = __decorate([
    core_1.Component({
        selector: 'ConocimientosArray',
        templateUrl: 'app/Components/PerfilCandidato/Conocimientos/ConocimientoArray.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], ConocimientosArray);
exports.ConocimientosArray = ConocimientosArray;
//# sourceMappingURL=ConocimientoArray.component.js.map