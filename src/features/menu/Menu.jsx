import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMenu } from "../../services/apiMenu";
import Loader from "../../ui/Loader";
import { MenuItem } from "./MenuItem";
import {menuData} from '../../services/Data'

export const List = styled.ul`
  padding: 10px;
  background-color: #f0edcc;
`;

export function Menu() {
  const [data, setData] = useState(menuData);

  // useEffect(() => {
  //   getMenu().then((data) => setData(data));
  // }, [setData]);

  

  if (!data) return <Loader />;

  return (
    <div>
      <List>
        {data.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </List>
    </div>
  );
}
