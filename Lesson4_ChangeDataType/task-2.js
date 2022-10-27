console.log(Number("10"), typeof Number("10")); // явное
//1
console.log(+"50"); //Automatically
console.log(Number("50"), typeof Number("50"));
//2
console.log(Number("100")); //obvious
//3
console.log("" + 1); //Automatically
console.log(toString(1), typeof toString(1));
//4
console.log(String(1)); //Obvious
//5
console.log(Boolean(0)); //Obvious
//6
console.log(+"001"); //Automatically
console.log(Number("001"), typeof Number("001"));
//7
console.log(1 + ""); //Automatically
console.log(toString(1), typeof toString(1));
//8
console.log(Boolean(1)); //Obvious
//9
console.log(String(001)); //Obvious
//10
console.log(Number("Hello World")); //Obvious

console.log(toString(console.log));
console.log(Number(console.log));
console.log(Boolean(console.log));

console.log(toString({ name: "Maxim" }));
console.log(Number({ name: "Maxim" }));
console.log(Boolean({ name: "Maxim" }));

console.log(toString(Symbol("key")));
// console.log(Number(Symbol("key")));
console.log(Boolean(Symbol("key")));

console.log(toString(Number));
console.log(Number(Number));
console.log(Boolean(Number));

console.log(toString(""));
console.log(Number(""));
console.log(Boolean(""));

console.log(toString(0 - 10));
console.log(Number(0 - 10));
console.log(Boolean(0 - 10));

console.log(toString("-105"));
console.log(Number("-105"));
console.log(Boolean("-105"));

// 1
console.log(Number(" 1 2 3 4 5")); //Nan
// 2
console.log(Number("1234 5")); //Nan
// 3
console.log(Number("12345")); //12345
// 4
console.log(String(false)); //"false"
// 5
console.log(Boolean(0000000)); //false
// 6
console.log(Boolean(0.0000001)); //true
// 7
console.log(String(undefined)); //"undefined"
// 8
console.log(Number("100f")); //Nan
// 9
console.log(Number("100")); //100
// 10
console.log(Number("000001")); // 1
