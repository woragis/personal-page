import { useSkillsModel } from "./model";
import {
  Skill,
  SkillData,
  SkillIcon,
  SkillProficiency,
  SkillScrollWrapper,
  SkillSectionContainer,
  SkillText,
  SkillTitle,
} from "./styles";

export const SkillsView = ({ skills }: ReturnType<typeof useSkillsModel>) => {
  const skillsComponent = skills.map(
    ({ title, icon, text, proficiencyLevel }) => {
      return (
        <Skill width="330px" height="350px">
          <SkillIcon
            size="60px"
            color="white"
            backgroundColor="black"
            fontSize="38px"
          >
            {icon}
          </SkillIcon>
          <SkillTitle>{title}</SkillTitle>
          <SkillData>
            <SkillText>{text}</SkillText>
          </SkillData>
          <SkillProficiency>{proficiencyLevel} %</SkillProficiency>
        </Skill>
      );
    }
  );

  return (
    <SkillSectionContainer>
      <SkillScrollWrapper>{skillsComponent}</SkillScrollWrapper>
    </SkillSectionContainer>
  );
};
