import { v4 as uuid } from 'uuid';
import { getRandomNumber, getRandomSubSetFromArr } from '../util/utilFuncs';

export class Screening {
  constructor(
    hour,
    occupiedSeats = getRandomSubSetFromArr(13, 64),
    hall = getRandomNumber(5),
  ) {
    this.hour = hour;
    this.occupiedSeats = occupiedSeats;
    this.hall = hall;
  }

  id = uuid();
}

