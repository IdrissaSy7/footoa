import React, { useEffect, useState } from "react";
import axios from "axios";

const ClassementPremierLeague = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3000/classementPL",
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

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3000/images",
    };

    axios
      .request(options)
      .then(function (response) {
        setImages(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="title">Classement Premier League</h1>

      <div className="standings">
        <div className="standings-title">
          <p>Position</p>
          <p>Nom</p>
          <p>Matchs joués</p>
          <p>Matchs gagnés</p>
          <p>Matchs nuls</p>
          <p>Matchs perdus</p>
          <p>Buts marqués</p>
          <p>Buts encaissés</p>
          <p>Différence de buts</p>
          <p>Points</p>
        </div>

        {data[0]?.standings[0]?.table.map((tableItem, tableIndex) => (
          <div key={tableIndex} id={tableIndex} className="team-line">
            <p className="team-position">{tableIndex + 1}</p>
            <p className="team-line-img-name">
              {images.clubImages.map((clubImg, clubImgIndex) => {
                // Vérifier si le nom du club correspond
                if (clubImg.name === tableItem.team.shortName) {
                  // Retourner l'image correspondante
                  return (
                    <img key={clubImgIndex} src={clubImg.img} alt="Team logo" />
                  );
                }
                return null;
              })}
              {!images.clubImages.some(
                (clubImg) => clubImg.name === tableItem.team.shortName
              ) && <img src={tableItem.team.crest} alt="Team logo" />}
              {tableItem.team.shortName}
            </p>
            <p className="team-line-played-games">{tableItem.playedGames}</p>
            <p className="team-line-won">{tableItem.won} </p>
            <p className="team-line-draw">{tableItem.draw} </p>
            <p className="team-line-lost">{tableItem.lost} </p>
            <p className="team-line-goals-f">{tableItem.goalsFor}</p>
            <p className="team-line-goals-a">{tableItem.goalsAgainst}</p>
            <p className="team-line-goal-diff">{tableItem.goalDifference}</p>
            <p className="team-line-pts">{tableItem.points}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassementPremierLeague;
