import UserManager from "./UserManager";

export default class AdminManager extends UserManager {
  constructor() {
    super();
    this.allTheatres = [];
  }

  addMovie() {}
  removeMovie() {}
  addTheater() {}
  removeTheater() {}
  editTheater() {}
  addScreening() {}
  removeScreening() {}
}
