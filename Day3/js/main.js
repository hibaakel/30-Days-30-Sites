//**********************//
//**Nyc-Event Functions**//
//**********************//

//**Music-Event Function**//
//**********************//
//Showdiv function//
 function Showdiv() {
   var x = document.getElementById("event");
    if (x.style.display !== "block") {
      x.style.display = "block";
    }
 }
 //Hidediv function//
 function Hidediv() {
   var x = document.getElementById("event");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
 }
 //**Sport-Event Function**//
 //**********************//
 //Showdiv1 function//
 function Showdiv1() {
   var x = document.getElementById("event1");
    if (x.style.display !== "block") {
      x.style.display = "block";
    }
 }
 //Hidediv1 function//
 function Hidediv1() {
   var x = document.getElementById("event1");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
 }
 //**Holiday-Event Function**//
 //**********************//
 //Showdiv2 function//
 function Showdiv2() {
   var x = document.getElementById("event2");
    if (x.style.display !== "block") {
      x.style.display = "block";
    }
 }
 //Hidediv1 function//
 function Hidediv2() {
   var x = document.getElementById("event2");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
 }
//**********************//
//**Hotels Functions**//
//**********************//
function optionFunction(){
  var x = document.getElementById("mySelect").options.length;
  var t = document.createTextNode(x+" Stars hotels");
  var newcontent = document.createElement('div');
    newcontent.innerHTML = x+"Stars hotels";
     var mydiv = document.getElementById("mydiv");

     while (newcontent.firstChild) {
           mydiv.appendChild(newcontent.firstChild);
       }





}
function Hideoption(){
  var mydiv = document.body.appendChild(h);
  console.log(mydiv);
  mydiv.innerHTML = '';


}
