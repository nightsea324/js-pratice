// Level 1 ----------
// 使用for & while 印出1到9
console.log("print 1 to 9");
console.log("use for");
const input = 9;

// for
for (let i = 0; i < input; i++) {
    console.log(i + 1);
}

// while
console.log("use while");
let i = 0;
while (i < input) {
    console.log(i + 1);
    i++;
}

// print函式，印出1到n
console.log("print");
console.log(print(9));
function print(n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += `${i + 1}\n`;
    }
    return result;
}

// star函式，印出n個*
console.log("star");
console.log(star(9));
function star(n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += "*";
    }
    return result;
}

// 測第一字母是否為大寫
console.log("isUpperCase");
console.log(isUpperCase("Avb"));
function isUpperCase(str) {
    let firstChar = str.charAt();

    return firstChar == firstChar.toUpperCase();
}

// 找大寫字母位置
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

// 回傳小於n總數量
console.log("findSmallCount");
console.log(findSmallCount([1, 2, 3, 4], 3));
function findSmallCount(array, n) {
    return array.filter((val) => {
        return val < n;
    }).length;
}

// 回傳小於n總和
console.log("findSmallTotal");
console.log(findSmallTotal([1, 2, 3, 4], 3));
function findSmallTotal(array, n) {
    return array
        .filter((val) => {
            return val < n;
        })
        .reduce((total, val) => {
            return total + val;
        }, 0);
}

// 回傳小於n陣列
console.log("findAllSmall");
console.log(findAllSmall([1, 2, 3, 4], 3));
function findAllSmall(array, n) {
    return array.filter((val) => {
        return val < n;
    });
}

// 計算陣列總和
console.log("sum");
console.log(sum([1, 2, 3, 4]));
function sum(array) {
    return array.reduce((total, val) => {
        return total + val;
    }, 0);
}
