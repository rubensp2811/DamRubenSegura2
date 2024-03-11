
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuContainer = document.getElementById("menu-container");

    menuToggle.addEventListener("click", function() {
        menuContainer.classList.toggle("active");
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            menuContainer.classList.remove("active");
        }
    });
});

