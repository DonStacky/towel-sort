
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const arr = [];
    matrix.forEach((value) => {
        arr.push(...value);
    })
  return arr;
}
