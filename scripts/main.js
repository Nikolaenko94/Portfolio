// expansion panel
let my_button = document.getElementById("educ_block"),
    my_education_panel= document.getElementById("educ_panel"),
    my_arrow = document.getElementById("my_arrow");

function expansion_panel(){            
   my_arrow.style.transform = "rotate(180deg)";  
   my_education_panel.style.display="flex";    
}