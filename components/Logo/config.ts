export type LogoSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";

export const calcLogoWidthAndHeight = (size: LogoSize) => {
  let height, width;
  switch (size) {
    case "small":
      height = 21.39;
      width = 70;
      break;
    case "medium":
      height = 30.56;
      width = 100;
      break;
    case "xlarge":
      height = 55;
      width = 180;
      break;
    case "xxlarge":
      height = 64.17;
      width = 210;
      break;
    default:
      height = 42.78;
      width = 140;
  }

  return { height, width };
};
