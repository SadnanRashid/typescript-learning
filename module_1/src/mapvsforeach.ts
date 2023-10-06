const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const resultMap: number[] = array.map((elem: number) => elem * 2);

const resultForEach: any = array.forEach((elem: number) => {
  return elem * 2;
});

console.log("For each: ", resultForEach);
console.log("Map: ", resultMap);
