
// first div
var selectId= document.getElementById('list0');
var selectId2 = document.getElementById("visiblediv");
 
 selectId.addEventListener("mouseover",mousecome);
 selectId2.addEventListener("mouseover",mousecome);
 function mousecome(){
     selectId2.style.display="block";  
 }

 selectId.addEventListener("mouseleave",mousel);
 function mousel(){
    selectId2.style.display="none";  
 }


 // second div
var selectId1= document.getElementById('list1');
var selectId3 = document.getElementById("visible-div1");
 
selectId1.addEventListener("mouseover",mm);
selectId3.addEventListener("mouseover",mm);
 function mm(){
    selectId3.style.display="block";  
 }

 selectId1.addEventListener("mouseleave",mmm);;
 function mmm(){
    selectId3.style.display="none";  
 }


 // third div
var selectId22= document.getElementById('list2');
var selectId4 = document.getElementById("visible-div2");
 
selectId22.addEventListener("mouseover",visible);
 selectId4.addEventListener("mouseover",hide);
 function visible(){
    selectId4.style.display="block";  
 }

 selectId22.addEventListener("mouseleave",hide);
 function hide(){
    selectId4.style.display="none";  
 }


//  forth div

var item= document.getElementById('list3');
var item1 = document.getElementById("visible-div3");
 
item.addEventListener("mouseover",visible1);
item1.addEventListener("mouseover",visible1);
 function visible1(){
    item1.style.display="block";  
 }

 item.addEventListener("mouseleave",hhhh);
 function hhhh(){
    item1.style.display="none";  
 }

 //  fifth div
 var five= document.getElementById('list4');
 var five5 = document.getElementById("visible-div4");
  
 five.addEventListener("mouseover",mousec);
 five5.addEventListener("mouseover",mousec);
  function mousec(){
    five5.style.display="block";  
  }
 
  five.addEventListener("mouseleave",mousell);
  function mousell(){
    five5.style.display="none";  
  }

  //  sixth div
 var sixth= document.getElementById('list5');
 var sixth6 = document.getElementById("visible-div5");
  
 sixth.addEventListener("mouseover",mousecc);
 sixth6.addEventListener("mouseover",mousecc);
  function mousecc(){
    sixth6.style.display="block";  
  }
 
  sixth.addEventListener("mouseleave",mouselll);
  function mouselll(){
    sixth6.style.display="none";  
  }
 
   //  seven div
 var seven= document.getElementById('list6');
 var seven7 = document.getElementById("visible-div6");
  
 seven.addEventListener("mouseover",mouseccc);
 seven7.addEventListener("mouseover",mouseccc);
  function mouseccc(){
    seven7.style.display="block";  
  }
 
  seven.addEventListener("mouseleave",mousellll);
  function mousellll(){
    seven7.style.display="none";  
  }

   //  eight div
 var eight= document.getElementById('list7');
 var eight8 = document.getElementById("visible-div7");
  
 eight.addEventListener("mouseover",mouseccd);
 eight8.addEventListener("mouseover",mouseccd);
  function mouseccd(){
    eight8.style.display="block";  
  }
 
  eight.addEventListener("mouseleave",mousellld);
  function mousellld(){
    eight8.style.display="none";  
  }

   //  nine div
 var nine= document.getElementById('list8');
 var nine9 = document.getElementById("visible-div8");
  
 nine.addEventListener("mouseover",mouseccf);
 nine9.addEventListener("mouseover",mouseccf);
  function mouseccf(){
    nine9.style.display="block";  
  }
 
  nine.addEventListener("mouseleave",mouselllf);
  function mouselllf(){
    nine9.style.display="none";  
  }


   //  ten div
 var ten= document.getElementById('list9');
 var ten10 = document.getElementById("visible-div9");
  
 ten.addEventListener("mouseover",mouseccr);
 ten10.addEventListener("mouseover",mouseccr);
  function mouseccr(){
    ten10.style.display="block";  
  }
 
  ten.addEventListener("mouseleave",mouselllr);
  function mouselllr(){
    ten10.style.display="none";  
  }


   //  eleven div
 var eleven= document.getElementById('list10');
 var eleven11 = document.getElementById("visible-div10");
  
 eleven.addEventListener("mouseover",mouseccs);
 eleven11.addEventListener("mouseover",mouseccs);
  function mouseccs(){
    eleven11.style.display="block";  
  }
 
  eleven.addEventListener("mouseleave",mousellls);
  function mousellls(){
    eleven11.style.display="none";  
  }



  // backgroung change
  selectId.addEventListener("mouseover",bgchange);
  selectId.addEventListener("mouseleave",bgchange1);

  selectId1.addEventListener("mouseover",bgchange);
  selectId1.addEventListener("mouseleave",bgchange1);

  selectId22.addEventListener("mouseover",bgchange);
  selectId22.addEventListener("mouseleave",bgchange1);

  item.addEventListener("mouseover",bgchange);
  item.addEventListener("mouseleave",bgchange1);

  five.addEventListener("mouseover",bgchange);
  five.addEventListener("mouseleave",bgchange1);

  sixth.addEventListener("mouseover",bgchange);
  sixth.addEventListener("mouseleave",bgchange1);

  seven.addEventListener("mouseover",bgchange);
  seven.addEventListener("mouseleave",bgchange1);

  eight.addEventListener("mouseover",bgchange);
  eight.addEventListener("mouseleave",bgchange1);

  nine.addEventListener("mouseover",bgchange);
  nine.addEventListener("mouseleave",bgchange1);

  ten.addEventListener("mouseover",bgchange);
  ten.addEventListener("mouseleave",bgchange1);

  eleven.addEventListener("mouseover",bgchange);
  eleven.addEventListener("mouseleave",bgchange1);
  // document.getElementById("content").addEventListener("mouseover",bgchange);
  function bgchange(){
    document.getElementById("content").style.backgroundColor="#8c8d94";
    document.getElementById("content").style.color="#8c8d94";
  }
  function bgchange1(){
    document.getElementById("content").style.backgroundColor="#ffff";
    document.getElementById("content").style.color="black";
  }