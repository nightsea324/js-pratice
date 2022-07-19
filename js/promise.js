// promise練習

// promiseTest - promise接取練習
function promiseTest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (+new Date() % 8 === 0) {
                reject('server err');
            } else {
                resolve({ name: 'NightSea', position: 'front-end engineer' });
            }
        }, (+new Date() % 8) * 1000);
    });
}

// getData - 取得資料
let getData = () => {
    promiseTest()
        .then(list => {
            console.log(list);
            return {
                name: 'Jiar',
                position: 'front-end engineer',
            };
        })
        .catch(err => console.error(err))
        .then(list => {
            console.log(list);
        })
        .then(() => getData());
};
//getData();

// trafficLight - 紅綠燈
// red - 紅燈
function red() {
    console.log('red');
}
// green - 綠燈
function green() {
    console.log('green');
}
// yellow - 黃燈
function yellow() {
    console.log('yellow');
}
// error - 錯誤
function error() {
    console.log('error');
}

// setLight - 控制燈號
let setLight = (timer, color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timer > 3000) {
                return reject('reject');
            }
            return resolve(color());
        }, timer);
    });
};

// trafficLight -
let trafficLight = () => {
    Promise.resolve()
        .then(() => setLight(3000, red))
        .then(() => setLight(2000, green))
        .then(() => setLight(1000, yellow))
        .then(() => setLight(4000, error))
        .catch(err => console.error(err))
        .then(() => trafficLight());
};
//trafficLight();

// promiseAllTest - promiseAll測試
let promiseAllTest = async () => {
    let promise1 = Promise.resolve('success');
    let promise2 = Promise.reject('error');
    let promise3 = Promise.resolve({ success: 'success', value: 'promise' });

    try {
        let promiseAll1 = await Promise.all([promise1, promise2, promise3]);
        let promiseAll2 = await Promise.all([promise1, promise3]);
        console.log(promiseAll1);
        console.log(promiseAll2);
    } catch (error) {
        console.error(error);
    }

    let promiseAll2 = await Promise.all([promise1, promise3]);
    console.log(promiseAll2);
    console.log(promiseAll2[1].value);
};
//promiseAllTest();
