import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMenu } from "../../services/apiMenu";
import Loader from "../../ui/Loader";
import { MenuItem } from "./MenuItem";
import {menuData} from '../../services/Data'
import { SearchBar } from "../serach/searchBar";
import { useSearchParams } from "react-router-dom";
import {Empty} from '../../ui/Empty'

export const List = styled.ul`
  padding: 10px;
  background-color: #f0edcc;
`;

export function Menu() {
  const [data, setData] = useState(menuData);
  const [searchParams] = useSearchParams();
  // useEffect(() => {
  //   getMenu().then((data) => setData(data));
  // }, [setData]);

  if (!data) return <Loader />;
  const menuData2 = searchParams.get('search')? data.filter((item)=>item.name ===searchParams.get('search')):data;
  
  if(!menuData2.length) return <><SearchBar/><Empty> No item found with name {searchParams.get("search")} in menu</Empty>;</> 
  

  return (
    <div>
      <SearchBar/>
      <List>
        {menuData2.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </List>
    </div>
  );
}
