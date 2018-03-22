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
var DatosGenerales_service_1 = require("../../../Services/DatosGenerales.service");
var RedSocialComponentArray = (function () {
    function RedSocialComponentArray(_fb, _datosGenerales) {
        this._fb = _fb;
        this._datosGenerales = _datosGenerales;
        this.Edit = false;
    }
    RedSocialComponentArray.prototype.ngOnInit = function () {
        var _this = this;
        this.RedesSocialessArray = this._fb.group({
            redesSociales: this._fb.array([])
        });
        this._datosGenerales.GetRedesSociales(this.CandidatoId)
            .subscribe(function (data) {
            _this.redesSociales = data;
            if (_this.redesSociales == null) {
                _this.addRedSocial();
            }
            else {
                _this.PopulateForm(_this.redesSociales);
            }
        });
    };
    RedSocialComponentArray.prototype.initRedSocial = function () {
        return this._fb.group({
            id: [],
            personaId: [this.CandidatoId],
            tipoRedSocialId: [],
            redSocial: ['', forms_1.Validators.required]
        });
    };
    RedSocialComponentArray.prototype.addRedSocial = function () {
        var control = this.RedesSocialessArray.controls['redesSociales'];
        var addCtrl = this.initRedSocial();
        control.push(addCtrl);
    };
    RedSocialComponentArray.prototype.removeRedSocial = function (i) {
        var control = this.RedesSocialessArray.controls['redesSociales'];
        control.removeAt(i);
    };
    RedSocialComponentArray.prototype.OnEdit = function () {
        this.Edit = true;
    };
    RedSocialComponentArray.prototype.DiscardEdit = function () {
        this.ngOnInit();
        this.Edit = false;
    };
    RedSocialComponentArray.prototype.PopulateForm = function (redesSociales) {
        for (var redSocial in redesSociales) {
            this.addRedSocial();
        }
        this.RedesSocialessArray.patchValue({
            redesSociales: redesSociales,
        });
    };
    RedSocialComponentArray.prototype.Save = function (model) {
        this.Edit = false;
        this._datosGenerales.AddRedesSociales(this.RedesSocialessArray.get('redesSociales').value, this.CandidatoId)
            .subscribe(function (data) {
        });
    };
    return RedSocialComponentArray;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], RedSocialComponentArray.prototype, "CandidatoId", void 0);
RedSocialComponentArray = __decorate([
    core_1.Component({
        selector: 'damsa-redes-sociales ',
        templateUrl: 'app/Components/DatosGenerales/RedesSociales/RedesSocialesArray.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        DatosGenerales_service_1.DatosGeneralesService])
], RedSocialComponentArray);
exports.RedSocialComponentArray = RedSocialComponentArray;
//# sourceMappingURL=RedesSocialesArray.js.map