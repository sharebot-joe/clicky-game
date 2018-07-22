import React from "react";
import memes from "../memes.json";

const styles = {
  listStyle: {
    overflow: "auto"
  }
};

function clickHandler(event) {
	console.log("clicked!")
}
function MemeCards(props) {
  const memes = props.memes;
  const cards = memes.map((meme) =>
  	<div 
  			key={meme.id}
        name={meme.name}
        image={meme.image}
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
