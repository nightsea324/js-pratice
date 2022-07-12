// Level 1 ----------
// 使用for & while 印出1到9
console.log("print 1 to 9");
const input = 9;
console.log("use for");

// for -
for (let i = 0; i < input; i++) {
    console.log(i + 1);
}

// while -
console.log("use while");
let i = 0;
while (i < input) {
    console.log(i + 1);
    i++;
}

// print - 印出1到n
console.log("print = ", print(9));
function print(n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += `${i + 1}\n`;
    }
    return result;
}

// star - 印出n個*
console.log("star = ", star(9));
function star(n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += "*";
    }
    return result;
}

// isUpperCase - 測第一字母是否為大寫
console.log("isUpperCase");
console.log(isUpperCase("Avb"));
function isUpperCase(str) {
    let firstChar = str.charAt();

    return firstChar == firstChar.toUpperCase();
}

// position - 找第一個大寫字母位置
console.log("position");
console.log(position("aBcd"));
function position(str) {
    let array = str.split("");
    let result = "-1";

    array.forEach((val, index) => {
        if (val == val.toUpperCase()) {
            result = `${val} ${index}`;
        }
    });
    return result;
}

// findSmallCount - 回傳小於n總數量
console.log("findSmallCount");
console.log(findSmallCount([1, 2, 3, 4], 3));
function findSmallCount(array, n) {
    return array.filter((val) => val < n).length;
}

// findSmallTotal - 回傳小於n總和
console.log("findSmallTotal");
console.log(findSmallTotal([1, 2, 3, 4], 3));
function findSmallTotal(array, n) {
    return array
        .filter((val) => val < n)
        .reduce((total, val) => total + val, 0);
}

// findAllSmall - 回傳小於n陣列
console.log("findAllSmall");
console.log(findAllSmall([1, 2, 3, 4], 3));
function findAllSmall(array, n) {
    return array.filter((val) => val < n);
}

// sum - 計算陣列總和
console.log("sum");
console.log(sum([1, 2, 3, 4]));
function sum(array) {
    return array.reduce((total, val) => total + val, 0);
}

// Level 2 -----------
// printTriangle - 印三角形
console.log("printTriangle", printTriangle(5));
function printTriangle(n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += `${"*".repeat(i)}\n`;
    }
    for (let i = n; i > 0; i--) {
        result += `${"*".repeat(i)}\n`;
    }
    return result;
}

// fib - 費氏數列
console.log("fib", fib(10));
function fib(n) {
    if (n < 2) {
        return n;
    }
    // recursive
    return fib(n - 1) + fib(n - 2);
}

// recursive - 字串反轉
console.log("reverse", reverse("abcd"));
function reverse(str) {
    if (str === "") {
        return "";
    }
    // recursive
    return reverse(str.substr(1)) + str.charAt();
}
