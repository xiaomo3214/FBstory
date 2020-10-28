/*拼圖ID CLASS
*/

var puzzle = $("#draggable");
var startX = startY = endX = endY = 0;
var obj = document.querySelector("#draggable");

mouseEvent();
touchEvent();

function mouseEvent(){
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止預設觸控事件
    }, {passive: false});

    obj.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse = true;
        startX = event.screenX;
        startY = event.screenY;
    }, false);
    obj.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = puzzle.offset();
        endX = event.screenX;
        endY = event.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        if((startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)) && event.buttons == 1){
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
            console.log(pos1);
        }
    });
    obj.addEventListener('touchend',function(event){
        startX = startY = endX = endY = 0;
    }, false);
}