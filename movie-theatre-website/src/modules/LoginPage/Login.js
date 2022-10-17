import React, { useState } from "react";

// function errorHandler(error) {
//   if (error) {
//     return error.message;
//   } else {
//     return;
//   }
// }
export default function Login() {
  const [usernameValue, setUsername] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    try {
      if (usernameValue && passwordValue) {
        const myInit = {
          method: "POST",
          body: JSON.stringify({
            username: `${usernameValue}`, // заявката е само за username, няма email, да се помисли дали user-а да се login само с username или да търсим друг вариант
            password: `${passwordValue}`,
          }),
          headers: { "Content-Type": "application/json" },
        };

        fetch("https://itt-voting-api.herokuapp.com/login", myInit)
          .then((resp) => {
            if (resp.ok) {
              const data = resp.json();
              data.then((obj) => {
                localStorage.setItem("user", obj.sessionId);
              });
            } else {
              throw new Error("Wrong credentials!");
            }
          })
          .catch((err) => setError(err));
      } else {
        throw new Error("Please, fill in all of the required fields!");
      }
    } catch (err) {
      setError(err);
    }
  };
  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="username-email">Enter your username/email:</label>
        <input
          value={usernameValue}
          onChange={(e) => setUsername(e.target.value)}
          id="username-email"
          type="text"
          placeholder="Username or email..."
        />
        <label htmlFor="password-login">Enter your password:</label>
        <input
          value={passwordValue}
          onChange={(e) => setPassword(e.target.value)}
          id="password-login"
          type="password"
          placeholder="Password..."
        />
        <input type="checkbox" id="remember-user" />
        <label htmlFor="remember-user">remember me?</label>
        <button type="submit">Log In</button>
      </form>
      <a href="">Do not have an account? Register &raquo;</a>
      <p>{error.message}</p>
    </>
  );
}
