import { sum, product, sumOdds } from "./operations.js";


let values = [1, 2, 3];
console.log(sum(values));
console.log(6);

values = [2, 2, 2];
console.log(sum(values));
console.log(6);

values = [1, 2, 3, 4, 5, 6];
console.log(sum(values));
console.log(21);

values = [1, 2, 3];
console.log(sumOdds(values));
console.log(4);

values = [2, 2, 2];
console.log(sumOdds(values));
console.log(0);

values = [1, 2, 3, 4, 5, 6];
console.log(sumOdds(values));
console.log(9);

values = [1, 2, 3];
console.log(product(values));
console.log(6);

values = [2, 2, 2];
console.log(product(values));
console.log(8);

values = [1, 2, 3, 4, 5, 6];
console.log(product(values));
console.log(720);