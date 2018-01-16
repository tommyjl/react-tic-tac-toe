import styled from "styled-components";

const Cell = styled.div`
  background: ${props => {
    if (props.winner) return "#a9ff87";
    if (props.altColor) return "rgba(207, 156, 122, 0.4)";
    return "rgb(207, 156, 122)";
  }};
  margin: 1px;
  padding: 1em;
  transition: 0.15s transform;
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(0.97);
  }
`;

export default Cell;
