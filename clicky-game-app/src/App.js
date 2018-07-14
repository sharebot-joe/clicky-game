import React from "react";
import List from "./components/List";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";

import memes from "./memes.json";

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Section />
      <List groceries={groceries} />
      <Wrapper>
        <Title>Memes List</Title>
        <FriendCard
          name={memes[0].name}
          image={memes[0].image}
          occupation={memes[0].occupation}
          location={memes[0].location}
        />
        <FriendCard
          name={memes[1].name}
          image={memes[1].image}
          occupation={memes[1].occupation}
          location={memes[1].location}
        />
        <FriendCard
          name={memes[2].name}
          image={memes[2].image}
          occupation={memes[2].occupation}
          location={memes[2].location}
        />
      </Wrapper>
  </div>
);

export default App;
