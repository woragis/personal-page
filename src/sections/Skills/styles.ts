import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { SkillIconProps } from "../../types/Skill.section.types";

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

export const SkillProficiency = styled.p`
  text-align: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

/// TODO INFO FEATURE

/// animations for test code
const showData = keyframes({
  "50%": {
    transform: "translateY(-10rem);",
  },
  "100%": {
    transform: "translateY(-7rem);",
  },
});

const removeOverflow = keyframes({
  to: {
    overflow: "initial",
  },
});

const removeData = keyframes({
  "0%": {
    transform: "translateY(7rem)",
  },
  "50%": {
    transform: "translateY(10rem)",
  },
  "100%": {
    transform: "translateY(0.5rem)",
  },
});

const showOverflow = keyframes({
  "0%": {
    overflow: "initial",
    pointerEvents: "none",
  },
  "50%": {
    overflow: "hidden",
  },
});

export const Container = styled.section`
  display: grid;
  place-items: center;
  margin-inline: 1.5rem;
  padding-block: 5rem;
`;
export const CardContainer = styled.div`
  display: grid;
  row-gap: 3.5rem;
  border-radius: 1.5rem;
`;

export const SkillItem = styled.li<SkillItemProps>`
  border-radius: 1.5rem;
  overflow: hidden;
  border: none;
  background-color: #0052dd;
  color: white;
  border: 1px solid black;
  width: ${(_) => _.width};
  height: ${(_) => _.height};
  position: absolute;
  left: 100%;
  animation: ${autoRun} ${(_) => _.time}s linear infinite !important;
  animation-delay: ${(_) =>
    (_.time / _.quantity) * (_.position - 1) - (_.time - 3)}s !important;
  transition: filter 0.5s;

  &:hover {
    filter: grayscale(0);
    animation: ${removeOverflow} 2s forwards;
    .card__data {
      animation: ${showData} 1s forwards;
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
  &:not(:hover) {
    animation: ${showOverflow} 2s forwards;
    .card__data {
      animation: ${removeData} 1s forwards;
    }
  }
`;
export const CardDescription = styled.span`
  display: block;
  font-size: 15px;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  font-family: "Roboto Mono", monospace;
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
`;

export const CardTitle = styled.h4`
  font-size: 2em;
  text-align: center;
  font-weight: 500;
  color: black;
  margin-bottom: 0.75rem;
`;
export const CardButton = styled.a`
  text-decoration: none;
  font-size: 26px;
  font-weight: 500;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;
export const CardData = styled.div`
  width: 280px;
  max-height: 7rem;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.15);
  border-radius: 1rem;
  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 1s 1s;
`;
