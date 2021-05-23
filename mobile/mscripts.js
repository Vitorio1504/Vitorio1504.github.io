        
        function openNav() {
            document.getElementById("sideMenu").style.width = "66%";
        }
        function closeNav() {
            document.getElementById("sideMenu").style.width = "0%";
        }

        var acc = document.querySelectorAll("div.navbut, div.navbutlistbutsub");
var i;


        for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
        panel.style.display = "none"
    } else {
      panel.style.display = "flex";
    }
  });
}