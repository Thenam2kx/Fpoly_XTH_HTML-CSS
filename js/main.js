function changeTime(){
    var date = new Date();
    var days = document.querySelector(".days");
    var hours = document.querySelector(".hours");
    var minutes = document.querySelector(".minutes");
    var seconds = document.querySelector(".seconds");
    days.innerHTML = date.getDate();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
}

setInterval(changeTime, 1000);

// ////////////////////////////

var direct_left = document.querySelector(".dirict_left");
var direct_right= document.querySelector(".dirict_right");
var listPr = document.querySelector(".listItems");
var items = document.querySelectorAll(".items");

// direct_left.addEventListener('click', turn_left);
// direct_right.addEventListener('click', turn_right);

var active = 0;

var x = items[active].offsetLeft;



// var index = -300;
// function turn_left(){
//     listPr.style.left = index + 'px';
//     index += -300;
//     console.log(x);
// }

// var index2 = 300;
// function turn_right(){
//     listPr.style.left = index2 + 'px';
//     index2 += 300;
// }
