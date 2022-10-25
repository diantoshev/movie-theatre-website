import Cinema from "./Cinema";
import { THEATRE_DATA } from '../constants/TheatreData';

export default class TheatreManager {
  constructor() {

    this.allTheatres = THEATRE_DATA.map(theatre =>
      new Cinema(
        theatre.id,
        theatre.name,
        theatre.image,
        theatre.address,
        theatre.contacts,
      ));
  }

  getTheatreNames() {
    this.allTheatres.map(theatre => theatre.name);
  }
}