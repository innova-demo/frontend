import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';
import { EquipoService } from '../../services/equipo.service';

import { FileUpload } from 'primeng/primeng';

import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  providers: [MessageService],
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {
  @Input() equipo: Equipo;
  @Input() display: boolean;  
  @Output() displayChange = new EventEmitter();
  @Output() saveEquipoNotify = new EventEmitter<Equipo>();
  pais: any;
  paises: any[];
  filteredPaisesSingle: any[];
  teamrival: any;
  teamrivals: any[];
  filteredTeamRivalSingle: any[];
  files: any[] = [];

  constructor(private paisService: PaisService, private equipoService: EquipoService, private messageService: MessageService) { 
  }

  ngOnInit() {
    console.log('ngInit');
    this.getAllPaises();
    this.getAllEquipos();   
  }

  getAllPaises() {
    this.paisService.getAllPaises().subscribe(
      data => {
        this.paises = data;
      }
    );
  }

  getAllEquipos() {
    this.equipoService.getAllEquipos().subscribe(
      data => {
        this.teamrivals = data;
      }
    );
  }

  filterPaisesSingle(event) {
    let query = event.query;
    this.filteredPaisesSingle = this.filterPaises(query, this.paises);
  }

  filterPaises(query, paises: any[]):any[] {
      let filtered : any[] = [];
      if(paises) {
        for(let i = 0; i < paises.length; i++) {
            let country = paises[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
      }
      return filtered;
  }

  filterTeamRivalSingle(event) {
    let query = event.query;
    this.filteredTeamRivalSingle = this.filterTeamRivals(query, this.teamrivals);
  }

  filterTeamRivals(query, teamrivals: any[]):any[] {
      console.log(teamrivals);
      let filtered : any[] = [];
      if(teamrivals) {
        for(let i = 0; i < teamrivals.length; i++) {
            console.log(2);
            let equiporival = teamrivals[i];
            if(equiporival.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(equiporival);
            }
        }
      }
      return filtered;
  }

  myUploader(event, uploader: FileUpload) {
      //this.equipo.shieldFile = event.files[0];

      let reader = new FileReader();
        if(event.files && event.files.length > 0) {
          let file = event.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.equipo.shieldfilename = file.name;
            this.equipo.shieldfile = reader.result;
            console.log(reader.result);
            console.log(this.equipo);
          };
        }


      uploader.clear();
  }

  myOnSelect(event, uploader: FileUpload) {
  }

  onClose(){
      this.display = false;
      this.displayChange.emit(false);
  }

  onShow(){
      //this.files.push(this.equipo.shieldFile);
  }  

  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }

  saveEquipo() {
    console.log("saveEquipo()");
    console.log(this.equipo);
    if(!this.equipo.id) {
      this.equipoService.saveEquipo(this.equipo).subscribe(
        data => {
          console.log(data);
          this.display = false;
          this.equipo.id = data;
          this.saveEquipoNotify.emit(this.equipo);            
        }
      );
    } else {
      this.equipoService.updateEquipo(this.equipo).subscribe(
        data => {  
          this.display = false;
        }
      );
    }

  }
}
