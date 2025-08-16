import { useState } from "react";
import styled from "styled-components";
import Loader from "../../ui/Loader";
import { MenuItem } from "./MenuItem";
import { menuData } from "../../services/Data";
import { SearchBar } from "../serach/searchBar";
import { useSearchParams } from "react-router-dom";
import { Empty } from "../../ui/Empty";
import { useEffect } from "react";
import { getMenu } from "../../services/apiMenu";

export const List = styled.ul`
  padding: 10px;

  /* background-color: #f0edcc; */
`;

export function Menu() {
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getMenu().then((data) => setData(data));
  }, [setData]);

  if (!data) return <Loader />;
  const search = searchParams.get("search");
  const menuData2 = search
    ? data.filter((item) =>
        item.name.toLowerCase().startsWith(search.toLowerCase()),
      )
    : data;

  return (
    <div>
      <SearchBar />
      {!menuData2.length ? (
        <Empty>
          {" "}
          No item found with name {searchParams.get("search")} in menu
        </Empty>
      ) : (
        <List>
          {menuData2.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </List>
      )}
    </div>
  );
}
