import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Calendrier = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3000/calendrierl1",
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(data[0].competition.name);

  return (
    <div>
      <h1>Calendrier</h1>

      <NavLink to="/Classement">Vers Classement</NavLink>

      <div>
        <h1>{data[0].competition.name}</h1>
      </div>
    </div>
  );
};

export default Calendrier;
