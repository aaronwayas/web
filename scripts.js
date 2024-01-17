function filtrarScripts() {
    const filtro = document.getElementById("filtro").value;
    const scripts = document.querySelectorAll(".script");

    scripts.forEach(script => {
        if (filtro === "todos" || script.classList.contains(filtro)) {
            script.style.display = "block";
        } else {
            script.style.display = "none";
        }
    });
}
