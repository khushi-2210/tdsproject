const togglebtn = document.getElementById("theme-toggle");
const body = document.body;

togglebtn.addEventListener("click", () => {
    if (body.classList.toggle('dark-mode')) {
        togglebtn.textContent = "☀️";
    }

    else {
        togglebtn.textContent = "🌙";
    }
});
