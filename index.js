let countDownDate = new Date();
countDownDate.setSeconds(countDownDate.getSeconds() + 12); // 10 seconds from now
let intervalId = setInterval(() => {
    let now = new Date();
    let distance = countDownDate.getTime() - now.getTime();
    if (distance <= 0) {
        console.log("Countdown finished!");
        clearInterval(intervalId);
    }
    else {
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log(`Time left: ${seconds}s`);
    }
}, 1000);
export {};
// let date_ob = new Date();
// // current date
// // adjust 0 before single digit date
// let date = ("0" + date_ob.getDate()).slice(-2);
// // current month
// let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// // current year
// let year = date_ob.getFullYear();
// // current hours
// let hours = date_ob.getHours();
// // current minutes
// let minutes = date_ob.getMinutes();
// // current seconds
// let seconds = date_ob.getSeconds();
// // prints date in YYYY-MM-DD format
// console.log(year + "-" + month + "-" + date);
// // prints date & time in YYYY-MM-DD HH:MM:SS format
// console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
// // prints time in HH:MM format
// console.log(hours + ":" + minutes);
// let ts = Date.now();
// // timestamp in milliseconds
// console.log(ts);
// // timestamp in seconds
// console.log(Math.floor(ts/1000));
// // current timestamp in milliseconds
// let ts = Date.now();
// let date_ob = new Date(ts);
// let date = date_ob.getDate();
// let month = date_ob.getMonth() + 1;
// let year = date_ob.getFullYear();
// // prints date & time in YYYY-MM-DD format
// console.log(year + "-" + month + "-" + date);
