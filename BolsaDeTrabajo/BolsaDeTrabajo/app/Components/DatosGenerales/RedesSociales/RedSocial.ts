import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng'

import { TipoRedSocial } from '../../../Models/Candidato'
import { CatalogosService } from '../../../Services/catalogos.service'
@Component({
    selector: 'redesSociales',
    templateUrl:'app/Components/DatosGenerales/RedesSociales/RedSocial.html'
})
export class RedSocialComponent {
    @Input('group')
    public RedSocial: FormGroup;   
    @Input('Index')
    public index: number;
    @Input('Edit')
    public Edit: boolean;
    @Output('Remove')
    public remove = new EventEmitter();

    tiposRedesSociales: SelectItem[];
    redSocial: string;

    constructor(private _catalogosService: CatalogosService) {
        this._catalogosService.TipoDeRedSocial()
            .subscribe(data => {
                this.tiposRedesSociales = data;
                this.InitialaizeRedSocial();
            });
    }
    SetRedSocial(event:any)
    {        
        this.redSocial = this.tiposRedesSociales.find(x => x.value == event.value).label;
    }
    InitialaizeRedSocial() {
        let idTipoRedSocial = this.RedSocial.get('tipoRedSocialId').value;
        if (idTipoRedSocial != null) {           
            this.redSocial = this.tiposRedesSociales.find(x => x.value == idTipoRedSocial).label;
        }
    }
    Remove(index: number) {
        this.remove.emit(index);
    }
}