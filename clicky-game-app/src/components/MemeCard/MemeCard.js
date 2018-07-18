import React from "react";
import "./MemeCard.css";

const MemeCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MemeCard;
