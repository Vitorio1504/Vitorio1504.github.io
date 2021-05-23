var coll = document.querySelectorAll("div.navbutsublist, div.navbut");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("listactive")
                var panel = this.nextElementSibling;
                if (panel.style.display == "flex") {
                    panel.style.display = "none";
                    this.querySelector("i").classList.add("fa-arrow-right");
                    this.querySelector("i").classList.remove("fa-arrow-down");
                } else {
                    panel.style.display = "flex"
                    this.querySelector("i").classList.remove("fa-arrow-right");
                    this.querySelector("i").classList.add("fa-arrow-down");
                }
            })
        }

        function mobileCheck(size) {
            if (size.matches) {
                window.location.href = "mobile/index_m.html"
            }
        }

        var x = window.matchMedia("(max-width:768px)")
        mobileCheck(x);