    // expansion panel
function expansion_panel(){   
   let display = document.getElementById("educ_panel").style.display;    
   if(display=='none'){
    document.getElementById("educ_panel").style.display="flex";
    document.getElementById("my_arrow").style.transform = "rotate(180deg)";   
   }else{
    document.getElementById("educ_panel").style.display="none";
    document.getElementById("my_arrow").style.transform = "rotate(0deg)";   
   }   
}
