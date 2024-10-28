const arr = [12, 35, 23, 17, 3, 43, 50];
const arr2 = (num) => {
  return num % 2 == 0;
};
const arrTwo = arr.filter(arr2);
console.log(arrTwo);
