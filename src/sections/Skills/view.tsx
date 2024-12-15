import { useSkillsModel } from "./model";
import {
  CardButton,
  CardData,
  CardDescription,
  CardTitle,
  SkillBackground,
  SkillIcon,
  SkillItem,
  SkillProficiency,
  SkillSlider,
  SkillsList,
} from "./styles";

export const SkillsView = ({
  skills,
  height,
  width,
  reverse,
  time,
  timeString,
}: ReturnType<typeof useSkillsModel>) => {
  const skillsComponent = skills.map(
    ({ title, icon, text, proficiencyLevel }, index: number) => {
      /// TODO
      /// need to refactor code
      /// I should not keep passing these variables through map
      /// these variables should be passed in the section component
      return (
        <SkillItem className="item card__article" position={index}>
          <SkillBackground>{icon}</SkillBackground>
          <SkillIcon
            size="60px"
            color="white"
            backgroundColor="black"
            fontSize="38px"
          >
            {icon}
          </SkillIcon>
          {/* <SkillTitle>{title}</SkillTitle> */}
          <CardData className="card__data">
            <CardDescription className="card__description">
              {text}
            </CardDescription>
            <CardTitle className="card__title">{title}</CardTitle>
            <CardButton href="#" className="card__button">
              This skill interests me
            </CardButton>
          </CardData>
          <SkillProficiency>{proficiencyLevel} %</SkillProficiency>
        </SkillItem>
      );
    }
  );

  /// create multiple rows
  /// slice component to show separated skill sets
  /// like: frontend, backend, and utils
  /// frontend: html,css,js,react
  /// backend: node,golang,rust,java
  /// utils: docker,linux,git,typing speed
  return (
    <SkillSlider
      className="slider container"
      height={height}
      reverse={reverse}
      width={width}
      time={time}
      quantity={skills.length}
      timeString={timeString}
    >
      <SkillsList
        className="list card__container"
        quantity={skills.length}
        width={width}
      >
        {skillsComponent}
      </SkillsList>
    </SkillSlider>
  );
};
