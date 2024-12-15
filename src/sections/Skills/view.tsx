import { useSkillsModel } from "./model";
import {
  SkillBackground,
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
  const height = "250px";
  const width = "250px";
  const reverse = false;
  const time = 20;
  const skillsComponent = skills.map(
    ({ title, icon, text, proficiencyLevel }, index: number) => {
      /// TODO
      /// need to refactor code
      /// I should not keep passing these variables through map
      /// these variables should be passed in the section component
      return (
        <SkillItem
          className="item card__article"
          height={height}
          width={width}
          position={index}
          time={time}
          quantity={skills.length}
        >
          <SkillBackground>{icon}</SkillBackground>
          <SkillIcon
            size="60px"
            color="white"
            backgroundColor="black"
            fontSize="38px"
          >
            {icon}
          </SkillIcon>
          <SkillTitle>{title}</SkillTitle>
          <div className="card__data">
            <span className="card__description">{text}</span>
            <h2 className="card__title">{title}</h2>
            <a href="#" className="card__button">
              This skill interests me
            </a>
          </div>
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
    <SkillSlider className="slider container" height={height} reverse={reverse}>
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
