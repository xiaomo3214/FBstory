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
    document.getElementById("3-1").style.display = "block";
  }
}

/*3-1*/
function changepages() {
  document.getElementById("3-2").style.display = "block";
  document.getElementById("3-1").style.display = "none";
}
/*3-2*/ 
function changepagesthree() {
  document.getElementById("3-3").style.display = "block";
  document.getElementById("3-2").style.display = "none";
}
function changepagesback() {
  document.getElementById("3-1").style.display = "block";
  document.getElementById("3-2").style.display = "none";
}

/*3-3*/
function bluetowhite(){
  document.getElementById("blueone").style.display = "none";
  document.getElementById("whiteone").style.display = "block";
}
function whitetoblue(){
  document.getElementById("blueone").style.display = "block";
  document.getElementById("whiteone").style.display = "none";
}

function changepagesfour() {
  document.getElementById("3-4").style.display = "block";
  document.getElementById("3-3").style.display = "none";
}
function changepagesbacktwo() {
  document.getElementById("3-2").style.display = "block";
  document.getElementById("3-3").style.display = "none";
}


/*3-4*/
function changepagesfive() {
    document.getElementById("3-5").style.display = "block";
    document.getElementById("3-4").style.display = "none";
  }
  function changepagesbackthree() {
    document.getElementById("3-3").style.display = "block";
    document.getElementById("3-4").style.display = "none";
  }


/*3-5*/

function changepagessix() {
  document.getElementById("3-6").style.display = "block";
  document.getElementById("3-5").style.display = "none";
}
function changepagesbackfourone() {
  document.getElementById("3-4").style.display = "block";
  document.getElementById("3-5").style.display = "none";
}




