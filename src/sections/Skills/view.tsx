import { useSkillsModel } from "./model";
import {
  SkillDataButton,
  SkillData,
  SkillDataDescription,
  SkillDataTitle,
  SkillBackground,
  SkillIcon,
  SkillCard,
  SkillProficiencyContainer,
  SkillsSlider,
  SkillsList,
  SkillTitle,
  BatteryPill,
  BatteryLevel,
  BatteryLiquid,
  SkillProficiency,
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
    ({ title, icon, text, color, proficiencyLevel }, index: number) => {
      /// TODO
      /// need to refactor code
      /// I should not keep passing these variables through map
      /// these variables should be passed in the section component
      return (
        <SkillCard
          className="item card__article"
          position={index}
          color={color}
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
          <SkillData className="card__data">
            <SkillDataDescription className="card__description">
              {text}
            </SkillDataDescription>
            <SkillDataTitle className="card__title">{title}</SkillDataTitle>
            <SkillDataButton href="#" className="card__button">
              This skill interests me
            </SkillDataButton>
          </SkillData>
          <SkillProficiencyContainer className="battery">
            <BatteryPill
              className="battery__pill"
              height="160px"
              width="20px"
              level={1}
            >
              <BatteryLevel className="battery__level">
                <BatteryLiquid className="battery__liquid"></BatteryLiquid>
              </BatteryLevel>
            </BatteryPill>
            <SkillProficiency>{proficiencyLevel}</SkillProficiency>
          </SkillProficiencyContainer>
        </SkillCard>
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
    <SkillsSlider
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
    </SkillsSlider>
  );
};
