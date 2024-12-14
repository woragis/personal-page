import { CallToActionProps } from "../../types/CallToAction.types";
import { useCallToActionModel } from "./model";
import { CallToActionView } from "./view";

const CallToAction = ({ title, path, color, subtitle }: CallToActionProps) => {
  const model = useCallToActionModel(title, path, color, subtitle);

  return <CallToActionView {...model} />;
};

export default CallToAction;
