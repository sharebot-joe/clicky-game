import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import MemeCards from "./components/MemeCards";
import memes from "./memes.json"

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
    if (!clicked) {
      this.setState({ score: 0 })

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
          <MemeCards memes={memes}/>
        </Container>
      </div>
    );
  }
}

export default App;
