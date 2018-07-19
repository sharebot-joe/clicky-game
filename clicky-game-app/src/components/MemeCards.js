import React from "react";
import MemeCard from "./MemeCard";
import memes from "../memes.json";

const styles = {
  listStyle: {
    overflow: "auto"
  }
};

function MemeCards(props) {
  const memes = props.memes;
  const cards = memes.map((meme) =>
    <MemeCard key={meme.id}
              name={meme.name}
              image={meme.image}
               />
  );

  return (
    <ul style={styles.listStyle}>
      {cards}
    </ul>
  );
}

export default MemeCards;
