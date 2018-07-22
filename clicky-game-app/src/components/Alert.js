import React from "react";
import "../styles/Alert.css";

const Alert = props => {
  console.log(props);
  const gameStarted = props.gameStarted;
  const score = props.score;
  if (!gameStarted) {
    return (
      <div className={`alert`} role="alert">
        Click an image to begin!
      </div>
    )
  }
  return (
    <div>
      {(score > 0) ? (
        <div className={`alert alert-correct`} role="alert">"You guessed correctly!"
        </div>
      ) : (
        <div className={`alert alert-incorrect`} role="alert">"You guessed incorrectly!"
        </div>
      )}
    </div>
  );
};

export default Alert;
