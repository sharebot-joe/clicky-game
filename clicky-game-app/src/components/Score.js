import React from "react";
import "../styles/Score.css";

const Score = props => {
  console.log(props);
  const score = props.score;
  const topScore = props.topScore;
  return (
      <ul className="score">
        <li>
        Score: {score}
        </li>
        <li>
        |
        </li>
        <li>
        Top Score: {topScore}
        </li>
      </ul>
  );
};

export default Score;
