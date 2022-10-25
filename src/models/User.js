export default class User {
  constructor(userName, fullName) {
    this.userName = userName;
    this.fullName = fullName;
    this.isAdmin = false;
    this.isLogged = false;
    this.orderHistory = [];
  }
}
