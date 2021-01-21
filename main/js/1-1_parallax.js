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
    document.getElementById("1-1").style.display = "block";
  }
}

/*1-1*/
var first = $(".first");
var second = $(".sec");
var third = $(".third");
var bg = $(".bg");
var aa = $(".showArea");
var nextPage = $("#nextPage");
// var isPhone = detectmob();
var obj = document.querySelector('.showArea');

// var pImg = [], flag = 0, 
//     allImg = ['./main/img/Chap1/1-1/1_1_01.png', './main/img/Chap1/1-1/1_1_02.png', './main/img/Chap1/1-1/1_1_03.png', './main/img/Chap1/1-1/1_1_04.png'], 
//     total = allImg.length;
var scrollSpeed = 200, touchSpeed = 2000;
var startX = endX = 0;
var sec = 0, num = 10.0;
var touchTime = 0, scrollEnd = 0, playAniTime = 100, changeA = false;
var ani, stopAni = 0;
var scrollStart = false;
var player = document.getElementById('player');
    // nAudio = document.getElementById('nextAudio'),
    // tAudio = document.getElementById('touchA');
var bgmTurnOn = false;

//按鈕動畫
// var nextButton_white = 
//     ["img/Page_change/Page_next/Page_next_white/nextpage_white_00000.png",
//     "img/Page_change/Page_next/Page_next_white/nextpage_white_00001.png",
//     "img/Page_change/Page_next/Page_next_white/nextpage_white_00002.png",
//     "img/Page_change/Page_next/Page_next_white/nextpage_white_00003.png"];
// var size = nextButton_white.length;
// var i=0;

// $(".loading").ready(
//     function(){
//         loadImg();
//         Timer();
//         if(sec<num)
//             $(".loading").css("display","");     
//     }
// )

// getWidth();
if(obj) {
    wetherScroll();
}

nextPage.css("display","none");

// function Timer(){
//     if(sec<num) {
//         setTimeout("Timer();",1000);       
//     }
//     sec++;
//     if(sec== num/2) {
//         $('.hide').fadeIn();
//         // $('.hide').css("display","block");
//     }
//     if(sec>num){
//         $('.loading').fadeOut();
//         $('.cover').fadeOut();
//         BGM();
//     }  
// }

function loadImg(){
    for(var i = 0 ; i < total ; i++){
        pImg[i] = new Image()
        pImg[i].src = allImg[i]
        pImg[i].onload = function(){
        flag++;
        }
    }
}

//設定寬度
function getWidth(event){
    var dWidth = $(window).width();
    if(isPhone){
        // console.log("Phone");
        $(".img").height(dWidth);
        aa.height(dWidth);
        aa.width(dWidth);
    }
    // else if(navigator.userAgent.match(/iPad/i)){
    //     aa.css("overflow","hidden");
    //     $(".img").height(dWidth-300);
    //     aa.height(dWidth-300);
    //     aa.width(dWidth-300);
    //     nextPage.width("60px");
    //     nextPage.height("58px");
    // }
    else{
        // console.log("Not Phone");
        $(".img").height("375px");
        aa.height("375px");
        aa.width("375px");
        nextPage.width("40px");
        nextPage.height("38px");
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
        aa.css("overflow","hidden");
        return true;
     }
    else {
        return false;
     }
   }

//判斷滑鼠滾輪滾動方向
if (window.addEventListener)//FF,火狐瀏覽器會識別該方法
    window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;//W3C

//統一處理滾輪滾動事件
function wheel(event){
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {//IE、chrome瀏覽器使用的是wheelDelta，並且值為“正負120”
        delta = event.wheelDelta/120; 
        if (window.opera) delta = -delta;//因為IE、chrome等向下滾動是負值，FF是正值，為了處理一致性，在此取反處理
    } else if (event.detail) {//FF瀏覽器使用的是detail,其值為“正負3”
        delta = -event.detail/3;
    }
    if (delta && sec > num){
        scrollStart = true;
        handle(delta);
    }   
}

//上下滾動時的具體處理函式
function handle(delta) {
    var pos1 = first.offset();
    var pos2 = second.offset();
    var pos3 = third.offset();
        if (delta <0){//向下滾動
            if(first.position().left+delta*((first.width()-aa.width())/scrollSpeed)>(-first.width() + aa.width())) 
                first.offset({left:pos1.left+delta*((first.width()-aa.width())/scrollSpeed)});

            if(second.position().left+delta*((second.width()-aa.width())/scrollSpeed)>(-second.width() + aa.width())) 
                second.offset({left:pos2.left+delta*((second.width()-aa.width())/scrollSpeed)});

            if(third.position().left+delta*((third.width()-aa.width())/scrollSpeed)>(-third.width() + aa.width())) 
                third.offset({left:pos3.left+delta*((third.width()-aa.width())/scrollSpeed)});
            
            //換頁提示
            if(first.position().left+delta*((first.width()-aa.width())/scrollSpeed)<=(-first.width() + aa.width())
                && second.position().left+delta*((second.width()-aa.width())/scrollSpeed)<=(-second.width() + aa.width())
                && third.position().left+delta*((third.width()-aa.width())/scrollSpeed)<=(-third.width() + aa.width())){
                    nextPage.css("display","");
                    scrollEnd++;
                    // if(scrollEnd == 1) chImg();
            }
            else if(scrollEnd == 0){
                nextPage.css("display","none");
            }
        }
        else{//向下滾動
            if(first.position().left+delta*((first.width()-aa.width())/scrollSpeed)<0) 
                first.offset({left:pos1.left+delta*((first.width()-aa.width())/scrollSpeed)});

            if(second.position().left+delta*((second.width()-aa.width())/scrollSpeed)<0) 
                second.offset({left:pos2.left+delta*((second.width()-aa.width())/scrollSpeed)});

            if(third.position().left+delta*((third.width()-aa.width())/scrollSpeed)<0) 
                third.offset({left:pos3.left+delta*((third.width()-aa.width())/scrollSpeed)});
        }
}

//觸控
function wetherScroll(){
    //電腦版
    window.addEventListener('mousedown',function(event){
        event.preventDefault(); //防止預設事件
        if(touchTime == 0) {
            // console.log("1");
            // nextpageA();
            bgmTurnOn = true;
        }
        if(touchTime != 0) {
            if(bgmTurnOn == false) {
                BGM();
            }
        }  
    }, {passive: false});

    obj.addEventListener('mousedown',function(event){
        event.preventDefault();
        if(sec >= num) {
            touchTime++;
            // console.log(touchTime);
            if(touchTime == 1 && scrollStart == false){
                ani = setInterval(animator,10);
            }
        }
        /*if(touchTime>0) {
            touchAudio();
            changeA = !changeA;
        }*/
    }, false);

    // window.addEventListener('touchstart',function(event){
    //     if(touchTime == 0) {
    //         console.log("1");
    //         nextpageA();
    //         bgmTurnOn = true;
    //     }
    //     if(touchTime != 0) {
    //         if(bgmTurnOn == false) {
    //             BGM();
    //         }
    //     }  
    // }, {passive: false});
    window.addEventListener('touchmove',function(event){
        event.preventDefault(); //防止手機預設觸控事件
    }, {passive: false});

    obj.addEventListener('touchstart',function(event){
        if(sec >= num) {
            touchTime++;
            if(touchTime == 1){
                ani = setInterval(animator,10);
            }
        }
        /*if(touchTime>0) {
            touchAudio();
            changeA = !changeA;
        }*/
        var touch = event.targetTouches[0];
        startX = touch.screenX;
    }, false);
    obj.addEventListener('touchmove',function(event){
        var pos1 = first.offset();
        var pos2 = second.offset();
        var pos3 = third.offset();
        var touch = event.targetTouches[0];
        endX = touch.screenX;
        var distanceX = (endX - startX);
        // var clientWidth = document.documentElement.clientWidth;
        if(startX!=Math.abs(distanceX) && sec > num && touchTime > 0 && stopAni>playAniTime){
            // if(Math.abs(distanceX)>clientWidth*0.05){
                if(distanceX<0){
                    if(first.position().left+distanceX*((first.width()-aa.width())/touchSpeed)>(-first.width() + aa.width()))
                        first.offset({left:pos1.left+distanceX*((first.width()-aa.width())/touchSpeed)});

                    if(second.position().left+distanceX*((second.width()-aa.width())/touchSpeed)>(-second.width() + aa.width())) 
                        second.offset({left:pos2.left+distanceX*((second.width()-aa.width())/touchSpeed)});

                    if(third.position().left+distanceX*((third.width()-aa.width())/touchSpeed)>(-third.width() + aa.width())) 
                        third.offset({left:pos3.left+distanceX*((third.width()-aa.width())/touchSpeed)});

                    //換頁提示    
                    if(first.position().left+distanceX*((first.width()-aa.width())/touchSpeed)<(-first.width() + aa.width())
                        && first.position().left+distanceX*((first.width()-aa.width())/touchSpeed)<(-first.width() + aa.width())
                        && first.position().left+distanceX*((first.width()-aa.width())/touchSpeed)<(-first.width() + aa.width())){
                            // nextPage.style.display = "";
                            scrollEnd++;
                            if(scrollEnd == 1) nextPage.css("display","");
                    }
                    else{
                        // nextPage.style.display = "none";
                        if(scrollEnd == 0) nextPage.css("display","none");
                    }
                }
                else{
                    if(first.position().left+distanceX*((first.width()-aa.width())/touchSpeed)<0)
                        first.offset({left:pos1.left+distanceX*((first.width()-aa.width())/touchSpeed)});

                    if(second.position().left+distanceX*((second.width()-aa.width())/touchSpeed)<0) 
                        second.offset({left:pos2.left+distanceX*((second.width()-aa.width())/touchSpeed)});

                    if(third.position().left+distanceX*((third.width()-aa.width())/touchSpeed)<0) 
                        third.offset({left:pos3.left+distanceX*((third.width()-aa.width())/touchSpeed)});
                }
            startX = endX;
        }
    });
    obj.addEventListener('touchend',function(event){
        startX = endX = 0;
    }, false);
}

/*點擊第一下的動畫*/
function animator(){
    if(stopAni>playAniTime) clearInterval(ani);
    var pos1 = first.offset();
    var pos2 = second.offset();
    var pos3 = third.offset();
    first.offset({left:pos1.left-((first.width()-aa.width())/touchSpeed)});
    second.offset({left:pos2.left-((second.width()-aa.width())/touchSpeed)});
    third.offset({left:pos3.left-((third.width()-aa.width())/touchSpeed)});
    stopAni++;
    // console.log(stopAni);
}

/*音樂*/
function BGM(){
    if(sec>num){
        // player.load();
        player.play();
        bgmTurnOn = true;
    }
   
}
/*function nextpageA(){
    if(bgmTurnOn == false) bgmTurnOn = true;
    tAudio.volume = 0
    nAudio.load();
    nAudio.play();
    if(nPage) document.location.href="https://jessicalin01.github.io/Chap1/";
    // document.location.href="https://xiaomo3214.github.io/zzz/Chapter1/index.html";
}*/
/*function touchAudio(){
    // if(nPage)  tAudio.volume=0;
    // tAudio.volume=1;
    if(changeA) {
        tAudio.src = "audio/Ch1_01_SE02_Chimes.wav";
        // tAudio.src = "audio/mp3_320/Ch1_01_SE02_Chimes.mp3";
        tAudio.load();
        tAudio.play();
    }
    else if(!changeA) {
        tAudio.src = "audio/Ch1_01_SE01_Chimes.wav";
        // tAudio.src = "audio/mp3_320/Ch1_01_SE01_Chimes.mp3";
        tAudio.load();
        tAudio.play();
    }
}*/
var nPage = false;
function changepage(){
    // nPage = true;
    // tAudio.volume = 0
    // nAudio.load();
    // nAudio.play();
    // setTimeout("nextpageA()",2000);
    document.location.href ="./chap1/index.html";
}

// function chImg(){
//     // console.log(i);
//     document.getElementById("nextPage").src = nextButton_white[i];
//     i++;
//     if (i>=size) i = 0;
//     setTimeout("chImg()",300);
// }