// will not sort perfectly because it will compare the UTF-16 value of each char sequence after converting it to the strign
const basket = [2, 43, 4, 32, 1, -1, 200];
console.log(basket.sort());

const names = ["Raiyan", "Uday", "Nabil", "Adam", "Jhon", "Sera"];
console.log(names.sort());
const newArr = names.sort(function(a, b){
    return a.localeCompare(b);
});

console.log(newArr);