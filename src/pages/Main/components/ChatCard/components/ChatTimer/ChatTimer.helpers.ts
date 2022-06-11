export const getDigit = (value: number) =>
  value >= 10 ? value.toString() : "0" + value.toString();
