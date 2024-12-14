import { useSkillsModel } from "./model";
import {
  CardBackFace,
  CardFrontFace,
  SkillCard,
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
        <SkillCard width="330px" height="350px">
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
        </SkillCard>
      );
    }
  );

  return (
    <SkillSectionContainer>
      <SkillScrollWrapper>{skillsComponent}</SkillScrollWrapper>
    </SkillSectionContainer>
  );
};
