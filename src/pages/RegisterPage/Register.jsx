import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./Register.scss";
import UserManager from "../../models/UserManager";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Audio } from "react-loader-spinner";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //at least one lowercase letter, one uppercase letter, one digit, one special character, 8 to 24 characters

export default function Register() {
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
    const match = password === confirmedPassword;
    setValidMatch(match);
  }, [password, confirmedPassword]);

  useEffect(() => {
    setError("");
  }, [username, password, confirmedPassword]);

  const navigate = useNavigate();

  const userManager = new UserManager();

  const handleClose = () => {
    setShow(false);
    navigate("/home");
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    const myInit = {
      method: "POST",
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
      headers: { "Content-Type": "application/json" },
    };
    fetch("https://itt-voting-api.herokuapp.com/users", myInit).then((resp) => {
      if (!resp.ok) {
        setError("There is an existing user with the same username!");
      } else {
        setError("");
        setSuccess(true);
        navigate("/login");
      }
    });
  };

  return (
    <>
      <Modal size="md" show={show} onHide={handleClose}>
        <div className="w-100 h-25 d-inline-block fst-italic reg-style">
          <Form onSubmit={handleRegistrationSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>
                {success ? (
                  <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                ) : (
                  <p ref={errRef}>{error}</p>
                )}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3 text-style"
                controlId="formRegUsername"
              >
                <Form.Label>
                  *Enter your username:
                  <span className={username ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={!username ? "invalid" : "hide"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </Form.Label>
                <Form.Control
                  value={username}
                  required
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-style"
                controlId="formRegPassword"
              >
                <Form.Label>
                  *Enter your password:
                  <span className={validPassword ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={!validPassword ? "invalid" : "hide"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </Form.Label>
                <Form.Control
                  value={password}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password..."
                />
                <p
                  id="pwdnote"
                  className={!validPassword ? "instructions" : "offscreen"}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include: <br />
                  uppercase and lowercase letters,
                  <br />
                  a number and a special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
              </Form.Group>
              <Form.Group
                className="mb-3 text-style"
                controlId="formRegConfirmedPassword"
              >
                <Form.Label>
                  *Confirm your password:
                  <span
                    className={
                      validMatch && confirmedPassword ? "valid" : "hide"
                    }
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={
                      !validMatch || !confirmedPassword ? "invalid" : "hide"
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </Form.Label>
                <Form.Control
                  value={confirmedPassword}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm password..."
                />
                <p
                  id="confirmnote"
                  className={!validMatch ? "instructions" : "offscreen"}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field!
                </p>
              </Form.Group>
              <Form.Group
                className="mb-3 text-style"
                controlId="formFirstLastNames"
              >
                <Form.Label>
                  *Full name:
                  <span className={fullName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={!fullName ? "invalid" : "hide"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </Form.Label>
                <Form.Control
                  value={fullName}
                  required
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  autoComplete="off"
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
