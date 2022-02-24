import React from "react";
import classes from "./SignUp.module.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  return (
    <div className={classes.image}>
      <Container>
        <div className={classes.first}>
          <div class="row g-5">
            <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="mb-4">Create your own profile</h1>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>

            <div class="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                <Form>
                  <div className="row g-3">
                    <Form.Group className="col-12 col-sm-6">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="col-12 col-sm-6">
                      <Form.Label>Surname</Form.Label>
                      <Form.Control type="text" placeholder="Enter surname" />
                    </Form.Group>

                    <Form.Group className="col-12 ">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="col-12 ">
                      <Form.Label>Confirm Email </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="col-12 ">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="password" />
                    </Form.Group>

                    <Form.Group className="col-12 ">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="password" />
                    </Form.Group>

                    <Form.Group className="col-12 col-sm-6">
                      <Form.Check
                        type="checkbox"
                        label="I accept the terms of security"
                      />
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
