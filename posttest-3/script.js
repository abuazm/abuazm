const modeToggle = document.getElementById("mode-mode");
const body = document.body;

modeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        modeToggle.innerText = "Dark Mode";
    } else {
        body.classList.add("dark-mode");
        modeToggle.innerText = "Light Mode";
    }
});

