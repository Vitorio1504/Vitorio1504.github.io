const params = new URLSearchParams(window.location.search);
var pagen = params.get('page');
const prev = document.getElementById("prev");
const next = document.getElementById("next");

document.getElementById(pagen).style.display = "flex";
document.getElementById("page" + pagen).classList.toggle("active")

prev.addEventListener("click", function(){
    pageprev = parseInt(pagen) - 1;
    console.log(pageprev)
    if (pageprev < 1) {
        pageprev = 6;
    }
    window.location.href = "artillery.html?page=" + pageprev;
})
next.addEventListener("click", function(){
    pagenext = parseInt(pagen) + 1;
    if (pagenext > 4) {
        pagenext = 1;
    }
    window.location.href = "artillery.html?page=" + pagenext;
})