import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'damsa-menu-oculto',
    templateUrl:'/app/Components/GeneralComponents/menu-oculto.component.html'

})
export class MenuOcultoComponent {
    constructor() { }

    @Input('ShowMenu')
    showMenu: boolean;

    @Input('CandidatoId')
    CandidatoId: string;


}