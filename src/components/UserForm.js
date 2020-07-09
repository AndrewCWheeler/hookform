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
                 
              <Form.Control
                size="lg"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
                 
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name: </Form.Label>   
              <Form.Control
                size="lg"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
                        
            <Form.Group>
              <Form.Label>Email Address: </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
                        
            <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password: </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
                        
            <Button
              className="mb-5"
              variant="primary"
              size="lg"
              block
              type="submit"
            >
              Create User
            </Button>
                    
          </Form>
          <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default UserForm;
