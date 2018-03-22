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
var IdiomaComponent = (function () {
    function IdiomaComponent(fb, _Catalogos, _perfilCandidatoService) {
        var _this = this;
        this.fb = fb;
        this._Catalogos = _Catalogos;
        this._perfilCandidatoService = _perfilCandidatoService;
        this.remove = new core_1.EventEmitter();
        this.Edit = false;
        this._Catalogos.GetNiveles()
            .subscribe(function (niveles) {
            _this.niveles = niveles;
            var hablado = _this.language.get('nivelHabladoId').value;
            var escrito = _this.language.get('nivelEscritoId').value;
            if (hablado > 0) {
                _this.NivelHabladoOnChangue(hablado);
            }
            if (escrito > 0) {
                _this.NivelEscritoOnChangue(escrito);
            }
        });
    }
    IdiomaComponent.prototype.ngAfterContentInit = function () {
        if (this.language.get('id').value != 0) {
            this.Idioma = this.language.get('idioma').value.idioma;
        }
        else {
            this.Edit = true;
        }
    };
    IdiomaComponent.prototype.filterIdiomas = function (event) {
        var _this = this;
        var query = event.query;
        this._Catalogos.GetIdiomas(query)
            .then(function (idiomas) {
            _this.filteredIdiomas = idiomas;
        });
    };
    IdiomaComponent.prototype.SetIdiomaId = function (event) {
        this.language.get('idiomaId').setValue(event.id);
        this.Idioma = event.idioma;
    };
    IdiomaComponent.prototype.NivelEscritoOnChangue = function (id) {
        this.NivelEscrito = this.niveles.find(function (x) { return x.id == id; }).nivel;
    };
    IdiomaComponent.prototype.NivelHabladoOnChangue = function (id) {
        this.NivelHablado = this.niveles.find(function (x) { return x.id == id; }).nivel;
    };
    IdiomaComponent.prototype.OnEdit = function () {
        this.Edit = true;
    };
    IdiomaComponent.prototype.DiscardEdit = function () {
        this.Edit = false;
    };
    IdiomaComponent.prototype.EntityDettached = function () {
        this.language.get('idioma').setValue(null);
    };
    IdiomaComponent.prototype.EntityAttached = function (idIdioma) {
        var idioma = this.filteredIdiomas.find(function (x) { return x.id == idIdioma; });
        this.language.get('idioma').setValue(idioma);
    };
    IdiomaComponent.prototype.Remove = function (index) {
        var idIdioma = this.language.get('id').value;
        if (idIdioma != '0') {
            this._perfilCandidatoService.DeleteIdioma(idIdioma)
                .subscribe(function (data) { });
        }
        this.remove.emit(index);
    };
    IdiomaComponent.prototype.Save = function () {
        var _this = this;
        this.Edit = false;
        this.EntityDettached();
        if (this.language.get('id').value == '0') {
            this._perfilCandidatoService.AddIdioma(this.language.value)
                .subscribe(function (idioma) {
                _this.language.get('id').setValue(idioma.id);
                _this.EntityAttached(idioma.idiomaId);
            });
        }
        else {
            this._perfilCandidatoService.UpdateIdioma(this.language.value)
                .subscribe(function (idioma) {
                _this.EntityAttached(idioma.idiomaId);
            });
        }
    };
    return IdiomaComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", forms_1.FormGroup)
], IdiomaComponent.prototype, "language", void 0);
__decorate([
    core_1.Input('Index'),
    __metadata("design:type", Number)
], IdiomaComponent.prototype, "index", void 0);
__decorate([
    core_1.Output('Remove'),
    __metadata("design:type", Object)
], IdiomaComponent.prototype, "remove", void 0);
IdiomaComponent = __decorate([
    core_1.Component({
        selector: 'idiomas',
        templateUrl: 'app/Components/PerfilCandidato/Idioma/Idioma.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        Catalogo_PerfilCandidato_service_1.CatalogoPerfilCandidatoService,
        PerfilCandidato_Service_1.PerfilCandidatoService])
], IdiomaComponent);
exports.IdiomaComponent = IdiomaComponent;
//# sourceMappingURL=idioma.component.js.map