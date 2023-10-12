import Navbar from "./Navbar";
import ButtomBar from "./ButtomBar";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* grid-template-columns: 1fr; */
  height: 100vh;
  /* width: 100%; */
  background-color: #f0edcc;
`;

const Content = styled.div`
  grid-row: 2;
  overflow-y: scroll;

  & main {
    max-width: 49rem;
    margin: 0px auto;
    border-radius: 16px;
    background-color: #f0edcc;
  }
`;

export default function Layout() {
  return (
    <StyledLayout id="layout">
      <Navbar />
      <Content>
        <main>
          <Outlet />
        </main>
      </Content>
    </StyledLayout>
  );
}
