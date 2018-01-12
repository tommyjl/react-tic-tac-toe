import React, { Component, Fragment } from "react";
import styled from "styled-components";
import TicTacToe from "./components/TicTacToe";
import ReloadPageButton from "./components/ReloadPageButton";

const Title = styled.h1`
  color: rgb(131, 79, 44);
  font-size: 1.5em;
  line-height: 1;
  margin: 0;
  text-align: center;
`;

const GameWrapper = styled.div`
  height: 80vw;
  overflow: auto;
  width: 80vw;

  @media (min-width: 900px) {
    height: 700px;
    width: 700px;
  }
`;

const A = styled.a`
  color: rgb(131, 79, 44);
  display: block;
  font-size: 1em;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  transition: 0.2s color;

  &:hover {
    color: #444;
  }
`;

const Status = styled.div``;

class App extends Component {
  constructor() {
    super();
    this.state = { status: undefined };
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(message) {
    this.setState({ status: message });
  }

  render() {
    return (
      <Fragment>
        <Title>TicTacToe</Title>
        <Status>{this.state.status}</Status>
        <GameWrapper>
          <TicTacToe updateStatus={this.updateStatus} />
        </GameWrapper>
        <ReloadPageButton text="Clear board" />
        <A href="">Source code</A>
      </Fragment>
    );
  }
}

export default App;
