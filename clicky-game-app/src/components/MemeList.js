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
  const onClick = props.onClick;
  const memeItems = memes.map((meme) =>
    <MemeCard data-id={meme.id}
              name={meme.name}
              image={meme.image}
              onClick={onClick}
              className={(props.clicked == true) ? "clicked" : "unclicked"}
               />
              }
  );

  return (
    <ul style={styles.listStyle}>
      {memeItems}
    </ul>
  );
}

export default MemeList;
