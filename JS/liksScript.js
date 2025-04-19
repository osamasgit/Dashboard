const linksApp = document.getElementById("links-app")

const template = `
<div class="title">
<h1>Añade tu enlace de interés</h1>
<img class="icon" src="./assets/iconos/enlace.png" alt="icono enlaces">
</div>
<div class="card">
<input type="text" id="title" placeholder="Título del enlace">
<input type="url" id="url" placeholder="https://">
<button id="btn-add" class="btn">Añadir</button>
</div>
<div id="links-btns"></div>
`

linksApp.innerHTML = template

const title = document.getElementById("title");
const URL = document.getElementById("url");
const btnAdd = document.getElementById("btn-add");
const linksBtns = document.getElementById("links-btns")

const linksList = () => {
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
        const title = localStorage.key(i);
        const url = localStorage.getItem(title);
        list.push({ title: title, url: url });
    }
    return list
}

let links = linksList()

const showLinks = () => {
    linksBtns.innerHTML = ""
    links.forEach((link, i) => {
        linksBtns.innerHTML += 
        `<div class="card">
        <a href="${link.url}" target="_blank"> 
        ${link.title}
        </a>
        <button id=${i} class=delete-btn>x</button> 
        </div>`;
        // el id conicide con el indice del array
    });
    deleteLinks()
}

showLinks()

const updateLinks = () => {
    links = linksList();
    showLinks();
}

const getLinks = () => {
    btnAdd.addEventListener("click", () => {
//garantizo el https por si el usuario escribe la direccion a mano sin él
        if (!URL.value.startsWith("https://")) {
            URL.value = "https://" + URL.value;
        }
        localStorage.setItem(`${title.value}`, URL.value);
        updateLinks();
    })
}

getLinks()

function deleteLinks () {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
//obtengo el titulo del id del boton que se hace click para borrar
            const titleDelete = links[btn.id].title
            localStorage.removeItem(titleDelete);
            updateLinks()
        })
    })
}