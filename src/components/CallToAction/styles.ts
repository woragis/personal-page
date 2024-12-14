import styled from "@emotion/styled";
import { lighten } from "polished";
import { CallToActionStylesProps } from "../../types/CallToAction.types";

export const Button = styled.button<CallToActionStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: 100px;
  width: 450px;
  margin: 0 auto;
  transition: 120ms;
  color: ${(_) => _.color};
  background-color: ${(_) => _.backgroundColor};
  font-weight: 500;

  &:hover {
    background-color: ${(_) => lighten(0.1, _.backgroundColor)};
  }

  &:active {
    background-color: ${(_) => lighten(0.25, _.backgroundColor)};
  }
`;

export const ButtonTitle = styled.p`
  font-size: 2em;
`;

export const ButtonSubTitle = styled.p`
  font-size: 1.5em;
`;
