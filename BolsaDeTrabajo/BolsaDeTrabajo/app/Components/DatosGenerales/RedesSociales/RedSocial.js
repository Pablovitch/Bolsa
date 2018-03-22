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
var catalogos_service_1 = require("../../../Services/catalogos.service");
var RedSocialComponent = (function () {
    function RedSocialComponent(_catalogosService) {
        var _this = this;
        this._catalogosService = _catalogosService;
        this.remove = new core_1.EventEmitter();
        this._catalogosService.TipoDeRedSocial()
            .subscribe(function (data) {
            _this.tiposRedesSociales = data;
            _this.InitialaizeRedSocial();
        });
    }
    RedSocialComponent.prototype.SetRedSocial = function (event) {
        this.redSocial = this.tiposRedesSociales.find(function (x) { return x.value == event.value; }).label;
    };
    RedSocialComponent.prototype.InitialaizeRedSocial = function () {
        var idTipoRedSocial = this.RedSocial.get('tipoRedSocialId').value;
        if (idTipoRedSocial != null) {
            this.redSocial = this.tiposRedesSociales.find(function (x) { return x.value == idTipoRedSocial; }).label;
        }
    };
    RedSocialComponent.prototype.Remove = function (index) {
        this.remove.emit(index);
    };
    return RedSocialComponent;
}());
__decorate([
    core_1.Input('group'),
    __metadata("design:type", forms_1.FormGroup)
], RedSocialComponent.prototype, "RedSocial", void 0);
__decorate([
    core_1.Input('Index'),
    __metadata("design:type", Number)
], RedSocialComponent.prototype, "index", void 0);
__decorate([
    core_1.Input('Edit'),
    __metadata("design:type", Boolean)
], RedSocialComponent.prototype, "Edit", void 0);
__decorate([
    core_1.Output('Remove'),
    __metadata("design:type", Object)
], RedSocialComponent.prototype, "remove", void 0);
RedSocialComponent = __decorate([
    core_1.Component({
        selector: 'redesSociales',
        templateUrl: 'app/Components/DatosGenerales/RedesSociales/RedSocial.html'
    }),
    __metadata("design:paramtypes", [catalogos_service_1.CatalogosService])
], RedSocialComponent);
exports.RedSocialComponent = RedSocialComponent;
//# sourceMappingURL=RedSocial.js.map