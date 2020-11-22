/*cover*/
var sec = 0, num = 5;
Timer();
function Timer(){
  if(sec<num || document.readyState != "complete") {
    setTimeout("subSomething();",1000);
    setTimeout("Timer();",1000); 
  }
  sec++;
}
// document.onreadystatechange = subSomething;
function subSomething(){
  if(document.readyState == "complete" && sec >= num){ 
    document.getElementById("cover").style.display = "none";
    document.getElementById("4-1").style.display = "block";
  }
}

/*4-1*/
function flicker() {
  document.getElementById("flicker").style.display = "block";
}

function nonflicker() {
  document.getElementById("normal").style.display = "block";
  document.getElementById("flicker").style.display = "none";
}

function changepages() {
  document.getElementById("4-2").style.display = "block";
  document.getElementById("4-1").style.display = "none";
}

$(document).ready(function() {

  var audio  = new Audio("sound/bell.mp3");
  var audio2 = new Audio('')

  $(".z1").mousedown(function() {
    audio2.load();
    audio2.play();
  });

  $(".z1").mouseup(function() {
    audio.load();
    audio.play();
  });
});



/*4-2*/ 
var l=-0.2; var alplight=1.0;
function transparentlight(){
    alplight=alplight+l;
    document.getElementById('light').style.opacity= alplight;

    if(alplight < 0.0){
      document.getElementById("light1").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
   var button = document.getElementById('light');
   var one = document.getElementById('flowerone');
   var two = document.getElementById('flowertwo');
   var three = document.getElementById('flowerthree');
   var four = document.getElementById('flowerfour');
   var five = document.getElementById('flowerfive');
   var count = 0;

   button.addEventListener('click', function(e) {
       e.preventDefault();
       count++;

       if(count == 1){
           flowerone.style.display = 'block';
       }
       if(count == 2){
           flowertwo.style.display = 'block';
       }
       if(count == 3){
           flowerthree.style.display = 'block';
       }
       if(count == 4){
           flowerfour.style.display = 'block';
       }
       if(count == 5){
           flowerfive.style.display = 'block';
       }
    }, false);
});

function changepagesthree() {
  document.getElementById("4-3").style.display = "block";
  document.getElementById("4-2").style.display = "none";
}
function changepagesback() {
  document.getElementById("4-1").style.display = "block";
  document.getElementById("4-2").style.display = "none";
}





/*4-3*/
function changepagesfour() {
  document.getElementById("4-4").style.display = "block";
  document.getElementById("4-3").style.display = "none";
}
function changepagesbacktwo() {
  document.getElementById("4-2").style.display = "block";
  document.getElementById("4-3").style.display = "none";
}


/*4-4*/
function changepagesfive() {
    document.getElementById("4-5").style.display = "block";
    document.getElementById("4-4").style.display = "none";
  }
function changepagesbackthree() {
    document.getElementById("4-3").style.display = "block";
    document.getElementById("4-4").style.display = "none";
  }


/*4-5*/

window.onload = function() {
  // find the element that you want to drag.
  var box = document.getElementById('box');
  
  /* listen to the touchMove event,
  every time it fires, grab the location
  of touch and assign it to box */
  
  box.addEventListener('touchmove', function(e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  })
  
  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. */
  
  box.addEventListener('touchend', function(e) {
    // current box position.
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  })
  
}


function changepagessix() {
  document.getElementById("4-6").style.display = "block";
  document.getElementById("4-5").style.display = "none";
}
function changepagesbackfourone() {
  document.getElementById("4-4").style.display = "block";
  document.getElementById("4-5").style.display = "none";
}



/*4-6*/
function changepagesfive() {
  document.getElementById("4-7").style.display = "block";
  document.getElementById("4-6").style.display = "none";
}
function changepagesbackthree() {
  document.getElementById("4-5").style.display = "block";
  document.getElementById("4-6").style.display = "none";
}

/*4-7*/
function changepagesfive() {
  document.getElementById("4-8").style.display = "block";
  document.getElementById("4-7").style.display = "none";
}
function changepagesbackthree() {
  document.getElementById("4-6").style.display = "block";
  document.getElementById("4-7").style.display = "none";
}

/*4-8*/
function changepagesfive() {
  document.getElementById("4-9").style.display = "block";
  document.getElementById("4-8").style.display = "none";
}
function changepagesbackthree() {
  document.getElementById("4-7").style.display = "block";
  document.getElementById("4-8").style.display = "none";
}

/*4-9*/
function changepagesfive() {
  document.getElementById("4-10").style.display = "block";
  document.getElementById("4-9").style.display = "none";
}
function changepagesbackthree() {
  document.getElementById("4-8").style.display = "block";
  document.getElementById("4-9").style.display = "none";
}

/*4-10*/
function changepagesfive() {
  document.getElementById("4-11").style.display = "block";
  document.getElementById("4-10").style.display = "none";
}
function changepagesbackthree() {
  document.getElementById("4-9").style.display = "block";
  document.getElementById("4-10").style.display = "none";
}

/*4-11*/
function changepagesfive() {
  document.getElementById("4-12").style.display = "block";
  document.getElementById("4-11").style.display = "none";
}
function changepagesbackthree() {
  document.getElementById("4-10").style.display = "block";
  document.getElementById("4-11").style.display = "none";
}