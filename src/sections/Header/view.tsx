import { useHeaderModel } from "./model";
import Navbar from "../../components/Navbar";

export const HeaderView = ({}: ReturnType<typeof useHeaderModel>) => {
  return <Navbar />;
};
