
var tablinks = document.getElementsByClassName("tab-links");
var tabcontaints = document.getElementsByClassName("tab-contains");

function opentab(opentab) {
    //this is "for of" loop used for iterate all the element present in "this writer after "of"


    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }


    for (tabcontaint of tabcontaints) {
        tabconta.classList.remove("active-tab");   //this will iterate to all teh tab-contains
    }

}



var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";               //this will acess right element of sidemenu

}
function closemenu() {
    sidemenu.style.right = "-200";               //this will acess right element of sidemenu

}




