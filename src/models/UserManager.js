export default class UserManager {
  isLoggedMovieSpotUser =
    JSON.parse(localStorage.getItem("isLoggedMovieSpotUser")) || null;
  isAdminUser = false;
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
  ];

  addUser(user) {
    this.allMovieSpotUsers.push(user);
  }

  rememberUser() {}

  loginAdmin(username) {
    this.isAdminUser = this.allMovieSpotUsers.some(
      (user) => user.username === username && user.isAdmin
    );
  }

  login(userName) {
    this.isLoggedMovieSpotUser = this.allMovieSpotUsers.find(
      (user) => user.username === userName
    );
    this.isLoggedMovieSpotUser.isLogged = true;
  }
  logout() {}
}
