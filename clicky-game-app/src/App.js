import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import MemeCards from "./components/MemeCards";
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

  onCardClick (event) {
    const clicked = event.currentTarget.className;
    const newScore = this.state.score++
    const className=this.state.selectedItem == 1 ? "on" : "off"
    if (!clicked) {
      this.setState({ score: newScore })

    }
    this.setState({ selectedItem: event.currentTarget.dataset.id });
    console.log("clicked!")
    //where 'id' =  whatever suffix you give the data-* li attribute
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container>
          <MemeCards memes={memes} 
              onClick={this.onCardClick}
              clicked={this.className} 
              />
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
