var cookieleft = $("#cookieone");
var cookiemid = $("#cookietwo");
var cookieright = $("#cookiethree");
var startX_14 = startY_14 = endX_14 = endY_14 = 0;
var cookieone = document.querySelector("#cookieone");
var cookietwo = document.querySelector("#cookietwo");
var cookiethree = document.querySelector("#cookiethree");
var target = document.querySelector(".dropcookie");
var mouse_14 = false;
var times_14 = 0;
var mousespeed_14 = 1,tspeed_14 = 1.295;
var dropcookie = 0;

if(target){
    mouseCookie();
    touchCookie();
}

function mouseCookie(){
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止預設觸控事件
        // startX = event.screenX;
        // startY = event.screenY;
    }, {passive: false});
    window.addEventListener('mousemove',function(event){
        // event.preventDefault();
        if(dropcookie == 1){
            var pos1 = cookieleft.offset();
            endX_14 = event.screenX;
            endY_14 = event.screenY;
            var distanceX = (endX_14 - startX_14);
            var distanceY = (endY_14 - startY_14);
            if(mouse_14 && (startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)) && event.buttons == 1){
                if(distanceX < 0){
                    cookieleft.offset({left:pos1.left+distanceX/mousespeed_14});
                }
                if(distanceX > 0){
                    cookieleft.offset({left:pos1.left+distanceX/mousespeed_14});
                }
                if(distanceY < 0){
                    cookieleft.offset({top:pos1.top+distanceY/mousespeed_14});
                }
                if(distanceY > 0){
                    cookieleft.offset({top:pos1.top+distanceY/mousespeed_14});
                }
                startX_14 = endX_14;
                startY_14 = endY_14;
            }
        }

        if(dropcookie == 2){
            var pos1 = cookiemid.offset();
            endX_14 = event.screenX;
            endY_14 = event.screenY;
            var distanceX = (endX_14 - startX_14);
            var distanceY = (endY_14 - startY_14);
            if(mouse_14 && (startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)) && event.buttons == 1){
                if(distanceX < 0){
                    cookiemid.offset({left:pos1.left+distanceX/mousespeed_14});
                }
                if(distanceX > 0){
                    cookiemid.offset({left:pos1.left+distanceX/mousespeed_14});
                }
                if(distanceY < 0){
                    cookiemid.offset({top:pos1.top+distanceY/mousespeed_14});
                }
                if(distanceY > 0){
                    cookiemid.offset({top:pos1.top+distanceY/mousespeed_14});
                }
                startX_14 = endX_14;
                startY_14 = endY_14;
            }
        }

        if(dropcookie == 3){
            var pos1 = cookieright.offset();
            endX_14 = event.screenX;
            endY_14 = event.screenY;
            var distanceX = (endX_14 - startX_14);
            var distanceY = (endY_14 - startY_14);
            if(mouse_14 && (startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)) && event.buttons == 1){
                if(distanceX < 0){
                    cookieright.offset({left:pos1.left+distanceX/mousespeed_14});
                }
                if(distanceX > 0){
                    cookieright.offset({left:pos1.left+distanceX/mousespeed_14});
                }
                if(distanceY < 0){
                    cookieright.offset({top:pos1.top+distanceY/mousespeed_14});
                }
                if(distanceY > 0){
                    cookieright.offset({top:pos1.top+distanceY/mousespeed_14});
                }
                startX_14 = endX_14;
                startY_14 = endY_14;
            }
        }
    });
    window.addEventListener('mouseup',function(event){
        // event.preventDefault();
        if(dropcookie == 1){
            var overlap =isOverlap(".dropcookie",".cookieone");
            if(overlap) {
                cookieleft.css("display","none");
                times_14++;
                alpha();
            }
            mouse_14 = false;
            startX_14 = startY_14 = endX_14 = endY_14 = dropcookie = 0;
        }

        if(dropcookie == 2){
            var overlap =isOverlap(".dropcookie",".cookietwo");
            if(overlap){
                cookiemid.css("display","none");
                times_14++;
                alpha();
            } 
            mouse_14 = false;
            startX_14 = startY_14 = endX_14 = endY_14 = dropcookie = 0;
        }

        if(dropcookie == 3){
            var overlap =isOverlap(".dropcookie",".cookiethree");
            if(overlap) {
                cookieright.css("display","none");
                times_14++;
                alpha();
            }
            mouse_14 = false;
            startX_14 = startY_14 = endX_14 = endY_14 = dropcookie = 0;
        }
    }, false);

    //餅乾一
    cookieone.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse_14 = true;
        startX_14 = event.screenX;
        startY_14 = event.screenY;
        dropcookie = 1;
        
    }, false);
    /*cookieone.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = cookieleft.offset();
        endX_14 = event.screenX;
        endY_14 = event.screenY;
        var distanceX = (endX_14 - startX_14);
        var distanceY = (endY_14 - startY_14);
        if(mouse_14 && (startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                cookieleft.offset({left:pos1.left+distanceX/mousespeed_14});
            }
            if(distanceX > 0){
                cookieleft.offset({left:pos1.left+distanceX/mousespeed_14});
            }
            if(distanceY < 0){
                cookieleft.offset({top:pos1.top+distanceY/mousespeed_14});
            }
            if(distanceY > 0){
                cookieleft.offset({top:pos1.top+distanceY/mousespeed_14});
            }
            startX_14 = endX_14;
            startY_14 = endY_14;
        }
    });
    cookieone.addEventListener('mouseup',function(event){
        // event.preventDefault();
        var overlap =isOverlap(".dropcookie",".cookieone");
        if(overlap) {
            cookieleft.css("display","none");
            times_14++;
            alpha();
        }
        mouse_14 = false;
        startX_14 = startY_14 = endX_14 = endY_14 = 0;
    }, false);*/


    //餅乾二
    cookietwo.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse_14 = true;
        startX_14 = event.screenX;
        startY_14 = event.screenY;
        dropcookie = 2;
    }, false);
    /*cookietwo.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = cookiemid.offset();
        endX_14 = event.screenX;
        endY_14 = event.screenY;
        var distanceX = (endX_14 - startX_14);
        var distanceY = (endY_14 - startY_14);
        if(mouse_14 && (startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                cookiemid.offset({left:pos1.left+distanceX/mousespeed_14});
            }
            if(distanceX > 0){
                cookiemid.offset({left:pos1.left+distanceX/mousespeed_14});
            }
            if(distanceY < 0){
                cookiemid.offset({top:pos1.top+distanceY/mousespeed_14});
            }
            if(distanceY > 0){
                cookiemid.offset({top:pos1.top+distanceY/mousespeed_14});
            }
            startX_14 = endX_14;
            startY_14 = endY_14;
        }
    });
    cookietwo.addEventListener('mouseup',function(event){
        // event.preventDefault();
        var overlap =isOverlap(".dropcookie",".cookietwo");
        if(overlap){
            cookiemid.css("display","none");
            times_14++;
            alpha();
        } 
        mouse_14 = false;
        startX_14 = startY_14 = endX_14 = endY_14 = 0;
    }, false);*/


    //餅乾三
    cookiethree.addEventListener('mousedown',function(event){
        // event.preventDefault();
        mouse_14 = true;
        startX_14 = event.screenX;
        startY_14 = event.screenY;
        dropcookie = 3;
    }, false);
    /*cookiethree.addEventListener('mousemove',function(event){
        // event.preventDefault();
        var pos1 = cookieright.offset();
        endX_14 = event.screenX;
        endY_14 = event.screenY;
        var distanceX = (endX_14 - startX_14);
        var distanceY = (endY_14 - startY_14);
        if(mouse_14 && (startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)) && event.buttons == 1){
            if(distanceX < 0){
                cookieright.offset({left:pos1.left+distanceX/mousespeed_14});
            }
            if(distanceX > 0){
                cookieright.offset({left:pos1.left+distanceX/mousespeed_14});
            }
            if(distanceY < 0){
                cookieright.offset({top:pos1.top+distanceY/mousespeed_14});
            }
            if(distanceY > 0){
                cookieright.offset({top:pos1.top+distanceY/mousespeed_14});
            }
            startX_14 = endX_14;
            startY_14 = endY_14;
        }
    });
    cookiethree.addEventListener('mouseup',function(event){
        // event.preventDefault();
        var overlap =isOverlap(".dropcookie",".cookiethree");
        if(overlap) {
            cookieright.css("display","none");
            times_14++;
            alpha();
        }
        mouse_14 = false;
        startX_14 = startY_14 = endX_14 = endY_14 = 0;
    }, false);*/
}


function touchCookie(){
    window.addEventListener('touchmove',function(event){
        event.preventDefault(); //防止手機預設觸控事件
    }, {passive: false});

    //餅乾一
    cookieone.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX_14 = touch.screenX;
        startY_14 = touch.screenY;
    }, false);
    cookieone.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookieleft.offset();
        endX_14 = touch.screenX;
        endY_14 = touch.screenY;
        var distanceX = (endX_14 - startX_14);
        var distanceY = (endY_14 - startY_14);
        if(startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)){
            if(distanceX < 0){
                cookieleft.offset({left:pos1.left+distanceX*tspeed_14});
            }
            if(distanceX > 0){
                cookieleft.offset({left:pos1.left+distanceX*tspeed_14});
            }
            if(distanceY < 0){
                cookieleft.offset({top:pos1.top+distanceY*tspeed_14});
            }
            if(distanceY > 0){
                cookieleft.offset({top:pos1.top+distanceY*tspeed_14});
            }
            startX_14 = endX_14;
            startY_14 = endY_14;
        }
    });
    cookieone.addEventListener('touchend',function(event){
        var overlap =isOverlap(".dropcookie",".cookieone");
        if(overlap) {
            cookieleft.css("display","none");
            times_14++;
            alpha();
        }
        startX_14 = startY_14 = endX_14 = endY_14 = 0;
    }, false);


    //餅乾二
    cookietwo.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX_14 = touch.screenX;
        startY_14 = touch.screenY;
    }, false);
    cookietwo.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookiemid.offset();
        endX_14 = touch.screenX;
        endY_14 = touch.screenY;
        var distanceX = (endX_14 - startX_14);
        var distanceY = (endY_14 - startY_14);
        if(startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)){
            if(distanceX < 0){
                cookiemid.offset({left:pos1.left+distanceX*tspeed_14});
            }
            if(distanceX > 0){
                cookiemid.offset({left:pos1.left+distanceX*tspeed_14});
            }
            if(distanceY < 0){
                cookiemid.offset({top:pos1.top+distanceY*tspeed_14});
            }
            if(distanceY > 0){
                cookiemid.offset({top:pos1.top+distanceY*tspeed_14});
            }
            startX_14 = endX_14;
            startY_14 = endY_14;
        }
    });
    cookietwo.addEventListener('touchend',function(event){
        var overlap =isOverlap(".dropcookie",".cookietwo");
        if(overlap) {
            cookiemid.css("display","none");
            times_14++;
            alpha();
        }
        startX_14 = startY_14 = endX_14 = endY_14 = 0;
    }, false);


    //餅乾三
    cookiethree.addEventListener('touchstart',function(event){
        var touch = event.targetTouches[0];
        startX_14 = touch.screenX;
        startY_14 = touch.screenY;
    }, false);
    cookiethree.addEventListener('touchmove',function(event){
        var touch = event.targetTouches[0];
        var pos1 = cookieright.offset();
        endX_14 = touch.screenX;
        endY_14 = touch.screenY;
        var distanceX = (endX_14 - startX_14);
        var distanceY = (endY_14 - startY_14);
        if(startX_14!=Math.abs(distanceX) || startY_14!=Math.abs(distanceY)){
            if(distanceX < 0){
                cookieright.offset({left:pos1.left+distanceX*tspeed_14});
            }
            if(distanceX > 0){
                cookieright.offset({left:pos1.left+distanceX*tspeed_14});
            }
            if(distanceY < 0){
                cookieright.offset({top:pos1.top+distanceY*tspeed_14});
            }
            if(distanceY > 0){
                cookieright.offset({top:pos1.top+distanceY*tspeed_14});
            }
            startX_14 = endX_14;
            startY_14 = endY_14;
        }
    });
    cookiethree.addEventListener('touchend',function(event){
        var overlap =isOverlap(".dropcookie",".cookiethree");
        if(overlap) {
            cookieright.css("display","none");
            times_14++;
            alpha();
        }
        startX_14 = startY_14 = endX_14 = endY_14 = 0;
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

function alpha(){
    if(times_14 == 1){
        document.getElementById("star").style.display = "none"
    }
    if(times_14 == 2){
        document.getElementById("star70").style.display = "none"
    }
    if(times_14 > 2){
        document.getElementById("star40").style.display = "none";
    }
}