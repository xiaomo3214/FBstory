/*新版*/
var ani = $(".ani_8");  //GIF吃餅乾
var bg = $(".bg_8");  //背景
var aa = $(".background_m8");
var obj = document.querySelector(".background_m8");  //控制觸控
var touchSpeed = 500;
var startX = endX = 0;
var mouse = false;

if(obj) {
    wetherScroll();
    mouseEvent()
}

//滑鼠
function mouseEvent(){
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止手機預設觸控事件
    }, {passive: false});

    obj.addEventListener('mousedown',function(event){
        event.preventDefault();
        mouse = true;
        startX = event.screenX;
    }, false);
    obj.addEventListener('mousemove',function(event){
        event.preventDefault();
        var pos1 = bg.offset();
        var pos2 = ani.offset();
        endX = event.screenX;
        var distanceX = (endX - startX);
        if(startX!=Math.abs(distanceX) && event.buttons == 1){
                if(distanceX<0){
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)>(-bg.width() + aa.width()))
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)>(-ani.width() + aa.width()))
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
                else{
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)<0)
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)<0)
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
            startX = endX;
        }
    });
    obj.addEventListener('mouseup',function(event){
        event.preventDefault();
        mouse = false;
        startX = endX = 0;
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
        startX = touch.screenX;
    }, false);
    obj.addEventListener('touchmove',function(event){
        // event.preventDefault();
        var pos1 = bg.offset();
        var pos2 = ani.offset();
        var touch = event.targetTouches[0];
        endX = touch.screenX;
        var distanceX = (endX - startX);
        if(startX!=Math.abs(distanceX)){
                if(distanceX<0){
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)>(-bg.width() + aa.width()))
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)>(-ani.width() + aa.width()))
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
                else{
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)<0)
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)<0)
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
            startX = endX;
        }
    });
    obj.addEventListener('touchend',function(event){
        // event.preventDefault();
        startX = endX = 0;
    }, false);
}

/*舊版
var ani = $(".ani");  //GIF吃餅乾
var bg = $(".bg");  //背景
var aa = $(".showArea");
var fix = $(".fix");  //固定按鈕的div
var nextPage = $("#nextPage"), prePage = $("#prePage");
var isPhone = detectmob();
var obj = document.querySelector(".fix");  //控制觸控
var touchSpeed = 500;
var startX = endX = 0;
var mouse = false;

var nextButton = 
    ["img/Page_change/Page_next/Page_next_white/nextpage_white_00000.png",
     "img/Page_change/Page_next/Page_next_white/nextpage_white_00001.png",
     "img/Page_change/Page_next/Page_next_white/nextpage_white_00002.png",
     "img/Page_change/Page_next/Page_next_white/nextpage_white_00003.png"];
var preButton = 
    ["img/Page_change/Page_previous/preced_white/previouspage_white_01.png",
     "img/Page_change/Page_previous/preced_white/previouspage_white_02.png"]
var next_size = nextButton.length, pre_size = preButton.length;
var next = 0, pre = 0;

$(window).ready(
    function(){
        getWidth();
        chImg();
    }
);

if(obj) {
    wetherScroll();
    mouseEvent()
}

//抓取裝置寬度，並設置可視範圍大小
function getWidth(event){
    var dWidth = $(window).width()-120;
    if(isPhone){
        console.log("Phone");
        $(".img").height(dWidth);
        $(".frame").width(dWidth+20);
        $(".frame").height(dWidth+20);
        aa.height(dWidth);
        aa.width(dWidth);
        fix.height(dWidth);
        fix.width(dWidth);
        nextPage.width("80px");
        nextPage.height("78px");
        prePage.width("80px");
        prePage.height("78px");
    }else if(navigator.userAgent.match(/iPad/i)){
        console.log("iPad");
        $(".img").height(dWidth-300);
        $(".frame").width(dWidth-280);
        $(".frame").height(dWidth-280);
        aa.height(dWidth-300);
        aa.width(dWidth-300);
        fix.height(dWidth-300);
        fix.width(dWidth-300);
        nextPage.width("60px");
        nextPage.height("58px");
        prePage.width("60px");
        prePage.height("58px");
    }else{
        console.log("Not Phone");
        $(".img").height("375px");
        $(".frame").width("395px");
        $(".frame").height("395px");
        aa.height("375px");
        aa.width("375px");
        fix.height("375px");
        fix.width("375px");
        nextPage.width("40px");
        nextPage.height("38px");
        prePage.width("40px");
        prePage.height("38px");
    }
}

//偵測是否為手機
function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;   
    }
    else {
        return false;
    }
}

//滑鼠
function mouseEvent(){
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止手機預設觸控事件
    }, {passive: false});

    obj.addEventListener('mousedown',function(event){
        event.preventDefault();
        mouse = true;
        startX = event.screenX;
    }, false);
    obj.addEventListener('mousemove',function(event){
        event.preventDefault();
        var pos1 = bg.offset();
        var pos2 = ani.offset();
        endX = event.screenX;
        var distanceX = (endX - startX);
        if(startX!=Math.abs(distanceX) && event.buttons == 1){
                if(distanceX<0){
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)>(-bg.width() + aa.width()))
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)>(-ani.width() + aa.width()))
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
                else{
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)<0)
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)<0)
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
            startX = endX;
        }
    });
    obj.addEventListener('mouseup',function(event){
        event.preventDefault();
        mouse = false;
        startX = endX = 0;
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
        startX = touch.screenX;
    }, false);
    obj.addEventListener('touchmove',function(event){
        // event.preventDefault();
        var pos1 = bg.offset();
        var pos2 = ani.offset();
        var touch = event.targetTouches[0];
        endX = touch.screenX;
        var distanceX = (endX - startX);
        if(startX!=Math.abs(distanceX)){
                if(distanceX<0){
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)>(-bg.width() + aa.width()))
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)>(-ani.width() + aa.width()))
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
                else{
                    if(bg.position().left+distanceX*((bg.width()-aa.width())/touchSpeed)<0)
                        bg.offset({left:pos1.left+distanceX*((bg.width()-aa.width())/touchSpeed)});
                    if(ani.position().left+distanceX*((ani.width()-aa.width())/touchSpeed)<0)
                        ani.offset({left:pos2.left+distanceX*((ani.width()-aa.width())/touchSpeed)});
                }
            startX = endX;
        }
    });
    obj.addEventListener('touchend',function(event){
        // event.preventDefault();
        startX = endX = 0;
    }, false);
}

function chImg(){
    document.getElementById("nextPage").src = nextButton[next];
    document.getElementById("prePage").src = preButton[pre];
    next++;
    pre++;
    if (next >= next_size) next = 0;
    if(pre >= pre_size) pre = 0;
    setTimeout("chImg()",300);
}*/