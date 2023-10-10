import styled from "styled-components"
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";

const StyledOrderItem = styled.div`
  padding: 10px 10px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  color: #02343f;
  border-bottom: 1px solid #02343f63;
  align-items: center;
  & a {
    color: #f0edcc;
    text-decoration: none;
  }
`;

const Left = styled.div`
text-align: center;
& h3{
    margin-bottom: 6px;
}
`;
const Meddle = styled.div`
text-align: center;
& h4{
    margin-bottom: 6px;
}
`;

export default function OrderItem({order}){
    const totalItem = order.oder.reduce((acc, cur) =>acc += cur.quantity,0);
    const totalPrice = order.oder.reduce((acc, cur) => (acc += cur.totalPrice), 0);

    return (
      <StyledOrderItem>
        <Left>
          <h3>{totalItem} Items</h3>
          <h3>₹{totalPrice}</h3>
        </Left>
        <Meddle>
          <h4>Today</h4>
          <h4>Panding</h4>
        </Meddle>
        <Button>
          <Link to={`${order.id}`}>Details</Link>
        </Button>
      </StyledOrderItem>
    );
}