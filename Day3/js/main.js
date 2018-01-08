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
function my_func() {
  optionFunction();
  styleFunction();
  contentFunction();
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
       mydiv.style.fontWeight="bold";
       mydiv.style.fontSize="30px";
      }
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
          var x = document.getElementById("ev").style.display= "block";
        }
      }

      //**clean button Functions**//
      //**********************//
function my_func2() {
 Hideoption();
 Hidecontent();
}


function Hideoption(){
  var mydiv =document.getElementById("mydiv") ;
  console.log(mydiv);
  mydiv.innerHTML = '';
}
function Hidecontent(){
  var empty = document.querySelector("#ev").style.display= "none";
  var empty = document.querySelector("#ev1").style.display= "none";
  var empty = document.querySelector("#ev2").style.display= "none";
  var empty = document.querySelector("#ev3").style.display= "none";

}
