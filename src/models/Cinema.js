export default class Cinema {
  constructor(image, address, contacts, workingHours, hallsNumber) {
    this.image = image;
    this.address = address;
    this.contacts = contacts;
    this.workingHours = workingHours;
    this.hallsNumber = hallsNumber;
    this.allMovies = [];
    this.date = [];
  }
}
