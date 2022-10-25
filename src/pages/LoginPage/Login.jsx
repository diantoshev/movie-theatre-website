import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/ActiveUserSlice";

export default function Login() {
  const user = useSelector((state) => state.activeUser);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate("/home");
  };

  const redirect = () => {
    navigate("/home");
  };

  const handleDispatch = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  if (user.isLogged) {
    redirect();
  }
  return (
    <>
      <Modal size="sm" show={show} onHide={handleClose}>
        <div className="h-25 fst-italic login-style">
          <Form>
            <Modal.Header closeButton>
              <Modal.Title>
                {(username && password && user.userLoading && (
                  <p>Loading...</p>
                )) ||
                  (username && password && user.errorLogin && (
                    <p>Wrong credentials...</p>
                  ))}
                {/**Питам Слави за грешката */}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3 text-style"
                controlId="formLoginUsername"
              >
                <Form.Label>Enter your username:</Form.Label>
                <Form.Control
                  value={username}
                  required
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
                  value={password}
                  required
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
                  onClick={handleDispatch}
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
