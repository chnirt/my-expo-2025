// ChnirtStyleSheet.ts
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { scale, verticalScale, moderateScale } from "./scale"; // Adjust the path as needed

// Define a union type for valid style objects.
type Style = ViewStyle | TextStyle | ImageStyle;

// This generic type ensures that our style object keys map to valid style types.
type NamedStyles<T> = { [P in keyof T]: Style };

/**
 * Recursively scales numeric values within a style object.
 * It chooses a scaling function based on the property name.
 *
 * - Properties with "font" or "radius" use moderateScale.
 * - Properties related to vertical dimensions (e.g., height, paddingVertical) use verticalScale.
 * - Properties related to horizontal dimensions (e.g., width, paddingHorizontal) use scale.
 * - Other numeric values default to moderateScale.
 *
 * @param styles The original style object.
 * @returns A new style object with scaled numeric values.
 */
function autoScaleStyle<T extends NamedStyles<T>>(styles: T): T {
  const scaled: Partial<T> = {};

  (Object.keys(styles) as (keyof T)[]).forEach((key) => {
    const styleObj = styles[key] as any; // Use any for inner object
    const newStyle: any = {};

    // Process each property in the style object.
    Object.keys(styleObj).forEach((prop: string) => {
      const value = styleObj[prop];
      if (typeof value === "number") {
        const lowerProp = prop.toLowerCase();
        if (lowerProp.includes("font") || lowerProp.includes("radius")) {
          newStyle[prop] = moderateScale(value);
        } else if (
          lowerProp.includes("height") ||
          lowerProp.includes("width") ||
          lowerProp.includes("vertical") ||
          lowerProp.includes("margintop") ||
          lowerProp.includes("marginbottom") ||
          lowerProp.includes("paddingtop") ||
          lowerProp.includes("paddingbottom")
        ) {
          newStyle[prop] = verticalScale(value);
        } else if (
          lowerProp.includes("left") ||
          lowerProp.includes("right") ||
          lowerProp.includes("marginhorizontal") ||
          lowerProp.includes("paddinghorizontal")
        ) {
          newStyle[prop] = scale(value);
        } else {
          newStyle[prop] = moderateScale(value);
        }
      } else if (typeof value === "object" && value !== null) {
        // Recursively process nested objects
        newStyle[prop] = autoScaleStyle(value);
      } else {
        newStyle[prop] = value;
      }
    });
    scaled[key] = newStyle;
  });

  return scaled as T;
}

/**
 * Custom StyleSheet creator that automatically scales numeric style values.
 *
 * @param styles A style object following the typical React Native style shape.
 * @returns A new style object with scaled values, created via StyleSheet.create.
 */
export const ChnirtStyleSheet = {
  create<T extends NamedStyles<T>>(styles: T & StyleSheet.NamedStyles<any>): T {
    return StyleSheet.create(autoScaleStyle(styles)) as T;
  },
};
