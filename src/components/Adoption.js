import React from "react";
import { Button, Jumbotron, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Adoption = () => {
  return (
    <>
      <div className="adoption">
        <Jumbotron className="jumbo">
          <h1 className="heading">Planning to Adopt a Pet?</h1>
          <div className="d-flex justify-content-around mt-4 ">
            <Card style={{ width: "18rem" }} class="card">
              <Card.Body>
                <Card.Title>Checklist for New Adopters</Card.Title>
                <Card.Text>
                  Help make the transition, as smooth as possible.
                </Card.Text>
                <Button className="button">
                  <Link>Learn More</Link>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Resources</Card.Title>
                <Card.Text>
                  Get the latest on adoption processes, learn about local
                  shelters and rescue groups
                </Card.Text>
                <Button className="button">
                  <Link>Learn More</Link>
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Pet Adoption FAQs</Card.Title>
                <Card.Text>
                  Get answers to questions you haven't thought of.
                </Card.Text>
                <Button className="button">
                  <Link>Learn More</Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Jumbotron>
      </div>
    </>
  );
};

export default Adoption;
