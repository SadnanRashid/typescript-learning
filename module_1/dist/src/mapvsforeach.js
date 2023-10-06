"use strict";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultMap = array.map((elem) => elem * 2);
const resultForEach = array.forEach((elem) => {
    return elem * 2;
});
console.log("For each: ", resultForEach);
console.log("Map: ", resultMap);
