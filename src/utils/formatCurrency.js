// Add dot separate number, for example: 1000 => 1.000
export const formatNumber = (num) => {
  const THREE_DIGITS_REGEX = /(\d)(?=(\d{3})+(?!\d))/g;
  num.toString().replace(THREE_DIGITS_REGEX, '$1.');
};
