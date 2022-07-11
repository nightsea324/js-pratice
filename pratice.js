// 使用for & while 印出1到9
console.log("print 1 to 9");
console.log("use for");

let input = 9;

// for
for (var i = 0; i < input; i++) {
    console.log(i + 1);
}

// while
console.log("use while");
var i = 0;
while (i < input) {
    console.log(i + 1);
    i++;
}

// print函式，印出1到n
console.log("print");
console.log(print(9));
function print(n) {
    let result = "";

    for (var i = 0; i < n; i++) {
        result += i + 1 + "\n";
    }
    return result;
}

// star函式，印出n個*
console.log("star");
console.log(star(9));
function star(n) {
    let result = "";

    for (var i = 0; i < n; i++) {
        result += "*";
    }
    return result;
}

// 測第一字母是否為大寫
console.log("isUpperCase");
console.log(isUpperCase("Avb"));
function isUpperCase(str) {
    let firstChar = str.charAt();

    if (firstChar == firstChar.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

// 找大寫字母位置
console.log("position");
console.log(position("aBcd"));
function position(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            return str.charAt(i) + " " + i;
        }
    }
    return "-1";
}

// 回傳小於n總數
console.log("findSmallCount");
console.log(findSmallCount([1, 2, 3, 4], 3));
function findSmallCount(array, n) {
    let count = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < n) {
            count++;
        }
    }
    return count;
}

// 回傳小於n總和
console.log("findSmallTotal");
console.log(findSmallTotal([1, 2, 3, 4], 3));
function findSmallTotal(array, n) {
    let result = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < n) {
            result += array[i];
        }
    }
    return result;
}

// 回傳小於n陣列
console.log("findSmallSmall");
console.log(findSmallSmall([1, 2, 3, 4], 3));
function findSmallSmall(array, n) {
    let result = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < n) {
            result.push(array[i]);
        }
    }
    return result;
}

// 計算陣列總和
console.log("sum");
console.log(sum([1, 2, 3, 4]));
function sum(array) {
    let result = 0;

    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
