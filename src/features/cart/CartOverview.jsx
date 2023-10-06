import styled from "styled-components";
import { List } from "../menu/Menu";
import { ListItem } from "../menu/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItem";
import { Button } from "../../ui/Button";
import { clearCart } from "./CartSlice";
import { useNavigate, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";

const BigButton = styled(Button)`
  padding: 17px 24px;
  width: 152px;
  height: auto;
  margin-right: 30px;
  margin-left: 10px;
  margin-top: 10px;
`;

export default function CartOverview() {
  const data = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function clear(){
    dispatch(clearCart());
      toast.success("Cart is clear succesfully");
    navigate(-1);
  }
  function order() {
    if(!localStorage.getItem('user')) {
        navigate('/login');
        return ''
    } 
      toast.success("Order is made succesfully");
      navigate(-1);
      dispatch(clearCart());
  }
  return (
    <>
      <List>
        {data.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </List>
      <BigButton onClick={order}>ORDER</BigButton>
      <BigButton onClick={clear}>CLEAR CART</BigButton>
    </>
  );
}
