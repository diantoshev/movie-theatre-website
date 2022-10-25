export default class UserManager {
  isLoggedMovieSpotUser =
    JSON.parse(localStorage.getItem("isLoggedMovieSpotUser")) || null;
  allMovieSpotUsers = JSON.parse(localStorage.getItem("allMovieSpotUsers")) || [
    {
      username: "Qnko123",
      fullName: "Qnko Qnkov",
      isAdmin: true,
      isLogged: false,
      sessionId: "",
      userLoading: false,
      errorLogin: false,
    },
    {
      username: "JohnnyB",
      fullName: "Johnny B",
      isAdmin: false,
      isLogged: false,
      sessionId: "",
      userLoading: false,
      errorLogin: false,
    },
  ];

  addUser(user) {
    this.allMovieSpotUsers.push(user);
  }

  rememberUser() {}

  login(userName) {
    this.isLoggedMovieSpotUser = this.allMovieSpotUsers.find(
      (user) => user.username === userName
    );
    this.isLoggedMovieSpotUser.isLogged = true;
  }
  logout() {}
}
