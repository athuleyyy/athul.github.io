// planet filter function
const filter = document.getElementById("planetFilter");

if (filter) {
    filter.addEventListener("change", function () {
        const value = this.value;
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            if (value === "all") {
                card.style.display = "block";
            } else if (card.classList.contains(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// button effect (extra work )
const buttons = document.querySelectorAll(".primary");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});