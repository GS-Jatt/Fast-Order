import styled from "styled-components";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";

const StyledOrderItem = styled.div`
  padding: 10px 10px;
  margin-top: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  /* color: #02343f; */
  border-bottom: 1px solid #02343f63;
  align-items: center;

  & a {
    color: var(--bg-color);
    text-decoration: none;
  }
`;

const Left = styled.div`
  text-align: left;
  & h3 {
    margin-bottom: 6px;
    font-weight: 600;
  }
`;
const Meddle = styled.div`
  text-align: left;
  & h4 {
    margin-bottom: 6px;
    font-weight: 400;
  }
`;

export default function OrderItem({ order }) {
  const totalItem = order.oder.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalPrice = order.oder.reduce(
    (acc, cur) => (acc += cur.totalPrice),
    0,
  );
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthsArray[order.date.month];

  return (
    <StyledOrderItem>
      <Left>
        <h3>{totalItem} Items</h3>
        <h3>₹{totalPrice}</h3>
      </Left>
      <Meddle>
        <h4>
          {order.date.day === new Date().getDate()
            ? "Today"
            : `${order.date.day},${month.slice(0, 3)}`}
        </h4>
        <h4>{order.status}</h4>
      </Meddle>
      <Link to={`${order.orderId}`}>
        <Button style={{ width: "100%" }}>Details</Button>
      </Link>
    </StyledOrderItem>
  );
}
