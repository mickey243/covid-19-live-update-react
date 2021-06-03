import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Api1 = () => {
  const [datas, setDatas] = useState({});
  const bsaeUrl = "https://covid-19-tracking.p.rapidapi.com/v1/india";
  const fetchData = async () => {
    const response = await Axios.get(bsaeUrl, {
      headers: {
        'x-rapidapi-key': '774b046672msh09d1915660e0c2bp1d1f8ajsn7ab24765d35e',
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
      }
    });
    setDatas(response.data);
    console.log("url", response.data);
    console.log("state", datas)
  }

  // const fetchData = async () => {
  //   const response = await Axios.get("https://covid-19-tracking.p.rapidapi.com/v1/india", {
  //     headers: {
  //       'x-rapidapi-key': '774b046672msh09d1915660e0c2bp1d1f8ajsn7ab24765d35e',
  //       'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
  //     }
  //   });
  //   console.log(response);
  // }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <h1>Api</h1>
      {
        datas.Country_text
      }

    </div>
  )
}

export default Api1;
