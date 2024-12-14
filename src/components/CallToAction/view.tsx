import { useCallToActionModel } from "./model";
import { Button } from "./styles";
import { Link } from "react-router-dom";

export const CallToActionView = ({
  text,
  path,
  color,
  subtext,
}: ReturnType<typeof useCallToActionModel>) => {
  return (
    <Link to={path}>
      <Button color={color}>
        {text}
        {subtext && <span className="subtitle">{subtext}</span>}
      </Button>
    </Link>
  );
};
