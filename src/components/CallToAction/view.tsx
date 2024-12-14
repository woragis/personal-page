import { useCallToActionModel } from "./model";
import { Button, ButtonSubTitle, ButtonTitle } from "./styles";
import { Link } from "react-router-dom";

export const CallToActionView = ({
  text,
  path,
  color,
  backgroundColor,
  subtext,
}: ReturnType<typeof useCallToActionModel>) => {
  return (
    <Link to={path}>
      <Button color={color} backgroundColor={backgroundColor}>
        <ButtonTitle>{text}</ButtonTitle>
        {subtext && <ButtonSubTitle>{subtext}</ButtonSubTitle>}
      </Button>
    </Link>
  );
};
