import styled from "styled-components";
import {ImSearch} from 'react-icons/im'
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
const SectionLayout = styled.form`
  max-width: 49rem;
  & div {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 10px;
    margin-top: 20px;
  }

  & button {
    cursor: pointer;
    border: none;
    border-radius: 400px;
    background-color: white;
    width: 45px;
    height: 45px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

    border: 1px solid #02343f6f;
    &:hover {
      box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    }
  }
`;

const StyledSearchBar = styled.input`
  width: 75%;
  display: block;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid #02343f7f;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  font-size: 19px;
  /* color: #02343f; */

  &:focus {
    outline: none;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  }
`;

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef();
  function handleSubmit(e){
    e.preventDefault();
    searchParams.set('search', ref.current.value);
    setSearchParams(searchParams);
  }
  useEffect(()=>{
    ref.current.value = searchParams.get("search")
  })

  return (
    <SectionLayout onSubmit={handleSubmit}>
      <div>
        <StyledSearchBar ref={ref} placeholder="Search" />
        <button type="submit">
          <ImSearch size={20} color="#02343F" />
        </button>
      </div>
    </SectionLayout>
  );
}
