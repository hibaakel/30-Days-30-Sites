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
