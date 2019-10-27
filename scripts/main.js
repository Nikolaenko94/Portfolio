    // expansion panel
function expansion_panel(){   
   let display = document.getElementById("educ_panel").style.display;    
   if(display=='none'){
    document.getElementById("educ_panel").style.display="flex";
    document.getElementById("my_arrow").style.transform = "rotate(180deg)";
    document.getElementById("projects").style.top="55%";
    document.getElementById("project_box").style.bottom="85%";   
   }else{
    document.getElementById("educ_panel").style.display="none";
    document.getElementById("my_arrow").style.transform = "rotate(0deg)";
    document.getElementById("projects").style.top="41%";
    document.getElementById("project_box").style.bottom="90%";      
   }   
}
    //functions for two projects with two arrows
 function project_choice(){
     const display_first = document.getElementById("theyalow").style.display,
           display_second =  document.getElementById("repair_design").style.display;
    if(display_first=="block"){
        document.getElementById("theyalow").style.display="none";
        document.getElementById("repair_design").style.display ="block";
    } else{
        document.getElementById("theyalow").style.display="block";
        document.getElementById("repair_design").style.display ="none";
    }      
 }

    