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
var CURPValidator = (function () {
    function CURPValidator() {
        this.Nombres = new Array(4);
        this.CURPValida = '';
        this.RFCValida = '';
    }
    CURPValidator.prototype.ValidarIMSS = function (fechaNacimiento, imss) {
        if (imss.length < 6) {
            return;
        }
        this.FechaNacimiento = fechaNacimiento;
        var _fecha = fechaNacimiento.toDateString();
        var fecha = _fecha.split(' ');
        if (imss.substr(4, 2) == fecha[3].substr(2, 2))
            return true;
        return false;
    };
    CURPValidator.prototype.ValidarCurp = function (nombre, paterno, materno, fechaNacimiento, sexo, estadoNacimiento, curp, esMexicano) {
        if (curp == null || curp == '') {
            return;
        }
        this.Nombre = this.FormatearNombre(nombre.toUpperCase());
        this.Paterno = this.FormatearPaterno(paterno.toUpperCase());
        this.Materno = this.FormatearMaterno(materno.toUpperCase());
        this.FechaNacimiento = fechaNacimiento;
        var _fecha = fechaNacimiento.toDateString();
        var fecha = _fecha.split(' ');
        this.CURPValida = '';
        this.CURPValida += this.PosicionUno();
        this.CURPValida += this.PosicionDos();
        this.CURPValida += this.PosicionTres();
        this.CURPValida += this.PosicionCuatro();
        this.CURPValida = this.PalabraInconveniente(this.CURPValida);
        this.CURPValida += fecha[3].substr(2, 2) + this.meses(fecha[1]) + fecha[2];
        this.CURPValida += sexo == "1" ? "H" : "M";
        if (esMexicano) {
            this.CURPValida += estadoNacimiento.clave;
        }
        else {
            this.CURPValida += "NE";
        }
        this.CURPValida += this.Posicion141516(this.Paterno);
        this.CURPValida += this.Posicion141516(this.Materno);
        this.CURPValida += this.Posicion141516(this.Nombre);
        this.CURP = curp.toUpperCase();
        //console.log(this.CURPValida);
        //console.log(this.CURP);
        if (this.CURPValida.toUpperCase() == this.CURP.substr(0, 16)) {
            if (parseInt(fecha[3]) < 2000) {
                if (!this.IsDigit(this.CURP.substr(16, 1))) {
                    return false;
                }
            }
            else {
                if (!this.IsLetra(this.CURP.substr(16, 1))) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    CURPValidator.prototype.ValidarRFC = function (nombre, paterno, materno, fechaNacimiento, sexo, estadoNacimiento, rfc) {
        if (rfc == null || rfc == '') {
            return;
        }
        this.Nombre = this.FormatearNombre(nombre.toUpperCase());
        this.Paterno = this.FormatearPaterno(paterno.toUpperCase());
        this.Materno = this.FormatearMaterno(materno.toUpperCase());
        this.FechaNacimiento = fechaNacimiento;
        var _fecha = fechaNacimiento.toDateString();
        var fecha = _fecha.split(' ');
        this.RFCValida = '';
        this.RFCValida += this.PosicionUno();
        this.RFCValida += this.PosicionDos();
        this.RFCValida += this.PosicionTres();
        this.RFCValida += this.PosicionCuatro();
        this.RFCValida = this.PalabraInconveniente(this.RFCValida);
        this.RFCValida += fecha[3].substr(2, 2) + this.meses(fecha[1]) + fecha[2];
        this.RFC = rfc.toUpperCase();
        if (this.RFCValida == this.RFC.substr(0, 10)) {
            return true;
        }
        return false;
    };
    CURPValidator.prototype.meses = function (mes) {
        switch (mes) {
            case "Jan":
                return "01";
            case "Feb":
                return "02";
            case "Mar":
                return "03";
            case "Apr":
                return "04";
            case "May":
                return "05";
            case "Jun":
                return "06";
            case "Jul":
                return "07";
            case "Aug":
                return "08";
            case "Sep":
                return "09";
            case "Oct":
                return "10";
            case "Nov":
                return "11";
            case "Dic":
                return "12";
        }
    };
    CURPValidator.prototype.PosicionUno = function () {
        if ("Ñ" == this.Paterno.substr(0, 1))
            return "X";
        return this.Paterno.substr(0, 1);
    };
    CURPValidator.prototype.PosicionDos = function () {
        var regex = /[AEIOU]/g;
        var str = this.Paterno.substr(1, this.Paterno.length);
        var m;
        var matches = new Array(str.length);
        var index = 0;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                // console.log(`Found match, group ${groupIndex}: ${match}`);
                matches[index] = match;
                index++;
            });
        }
        //console.log(matches);
        if (matches[0] != null && matches[0] != '')
            return matches[0];
        return "X";
    };
    CURPValidator.prototype.PosicionTres = function () {
        if ("Ñ" == this.Materno.substr(0, 1))
            return "X";
        return this.Materno.substr(0, 1);
    };
    CURPValidator.prototype.PosicionCuatro = function () {
        if ("Ñ" == this.Nombre.substr(0, 1))
            return "X";
        return this.Nombre.substr(0, 1);
    };
    CURPValidator.prototype.FormatearNombre = function (nombre) {
        this.Nombres = nombre.split(" ");
        var nombreNormalizado;
        var nombreFinal;
        for (var i = 0; i < this.Nombres.length; i++) {
            nombreNormalizado = this.Normalizar(this.Nombres[i]);
            nombreFinal = '';
            for (var j = 0; j < nombreNormalizado.length; j++) {
                if (nombreNormalizado[j] != ",") {
                    nombreFinal += nombreNormalizado[j];
                }
            }
            if (!(this.NombresComunes(nombreFinal) || this.EvitarCompuestos(nombreFinal))) {
                return nombreFinal;
            }
            nombreFinal = '';
        }
        return this.Nombres[0];
    };
    CURPValidator.prototype.FormatearPaterno = function (paterno) {
        var paternoCompuesto = paterno.split(" ");
        var paternoNormalizado;
        var paternoFinal;
        for (var i = 0; i < paternoCompuesto.length; i++) {
            paternoNormalizado = this.Normalizar(paternoCompuesto[i]);
            paternoFinal = '';
            for (var j = 0; j < paternoNormalizado.length; j++) {
                if (paternoNormalizado[j] != ",") {
                    paternoFinal += paternoNormalizado[j];
                }
            }
            if (!(this.EvitarCompuestos(paternoFinal))) {
                return paternoFinal;
            }
            paternoFinal = '';
        }
        return paternoCompuesto[0];
    };
    CURPValidator.prototype.FormatearMaterno = function (materno) {
        if (materno == null || materno == '') {
            return "X";
        }
        var maternoCompuesto = materno.split(" ");
        var maternoNormalizado;
        var maternoFinal;
        for (var i = 0; i < maternoCompuesto.length; i++) {
            maternoNormalizado = this.Normalizar(maternoCompuesto[i]);
            maternoFinal = '';
            for (var j = 0; j < maternoNormalizado.length; j++) {
                if (maternoNormalizado[j] != ",") {
                    maternoFinal += maternoNormalizado[j];
                }
            }
            if (!(this.EvitarCompuestos(maternoFinal))) {
                return maternoFinal;
            }
            maternoFinal = '';
        }
        return maternoCompuesto[0];
    };
    CURPValidator.prototype.PalabraInconveniente = function (str) {
        var inconvenientes = ['BACA', 'BAKA', 'LOCO', 'LOKA', 'LOKO', 'BUEI', 'BUEY', 'MAME', 'CACA', 'MAMO',
            'CACO', 'MEAR', 'CAGA', 'MEAS', 'CAGO', 'MEON', 'CAKA', 'MIAR', 'CAKO', 'MION',
            'COGE', 'MOCO', 'COGI', 'MOKO', 'COJA', 'MULA', 'COJE', 'MULO', 'COJI', 'NACA',
            'COJO', 'NACO', 'COLA', 'PEDA', 'CULO', 'PEDO', 'FALO', 'PENE', 'FETO', 'PIPI',
            'GETA', 'PITO', 'GUEI', 'POPO', 'GUEY', 'PUTA', 'JETA', 'PUTO', 'JOTO', 'QULO',
            'KACA', 'RATA', 'KACO', 'ROBA', 'KAGA', 'ROBE', 'KAGO', 'ROBO', 'KAKA', 'RUIN',
            'KAKO', 'SENO', 'KOGE', 'TETA', 'KOGI', 'VACA', 'KOJA', 'VAGA', 'KOJE', 'VAGO',
            'KOJI', 'VAKA', 'KOJO', 'VUEI', 'KOLA', 'VUEY', 'KULO', 'WUEI', 'LILO', 'WUEY',
            'LOCA'];
        if (inconvenientes.indexOf(str) > -1) {
            str = str.replace(str.substr(1, 1), 'X');
        }
        return str;
    };
    CURPValidator.prototype.NombresComunes = function (str) {
        var comunes = ['MARIA', 'JOSE', 'MA', 'J', ' '];
        if (comunes.indexOf(str) > -1) {
            return true;
        }
        return false;
    };
    CURPValidator.prototype.Normalizar = function (str) {
        var origen = ['Ã', 'À', 'Á', 'Ä', 'Â', 'È', 'É', 'Ë', 'Ê', 'Ì', 'Í', 'Ï', 'Î',
            'Ò', 'Ó', 'Ö', 'Ô', 'Ù', 'Ú', 'Ü', 'Û', 'ã', 'à', 'á', 'ä', 'â',
            'è', 'é', 'ë', 'ê', 'ì', 'í', 'ï', 'î', 'ò', 'ó', 'ö', 'ô', 'ù',
            'ú', 'ü', 'û', 'Ç', 'ç'];
        var destino = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I',
            'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'a', 'a', 'a', 'a', 'a',
            'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'u',
            'u', 'u', 'u', 'c', 'c'];
        var strs = str.split('');
        var salida = strs.map(function (char) {
            var pos = origen.indexOf(char);
            return (pos > -1) ? destino[pos] : char;
        }).toString();
        return salida;
    };
    CURPValidator.prototype.EvitarCompuestos = function (str) {
        var compuestos = ["DA", "DAS", "DE", "DEL", "DER", "DI",
            "DIE", "DD", "EL", "LA", "LOS", "LAS", "LE",
            "LES", "MAC", "MC", "VAN", "VON", "Y"];
        if (compuestos.indexOf(str) >= 0) {
            return true;
        }
        return false;
    };
    CURPValidator.prototype.Posicion141516 = function (string) {
        var regex = /[QWRTYPSDFGHJKLZXCVBNMÑ]/g;
        var str = string.substr(1, this.Paterno.length);
        var m;
        var matches = new Array(str.length);
        var index = 0;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //console.log(`Found match, group ${groupIndex}: ${match}`);
                matches[index] = match;
                index++;
            });
        }
        //console.log(matches);
        if (matches[0] != null && matches[0] != '') {
            if (matches[0] == "Ñ") {
                return "X";
            }
            return matches[0];
        }
        return "X";
    };
    CURPValidator.prototype.IsLetra = function (digito) {
        var regex = /[QWERTYUIOPASDFGHJKLZXCVBNM]/g;
        var str = digito;
        var m;
        var matches = new Array(str.length);
        var index = 0;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //console.log(`Found match, group ${groupIndex}: ${match}`);
                matches[index] = match;
                index++;
            });
        }
        //console.log(matches);
        if (matches[0] != null && matches[0] != '')
            return true;
        return false;
    };
    CURPValidator.prototype.IsDigit = function (digito) {
        var regex = /[1234567890]/g;
        var str = digito;
        var m;
        var matches = new Array(str.length);
        var index = 0;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //console.log(`Found match, group ${groupIndex}: ${match}`);
                matches[index] = match;
                index++;
            });
        }
        //console.log(matches);
        if (matches[0] != null && matches[0] != '')
            return true;
        return false;
    };
    return CURPValidator;
}());
CURPValidator = __decorate([
    core_1.Component({
        template: ''
    }),
    __metadata("design:paramtypes", [])
], CURPValidator);
exports.CURPValidator = CURPValidator;
//# sourceMappingURL=CURP.validator.js.map