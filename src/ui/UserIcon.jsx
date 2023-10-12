import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AccountMenu from "./AccountMenu";

const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & span {
    font-size: 13px;
    text-align: center;
    font-weight: 600;
  }
`;

export default function UserIcon() {
    const navigate = useNavigate();
    const [isOpen , setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    !user &&  navigate('/login')
    user && setIsOpen(!isOpen);
  }
  return (
    <>
      <User id="usericon" onClick={handleLogout}>
        {user ? <span>{user.name} &gt;</span> : <span>login &gt;</span>}
        <FaRegUserCircle className="icon" />
      </User>
      {isOpen && <AccountMenu setIsOpen={setIsOpen} user={user} />}
    </>
  );
}
