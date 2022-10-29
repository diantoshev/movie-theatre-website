export default class UserManager {
  allMovieSpotUsers = JSON.parse(localStorage.getItem("allMovieSpotUsers")) || [
    {
      userName: "Qnko123",
      fullName: "Qnko Qnkov",
    },
  ];

  addUser(user) {
    this.allMovieSpotUsers.push(user);
    localStorage.setItem(
      "allMovieSpotUsers",
      JSON.stringify(this.allMovieSpotUsers)
    );
  }

  logout() {}
}
