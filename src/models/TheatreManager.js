import Cinema from "./Cinema";
import { THEATRE_DATA } from '../constants/TheatreData';
import moment from "moment/moment";

class TheatreManager {
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

  getTheatreNames(arr) {
    return arr.map(theatre => theatre.name);
  }

  nextSevenDays() {
    const programDates = []
    const dateStart = moment();
    const dateEnd = moment().add(7, 'days');
    while (dateEnd.diff(dateStart, 'days') >= 0) {
      programDates.push(dateStart.format('DD/MM (ddd)'))
      dateStart.add(1, 'days')
    }
    return programDates;
  }
}

export const theatreManager = new TheatreManager();