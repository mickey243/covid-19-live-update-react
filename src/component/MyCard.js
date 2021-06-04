import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container
} from 'reactstrap';
import './MyCard.css';
import StateDetails from './StateDetails';



const MyCard = ({ confirmed, recovered, deaths, lastUpdate, country }) => {
  return (
    <div>
      <Container className="cardDesign">
        <Card>
          <CardBody>
            <CardTitle tag="h1" className="text-danger">{country}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2  text-primary">{lastUpdate}</CardSubtitle>
            <CardText><h1 className="text-warning">confirmed cases are : {confirmed.value}</h1></CardText>
            <CardText><h1 className="text-success">Recovered cases are : {recovered.value}</h1></CardText>
            <CardText className="text-danger" tag="h1">Death  cases are : {deaths.value}</CardText>
          </CardBody>
        </Card>
      </Container>
      <StateDetails confirmed={confirmed.detail} recovered={recovered.detail} deaths={deaths.detail} country={country} />
    </div>
  )
}

export default MyCard;
