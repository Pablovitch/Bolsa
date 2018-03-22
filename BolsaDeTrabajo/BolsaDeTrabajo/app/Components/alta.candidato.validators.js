"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AltaCandidatoValidator = (function () {
    function AltaCandidatoValidator() {
    }
    AltaCandidatoValidator.ValidarCorreo = function (control) {
        if (control.value == '') {
            return null;
        }
        var patt = new RegExp('^[^@]+@[^@]+\\.[a-zA-Z]{2,}$');
        if (!patt.test(control.value)) {
            return { ValidarCorreo: true };
        }
        return null;
    };
    AltaCandidatoValidator.ConfirmarCorreo = function (group) {
        if (group.value == "" || group.value == "")
            return null;
        var confirmEmail = group.value;
        var Email = group.root.get('email').value;
        // var confirmEmail = group.parent.controls.email.value;
        if (Email == '' && confirmEmail == '')
            return null;
        if (Email != confirmEmail)
            return { ConfirmarCorreo: true };
        return null;
    };
    AltaCandidatoValidator.CURPValidator = function (control) {
        if (control.value.lenght() == 18) {
            return null;
        }
        return { curpValidator: true };
    };
    AltaCandidatoValidator.ListaValidator = function (control) {
        if (control.value > 0) {
            return null;
        }
        return { ListaValidator: true };
    };
    return AltaCandidatoValidator;
}());
exports.AltaCandidatoValidator = AltaCandidatoValidator;
//# sourceMappingURL=alta.candidato.validators.js.map