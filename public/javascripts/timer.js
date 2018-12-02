let timers_array = [];
let starting_time = "05:00"

function setup() {
    let timers = document.querySelectorAll(".timer")
    for(const timer of timers) {
        timer.textContent = starting_time;
    }
}

function startTimer(duration,display) {
    let timer = duration, minutes, seconds;
    let index = display.id.slice(-1) - 1;

    timers_array[index] = 
        (setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;
        
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000)
    );
}

function stopTimer(id) {
    let display = document.getElementById(id);
    let index = display.id.slice(-1) -1;
    clearInterval(timers_array[index]);

}


function converttime(value) {
    let split = value.split(":");
    let total = parseInt(split[0]) * 60 + parseInt(split[1])
    return total;
}

function button_click(id) {
    let object = document.getElementById(id);
    console.log(object,id)
    let timertime = converttime(object.textContent)
    startTimer(timertime,object);
};


setup();

document.getElementById("button1").addEventListener("click",function() {button_click("timer1")});
document.getElementById("button1_stop").addEventListener("click",function() {stopTimer("timer1")});
document.getElementById("button2").addEventListener("click",function() {button_click("timer2")});
document.getElementById("button2_stop").addEventListener("click",function() {stopTimer("timer2")});
document.getElementById("button3").addEventListener("click",function() {button_click("timer3")});
document.getElementById("button3_stop").addEventListener("click",function() {stopTimer("timer3")});
document.getElementById("button4").addEventListener("click",function() {button_click("timer4")});
document.getElementById("button4_stop").addEventListener("click",function() {stopTimer("timer4")});
document.getElementById("button5").addEventListener("click",function() {button_click("timer5")});
document.getElementById("button5_stop").addEventListener("click",function() {stopTimer("timer5")});
document.getElementById("button6").addEventListener("click",function() {button_click("timer6")});
document.getElementById("button6_stop").addEventListener("click",function() {stopTimer("timer6")});


document.getElementById("reset").addEventListener("click",function() {setup();})


