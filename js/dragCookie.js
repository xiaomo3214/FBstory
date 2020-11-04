var cookieleft = $("#cookieone");
var cookiemid = $("#cookietwo");
var cookieright = $("#cookiethree");
var startX = startY = endX = endY = 0;
var cookieone = document.querySelector("#cookieone");
var cookietwo = document.querySelector("#cookietwo");
var cookiethree = document.querySelector("#cookiethree");
var target = document.querySelector(".dropcookie");
var mouse = false;
var times = 0;

mouseEvent();
touchEvent();
function mouseEvent(){
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止預設觸控事件
        // startX = event.screenX;
        // startY = event.screenY;
    }, {passive: false});

    //餅乾一
    cookieone.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse = true;
        startX = event.screenX;
        startY = event.screenY;
    }, false);
    cookieone.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = cookieleft.offset();
        endX = event.screenX;
        endY = event.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        if(mouse && (startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                cookieleft.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                cookieleft.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                cookieleft.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                cookieleft.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
        }
    });
    cookieone.addEventListener('mouseup',function(event){
        // event.preventDefault();
        var overlap =isOverlap(".dropcookie",".cookieone");
        if(overlap) {
            cookieleft.css("display","none");
            times++;
            console.log(times);
        }
        mouse = false;
        startX = startY = endX = endY = 0;
    }, false);


    //餅乾二
    cookietwo.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse = true;
        startX = event.screenX;
        startY = event.screenY;
    }, false);
    cookietwo.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = cookiemid.offset();
        endX = event.screenX;
        endY = event.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        if(mouse && (startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                cookiemid.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                cookiemid.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                cookiemid.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                cookiemid.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
        }
    });
    cookietwo.addEventListener('mouseup',function(event){
        // event.preventDefault();
        var overlap =isOverlap(".dropcookie",".cookietwo");
        if(overlap){
            cookiemid.css("display","none");
            times++;
            console.log(times);
        } 
        mouse = false;
        startX = startY = endX = endY = 0;
    }, false);


    //餅乾三
    cookiethree.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse = true;
        startX = event.screenX;
        startY = event.screenY;
    }, false);
    cookiethree.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = cookieright.offset();
        endX = event.screenX;
        endY = event.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        if(mouse && (startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                cookieright.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                cookieright.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                cookieright.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                cookieright.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
        }
    });
    cookiethree.addEventListener('mouseup',function(event){
        // event.preventDefault();
        var overlap =isOverlap(".dropcookie",".cookiethree");
        if(overlap) {
            cookieright.css("display","none");
            times++;
            console.log(times);
        }
        mouse = false;
        startX = startY = endX = endY = 0;
    }, false);
}


function touchEvent(){
    window.addEventListener('touchmove',function(event){
        event.preventDefault(); //防止手機預設觸控事件
    }, {passive: false});

    //餅乾一
    cookieone.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX = touch.screenX;
        startY = touch.screenY;
    }, false);
    cookieone.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookieleft.offset();
        endX = touch.screenX;
        endY = touch.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        if(startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)){
            cookieleft.css("opacity",0.8);
            if(distanceX < 0){
                cookieleft.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                cookieleft.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                cookieleft.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                cookieleft.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
        }
    });
    cookieone.addEventListener('touchend',function(event){
        var overlap =isOverlap(".dropcookie",".cookieone");
        if(overlap) {
            cookieleft.css("display","none");
            times++;
            console.log(times);
        }
        startX = startY = endX = endY = 0;
    }, false);


    //餅乾二
    cookietwo.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX = touch.screenX;
        startY = touch.screenY;
    }, false);
    cookietwo.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookiemid.offset();
        endX = touch.screenX;
        endY = touch.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        if(startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)){
            if(distanceX < 0){
                cookiemid.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                cookiemid.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                cookiemid.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                cookiemid.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
        }
    });
    cookietwo.addEventListener('touchend',function(event){
        var overlap =isOverlap(".dropcookie",".cookietwo");
        if(overlap) {
            cookiemid.css("display","none");
            times++;
            console.log(times);
        }
        startX = startY = endX = endY = 0;
    }, false);


    //餅乾三
    cookiethree.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX = touch.screenX;
        startY = touch.screenY;
    }, false);
    cookiethree.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookieright.offset();
        endX = touch.screenX;
        endY = touch.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        if(startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)){
            if(distanceX < 0){
                cookieright.offset({left:pos1.left+distanceX});
            }
            if(distanceX > 0){
                cookieright.offset({left:pos1.left+distanceX});
            }
            if(distanceY < 0){
                cookieright.offset({top:pos1.top+distanceY});
            }
            if(distanceY > 0){
                cookieright.offset({top:pos1.top+distanceY});
            }
            startX = endX;
            startY = endY;
        }
    });
    cookiethree.addEventListener('touchend',function(event){
        var overlap =isOverlap(".dropcookie",".cookiethree");
        if(overlap) {
            cookieright.css("display","none");
            times++;
            console.log(times);
            if(times > 2){
                console.log("AA")
                document.getElementById("peanut").style.display = "block";
                document.getElementById("star").style.display = "none";
            }
        }
        startX = startY = endX = endY = 0;
    }, false);
}

function isOverlap(idOne,idTwo){
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