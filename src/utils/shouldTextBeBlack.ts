const shouldTextBeBlack = (hexColor: string) => {
  // Convert hex color to RGB values
  const red = parseInt(hexColor.substr(1, 2), 16);
  const green = parseInt(hexColor.substr(3, 2), 16);
  const blue = parseInt(hexColor.substr(5, 2), 16);

  // Calculate the relative luminance of the color
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  // If the luminance is greater than 0.5, the text color should be black, otherwise it should be white
  return luminance > 0.5;
};

export default shouldTextBeBlack;
