const MIN_HEIGHT = 20;

export const mapBarHeights = (numbers: number[], baseHeight: number) => {
  const maxNumber = Math.max(...numbers); // Get the maximum number in the array

  if (maxNumber === 0) {
    return new Array(numbers.length).fill(MIN_HEIGHT);
  }

  const maxHeight = baseHeight - MIN_HEIGHT;

  const scaleFactor = maxHeight / maxNumber; // Calculate the scale factor

  // Map the heights of the bars based on the scale factor
  const mappedHeights = numbers.map(num => MIN_HEIGHT + num * scaleFactor);

  return mappedHeights;
};
