import styled from "@emotion/styled";
import {
  SkillIconProps,
  SkillCardProps,
  SkillsSliderProps,
  SkillsListProps,
  BatteryProps,
} from "../../types/Skill.section.types";
import {
  animatedChargingBattery,
  animatedLowBattery,
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
  --color: ${(_) => _.color};
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
  border: 2px solid var(--color);
  box-shadow: 0 0 15px var(--color);
  background: linear-gradient(115deg, #141316 60%, var(--color));
  z-index: -1;
  color: white;
  position: absolute;
  left: 100%;
  transition: filter 0.5s;
  animation: ${autoRun} var(--time) linear infinite !important;
  animation-delay: calc(
    (var(--time) / var(--quantity)) * (${(_) => _.position} - var(--quantity))
  ) !important;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    box-shadow: inset 0 0 10px var(--color);
  }

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
  color: var(--color);
  border: 3px solid var(--color);
  box-shadow: 0 0 5px var(--color);
  width: ${(_) => _.size};
  height: ${(_) => _.size};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 5px var(--color);
  }
`;

export const SkillTitle = styled.h2`
  text-align: center;
`;

export const SkillProficiencyContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  flex-direction: column;
`;

export const SkillProficiency = styled.p``;

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
export const BatteryPill = styled.div<BatteryProps>`
  --gradient-color-red: linear-gradient(
    90deg,
    hsl(7, 89%, 46%) 15%,
    hsl(11, 93%, 68%) 100%
  );
  --gradient-color-orange: linear-gradient(
    90deg,
    hsl(22, 89%, 46%) 15%,
    hsl(54, 90%, 45%) 100%
  );
  --gradient-color-yellow: linear-gradient(
    90deg,
    hsl(54, 89%, 46%) 15%,
    hsl(92, 90%, 45%) 100%
  );
  --gradient-color-green: linear-gradient(
    90deg,
    hsl(92, 89%, 46%) 15%,
    hsl(92, 90%, 68%) 100%
  );
  --text-color: #fff;
  --battery-width: ${(_) => _.width};
  --battery-height: ${(_) => _.height};
  transform: rotate(90deg) translateX(-50%);
  position: absolute;
  left: 50%;
  bottom: -65px;
  z-index: -1;
  width: var(--battery-width);
  height: var(--battery-height);
  background-color: black;
  box-shadow: inset 20px 0 48px hsl(0, 0%, 16%),
    inset -4px 12px 48px hsl(0, 0%, 56%);
  border-radius: 3rem;
  justify-self: flex-end;

  .green-color {
    background: var(--gradient-color-green);
  }
  .animated-green {
    background: var(--gradient-color-green);
    animation: ${animatedChargingBattery} 1.2s infinite alternate;
  }
  .animated-red {
    background: var(--gradient-color-red);
    animation: ${animatedLowBattery} 1.2s infinite alternate;
  }
  .animated-green,
  .animated-red,
  .green-color {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .gradient-color-red,
  .gradient-color-red::after {
    background: var(--gradient-color-red);
  }
  .gradient-color-yellow,
  .gradient-color-yellow::after {
    background: var(--gradient-color-yellow);
  }
  .gradient-color-orange,
  .gradient-color-orange::after {
    background: var(--gradient-color-orange);
  }
  .gradient-color-green,
  .gradient-color-green::after {
    background: var(--gradient-color-green);
  }
`;

export const BatteryLevel = styled.div`
  position: absolute;
  inset: 2px;
  border-radius: 3rem;
  overflow: hidden;
`;

export const BatteryLiquid = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(var(--battery-height) / 3);
  background: var(--gradient-color-red);
  box-shadow: inset -10px 0 12px hsla(0, 0%, 0%, 0.1),
    inset 12px 0 12px hsla(0, 0%, 0%, 0.15);
  transition: 0.3s;

  &::after {
    content: "";
    position: absolute;
    height: 0px;
    background: var(--gradient-color-red);
    box-shadow: inset 0 -3px 6px hsla(0, 0%, 0%, 0.2);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -4px;
    border-radius: 50%;
  }
`;
