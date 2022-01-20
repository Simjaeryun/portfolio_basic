const skipNavi = document.querySelectorAll("#skipNavi li a");

for (const el of skipNavi) {
    el.addEventListener("focusin", e => {
        el.classList.add("on")
    })

    el.addEventListener("focusout", e => {
        el.classList.remove("on")
    })
}