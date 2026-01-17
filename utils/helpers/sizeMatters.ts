import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on a standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

type ScaleFunction = (size: number, factor?: number) => number;

export const scale: ScaleFunction = (size) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale: ScaleFunction = (size) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale: ScaleFunction = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale: ScaleFunction = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
