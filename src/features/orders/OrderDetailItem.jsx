import styled from "styled-components";

const StyledDI = styled.div`
  padding: 14px 6px;
  border-bottom: 1px solid #02343f7f;
  display: flex;
  justify-content: space-between;
  & h4 {
    font-weight: 400;
  }
`;

export default function OrderDetailItem({ item }) {
  return (
    <StyledDI>
      <h4>
        <strong>{item.quantity}</strong> X {item.name}
      </h4>
      <h4>
        <strong>₹{item.totalPrice}</strong>
      </h4>
    </StyledDI>
  );
}
