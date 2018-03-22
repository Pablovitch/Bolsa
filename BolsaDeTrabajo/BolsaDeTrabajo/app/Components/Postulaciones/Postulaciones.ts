import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { PaginatorModule, DialogModule } from 'primeng/primeng';
import { CurrencyPipe } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms'

import { PostulacionesService } from '../../Services/Postulaciones'
import { DetalleVacanteService } from '../../Services/DetalleVacante'
import { FiltroPostulaciones } from '../../Models/Postulaciones'
@Component({
    templateUrl:'/app/Components/Postulaciones/Postulaciones.html'
})
export class Postulaciones {
    filtroPostulacion:FormGroup
    CandidatoId: string;
    Oculto: boolean = false;
    showMenu: boolean = true;
    Postulaciones: any[];
    ArrayPostulacipones: any[];
    status: any[];
    categorias: any[];
    DetalleVacante: any;
    display: boolean = false;
    displayAlert: boolean = false;
    filtroStatus: number[];
    filtroCategorias: number[];
    palabraClave: string;
    constructor(private _Route: ActivatedRoute,
        private postulacionesService: PostulacionesService,
        private vacanteService: DetalleVacanteService,
        fb: FormBuilder
    ) {
        this.filtroPostulacion = fb.group({
            palabraClave:['']
        });
        this._Route.params.subscribe(params => {
            this.CandidatoId = params['candidatoId'];
        });

        this.postulacionesService.GetPostulaciones(this.CandidatoId)
            .subscribe(data => {
                this.ArrayPostulacipones = data.postulaciones;
                this.status = data.statusPostulaciones;
                this.categorias = data.categorias;
                this.filtroStatus = new Array(this.status.length);
                this.filtroCategorias = new Array(this.categorias.length);
                this.pageCount = Math.round(this.ArrayPostulacipones.length / this.rows);
                this.TotalRecords = this.ArrayPostulacipones.length;
                this.paginador();
            })


    }

    ShowMenu() {
        this.showMenu = !this.showMenu;
    }

    rows: number = 5;
    first: number = 0;
    page: number = 1;
    pageCount: number = 0;
    TotalRecords: number = 0;
    paginate(event: any)
    {
        //console.log(event);
        //event.first = Index of the first record
       // console.log(event.first);
        this.first = event.first;
        //event.rows = Number of rows to display in new page
        //console.log(event.rows);
        this.rows = event.rows;
        //event.page = Index of the new page
        //console.log(event.page);
        this.page = event.page+1;
        //event.pageCount = Total number of pages
        //console.log(event.pageCount);
        this.pageCount = event.pageCount;

        this.paginador();
    }

    paginador()
    {

        if (this.page < this.pageCount)
        {
            this.Postulaciones = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.Postulaciones[i] = this.ArrayPostulacipones[this.first + i];
            }
        }
        else {
            let lenght = this.ArrayPostulacipones.length - this.first;

            this.Postulaciones = new Array(lenght);
            for (var i = 0; i < lenght; i++) {
                this.Postulaciones[i] = this.ArrayPostulacipones[this.first + i];
            }
        }

      }

    showDialog(idVacante: any) {
        this.vacanteService.GetDetalleVacante(idVacante)
            .subscribe(data => {
                this.DetalleVacante = data;
                this.display = true
            });

    }

    OnCheckingStatus(event: any)
    {
        if (event.target.checked)
        {
            this.filtroStatus.push(event.target.id);
            this.OnFiltering();
        }
        else
        {
            let index = this.filtroStatus.indexOf(event.target.id);
            this.filtroStatus.splice(index, 1);
            this.OnFiltering();
        }

    }

    OnCheckingCategoria(event: any) {
        if (event.target.checked)
        {
            this.filtroCategorias.push(event.target.id)
            this.OnFiltering();
        }
        else {
            let index = this.filtroCategorias.indexOf(event.target.id);
            this.filtroCategorias.splice(index, 1);
            this.OnFiltering();
        }

    }

    OnFiltering() {
        let filtroX: FiltroPostulaciones = new FiltroPostulaciones();
        filtroX.candidatoId = this.CandidatoId;
        filtroX.palabraClave = this.filtroPostulacion.get('palabraClave').value;
        filtroX.filtroStatus = this.filtroStatus;
        filtroX.filtroCategoria = this.filtroCategorias;
        this.postulacionesService.FiltroPostulaciones(filtroX).subscribe(data=>{
            this.ArrayPostulacipones = data;
            this.pageCount = Math.round(this.ArrayPostulacipones.length / this.rows);
            this.TotalRecords = this.ArrayPostulacipones.length;
            this.paginador();
         })

    }

    idDeclinada: string;
    Descvacante: string;
    onClickDeclinar(idPostulacion: any, descripcionvct: any)
    {
        this.idDeclinada = idPostulacion;
        this.Descvacante = descripcionvct
        this.displayAlert = true;
    }
    Declinar()
    {
        this.postulacionesService.DeletePostulacion(this.idDeclinada)
            .subscribe(data => {

                this.postulacionesService.GetPostulaciones(this.CandidatoId)
                    .subscribe(data => {
                        this.ArrayPostulacipones = data.postulaciones;
                        this.status = data.statusPostulaciones;
                        this.categorias = data.categorias;
                        this.filtroStatus = new Array(this.status.length);
                        this.filtroCategorias = new Array(this.categorias.length);
                        this.pageCount = Math.round(this.ArrayPostulacipones.length / this.rows);
                        this.TotalRecords = this.ArrayPostulacipones.length;
                        this.paginador();
                    })
            this.displayAlert = false;
            this.idDeclinada = '';
        })
    }
    NoDeclinar() {
        this.idDeclinada = '';
        this.displayAlert = false;
    }

}


