import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import classes from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={classes.image}>
      <Container>
        <div className={classes.first}>
          <div class="row g-5">
            <div class="col-lg-5 "></div>
            <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div class="bg-light rounded h-100  align-items-center p-5">
                <h1>Login to your account</h1>
                <Form>
                  <div className="row g-3">
                    <Form.Group className="col-12 ">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="col-12 ">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                  </div>

                  <div className="col-12">
                    <Button
                      className={classes.button}
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <div className={classes.button}>
                      Does not have an account? <a href="#">sign up</a>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
