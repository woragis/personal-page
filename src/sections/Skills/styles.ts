import styled from "@emotion/styled";
import {
  SkillIconProps,
  SkillCardProps,
  SkillsSliderProps,
  SkillsListProps,
} from "../../types/Skill.section.types";
import {
  autoRun,
  removeData,
  removeOverflow,
  showData,
  showOverflow,
} from "./animations";

export const SkillsSlider = styled.section<SkillsSliderProps>`
  --time-delay: ${(_) => _.time - 3};
  --time: ${(_) => _.timeString};
  --quantity: ${(_) => _.quantity};
  --width: ${(_) => _.width};
  --height: ${(_) => _.height};
  border: 1px solid red;
  position: relative;
  width: 100%;
  height: ${(_) => _.height};
  overflow-x: hidden;
  overflow-y: visible;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  margin: 2rem 0;

  &:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }
  & .item:hover {
    filter: grayscale(0);
  }
  .item {
    animation-direction: ${(_) => (_.reverse ? "reverse" : "normal")};
  }
`;

export const SkillsList = styled.ul<SkillsListProps>`
  display: flex;
  width: 100%;
  min-width: calc(${(_) => _.width} * ${(_) => _.quantity});
  position: relative;
  overflow-y: visible;
`;

export const SkillCard = styled.li<SkillCardProps>`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 60px;
  border-radius: 1.5rem;
  width: var(--width);
  height: var(--height);
  border: 2px solid darkblue;
  background: linear-gradient(315deg, darkblue, blue);
  z-index: -1;
  color: white;
  position: absolute;
  left: 100%;
  transition: filter 0.5s;
  animation: ${autoRun} var(--time) linear infinite !important;
  animation-delay: calc(
    (var(--time) / var(--quantity)) * (${(_) => _.position} - var(--quantity))
  ) !important;

  &:hover {
    animation: ${removeOverflow} 1s forwards;
    .card__data {
      animation: ${showData} 500ms forwards ease-out;
      opacity: 1;
      transition: opacity 200ms;
    }
  }
  &:not(:hover) {
    animation: ${showOverflow} 2s forwards;
    .card__data {
      animation: ${removeData} 1s forwards;
    }
  }
`;

export const SkillBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  filter: blur(4px) !important;

  svg {
    position: absolute;
    right: -80px;
    bottom: -80px;
  }
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

export const SkillTitle = styled.h2`
  text-align: center;
`;

export const SkillProficiency = styled.p`
  text-align: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

export const SkillData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(var(--width) - 15px);
  height: 15rem;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.15);
  border-radius: 1rem;
  position: absolute;
  bottom: -7rem;
  z-index: 2;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 1s 1s;
`;

export const SkillDataDescription = styled.span`
  display: block;
  font-size: 15px;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  font-family: "Roboto Mono", monospace;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
`;

export const SkillDataTitle = styled.h4`
  font-size: 2em;
  text-align: center;
  font-weight: 500;
  color: black;
  margin-bottom: 0.75rem;
  position: absolute;
  bottom: 30px;
`;

export const SkillDataButton = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: black;
  position: absolute;
  bottom: 12px;

  &:hover {
    text-decoration: underline;
  }
`;
