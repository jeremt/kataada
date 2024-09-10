export function countA(arr) {
  return arr.reduce((acc, item) => (item[0] === "A" ? acc + 1 : acc), 0);
}

export function returnA(arr) {
  return arr.filter((item) => item[0] === "A");
}
