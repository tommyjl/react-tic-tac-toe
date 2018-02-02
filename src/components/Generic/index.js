import styled from "styled-components";

export const Title = styled.h1`
  color: rgb(131, 79, 44);
  font-size: 1.5em;
  line-height: 1;
  margin: 0;
  text-align: center;
`;

export const Status = styled.h2`
  color: rgb(131, 79, 44);
  margin: 0;
  font-size: 1.25em;
  line-height: 1.2;
  font-weight: normal;
`;

export const A = styled.a`
  color: rgb(131, 79, 44);
  display: block;
  font-size: 1em;
  line-height: 1.5;
  margin-top: 1em;
  text-align: center;
  transition: 0.2s color;

  &:hover {
    color: #444;
  }
`;
