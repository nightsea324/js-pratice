// Level 1 ----------
// 使用for & while 印出1到9
console.log('print 1 to 9');
const input = 9;
console.log('use for');

// for -
for (let i = 0; i < input; i++) {
    console.log(i + 1);
}

// while -
console.log('use while');
let i = 0;
while (i < input) {
    console.log(i + 1);
    i++;
}

// print - 印出1到n
console.log('print = ', print(9));
function print(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += `${i + 1}\n`;
    }
    return result;
}

// star - 印出n個*
console.log('star = ', star(9));
function star(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += '*';
    }
    return result;
}

// isUpperCase - 測第一字母是否為大寫
console.log('isUpperCase = ', isUpperCase('Avb'));
function isUpperCase(str) {
    let firstChar = str.charAt();

    return firstChar == firstChar.toUpperCase();
}

// position - 找第一個大寫字母位置
console.log('position = ', position('aBcd'));
function position(str) {
    let array = str.split('');
    let result = '-1';

    array.forEach((val, index) => {
        if (val == val.toUpperCase()) {
            result = `${val} ${index}`;
        }
    });
    return result;
}

// findSmallCount - 回傳小於n總數量
console.log('findSmallCount = ', findSmallCount([1, 2, 3, 4], 3));
function findSmallCount(array, n) {
    return array.filter(val => val < n).length;
}

// findSmallTotal - 回傳小於n總和
console.log('findSmallTotal = ', findSmallTotal([1, 2, 3, 4], 3));
function findSmallTotal(array, n) {
    return array.filter(val => val < n).reduce((total, val) => total + val, 0);
}

// findAllSmall - 回傳小於n陣列
console.log('findAllSmall = ', findAllSmall([1, 2, 3, 4], 3));
function findAllSmall(array, n) {
    return array.filter(val => val < n);
}

// sum - 計算陣列總和
console.log('sum = ', sum([1, 2, 3, 4]));
function sum(array) {
    return array.reduce((total, val) => total + val, 0);
}

// Level 2 -----------
// printTriangle - 印三角形
console.log('printTriangle = ', printTriangle(5));
function printTriangle(n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += `${'*'.repeat(i)}\n`;
    }
    for (let i = n; i > 0; i--) {
        result += `${'*'.repeat(i)}\n`;
    }
    return result;
}

// fib - 費氏數列
console.log('fib = ', fib(10));
function fib(n) {
    if (n < 2) {
        return n;
    }
    // recursive
    return fib(n - 1) + fib(n - 2);
}

// recursive - 字串反轉
console.log('reverse = ', reverse('abcd'));
function reverse(str) {
    if (str === '') {
        return '';
    }
    // recursive
    return reverse(str.substr(1)) + str.charAt();
}

// swap - 大小寫互換
console.log('swap = ', swap('abCD'));
function swap(str) {
    return str
        .split('')
        .map(val =>
            val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
        )
        .join('');
}

// getMin - 取最小值
console.log('getMin = ', getMin([-1, 1, 2, 3, -3, 4]));
function getMin(array) {
    return array.reduce(
        (min, val) => (val < min ? (min = val) : min),
        array[0]
    );
}

// getNMin - 取第n個最小值
console.log('getNMin = ', getNMin([-1, 1, 2, 3, -3, 4], 3));
function getNMin(array, n) {
    for (let index = 0; index < array.length; index++) {
        for (let scanIndex = 0; scanIndex < array.length; scanIndex++) {
            if (array[index] < array[scanIndex]) {
                [array[index], array[scanIndex]] = [
                    array[scanIndex],
                    array[index],
                ];
            }
        }
    }
    return array[n];
}

// useSort - 排序
console.log('getSort = ', getSort([-1, 1, 2, 3, -3, 4]));
function getSort(array) {
    return array.sort(asc);
}

// asc - 排序規則(升冪)
function asc(a, b) {
    return a - b;
}

// desc - 排序規則(降冪)
function desc(a, b) {
    return a - b;
}

// Level 3 -----------
// isPrime - 判斷質數
console.log('isPrime = ', isPrime(13));
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}
