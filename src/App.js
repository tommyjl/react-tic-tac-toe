import React, { Component, Fragment } from "react";
import { Title, Status, A } from "./components/Generic";
import TicTacToe from "./components/TicTacToe";

class App extends Component {
  constructor() {
    super();
    this.state = { status: undefined, playAgainstAi: false };
    this.updateStatus = this.updateStatus.bind(this);
    this.toggleAi = this.toggleAi.bind(this);
  }

  updateStatus(message) {
    this.setState({ status: message });
  }

  toggleAi() {
    this.setState(prevState => ({
      playAgainstAi: !prevState.playAgainstAi
    }));
  }

  render() {
    return (
      <Fragment>
        <Title>TicTacToe</Title>
        <Status>{this.state.status}</Status>
        <TicTacToe
          playAgainstAi={this.state.playAgainstAi}
          updateStatus={this.updateStatus}
        />
        <A href="https://github.com/tommyjl/react-tic-tac-toe">Source code</A>
      </Fragment>
    );
  }
}

export default App;
