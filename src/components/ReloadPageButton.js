import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background: rgb(131, 79, 44);
  box-shadow: 0 2px 8px black;
  cursor: pointer;
  padding: 0.5em;
`;

const ReloadPageButton = ({ text }) => (
  <Button onClick={() => window.location.reload()}>{text}</Button>
);

export default ReloadPageButton;
