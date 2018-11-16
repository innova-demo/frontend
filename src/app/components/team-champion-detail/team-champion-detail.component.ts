import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../../models/team';
import { Champion } from '../../models/champion';
import { TeamService } from '../../services/team.service';
import { ChampionService } from '../../services/champion.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-team-champion-detail',
  templateUrl: './team-champion-detail.component.html',
  providers: [MessageService],
  styleUrls: ['./team-champion-detail.component.css']
})
export class TeamChampionDetailComponent implements OnInit {
  @Input() team: Team;
  @Input() displayChampion: boolean;  
  @Output() displayChampionChange = new EventEmitter();

  constructor(private teamService: TeamService, private championService: ChampionService, private messageService: MessageService) { }

  ngOnInit() {
  }

  onClose(){
      this.displayChampion = false;
      this.displayChampionChange.emit(false);
  }

  onShow(){
  }  

  ngOnDestroy() {
    this.displayChampionChange.unsubscribe();
  }

  addTeamChampion(year) {
    var champion: Champion = new Champion;
    champion.year = year.value;
    this.teamService.saveChampion(this.team.id, champion).subscribe(
      data => {
        champion.id = data;
        this.team.champions.push(champion);
      }
    );
  }

  deleteTeamChampion(champion) {
    console.log(champion);
    this.championService.deleteChampion(champion.id).subscribe(
      data => {
        this.team.champions = this.team.champions.filter(obj => obj !== champion);
      }
    );
  }

}
