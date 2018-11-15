import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../../models/team';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';
import { TeamService } from '../../services/team.service';

import { FileUpload } from 'primeng/primeng';

import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  providers: [MessageService],
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  @Input() team: Team;
  @Input() display: boolean;  
  @Output() displayChange = new EventEmitter();
  @Output() saveTeamNotify = new EventEmitter<Team>();
  country: any;
  countryes: any[];
  filteredCountryesSingle: any[];
  teamrival: any;
  teamrivals: any[];
  filteredTeamRivalSingle: any[];
  files: any[] = [];

  constructor(private countryService: CountryService, private teamService: TeamService, private messageService: MessageService) { 
  }

  ngOnInit() {
    this.getAllCountries();
    this.getAllTeams();   
  }

  getAllCountries() {
    this.countryService.getAllCountries().subscribe(
      data => {
        this.countryes = data;
      }
    );
  }

  getAllTeams() {
    this.teamrivals = [];
    console.log('getallteams');
    this.teamService.getAllTeams().subscribe(
      data => {
        this.teamrivals = data;
      }
    );
  }

  filterCountryesSingle(event) {
    let query = event.query;
    this.filteredCountryesSingle = this.filterCountryes(query, this.countryes);
  }

  filterCountryes(query, countryes: any[]):any[] {
      let filtered : any[] = [];
      if(countryes) {
        for(let i = 0; i < countryes.length; i++) {
            let country = countryes[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
      }
      return filtered;
  }

  filterTeamRivalSingle(event) {
    let query = event.query;
    this.filteredTeamRivalSingle = this.filterTeamRivals(query, this.teamrivals).filter(obj => obj.id !== this.team.id);
  }

  filterTeamRivals(query, teamrivals: any[]):any[] {
      let filtered : any[] = [];
      if(teamrivals) {
        for(let i = 0; i < teamrivals.length; i++) {
            let teamrival = teamrivals[i];
            if(teamrival.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(teamrival);
            }
        }
      }
      return filtered;
  }

  myUploader(event, uploader: FileUpload) {
      let reader = new FileReader();
        if(event.files && event.files.length > 0) {
          let file = event.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.team.shieldfilename = file.name;
            this.team.shieldfile = reader.result;
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
  }  

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }

  saveTeam() {
    if(!this.team.id) {
      this.teamService.saveTeam(this.team).subscribe(
        data => {
          this.display = false;
          this.team.id = data;
          this.saveTeamNotify.emit(this.team);            
        }
      );
    } else {
      this.teamService.updateTeam(this.team).subscribe(
        data => {  
          this.display = false;
        }
      );
    }

  }
}
