export default class User {
  constructor(userName, password, fullName) {
    this.userName = userName;
    this.password = password;
    this.fullName = fullName;
    this.isAdmin = false;
    this.orderHistory = [];
  }
}
