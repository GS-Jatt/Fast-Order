import styled from "styled-components";
import { Button } from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decQuantity,
  deleteItem,
  incQuantity,
} from "../cart/CartSlice";

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  padding: 10px 0px;
  gap: 10px;
  border-bottom: 1px solid rgb(2, 52, 63) ;
  color: #02343f;
  &:last-child{
    border: none;
  }
  & img {
    height: 96px;
  }

  & h3 {
    color: #02343f;
    font-size: 16px;
  }
  & p {
    font-size: 14px;
  }
`;

const Section2 = styled.section`
  display: flex;
  justify-content: space-between;
  & div {
    display: flex;
    gap: 8px;
  }
  & span {
    font-size: 14px;
    font-weight: 600;
    margin: auto 0;
  }
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export function MenuItem({ item }) {
  const dispatch = useDispatch();
  const cartItem = {
    id: item.id,
    name: item.name,
    quantity: 1,
    unitPrice: item.unitPrice,
    totalPrice: item.unitPrice,
  };

  const currentQuantity = useSelector((state) => state.cart.cart).find(
    (el) => el.id === item.id)?.quantity;
  const inCart = currentQuantity ? true : false;


  function handleDelete() {
    dispatch(deleteItem(item.id));
  }
  function handleAdd() {
    dispatch(addItem(cartItem));
  }

  function handleDec(){
    if(currentQuantity === 1) return handleDelete()
    dispatch(decQuantity(item.id))
  }

  return (
    <ListItem>
      <img src={item.imageUrl} />
      <Section>
        <div>
          <h3>{item.name}</h3>
          <p>
            {item.ingredients
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(", ")}
          </p>
        </div>

        <Section2>
          <span>₹{item.unitPrice}</span>
          <div>
            {inCart && (
              <>
                <Button onClick={handleDec}> &ndash;</Button>
                <span>{currentQuantity}</span>
                <Button onClick={() => dispatch(incQuantity(item.id))}>
                  +
                </Button>
              </>
            )}
            {inCart ? (
              <Button onClick={handleDelete}>Delete</Button>
            ) : (
              <Button onClick={handleAdd}>Add to Cart</Button>
            )}
          </div>
        </Section2>
      </Section>
    </ListItem>
  );
}
