import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HighlightedButtonStyle = styled(Button)`
  background: white;
`;

export default function(props) {
  return <HighlightedButtonStyle {...props} />;
}
