import styled from "styled-components";
import { ListItem } from "../menu/MenuItem";
import { decQuantity, deleteItem, incQuantity } from "../cart/CartSlice";
import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";

const CartIte = styled(ListItem)`
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 400;
  }
  @media (max-width: 523px) {
    flex-direction: column;
    align-items: start;
    & h3 {
      font-size: 14px;
    }
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 22px;
  @media (max-width: 523px) {
    width: 100%;
  }
  & div {
    gap: 8px;

    display: flex;
  }
  & span {
    font-size: 14px;
    font-weight: 600;
    margin: auto 0;
  }
`;

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(item.id));
  }
  function handleDec() {
    if (item.quantity === 1) return handleDelete();
    dispatch(decQuantity(item.id));
  }
  return (
    <CartIte>
      <h3>
        {item.quantity} X {item.name}
      </h3>

      <Section>
        <span>₹{item.totalPrice}</span>
        <div>
          <Button onClick={handleDec}> &ndash;</Button>
          <span>{item.quantity}</span>
          <Button onClick={() => dispatch(incQuantity(item.id))}>+</Button>
        </div>

        <Button $px={16} onClick={handleDelete}>
          Delete
        </Button>
      </Section>
    </CartIte>
  );
}
