import React, { Component } from "react";
import styled from "styled-components";
import Grid from "./Grid";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill("")
    };
  }

  render() {
    const { cells } = this.state;
    return <Grid cells={cells} />;
  }
}

export default TicTacToe;
