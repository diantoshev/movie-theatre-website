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
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate("/home");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (usernameValue && passwordValue) {
      const myInit = {
        method: "POST",
        body: JSON.stringify({
          username: `${usernameValue}`, 
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
                localStorage.setItem("moviespotUser", obj.sessionId);
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
      <Modal size="sm" show={show} onHide={handleClose}>
        <div className="h-25 fst-italic login-style">
          <Form onSubmit={handleLoginSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>
                <p>{error}</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3 text-style"
                controlId="formLoginUsername"
              >
                <Form.Label>Enter your username:</Form.Label>
                <Form.Control
                  value={usernameValue}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username..."
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
              <Form.Group className="mb-3 text-style" controlId="btnLogin">
                <button
                  className="btn btn-outline-goldLight rounded-2 px-4"
                  type="submit"
                >
                  Log In
                </button>
              </Form.Group>
              <Form.Group className="text-style" controlId="linkReg">
                <Link to="/register" className="register-link">
                  Do not have an account? Register &raquo;
                </Link>
                <br />
              </Form.Group>
            </Modal.Body>
          </Form>
        </div>
      </Modal>
    </>
  );
}
