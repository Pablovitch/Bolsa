import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { CalendarModule, AutoCompleteModule, CheckboxModule, AutoComplete } from 'primeng/primeng'; 

import { CatalogosService } from '../../Services/catalogos.service';
import { DireccionService } from '../../Services/Direccion.Service';
import { Catalogos } from '../../Shared/ApiCatalogos';

@Component({
    templateUrl:'/app/Components/FormulariosIniciales/DatosDireccion.component.html'
})
export class DatosDireccionComponent {
    formDireccion: FormGroup;
    viveMexico: boolean = true;
    personaId: number;

    direccionCompleted: boolean = false;

    CandidatoId: string = null;
    Oculto: boolean = true;
    showMenu: boolean = false;

    constructor(
        private fb: FormBuilder, private _catalogosService: CatalogosService,
        private _Router: Router, private _DireccionService: DireccionService,
        private _Route: ActivatedRoute,
    ) {
        var parametros = this._Route.params.subscribe(params => {
            this.personaId = params["id"];
        });
        this.formDireccion = fb.group({
            personaId:[],
            pais: [''],
            paisId: [null, Validators.required],
            estado: [''],
            estadoId: [null],
            municipio: [''],
            municipioId: [null],
            codigoPostal: [null],
            colonia: [''],
            coloniaId: [null],
            calle: [null],
            numeroExterior: [null],
            numeroInterior: ['']
        });

        this.formDireccion.get('personaId').setValue(this.personaId);
        

    } 
    ShowMenu() {
        this.showMenu = true;
    }

    PAISES = '../api/paises/';
    filteredCountries: any[];
    filterCountry(event: any) {
        let query = event.query;
        this._catalogosService.getPaises(this.PAISES, query).then(countries => {
            this.filteredCountries = countries;

        });
    }

    setPais(value: any) {
        this.formDireccion.get('paisId').setValue(value.id);
        this.formDireccion.get('pais').setValue(null);

        if (value.pais.toString().toLowerCase() == "mexico") {
            this.viveMexico = true; 
        } else {
            this.viveMexico = false;
        }

    }


    filteredStates: any[];
    ESTADOS = '../api/estados'
    filterState(event: any) {
        let estado: boolean = this.formDireccion.get('paisId').value;
        if (estado == null) {
            this.filteredStates = [{ id: 0, estado: "**Seleccione un país**", clave: "X", paisId: 0 }];
            return;
        }
        let query = event.query;
        this._catalogosService.getEstados(this.ESTADOS, query).then(states => {
            this.filteredStates = states;

        });
    }

    setEstado(value: any) {
        if (value.id > 0) {
            this.formDireccion.get('estadoId').setValue(value.id);
        }

        this.formDireccion.get('estado').setValue(null);
    }

    filteredTowns: any[];
    MUNICIPIOS = '../api/municipios';
    filterTowns(event: any) {
        let estado: boolean = this.formDireccion.get('estadoId').invalid;
        if (estado) {
            this.filteredTowns = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDireccion.get('estadoId').value;
        let query = event.query;
        this._catalogosService.getMunicipios(this.MUNICIPIOS, estadoId, query).then(towns => {
            this.filteredTowns = towns;

        });
    }

    setMunicipio(value: any) {
        this.formDireccion.get('municipioId').setValue(value.id);
        this.formDireccion.get('municipio').setValue(null);
    }

    filteredColonias: any[];
    filterColonias(event: any) {
        var postalCode = this.formDireccion.get('codigoPostal').value;
        let query = event.query;
        this._catalogosService.getColonia(Catalogos.COLONIAS, postalCode, query).then(colonias => {
            this.filteredColonias = colonias;

        });
    }

    COLONIAS = '../api/colonias';
    buscarColonias() {
        if (!this.viveMexico) {
            return;
        }
        var postalCode = this.formDireccion.get('codigoPostal').value;
        this._catalogosService.getColonias(this.COLONIAS, postalCode).
            then(colonias => {
                this.filteredColonias = colonias;
            });
    }
    setColonia(value: any) {
        this.formDireccion.get('coloniaId').setValue(value.id);
        this.formDireccion.get('colonia').setValue(null);
    }

    @ViewChild('pais') autocompletePaisCharge: AutoComplete;

    doClearPais() {
        this.autocompletePaisCharge.inputEL.nativeElement.value = '';
    }
    onClearPais() {
        this.formDireccion.get('pais').setValue(null);
        this.formDireccion.get('paisId').setValue(null);
    }
    onBlurPais() {
        let paisId = this.formDireccion.get('paisId').value;
        if (paisId == null) {
            this.doClearPais();
        }
        this.DireccionCompleted();
    }
    @ViewChild('estado') autocompleteEstadoCharge: AutoComplete;
    onClearEstado() {
        this.formDireccion.get('estadoId').setValue(null);
        this.formDireccion.get('estado').setValue(null);
    }
    onBlurEstado() {
        let EstadoId = this.formDireccion.get('estadoId').value;
        if (EstadoId == null) {
            this.doClearEstado();
        }
        this.DireccionCompleted();
    }    

    doClearEstado() {
        this.autocompleteEstadoCharge.inputEL.nativeElement.value = '';
    }

    @ViewChild('municipio') autocompleteMunicipioCharge: AutoComplete;
    onClearMunicipio() {
        this.formDireccion.get('municipioId').setValue(null);
        this.formDireccion.get('municipio').setValue(null);
    }
    onBlurMunicipio() {
        let municipioId = this.formDireccion.get('municipioId').value;
        if (municipioId == null) {
            this.doClearMunicipio();
        }
        this.DireccionCompleted();
    }
    doClearMunicipio() {
        this.autocompleteMunicipioCharge.inputEL.nativeElement.value = '';
    }

   

    @ViewChild('colonia') autocompleteColoniaCharge: AutoComplete;
    onClearColonia() {
        this.formDireccion.get('coloniaId').setValue(null);
        this.formDireccion.get('colonia').setValue(null);
    }
    onBlurColonia() {
        let ColoniaId = this.formDireccion.get('coloniaId').value;
        if (ColoniaId == null) {
            this.doClearColonia();
        }
        this.DireccionCompleted();
    }
    doClearColonia() {
        this.autocompleteColoniaCharge.inputEL.nativeElement.value = '';
    }

    onCPChangue(value: string) {
        this.formDireccion.get('codigoPostal').setValue(value.toUpperCase());
        this.DireccionCompleted();
    }
    onCalleChangue(value: string) {
        this.formDireccion.get('calle').setValue(value.toUpperCase());
        this.DireccionCompleted();
    }
    onNumeroExteriorChangue(value: string) {
        this.formDireccion.get('numeroExterior').setValue(value.toUpperCase());
        this.DireccionCompleted();
    }
    onNumeroInteriorChangue(value: string) {
        this.formDireccion.get('numeroInterior').setValue(value.toUpperCase());
    }

    DireccionCompleted() {
        let paisId = null;
        let estadoId = null; 
        let municipioId = null; 
        let coloniaId = null;
        let cp = null;
        let calle = null;
        let numeroExterior = null;
        paisId = this.formDireccion.get('paisId').value;
        estadoId = this.formDireccion.get('estadoId').value;
        municipioId = this.formDireccion.get('municipioId').value;
        coloniaId = this.formDireccion.get('coloniaId').value;
        cp = this.formDireccion.get('codigoPostal').value;
        calle = this.formDireccion.get('calle').value;
        numeroExterior = this.formDireccion.get('numeroExterior').value;

        if (this.viveMexico)
        {
            if (paisId != null && estadoId != null && municipioId != null && coloniaId != null && (cp != null && cp != '') && (calle != null && calle != '') && (numeroExterior != null && numeroExterior!=''))
            {
                this.direccionCompleted = true; 
            }
            else {
                this.direccionCompleted = false;
            }
        }
        else {
            if (paisId != null && (cp != null && cp != '')) {
                this.direccionCompleted = true;
            }
            else
            {
                this.direccionCompleted = false;
            }
        } 
    }
    
    Save() {
        this._DireccionService.DireccionCandidato(this.formDireccion.value)
            .subscribe(PersonaId => {
                //this.formDatosDeContacto.markAsPristine();
                this._Router.navigate(['DatosPerfilComponent', PersonaId]);
            });
    }
        
}