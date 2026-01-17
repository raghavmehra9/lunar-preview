export const parseParams = (
  param: string | string[] | undefined
): Record<string, string> => {
  if (!param || typeof param !== "string") return {};
  try {
    return JSON.parse(param);
  } catch (e) {
    console.warn("Invalid JSON params:", param);
    return {};
  }
};
