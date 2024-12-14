import { useSkillsModel } from "./model";
import { SkillsView } from "./view";

const Skills = () => {
  const model = useSkillsModel();

  return <SkillsView {...model} />;
};

export default Skills;
