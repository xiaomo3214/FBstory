/*function flicker() {
  document.getElementById("flicker").style.display = "block";
}

function nonflicker() {
  document.getElementById("normal").style.display = "block";
  document.getElementById("flicker").style.display = "none";
}*/

/*cover*/
var sec = 0, num = 10;
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
    document.getElementById("2-1").style.display = "block";
  }
}

/*2-1  NEW*/
var touchTime = 0, stopAni = 0, playAniTime = 100; //newupdate
var bg = $(".starry");  //背景
var aa = $(".view");
var obj = document.querySelector(".view");  //控制觸控
var touchSpeed = 1000;
var startX1 = endX1 = 0; //newupdate

if(obj) {
  wetherScroll();
  mouseEvent()
}

//滑鼠
function mouseEvent(){
  window.addEventListener('mousedown',function(event){
      event.preventDefault(); //防止預設事件
  }, {passive: false});

  obj.addEventListener('mousedown',function(event){
      event.preventDefault();
      // mouse = true;
      if(sec >= num) {
        //newupdate
        touchTime++;
        if(touchTime == 1){
            ani = setInterval(animator,10);
        }
      }
      //newupdate
      startX1 = event.screenX;
  }, false);
  obj.addEventListener('mousemove',function(event){
      event.preventDefault();
      var pos1 = bg.offset();
      endX1 = event.screenX;  //newupdate
      var distanceX = (endX1 - startX1);  //newupdate
      if(startX1!=Math.abs(distanceX) && event.buttons == 1 && stopAni>playAniTime){  //newupdate
              if(distanceX<0){
                  if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)>(-bg.width() + aa.width())
                    && bg.position().top+distanceX*((bg.height()-aa.height())/touchSpeed)>(-bg.height() + aa.height())){
                      bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                      bg.offset({top:pos1.top+distanceX*((bg.height()+aa.height())/touchSpeed)});
                    }
              }
              else{
                  if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)<0){
                      bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                      bg.offset({top:pos1.top+distanceX*((bg.height()+aa.height())/touchSpeed)});
                    }
              }
          startX1 = endX1;  //newupdate
      }
  });
  obj.addEventListener('mouseup',function(event){
      event.preventDefault();
      // mouse = false;
      startX1 = endX1 = 0;  //newupdate
  }, false);
}

//觸控
function wetherScroll(){
  window.addEventListener('touchmove',function(event){
      event.preventDefault(); //防止手機預設觸控事件
  }, {passive: false});

  obj.addEventListener('touchstart',function(event){
      // event.preventDefault();
      var touch = event.targetTouches[0];
      //newupdate
      if(sec >= num) {
        touchTime++;
        if(touchTime == 1){
            ani = setInterval(animator,10);
        }
      }
      //newupdate
      startX1 = touch.screenX;
  }, false);
  obj.addEventListener('touchmove',function(event){
      // event.preventDefault();
      var pos1 = bg.offset();
      var touch = event.targetTouches[0];
      endX1 = touch.screenX;  //newupdate
      var distanceX = (endX1 - startX1);  //newupdate
      if(startX1!=Math.abs(distanceX) && stopAni>playAniTime){  //newupdate
        if(distanceX<0){
          if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)>(-bg.width() + aa.width())
            && bg.position().top+distanceX*((bg.height()-aa.height())/touchSpeed)>(-bg.height() + aa.height())){
            bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
            bg.offset({top:pos1.top+distanceX*((bg.height()+aa.height())/touchSpeed)});
          }
        }
        else{
          if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)<0){
            bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
            bg.offset({top:pos1.top+distanceX*((bg.height()+aa.height())/touchSpeed)});
          }
        }
        startX1 = endX1; //newupdate
      }
  });
  obj.addEventListener('touchend',function(event){
      // event.preventDefault();
      startX1 = endX1 = 0; //newupdate
  }, false);
}

//newupdate
function animator(){
  if(stopAni>playAniTime) clearInterval(ani);
  var pos1 = bg.offset();
  bg.offset({left:pos1.left-((bg.width()-aa.width())/touchSpeed)});
  bg.offset({top:pos1.top-((bg.height()+aa.height())/touchSpeed)});
  stopAni++;
}
//newupdate

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





/*2-3  NEW*/
var hand = $(".movinghand");
var startX3 = startY3 = endX3 = endY3 = 0;
var mouse3 = false;
var movehand = document.querySelector("#movinghand");  //newupdate

if(hand){
  mouseHand();
  touchHand();
}

function mouseHand(){

  //newupdate  window裡的mouse3拿掉 新增movehand的mousedown函式
  window.addEventListener('mousedown',function(event){
    event.preventDefault(); //防止預設觸控事件
    startX3 = event.screenX;
    startY3 = event.screenY;
  }, {passive: false});

  movehand.addEventListener('mousedown',function(event){
    event.preventDefault(); //防止預設觸控事件
    mouse3=true;
  }, {passive: false});
  //newupdate

  window.addEventListener('mousemove',function(event){
    // event.preventDefault();
    var pos1 = hand.offset();
    // var overlap =isOverlap(".range",".movinghand");
    endX3 = event.screenX;
    endY3 = event.screenY;
    var distanceX = (endX3 - startX3);
    var distanceY = (endY3 - startY3);
    if(mouse3 && (startX3!=Math.abs(distanceX) || startY3!=Math.abs(distanceY)) && event.buttons == 1){
      if(distanceX < 0 && hand.position().left + distanceX > -35){
        hand.offset({left:pos1.left+distanceX});
      }
      if(distanceX > 0 && hand.position().left + distanceX < 10){
        hand.offset({left:pos1.left+distanceX});
      }
      if(distanceY < 0 && hand.position().top + distanceY > -10){
        hand.offset({top:pos1.top+distanceY});
      }
      if(distanceY > 0 && hand.position().top + distanceY < 2){
        hand.offset({top:pos1.top+distanceY});
      }
      startX3 = endX3;
      startY3 = endY3;
    }
  });
  window.addEventListener('mouseup',function(event){
    // event.preventDefault();
    mouse3 = false;
    startX3 = startY3 = endX3 = endY3 = 0;
  }, false);
}


function touchHand(){

  //newupdate 所有的window改成movehand
  movehand.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX_5 = touch.screenX;
    startY_5 = touch.screenY;
  }, false);
  movehand.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = hand.offset();
    endX3 = touch.screenX;
    endY3 = touch.screenY;
    var distanceX = (endX3 - startX3);
    var distanceY = (endY3 - startY3);
    if(startX3!=Math.abs(distanceX) || startY3!=Math.abs(distanceY)){
      if(distanceX < 0 && hand.position().left + distanceX > -35){
        hand.offset({left:pos1.left+distanceX});
      }
      if(distanceX > 0 && hand.position().left + distanceX < 10){
        hand.offset({left:pos1.left+distanceX});
      }
      if(distanceY < 0 && hand.position().top + distanceY > -10){
        hand.offset({top:pos1.top+distanceY});
      }
      if(distanceY > 0 && hand.position().top + distanceY < 2){
        hand.offset({top:pos1.top+distanceY});
      }
      startX3 = endX3;
      startY3 = endY3;
    }
  });
  movehand.addEventListener('touchend',function(event){
    startX3 = startY3 = endX3 = endY3 = 0;
  }, false);
  //newupdate
}


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


