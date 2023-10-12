import styled from "styled-components";
import { List } from "../menu/Menu";
import { ListItem } from "../menu/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItem";
import { Button } from "../../ui/Button";
import { addOder, clearCart } from "./CartSlice";
import { useNavigate,  useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const BigButton = styled(Button)`
  padding: 17px 24px;
  width: 152px;
  height: auto;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;
const CartTotal = styled.div`
  display: flex;
  padding: 10px 10px;
  border-top: 1px solid rgb(2, 52, 63);
  color: #02343f;
  & span{
    margin-left: 140px;
  }
`;

export default function CartOverview() {
  const [searchParam, setSearchParam] = useSearchParams();
  const data = useSelector((state) => state.cart.cart);
  const numItem = data.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalPrice = data.reduce((acc, cur) => (acc += cur.totalPrice), 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function clear() {
    dispatch(clearCart());
    toast.success("Cart is clear succesfully");
    navigate('/');
  }
  
  function order() {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      searchParam.set("Login", "1");
      setSearchParam(searchParam);
      return "";
    }
    const date = new Date();
    dispatch(
      addOder({
        day: date.getDate(),
        month: date.getMonth(),
      })
    );
    
    toast.success("Order is made succesfully");
    navigate(-1);
  }
  return (
    <>
      <List>
        {data.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </List>
      <CartTotal>
        <h3>
          {numItem} Items <span> ₹{totalPrice}</span>
        </h3>
      </CartTotal>
      <BigButton onClick={order}>ORDER</BigButton>
      <BigButton onClick={clear}>CLEAR CART</BigButton>
    </>
  );
}
