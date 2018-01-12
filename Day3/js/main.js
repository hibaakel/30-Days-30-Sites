//**********************//
//**Nyc-Event Functions**//
//**********************//

//**Music-Event Function**//
//**********************//
//Showdiv function//
 function Showdiv() {
   var x = document.getElementById("event").style.display= "block";

  }

 //Hidediv function//
 function Hidediv() {
    var x = document.getElementById("event").style.display= "none";

 }

 //**Sport-Event Function**//
 //**********************//

 //Showdiv1 function//
 function Showdiv1() {
   var x = document.getElementById("event1").style.display= "block";
 }
 //Hidediv1 function//
 function Hidediv1() {
   var x = document.getElementById("event1").style.display= "none";
 }

 //**Holiday-Event Function**//
 //**********************//

 //Showdiv2 function//
 function Showdiv2() {
   var x = document.getElementById("event2").style.display= "block";
 }
 //Hidediv1 function//
 function Hidediv2() {
    var x = document.getElementById("event2").style.display= "none";
 }


//**********************//
//**Hotels Functions**//
//**********************//

//**Submit button Functions**//
//**********************//

//**Function Show the Content of our dives**//

      function contentFunction(){
        var index = document.getElementById("mySelect").selectedIndex;
        var option = document.getElementById("mySelect").options;
        var num = option[index].value;
        if(num==='5'){
          var x = document.getElementById("ev").style.display= "block";
        }
        if(num==='4'){
          var x = document.getElementById("ev1").style.display= "block";
        }
        if(num==='3'){
          var x = document.getElementById("ev2").style.display= "block";
        }
        if(num==='2'){
          var x = document.getElementById("ev3").style.display= "block";
        }
      }
//**********************//
//**clean button Functions**//
//**********************//
 function my_func2(){
    Hidecontent();
    backtofirst();
  }
  //**Function Hide the Content of our dives**//
function Hidecontent(){
  var empty = document.querySelector("#ev").style.display= "none";
  var empty = document.querySelector("#ev1").style.display= "none";
  var empty = document.querySelector("#ev2").style.display= "none";
  var empty = document.querySelector("#ev3").style.display= "none";

}
//**function make the select options back to the first choice**//
function backtofirst(){
  var x =document.getElementById("mySelect").selectedIndex = 0;
}
//**********************//
//**Services Functions**//
//**********************//

//**Submit button Function**//
//**********************//
function serviceFunction() {

  var y= document.getElementById("checkmap") ;
  if(y.checked) {
    var x = document.getElementById("map").style.display= "block";
  }
  var z= document.getElementById("checksearch") ;
  if(z.checked) {
    var a = document.getElementById("search").style.display= "block";
  }

}
//**exict button of search div Function**//
//**********************//
function excitS_func(){
   hidesearchFunction();
   unchecked();
 }

function hidesearchFunction(){
 var hide = document.querySelector("#search").style.display= "none";
}
function unchecked(){
  var y= document.getElementById("checksearch").checked=false;

}

//**exict button of map div Function**//
//**********************//
function excitM_func(){
   hidemapFunction();
   uncheckedmap();
 }
 function hidemapFunction() {
   var hide = document.querySelector("#map").style.display= "none";
 }
 function uncheckedmap() {
   var y= document.getElementById("checkmap").checked=false ;
 }
 //Footer Function//

 //**the plus button functions**//
 //**********************//
  //********** About********//
  function footer_func(){
    showfooter();
    hideicon();
  }
 function showfooter() {
   var show = document.querySelector("#f-c").style.display= "block";

 }
 function hideicon(){
   var h = document.querySelector("#btn-f").style.display= "none";
   var show=document.querySelector("#btn-f1").style.display= "block";
 }
 // the minus button function//
 function hide(){
   var h = document.querySelector("#btn-f").style.display= "block";
   var show=document.querySelector("#btn-f1").style.display= "none";
   var sh = document.querySelector("#f-c").style.display= "none";
 }
 //********** Thing to Do********//
 function footer_func2(){
   showfooter2();
   hideicon2();
 }
function showfooter2() {
  var show2 = document.querySelector("#f1").style.display= "block";
}
function hideicon2(){
  var h2= document.querySelector("#btn-f5").style.display= "none";
  var show2=document.querySelector("#btn-f6").style.display= "block";
}
// the minus button function//
function hide2(){
  var h22 = document.querySelector("#btn-f5").style.display= "block";
  var show22=document.querySelector("#btn-f6").style.display= "none";
  var sh22 = document.querySelector("#f1").style.display= "none";
}
 //********** Nyc-Event********//
function footer_func1(){
   showfooter1();
   hideicon1();
 }
function showfooter1() {
  var show1 = document.querySelector("#f2").style.display= "block";
}
function hideicon1(){
  var h1 = document.querySelector("#btn-f3").style.display= "none";
  var show1=document.querySelector("#btn-f4").style.display= "block";
}
// the minus button function//
function hide1(){
  var h11 = document.querySelector("#btn-f3").style.display= "block";
  var show11=document.querySelector("#btn-f4").style.display= "none";
  var sh11 = document.querySelector("#f2").style.display= "none";
}
 //********** Hotels********//
 function footer_func3(){
  showfooter3();
  hideicon3();
}
function showfooter3() {
 var show3 = document.querySelector("#f3").style.display= "block";

}
function hideicon3(){
 var h3 = document.querySelector("#btn-f7").style.display= "none";
 var show3=document.querySelector("#btn-f8").style.display= "block";
}
// the minus button function//
function hide3(){
 var h33 = document.querySelector("#btn-f7").style.display= "block";
 var show33=document.querySelector("#btn-f8").style.display= "none";
 var sh33 = document.querySelector("#f3").style.display= "none";
}
 //********** Nyc-Services********//
 function footer_func4(){
  showfooter4();
  hideicon4();
}
function showfooter4() {
 var show4 = document.querySelector("#f4").style.display= "block";

}
function hideicon4(){
 var h4 = document.querySelector("#btn-f9").style.display= "none";
 var show4=document.querySelector("#btn-f10").style.display= "block";
}
// the minus button function//
function hide4(){
 var h44 = document.querySelector("#btn-f9").style.display= "block";
 var show44=document.querySelector("#btn-f10").style.display= "none";
 var sh44 = document.querySelector("#f4").style.display= "none";
}
