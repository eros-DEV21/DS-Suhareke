var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var showCurrentTime = new Date();

    var hours = CurrentTime.getHours();
    var minutes = CurrentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian="AM";
    if(hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours + ":"+ minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();

};

var oneSecond = 1000;

setInterval(showCurrentTime, oneSecond);

function changeImage (){
    var time = new Date().getHours();
    console.log(time);

    var image = "ds_clock.png";
    var imageHTML= document.getElementById("timeImage");

    if(time == wakeuptime){
        images = "morning.gif";
        console.log("morning");
    }

    else if(time == dstime){
        images = "class.gif";
    }
    else if(time == SleepTime){
        images = "mogjt.gif";
    }
    imagesHTML.src = image;
    console.log(imageHTML.src);

}

function updateClock(){
    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
        
        wakeuptime=wakeUpTimeSelector.value; 

var dsTimeSelector = document.getElementById('dsTimeSelector');
dstime = dsTimeSelector.value;

var sleepTimeSelector=document.getElementById('sleepTimeSelector');
}
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click",updateClock);