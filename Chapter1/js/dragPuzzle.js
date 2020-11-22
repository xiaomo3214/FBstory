var puzzle = $("#draggable");
var startX_5 = startY_5 = endX_5 = endY_5 = 0;
var obj_5 = document.querySelector("#draggable");
var mouse_5 = false;
var movetimes_5 = 0;
var radius = 30;
var mousespeed_5 = 1.5;

if(obj_5){
    mousePuzzle();
    touchPuzzle();
}

function mousePuzzle(){
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止預設觸控事件
        startX_5 = event.screenX;
        startY_5 = event.screenY;
    }, {passive: false});
    window.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = puzzle.offset();
        endX_5 = event.screenX;
        endY_5 = event.screenY;
        var distanceX = (endX_5 - startX_5);
        var distanceY = (endY_5 - startY_5);
        // console.log(event.screenX);
        if(mouse_5 && (startX_5!=Math.abs(distanceX) || startY_5!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                puzzle.offset({left:pos1.left-puzzle.width()/(2*$(window).width())+distanceX});
            }
            if(distanceX > 0){
                puzzle.offset({left:pos1.left+puzzle.width()/(2*$(window).width())+distanceX});
            }
            if(distanceY < 0){
                puzzle.offset({top:pos1.top+puzzle.height()/(2*$(window).height())+distanceY});
            }
            if(distanceY > 0){
                puzzle.offset({top:pos1.top-puzzle.height()/(2*$(window).height())+distanceY});
            }
            startX_5 = endX_5;
            startY_5 = endY_5;
            // console.log(pos1);
        }
    });
    window.addEventListener('mouseup',function(event){
        // event.preventDefault();
        if(puzzlebounce(".putpuzzle","#draggable")){
            movetimes_5++;
            if(movetimes_5 <= 3){
                //隨機角度偏移
                circleBounce();
            }
            else{
                //出現換頁提示
            }
        }
        mouse_5 = false;
        startX_5 = startY_5 = endX_5 = endY_5 = 0;
    }, false);

    obj_5.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse_5 = true;
        
    }, false);
    // obj_5.addEventListener('mousemove',function(event){
    //     // event.preventDefault();
    //     var pos1 = puzzle.offset();
    //     endX_5 = event.screenX;
    //     endY_5 = event.screenY;
    //     var distanceX = (endX_5 - startX_5);
    //     var distanceY = (endY_5 - startY_5);
    //     // console.log(event.screenX);
    //     if(mouse_5 && (startX_5!=Math.abs(distanceX) || startY_5!=Math.abs(distanceY)) && event.buttons == 1){
    //         if(distanceX < 0){
    //             puzzle.offset({left:pos1.left+distanceX/mousespeed_5});
    //         }
    //         if(distanceX > 0){
    //             puzzle.offset({left:pos1.left+distanceX/mousespeed_5});
    //         }
    //         if(distanceY < 0){
    //             puzzle.offset({top:pos1.top+distanceY/mousespeed_5});
    //         }
    //         if(distanceY > 0){
    //             puzzle.offset({top:pos1.top+distanceY/mousespeed_5});
    //         }
    //         startX_5 = endX_5;
    //         startY_5 = endY_5;
    //         // console.log(pos1);
    //     }
    // });
    // obj_5.addEventListener('mouseup',function(event){
    //     // event.preventDefault();
    //     if(puzzlebounce(".putpuzzle","#draggable")){
    //         movetimes_5++;
    //         if(movetimes_5 <= 3){
    //             //隨機角度偏移
    //             circleBounce();
    //         }
    //         else{
    //             //出現換頁提示
    //         }
    //     }
    //     mouse_5 = false;
    //     startX_5 = startY_5 = endX_5 = endY_5 = 0;
    // }, false);
}

function touchPuzzle(){
    // window.addEventListener('touchmove',function(event){
    //     event.preventDefault(); //防止手機預設觸控事件
    // }, {passive: false});


    obj_5.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX_5 = touch.screenX;
        startY_5 = touch.screenY;
    }, false);
    obj_5.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = puzzle.offset();
        endX_5 = touch.screenX;
        endY_5 = touch.screenY;
        var distanceX = (endX_5 - startX_5);
        var distanceY = (endY_5 - startY_5);
        // console.log(distanceX+" + "+distanceY);
        if(startX_5!=Math.abs(distanceX) || startY_5!=Math.abs(distanceY)){
            if(distanceX < 0){
                puzzle.offset({left:pos1.left-puzzle.width()/(2*$(window).width())+distanceX});
            }
            if(distanceX > 0){
                puzzle.offset({left:pos1.left+puzzle.width()/(2*$(window).width())+distanceX});
            }
            if(distanceY < 0){
                puzzle.offset({top:pos1.top+puzzle.height()/(2*$(window).height())+distanceY});
            }
            if(distanceY > 0){
                puzzle.offset({top:pos1.top-puzzle.height()/(2*$(window).height())+distanceY});
            }
            startX_5 = endX_5;
            startY_5 = endY_5;
            // console.log(pos1);
        }
    });
    obj_5.addEventListener('touchend',function(event){
        if(puzzlebounce(".putpuzzle","#draggable")){
            movetimes_5++;
            if(movetimes_5 <= 3){
                //隨機角度偏移
                circleBounce();
            }
            else{
                //出現換頁提示
            }
        }
        startX_5 = startY_5 = endX_5 = endY_5 = 0;
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

function circleBounce(){
    var pos1 = puzzle.offset();
    var int = Math.floor(Math.random()*10);
    var ang = (2*Math.PI/360)*36*int;
    puzzle.offset({top:pos1.top+Math.sin(ang)*radius});
    puzzle.offset({left:pos1.left-Math.cos(ang)*radius});
}