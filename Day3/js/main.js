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
    var btn = document.getElementById("btn");
      btn.addEventListener("onclick",  myfunction());
      function myfunction()
      {
       btn.style.backgroundColor ="red";
     };




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
function my_func() {
  optionFunction();
  styleFunction();
  showbtn();
}
  function optionFunction(){
    var mydiv = document.getElementById("mydiv");
    var index = document.getElementById("mySelect").selectedIndex;
    var option = document.getElementById("mySelect").options;
    var newcontent = document.createElement('p');
    newcontent.innerHTML =" List of Hotels"+ " " + option[index].text+" "+ ":";
    while (newcontent.firstChild) {
      mydiv.appendChild(newcontent.firstChild);
    }

  }
      function styleFunction(){
        var mydiv = document.getElementById("mydiv");
       mydiv.style.padding="30px 10px 10px 10px";
       mydiv.style.border="3px solid #000";
      }









function Hideoption(){
  var mydiv =document.getElementById("mydiv") ;
  console.log(mydiv);
  mydiv.innerHTML = '';
  mydiv.style.padding="";
  mydiv.style.border="";


}
