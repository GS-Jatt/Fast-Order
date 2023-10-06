import styled from "styled-components";

const Span = styled.span`
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  color: #080707;
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;

  @keyframes animloader {
    0% {
      box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }
    25% {
      box-shadow: 20px 0px, 40px 0px, 60px 10px;
    }
    50% {
      box-shadow: 20px 10px, 40px -10px, 60px 0px;
    }
    75% {
      box-shadow: 20px 0px, 40px 0px, 60px -10px;
    }
    100% {
      box-shadow: 20px -10px, 40px 10px, 60px 0px;
    }
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  inset: 0;
  position: absolute;
  margin-left: -85px;
`;

export default function Loader() {
  return (
    <Div>
      <Span />
    </Div>
  );
}
