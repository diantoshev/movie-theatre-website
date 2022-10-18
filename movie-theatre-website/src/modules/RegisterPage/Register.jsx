import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [usernameValueReg, setUsernameReg] = useState("");
  const [passwordValueReg, setPasswordReg] = useState("");
  const [confirmedPasswordValue, setConfirmedPassword] = useState("");
  const [emailValue, setEmail] = useState("");
  const [firstLastNames, setFirstLastNames] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const [successfulRegMessage, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        !usernameValueReg ||
        !passwordValueReg ||
        !confirmedPasswordValue ||
        !emailValue ||
        !firstLastNames ||
        !birthDate
      ) {
        throw new Error("Please, fill in all of the fields!");
      } else {
        try {
          if (passwordValueReg !== confirmedPasswordValue) {
            throw new Error("The password has not been confirmed!");
          } else {
            const currentDate = new Date();
            const birthDateConst = new Date(birthDate);
            const diffYears =
              currentDate.getFullYear() - birthDateConst.getFullYear();
            try {
              if (
                !diffYears ||
                diffYears < 16 ||
                (diffYears === 16 &&
                  currentDate.getDate() < birthDateConst.getDate())
              ) {
                throw new Error(
                  "You should be at least 16 years old in order to register on this site!"
                );
              } else {
                const checkboxTC = document.getElementById(
                  "terms-conditions-checkbox"
                );
                const checkboxPrivacy =
                  document.getElementById("privacy-checkbox");
                const checkboxAge = document.getElementById("age-checkbox");
                try {
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
                    fetch("https://itt-voting-api.herokuapp.com/users", myInit)
                      .then((resp) => {
                        if (!resp.ok) {
                          throw new Error(
                            "There is an existing user with the same username!"
                          );
                        } else {
                          setError("");
                          setSuccess("Successful registration!");
                          navigate("/login");
                        }
                      })
                      .catch((err) => setError(err));
                  } else {
                    throw new Error("Please, check all of the checkboxes!");
                  }
                } catch (err) {
                  setError(err);
                }
              }
            } catch (err) {
              setError(err);
            }
          }
        } catch (err) {
          setError(err);
        }
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <div className="w-25 h-25 d-inline-block">
        <Form onSubmit={handleRegistrationSubmit}>
          <Form.Group className="mb-3" controlId="formRegUsername">
            <Form.Label>Enter your username:</Form.Label>
            <Form.Control
              value={usernameValueReg}
              onChange={(e) => setUsernameReg(e.target.value)}
              type="text"
              placeholder="Username..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRegPassword">
            <Form.Label>Enter your password:</Form.Label>
            {/**Ще зададем ли ограничение за паролите - например да има знак, цифра и буква? */}
            <Form.Control
              value={passwordValueReg}
              onChange={(e) => setPasswordReg(e.target.value)}
              type="password"
              placeholder="Password..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRegConfirmedPassword">
            <Form.Label>Confirm your password:</Form.Label>
            <Form.Control
              value={confirmedPasswordValue}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              type="password"
              placeholder="Confirm password..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRegEmail">
            <Form.Label>Email:</Form.Label>
            {/** Отново да се помисли дали email е необходим, тъй като api на Слави не гледа email */}
            <Form.Control
              value={emailValue}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFirstLastNames">
            <Form.Label>First and Last name:</Form.Label>
            <Form.Control
              value={firstLastNames}
              onChange={(e) => setFirstLastNames(e.target.value)}
              type="text"
              placeholder="Names..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBirthDate">
            <Form.Label>Date of birth:</Form.Label>
            <Form.Control
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              type="date"
              placeholder="Date of birth..."
            />
          </Form.Group>
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
          <Button
            className="btn btn-outline-goldLight rounded-2 px-4"
            type="submit"
          >
            Register
          </Button>
          <Link to="/login">Have an account? Log in &raquo;</Link>
          <p>{error.message}</p>
          <p>{successfulRegMessage}</p>
        </Form>
      </div>
    </>
  );
}
