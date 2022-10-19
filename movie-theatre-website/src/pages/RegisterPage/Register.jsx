import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./Register.scss";

export default function Register() {
  const [usernameValueReg, setUsernameReg] = useState("");
  const [passwordValueReg, setPasswordReg] = useState("");
  const [confirmedPasswordValue, setConfirmedPassword] = useState("");
  const [emailValue, setEmail] = useState("");
  const [firstLastNames, setFirstLastNames] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [show] = useState(true);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (
      !usernameValueReg ||
      !passwordValueReg ||
      !confirmedPasswordValue ||
      !emailValue ||
      !firstLastNames ||
      !birthDate
    ) {
      setError("Please, fill in the required fields!");
    } else {
      if (passwordValueReg !== confirmedPasswordValue) {
        setError("The password has not been confirmed!");
      } else {
        const currentDate = new Date();
        const birthDateConst = new Date(birthDate);
        const diffYears =
          currentDate.getFullYear() - birthDateConst.getFullYear();

        if (
          !diffYears ||
          diffYears < 16 ||
          (diffYears === 16 && currentDate.getDate() < birthDateConst.getDate())
        ) {
          setError(
            "You should be at least 16 years old in order to register on this site!"
          );
        } else {
          const checkboxTC = document.getElementById(
            "terms-conditions-checkbox"
          );
          const checkboxPrivacy = document.getElementById("privacy-checkbox");
          const checkboxAge = document.getElementById("age-checkbox");

          if (
            checkboxTC.checked &&
            checkboxPrivacy.checked &&
            checkboxAge.checked
          ) {
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
          } else {
            setError("Please, check all of the checkboxes!");
          }
        }
      }
    }
  };

  return (
    <>
      <Modal backdrop="static" show={show}>
        <div className="w-100 h-25 d-inline-block fst-italic reg-style">
          <Form onSubmit={handleRegistrationSubmit}>
            <Modal.Header>
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
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm password..."
                />
              </Form.Group>
              <Form.Group className="mb-3 text-style" controlId="formRegEmail">
                <Form.Label>Email:</Form.Label>
                {/** Отново да се помисли дали email е необходим, тъй като api на Слави не гледа email */}
                <Form.Control
                  value={emailValue}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-style"
                controlId="formFirstLastNames"
              >
                <Form.Label>First and Last name:</Form.Label>
                <Form.Control
                  value={firstLastNames}
                  onChange={(e) => setFirstLastNames(e.target.value)}
                  type="text"
                  placeholder="Names..."
                />
              </Form.Group>
              <Form.Group className="mb-3 text-style" controlId="formBirthDate">
                <Form.Label>Date of birth:</Form.Label>
                <Form.Control
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  type="date"
                  placeholder="Date of birth..."
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="formRegTCCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Terms &amp; Condition"
                  id="terms-conditions-checkbox"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPrivacyCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Privacy policy"
                  id="privacy-checkbox"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAgeCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I certify that i am at least 16 years old"
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
              <br />
              <br />
              <Form.Group className="text-style" controlId="linkRegLogin">
                <Link to="/login">Have an account? Log in &raquo;</Link>
              </Form.Group>
              <br />
              <br />
            </Modal.Body>
          </Form>
        </div>
      </Modal>
    </>
  );
}
