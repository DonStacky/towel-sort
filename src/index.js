
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    let res = [];
    if (Array.isArray(matrix) === true) {
    arr = matrix.reduce((acc, item, index) => {
      if ((index + 1) % 2 === 0) {
        acc.push(matrix[index].reverse());
      } else {
        acc.push(item);
      }
      return acc;
    }, [])
    }
    arr.forEach((value) => {
      res.push(...value);
    })
    return res;
  }
