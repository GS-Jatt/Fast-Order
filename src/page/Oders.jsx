import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Empty } from "../ui/Empty";
import OrderItem from "../features/orders/OrderItem";

const StyledOders = styled.div`
  padding: 10px;
`;
export const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 700;
  color: #245ea0;
  text-decoration: none;
  margin-bottom: 10px;
`;

export default function Oders() {
  const oders = useSelector((state) => state.cart.order);

  return (
    <StyledOders>
      <StyledLink to={"/"}> &larr; Back to menu</StyledLink>
      {!oders.length ? (
        <Empty>Looks like you haven't placed an order yet</Empty>
      ) : (
        oders
          .toReversed()
          .map((order) => <OrderItem key={order.orderId} order={order} />)
      )}
    </StyledOders>
  );
}
