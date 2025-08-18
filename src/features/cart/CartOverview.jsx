import styled, { css } from "styled-components";
import { List } from "../menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItem";
import { Button } from "../../ui/Button";
import { Empty } from "../../ui/Empty";

import { addOder, clearCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BigButton = styled(Button)`
  padding: 17px 20px;
  width: 143px;
  height: auto;
  margin-right: 3%;
  margin-left: 10px;
  margin-top: 10px;
  ${(props) =>
    props.gost
      ? css`
          background-color: transparent;
          color: var(--main-color);
        `
      : ""}
`;
const CartTotal = styled.div`
  display: flex;
  padding: 10px 10px;
  border-top: 1px solid rgb(2, 52, 63);
  color: #02343f;
  & span {
    margin-left: 140px;
  }
`;

export default function CartOverview() {
  const data = useSelector((state) => state.cart.cart);
  const numItem = data.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalPrice = data.reduce((acc, cur) => (acc += cur.totalPrice), 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function clear() {
    dispatch(clearCart());
    toast.success("Cart is clear successfully");
    navigate("/");
  }

  function order() {
    if (!localStorage.getItem("user")) {
      navigate("/login?Login=1");
      // searchParam.set("Login", "1");
      // setSearchParam(searchParam);
      return "";
    }
    const date = new Date();
    dispatch(
      addOder({
        day: date.getDate(),
        month: date.getMonth(),
      }),
    );

    toast.success("Order is made successfully");
    navigate("/");
  }

  if (!numItem)
    return <Empty> Your cart is still empty. Start adding some pizzas </Empty>;

  return (
    <>
      <List>
        {data.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </List>
      <CartTotal>
        <h3>
          {numItem} {numItem === 1 ? "Item" : "Items"}{" "}
          <span> ₹{totalPrice}</span>
        </h3>
      </CartTotal>
      <BigButton onClick={order}>ORDER</BigButton>
      <BigButton gost={true} onClick={clear}>
        CLEAR CART
      </BigButton>
    </>
  );
}
