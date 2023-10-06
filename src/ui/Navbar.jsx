import Logo from "./Logo";
import styled from "styled-components";
import Sidebar from "./ButtomBar";

const Nav = styled.nav`
  /* background-color: #02343f; */
  display: flex;
  align-items: center;
  /* position: fixed; */
  justify-content: space-between;
  /* grid-column: 1/4; */
  grid-row: 1;

  height: 85px;
  padding-left: 20px;
  padding-right: 20px;

  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.25);

  z-index: 100;
`;

export default function Navbar() {
  function handleLogout(){
    localStorage.removeItem('user')
  }
  return (
    <>
      <Nav>
        <Logo />
        <span onClick={handleLogout}>LogOut</span>
      </Nav>
    </>
  );
}
