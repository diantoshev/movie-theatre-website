export default class Cinema {
  constructor(id, name, image, address, contacts, workHours = '11:00 - 23:00', hallsNumber = '5') {
    this.name = name;
    this.image = image;
    this.id = id;
    this.address = address;
    this.contacts = contacts;
    this.workHours = workHours;
    this.hallsNumber = hallsNumber;
    this.allMovies = [];
    this.date = [];
  }
}
