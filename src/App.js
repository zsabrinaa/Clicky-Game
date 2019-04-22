import React from "react";
import FriendCard from "./components/FriendCard";
import NavBar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends,
    clicked: [],
    score: 0,
    highScore: 0,
  };

  clickGame = id => {
    const justClick = id;
    this.setState({ clicked: justClick })
    var alreadyClicked =
      this.state.clicked.indexOf(justClick) > -1;

    if (alreadyClicked) {
      if (this.state.score > this.state.highScore) {
        this.setState({
          friends: friends.sort(() => Math.random() - 0.5),
          highScore: this.state.score
        });
      }
      this.setState({
        score: 0,
        friends: friends.sort(() => Math.random() - 0.5),
        clicked: []
      });
      alert("GAME OVER TRY AGAIN");
    } else {
      this.setState({
        clicked: this.state.clicked.concat(justClick),
        score: this.state.score + 1,
        friends: friends.sort(() => Math.random() - 0.5),
      });
    }
  }
  render() {
    return (
      <div>
        <NavBar
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Wrapper>
          <h1 className="title">Clicky Game</h1>
          {this.state.friends.map((ele, i) =>
            <FriendCard
              clickGame={this.clickGame}
              key={i}
              id={ele.id}
              name={ele.name}
              image={ele.image}
            />
          )};
      </Wrapper>
      </div>


    );
  }
}

export default App;
