/*Music and Sound*/
var audiobgm = document.getElementById("bgm") 
var soundnextpage1 = new Audio("Music/Ch4_01_SE05_NextPage.mp3")
var soundnextpage2 = new Audio("Music/Ch4_02_SE02_NextPage.mp3")
var soundnextpage3 = new Audio("Music/Ch4_03_SE01_NextPage.mp3")
var soundnextpage4 = new Audio("Music/Ch4_04-10_NextPage_New.mp3")
var soundnextpage5 = new Audio("Music/")

/*4-1*/
var changeone = new Audio("Music/Ch4_01_SE01.mp3")
var changetwo = new Audio("Music/Ch4_01_SE02.mp3")
var changethree = new Audio("Music/Ch4_01_SE03.mp3")
var changefour = new Audio("Music/Ch4_01_SE04.mp3")
/*4-2*/
var MsgSound1 = new Audio("Music/Ch4_02_SE01_MsgSound.mp3")
/*4-6*/
var MsgSound2 = new Audio("Music/Ch4_06_SE01_MsgSound.mp3")
/*4-7*/
var MsgSound3 = new Audio("Music/Ch4_07_SE01_MsgSound.mp3")

function playmusic(){
  audiobgm.play();
}


/*cover*/
var sec = 0, num = 5;
Timer();
function Timer(){
  if(sec<num || document.readyState != "complete") {
    setTimeout("subSomething();",1000);
    setTimeout("Timer();",1000); 
  }
  sec++;
}
function subSomething(){
  if(document.readyState == "complete" && sec >= num){ 
    changeone.play();
    document.getElementById("cover").style.display = "none";
    document.getElementById("4-1").style.display = "block";
    document.getElementById("nextpages").style.display = "none";
    document.getElementById("nextpages2").style.display = "none";
    document.getElementById("nextpages3").style.display = "none";
    document.getElementById("nextpages4").style.display = "none";
    document.getElementById("nextpages5").style.display = "none";
    document.getElementById("nextpages6").style.display = "none";
    document.getElementById("nextpages7").style.display = "none";
    document.getElementById("nextpages8").style.display = "none";
    document.getElementById("nextpages9").style.display = "none";
    document.getElementById("nextpages10").style.display = "none";
    document.getElementById("nextpages11").style.display = "none";
    document.getElementById("nextpagescard").style.display = "none";
  }
}




/*4-1*/

function changeImageone() {
  changetwo.play();
  document.getElementById("imagetwo").style.display = "block";
  document.getElementById("imageone").style.display = "none";
}
function changeImagetwo() {
  changethree.play();
  document.getElementById("imagetwo").style.display = "none";
  document.getElementById("imagethree").style.display = "block";
}
function changeImagethree() {
  changefour.play();
  document.getElementById("imagethree").style.display = "none";
  document.getElementById("imagefour").style.display = "block";
}
function changeImagefour() {
  changetwo.play();
  document.getElementById("imagefive").style.display = "block";
  document.getElementById("imagefour").style.display = "none";
}
function changeImagefive() {
  changethree.play();
  document.getElementById("imagefive").style.display = "none";
  document.getElementById("imagesix").style.display = "block";
  document.getElementById("nextpages").style.display = "block";
}
function changeImagesix() {
  changefour.play();
  document.getElementById("imagesix").style.display = "none";
  document.getElementById("imageseven").style.display = "block";
}
function changeImageseven() {
  changetwo.play();
  document.getElementById("imageeight").style.display = "block";
  document.getElementById("imageseven").style.display = "none";
}
function changeImageeight() {
  changethree.play();
  document.getElementById("imageeight").style.display = "none";
  document.getElementById("imagenine").style.display = "block";
}
function changeImagenine() {
  changefour.play();
  document.getElementById("imagenine").style.display = "none";
  document.getElementById("imageseven").style.display = "block";
}

function changepages() {
  changefour.play();
  document.getElementById("4-1-2").style.display = "block";
  document.getElementById("4-1").style.display = "none";
}



function changepagestwo() {
  audiobgm.src = 'Music/BGM_CH4_02.mp3';
  document.getElementById("4-2").style.display = "block";
  document.getElementById("4-1-2").style.display = "none";
  setTimeout("changeGIF()",4000);
  nexttwo();
}



/*4-2*/ 
function changeGIF(){
  // console.log("A");
  document.getElementById('bg1').src = "images/Chap4/4-2/4_2_bg_gif_02.gif";
}

var nexttime = 0, stoptime = 5;
function nexttwo(){
  // console.log(nexttime);
  nexttime++;
  if(nexttime == stoptime-1) document.getElementById("nextpages2").style.display = "block";
  if(nexttime < stoptime) setTimeout("nexttwo();",1000);
}

function changepagesthree() {
  document.getElementById("4-3").style.display = "block";
  document.getElementById("4-2").style.display = "none";
  nextthree();
}
function changepagesback() {
  document.getElementById("4-1").style.display = "block";
  document.getElementById("4-2").style.display = "none";
}




/*4-3*/
var nexttime3 = 0;
function nextthree(){
  // console.log(nexttime);
  nexttime3++;
  if(nexttime3 == stoptime-1) document.getElementById("nextpages3").style.display = "block";
  if(nexttime3 < stoptime) setTimeout("nextthree();",1000);
}

function changepagesfour() {
  audiobgm.src = 'Music/BGM_CH4_04.mp3';
  document.getElementById("4-4").style.display = "block";
  document.getElementById("bg4").src = "images/Chap4/4-4/starPosition.png";
  document.getElementById("4-3").style.display = "none";
  // nextfour();
}
function changepagesbacktwo() {
  document.getElementById("4-2").style.display = "block";
  document.getElementById("4-3").style.display = "none";
}


/*4-4*/
var nexttime4 = 0, stoptime4 = 3;
function nextfour(){
  // console.log(nexttime);
  nexttime4++;
  if(nexttime4 == stoptime4-1) {
    // document.getElementById("nextpages4").style.display = "block";
    document.getElementById("4-5").style.display = "block";
    document.getElementById("4-4").style.display = "none";
    document.getElementById("bg4").src = "images/Chap4/4-4/4_5_bg.png";
    nextfive();
  }
  if(nexttime4 < stoptime4) setTimeout("nextfour();",1000);
}

function bg4_gif(){
  document.getElementById("bg4").src = "images/Chap4/4-4/4_4_bg_gif.gif";
  nexttime4 = 0;
  nextfour();
}

function changepagesfive() {
  document.getElementById("4-5").style.display = "block";
  document.getElementById("4-4").style.display = "none";
  nextfive();
  }
function changepagesbackthree() {
  audiobgm.src = 'Music/BGM_CH4_02.mp3';
  document.getElementById("4-3").style.display = "block";
  document.getElementById("4-4").style.display = "none";
  }


/*4-5*/
var nexttime5 = 0;
function nextfive(){
  // console.log(nexttime);
  nexttime5++;
  if(nexttime5 == stoptime-1) document.getElementById("nextpages5").style.display = "block";
  if(nexttime5 < stoptime) setTimeout("nextfive();",1000);
}

function changepagessix() {
  document.getElementById("4-6").style.display = "block";
  document.getElementById("4-5").style.display = "none";
}
function changepagesbackfour() {
  document.getElementById("4-3").style.display = "block";
  document.getElementById("4-5").style.display = "none";
}



/*4-6*/
function wordheartone(){
  MsgSound2.play();
  document.getElementById('wordheartone').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-70px";
}
function wordhearttwo(){
  MsgSound2.play();
  document.getElementById('wordhearttwo').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-140px";
}
function wordheartthree(){
  MsgSound2.play();
  document.getElementById('wordheartthree').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-210px";
}
function wordheartfour(){
  MsgSound2.play();
  document.getElementById('wordheartfour').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-280px";
}
function wordheartfive(){
  MsgSound2.play();
  document.getElementById('wordheartfive').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-350px";
}
function wordheartsix(){
  MsgSound2.play();
  document.getElementById('wordheartsix').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-420px";
}
function wordheartseven(){
  MsgSound2.play();
  document.getElementById('wordheartseven').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-490px";
}
function wordhearteight(){
  MsgSound2.play();
  document.getElementById('wordhearteight').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-560px";
}
function wordheartnine(){
  MsgSound2.play();
  document.getElementById('wordheartnine').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-630px";
}
function wordheartten(){
  MsgSound2.play();
  document.getElementById('wordheartten').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-700px";
}
function wordhearteleven(){
  MsgSound2.play();
  document.getElementById('wordhearteleven').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-770px";
}
function wordhearttwelve(){
  MsgSound2.play();
  document.getElementById('wordhearttwelve').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById('wordpress').style.marginTop = "-920px";
}
function wordheartthirteen(){
  MsgSound2.play();
  document.getElementById('wordheartthirteen').src="images/Chap4/4-6/4_6_heart.png";
  document.getElementById("nextpages6").style.display = "block";
}

function changepagesseven() {
  document.getElementById("4-7").style.display = "block";
  document.getElementById("4-6").style.display = "none";
  nextseven();
}
function changepagesbackfive() {
  document.getElementById("4-4").style.display = "block";
  document.getElementById("bg4").src = "images/Chap4/4-4/starPosition.png";
  // nextfour();
  document.getElementById("4-6").style.display = "none";
}

/*4-7*/
var nexttime7 = 0;
function nextseven(){
  // console.log(nexttime);
  nexttime7++;
  if(nexttime7 == stoptime-1) document.getElementById("nextpages7").style.display = "block";
  if(nexttime7 < stoptime) setTimeout("nextseven();",1000);
}

function starone(){
  document.getElementById("staronebg").style.display = "block";
}
function startwo(){
  document.getElementById("startwobg").style.display = "block";
}
function starthree(){
  document.getElementById("starthreebg").style.display = "block";
}

function closeone(){
  MsgSound3.play();
  document.getElementById("staronebg").style.display = "none";
}
function closetwo(){
  MsgSound3.play();
  document.getElementById("startwobg").style.display = "none";
}
function closethree(){
  MsgSound3.play();
  document.getElementById("starthreebg").style.display = "none";
}

function changepageseight() {
  audiobgm.src = 'Music/BGM_CH4_08.mp3';
  document.getElementById("4-8").style.display = "block";
  document.getElementById("4-7").style.display = "none";
}
function changepagesbacksix() {
  document.getElementById("4-6").style.display = "block";
  document.getElementById("4-7").style.display = "none";
}

/*4-8*/
function climbdotup(){
  document.getElementById("climbdotmid").style.display = "block";
} 
function climbdotmid(){
  document.getElementById("climbdotdown").style.display = "block";
  document.getElementById("nextpages8").style.display = "block";
} 

function changepagesnine() {
  document.getElementById("4-9").style.display = "block";
  document.getElementById("4-8").style.display = "none";
  nextnine();
}
function changepagesbackseven() {
  audiobgm.src = 'Music/BGM_CH4_04.mp3';
  document.getElementById("4-7").style.display = "block";
  document.getElementById("4-8").style.display = "none";
}

/*4-9*/
var nexttime9 = 0;
function nextnine(){
  // console.log(nexttime);
  nexttime9++;
  if(nexttime9 == stoptime-1) document.getElementById("nextpages9").style.display = "block";
  if(nexttime9 < stoptime) setTimeout("nextnine();",1000);
}

function changepagesbackeight() {
  document.getElementById("4-8").style.display = "block";
  document.getElementById("4-9").style.display = "none";
}
function changepagesten() {
  document.getElementById("4-10").style.display = "block";
  document.getElementById("4-9").style.display = "none";
  nextten();
}

/*4-10*/
var nexttime10 = 0;
function nextten(){
  // console.log(nexttime);
  nexttime10++;
  if(nexttime10 == stoptime-1) document.getElementById("nextpages10").style.display = "block";
  if(nexttime10 < stoptime) setTimeout("nextten();",1000);
}

function seasawone() {
  document.getElementById("seasawtwo").style.display = "block";
  document.getElementById("seasawone").style.display = "none";
}
function seasawtwo() {
  document.getElementById("seasawone").style.display = "block";
  document.getElementById("seasawtwo").style.display = "none";
}

function changepagesbacknine() {
  document.getElementById("4-9").style.display = "block";
  document.getElementById("4-10").style.display = "none";
}
function changepageseleven() {
  document.getElementById("4-11").style.display = "block";
  document.getElementById("4-10").style.display = "none";
  $(function(){
             
    $("#namelist").animate({
      top:"-=2400px"  
  },20000);
  
  //3000ms,代表在3s内完成该动画
  })
  nextfinish();
}

/*4-11*/

var nexttime11 = 0, stoptime11 = 25;
function nextfinish(){
  // console.log(nexttime);
  nexttime11++;
  if(nexttime11 == stoptime11-1) {
    document.getElementById("finish").src = "images/Chap4/animation/Animation_4.gif";
    document.getElementById("4-f").style.display = "block";
    document.getElementById("4-11").style.display = "none";
    cards();
  }
  if(nexttime11 < stoptime11) setTimeout("nextfinish();",1000);
}

function changepagestwelve() {
  document.getElementById("4-f").style.display = "block";
  document.getElementById("finish").src = "images/Chap4/animation/Animation_4.gif";
  document.getElementById("4-11").style.display = "none";
}
function changepagesbackten() {
  document.getElementById("4-10").style.display = "block";
  document.getElementById("4-11").style.display = "none";
}

/*cards*/
var nexttimeF = 0, stoptimeF = 10;
function cards(){
  // console.log(nexttime);
  nexttimeF++;
  if(nexttimeF == stoptimeF-1) {
    document.getElementById("nextpagescard").style.display = "block";
    // document.getElementById("4-f").style.display = "none";
    // audiobgm.src = 'Music/BGM_CH1_04-1.mp3';
  }
  if(nexttimeF < stoptimeF) setTimeout("cards();",1000);
}

function nextcardone() {
  document.getElementById("cardone").style.display = "block";
  document.getElementById("4-f").style.display = "none";
}
function changepagesbackeleven() {
  document.getElementById("4-11").style.display = "block";
  document.getElementById("nextpages11").style.display = "block";
  document.getElementById("4-f").style.display = "none";
  document.getElementById("finish").src = "images/Chap4/animation/Animation_4_loop.gif";
}


function nextcardtwo(){
  document.getElementById("cardtwo").style.display = "block";
  document.getElementById("cardone").style.display = "none";
}

function cardbackone(){
  document.getElementById("cardone").style.display = "block";
  document.getElementById("cardtwo").style.display = "none";
}
function nextcardthree(){
  document.getElementById("cardthree").style.display = "block";
  document.getElementById("cardtwo").style.display = "none";
}

function cardbacktwo(){
  document.getElementById("cardtwo").style.display = "block";
  document.getElementById("cardthree").style.display = "none";
}
function nextcardfour(){
  document.getElementById("cardfour").style.display = "block";
  document.getElementById("cardthree").style.display = "none";
}

function cardbackthree(){
  document.getElementById("cardthree").style.display = "block";
  document.getElementById("cardfour").style.display = "none";
}
function nextcardfive(){
  document.getElementById("cardfive").style.display = "block";
  document.getElementById("cardfour").style.display = "none";
}

function cardbackfour(){
  document.getElementById("cardfour").style.display = "block";
  document.getElementById("cardfive").style.display = "none";
}
function nextcardsix(){
  document.getElementById("cardsix").style.display = "block";
  document.getElementById("cardfive").style.display = "none";
}

function cardbackfive(){
  document.getElementById("cardfive").style.display = "block";
  document.getElementById("cardsix").style.display = "none";
}
function nextcardseven(){
  document.getElementById("cardseven").style.display = "block";
  document.getElementById("cardsix").style.display = "none";
}

function cardbacksix(){
  document.getElementById("cardsix").style.display = "block";
  document.getElementById("cardseven").style.display = "none";
}
function nextcardeight(){
  document.getElementById("cardeight").style.display = "block";
  document.getElementById("cardseven").style.display = "none";
}

function cardbackseven(){
  document.getElementById("cardseven").style.display = "block";
  document.getElementById("cardeight").style.display = "none";
}
