import styled from "styled-components";
import { MdManageSearch } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
const SectionLayout = styled.form`
  max-width: 49rem;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  & button {
    cursor: pointer;
    border: 2.5px solid #d8c3a5;
    border-radius: 400px;
    background-color: #e4e0d1;
    width: 51px;
    height: 51px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

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
  border: 2.5px solid #d8c3a5;
  box-shadow: 0px 0px 6px #d8c3a5;
  background-color: #e4e0d1;
  font-size: 19px;
  /* color: #02343f; */

  &:focus {
    outline: none;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  }
`;

const StyledClear = styled(IoMdClose)`
  position: absolute;
  margin-left: -40px;
  cursor: pointer;
  left: ${(props) => props.$right}px;
`;

export function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef();
  const [search, setSearch] = useState(searchParams.get("search"));
  function handleSubmit(e) {
    e.preventDefault();

    searchParams.set("search", search ?? "");
    setSearchParams(searchParams);
  }
  return (
    <SectionLayout onSubmit={handleSubmit}>
      <div>
        <StyledSearchBar
          ref={ref}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <button type="submit">
          <MdManageSearch size={28} color="#02343F" />
        </button>
        {search && (
          <StyledClear
            size={24}
            $right={ref.current?.getBoundingClientRect().right}
            onClick={() => {
              setSearch("");
              searchParams.set("search", "");
              setSearchParams(searchParams);
            }}
          />
        )}
      </div>
    </SectionLayout>
  );
}
