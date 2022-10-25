export default class Cinema {
  constructor(image, address, contacts, workingHours = '11:00 - 23:00', hallsNumber = 5, id, name) {
    this.name = name;
    this.image = image;
    this.id = id;
    this.address = address;
    this.contacts = contacts;
    this.workingHours = workingHours;
    this.hallsNumber = hallsNumber;
    this.allMovies = [];
    this.date = [];
  }
}
