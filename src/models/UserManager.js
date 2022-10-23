export default class UserManager {
  constructor() {
    this.isLogged = {};
    this.allUsers = JSON.stringify(localStorage.getItem("allUsers")) || [];
  }
  addUser() {}

  rememberUser() {}

  login() {}
  logout() {}
}
