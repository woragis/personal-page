import { CallToActionProps } from "../../types/CallToAction.types";
import { useCallToActionModel } from "./model";
import { CallToActionView } from "./view";

const CallToAction = ({
  title,
  path,
  color,
  backgroundColor,
  subtitle,
}: CallToActionProps) => {
  const model = useCallToActionModel(
    title,
    path,
    color,
    backgroundColor,
    subtitle
  );

  return <CallToActionView {...model} />;
};

export default CallToAction;
