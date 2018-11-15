import { Country } from './country';

export class Team {
	id: number;
	name: string;
  country: Country = null;
  teamrival: Team = null;
  shieldfilename: string;
  shieldfile: any;
}    
