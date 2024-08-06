const regx=/^[A-Za-z0-9]at/


console.log(regx.test("cat eat fish"));
console.log(regx.test("rat eat fish"));
console.log(regx.test("bat eat fish"));

const regxx=/fish*/


console.log(regxx.test("cat eat fishessssssssssssssssss"));
console.log(regxx.test("rat eat fish"));
console.log(regxx.test("bat eat fish"));


const num=/^[6-9]\d{9}/

console.log(num.test("9785861230"));
console.log(num.test("6785861230"));
console.log(num.test("6785861230"));