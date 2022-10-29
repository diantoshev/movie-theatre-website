import Theatre from "./Theatre";
import { THEATRE_DATA } from '../constants/TheatreData';

class TheatreManager {
  constructor() {

    this.allTheatres = THEATRE_DATA.map(theatre =>
      new Theatre(
        theatre.id,
        theatre.name,
        theatre.image,
        theatre.address,
        theatre.contacts,
      ));
  }

  getTheatreNames() {
    return this.allTheatres.map(theatre => theatre.name);
  }

  getTheatreIds(arr) {
    return arr.map(theatre => theatre.id);
  }

}

export const theatreManager = new TheatreManager();