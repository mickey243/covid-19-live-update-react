import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function StateDetailsCard({ statDetails }) {
  return (

    <Card body className="mt-2 mb-1" style={{ backgroundColor: "#E5D68A" }}>
      <CardTitle tag="h5" className="text-capitalize text-primary">State Name : {statDetails.provinceState}</CardTitle>
      <CardText className="text-dark">Confirmed Case :{statDetails.confirmed}</CardText>
      <CardText className="text-secondary">Received Case :{statDetails.recovered}</CardText>
      <CardText className="text-danger">Deaths Case :{statDetails.deaths}</CardText>
      <CardText className="text-success">Active Case :{statDetails.active}</CardText>
    </Card>

  )
}

export default StateDetailsCard;


// provinceState: e.provinceState,
// confirmed: e.confirmed,
// recovered: e.recovered,
// deaths: e.deaths,
// active: e.active