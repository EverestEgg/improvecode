

$(document).ready(function(){

    $(document).on("click", function () {
     console.log("Audio enabled by user click");
    }); //work around to have and interaction and allow spound

    var viewportX = $(window).width();
    var viewportY = $(window).height();
    var mouseX, mouseY;
    $(document).mousemove(function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        
// Wokr out mose positions as a percantage of viewport
        xportpercent = 100/viewportX;
        mouseXPercent = xportpercent*mouseX;

        yportpercent = 100/viewportY;
        mouseYpercent = yportpercent*mouseY;

        console.log(mouseXPercent, mouseYpercent);

    // turn the percantages into a sound
    var dash = document.getElementById("dash")
    var shout = document.getElementById("shout")
    var s10 = document.getElementById("soul10")
    var s4 = document.getElementById("soul4")
    var rumble = document.getElementById("rumble")
    var fan = document.getElementById("fan")
    var door = document.getElementById("door")
    var BNA = document.getElementById("BNA")


    //mouse x sounds
    if (mouseXPercent <20){
        shout.play();
        console.log("shout play")
    }
    if(mouseXPercent >20 && mouseXPercent< 40){
        dash.currentTime = 0;
        dash.play();
        console.log("dash played")
    };
    if (mouseXPercent >60 && mouseXPercent <80 ){
        s4.currentTime = 0;
        s4.play();
    }
    if(mouseXPercent > 80){
        rumble.play();
    }

    //mous y sounds
    if(mouseYpercent < 20){
        s10.play();
    }
    if(mouseYpercent >40 && mouseYpercent <60){
        fan.currentTime = 0;
        fan.play();
    }
    if(mouseYpercent >60 && mouseYpercent <80){
        door.play();
    }
    if(mouseYpercent >80){
        BNA.play();
    }
    }).mouseover(); // call the handler immediately
  
  }); 