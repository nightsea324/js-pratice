// promise練習
// 01 -
//const promise = new Promise((resolve, reject) => {
//console.log(1);
//resolve();
//console.log(2);
//});

//promise.then(() => {
//console.log(3);
//});
//console.log(4);

// 02 -
//const first = () =>
//new Promise((resolve, reject) => {
//console.log(3);
//let p = new Promise((resolve, reject) => {
//console.log(7);
//setTimeout(() => {
//console.log(5);
//resolve(6);
//}, 0);
//resolve(1);
//});
//resolve(2);
//p.then((arg) => {
//console.log(arg);
//});
//});

//first().then((arg) => {
//console.log(arg);
//});
//console.log(4);

// 03 -
//const promise1 = new Promise((resolve, reject) => {
//setTimeout(() => {
//resolve("succes");
//}, 1000);
//});
//const promise2 = promise1.then(() => {
//try {
//throw new Error("error!!!");
//} catch (err) {
//console.log(err);
//}
//});

//console.log("promise1", promise1);
//console.log("promise2", promise2);

//setTimeout(() => {
//console.log("promise1", promise1);
//console.log("promise2", promise2);
//}, 2000);
//
// 04 -
//const promise = new Promise((resolve, reject) => {
//resolve('success1');
//reject('error');
//resolve('success2');
//});

//promise
//.then(res => {
//console.log('then: ', res);
//})
//.catch(err => {
//console.log('catch: '), err;
//});
