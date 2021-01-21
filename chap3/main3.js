/*Music and Sound*/
var audiobgm = document.getElementById("bgm") 
var soundnextpage1 = new Audio("Music/Ch3_01_SE02_NextPage.mp3")
var soundnextpage2 = new Audio("Music/Ch3_02_SE01_NextPage.mp3")
var soundnextpage3 = new Audio("Music/Ch3_03_SE03_NextPage.mp3")
var soundnextpage4 = new Audio("Music/")
var soundnextpage5 = new Audio("Music/")

/*3-1*/
var petsmove = new Audio("Music/Ch3_01_SE01_Petsmove.mp3")
/*3-3*/
var switchoff = new Audio("Music/Ch3_03_SE01_SwitchOff.mp3")
var switchon = new Audio("Music/Ch3_03_SE02_SwitchOn.mp3")
/*3-4*/
var dontknow = new Audio("Music/Ch3_04_SE01(without BGM).mp3")

function playmusic(){
  audiobgm.play();
}


/*cover*/
var sec = 0, num = 10;
Timer();
function Timer(){
  if(sec<num || document.readyState != "complete") setTimeout("subSomething();Timer();",1000); 
  sec++;
}
// document.onreadystatechange = subSomething;
function subSomething(){
  if(document.readyState == "complete" && sec >= num){ 
    document.getElementById("cover").style.display = "none";
    document.getElementById("3-1").style.display = "block";
    document.getElementById("nextpage1").style.display = "none";
    document.getElementById("nextpage2").style.display = "none";
    document.getElementById("nextpage3").style.display = "none";
    document.getElementById("nextpage4").style.display = "none";
    document.getElementById("prepage4").style.display = "none";
    document.getElementById("nextpage5").style.display = "none";
  }
}

/*3-1*/
function changepages() {
  document.getElementById("3-2").style.display = "block";
  document.getElementById("3-1").style.display = "none";
  nexttwo();
}
/*3-2*/ 
var nexttime2 = 0, stoptime2 = 7;
function nexttwo(){
  // console.log(nexttime);
  nexttime2++;
  if(nexttime2 == stoptime2-1) document.getElementById("nextpage2").style.display = "block";
  if(nexttime2 < stoptime2) setTimeout("nexttwo();",1000);
}

function changepagesthree() {
  audiobgm.src = 'Music/BGM_CH3_02.mp3';
  document.getElementById("3-3").style.display = "block";
  document.getElementById("3-2").style.display = "none";
  nextthree();
}
function changepagesback() {
  document.getElementById("3-1").style.display = "block";
  document.getElementById("3-2").style.display = "none";
}

/*3-3*/
var nexttime3 = 0, stoptime = 5;
function nextthree(){
  // console.log(nexttime);
  nexttime3++;
  if(nexttime3 == stoptime-1) document.getElementById("nextpage3").style.display = "block";
  if(nexttime3 < stoptime) setTimeout("nextthree();",1000);
}

function bluetowhite(){
  document.getElementById("blueone").style.display = "none";
  document.getElementById("whiteone").style.display = "block";
}
function whitetoblue(){
  document.getElementById("blueone").style.display = "block";
  document.getElementById("whiteone").style.display = "none";
}

function changepagesfour() {
  audiobgm.src = 'Music/BGM_CH3_03.mp3';
  document.getElementById("3-4").style.display = "block";
  document.getElementById("3-3").style.display = "none";
}
function changepagesbacktwo() {
  audiobgm.src = 'Music/BGM_CH3_01.mp3';
  document.getElementById("3-2").style.display = "block";
  document.getElementById("3-3").style.display = "none";
}


/*3-4*/
function closeone(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechooseone").style.display = "none";
  document.getElementById("bullyone").style.display = "block";
  document.getElementById("peanutone").style.display = "block";
}
function likeone(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechooseone").style.display = "none";
  document.getElementById("bullyone").style.display = "block";
  document.getElementById("peanutone").style.display = "block";
}
function shareone(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechooseone").style.display = "none";
  document.getElementById("bullyone").style.display = "block";
  document.getElementById("peanutone").style.display = "block";
}
function peanutone(){
  document.getElementById("bullypicturechoose").style.display = "block";
  document.getElementById("bullypicturechoosetwo").style.display = "block";
}


function closetwo(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosetwo").style.display = "none";
  document.getElementById("bullytwo").style.display = "block";
  document.getElementById("peanuttwo").style.display = "block";
  document.getElementById("peanutone").style.display = "none";
}
function liketwo(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosetwo").style.display = "none";
  document.getElementById("bullytwo").style.display = "block";
  document.getElementById("peanuttwo").style.display = "block";
  document.getElementById("peanutone").style.display = "none";
}
function sharetwo(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosetwo").style.display = "none";
  document.getElementById("bullytwo").style.display = "block";
  document.getElementById("peanuttwo").style.display = "block";
  document.getElementById("peanutone").style.display = "none";
}
function peanuttwo(){
  document.getElementById("bullypicturechoose").style.display = "block";
  document.getElementById("bullypicturechoosethree").style.display = "block";
}


function closethree(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosethree").style.display = "none";
  document.getElementById("bullythree").style.display = "block";
  document.getElementById("peanutthree").style.display = "block";
  document.getElementById("peanuttwo").style.display = "none";
}
function likethree(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosethree").style.display = "none";
  document.getElementById("bullythree").style.display = "block";
  document.getElementById("peanutthree").style.display = "block";
  document.getElementById("peanuttwo").style.display = "none";
}
function sharethree(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosethree").style.display = "none";
  document.getElementById("bullythree").style.display = "block";
  document.getElementById("peanutthree").style.display = "block";
  document.getElementById("peanuttwo").style.display = "none";
}
function peanutthree(){
  document.getElementById("bullypicturechoose").style.display = "block";
  document.getElementById("bullypicturechoosefour").style.display = "block";
}


function closefour(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosefour").style.display = "none";
  document.getElementById("bullyfour").style.display = "block";
  document.getElementById("peanutfour").style.display = "block";
  document.getElementById("peanutthree").style.display = "none";
}
function likefour(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosefour").style.display = "none";
  document.getElementById("bullyfour").style.display = "block";
  document.getElementById("peanutfour").style.display = "block";
  document.getElementById("peanutthree").style.display = "none";
}
function sharefour(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosefour").style.display = "none";
  document.getElementById("bullyfour").style.display = "block";
  document.getElementById("peanutfour").style.display = "block";
  document.getElementById("peanutthree").style.display = "none";
}
function peanutfour(){
  document.getElementById("bullypicturechoose").style.display = "block";
  document.getElementById("bullypicturechoosefive").style.display = "block";
}


function closefive(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosefive").style.display = "none";
  document.getElementById("nextpage4").style.display = "block";
  document.getElementById("prepage4").style.display = "block";
  document.getElementById("bullyfive").style.display = "block";
  document.getElementById("peanutfive").style.display = "block";
  document.getElementById("peanutfour").style.display = "none";
  $(function(){     
    $("#pea").animate({
      top:"+=500px",
      // opacity:0
    },3000);
  //3000ms,代表在3s内完成该动画
  })
}
function likefive(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosefive").style.display = "none";
  document.getElementById("nextpage4").style.display = "block";
  document.getElementById("prepage4").style.display = "block";
  document.getElementById("bullyfive").style.display = "block";
  document.getElementById("peanutfive").style.display = "block";
  document.getElementById("peanutfour").style.display = "none";
  $(function(){     
    $("#pea").animate({
      top:"+=500px",
      // opacity:0
    },3000);
  //3000ms,代表在3s内完成该动画
  })
}
function sharefive(){
  document.getElementById("bullypicturechoose").style.display = "none";
  document.getElementById("bullypicturechoosefive").style.display = "none";
  document.getElementById("nextpage4").style.display = "block";
  document.getElementById("prepage4").style.display = "block";
  document.getElementById("bullyfive").style.display = "block";
  document.getElementById("peanutfive").style.display = "block";
  document.getElementById("peanutfour").style.display = "none";
  $(function(){     
    $("#pea").animate({
      top:"+=500px",
      // opacity:0
    },3000);
  //3000ms,代表在3s内完成该动画
  })
}

function changepagesfive() {
  audiobgm.src = 'Music/BGM_Ch3_05.mp3';
  document.getElementById("3-5").style.display = "block";
  document.getElementById("3-4").style.display = "none";
  nextfive();
}
function changepagesbackthree() {
  audiobgm.src = 'Music/BGM_CH3_02.mp3';
    document.getElementById("3-3").style.display = "block";
    document.getElementById("3-4").style.display = "none";
}


/*3-5*/
var nexttime5 = 0;
function nextfive(){
  // console.log(nexttime);
  nexttime5++;
  if(nexttime5 == stoptime-1) document.getElementById("nextpage5").style.display = "block";
  if(nexttime5 < stoptime) setTimeout("nextfive();",1000);
}

function changepagessix() {
  document.getElementById("3-6").style.display = "block";
  document.getElementById("3-5").style.display = "none";
}
function changepagesbackfourone() {
  audiobgm.src = 'Music/BGM_CH3_03.mp3';
  document.getElementById("3-4").style.display = "block";
  document.getElementById("3-5").style.display = "none";
}




