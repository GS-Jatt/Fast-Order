import styled from "styled-components";

const StyledDI = styled.div`
  padding: 14px 6px;
  border-bottom: 1px solid #02343f7f;
  display: flex;
  justify-content: space-between;
`;

export default function OrderDetailItem({ item }) {
  return (
    <StyledDI>
      <h4>
        {item.quantity} X {item.name}
      </h4>
      <h4>₹{item.totalPrice}</h4>
    </StyledDI>
  );
}
