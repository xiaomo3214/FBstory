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
    document.getElementById("cover").style.display = "none";
    document.getElementById("4-1").style.display = "block";
  }
}

/*4-1*/

function changepages(){
  document.getElementById("4-2").style.display = "block";
  document.getElementById("4-1").style.display = "none";
}

/*4-2*/ 


function changepagesthree() {
  document.getElementById("4-3").style.display = "block";
  document.getElementById("4-2").style.display = "none";
}
function changepagesback() {
  document.getElementById("4-1").style.display = "block";
  document.getElementById("4-2").style.display = "none";
}





/*4-3*/
function changepagesfour() {
  document.getElementById("4-4").style.display = "block";
  document.getElementById("4-3").style.display = "none";
}
function changepagesbacktwo() {
  document.getElementById("4-2").style.display = "block";
  document.getElementById("4-3").style.display = "none";
}


/*4-4*/
function changepagesfive() {
    document.getElementById("4-5").style.display = "block";
    document.getElementById("4-4").style.display = "none";
  }
function changepagesbackthree() {
    document.getElementById("4-3").style.display = "block";
    document.getElementById("4-4").style.display = "none";
  }


/*4-5*/

function changepagessix() {
  document.getElementById("4-6").style.display = "block";
  document.getElementById("4-5").style.display = "none";
}
function changepagesbackfour() {
  document.getElementById("4-4").style.display = "block";
  document.getElementById("4-5").style.display = "none";
}



/*4-6*/
function changepagesseven() {
  document.getElementById("4-7").style.display = "block";
  document.getElementById("4-6").style.display = "none";
}
function changepagesbackfive() {
  document.getElementById("4-5").style.display = "block";
  document.getElementById("4-6").style.display = "none";
}

/*4-7*/
function changepageseight() {
  document.getElementById("4-8").style.display = "block";
  document.getElementById("4-7").style.display = "none";
}
function changepagesbacksix() {
  document.getElementById("4-6").style.display = "block";
  document.getElementById("4-7").style.display = "none";
}

/*4-8*/
function changepagesnine() {
  document.getElementById("4-9").style.display = "block";
  document.getElementById("4-8").style.display = "none";
}
function changepagesbackseven() {
  document.getElementById("4-7").style.display = "block";
  document.getElementById("4-8").style.display = "none";
}

/*4-9*/
function changepagesten() {
  document.getElementById("4-10").style.display = "block";
  document.getElementById("4-9").style.display = "none";
}
function changepagesbackeight() {
  document.getElementById("4-8").style.display = "block";
  document.getElementById("4-9").style.display = "none";
}

/*4-10*/
function changepageseleven() {
  document.getElementById("4-11").style.display = "block";
  document.getElementById("4-10").style.display = "none";
}
function changepagesbacknine() {
  document.getElementById("4-9").style.display = "block";
  document.getElementById("4-10").style.display = "none";
}

/*4-11*/
function changepagestwelve() {
  document.getElementById("4-12").style.display = "block";
  document.getElementById("4-11").style.display = "none";
}
function changepagesbackten() {
  document.getElementById("4-10").style.display = "block";
  document.getElementById("4-11").style.display = "none";
}