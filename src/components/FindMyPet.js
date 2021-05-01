import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "../App.css";
import image from "./image1.jpg";
import image2 from "./pet2.jpg";
import image3 from "./image3.jpg";

const FindMyPet=()=> {
    return (
        <>
            <div className="text-center  mt-5 heading" style={{fontSize:"40px",color:"#36363",fontFamily:"'Source Sans Pro', sans-serif",fontWeight:"bold"}}> Finding a lost Pet?</div>
            <h3 className="text-center pt-5">Look at our lost and found  list</h3>
            <div className="container mt-5">
            <ReactBootStrap.CardDeck>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={image} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Kutta</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
   Libra dog very handsome and cute.
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={image2} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Kutte ka Kutta</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
       A man masquerading as a dog.
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={image3} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Kutte ke Kutte ka Kutta</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      A dog very good boy.
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
</ReactBootStrap.CardDeck>

</div>        </>
    )
}

export default FindMyPet;
