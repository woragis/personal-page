import { useHeaderModel } from "./model";
import { HeaderView } from "./view";

const Header = () => {
  const model = useHeaderModel();

  return <HeaderView {...model} />;
};

export default Header;
