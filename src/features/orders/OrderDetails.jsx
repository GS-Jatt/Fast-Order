import styled from "styled-components";
import Oders, { StyledLink } from "../../page/Oders";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import OrderDetailItem from "./OrderDetailItem";
import { useNavigate } from "react-router-dom";
import { Empty } from "../../ui/Empty";

const StyledDetails = styled.div`
  padding: 15px;
  /* color: #02343f; */
  & h2 {
    margin-bottom: 15px;
  }
`;

const Totale = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export default function OrderDetails() {
  const { id } = useParams();
  const order = useSelector((state) => state.cart.order).find(
    (order) => order.orderId === +id,
  );

  if (!order) {
    return (
      <StyledDetails>
        <StyledLink to={-1}> &larr; Back to orders</StyledLink>
        <h2>Order #{id} </h2>
        <Empty className="">Not found</Empty>
      </StyledDetails>
    );
  }
  console.log(order);
  return (
    <StyledDetails>
      <StyledLink to={-1}> &larr; Back to orders</StyledLink>
      <h2>Order #{order.orderId} </h2>
      {order.oder.map((item) => (
        <OrderDetailItem key={item.id} item={item} />
      ))}
      <Totale>
        <h3>{order.oder.reduce((acc, curr) => (acc += curr.quantity), 0)}</h3>
        <h3>Total</h3>
        <h3>
          ₹{order.oder.reduce((acc, curr) => (acc += curr.totalPrice), 0)}
        </h3>
      </Totale>
    </StyledDetails>
  );
}
