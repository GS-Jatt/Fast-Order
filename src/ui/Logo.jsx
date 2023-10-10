import { styled } from "styled-components";

const H3 = styled.h3`
    margin-bottom: 1px;
  & .do {
    margin-left: 18px;
    
  }
`;

export default function Logo() {
  return (
    <div>
      <H3>Fast</H3>
      <H3>
        <span className="do">Food</span>
      </H3>
    </div>
  );
}
