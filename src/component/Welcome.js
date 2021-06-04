import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';


function Welcome(props) {
  return (
    <div>
      <Container className="">
        <Jumbotron fluid >
          <h1 className="display-1 text-danger">Welcome</h1>
          <p className="lead text-warning">COVID-19 Update</p>
        </Jumbotron>
      </Container>


    </div>
  )
}

export default Welcome;
