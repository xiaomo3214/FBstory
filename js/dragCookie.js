var cookieleft = $("#cookieone");
var cookiemid = $("#cookietwo");
var cookieright = $("#cookiethree");
var startX = startY = endX = endY = 0;
var cookieone = document.querySelector("#cookieone");
var cookietwo = document.querySelector("#cookietwo");
var cookiethree = document.querySelector("#cookiethree");
var mouse = false;

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
        // console.log(event.screenX);
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
            // console.log(pos1);
        }
    });
    cookieone.addEventListener('mouseup',function(event){
        // event.preventDefault();
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
        // console.log(event.screenX);
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
            // console.log(pos1);
        }
    });
    cookietwo.addEventListener('mouseup',function(event){
        // event.preventDefault();
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
        // console.log(event.screenX);
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
            // console.log(pos1);
        }
    });
    cookiethree.addEventListener('mouseup',function(event){
        // event.preventDefault();
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
        // console.log(startX+" + "+startY);
    }, false);
    cookieone.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookieleft.offset();
        endX = touch.screenX;
        endY = touch.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        // console.log(distanceX+" + "+distanceY);
        if(startX!=Math.abs(distanceX) || startY!=Math.abs(distanceY)){
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
            console.log(pos1);
        }
    });
    cookieone.addEventListener('touchend',function(event){
        startX = startY = endX = endY = 0;
    }, false);


    //餅乾二
    cookietwo.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX = touch.screenX;
        startY = touch.screenY;
        // console.log(startX+" + "+startY);
    }, false);
    cookietwo.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookiemid.offset();
        endX = touch.screenX;
        endY = touch.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        // console.log(distanceX+" + "+distanceY);
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
            console.log(pos1);
        }
    });
    cookietwo.addEventListener('touchend',function(event){
        startX = startY = endX = endY = 0;
    }, false);


    //餅乾三
    cookiethree.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX = touch.screenX;
        startY = touch.screenY;
        // console.log(startX+" + "+startY);
    }, false);
    cookiethree.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookieright.offset();
        endX = touch.screenX;
        endY = touch.screenY;
        var distanceX = (endX - startX);
        var distanceY = (endY - startY);
        // console.log(distanceX+" + "+distanceY);
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
            console.log(pos1);
        }
    });
    cookiethree.addEventListener('touchend',function(event){
        startX = startY = endX = endY = 0;
    }, false);
}