import React from "react";

const Score = props => {
  console.log(props);
  const score = props.score;
  const topScore = props.topScore;
  return (
      <div>
        Score: {score}
      </div>
      |
      <div>
        Top Score: {topScore}
      </div>
  );
};

export default Score;
