import React, { useEffect, useState } from "react";
import spinnerSvg from "../../assets/spinner.svg";

import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/leaderboard")
      .then((res) => res.json())
      .then((res) => {
        setLeaderboardData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
        {loading ? (
          <img src={spinnerSvg} alt="spinner" />
        ) : (
          <div className="leaderboard-content">
            <h1 className="leaderboard-title">Leaderboard</h1>
            <div className="leaderboard-body">
              {leaderboardData.map((data, index) => {
                return (
                  <div className="leaderboard-row" key={data._id}>
                    <span className="leaderboard-row-rank">{index + 1}</span>
                    <span className="leaderboard-row-name">{data.name}</span>
                    <span className="leaderboard-row-score">{data.score}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
