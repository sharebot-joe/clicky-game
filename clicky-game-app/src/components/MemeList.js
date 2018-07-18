import React from "react";
import MemeCard from "./MemeCard";
import memes from "../memes.json";

const styles = {
  listStyle: {
    overflow: "auto"
  }
};

function MemeList(props) {
  const memes = props.memes;
  const memeItems = memes.map((meme) =>
    <MemeCard key={meme.id}
              name={meme.name} 
              image={meme.image} />
  );
  return (
    <ul style={styles.listStyle}>
      {memeItems}
    </ul>
  );
}

export default MemeList;
