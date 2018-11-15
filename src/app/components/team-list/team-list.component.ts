import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team';
import { Country } from '../../models/country';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [MessageService]
})
export class TeamListComponent implements OnInit {
  teamList: Team[];
  teamListCols: any[];
  team: Team;
  display: boolean = false;
  msgs: Message[] = [];

  constructor(private teamService: TeamService, private messageService: MessageService) { }

  ngOnInit() {
  	this.getAllTeams();

    this.teamListCols = [
            { field: 'id', header: 'Id' },
            { field: 'shield', header: 'Shield' },
            { field: 'name', header: 'Name' },
            { field: 'country', header: 'Country' }
            { field: 'teamrival', header: 'Team Rival' }
        ];
  }

  getAllTeams() {
  	this.teamService.getAllTeams().subscribe(
  		data => {
  			this.teamList = data;
        console.log(JSON.stringify(data));
  		}
  	);
  }

  selectedTeam(team: Team) {
    this.team = team;
    this.display = true;
  }

  addTeam() {
    this.team = new Team;
    this.display = true;
  }

  deleteTeam(team: Team) {
    this.teamService.deleteTeam(team.id).subscribe(
      data => {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Team ' + team.id.toString() + ' deleted.'});
        this.teamList = this.teamList.filter(obj => obj !== team);
      }
      );
  }

  onDialogClose(event) {
   this.display = event;
  }

  saveTeamDetail(team: Team) {
    this.msgs = [];
    const _team = this.teamList.find(x => x.id === this.team.id);
    if(_team == null) {
      this.teamList.push(team);
      this.msgs.push({severity:'success', summary:'Success Message', detail:'Team ' + team.id.toString() + ' created'});
    } else {
      this.msgs.push({severity:'success', summary:'Success Message', detail:'Team ' + team.id.toString() + ' updated'});      
    }
    this.team = null;

  }

}
