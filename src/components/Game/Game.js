import React, { useState } from "react";

const Game = () => {
  const [name, setName] = useState(null);
  const [score, setScore] = useState(null);

  const submitHandler = (event) => {
    fetch("http://localhost:4000/leaderboard", {
      method: "POST",
      body: JSON.stringify({
        name,
        score: Number(score),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="name"
      />
      <input
        value={score}
        onChange={(event) => setScore(event.target.value)}
        placeholder="score"
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default Game;
