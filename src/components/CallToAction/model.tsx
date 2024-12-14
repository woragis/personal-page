export const useCallToActionModel = (
  text: string,
  path: string,
  color: string,
  subtext?: string
) => {
  return { text, path, subtext, color };
};
