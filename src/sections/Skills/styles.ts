import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { SkillIconProps, SkillProps } from "../../types/Skill.section.types";

export const SkillScrollWrapper = styled.section`
  padding-block: 1rem;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  width: max-content;
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
  transition: all 0.4s ease-in-out;
`;

/*
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
*/

const autoRun = keyframes({
  from: {
    left: "100%",
  },
  to: {
    left: `calc(300px * -1)`,
  },
});

interface SkillSliderProps {
  height: string;
  reverse?: boolean;
}

interface SkillsListProps {
  width: string;
  quantity: number;
}

interface SkillItemProps {
  width: string;
  height: string;
  time: number;
  quantity: number;
  position: number;
}

export const SkillSlider = styled.section<SkillSliderProps>`
  border: 1px solid red;
  position: relative;
  width: 100%;
  height: ${(_) => _.height};
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);

  &:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }
  & .item {
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
`;

export const SkillItem = styled.li<SkillItemProps>`
  background-color: #0052dd;
  color: white;
  border: 1px solid black;
  width: ${(_) => _.width};
  height: ${(_) => _.height};
  position: absolute;
  left: 100%;
  animation: ${autoRun} ${(_) => _.time}s linear infinite;
  animation-delay: ${(_) =>
    (_.time / _.quantity) * (_.position - 1) - (_.time - 3)}s !important;
  transition: filter 0.5s;

  &:hover {
    filter: grayscale(0);
  }
`;

// data inside each card
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
  filter: blur(4px);

  svg {
    position: absolute;
    right: -30%;
    bottom: -30%;
  }
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

/// TODO INFO FEATURE
css`
  .container {
  }
  .card__container {
  }
  .card__article {
  }
  .card__data {
  }
  .card__description {
  }
  .card__title {
  }
  .card__button {
  }
`;
