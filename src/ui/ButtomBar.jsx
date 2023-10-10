import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  HiHome,
  HiOutlineBookOpen,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

const Nav = styled.nav`
  grid-row: 3;
  box-shadow: 1px -4px 9px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: #0a0c0c;

  /* background-color: #02343f; */
  & ul {
    display: flex;
  }
`;

const NavItem = styled.li`
  color: #f0edcc;
  gap: 10px;
  text-decoration: none;
  padding: 16px 0;
  list-style: none;
  font-weight: 700;
  text-transform: uppercase;

  & a {
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    color: #f0edcc;
  }
  & span {
    text-transform: none;
    margin-left: 30px;
  }
`;

export default function Sidebar() {
  const pa = useParams();
  console.log(pa);
  const cart = useSelector((state) => state.cart.cart);
  const numItem = cart.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalPrice = cart.reduce((acc, cur) => (acc += cur.totalPrice), 0);

  if (!numItem) return "";
  return createPortal(
    <Nav>
      <ul>
        <NavItem>
          <p>
           
            {numItem} pizzas <span> Rs {totalPrice}</span>
          </p>
        </NavItem>

      </ul>
      <ul>
        <NavItem>
          <NavLink to={"/cart"}>OPEN CART &rarr; </NavLink>
        </NavItem>
      </ul>
    </Nav>,
    document.getElementById("layout")
  );
}
