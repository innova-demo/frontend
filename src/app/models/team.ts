import { Country } from './country';
import { Champion } from './champion';

export class Team {
	id: number;
	name: string;
  country: Country = null;
  teamrival: Team = null;
  shieldfilename: string;
  shieldfile: any;
  champions: Champion[] = [];
}    
