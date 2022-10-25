import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./Register.scss";
import UserManager from "../../models/UserManager";

export default function Register() {
  const [usernameValueReg, setUsernameReg] = useState("");
  const [passwordValueReg, setPasswordReg] = useState("");
  const [confirmedPasswordValue, setConfirmedPassword] = useState("");
  const [firstLastNames, setFirstLastNames] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const userManager = new UserManager();

  const handleClose = () => {
    setShow(false);
    navigate("/home");
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    if (passwordValueReg !== confirmedPasswordValue) {
      setError("The password has not been confirmed!");
    } else {
      const myInit = {
        method: "POST",
        body: JSON.stringify({
          username: `${usernameValueReg}`,
          password: `${passwordValueReg}`,
        }),
        headers: { "Content-Type": "application/json" },
      };
      fetch("https://itt-voting-api.herokuapp.com/users", myInit).then(
        (resp) => {
          if (!resp.ok) {
            setError("There is an existing user with the same username!");
          } else {
            setError("");
            navigate("/login");
          }
        }
      );
    }
  };

  return (
    <>
      <Modal size="md" show={show} onHide={handleClose}>
        <div className="w-100 h-25 d-inline-block fst-italic reg-style">
          <Form onSubmit={handleRegistrationSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>
                <p>{error}</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3 text-style"
                controlId="formRegUsername"
              >
                <Form.Label>Enter your username:</Form.Label>
                <Form.Control
                  value={usernameValueReg}
                  required
                  onChange={(e) => setUsernameReg(e.target.value)}
                  type="text"
                  placeholder="Username..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-style"
                controlId="formRegPassword"
              >
                <Form.Label>Enter your password:</Form.Label>
                {/**Ще зададем ли ограничение за паролите - например да има знак, цифра и буква? */}
                <Form.Control
                  value={passwordValueReg}
                  required
                  onChange={(e) => setPasswordReg(e.target.value)}
                  type="password"
                  placeholder="Password..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-style"
                controlId="formRegConfirmedPassword"
              >
                <Form.Label>Confirm your password:</Form.Label>
                <Form.Control
                  value={confirmedPasswordValue}
                  required
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm password..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-style"
                controlId="formFirstLastNames"
              >
                <Form.Label>First and Last name:</Form.Label>
                <Form.Control
                  value={firstLastNames}
                  required
                  onChange={(e) => setFirstLastNames(e.target.value)}
                  type="text"
                  placeholder="Names..."
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formRegTCCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="Terms &amp; Condition"
                  id="terms-conditions-checkbox"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPrivacyCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="Privacy policy"
                  id="privacy-checkbox"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAgeCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  label="I certify that I am at least 16 years old"
                  id="age-checkbox"
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3 text-style" controlId="btnReg">
                <button
                  className="btn btn-outline-goldLight rounded-2 px-4"
                  type="submit"
                >
                  Register
                </button>
              </Form.Group>
              <Form.Group className="text-style" controlId="linkRegLogin">
                <Link to="/login" className="login-link">
                  Have an account? Log in &raquo;
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
