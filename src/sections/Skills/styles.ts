import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { SkillIconProps, SkillProps } from "../../types/Skill.section.types";

export const SkillSectionContainer = styled.section`
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 10%,
    white 90%,
    transparent
  );

  width: 100%;
  border: 1px solid red;
  height: 500px;
`;

const scrollSkills = keyframes({
  to: {
    transform: "transate(calc(-50% -  0.5rem));",
  },
});

export const SkillScrollWrapper = styled.section`
  padding-block: 1rem;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  width: max-content;
  // animation: ${scrollSkills} 40s forwards linear infinite;
`;

export const SkillCard = styled.article<SkillProps>`
  width: ${(_) => _.width};
  height: ${(_) => _.height};
  border: 1px solid black;
  padding: 30px 0 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  transform-style: preserve-3d; // useful for card rotation
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardFrontFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
`;

export const CardBackFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: white;
`;

export const SkillTitle = styled.h4`
  font-size: 2em;
  text-align: center;
`;

export const SkillIcon = styled.figure<SkillIconProps>`
  font-size: ${(_) => _.fontSize};
  margin: 0 auto;
  color: ${(_) => _.color};
  background-color: ${(_) => _.backgroundColor};
  border: 1px solid black;
  width: ${(_) => _.size};
  height: ${(_) => _.size};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillData = styled.div``;

export const SkillText = styled.p`
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  font-family: "Roboto Mono", monospace;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
`;

export const SkillProficiency = styled.p`
  text-align: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;
