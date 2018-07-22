import React from "react";
import "../styles/Container.css";

const styles = {
  containerStyle: {
    clear: "both",
    margin: "5rem auto"
  }
};

const Container = props => <main style={styles.containerStyle} className="container">{props.children}</main>;

export default Container;
