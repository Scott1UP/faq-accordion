const toggles = document.querySelectorAll(".toggle");
const iconPlus = "images/icon-plus.svg";
const iconMinus = "images/icon-minus.svg";

toggles.forEach(toggle => {
    let isToggled = false;
    toggle.addEventListener("click", event => {
        // Select nearest .answer element and toggle its disabled class
        const answer = toggle.closest(".question").querySelector(".answer");
        answer.classList.toggle("disabled");
        
        // Toggle the icon
        toggle.src = isToggled ? iconPlus : iconMinus;
        isToggled = !isToggled;
    });
});