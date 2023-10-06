import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginDiv = styled.div`
  width: 600px;
  height: 340px;
  /* border: solid black; */
  border-radius: 8px;
  padding: 30px 50px;
  /* background-color: #02343f6e; */
  color: #02343f;
  & label {
    font-size: 19px;
    letter-spacing: 3px;
    font-weight: 700;
  }
  & button {
    width: 100%;
    height: 38px;
    border-radius: 8px;
    font-weight: 900;
    letter-spacing: 3px;
    margin-top: 45px;
    background-color: #02343f;
    color: #f0edcc;
  }
`;
const Input = styled.input`
  padding: 10px 15px;
  height: 24px;
  width: 94%;
  border-radius: 8px;
  border: 1px solid #696464;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  function hanleSubmit(e) {
    e.preventDefault();
    const user = { name: name, password: password };
    localStorage.setItem("user", JSON.stringify(user));
    navigate(-1);
  }
  return (
    <StyledDiv>
      <LoginDiv>
        <form onSubmit={hanleSubmit}>
          <label>User Name</label>
          <Input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>Password</label>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </LoginDiv>
    </StyledDiv>
  );
}
