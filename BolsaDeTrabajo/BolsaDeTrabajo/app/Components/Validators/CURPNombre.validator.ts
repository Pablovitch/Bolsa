﻿import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Estado } from '../../Models/Candidato';


@Component({
    template: ''
})
export class CURPNombreValidator {
    Nombres: string[] = new Array(4);
    Nombre: string;
    Paterno: string;
    Materno: string;
    FechaNacimiento: Date;
    EstadoNacimiento: string;
    Sexo: string;


    CURP: string;
    RFC: string;
    Letra: string;
    CURPValida: string = '';
    RFCValida: string = '';

    constructor() {

    }
 
    public ValidarCurpNombre(nombre: string, paterno: string, materno: string, curp: string) {
      
        if (nombre.trim() == null || paterno.trim() == null) {
            return;
        }
        this.Nombre = this.FormatearNombre(nombre.toUpperCase());
        this.Paterno = this.FormatearPaterno(paterno.toUpperCase());
        this.Materno = this.FormatearMaterno(materno.toUpperCase());
        this.CURPValida = '';
        this.CURPValida += this.PosicionUno();
        this.CURPValida += this.PosicionDos();
        this.CURPValida += this.PosicionTres();
        this.CURPValida += this.PosicionCuatro();
        //console.log(this.CURPValida);
        //console.log(curp.substr(0, 4));
        if (this.CURPValida == curp.substr(0, 4))
        {
            return true;
        }
        return false;
    }
    private PosicionUno()    //primera letra del primer apellido
    {
        if ("Ñ" == this.Paterno.substr(0, 1))
            return "X";

        return this.Paterno.substr(0, 1)
    }

    private PosicionDos()//primera vocal interna del primer apellido
    {
        const regex = /[AEIOU]/g;
        let str = this.Paterno.substr(1, this.Paterno.length);
        let m;
        let matches: string[] = new Array(str.length);
        let index: number = 0;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                // console.log(`Found match, group ${groupIndex}: ${match}`);
                matches[index] = match;
                index++;
            });
        }
        //console.log(matches);
        if (matches[0] != null && matches[0] != '')
            return matches[0];

        return "X";
    }

    private PosicionTres() {
        if ("Ñ" == this.Materno.substr(0, 1))
            return "X";

        return this.Materno.substr(0, 1);
    }

    private PosicionCuatro()//primera letra del nombre de pila
    {
        if ("Ñ" == this.Nombre.substr(0, 1))
            return "X";

        return this.Nombre.substr(0, 1);
    }

    private FormatearNombre(nombre: string) {
        this.Nombres = nombre.split(" ");
        let nombreNormalizado: string;
        let nombreFinal: string;
        for (var i = 0; i < this.Nombres.length; i++) {
            nombreNormalizado = this.Normalizar(this.Nombres[i])
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
    }

    private FormatearPaterno(paterno: string) {
        var paternoCompuesto = paterno.split(" ");
        let paternoNormalizado: string;
        let paternoFinal: string;
        for (var i = 0; i < paternoCompuesto.length; i++) {
            paternoNormalizado = this.Normalizar(paternoCompuesto[i])
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
    }

    private FormatearMaterno(materno: string) {
        if (materno == null || materno == '') {
            return "X";
        }
        var maternoCompuesto = materno.split(" ");
        let maternoNormalizado: string;
        let maternoFinal: string;
        for (var i = 0; i < maternoCompuesto.length; i++) {
            maternoNormalizado = this.Normalizar(maternoCompuesto[i])
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
    }



    public PalabraInconveniente(str: string) {
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
            str = str.replace(str.substr(1, 1), 'X')
        }

        return str;
    }

    public NombresComunes(str: string) {
        var comunes = ['MARIA', 'JOSE', 'MA', 'J', ' '];

        if (comunes.indexOf(str) > -1) {
            return true;
        }

        return false;
    }

    public Normalizar(str: string) {
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
    }

    public EvitarCompuestos(str: string) {
        var compuestos = ["DA", "DAS", "DE", "DEL", "DER", "DI",
            "DIE", "DD", "EL", "LA", "LOS", "LAS", "LE",
            "LES", "MAC", "MC", "VAN", "VON", "Y"];
        if (compuestos.indexOf(str) >= 0) {
            return true;
        }
        return false;
    }

    public Posicion141516(string: string)//primera consonante no interna del primer apellido, segundo apellido y nombre
    {
        const regex = /[QWRTYPSDFGHJKLZXCVBNMÑ]/g;
        let str = string.substr(1, this.Paterno.length);
        let m;
        let matches: string[] = new Array(str.length);
        let index: number = 0;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
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
    }

    IsLetra(digito: any) {
        const regex = /[QWERTYUIOPASDFGHJKLZXCVBNM]/g;
        let str = digito;
        let m;
        let matches: string[] = new Array(str.length);
        let index: number = 0;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                //console.log(`Found match, group ${groupIndex}: ${match}`);
                matches[index] = match;
                index++;
            });
        }
        //console.log(matches);
        if (matches[0] != null && matches[0] != '')
            return true;

        return false;
    }

    IsDigit(digito: any) {
        const regex = /[1234567890]/g;
        let str = digito;
        let m;
        let matches: string[] = new Array(str.length);
        let index: number = 0;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                //console.log(`Found match, group ${groupIndex}: ${match}`);
                matches[index] = match;
                index++;
            });
        }
        //console.log(matches);
        if (matches[0] != null && matches[0] != '')
            return true;

        return false;
    }


}

