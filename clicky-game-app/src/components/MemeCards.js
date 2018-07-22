import React from "react";
import "../styles/MemeCards.css"

const styles = {
  listStyle: {
    overflow: "auto"
  }
};

function clickHandler(event) {
	console.log("clicked! key = ")
}
function MemeCards(props) {
  const memes = props.memes;
  const cards = memes.map((meme) =>
  	<div 
  	    key={meme.id}
  	    id={meme.id}
        name={meme.name}
        className="card"
        onClick={clickHandler}
        >
  	  <div className="img-container">
  	    <img alt={meme.name} src={meme.image} />
  	  </div>
  	</div>
  );

  return (
    <ul style={styles.listStyle}>
      {cards}
    </ul>
  );
}

export default MemeCards;
