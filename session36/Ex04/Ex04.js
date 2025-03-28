document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const body = document.body;
    const modeIcon = document.getElementById("mode-icon");

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
        } else {
            localStorage.setItem("darkMode", "disabled");
            modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png";
        }
    });
});
