function showMenu(){
    var menuContainer = document.getElementById("menu-container");
    if (menuContainer.style.display == "none" || menuContainer.style.display ==""){
        menuContainer.style.display = "block";
    } else{
        menuContainer.style.display ="none";
    }
}