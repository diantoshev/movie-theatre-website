import React, { useState } from "react";

export default function Register() {
  const [usernameValueReg, setUsernameReg] = useState("");
  const [passwordValueReg, setPasswordReg] = useState("");
  const [confirmedPasswordValue, setConfirmedPassword] = useState("");
  const [emailValue, setEmail] = useState("");
  const [firstLastNames, setFirstLastNames] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const [successfulRegMessage, setSuccess] = useState("");

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
      <form onSubmit={handleRegistrationSubmit}>
        <label htmlFor="username">Enter your username:</label>
        <input
          value={usernameValueReg}
          onChange={(e) => setUsernameReg(e.target.value)}
          id="username"
          type="text"
          placeholder="Username..."
        />
        <label htmlFor="password">Enter your password:</label>{" "}
        {/**Ще зададем ли ограничение за паролите - например да има знак, цифра и буква? */}
        <input
          value={passwordValueReg}
          onChange={(e) => setPasswordReg(e.target.value)}
          id="password"
          type="password"
          placeholder="Password..."
        />
        <label htmlFor="confirmed-password">Confirm your password:</label>
        <input
          value={confirmedPasswordValue}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          id="confirmed-password"
          type="password"
          placeholder="Confirm password..."
        />
        <label htmlFor="email">Email:</label>{" "}
        {/** Отново да се помисли дали email е необходим, тъй като api на Слави не гледа email */}
        <input
          value={emailValue}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Email..."
        />
        <label htmlFor="first-last-names">First and Last name:</label>
        <input
          value={firstLastNames}
          onChange={(e) => setFirstLastNames(e.target.value)}
          id="first-last-names"
          type="text"
          placeholder="Names..."
        />
        <label htmlFor="birth-date">Date of birth:</label>
        <input
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          id="birth-date"
          type="date"
          placeholder="Date of birth..."
        />
        <input type="checkbox" id="terms-conditions-checkbox" />
        <label htmlFor="terms-conditions-checkbox">
          Terms &amp; Conditions
        </label>
        <input type="checkbox" id="privacy-checkbox" />
        <label htmlFor="privacy-checkbox">Privacy policy</label>
        <input type="checkbox" id="age-checkbox" />
        <label htmlFor="age-checkbox">
          I certify that i am at least 16 years old
        </label>
        <button type="submit">Register</button>
      </form>
      <a href="">Have an account? Log in &raquo;</a>
      <p>{error.message}</p>
      <p>{successfulRegMessage}</p>
    </>
  );
}
