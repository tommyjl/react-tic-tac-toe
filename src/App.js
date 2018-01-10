import React, { Component, Fragment } from "react";
import styled from "styled-components";
import TicTacToe from "./components/TicTacToe";

const Title = styled.h1`
  color: rgb(131, 79, 44);
  font-size: 1.5em;
  line-height: 1;
  margin: 0;
  text-align: center;
`;

const Game = styled.div`
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

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title>TicTacToe</Title>
        <Game>
          <TicTacToe />
        </Game>
        <A href="">Source code</A>
      </Fragment>
    );
  }
}

export default App;
