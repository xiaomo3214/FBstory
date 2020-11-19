var nextPage = $("#nextPage"), prePage = $("#prePage");
var nextButton = 
    ["images/Page_change/Page_next/Page_next_white/nextpage_white_00000.png",
     "images/age_change/Page_next/Page_next_white/nextpage_white_00001.png",
     "images/Page_change/Page_next/Page_next_white/nextpage_white_00002.png",
     "images/Page_change/Page_next/Page_next_white/nextpage_white_00003.png"];
var preButton = 
    ["images/Page_change/Page_previous/preced_white/previouspage_white_01.png",
     "images/Page_change/Page_previous/preced_white/previouspage_white_02.png"]
var next_size = nextButton.length, pre_size = preButton.length;
var next = 0, pre = 0;

$(window).ready(
  function(){
      chImg();
  }
);

function getWidth(event){
  var dWidth = $(window).width()-120;
  if(isPhone){
      console.log("Phone")
      nextPage.width("80px");
      nextPage.height("78px");
      prePage.width("80px");
      prePage.height("78px");
  }else if(navigator.userAgent.match(/iPad/i)){
      console.log("iPad");
      nextPage.width("60px");
      nextPage.height("58px");
      prePage.width("60px");
      prePage.height("58px");
  }else{
      console.log("Not Phone");
      nextPage.width("40px");
      nextPage.height("38px");
      prePage.width("40px");
      prePage.height("38px");
  }
}

function chImg(){
  document.getElementById("nextPage").src = nextButton[next];
  document.getElementById("prePage").src = preButton[pre];
  next++;
  pre++;
  if (next >= next_size) next = 0;
  if(pre >= pre_size) pre = 0;
  setTimeout("chImg()",300);
}





/*3-1*/
function flicker() {
  document.getElementById("flicker").style.display = "block";
}

function nonflicker() {
  document.getElementById("normal").style.display = "block";
  document.getElementById("flicker").style.display = "none";
}

function changepages() {
  document.getElementById("3-2").style.display = "block";
  document.getElementById("3-1").style.display = "none";
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



/*3-2*/ 
function changepagesthree() {
  document.getElementById("3-3").style.display = "block";
  document.getElementById("3-2").style.display = "none";
}
function changepagesback() {
  document.getElementById("3-1").style.display = "block";
  document.getElementById("3-2").style.display = "none";
}





/*3-3*/
function bluetowhite(){
  document.getElementById("blueone").style.display = "none";
  document.getElementById("whiteone").style.display = "block";
}
function whitetoblue(){
  document.getElementById("blueone").style.display = "block";
  document.getElementById("whiteone").style.display = "none";
}

function changepagesfour() {
  document.getElementById("3-4").style.display = "block";
  document.getElementById("3-3").style.display = "none";
}
function changepagesbacktwo() {
  document.getElementById("3-2").style.display = "block";
  document.getElementById("3-3").style.display = "none";
}


/*3-4*/
function changepagesfive() {
    document.getElementById("3-5").style.display = "block";
    document.getElementById("3-4").style.display = "none";
  }
  function changepagesbackthree() {
    document.getElementById("3-3").style.display = "block";
    document.getElementById("3-4").style.display = "none";
  }


/*3-5*/

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
  document.getElementById("3-6").style.display = "block";
  document.getElementById("3-5").style.display = "none";
}
function changepagesbackfourone() {
  document.getElementById("3-4").style.display = "block";
  document.getElementById("3-5").style.display = "none";
}




