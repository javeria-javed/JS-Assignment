
var points = 0 ;
function myq1(){
 
  let choice=document.getElementsByName("q1");
  for(let i = 0; i < choice.length; i++) {


  if ((choice[i].checked) && (choice[i].value =="Quaid-e-Azam")){
    points +=5;
    document.getElementById("result1").innerHTML
            = "leader chosen : "+choice[i].value + " , so 5 points for this "  ;
            break;
} else {
  document.getElementById("result1").innerHTML= " wrong ans , so 0 points for this"
 }
  } 
} 

function myq2(){
    
     let choicee=document.getElementsByName("q2");
     for(let j = 0; j < choicee.length; j++) {
   
   
     if ((choicee[j].checked) && (choicee[j].value =="Shehbaz Shareef")){
       points +=5;
       document.getElementById("result2").innerHTML
               = " chosen PM : "+choicee[j].value + " , so 5 points for this  ";
               break;
   } else {
    document.getElementById("result2").innerHTML= " wrong ans , so 0 points for this"
   }
     } 
   } 

   function myq3(){
    
    let chooicee=document.getElementsByName("q3");
    for(let k = 0; k < chooicee.length; k++) {
  
  
    if ((chooicee[k].checked) && (chooicee[k].value =="Asia")){
      points +=5;
      document.getElementById("result3").innerHTML
              = " chosen continent : "+chooicee[k].value + " , so 5 points for this  "  ;
              break;
  } else {
    document.getElementById("result3").innerHTML= " wrong ans , so 0 points for this"
   }
    } 

    let finalpoints = document.getElementById("final").innerHTML
            = " your final points out of 15 are : " + points;
  }
