/*function flicker() {
  document.getElementById("flicker").style.display = "block";
}

function nonflicker() {
  document.getElementById("normal").style.display = "block";
  document.getElementById("flicker").style.display = "none";
}*/

/*Music and Sound*/
var audiobgm = document.getElementById("bgm") 
// var soundnextpage1 = new Audio("Music/Ch2_02_SE02_NextPage.mp3")
// var soundnextpage2 = new Audio("Music/Ch2_02_SE02_NextPage.mp3")
// var soundnextpage3 = new Audio("Music/Ch2_02_SE02_NextPage.mp3")
// var soundnextpage4 = new Audio("Music/Ch2_02_SE02_NextPage.mp3")
// var soundnextpage4_1 = new Audio("Music/Ch2_02_SE02_NextPage.mp3")
// var soundnextpage5 = new Audio("Music/Ch2_02_SE02_NextPage.mp3")
var soundnextpage6 = new Audio("Music/Ch2_NextPage_New.mp3")
/*2-2*/
var soundmsg1 = new Audio("Music/Ch2_02_SE01_MsgSound.mp3")
/*2-3*/
var soundglass = new Audio("Music/Ch2_03_SE01_Glass.mp3")
/*2-4*/
var soundmsg2 = new Audio("Music/Ch2_04_SE01_MsgSound.mp3")
/*2-4-1*/
var soundnotification = new Audio("Music/Ch2_04-1_SE01_Notification.mp3")
/*2-5*/
var soundswitchon = new Audio("Music/Ch2_05_SE01_SwitchOn.mp3")
var soundswitchoff = new Audio("Music/Ch2_05_SE02_SwitchOff.mp3")
/*2-6*/
var soundmsg3 = new Audio("Music/Ch2_06_SE01_MsgSound.mp3")


function playmusic(){
  audiobgm.play();
}

/*cover*/
var sec = 0, num = 10;
Timer();
function Timer(){
  if(sec<num || document.readyState != "complete") setTimeout("subSomething();Timer();",1000); 
  sec++;
}
//document.onreadystatechange = subSomething;
function subSomething(){
  if(document.readyState == "complete" && sec >= num){ 
    document.getElementById("cover").style.display = "none";
    document.getElementById("2-1").style.display = "block";
    document.getElementById("nextpage1").style.display = "none";
    document.getElementById("nextpage2").style.display = "none";
    document.getElementById("nextpage3").style.display = "none";
    document.getElementById("nextpage4-1").style.display = "none";
    document.getElementById("nextpage5").style.display = "none";
    document.getElementById("nextpage6").style.display = "none";
  }
}

/*2-1*/
var touchTime = 0, stopAni = 0, playAniTime = 100; //newupdate
var bg = $(".starry");  //背景
var aa = $(".view");
var obj = document.querySelector(".view");  //控制觸控
var touchSpeed = 1000;
var startX1 = endX1 = 0; //newupdate
var scrollEnd = 0;

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
                  if(bg.position().top+distanceX*((bg.height()-aa.height())/touchSpeed)<=(-bg.height() + aa.height())){
                      // nextPage.style.display = "";
                      scrollEnd++;
                      if(scrollEnd == 1) document.getElementById("nextpage1").style.display = "block";
                  }
                  else{
                      // nextPage.style.display = "none";
                      if(scrollEnd == 0) document.getElementById("nextpage1").style.display = "none";
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
          if(bg.position().top+distanceX*((bg.height()-aa.height())/touchSpeed)<=(-bg.height() + aa.height())){
                // nextPage.style.display = "";
                scrollEnd++;
                if(scrollEnd == 1) document.getElementById("nextpage1").style.display = "block";
          }
          else{
              // nextPage.style.display = "none";
              if(scrollEnd == 0) document.getElementById("nextpage1").style.display = "none";
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
  audiobgm.src = 'Music/BGM_CH2_02.mp3';
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
           document.getElementById("nextpage2").style.display = "block";
       }
    }, false);
});

function changepagesthree() {
  document.getElementById("2-3").style.display = "block";
  document.getElementById("2-2").style.display = "none";
  nextthree();
}
function changepagesback() {
  audiobgm.src = 'Music/BGM_CH2_01.mp3';
  document.getElementById("2-1").style.display = "block";
  document.getElementById("2-2").style.display = "none";
}





/*2-3*/
var nexttime3 = 0, stoptime = 5;
function nextthree(){
  // console.log(nexttime);
  nexttime3++;
  if(nexttime3 == stoptime-1) document.getElementById("nextpage3").style.display = "block";
  if(nexttime3 < stoptime) setTimeout("nextthree();",1000);
}

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
      if(distanceX < 0 && hand.position().left + distanceX > -20){
        hand.offset({left:pos1.left+distanceX});
      }
      if(distanceX > 0 && hand.position().left + distanceX < 0){
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

function footprintone() {
  soundmsg2.play();
  document.getElementById('footprintone').src="images/Chap2/2-4/footprints/trigger/footprint01_tri.png";
  document.getElementById('footprinttwo').style.display = "block";
}
function footprinttwo() {
  soundmsg2.play();
  document.getElementById('footprinttwo').src="images/Chap2/2-4/footprints/trigger/footprint02_tri.png";
  document.getElementById('footprintthreereddot').style.display = "block";
}
/*reddot*/
function footprintthreereddot() {
  soundmsg2.play();
  document.getElementById('footprintthreereddot').src="images/Chap2/2-4/footprints/trigger/footprint03_reddot_tri.png";
  document.getElementById('footprintfourreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-90px";
}
/*reddot*/
function footprintfourreddot() {
  soundmsg2.play();
  document.getElementById('footprintfourreddot').src="images/Chap2/2-4/footprints/trigger/footprint03_reddot_tri.png";
  document.getElementById('footprintfive').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-238px";
}
function footprintfive() {
  soundmsg2.play();
  document.getElementById('footprintfive').src="images/Chap2/2-4/footprints/trigger/footprint05_tri.png";
  document.getElementById('footprintsix').style.display = "block";
}
function footprintsix() {
  soundmsg2.play();
  document.getElementById('footprintsix').src="images/Chap2/2-4/footprints/trigger/footprint06_tri.png";
  document.getElementById('footprintsevenreddot').style.display = "block";
}
/*reddot*/
function footprintsevenreddot() {
  soundmsg2.play();
  document.getElementById('footprintsevenreddot').src="images/Chap2/2-4/footprints/trigger/footprint07_reddot_tri.png";
  document.getElementById('footprinteightreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-383px";
}
/*reddot*/
function footprinteightreddot() {
  soundmsg2.play();
  document.getElementById('footprinteightreddot').src="images/Chap2/2-4/footprints/trigger/footprint08_reddot_tri.png";
  document.getElementById('footprintninereddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-504px";
}
/*reddot*/
function footprintninereddot() {
  soundmsg2.play();
  document.getElementById('footprintninereddot').src="images/Chap2/2-4/footprints/trigger/footprint09_reddot_tri.png";
  document.getElementById('footprinttenreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-591px";
}
/*reddot*/
function footprinttenreddot() {
  soundmsg2.play();
  document.getElementById('footprinttenreddot').src="images/Chap2/2-4/footprints/trigger/footprint10_reddot_tri.png";
  document.getElementById('footprintelevenreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-706px";
}
/*reddot*/
function footprintelevenreddot() {
  soundmsg2.play();
  document.getElementById('footprintelevenreddot').src="images/Chap2/2-4/footprints/trigger/footprint11_reddot_tri.png";
  document.getElementById('footprinttwelvereddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-824px";
}
/*reddot*/
function footprinttwelvereddot() {
  soundmsg2.play();
  document.getElementById('footprinttwelvereddot').src="images/Chap2/2-4/footprints/trigger/footprint12_reddot_tri.png";
  document.getElementById('footprintthirteen').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-925px";
}
function footprintthirteen() {
  soundmsg2.play();
  document.getElementById('footprintthirteen').src="images/Chap2/2-4/footprints/trigger/footprint13_tri.png";
  document.getElementById('footprintfourteenreddot').style.display = "block";
}
/*reddot*/
function footprintfourteenreddot() {
  soundmsg2.play();
  document.getElementById('footprintfourteenreddot').src="images/Chap2/2-4/footprints/trigger/footprint14_reddot_tri.png";
  document.getElementById('footprintfifteenreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1034px";
}
/*reddot*/
function footprintfifteenreddot() {
  soundmsg2.play();
  document.getElementById('footprintfifteenreddot').src="images/Chap2/2-4/footprints/trigger/footprint15_reddot_tri.png";
  document.getElementById('footprintsixteen').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1129px";
}
function footprintsixteen() {
  soundmsg2.play();
  document.getElementById('footprintsixteen').src="images/Chap2/2-4/footprints/trigger/footprint16_tri.png";
  document.getElementById('footprintseventeenreddot').style.display = "block";
}
/*reddot*/
function footprintseventeenreddot() {
  soundmsg2.play();
  document.getElementById('footprintseventeenreddot').src="images/Chap2/2-4/footprints/trigger/footprint17_reddot_tri.png";
  document.getElementById('footprinteighteen').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1273px";
}
function footprinteighteen() {
  soundmsg2.play();
  document.getElementById('footprinteighteen').src="images/Chap2/2-4/footprints/trigger/footprint18_tri.png";
  document.getElementById('footprintnineteenreddot').style.display = "block";
}
/*reddot*/
function footprintnineteenreddot() {
  soundmsg2.play();
  document.getElementById('footprintnineteenreddot').src="images/Chap2/2-4/footprints/trigger/footprint19_reddot_tri.png";
  document.getElementById('footprinttwentyreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1363px";
}
/*reddot*/
function footprinttwentyreddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentyreddot').src="images/Chap2/2-4/footprints/trigger/footprint20_reddot_tri.png";
  document.getElementById('footprinttwentyonereddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1440px";
}
/*reddot*/
function footprinttwentyonereddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentyonereddot').src="images/Chap2/2-4/footprints/trigger/footprint21_reddot_tri.png";
  document.getElementById('footprinttwentytworeddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1558px";
}
/*reddot*/
function footprinttwentytworeddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentytworeddot').src="images/Chap2/2-4/footprints/trigger/footprint22_reddot_tri.png";
  document.getElementById('footprinttwentythreereddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1692px";
}
/*reddot*/
function footprinttwentythreereddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentythreereddot').src="images/Chap2/2-4/footprints/trigger/footprint23_reddot_tri.png";
  document.getElementById('footprinttwentyfourreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1823px";
}
/*reddot*/
function footprinttwentyfourreddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentyfourreddot').src="images/Chap2/2-4/footprints/trigger/footprint24_reddot_tri.png";
  document.getElementById('footprinttwentyfivereddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-1927px";
}
/*reddot*/
function footprinttwentyfivereddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentyfivereddot').src="images/Chap2/2-4/footprints/trigger/footprint25_reddot_tri.png";
  document.getElementById('footprinttwentysixreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-2037px";
}
/*reddot*/
function footprinttwentysixreddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentysixreddot').src="images/Chap2/2-4/footprints/trigger/footprint26_reddot_tri.png";
  document.getElementById('footprinttwentyseven').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-2143px";
}
function footprinttwentyseven() {
  soundmsg2.play();
  document.getElementById('footprinttwentyseven').src="images/Chap2/2-4/footprints/trigger/footprint27_tri.png";
  document.getElementById('footprinttwentyeight').style.display = "block";
}
function footprinttwentyeight() {
  soundmsg2.play();
  document.getElementById('footprinttwentyeight').src="images/Chap2/2-4/footprints/trigger/footprint28_tri.png";
  document.getElementById('footprinttwentyninereddot').style.display = "block";
}
/*reddot*/
function footprinttwentyninereddot() {
  soundmsg2.play();
  document.getElementById('footprinttwentyninereddot').src="images/Chap2/2-4/footprints/trigger/footprint29_reddot_tri.png";
  document.getElementById('footprintthirtyreddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-2308px";
}
/*reddot*/
function footprintthirtyreddot() {
  soundmsg2.play();
  document.getElementById('footprintthirtyreddot').src="images/Chap2/2-4/footprints/trigger/footprint30_reddot_tri.png";
  document.getElementById('footprintthirtyonereddot').style.display = "block";
  document.getElementById('background_footprint').style.marginTop = "-2396px";
}
/*reddot*/
function footprintthirtyonereddot() {
  soundmsg2.play();
  document.getElementById('footprintthirtyonereddot').src="images/Chap2/2-4/footprints/trigger/footprint31_reddot_tri.png";
  document.getElementById('background_footprint').style.marginTop = "-2476px";
  document.getElementById('two_four_drop_nextpage').style.display = "block";
}



function changepagesfourone() {
  audiobgm.src = 'Music/BGM_CH2_05.mp3';
  document.getElementById("2-4-1").style.display = "block";
  document.getElementById("2-4").style.display = "none";
  nextfourone();
}
function changepagesbackthree() {
  document.getElementById("2-3").style.display = "block";
  document.getElementById("2-4").style.display = "none";
}





/*2-4-1*/
var nexttime4_1 = 0;
function nextfourone(){
  // console.log(nexttime);
  nexttime4_1++;
  if(nexttime4_1 == stoptime-1) document.getElementById("nextpage4-1").style.display = "block";
  if(nexttime4_1 < stoptime) setTimeout("nextfourone();",1000);
}

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
  soundnotification.play();
  delayedGreeting();
}
function changepagesfive() {
  document.getElementById("2-5").style.display = "block";
  document.getElementById("2-4-1").style.display = "none";
  nextfive();
}
function changepagesbackfour() {
  audiobgm.src = 'Music/BGM_CH2_02.mp3';
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

var nexttime5 = 0;
function nextfive(){
  // console.log(nexttime);
  nexttime5++;
  if(nexttime5 == stoptime-1) document.getElementById("nextpage5").style.display = "block";
  if(nexttime5 < stoptime) setTimeout("nextfive();",1000);
}

function changepagessix() {
  document.getElementById("2-6").style.display = "block";
  document.getElementById("2-5").style.display = "none";
  nextsix();
}
function changepagesbackfourone() {
  document.getElementById("2-4-1").style.display = "block";
  document.getElementById("2-5").style.display = "none";
}




/*2-6*/
var nexttime6 = 0;
function nextsix(){
  // console.log(nexttime);
  nexttime6++;
  if(nexttime6 == stoptime-1) document.getElementById("nextpage6").style.display = "block";
  if(nexttime6 < stoptime) setTimeout("nextsix();",1000);
}

var imagesArray = ["2_6_jp.gif", "2_6_chi.gif", "2_6_en.gif", "2_6_fe.gif", "2_6_hk.gif"];

async function displayImage(){
    soundmsg3.play();
    var num = Math.floor(Math.random() * 5); // 0...6
    document.homecapsule.src = 'images/Chap2/2-6/2-6new/'+ imagesArray[num];
    await sleep(10000);
}

// async function capsuleclick() {
//     document.getElementById("buttoncapsulespeakone").style.display = "block";
//     document.getElementById("buttoncapsule").style.display = "none";
//     await sleep(5000);
//     document.getElementById("buttoncapsule").style.display = "block";
//     document.getElementById("buttoncapsulespeakone").style.display = "none";
// }

// function buttoncapsuleclick() {
//     capsuleclick();
// }

function changepagesseven() {
  document.getElementById("2-7").style.display = "block";
  document.getElementById("2-6").style.display = "none";
}
function changepagesbackfive() {
  document.getElementById("2-5").style.display = "block";
  document.getElementById("2-6").style.display = "none";
}


