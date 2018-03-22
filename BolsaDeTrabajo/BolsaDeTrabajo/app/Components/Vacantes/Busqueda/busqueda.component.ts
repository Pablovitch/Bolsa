import { Component, OnInit, Input } from '@angular/core';
import { BusquedaService } from '../../../Services/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: '/app/Components/Vacantes/Busqueda/busqueda.component.html',
  //styleUrls: ['/app/Components/Vacantes/Busqueda/busqueda.component.css'],
  providers: [BusquedaService]
})
export class BusquedaComponent implements OnInit {

    @Input('CandidatoId')
    CandidatoId: string;
  public vacantes: string[];
  public vacantesdtl: string[];
  public filtro: String;
  showMenu: boolean = true;

  constructor(private service: BusquedaService) { }

  ShowMenu() {
      this.showMenu = !this.showMenu;
  }

    public user: String;

    buscavacantes(){ // Enviamos el filtro al controlador. ***
        //this.service.getfiltro(this.filtro).then(res => { this.vacantesdtl = res })
        //alert(event.nombre);
        console.log('Envio filtro: '+this.filtro);
    }

    ngOnInit(){

    }

}
