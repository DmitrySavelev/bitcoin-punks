export const makeRandomArr = (arr) => {
  return [...arr].sort(() => Math.round(Math.random() * 100) - 50);
};