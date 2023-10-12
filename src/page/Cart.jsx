import styled from "styled-components";
import CartOverview from "../features/cart/CartOverview";
import { Link } from "react-router-dom";

const SectionLayout = styled.div`
  padding: 10px;

  & a {
    font-weight: 700;
    color: #245ea0;
    text-decoration: none;
   
  }
`;

export function Cart() {
  return (
    <SectionLayout>
      <Link to={'/'}> &larr; Back to menu</Link>
      <CartOverview />
    </SectionLayout>
  );
}
