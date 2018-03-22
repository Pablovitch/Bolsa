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
var QuickProfile_1 = require("../../Services/QuickProfile");
var router_1 = require("@angular/router");
var BarraComponent = (function () {
    function BarraComponent(_Route, _quickProfileService) {
        this._Route = _Route;
        this._quickProfileService = _quickProfileService;
        this.clickMenuButton = new core_1.EventEmitter();
        this.defautlUrlImageProfile = '/assets/images/photo-default.png';
    }
    BarraComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.CandidatoId != null && this.CandidatoId != undefined) {
            this._quickProfileService.GetQuickProfile(this.CandidatoId)
                .subscribe(function (quickprofile) {
                //console.log(quickprofile);
                _this.nombreCompleto = quickprofile.nombreCompleto;
                _this.urlImageProfile = (quickprofile.urlImageProfile == null) ? _this.defautlUrlImageProfile : quickprofile.urlImageProfile;
                //console.log('quickprofile');
                //console.log(this.urlImageProfile);
                _this.quickProfile = quickprofile;
            });
        }
    };
    BarraComponent.prototype.onClick = function () {
        this.clickMenuButton.emit();
    };
    BarraComponent.prototype.PerfilImageOnChangue = function () {
        this.ngOnInit();
    };
    return BarraComponent;
}());
__decorate([
    core_1.Output('ClickMenuBoton'),
    __metadata("design:type", Object)
], BarraComponent.prototype, "clickMenuButton", void 0);
__decorate([
    core_1.Input('ProfileName'),
    __metadata("design:type", String)
], BarraComponent.prototype, "CandidatoNombre", void 0);
__decorate([
    core_1.Input('Oculto'),
    __metadata("design:type", Boolean)
], BarraComponent.prototype, "Oculto", void 0);
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], BarraComponent.prototype, "CandidatoId", void 0);
BarraComponent = __decorate([
    core_1.Component({
        selector: 'damsa-barra',
        templateUrl: '/app/Components/GeneralComponents/barra.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        QuickProfile_1.QuickProfileService])
], BarraComponent);
exports.BarraComponent = BarraComponent;
//# sourceMappingURL=barra.component.js.map