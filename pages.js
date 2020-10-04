const titleBox = document.getElementById("title-box");
const loader = document.getElementById("loader");
const educationalBack = document.getElementById("educationalBack");

/*await new Promise(r => setTimeout(r, 2000));
educationalBack.classList.remove("hidden");*/

function matricDisplay() {
    if (document.getElementById("displayPDF").style.display == "none"){
        document.getElementById("displayPDF").style.display = "block";
    }
    else {
        document.getElementById("displayPDF").style.display = "none";
    }
}

function yearOneDisplay() {
    if (document.getElementById("yearOnePDF").style.display == "none"){
        document.getElementById("yearOnePDF").style.display = "block";
    }
    else {
        document.getElementById("yearOnePDF").style.display = "none";
    }
}

function yearTwoDisplay() {
    if (document.getElementById("yearTwoPDF").style.display == "none"){
        document.getElementById("yearTwoPDF").style.display = "block";
    }
    else {
        document.getElementById("yearTwoPDF").style.display = "none";
    }
}

function yearThreeDisplay() {
    if (document.getElementById("yearThreePDF").style.display == "none"){
        document.getElementById("yearThreePDF").style.display = "block";
    }
    else {
        document.getElementById("yearThreePDF").style.display = "none";
    }
}

 function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  } 
  document.getElementById("defaultOpen").click(); 
  