import { FormControl, FormGroup } from '@angular/forms'
export class AltaCandidatoValidator {

    static ValidarCorreo(control: FormControl)
    {
        if (control.value == '') {
            return null;
        }
        var patt = new RegExp('^[^@]+@[^@]+\\.[a-zA-Z]{2,}$');
        if (!patt.test(control.value)) {
            return { ValidarCorreo:true }
        }

        return null;
    }

    static ConfirmarCorreo(group: FormGroup)
    {
              
        if (group.value == "" || group.value == "" )
            return null;

        var confirmEmail = group.value;
        var Email = group.root.get('email').value;
       // var confirmEmail = group.parent.controls.email.value;

        if (Email == '' && confirmEmail == '')
            return null

        if (Email != confirmEmail)
         return { ConfirmarCorreo: true }

        return null;

    }

    static CURPValidator(control: FormControl): any
    {
        if (control.value.lenght() == 18)
        {
            return null;
        }

        return { curpValidator: true }
    }

    static ListaValidator(control: FormControl)
    { 
        if (control.value > 0) {
            return null;
        }

        return { ListaValidator:true}
    }

   
}