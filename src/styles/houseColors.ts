import { generalColors } from "./colors/colors";

export const houseColors: Record<string, string> = {
  Gryffindor: generalColors.danger,
  Slytherin: generalColors.success,
  Ravenclaw: generalColors.info,
  Hufflepuff: generalColors.warning,
  default: generalColors.neutral,
};
