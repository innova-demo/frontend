import { Pais } from './pais';

export class Equipo {
	id: number;
	name: string;
  country: Pais = null;
  teamrival: Equipo = null;
  shieldfilename: string;
  shieldfile: any;
}    
