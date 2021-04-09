function openNav() {
    
    document.getElementById('nav').style.width = "100%";
}

function closeNav() {
    document.getElementById('nav').style.width = "0%";
}

function openNav() {
    
    document.getElementById('nav').style.height = "100%";
}

function closeNav() {
    document.getElementById('nav').style.height = "0%";
}

//Open Tab
function openTab(tab, element, color) {
    
    // Hide all elements with class="tabcontent" by default */
    var index, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (index = 0; index < tabcontent.length; index++) {
        tabcontent[index].style.display = "none";
    }


    // Show the specific tab content
    document.getElementById(tab).style.display = "block";
    
      // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

