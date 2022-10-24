export default class UserManager {
  constructor() {
    this.isLogged = {};
    this.allMovieSpotUsers =
      JSON.parse(localStorage.getItem("allMovieSpotUsers")) || []; //трябват ли ни? нали всичко е от api на Слави?
  }
  addUser(user) {
    //трябват ли ни? нали всичко е от api на Слави?
    this.allMovieSpotUsers.push(user);
  }

  rememberUser() {}

  login() {}
  logout() {}
}
