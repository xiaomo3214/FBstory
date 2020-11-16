/*var nextPage = $("#nextPage"), prePage = $("#prePage");
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






function flicker() {
  document.getElementById("flicker").style.display = "block";
}

function nonflicker() {
  document.getElementById("normal").style.display = "block";
  document.getElementById("flicker").style.display = "none";
}*/

/*2-1*/


function changepages() {
  document.getElementById("2-2").style.display = "block";
  document.getElementById("2-1").style.display = "none";
}

/*2-2*/ 
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
  document.getElementById("2-3").style.display = "block";
  document.getElementById("2-2").style.display = "none";
}
function changepagesback() {
  document.getElementById("2-1").style.display = "block";
  document.getElementById("2-2").style.display = "none";
}





/*2-3*/
function changepagesfour() {
  document.getElementById("2-4").style.display = "block";
  document.getElementById("2-3").style.display = "none";
}
function changepagesbacktwo() {
  document.getElementById("2-2").style.display = "block";
  document.getElementById("2-3").style.display = "none";
}


/*2-4*/
function changepagesfourone() {
    document.getElementById("2-4-1").style.display = "block";
    document.getElementById("2-4").style.display = "none";
  }
  function changepagesbackthree() {
    document.getElementById("2-3").style.display = "block";
    document.getElementById("2-4").style.display = "none";
  }

/*2-4-1*/
function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
async function delayedGreeting() {
  document.getElementById("kidturn").style.display = "block";
  document.getElementById("mobile").style.display = "none";
  await sleep(1500);
  document.getElementById("mobile").style.display = "block";
  document.getElementById("kidturn").style.display = "none";
}



function mobileclick() {
  delayedGreeting();
}
function changepagesfive() {
  document.getElementById("2-5").style.display = "block";
  document.getElementById("2-4-1").style.display = "none";
}
function changepagesbackfour() {
  document.getElementById("2-4").style.display = "block";
  document.getElementById("2-4-1").style.display = "none";
}







/*2-5*/

// window.onload = function() {
//   // find the element that you want to drag.
//   var box = document.getElementById('box');
  
//   /* listen to the touchMove event,
//   every time it fires, grab the location
//   of touch and assign it to box */
  
//   box.addEventListener('touchmove', function(e) {
//     // grab the location of touch
//     var touchLocation = e.targetTouches[0];
    
//     // assign box new coordinates based on the touch.
//     box.style.left = touchLocation.pageX + 'px';
//     box.style.top = touchLocation.pageY + 'px';
//   })
  
//   /* record the position of the touch
//   when released using touchend event.
//   This will be the drop position. */
  
//   box.addEventListener('touchend', function(e) {
//     // current box position.
//     var x = parseInt(box.style.left);
//     var y = parseInt(box.style.top);
//   })
  
// }


function changepagessix() {
  document.getElementById("2-6").style.display = "block";
  document.getElementById("2-5").style.display = "none";
}
function changepagesbackfourone() {
  document.getElementById("2-4-1").style.display = "block";
  document.getElementById("2-5").style.display = "none";
}




/*2-6*/

async function capsuleclick() {
    document.getElementById("buttoncapsulespeakone").style.display = "block";
    document.getElementById("buttoncapsule").style.display = "none";
    await sleep(5000);
    document.getElementById("buttoncapsule").style.display = "block";
    document.getElementById("buttoncapsulespeakone").style.display = "none";
}

function buttoncapsuleclick() {
    capsuleclick();
}

function changepagesseven() {
  document.getElementById("2-7").style.display = "block";
  document.getElementById("2-6").style.display = "none";
}
function changepagesbackfive() {
  document.getElementById("2-5").style.display = "block";
  document.getElementById("2-6").style.display = "none";
}


