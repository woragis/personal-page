export const useCallToActionModel = (
  text: string,
  path: string,
  color: string,
  backgroundColor: string,
  subtext?: string
) => {
  return { text, path, backgroundColor, color, subtext };
};
