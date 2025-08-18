import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { signup } from "../services/signup";
import { getUser } from "../services/login";
import { useEffect } from "react";

const StyledDiv = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginDiv = styled.div`
  width: 600px;
  // height: 390px;
  /* border: solid black; */
  border-radius: 8px;
  padding: 30px 50px;
  /* background-color: #02343f6e; */
  /* color: #02343f; */
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
    margin-top: 15px;
    background-color: var(--main-color);
    color: var(--bg-color);
    cursor: pointer;
  }
  & h2 {
    margin-bottom: 30px;
    // text-align: center;
  }
  & span {
    display: block;
    margin-top: -10px;
    margin-bottom: 20px;
    color: red;
  }
`;
const Input = styled.input`
  padding: 20px 15px;
  height: 24px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #696464;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export default function Signup() {
  const [searchParam] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    error && setError(null);
    // const user = { name: name, password: password };
    const { data, error: err } = await signup(email, password, name);
    console.log("data", data);
    data && localStorage.setItem("user", JSON.stringify(data));
    err == null && navigate("/");
    err && setError(err);
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/", { replace: true });
    }
  }, [navigate]);
  return (
    <StyledDiv>
      <LoginDiv>
        {searchParam.get("Login") && <h2>To place your order,Please login</h2>}
        <form onSubmit={handleSubmit}>
          <label>User Name</label>
          <Input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <Input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span>{error}</span>}
          <button type="submit">Create account</button>
        </form>
      </LoginDiv>
      <StyledSignup>
        <span>or</span>
        <h5>
          <Link to={"/login"}> login</Link>
        </h5>
      </StyledSignup>
    </StyledDiv>
  );
}

const StyledSignup = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h5 {
    margin-top: 10px;
    font-size: 16px;
  }
`;
