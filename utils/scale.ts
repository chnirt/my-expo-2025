import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Baseline design dimensions (e.g., Figma 375x812)
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

/**
 * Calculates the horizontal scale based on the baseline.
 * @param size The original design size.
 * @returns The size scaled based on the current screen width.
 */
export const scale = (size: number): number => {
  const scaledSize: number = (SCREEN_WIDTH / guidelineBaseWidth) * size;
  return scaledSize;
};

/**
 * Calculates the vertical scale based on the baseline.
 * @param size The original design size.
 * @returns The size scaled based on the current screen height.
 */
export const verticalScale = (size: number): number => {
  const scaledSize: number = (SCREEN_HEIGHT / guidelineBaseHeight) * size;
  return scaledSize;
};

/**
 * Calculates a moderate scale to avoid extreme changes between devices.
 * @param size The original design size.
 * @param factor The adjustment factor (default is 0.5).
 * @returns The moderately scaled value.
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  const scaledValue: number = size + (scale(size) - size) * factor;
  return scaledValue;
};
