import { keyframes } from "@emotion/react";

export const showData = keyframes({
  "50%": {
    transform: "translateY(-10rem);",
  },
  "100%": {
    transform: "translateY(-5rem);",
  },
});

export const removeOverflow = keyframes({
  to: {
    overflow: "initial",
  },
});

export const removeData = keyframes({
  "0%": {
    transform: "translateY(-5rem)",
  },
  "40%": {
    transform: "translateY(-6rem)",
  },
  "80%": {
    transform: "translateY(10rem)",
  },
  "100%": {
    transform: "translateY(15rem)",
  },
});

export const showOverflow = keyframes({
  "0%": {
    overflowY: "initial",
    pointerEvents: "none",
  },
  "50%": {
    overflowY: "hidden",
  },
});

export const autoRun = keyframes({
  from: {
    left: "100%",
  },
  to: {
    left: `calc(300px * -1)`,
  },
});

export const animatedChargingBattery = keyframes({
  "0%": {
    textShadow: "none",
  },
  "100%": {
    textShadow: "0 0 6px hsl(92, 90%, 68%)",
  },
});
export const animatedLowBattery = keyframes({
  "0%": {
    textShadow: "none",
  },
  "100%": {
    textShadow: "0 0 8px hsl(7, 89%, 46%)",
  },
});
