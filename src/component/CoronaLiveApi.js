import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Button, Form } from 'reactstrap';
import MyCard from './MyCard';


const CoronaLiveApi = () => {
  const [country, setCountry] = useState("");
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [lastUpdate, setLastUpdate] = useState([]);


  //api which get input data from user
  const baseurl = `https://covid19.mathdro.id/api/countries/${country}`;

  //calling the Axios server to call API 
  const fetchRequest = async () => {
    // const { data } = await Axios.get(`${url}/countries/${country}`);
    const { data } = await Axios.get(baseurl);

    //taking data from data and saving in respective state
    const { confirmed,
      recovered,
      deaths,
      lastUpdate } = data;
    setConfirmed(confirmed);
    setRecovered(recovered);
    setDeaths(deaths);
    setLastUpdate(lastUpdate);
    console.log(data);
    // console.log(confirmed);
    // console.log("hey", lastUpdate);
  }
  const fetchData = (e) => {
    e.preventDefault();
    fetchRequest();
  }
  useEffect(() => {
  }, []);

  return (
    <div>
      <Form onSubmit={fetchData} >
        <input type="text" className="display-6 text-center text-primary" placeholder="" value={country} onChange={(e) => setCountry(e.target.value)} />
        <br />
        <Button className="m-2" color="warning" disabled={!country} variant="contained">Clicks</Button>
      </Form>
      <MyCard confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate} country={country} />

      {/* <h1>Last Update : {lastUpdate}</h1>
      <h1 className="text-warning">confirmed cases are : {confirmed.value}</h1>
      <h1 className="text-success">Recovered cases are : {recovered.value}</h1>
      <h1 className="text-danger">Death  cases are : {deaths.value}</h1> */}

    </div >
  )
}

export default CoronaLiveApi;
