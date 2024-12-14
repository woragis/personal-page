import styled from "@emotion/styled";
import { lighten } from "polished";
import { CallToActionStylesProps } from "../../types/CallToAction.types";

export const Button = styled.button<CallToActionStylesProps>`
  height: 300px;
  width: 600px;
  background-color: ${(_) => _.color};
  font-size: 3em;
  transition: 120ms;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  &:hover {
    background-color: ${(_) => lighten(0.1, _.color)};
  }

  &:active {
    background-color: ${(_) => lighten(0.25, _.color)};
  }

  * {
    color: white;
    font-weight: 900;
  }
`;
