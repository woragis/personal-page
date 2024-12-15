import { ReactElement } from "react";

export interface SkillInterface {
  title: string;
  icon: ReactElement;
  text: string;
  proficiencyLevel: number;
  color: string;
}

export interface BatteryProps {
  height: string;
  width: string;
  level: number;
}

export interface SkillsSliderProps {
  height: string;
  width: string;
  time: number;
  timeString: string;
  quantity: number;
  reverse?: boolean;
}

export interface SkillsListProps {
  width: string;
  quantity: number;
}

export interface SkillCardProps {
  position: number;
  color: string;
}

export interface SkillIconProps {
  size: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
}
