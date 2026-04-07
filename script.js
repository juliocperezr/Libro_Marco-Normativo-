let currentPage = 0;
let pages = [];
let menuItems = [];

/* RENDER LIBRO */
function renderBook() {
    
    const book = document.getElementById("book");
    book.innerHTML = "";
    pages = [];
    

    let z = 1000;

    contenido.forEach((tema) => {
        tema.subtemas.forEach((sub) => {

            const page = document.createElement("div");
            page.className = "page";

            page.innerHTML = sub.pagina;

            page.classList.remove("flipped");

            page.style.zIndex = z; // 🔥 CLAVE
            z--;

            book.appendChild(page);
            pages.push(page);
        });
    });
console.log("Total páginas creadas:", pages.length);
}


function updateProgress() {
    const total = pages.length;
    const progreso = Math.round((currentPage / total) * 100);

    const bar = document.getElementById("progressBar");
    const text = document.getElementById("progressText");

    bar.style.width = progreso + "%";
    text.textContent = progreso + "% completado";

    // 💾 Guardar progreso
    localStorage.setItem("bookProgress", currentPage);
}


/* MENU */
function renderMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    menuItems = [];

    let pageIndex = 0;

    contenido.forEach((tema) => {

        const liTema = document.createElement("li");
        liTema.innerHTML = `<strong>${tema.tema}</strong>`;
        liTema.style.cursor = "default";
        menu.appendChild(liTema);

        tema.subtemas.forEach((sub) => {
            const currentIndex = pageIndex;

            const liSub = document.createElement("li");
            liSub.textContent = "• " + sub.titulo;

            liSub.onclick = () => {
                goToPage(currentIndex);
                
            };

            menu.appendChild(liSub);
            menuItems.push(liSub);

            pageIndex++;
        });
    });
}

/* ACTIVO */
function setActiveMenu(selectedItem) {
    menuItems.forEach(item => item.classList.remove("active"));
    selectedItem.classList.add("active");

    selectedItem.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

/* 🔥 FUNCIÓN NUEVA (SOLUCIÓN REAL) */
function goToPage(target) {

console.log("Ir a página:", target);

    pages.forEach((page, index) => {

        // Reset visual limpio
        page.classList.remove("flipped");

        if (index < target) {
            // Páginas ya leídas (giradas)
            page.classList.add("flipped");
            page.style.zIndex = index;
        } else if (index === target) {
            // 🔥 ESTA ES LA PÁGINA ACTUAL (VISIBLE)
            page.style.zIndex = 1000;
        } else {
            // Páginas futuras
            page.style.zIndex = 1000 - index;
        }
    });

    currentPage = target;

    updateActiveByPage();
    updateProgress();
}
/* BOTONES */
function nextPage() {
    if (currentPage < pages.length) {
        currentPage++;
        goToPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        goToPage(currentPage);
    }
}

/* SINCRONIZACIÓN */
function updateActiveByPage() {
    menuItems.forEach(item => item.classList.remove("active"));

    if (menuItems[currentPage]) {
        menuItems[currentPage].classList.add("active");

        menuItems[currentPage].scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function loadProgress() {
    const saved = localStorage.getItem("bookProgress");

    if (saved !== null) {
        currentPage = parseInt(saved);
        goToPage(currentPage);
    }
}



/* INIT */
renderBook();
renderMenu();
loadProgress();
updateProgress();
