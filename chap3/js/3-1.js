var peanut1 = $(".droppeanut1");
var peanut2 = $(".droppeanut2");
var peanut3 = $(".droppeanut3");
var peanut4 = $(".droppeanut4");
var peanut5 = $(".droppeanut5");
var peanut6 = $(".droppeanut6");
var peanut7 = $(".droppeanut7");
var peanut8 = $(".droppeanut8");
var startX1 = startY1 = endX1 = endY1 = 0;
var mouse1 = false;
var droppeanut = 0, speed = 2.5;
var droppeanut1 = document.querySelector("#nut1");
var droppeanut2 = document.querySelector("#nut2");
var droppeanut3 = document.querySelector("#nut3");
var droppeanut4 = document.querySelector("#nut4");
var droppeanut5 = document.querySelector("#nut5");
var droppeanut6 = document.querySelector("#nut6");
var droppeanut7 = document.querySelector("#nut7");
var droppeanut8 = document.querySelector("#nut8");
/*Music*/
var petsmove = new Audio("Music/Ch3_01_SE01_Petsmove.mp3")
var peanutnum = 0;

if(droppeanut1){
  mousePeanut();
  touchPeanut();
}
function mousePeanut(){
  window.addEventListener('mousedown',function(event){
    event.preventDefault(); //防止預設觸控事件
    // startX3 = event.screenX;
    // startY3 = event.screenY;
  }, {passive: false});
  droppeanut1.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 1;
  }, false);
  droppeanut2.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 2;
  }, false);
  droppeanut3.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 3;
  }, false);
  droppeanut4.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 4;
  }, false);
  droppeanut5.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 5;
  }, false);
  droppeanut6.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 6;
  }, false);
  droppeanut7.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 7;
  }, false);
  droppeanut8.addEventListener('mousedown',function(event){
    mouse1 = true;
    startX1 = event.screenX;
    startY1 = event.screenY;
    droppeanut = 8;
  }, false);

  window.addEventListener('mousemove',function(event){
    // event.preventDefault();
    if(droppeanut ==1){
      var pos1 = peanut1.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut1.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut1.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut1.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut1.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
    if(droppeanut ==2){
      var pos1 = peanut2.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut2.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut2.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut2.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut2.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
    if(droppeanut ==3){
      var pos1 = peanut3.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut3.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut3.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut3.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut3.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
    if(droppeanut ==4){
      var pos1 = peanut4.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut4.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut4.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut4.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut4.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
    if(droppeanut ==5){
      var pos1 = peanut5.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut5.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut5.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut5.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut5.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
    if(droppeanut ==6){
      var pos1 = peanut6.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut6.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut6.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut6.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut6.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
    if(droppeanut ==7){
      var pos1 = peanut7.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut7.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut7.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut7.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut7.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
    if(droppeanut ==8){
      var pos1 = peanut8.offset();
      endX1 = event.screenX;
      endY1 = event.screenY;
      var distanceX = (endX1 - startX1);
      var distanceY = (endY1 - startY1);
      if(mouse1 && (startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)) && event.buttons == 1){
        if(distanceX < 0){
          peanut8.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut8.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut8.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut8.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
      }
    }
  });
  window.addEventListener('mouseup',function(event){
    // event.preventDefault();
    if(droppeanut == 1) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut1.css("display","none")
      petsmove.play();
    };
    if(droppeanut == 2) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut2.css("display","none");
      petsmove.play();
    }
    if(droppeanut == 3) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut3.css("display","none");
      petsmove.play();
    }
    if(droppeanut == 4) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut4.css("display","none");
      petsmove.play();
    }
    if(droppeanut == 5) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut5.css("display","none");
      petsmove.play();
    }
    if(droppeanut == 6) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut6.css("display","none");
      petsmove.play();
    }
    if(droppeanut == 7) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut7.css("display","none");
      petsmove.play();
    }
    if(droppeanut == 8) {
      peanutnum++;
      if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
      peanut8.css("display","none");
      petsmove.play();
    }
    mouse1 = false;
    startX1 = startY1 = endX1 = endY1 = 0;
    droppeanut = 0;
  }, false);
}

function touchPeanut(){
  window.addEventListener('touchmove',function(event){
    event.preventDefault(); //防止手機預設觸控事件
  }, {passive: false});

  //花生一
  droppeanut1.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut1.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut1.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut1.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut1.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut1.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut1.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut1.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut1.css("display","none");
    petsmove.play();
  }, false);

  //花生二
  droppeanut2.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut2.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut2.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut2.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut2.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut2.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut2.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut2.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut2.css("display","none");
    petsmove.play();
  }, false);

  //花生三
  droppeanut3.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut3.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut3.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut3.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut3.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut3.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut3.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut3.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut3.css("display","none");
    petsmove.play();
  }, false);

  //花生四
  droppeanut4.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut4.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut4.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut4.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut4.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut4.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut4.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut4.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut4.css("display","none");
    petsmove.play();
  }, false);

  //花生五
  droppeanut5.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut5.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut5.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut5.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut5.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut5.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut5.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut5.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut5.css("display","none");
    petsmove.play();
  }, false);

  //花生六
  droppeanut6.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut6.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut6.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut6.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut6.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut6.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut6.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut6.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut6.css("display","none");
    petsmove.play();
  }, false);

  //花生七
  droppeanut7.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut7.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut7.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut7.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut7.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut7.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut7.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut7.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut7.css("display","none");
    petsmove.play();
  }, false);

  //花生八
  droppeanut8.addEventListener('touchstart',function(event){
    var touch = event.targetTouches[0];
    startX1 = touch.screenX;
    startY1 = touch.screenY;
  }, false);
  droppeanut8.addEventListener('touchmove',function(event){
    var touch = event.targetTouches[0];
    var pos1 = peanut8.offset();
    endX1 = touch.screenX;
    endY1 = touch.screenY;
    var distanceX = (endX1 - startX1);
    var distanceY = (endY1 - startY1);
    if(startX1!=Math.abs(distanceX) || startY1!=Math.abs(distanceY)){
        if(distanceX < 0){
          peanut8.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceX > 0){
          peanut8.offset({left:pos1.left+distanceX*speed});
        }
        if(distanceY < 0){
          peanut8.offset({top:pos1.top+distanceY*speed});
        }
        if(distanceY > 0){
          peanut8.offset({top:pos1.top+distanceY*speed});
        }
        startX1 = endX1;
        startY1 = endY1;
    }
  });
  droppeanut8.addEventListener('touchend',function(event){
    startX1 = startY1 = endX1 = endY1 = 0;
    peanutnum++;
    if(peanutnum == 8) document.getElementById("nextpage1").style.display = "block";
    peanut8.css("display","none");
    petsmove.play();
  }, false);
}