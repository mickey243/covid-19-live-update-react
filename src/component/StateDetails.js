import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Col, Row } from 'reactstrap';
import StateDetailsCard from './StateDetailsCard';


function StateDetails({ confirmed, recovered, deaths, country }) {
  const [statDetails, setStateDetails] = useState([]);
  const fetchRequest = async () => {
    const { data } = await Axios.get(confirmed);

    const allDetails = data.map(e => ({
      provinceState: e.provinceState,
      confirmed: e.confirmed,
      recovered: e.recovered,
      deaths: e.deaths,
      active: e.active
    }));

    setStateDetails(allDetails);

  }
  // console.log(statDetails);


  return (
    <div>
      <h1>State Details</h1>

      <Button type="submit" onClick={fetchRequest} color="danger" disabled={!country} >To get data</Button>
      <Row>
        {statDetails.map((e) => (

          <Col md={3}>
            <StateDetailsCard statDetails={e} />
          </Col>

        ))}
      </Row>
    </div>
  )
}

export default StateDetails;
