'use strict'

const countdowndate = new Date("Aug 12, 2022 12:00:00 GMT+2")
const _ = setInterval(() => {
    const currentdate = new Date().getTime();
    const diff = countdowndate - currentdate

    // calculate the days, hourse, minutes and seconds
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // the actual output 
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    
    diff < 0 ? clearInterval(_) : document.getElementById("countdown").innerHTML = "Released!";
})
