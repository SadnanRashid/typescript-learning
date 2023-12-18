"use strict";
function add(...x) {
    let num = 0;
    return (num = x.map((e) => num + e));
}
console.log(add(2, 3, 4, 5));
