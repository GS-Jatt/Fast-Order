import styled from "styled-components";

export const Button = styled.button`
  height: 35px;
  min-width: 35px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 30px;
  border: 1px solid;

  padding: 9px;
  background-color: var(--main-color);
  color: var(--bg-color);
  font-weight: 900;
  &:hover {
    background-color: #3f3d3abc;
  }
`;
