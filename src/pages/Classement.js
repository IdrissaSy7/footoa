import React from "react";
import { NavLink } from "react-router-dom";
import ClassementLigue1 from "../components/ClassementLigue1";
import ClassementPremierLeague from "../components/ClassementPremierLeague";
import ClassementBundesliga from "../components/ClassementBundesliga";
import ClassementLiga from "../components/ClassementLiga";
import ClassementSerieA from "../components/ClassementSerieA";

const Home = () => {
  return (
    <div>
      <h1 className="title">Classement</h1>
      <NavLink to="/Calendrier">
        <p className="title">Vers Calendrier</p>
      </NavLink>
      <div>
        <ClassementLigue1 />
      </div>
      <div>
        <ClassementPremierLeague />
      </div>
      <div>
        <ClassementBundesliga />
      </div>
      <div>
        <ClassementLiga />
      </div>
      <div>
        <ClassementSerieA />
      </div>
    </div>
  );
};

export default Home;
