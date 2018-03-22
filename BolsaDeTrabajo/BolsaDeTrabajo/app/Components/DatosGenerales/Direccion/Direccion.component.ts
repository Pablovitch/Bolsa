import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { CalendarModule, AutoCompleteModule, CheckboxModule, AutoComplete } from 'primeng/primeng';

import { CatalogosService } from '../../../Services/catalogos.service';
import { DireccionService } from '../../../Services/Direccion.Service';
import { Catalogos } from '../../../Shared/ApiCatalogos';

@Component({
    selector:'damsa-direccion',
    templateUrl: '/app/Components/DatosGenerales/Direccion/Direccion.component.html'
})
export class DireccionComponent implements OnInit {
    formDireccion: FormGroup;
    @Input('CandidatoId')
    personaId: string;
    viveMexico: boolean = true; 
    Pais: string;
    Estado: string;
    Municipio: string;
    Colonia: string;
    defaultStr: string = '';
    Edit: boolean = false;
    filteredCountries: any[];
    filteredStates: any[];
    filteredTowns: any[];
    direccionCompleted: boolean = false;
    constructor(
        private fb: FormBuilder, private _catalogosService: CatalogosService,
        private _Router: Router, private _DireccionService: DireccionService,
        private _Route: ActivatedRoute
    ) { 
        this.formDireccion = fb.group({
            personaId: [],
            id: [],
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

    }
    ngOnInit() {
        this.formDireccion.get('personaId').setValue(this.personaId);
        this.GetInitialData();
    }

    GetInitialData()
    {
        this._DireccionService.GetDireccion(this.personaId)
            .subscribe(direccion => {
                this.formDireccion.patchValue({
                    id: direccion.id,
                    pais: direccion.pais,
                    paisId: direccion.paisId,
                    estado: direccion.estado,
                    estadoId: direccion.estadoId,
                    municipio: direccion.municipio,
                    municipioId: direccion.municipioId,
                    codigoPostal: direccion.codigoPostal,
                    colonia: direccion.colonia,
                    coloniaId: direccion.coloniaId,
                    calle: direccion.calle,
                    numeroExterior: direccion.numeroExterior,
                    numeroInterior: direccion.numeroInterior
                });
                this.Pais = direccion.pais.pais;
                this.Estado = (direccion.estado == null) ? this.defaultStr : direccion.estado.estado;
                this.Municipio = (direccion.municipio == null) ? this.defaultStr : direccion.municipio.municipio;
                this.Colonia = (direccion.colonia == null) ? this.defaultStr : direccion.colonia.colonia;
                this.viveMexico = (this.Pais.toLowerCase() != 'mexico') ? false : true;
                this.DireccionCompleted();
                this.validarViveMexico();               
            });
    }
    //PAISES = '../api/paises/';
   
    filterCountry(event: any) {
        let query = event.query;
        this._catalogosService.getPaises(Catalogos.PAISES, query).then(countries => {
            this.filteredCountries = countries;

        });
    }

    setPais(value: any) {
        this.formDireccion.get('paisId').setValue(value.id);
        this.Pais = value.pais;       

        if (value.pais.toString().toLowerCase() == "mexico") {
            this.viveMexico = true;
          } else {
            this.viveMexico = false;
        }
        this.validarViveMexico();
    }
    ValidatePais() {
        if (this.formDireccion.get('pais').value != null) {
            this.formDireccion.get('paisId').setValue(null);
            this.Pais = '';
        }
    }

    
    //ESTADOS = '../api/estados'
    filterState(event: any) {
        let estado: boolean = this.formDireccion.get('paisId').value;
        if (estado == null) {
            this.filteredStates = [{ id: 0, estado: "**Seleccione un país**", clave: "X", paisId: 0 }];
            return;
        }
        let query = event.query;
        this._catalogosService.getEstados(Catalogos.ESTADOS, query).then(states => {
            this.filteredStates = states;

        });
    }

    setEstado(value: any) {
        if (value.id > 0) {
            this.formDireccion.get('estadoId').setValue(value.id);
            this.Estado=value.estado
        }
    }
    ValidateEstado() {
        if (this.formDireccion.get('estado').value != null) {
            this.formDireccion.get('estadoId').setValue(null);
            this.Estado = '';
        }
    }

    
    //MUNICIPIOS = '../api/municipios';
    filterTowns(event: any) {
        let estado: boolean = this.formDireccion.get('estadoId').invalid;
        if (estado) {
            this.filteredTowns = [{ id: 0, municipio: "**Seleccione un estado**", estadoId: 0 }];
            return;
        }
        var estadoId = this.formDireccion.get('estadoId').value;
        let query = event.query;
        this._catalogosService.getMunicipios(Catalogos.MUNICIPIOS, estadoId, query).then(towns => {
            this.filteredTowns = towns;

        });
    }
    ValidateMunicipio() {
        if (this.formDireccion.get('municipio').value != null) {
            this.Municipio = '';
            this.formDireccion.get('municipioId').setValue(null);
        }
    }

    setMunicipio(value: any) {
        this.formDireccion.get('municipioId').setValue(value.id);
        this.Municipio = value.municipio;
        
    }
  

    filteredColonias: any[];
    filterColonias(event: any) {
        var postalCode = this.formDireccion.get('codigoPostal').value;
        let query = event.query;
        this._catalogosService.getColonia(Catalogos.COLONIAS, postalCode, query).then(colonias => {
            this.filteredColonias = colonias;

        });
    }

    //COLONIAS = '../api/colonias';
    buscarColonias() {
        if (!this.viveMexico) {
            return;
        }
        var postalCode = this.formDireccion.get('codigoPostal').value;
        this._catalogosService.getColonias(Catalogos.COLONIAS, postalCode).
            then(colonias => {
                this.filteredColonias = colonias;
            });
    }

    setColonia(value: any) {
        this.formDireccion.get('coloniaId').setValue(value.id);
        this.formDireccion.get('colonia').setValue(null);
        this.Colonia = value.colonia;
    }

    OnEdit() {
        this.Edit = true;
    }
    DiscardEdit() {
        this.GetInitialData();
        this.Edit = false;
    }

    validarViveMexico()
    { 
        if (!this.viveMexico) {
            this.onClearEstado();
            this.formDireccion.get('estado').disable();
            this.onClearMunicipio();
            this.formDireccion.get('municipio').disable();
            this.onClearColonia();
            this.formDireccion.get('colonia').disable();
            this.formDireccion.get('calle').setValue(null);
            this.formDireccion.get('calle').disable();
            this.formDireccion.get('numeroExterior').setValue(null);
            this.formDireccion.get('numeroExterior').disable();
            this.formDireccion.get('numeroInterior').setValue(null);
            this.formDireccion.get('numeroInterior').disable();
        }
        else {
            this.formDireccion.get('estado').enable();
            this.formDireccion.get('municipio').enable();
            this.formDireccion.get('colonia').enable();
            this.formDireccion.get('calle').enable();
            this.formDireccion.get('numeroExterior').enable();
            this.formDireccion.get('numeroInterior').enable();
        }
    }

    pais: any;
    estado: any;
    municipio: any;
    DetachForm()
    {
        this.pais = this.formDireccion.get('pais').value;
        this.estado = this.formDireccion.get('estado').value;
        this.municipio = this.formDireccion.get('municipio').value;
        this.formDireccion.get('pais').setValue(null);
        this.formDireccion.get('municipio').setValue(null);
        this.formDireccion.get('estado').setValue(null);
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

        if (this.viveMexico) {
            if (paisId != null && estadoId != null && municipioId != null && coloniaId != null && (cp != null && cp != '') && (calle != null && calle != '') && (numeroExterior != null && numeroExterior != '')) {
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
            else {
                this.direccionCompleted = false;
            }
        }
    }


    Save() {
        this.DetachForm();
        this._DireccionService.EditDireccion(this.formDireccion.value)
            .subscribe(PersonaId => {
                this.formDireccion.get('pais').setValue(this.pais);
                this.formDireccion.get('municipio').setValue(this.municipio);
                this.formDireccion.get('estado').setValue(this.estado);
                //this.formDatosDeContacto.markAsPristine();
                //this._Router.navigate(['DatosPerfilComponent', PersonaId]);
            });
        this.Edit = false;
    }

}