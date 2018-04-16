import { Component, OnInit, Input } from '@angular/core';
import { VacantesService } from '../../../Services/vacantes.service';
import { CurrencyPipe } from '@angular/common';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FiltroVacantes } from '../../../Models/Vacantes'

@Component({
  selector: 'app-vacante',
  templateUrl: '/app/Components/Vacantes/Vacante/vacante.component.html',
  providers: [VacantesService]
})
export class VacanteComponent implements OnInit {

    @Input('CandidatoId')
  CandidatoId: string;
  public vacantes: string[];
  public vacantesdtl: string[];
  public arrayvacantes: any[];
  public estados: any[];
  public municipios: any[];
  public categorias: any[];
  public estadoestudios: any[];
  public escolaridades: any[];
  public SMin: number;
  public SMax: number;
  public id: string;
  Oculto: boolean = false;
  showMenu: boolean = true;
  public datospostulacion: FormGroup;
  public FiltroVacantes: FormGroup;
  public postulacion: any[];
  public filtroestado: any[];
  public filtroesc: any[];
  public filtromunicipio: any[];
  public filtrocategorias: any[];

  constructor(private service: VacantesService, fb: FormBuilder, fbfinf: FormBuilder) {
      this.datospostulacion = fb.group({
          candidatoid: [],
          requisicionid: [],
          StatusId:[]
      });

      this.FiltroVacantes = fbfinf.group({
          palabraClave: []
      });
  }

  public user: string;



    ngOnInit(){ // Muestra todas las vacantes.  ***
        this.service.getvacantes()
            .subscribe(data => {
                this.arrayvacantes = data.vacantes;
                this.vacantes = data.vacantes;
                this.categorias = data.categorias;
                this.filtrocategorias = new Array(this.categorias.length);
                this.estados = data.estados;
                this.filtroestado = new Array(this.estados.length);
                this.municipios = data.municipios;
                this.filtromunicipio = new Array(this.municipios.length);
                this.estadoestudios = data.estadoestudios;
                this.escolaridades = data.escolaridades;
                this.filtroesc = new Array(this.escolaridades.length);
                //console.log(data.escolaridades);
                this.pageCount = Math.round(this.vacantes.length / this.rows);
                this.TotalRecords = this.vacantes.length;
                this.paginador();
            })
        //console.log(this.vacantes);
        this.user = null; // Validación para registro en vacantes. Variable global usuario. // Muestra solo las vacantes filtradas.
    }

    ShowMenu() { // Mostrar o ocultar el menu lateral.
    this.showMenu = !this.showMenu;
    }

    display: boolean = false; //Deshabilitar el modal de detalles. ***
    displayPostulacion: boolean = false;

    OkPostulacion() {
        this.displayPostulacion = false;
    }

    rangeValues: number[] = [25, 800];
    Val: number = 5;
    showdialog( idx: any ) {  // Muestra el detalle de la vacante. ***
        this.service.getvacantesdtl(idx)
            .subscribe(data => {
                //console.log(data);
                this.vacantesdtl = data;
                console.log(this.vacantesdtl);
                this.display = true //Habilitamos el modal de detalles. ***
            })
    }

    rows: number = 10;
    first: number = 0;
    page: number = 1;
    pageCount: number = 0;
    TotalRecords: number = 0;
    paginate(event: any)
    {
        console.log(event);
        //event.first = Index of the first record
        // console.log(event.first);
        this.first = event.first;
        //event.rows = Number of rows to display in new page
        //console.log(event.rows);
        this.rows = event.rows;
        //event.page = Index of the new page
        //console.log(event.page);
        this.page = event.page + 1;
        //event.pageCount = Total number of pages
        console.log(event.pageCount);
        this.pageCount = event.pageCount;

        this.paginador();
    }

    paginador()
    {

        if (this.page < this.pageCount) {
            this.vacantes = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.vacantes[i] = this.arrayvacantes[this.first + i];
            }
        }
        else {
            let lenght = this.arrayvacantes.length - this.first;

            this.vacantes = new Array(lenght);
            for (var i = 0; i < lenght; i++) {
                this.vacantes[i] = this.arrayvacantes[this.first + i];
            }
        }

    }


    Postularse(idx: any): void
    {
        this.datospostulacion.get('candidatoid').setValue(this.CandidatoId);
        this.datospostulacion.get('requisicionid').setValue(idx);
        this.datospostulacion.get('StatusId').setValue(1);
        this.service.postulacion(this.datospostulacion.value)
            .subscribe(data => {
                console.log(data);
            });
        this.display = false
        this.displayPostulacion = true;
    }

    OnClickCategorias(event: any) {
        if (event.target.checked) {
            this.filtrocategorias.push(event.target.id);
            this.buscavacantes();
        }
        else {
            let index = this.filtrocategorias.indexOf(event.target.id);
            this.filtrocategorias.splice(index, 1);
            this.buscavacantes();
        }

    }

    OnClickEstados(event: any) {
        if (event.target.checked) {
            this.filtroestado.push(event.target.id);
            this.buscavacantes();
        }
        else {
            let index = this.filtroestado.indexOf(event.target.id);
            this.filtroestado.splice(index, 1);
            this.buscavacantes();
        }

    }

    OnClickMunicipios(event: any) {
        if (event.target.checked) {
            this.filtromunicipio.push(event.target.id);
            this.buscavacantes();
        }
        else {
            let index = this.filtromunicipio.indexOf(event.target.id);
            this.filtromunicipio.splice(index, 1);
            this.buscavacantes();
        }

    }

    OnClickEscolaridades(event: any) {
        if (event.target.checked) {
            this.filtroesc.push(event.target.id);
            this.buscavacantes();
        }
        else {
            let index = this.filtroesc.indexOf(event.target.id);
            this.filtroesc.splice(index, 1);
            this.buscavacantes();
        }

    }

    filtrosueldo(event: any) {
        this.SMin = event.values[0]*100;
        this.SMax = event.values[1]*100;
        this.buscavacantes();
    }

    buscavacantes()
    {
        let filtroX: FiltroVacantes = new FiltroVacantes();
        filtroX.palabraClave = this.FiltroVacantes.get('palabraClave').value;
        filtroX.candidatoId = this.CandidatoId;
        filtroX.filtroCategoria = this.filtrocategorias;
        filtroX.filtroEstados = this.filtroestado;
        filtroX.filtrosmunicipio = this.filtromunicipio;
        filtroX.filtroEscolaridades = this.filtroesc;
        filtroX.SMin = this.SMin;
        filtroX.SMax = this.SMax;
        console.log(filtroX);

        this.service.filtrovacantes(filtroX).subscribe(data => {
            this.arrayvacantes = data;
            this.pageCount = Math.round(this.arrayvacantes.length / this.rows);
            this.TotalRecords = this.arrayvacantes.length;
            this.paginador();
        })

    }
}
