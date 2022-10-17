import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.scss";

export default function Login() {
  const [usernameValue, setUsername] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successfulLoginMessage, setSuccess] = useState("");

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
              setError("");
              setPassword("");
              setUsername("");
              setSuccess("You have been logged in successfully!");
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
      <div className="w-25 p-3 h-25 d-inline-block">
        <img
          className="navLoginLogo"
          src={require("../../assets/logo2_black_small.png")}
          alt="Site logo"
        />
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="formLoginUsername">
            <Form.Label>Enter your username/email:</Form.Label>
            <Form.Control
              value={usernameValue}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username or email..."
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Enter your password:</Form.Label>
            <Form.Control
              value={passwordValue}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password..."
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formLoginCheckbox">
            <Form.Check type="checkbox" label="remember me?" />
          </Form.Group>
          <br />
          <Button
            className="btn btn-outline-goldLight rounded-2 px-4"
            type="submit"
          >
            Log In
          </Button>
        </Form>
        <br />
        <Link to="/register">Do not have an account? Register &raquo;</Link>
        <br />
        <p>{error.message}</p>
        <p>{successfulLoginMessage}</p>
      </div>
    </>
  );
}
