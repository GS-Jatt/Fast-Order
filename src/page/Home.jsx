import { Cart } from "./Cart";
import { Menu } from "../features/menu/Menu";
import ButtomBar from '../ui/ButtomBar';

import { SearchFilters } from "../features/serachFilters/searchFilters";

export default function Home() {
  return (
    <>
      <Menu />
      <ButtomBar/>
    </>
  );
}
