function openTab(evt,tabName){
    var i, tablink, tabcontent;

    //Get all the elements with class tabcontent and hide them.
    tabcontent = document.getElementsByClassName("tabcontent");
    for ( i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("default").click();