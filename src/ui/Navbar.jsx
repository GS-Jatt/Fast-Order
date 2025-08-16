import Logo from "./Logo";
import styled from "styled-components";
import UserIcon from "./UserIcon";

const Nav = styled.nav`
  /* background-color: #02343f; */
  display: flex;
  align-items: center;
  /* position: fixed; */
  justify-content: space-between;
  /* grid-column: 1/4; */
  grid-row: 1;
  color: var(--main-color);
  height: 55px;
  padding-left: 20px;
  padding-right: 20px;

  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.25);

  z-index: 100;

  & .icon {
    height: 27px;
    width: 35px;
  }
`;

export default function Navbar() {
  return (
    <>
      <Nav>
        <Logo />
        <UserIcon />
      </Nav>
    </>
  );
}
