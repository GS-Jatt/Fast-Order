import { useEffect, useRef } from "react";
import { RiFileList3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: fixed;
  right: 25px;
  top: 60px;
  width: 150px;
  padding: 15px 25px;
  border-radius: 8px;
  padding-right: 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  background-color: var(--bg-color);
  /* color: #02343f; */
`;
const MenuItem = styled(Link)`
  text-decoration: none;
  padding: 7px 0;
  cursor: pointer;
  color: #02343f;
  font-weight: 600;
`;

const Logout = styled.div`
  margin-top: 15px;
  padding: 15px 0;
  cursor: pointer;

  margin-right: 20px;
  border-top: 1px solid #02343f73;

  & h4 {
    font-size: 14px;
  }
`;
export default function AccountMenu({ setIsOpen, user }) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        e.target !== ref.current &&
        e.target.closest("#usericon") !== document.getElementById("usericon")
      ) {
        setIsOpen((isopen) => !isopen);
      }
    }
    document
      .querySelector("body")
      .addEventListener("click", handleClickOutside);
    return () => {
      document
        .querySelector("body")
        .removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  function handleSingout() {
    console.log("sad");
    localStorage.removeItem("user");
    setIsOpen((isopen) => !isopen);
  }
  return (
    <Menu ref={ref}>
      <MenuItem to={"/cart"}>
        <LuShoppingCart /> Cart{" "}
      </MenuItem>
      <MenuItem to={"/orders"}>
        <RiFileList3Line /> Oders{" "}
      </MenuItem>
      <Logout onClick={handleSingout}>
        <h4>Sign out</h4>
      </Logout>
    </Menu>
  );
}
