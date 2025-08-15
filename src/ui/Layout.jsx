import Navbar from "./Navbar";
import ButtomBar from "./ButtomBar";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../services/login";
import { getCart } from "../services/cart";
import { setCart, setOrder } from "../features/cart/CartSlice";
import { getOrder } from "../services/order";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* grid-template-columns: 1fr; */
  height: 100vh;

  /* width: 100%; */
  background-color: var(--bg-color);
`;

const Content = styled.div`
  grid-row: 2;
  overflow-y: scroll;

  & main {
    max-width: 49rem;
    margin: 0px auto;
    margin-bottom: 50px;
    border-radius: 16px;
    /* background-color: #f0edcc; */
  }
`;

export default function Layout() {
  const dispach = useDispatch();

  useEffect(() => {
    function setcart(data) {
      dispach(setCart(data));
    }
    function setorder(data) {
      data && data.length > 0 && dispach(setOrder(data));
    }

    const user = getUser();
    if (user) {
      getCart(setcart);
      getOrder(setorder);
    }
  }, [dispach]);

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
