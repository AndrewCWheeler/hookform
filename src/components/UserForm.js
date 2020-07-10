import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length == 1 && e.target.value.length < 2) {
      setFirstNameError("First Name must be at least two characters.");
    } else if (e.target.value.length >= 3 || e.target.value.length == 0) {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length == 1 && e.target.value.length < 2) {
      setLastNameError("Last Name must be at least two characters.");
    } else if (e.target.value.length >= 3 || e.target.value.length == 0) {
      setLastNameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length == 1 && e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters.");
    } else if (e.target.value.length >= 5 || e.target.value.length == 0) {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 1 && e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else if (e.target.value.length >= 8 || e.target.value.length == 0) {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length >= 8 && e.target.value != password) {
      setConfirmError("Passwords do not match.");
    } else if (e.target.value == password || e.target.value.length == 0) {
      setConfirmError("");
    }
  };

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col className="justify-content-center">
          <Form onSubmit={createUser}>
                 
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name:</Form.Label>
                 
              <Form.Control size="lg" type="text" onChange={handleFirstName} />
              {firstNameError ? (
                <p style={{ color: "red" }}>{firstNameError}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name: </Form.Label>   
              <Form.Control size="lg" type="text" onChange={handleLastName} />
              {lastNameError ? (
                <p style={{ color: "red" }}>{lastNameError}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address: </Form.Label>
              <Form.Control size="lg" type="text" onChange={handleEmail} />
              {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control
                size="lg"
                type="password"
                onChange={handlePassword}
              />
            </Form.Group>
            {passwordError ? (
              <p style={{ color: "red" }}>{passwordError}</p>
            ) : (
              ""
            )}
            <Form.Group>
              <Form.Label>Confirm Password: </Form.Label>
              <Form.Control
                size="lg"
                type="password"
                onChange={handleConfirmPassword}
              />
              {confirmError ? (
                <p style={{ color: "red" }}>{confirmError}</p>
              ) : (
                ""
              )}
            </Form.Group>
            <Button
              className="my-4"
              variant="primary"
              size="lg"
              block
              type="submit"
            >
              Create User
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default UserForm;
