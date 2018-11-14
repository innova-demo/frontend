import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo';
import { Pais } from '../../models/pais';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {
  equipoList: Equipo[];
  equipo: Equipo;
  display: boolean = false;

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
  	this.getAllEquipos();
  }

  getAllEquipos() {
  	this.equipoService.getAllEquipos().subscribe(
  		data => {
  			this.equipoList = data;
  		}
  	);
  }

  selectedEquipo(equipo: Equipo) {
    this.equipo = equipo;
    this.display = true;
    console.log(equipo);
  }

  addEquipo() {
    this.equipo = new Equipo;
    this.display = true;
  }

  deleteEquipo(equipo: Equipo) {
    console.log(equipo);
    this.equipoService.deleteEquipo(equipo.id).subscribe(
      data => {  
        console.log(data);
      }
      );
  }

  onDialogClose(event) {
   this.display = event;
  }

  saveEquipoDetail(equipo: Equipo) {
    const _equipo = this.equipoList.find(x => x.id === this.equipo.id);
    if(_equipo == null) {
      this.equipoList.push(equipo);
    }
    this.equipo = null;

  }

}
