/*
 * Welcome to the login page, here we are using React Bootstrap to make boiler plate login
 * 
 * This login is prepped to package up your user's input and pass it to whatever endpoint you may need to send it to
 * 
 * Checkout the AuthService class handle and/or modify the logic used to log a user in
*/

import React, { ChangeEvent, useState, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import AuthService from "../utils/AuthService";

interface FormState {
  emailOrUsername: string;
  password: string;
}

function Login(): React.ReactElement {
  // State variable to hold our form data
  const [formState, setFormState] = useState<FormState>({ emailOrUsername: "", password: "" });

  const [validated, setValidated] = useState<boolean>(false);

  // Event handler to update our form state
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Choose what to do when the form is submitted!
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget as HTMLFormElement;

    if (!form.checkValidity()) {
      setValidated(false);
    }

    setValidated(true);

    // Handle the rest of the Login functionality here!
    // Change this to whatever your logic may need to be!
    const data: object = {
        emailOrUsername: formState.emailOrUsername,
        password: formState.password
    }

    // Change the type of 'any' after you determine how you are getting your response
    const response: any = await AuthService.handleLogin(data);

    console.log(response);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Welcome Back</h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="text-light"
        >
          <Col className="mb-4">
            <Form.Group as={Col} md="12" className="mb-5">
              <Form.Label>Username or Email</Form.Label>
              <Form.Control
                required
                name="emailOrUsername"
                id="emailOrUsername"
                type="text"
                placeholder="example@email.com"
                autoComplete="example@email.com"
                onChange={handleInputChange}
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please provide a Username or Email.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} className="mb-5" md="12">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                id="password"
                type="password"
                placeholder="password123"
                autoComplete="password"
                onChange={handleInputChange}
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Button type="submit" className="text-center">Login</Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
