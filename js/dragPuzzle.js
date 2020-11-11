var puzzle = $("#draggable");
var startX = startY = endX = endY = 0;
var obj = document.querySelector("#draggable");
var mouse = false;
var movetimes = 0;
var radius = 30;

mouseEvent();
touchEvent();

function mouseEvent(){
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止預設觸控事件
        startX = event.screenX;
        startY = event.screenY;
    }, {passive: false});

    obj.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse = true;
        
    }, false);
    obj.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = puzzle.offset();
        endX = event.screenX;
        endY = event.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        // console.log(event.screenX);
        if(mouse && (startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                puzzle.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                puzzle.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                puzzle.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                puzzle.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
            // console.log(pos1);
        }
    });
    obj.addEventListener('mouseup',function(event){
        // event.preventDefault();
        mouse = false;
        startX = startY = endX = endY = 0;
    }, false);
}

function touchEvent(){
    window.addEventListener('touchmove',function(event){
        event.preventDefault(); //防止手機預設觸控事件
    }, {passive: false});


    obj.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX = touch.screenX;
        startY = touch.screenY;
        // console.log(startX+" + "+startY);
    }, false);
    obj.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = puzzle.offset();
        endX = touch.screenX;
        endY = touch.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        // console.log(distanceX+" + "+distanceY);
        if(startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)){
            if(distanceX < 0){
                puzzle.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                puzzle.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                puzzle.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                puzzle.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
            // console.log(pos1);
        }
    });
    obj.addEventListener('touchend',function(event){
        if(puzzlebounce(".putpuzzle","#draggable")){
            movetimes++;
            if(movetimes <= 3){
                console.log("a");
                //隨機角度偏移
                var pos1 = puzzle.offset();
                var int = Math.floor(Math.random()*60);
                var ang = (2*Math.PI/360)*6*int;
                puzzle.offset({top:pos1.top+Math.sin(ang)*radius});
                puzzle.offset({left:pos1.left-Math.cos(ang)*radius});
            }
            else{
                //出現換頁提示
            }
        }
        startX = startY = endX = endY = 0;
    }, false);
}
function puzzlebounce(idOne,idTwo){
    var objOne=$(idOne),
        objTwo=$(idTwo),
        offsetOne = objOne.offset(),
        offsetTwo = objTwo.offset(),
        topOne=offsetOne.top,
        topTwo=offsetTwo.top,
        leftOne=offsetOne.left,
        leftTwo=offsetTwo.left,
        widthOne = objOne.width(),
        widthTwo = objTwo.width(),
        heightOne = objOne.height(),
        heightTwo = objTwo.height();
    var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne
        && topTwo > topOne && topTwo < topOne+heightOne,             
        rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  
        && topTwo > topOne && topTwo < topOne+heightOne,             
        leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne                  
        && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,             
        rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  
        && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
    return leftTop || rightTop || leftBottom || rightBottom;
}