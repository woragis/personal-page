import { useSkillsModel } from "./model";
import {
  CardBackFace,
  CardFrontFace,
  SkillData,
  SkillIcon,
  SkillItem,
  SkillProficiency,
  SkillSlider,
  SkillsList,
  SkillText,
  SkillTitle,
} from "./styles";

export const SkillsView = ({ skills }: ReturnType<typeof useSkillsModel>) => {
  const height = "300px";
  const width = "300px";
  const reverse = false;
  const skillsComponent = skills.map(
    ({ title, icon, text, proficiencyLevel }, index: number) => {
      return (
        <SkillItem
          className="item"
          height={height}
          width={width}
          position={index}
          time={10}
          quantity={skills.length}
        >
          <CardFrontFace>
            <SkillIcon
              size="60px"
              color="white"
              backgroundColor="black"
              fontSize="38px"
            >
              {icon}
            </SkillIcon>
            <SkillTitle>{title}</SkillTitle>
          </CardFrontFace>
          <CardBackFace>
            <SkillData>
              <SkillText>{text}</SkillText>
            </SkillData>
            <SkillProficiency>{proficiencyLevel} %</SkillProficiency>
          </CardBackFace>
        </SkillItem>
      );
    }
  );

  return (
    <SkillSlider className="slider" height={height} reverse={reverse}>
      <SkillsList className="list" quantity={skills.length} width={width}>
        {skillsComponent}
      </SkillsList>
    </SkillSlider>
  );
};
