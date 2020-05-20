var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var messageText;

var updateClock = function()

{

var timeEventJS = document.getElementById('timeEvent');
var lolcatImage = document.getElementById('lolcatImage');
var lolcat = document.getElementById("lolcat");
var image = "img/mustache-gwen.jpg";

if (time == partyTime){
    image = "img/party-time.jpg";
    messageText = "PARTEE TIME!!";

} else if (time == napTime) {
    image = "img/nap-time.jpg";
    messageText = "NAP TIME... zzz";

} else if (time == lunchTime) {
    image = "img/nom-nom-time.jpg";
    messageText = "NOM NOM NOM TIME!!";

} else if (time == wakeupTime) {
    image = "img/get-up.jpg";
    messageText = "TIME TO GETTUP.";

} else if (time < noon) {
    messageText = "GOOD MORNING!'";

} else if (time > evening) {
    messageText = "GOOD EVENING!";
    
} else {
    messageText = "GOOD AFTERNOON!";
}

timeEventJS.innerText = messageText;
lolcat.src = image;



var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

showCurrentTime();

};
updateClock();
var oneSecond= 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {


  if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY OVER."; // text in the button
      partyTimeButton.style.backgroundColor = "black";// color of the button
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!"; // text in the button
      partyTimeButton.style.backgroundColor = "#BF4B60"; // color of the button
   }

};

partyTimeButton.addEventListener("click", partyEvent);
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeupTimeSelector = document.getElementById("wakeUpTimeSelector");

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeupTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeupTimeSelector.addEventListener('change', wakeUpEvent);
