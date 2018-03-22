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
var forms_1 = require("@angular/forms");
var Catalogo_PerfilCandidato_service_1 = require("../../../Services/Catalogo.PerfilCandidato.service");
var PerfilCandidato_Service_1 = require("../../../Services/PerfilCandidato.Service");
var ConocimientoComponent = (function () {
    function ConocimientoComponent(fb, _Catalogos, _perfilCandidatoService) {
        var _this = this;
        this.fb = fb;
        this._Catalogos = _Catalogos;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.remove = new core_1.EventEmitter();
        this.Edit = false;
        this.contraer = true;
        this.conocimientoHabilidad = '';
        this.herramienta = '';
        this.institucion = '';
        this.institucionId = '';
        this.nivelId = 0;
        this._Catalogos.GetNiveles()
            .subscribe(function (niveles) {
            _this.niveles = niveles;
            var Nivel = _this.Conocimientos.get('nivelId').value;
            if (Nivel > 0) {
                _this.NivelOnchangue(Nivel);
            }
        });
    }
    ConocimientoComponent.prototype.ngAfterContentInit = function () {
        if (this.Conocimientos.get('id').value != 0) {
            this.InstitucionEducativa = this.Conocimientos.get('institucionEducativa').value.institucionEducativa;
        }
        else {
            this.contraer = false;
            this.Edit = true;
        }
    };
    ConocimientoComponent.prototype.filterInstituciones = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetInstituciones(query)
            .then(function (instituciones) {
            _this.filteredInstituciones = instituciones;
        });
    };
    ConocimientoComponent.prototype.SetInstitucionId = function (event) {
        this.Conocimientos.get('institucionEducativaId').setValue(event.id);
        this.InstitucionEducativa = event.institucionEducativa;
    };
    ConocimientoComponent.prototype.NivelOnchangue = function (id) {
        if (id > 0) {
            this.Nivel = this.niveles.find(function (x) { return x.id == id; }).nivel;
        }
    };
    ConocimientoComponent.prototype.OnEdit = function () {
        this.conocimientoHabilidad = this.Conocimientos.get('conocimiento').value;
        this.herramienta = this.Conocimientos.get('herramienta').value;
        this.institucion = this.InstitucionEducativa;
        this.institucionId = this.Conocimientos.get('institucionEducativaId').value;
        this.nivelId = this.Conocimientos.get('nivelId').value;
        this.contraer = false;
        this.Edit = true;
    };
    ConocimientoComponent.prototype.DiscardEdit = function () {
        this.Conocimientos.get('conocimiento').setValue(this.conocimientoHabilidad);
        this.Conocimientos.get('herramienta').setValue(this.herramienta);
        this.InstitucionEducativa = this.institucion;
        this.Conocimientos.get('institucionEducativaId').setValue(this.institucionId);
        this.Conocimientos.get('nivelId').setValue(this.nivelId);
        this.NivelOnchangue(this.nivelId);
        this.Edit = false;
    };
    ConocimientoComponent.prototype.Expandir = function () {
        this.contraer = false;
    };
    ConocimientoComponent.prototype.Contraer = function () {
        this.contraer = true;
    };
    ConocimientoComponent.prototype.EntityDettached = function () {
        this.auxInstitucion = this.Conocimientos.get('institucionEducativa').value;
        this.Conocimientos.get('institucionEducativa').setValue(null);
    };
    ConocimientoComponent.prototype.EntityAttached = function () {
        this.Conocimientos.get('institucionEducativa').setValue(this.auxInstitucion);
    };
    ConocimientoComponent.prototype.Remove = function (index) {
        var idExperiencia = this.Conocimientos.get('id').value;
        if (idExperiencia != '0') {
            this._perfilCandidatoService.DeleteConocimiento(idExperiencia)
                .subscribe(function (data) { });
        }
        this.remove.emit(index);
    };
    ConocimientoComponent.prototype.Save = function () {
        var _this = this;
        this.conocimientoHabilidad = '';
        this.herramienta = '';
        this.institucion = '';
        this.institucionId = '';
        this.nivelId = 0;
        this.Edit = false;
        this.EntityDettached();
        if (this.Conocimientos.get('id').value == '0') {
            this._perfilCandidatoService.AddConocimiento(this.Conocimientos.value)
                .subscribe(function (conocimiento) {
                _this.Conocimientos.get('id').setValue(conocimiento.id);
                _this.EntityAttached();
            });
        }
        else {
            this._perfilCandidatoService.UpdateConocimiento(this.Conocimientos.value)
                .subscribe(function (conocimiento) {
                _this.EntityAttached();
            });
        }
    };
    return ConocimientoComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", forms_1.FormGroup)
], ConocimientoComponent.prototype, "Conocimientos", void 0);
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], ConocimientoComponent.prototype, "CandidatoId", void 0);
__decorate([
    core_1.Input('Index'),
    __metadata("design:type", Number)
], ConocimientoComponent.prototype, "index", void 0);
__decorate([
    core_1.Output('Remove'),
    __metadata("design:type", Object)
], ConocimientoComponent.prototype, "remove", void 0);
ConocimientoComponent = __decorate([
    core_1.Component({
        selector: 'conocimientos',
        templateUrl: 'app/Components/PerfilCandidato/Conocimientos/Conocimiento.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], ConocimientoComponent);
exports.ConocimientoComponent = ConocimientoComponent;
//# sourceMappingURL=Conocimiento.component.js.map