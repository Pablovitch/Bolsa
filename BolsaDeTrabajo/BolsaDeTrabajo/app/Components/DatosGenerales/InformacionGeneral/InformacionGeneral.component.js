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
var router_1 = require("@angular/router");
var alta_candidato_validators_1 = require("../../alta.candidato.validators");
var CURPNombre_validator_1 = require("../../Validators/CURPNombre.validator");
var ProfileImage_service_1 = require("../../../Services/ProfileImage.service");
var DatosGenerales_service_1 = require("../../../Services/DatosGenerales.service");
var InformacionGeneralComponent = (function () {
    function InformacionGeneralComponent(_DatosGeneralesService, fb, _Router, _Route, _perfilImageService, _validatorCURP) {
        this._DatosGeneralesService = _DatosGeneralesService;
        this.fb = fb;
        this._Router = _Router;
        this._Route = _Route;
        this._perfilImageService = _perfilImageService;
        this._validatorCURP = _validatorCURP;
        this.LoadProfileName = new core_1.EventEmitter();
        this.Edit = false;
        this.imgProfile = '';
        this.formInformacionGeneral = fb.group({
            candidatoId: [],
            curp: [],
            imgProfileUrl: [''],
            Nombre: ['', forms_1.Validators.required],
            apellidoPaterno: ['', forms_1.Validators.required],
            apellidoMaterno: [''],
            email: ['',
                forms_1.Validators.compose([forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ValidarCorreo])
            ],
            confirmEmail: ['',
                forms_1.Validators.compose([forms_1.Validators.required, alta_candidato_validators_1.AltaCandidatoValidator.ConfirmarCorreo])]
        });
    }
    InformacionGeneralComponent.prototype.ngOnInit = function () {
        this.formInformacionGeneral.get('candidatoId').setValue(this.CandidatoId);
        this.GetInicialData();
    };
    InformacionGeneralComponent.prototype.GetInicialData = function () {
        var _this = this;
        this._DatosGeneralesService.GetInformacionGeneral(this.CandidatoId)
            .subscribe(function (InfoGral) {
            _this.formInformacionGeneral.patchValue({
                imgProfileUrl: InfoGral.imgProfileUrl,
                Nombre: InfoGral.nombre,
                apellidoPaterno: InfoGral.apellidoPaterno,
                apellidoMaterno: InfoGral.apellidoMaterno,
                curp: InfoGral.curp,
                email: InfoGral.email,
                confirmEmail: InfoGral.email
            });
            _this.imgProfile = InfoGral.imgProfileUrl;
        });
    };
    InformacionGeneralComponent.prototype.OnLoadedProfileImage = function (event) {
        this.formInformacionGeneral.get('imgProfileUrl').setValue(event);
        this.Save();
    };
    InformacionGeneralComponent.prototype.OnEdit = function () {
        this.Edit = true;
    };
    InformacionGeneralComponent.prototype.DiscardEdit = function () {
        this.GetInicialData();
        this.Edit = false;
    };
    InformacionGeneralComponent.prototype.onNombreChangue = function (value) {
        this.formInformacionGeneral.get('Nombre').setValue(value.toUpperCase());
    };
    InformacionGeneralComponent.prototype.onApellidoPaternoChangue = function (value) {
        this.formInformacionGeneral.get('apellidoPaterno').setValue(value.toUpperCase());
    };
    InformacionGeneralComponent.prototype.onApellidoMaternoChangue = function (value) {
        this.formInformacionGeneral.get('apellidoMaterno').setValue(value.toUpperCase());
    };
    InformacionGeneralComponent.prototype.Save = function () {
        var _this = this;
        var curpValida = this._validatorCURP.ValidarCurpNombre(this.formInformacionGeneral.get('Nombre').value, this.formInformacionGeneral.get('apellidoPaterno').value, this.formInformacionGeneral.get('apellidoMaterno').value, this.formInformacionGeneral.get('curp').value);
        if (curpValida) {
            this.Edit = false;
            console.log('editandoInformaciónpersonal');
            console.log(this.formInformacionGeneral.value);
            this._DatosGeneralesService.EditInformacionGeneral(this.formInformacionGeneral.value, this.CandidatoId)
                .subscribe(function (InfoGral) {
                //this._Router.navigate(['']);
                _this.LoadProfileName.emit(_this.formInformacionGeneral.get('imgProfileUrl').value);
            });
        }
        else {
            alert("Los datos del nombre no concuerdan con la curp proporcionada previamente.");
            this.GetInicialData();
        }
    };
    return InformacionGeneralComponent;
}());
__decorate([
    core_1.Input('CandidatoId'),
    __metadata("design:type", String)
], InformacionGeneralComponent.prototype, "CandidatoId", void 0);
__decorate([
    core_1.Output('LoadProfileName'),
    __metadata("design:type", Object)
], InformacionGeneralComponent.prototype, "LoadProfileName", void 0);
InformacionGeneralComponent = __decorate([
    core_1.Component({
        selector: 'damsa-info-gral',
        templateUrl: '/app/Components/DatosGenerales/InformacionGeneral/InformacionGeneral.component.html'
    }),
    __metadata("design:paramtypes", [DatosGenerales_service_1.DatosGeneralesService,
        forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        ProfileImage_service_1.PerfilImageService,
        CURPNombre_validator_1.CURPNombreValidator])
], InformacionGeneralComponent);
exports.InformacionGeneralComponent = InformacionGeneralComponent;
//# sourceMappingURL=InformacionGeneral.component.js.map