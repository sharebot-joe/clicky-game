import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import MemeList from "./components/MemeList";
import MemeCard from "./components/MemeCard";
import memes from "./memes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted : false,
      score: 0,
      topScore: 0
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  functionX() {

  }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container>
          <MemeList memes={memes} />
          {/*
          <MemeCard
           name={memes[0].name}
           image={memes[0].image}
           /> */}
        </Container>
      </div>
    );
  }
}

export default App;
