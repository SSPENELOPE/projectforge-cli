/*
* Welcome to the signup page! Lots of websites use some form of a signup page, here you have the basic neccessities of a signup page
* You have full control over customization of this page
* 
* The form is ready to be validated and ensure matching passwords, it is encouraged that you add a regex to the passwords to enforce modern password strength requirements
*
*/

/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../assets/css/signup.css";
import AuthService from "../utils/AuthService";

function Signup() {
  // State variable to hold our form data
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

  const [validated, setValidated] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Event handler to update our form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));

    // Reset password match state on input change
    if (name === "password1" || name === "password2") {
      setPasswordsMatch(true);
    }
  };

  // Choose what to do when the form is submitted!
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const data = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      username: formState.username,
      password1: formState.password1,
      password2: formState.password2
    }

    const form = event.currentTarget;
    const doPasswordsMatch = formState.password1 === formState.password2;

    if (!form.checkValidity() || !doPasswordsMatch) {
      if (!doPasswordsMatch) {
        setPasswordsMatch(false);
      }
      setValidated(false);
    } else {
      setValidated(true);

      // Submit form or perform desired action here
      // Check out the AuthService class to update and/or modify to your desired logic
      const response = AuthService.handleSignup(data);

      console.log(response);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-light">
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                name="firstName"
                id="firstName"
                type="text"
                placeholder="First name"
                autoComplete="first-name"
                onChange={handleInputChange}
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please provide your first name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Last name"
                autoComplete="last-name"
                onChange={handleInputChange}
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please provide your last name.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  aria-describedby="inputGroupPrepend"
                  autoComplete="email"
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  name="username"
                  id="username"
                  placeholder="John123"
                  aria-describedby="inputGroupPrepend"
                  autoComplete="username"
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12 mb-4">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  name="password1"
                  id="password1"
                  placeholder="******"
                  aria-describedby="inputGroupPrepend"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="12 mb-2">
              <Form.Label>Verify Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="******"
                  aria-describedby="inputGroupPrepend"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Passwords must match.
                </Form.Control.Feedback>
              </InputGroup>
              {!passwordsMatch && (
                <div className="invalid-feedback d-block mt-2">
                  Passwords do not match!
                </div>
              )}
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              className="text-dark"
            />
            <a href="#" target="_blank" rel="noreferrer">
              View Terms and conditions
            </a>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;


// Add the following back in if you want to have address information

{
  /* <Row className="mb-3">
  <Form.Group as={Col} md="6" controlId="validationCustom03">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="City" required />
    <Form.Control.Feedback type="invalid">
      Please provide a valid city.
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="3" controlId="validationCustom04">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="State" required />
    <Form.Control.Feedback type="invalid">
      Please provide a valid state.
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} md="3" controlId="validationCustom05">
    <Form.Label>Zip</Form.Label>
    <Form.Control type="text" placeholder="Zip" required />
    <Form.Control.Feedback type="invalid">
      Please provide a valid zip.
    </Form.Control.Feedback>
  </Form.Group>
</Row>; */
}
