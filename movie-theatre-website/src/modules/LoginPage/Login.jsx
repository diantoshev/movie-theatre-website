import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

export default function Login() {
  const [usernameValue, setUsername] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [show] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (usernameValue && passwordValue) {
      const myInit = {
        method: "POST",
        body: JSON.stringify({
          username: `${usernameValue}`, // заявката е само за username, няма email, да се помисли дали user-а да се login само с username или да търсим друг вариант
          password: `${passwordValue}`,
        }),
        headers: { "Content-Type": "application/json" },
      };

      fetch("https://itt-voting-api.herokuapp.com/login", myInit).then(
        (resp) => {
          if (resp.ok) {
            const data = resp.json();
            const checkboxRemember = document.getElementById("loginCheckbox");
            if (checkboxRemember.checked) {
              data.then((obj) => {
                localStorage.setItem("user", obj.sessionId);
              });
            }
            setError("");
            setPassword("");
            setUsername("");
            navigate("/home");
          } else {
            setError("Wrong credentials!");
          }
        }
      );
    } else {
      setError("Please, fill in all of the required fields!");
    }
  };
  return (
    <>
      <Modal backdrop="static" show={show}>
        <div className="w-100 h-25 d-inline-block fst-italic login-style">
          <Form onSubmit={handleLoginSubmit}>
            <Modal.Header>
              <Modal.Title>
                <p>{error}</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3 text-style"
                controlId="formLoginUsername"
              >
                <Form.Label>Enter your username/email:</Form.Label>
                <Form.Control
                  value={usernameValue}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username or email..."
                />
              </Form.Group>
              <br />
              <Form.Group
                className="mb-3 text-style"
                controlId="formLoginPassword"
              >
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
                <Form.Check
                  type="checkbox"
                  label="remember me"
                  id="loginCheckbox"
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3 text-style" controlId="btnLogin">
                <button
                  className="btn btn-outline-goldLight rounded-2 px-4"
                  type="submit"
                >
                  Log In
                </button>
              </Form.Group>
              <br />
              <br />
              <Form.Group className="text-style" controlId="linkReg">
                <Link to="/register">
                  Do not have an account? Register &raquo;
                </Link>
              </Form.Group>
              <br />
            </Modal.Body>
          </Form>
        </div>
      </Modal>
    </>
  );
}
